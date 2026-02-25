import { useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Download, Image as ImageIcon } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

const faqs = [
  { q: 'What image formats can I export to?', a: 'You can export PDF pages as PNG (lossless, best quality) or JPEG (smaller file size).' },
  { q: 'Can I set the resolution/DPI?', a: 'Yes! Choose from 72 DPI (screen), 150 DPI (standard), or 300 DPI (print quality).' },
  { q: 'How do I download all pages at once?', a: 'Click "Download All as ZIP" to get all pages packed into a single ZIP archive.' },
  { q: 'Is there a page limit?', a: 'No limit. However, very large PDFs (500+ pages) may take longer to process.' },
];

const DPI_OPTIONS = [
  { label: '72 DPI (Screen)', scale: 1 },
  { label: '150 DPI (Standard)', scale: 2 },
  { label: '300 DPI (Print)', scale: 4 },
];

const PdfToImage = () => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState([]);
  const [format, setFormat] = useState('png');
  const [dpiIndex, setDpiIndex] = useState(1);
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFiles = useCallback((newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (pdf) { setFile(pdf); setPages([]); setProgress(0); }
  }, []);

  const handleConvert = async () => {
    if (!file) return;
    setConverting(true);
    setPages([]);
    setProgress(0);

    try {
      const bytes = await file.arrayBuffer();
      const doc = await pdfjsLib.getDocument({ data: bytes }).promise;
      const scale = DPI_OPTIONS[dpiIndex].scale;
      const results = [];

      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const vp = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = vp.width;
        canvas.height = vp.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: vp }).promise;

        const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
        const quality = format === 'jpeg' ? 0.92 : undefined;
        const dataUrl = canvas.toDataURL(mimeType, quality);
        results.push({ dataUrl, pageNum: i });
        setProgress(Math.round((i / doc.numPages) * 100));
      }

      setPages(results);
    } catch (err) {
      alert('Error converting PDF: ' + err.message);
    } finally {
      setConverting(false);
    }
  };

  const downloadPage = (page) => {
    const a = document.createElement('a');
    a.href = page.dataUrl;
    a.download = `page_${page.pageNum}.${format}`;
    a.click();
  };

  const downloadAllZip = async () => {
    const zip = new JSZip();
    for (const page of pages) {
      const response = await fetch(page.dataUrl);
      const blob = await response.blob();
      zip.file(`page_${page.pageNum}.${format}`, blob);
    }
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${file.name.replace('.pdf', '')}_images.zip`);
  };

  const reset = () => {
    setFile(null);
    setPages([]);
    setProgress(0);
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">PDF to Image</h1>
        <p className="tool-desc">Convert PDF pages to high-quality JPG or PNG images.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to convert" />
      ) : (
        <div className="convert-workspace">
          <div className="convert-controls">
            <div className="control-group">
              <label className="control-label">Format</label>
              <div className="toggle-group">
                <button className={`toggle-btn ${format === 'png' ? 'toggle-active' : ''}`} onClick={() => setFormat('png')}>PNG</button>
                <button className={`toggle-btn ${format === 'jpeg' ? 'toggle-active' : ''}`} onClick={() => setFormat('jpeg')}>JPEG</button>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Resolution</label>
              <div className="toggle-group">
                {DPI_OPTIONS.map((opt, i) => (
                  <button key={i} className={`toggle-btn ${dpiIndex === i ? 'toggle-active' : ''}`} onClick={() => setDpiIndex(i)}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {pages.length === 0 && (
            <div className="convert-start">
              {converting ? (
                <div className="progress-section">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="progress-text">Converting... {progress}%</p>
                </div>
              ) : (
                <button className="btn-primary" onClick={handleConvert}>
                  <ImageIcon size={18} /> Convert to {format.toUpperCase()}
                </button>
              )}
            </div>
          )}

          {pages.length > 0 && (
            <>
              <div className="page-grid">
                {pages.map(page => (
                  <div key={page.pageNum} className="page-card" onClick={() => downloadPage(page)}>
                    <img src={page.dataUrl} alt={`Page ${page.pageNum}`} className="page-img" />
                    <div className="page-label">
                      <Download size={14} /> Page {page.pageNum}
                    </div>
                  </div>
                ))}
              </div>
              <div className="convert-actions">
                <button className="btn-secondary" onClick={reset}>← Convert Another</button>
                <button className="btn-primary" onClick={downloadAllZip}>
                  <Download size={18} /> Download All as ZIP
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }
        .convert-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .convert-controls {
          display: flex; gap: var(--spacing-xl); flex-wrap: wrap;
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .control-group { display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .control-label { font-weight: 600; font-size: 0.9rem; }
        .toggle-group { display: flex; gap: var(--spacing-xs); }
        .toggle-btn {
          padding: 8px 16px; border: 1px solid var(--border-light);
          border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 500;
          background: var(--bg-surface); color: var(--text-muted); transition: var(--transition-fast);
        }
        .toggle-btn:hover { border-color: var(--border-active); }
        .toggle-active { border-color: var(--primary); color: var(--primary); background: var(--primary-glow); }
        .convert-start { display: flex; justify-content: center; }
        .progress-section { width: 100%; max-width: 400px; margin: 0 auto; }
        .progress-bar {
          height: 8px; background: var(--bg-surface); border-radius: var(--radius-full); overflow: hidden;
        }
        .progress-fill {
          height: 100%; background: var(--gradient); border-radius: var(--radius-full);
          transition: width 0.3s ease;
        }
        .progress-text { text-align: center; margin-top: 8px; color: var(--text-muted); font-size: 0.9rem; }
        .page-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: var(--spacing-md);
        }
        .page-card {
          cursor: pointer; border: 1px solid var(--border-light);
          border-radius: var(--radius-md); overflow: hidden;
          background: var(--bg-panel); transition: var(--transition-fast);
        }
        .page-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
        .page-img { width: 100%; display: block; }
        .page-label {
          display: flex; align-items: center; gap: 4px; justify-content: center;
          padding: 8px; font-size: 0.8rem; font-weight: 600; color: var(--text-muted);
        }
        .page-card:hover .page-label { color: var(--primary); }
        .convert-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
      `}</style>
    </div>
  );
};

export default PdfToImage;
