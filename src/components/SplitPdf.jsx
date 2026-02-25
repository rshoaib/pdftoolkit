import { useState, useCallback, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { Download, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

const faqs = [
  { q: 'How do I split a PDF?', a: 'Upload your PDF, select the pages you want to extract using the visual previews, then click "Split & Download". A new PDF with only your selected pages will be created.' },
  { q: 'Can I extract a single page?', a: 'Yes! Just click on one page thumbnail to select it and split. You can also select multiple individual pages.' },
  { q: 'Will splitting reduce quality?', a: 'No. Pages are copied exactly as-is — no re-encoding or quality loss occurs.' },
  { q: 'What is the page range format?', a: 'You can enter ranges like "1-3, 5, 7-10" to select specific pages.' },
];

const SplitPdf = () => {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [thumbnails, setThumbnails] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [splitting, setSplitting] = useState(false);
  const [rangeText, setRangeText] = useState('');

  const handleFiles = useCallback((newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (pdf) {
      setFile(pdf);
      setSelected(new Set());
      setRangeText('');
    }
  }, []);

  useEffect(() => {
    if (!file) return;
    let cancelled = false;

    const loadPdf = async () => {
      const bytes = await file.arrayBuffer();
      const doc = await pdfjsLib.getDocument({ data: bytes }).promise;
      setPageCount(doc.numPages);

      const thumbs = [];
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const vp = page.getViewport({ scale: 0.3 });
        const canvas = document.createElement('canvas');
        canvas.width = vp.width;
        canvas.height = vp.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
        thumbs.push(canvas.toDataURL('image/jpeg', 0.7));
        if (cancelled) return;
      }
      setThumbnails(thumbs);
    };

    loadPdf().catch(console.error);
    return () => { cancelled = true; };
  }, [file]);

  const togglePage = (index) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const selectAll = () => {
    const all = new Set();
    for (let i = 0; i < pageCount; i++) all.add(i);
    setSelected(all);
  };

  const parseRange = () => {
    if (!rangeText.trim()) return;
    const newSel = new Set();
    const parts = rangeText.split(',');
    for (const part of parts) {
      const trimmed = part.trim();
      if (trimmed.includes('-')) {
        const [a, b] = trimmed.split('-').map(Number);
        for (let i = a; i <= b && i <= pageCount; i++) {
          if (i >= 1) newSel.add(i - 1);
        }
      } else {
        const n = Number(trimmed);
        if (n >= 1 && n <= pageCount) newSel.add(n - 1);
      }
    }
    setSelected(newSel);
  };

  const handleSplit = async () => {
    if (selected.size === 0 || !file) return;
    setSplitting(true);
    try {
      const bytes = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(bytes);
      const newDoc = await PDFDocument.create();
      const indices = [...selected].sort((a, b) => a - b);
      const pages = await newDoc.copyPages(srcDoc, indices);
      pages.forEach(p => newDoc.addPage(p));
      const pdfBytes = await newDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `split_${file.name}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Error splitting PDF: ' + err.message);
    } finally {
      setSplitting(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPageCount(0);
    setThumbnails([]);
    setSelected(new Set());
    setRangeText('');
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Split PDF</h1>
        <p className="tool-desc">Select pages to extract from your PDF document.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to split" />
      ) : (
        <div className="split-workspace">
          <div className="split-controls">
            <div className="split-info">
              <span className="split-filename">{file.name}</span>
              <span className="split-pages">{pageCount} pages • {selected.size} selected</span>
            </div>
            <div className="split-range">
              <input
                type="text"
                placeholder="e.g. 1-3, 5, 7-10"
                value={rangeText}
                onChange={(e) => setRangeText(e.target.value)}
                className="range-input"
              />
              <button className="btn-secondary" onClick={parseRange}>Apply Range</button>
              <button className="btn-secondary" onClick={selectAll}>Select All</button>
              <button className="btn-secondary" onClick={() => setSelected(new Set())}>Clear</button>
            </div>
          </div>

          <div className="thumb-grid">
            {thumbnails.map((thumb, i) => (
              <div
                key={i}
                className={`thumb-card ${selected.has(i) ? 'thumb-selected' : ''}`}
                onClick={() => togglePage(i)}
              >
                <img src={thumb} alt={`Page ${i + 1}`} className="thumb-img" />
                <div className="thumb-label">
                  {selected.has(i) && <Check size={14} />}
                  Page {i + 1}
                </div>
              </div>
            ))}
            {thumbnails.length === 0 && pageCount > 0 && (
              <p className="loading-text">Loading page previews…</p>
            )}
          </div>

          <div className="split-actions">
            <button className="btn-secondary" onClick={reset}>← Choose Different File</button>
            <button className="btn-primary" onClick={handleSplit} disabled={selected.size === 0 || splitting}>
              <Download size={18} />
              {splitting ? 'Splitting...' : `Split & Download (${selected.size} pages)`}
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
        .split-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .split-controls {
          display: flex; flex-direction: column; gap: var(--spacing-md);
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .split-info { display: flex; justify-content: space-between; align-items: center; }
        .split-filename { font-weight: 700; font-size: 1.05rem; }
        .split-pages { color: var(--text-muted); font-size: 0.9rem; }
        .split-range { display: flex; gap: var(--spacing-sm); flex-wrap: wrap; }
        .range-input {
          flex: 1; min-width: 160px; padding: 8px 14px;
          border: 1px solid var(--border-light); border-radius: var(--radius-sm);
          background: var(--bg-surface); color: var(--text-main);
          font-family: inherit; font-size: 0.95rem;
        }
        .range-input:focus { outline: none; border-color: var(--primary); }
        .thumb-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: var(--spacing-md);
        }
        .thumb-card {
          cursor: pointer; border: 2px solid var(--border-light);
          border-radius: var(--radius-md); overflow: hidden;
          transition: var(--transition-fast); background: var(--bg-panel);
        }
        .thumb-card:hover { border-color: var(--border-active); transform: translateY(-2px); }
        .thumb-selected { border-color: var(--primary); box-shadow: var(--shadow-glow); }
        .thumb-img { width: 100%; display: block; }
        .thumb-label {
          display: flex; align-items: center; gap: 4px; justify-content: center;
          padding: 6px; font-size: 0.8rem; font-weight: 600;
          color: var(--text-muted);
        }
        .thumb-selected .thumb-label { color: var(--primary); }
        .split-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
        .loading-text { grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: var(--spacing-xl); }
      `}</style>
    </div>
  );
};

export default SplitPdf;
