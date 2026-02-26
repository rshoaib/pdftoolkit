import { useState, useCallback } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import { RotateCw, Download, RefreshCw } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

const faqs = [
  { q: 'How do I rotate a PDF?', a: 'Upload your PDF, choose the rotation angle (90°, 180°, or 270°), then click "Rotate & Download". The rotated PDF downloads instantly.' },
  { q: 'Can I rotate individual pages?', a: 'Currently all pages are rotated by the same angle. Upload, rotate, and download — it takes seconds.' },
  { q: 'Are my files uploaded to a server?', a: 'No. All processing happens 100% in your browser. Your files never leave your device.' },
  { q: 'Does rotation affect PDF quality?', a: 'No. Rotation is a lossless operation — text, images, and vectors remain perfectly intact.' },
];

const ROTATION_OPTIONS = [
  { label: '90° Clockwise', value: 90 },
  { label: '180°', value: 180 },
  { label: '90° Counter-clockwise', value: 270 },
];

const RotatePdf = () => {
  const [file, setFile] = useState(null);
  const [rotation, setRotation] = useState(90);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handleFiles = useCallback((files) => {
    const pdf = files.find(f => f.type === 'application/pdf');
    if (pdf) { setFile(pdf); setDone(false); }
  }, []);

  const handleRotate = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const pages = doc.getPages();

      pages.forEach(page => {
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + rotation));
      });

      const pdfBytes = await doc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.replace('.pdf', '-rotated.pdf');
      a.click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      alert('Error rotating PDF: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  const reset = () => { setFile(null); setDone(false); };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Rotate PDF</h1>
        <p className="tool-desc">Rotate all pages in your PDF by 90°, 180°, or 270°. Lossless and instant.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to rotate" />
      ) : (
        <div className="rotate-workspace">
          <div className="rotate-file-info">
            <RotateCw size={24} className="rotate-file-icon" />
            <div className="rotate-file-details">
              <span className="rotate-file-name">{file.name}</span>
              <span className="rotate-file-size">{(file.size / 1024).toFixed(0)} KB</span>
            </div>
            <button className="btn-secondary" onClick={reset} style={{ marginLeft: 'auto' }}>
              <RefreshCw size={14} /> Change File
            </button>
          </div>

          <div className="rotate-options">
            <label className="rotate-label">Rotation Angle</label>
            <div className="rotate-buttons">
              {ROTATION_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  className={`rotate-option ${rotation === opt.value ? 'rotate-option-active' : ''}`}
                  onClick={() => setRotation(opt.value)}
                >
                  <RotateCw size={16} style={{ transform: `rotate(${opt.value}deg)` }} />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rotate-actions">
            <button
              className="btn-primary"
              onClick={handleRotate}
              disabled={processing}
            >
              <Download size={18} />
              {processing ? 'Rotating...' : done ? '✓ Done! Download Again' : 'Rotate & Download'}
            </button>
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .rotate-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }
        .rotate-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .rotate-file-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .rotate-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .rotate-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rotate-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .rotate-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .rotate-label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .rotate-buttons {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }
        .rotate-option {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          transition: var(--transition-fast);
          cursor: pointer;
        }
        .rotate-option:hover {
          border-color: var(--border-active);
          color: var(--text-main);
        }
        .rotate-option-active {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-glow);
        }
        .rotate-actions {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 520px) {
          .rotate-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default RotatePdf;
