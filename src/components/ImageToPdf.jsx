import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Download, GripVertical, Trash2, Plus, FileImage } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

const faqs = [
  { q: 'What image formats are supported?', a: 'You can upload JPG, JPEG, PNG, and WebP images. They will be automatically embedded into the PDF.' },
  { q: 'Can I choose the page size?', a: 'Yes! Choose between A4, US Letter, or "Fit to Image" which sizes each page exactly to the image dimensions.' },
  { q: 'Can I reorder images before creating the PDF?', a: 'Yes, use the arrow buttons on each image card to rearrange the order before generating your PDF.' },
  { q: 'Is there a limit to how many images I can add?', a: 'No hard limit — it depends on your browser memory. Typically 50+ images work fine.' },
];

const PAGE_SIZES = {
  a4: { name: 'A4', width: 595.28, height: 841.89 },
  letter: { name: 'US Letter', width: 612, height: 792 },
  fit: { name: 'Fit to Image', width: 0, height: 0 },
};

const ImageToPdf = () => {
  const [images, setImages] = useState([]);
  const [pageSize, setPageSize] = useState('a4');
  const [creating, setCreating] = useState(false);

  const handleFiles = useCallback((newFiles) => {
    const imgFiles = newFiles.filter(f => f.type.startsWith('image/'));
    const newImages = imgFiles.map(f => ({
      file: f,
      preview: URL.createObjectURL(f),
      name: f.name,
      size: f.size,
    }));
    setImages(prev => [...prev, ...newImages]);
  }, []);

  const removeImage = (index) => {
    setImages(prev => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const moveImage = (from, to) => {
    setImages(prev => {
      const copy = [...prev];
      const [item] = copy.splice(from, 1);
      copy.splice(to, 0, item);
      return copy;
    });
  };

  const handleCreate = async () => {
    if (images.length === 0) return;
    setCreating(true);

    try {
      const doc = await PDFDocument.create();

      for (const img of images) {
        const bytes = await img.file.arrayBuffer();
        let embedded;

        if (img.file.type === 'image/png') {
          embedded = await doc.embedPng(bytes);
        } else {
          // JPG, WebP — convert to JPEG if needed
          if (img.file.type === 'image/webp') {
            const bitmap = await createImageBitmap(img.file);
            const canvas = document.createElement('canvas');
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(bitmap, 0, 0);
            const jpegBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.92));
            const jpegBytes = await jpegBlob.arrayBuffer();
            embedded = await doc.embedJpg(new Uint8Array(jpegBytes));
          } else {
            embedded = await doc.embedJpg(bytes);
          }
        }

        const imgWidth = embedded.width;
        const imgHeight = embedded.height;

        let pageWidth, pageHeight;
        if (pageSize === 'fit') {
          pageWidth = imgWidth;
          pageHeight = imgHeight;
        } else {
          const ps = PAGE_SIZES[pageSize];
          pageWidth = ps.width;
          pageHeight = ps.height;
        }

        const page = doc.addPage([pageWidth, pageHeight]);

        if (pageSize === 'fit') {
          page.drawImage(embedded, { x: 0, y: 0, width: imgWidth, height: imgHeight });
        } else {
          // Scale to fit with margins
          const margin = 36; // 0.5 inch
          const maxW = pageWidth - margin * 2;
          const maxH = pageHeight - margin * 2;
          const scale = Math.min(maxW / imgWidth, maxH / imgHeight, 1);
          const w = imgWidth * scale;
          const h = imgHeight * scale;
          const x = (pageWidth - w) / 2;
          const y = (pageHeight - h) / 2;
          page.drawImage(embedded, { x, y, width: w, height: h });
        }
      }

      const pdfBytes = await doc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'images.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Error creating PDF: ' + err.message);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Image to PDF</h1>
        <p className="tool-desc">Combine your images into a single PDF document.</p>
      </div>

      {images.length === 0 ? (
        <DropZone
          onFiles={handleFiles}
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          label="Drop your images here (JPG, PNG, WebP)"
        />
      ) : (
        <div className="img2pdf-workspace">
          <div className="img2pdf-controls">
            <div className="control-group">
              <label className="control-label">Page Size</label>
              <div className="toggle-group">
                {Object.entries(PAGE_SIZES).map(([key, val]) => (
                  <button
                    key={key}
                    className={`toggle-btn ${pageSize === key ? 'toggle-active' : ''}`}
                    onClick={() => setPageSize(key)}
                  >
                    {val.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="img-grid">
            {images.map((img, i) => (
              <div key={`${img.name}-${i}`} className="img-card">
                <img src={img.preview} alt={img.name} className="img-card-preview" />
                <div className="img-card-overlay">
                  <span className="img-card-num">{i + 1}</span>
                  <div className="img-card-btns">
                    {i > 0 && <button onClick={() => moveImage(i, i - 1)} title="Move left">←</button>}
                    {i < images.length - 1 && <button onClick={() => moveImage(i, i + 1)} title="Move right">→</button>}
                    <button onClick={() => removeImage(i)} title="Remove" className="img-delete-btn">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="img2pdf-actions">
            <button className="btn-secondary" onClick={() => document.querySelector('.add-img-input').click()}>
              <Plus size={16} /> Add More
            </button>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
              multiple
              className="sr-only add-img-input"
              onChange={(e) => { handleFiles([...e.target.files]); e.target.value = ''; }}
            />
            <button className="btn-primary" onClick={handleCreate} disabled={creating}>
              <Download size={18} />
              {creating ? 'Creating PDF...' : `Create PDF (${images.length} images)`}
            </button>
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }
        .img2pdf-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .img2pdf-controls {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .control-group { display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .control-label { font-weight: 600; font-size: 0.9rem; }
        .toggle-group { display: flex; gap: var(--spacing-xs); flex-wrap: wrap; }
        .toggle-btn {
          padding: 8px 16px; border: 1px solid var(--border-light);
          border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 500;
          background: var(--bg-surface); color: var(--text-muted); transition: var(--transition-fast);
        }
        .toggle-btn:hover { border-color: var(--border-active); }
        .toggle-active { border-color: var(--primary); color: var(--primary); background: var(--primary-glow); }
        .img-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: var(--spacing-md);
        }
        .img-card {
          position: relative; border: 1px solid var(--border-light);
          border-radius: var(--radius-md); overflow: hidden;
          aspect-ratio: 3/4; background: var(--bg-surface);
        }
        .img-card-preview {
          width: 100%; height: 100%; object-fit: cover;
        }
        .img-card-overlay {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          justify-content: space-between; padding: 8px;
          background: linear-gradient(transparent 50%, rgba(0,0,0,0.5));
          opacity: 0; transition: var(--transition-fast);
        }
        .img-card:hover .img-card-overlay { opacity: 1; }
        .img-card-num {
          background: var(--primary); color: #fff;
          width: 24px; height: 24px; display: flex;
          align-items: center; justify-content: center;
          border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700;
        }
        .img-card-btns {
          display: flex; gap: 4px; justify-content: flex-end;
        }
        .img-card-btns button {
          width: 28px; height: 28px; display: flex;
          align-items: center; justify-content: center;
          background: rgba(255,255,255,0.9); color: #333;
          border-radius: var(--radius-sm); font-size: 0.8rem;
          font-weight: 700;
        }
        .img-delete-btn:hover { background: var(--error) !important; color: #fff !important; }
        .img2pdf-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
      `}</style>
    </div>
  );
};

export default ImageToPdf;
