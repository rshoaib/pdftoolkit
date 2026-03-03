import { useState, useCallback, useEffect, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { Download, Trash2, Copy, GripVertical, RotateCcw } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

const faqs = [
  { q: 'How do I rearrange PDF pages?', a: 'Upload your PDF, then drag and drop the page thumbnails into the order you want. Click "Save & Download" when you\'re done.' },
  { q: 'Can I delete specific pages?', a: 'Yes! Click the trash icon on any page thumbnail to remove it from the document.' },
  { q: 'Can I duplicate a page?', a: 'Absolutely. Click the copy icon on a page thumbnail to insert a duplicate right after it.' },
  { q: 'Does this affect the original quality?', a: 'No. Pages are copied byte-for-byte — no re-encoding, compression, or quality loss occurs.' },
];

const OrganizePdf = () => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState([]);       // { id, originalIndex, thumbnail }
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pdfBytes, setPdfBytes] = useState(null);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleFiles = useCallback((newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (pdf) {
      setFile(pdf);
      setPages([]);
    }
  }, []);

  // Load PDF and generate thumbnails
  useEffect(() => {
    if (!file) return;
    let cancelled = false;

    const loadPdf = async () => {
      setLoading(true);
      const bytes = await file.arrayBuffer();
      setPdfBytes(new Uint8Array(bytes));
      const doc = await pdfjsLib.getDocument({ data: bytes }).promise;

      const loaded = [];
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const vp = page.getViewport({ scale: 0.3 });
        const canvas = document.createElement('canvas');
        canvas.width = vp.width;
        canvas.height = vp.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
        loaded.push({
          id: `page-${i}-${Date.now()}`,
          originalIndex: i - 1,
          thumbnail: canvas.toDataURL('image/jpeg', 0.7),
          label: `Page ${i}`,
        });
        if (cancelled) return;
      }
      setPages(loaded);
      setLoading(false);
    };

    loadPdf().catch((err) => {
      console.error(err);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [file]);

  // ── Drag and drop handlers ────────────────────────────────
  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    const from = dragItem.current;
    const to = dragOverItem.current;
    if (from === to) { dragItem.current = null; dragOverItem.current = null; return; }
    setPages(prev => {
      const updated = [...prev];
      const [removed] = updated.splice(from, 1);
      updated.splice(to, 0, removed);
      return updated;
    });
    dragItem.current = null;
    dragOverItem.current = null;
  };

  // ── Page actions ──────────────────────────────────────────
  const deletePage = (index) => {
    if (pages.length <= 1) return;          // keep at least 1 page
    setPages(prev => prev.filter((_, i) => i !== index));
  };

  const duplicatePage = (index) => {
    setPages(prev => {
      const copy = { ...prev[index], id: `page-dup-${Date.now()}-${index}` };
      const updated = [...prev];
      updated.splice(index + 1, 0, copy);
      return updated;
    });
  };

  // ── Save & Download ───────────────────────────────────────
  const handleSave = async () => {
    if (pages.length === 0 || !pdfBytes) return;
    setSaving(true);
    try {
      const srcDoc = await PDFDocument.load(pdfBytes);
      const newDoc = await PDFDocument.create();
      const indices = pages.map(p => p.originalIndex);
      const copiedPages = await newDoc.copyPages(srcDoc, indices);
      copiedPages.forEach(p => newDoc.addPage(p));
      const outBytes = await newDoc.save();
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `organized_${file.name}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Error saving PDF: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPages([]);
    setPdfBytes(null);
    setLoading(false);
  };

  return (
    <div className="tool-page">
      <SEO
        title="Organize PDF — Rearrange, Delete & Duplicate Pages Online | Tiny PDF Tools"
        description="Drag and drop to reorder PDF pages, delete unwanted pages, or duplicate them. 100% free, no uploads, runs in your browser."
        schemaType="WebApplication"
        schemaData={{
          name: 'Organize PDF',
          url: 'https://tinypdftools.com/organize-pdf',
          applicationCategory: 'Utility',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Drag and drop to reorder PDF pages, delete unwanted pages, or duplicate them. 100% free and private.',
        }}
      />

      <div className="tool-header">
        <h1 className="tool-title">Organize PDF</h1>
        <p className="tool-desc">Drag &amp; drop to rearrange pages, delete or duplicate — then download your reorganized PDF.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to organize pages" />
      ) : loading ? (
        <div className="org-loading">
          <div className="org-spinner" />
          <p>Loading page previews…</p>
        </div>
      ) : (
        <div className="org-workspace">
          <div className="org-controls">
            <div className="org-info">
              <span className="org-filename">{file.name}</span>
              <span className="org-pages">{pages.length} pages</span>
            </div>
          </div>

          <div className="org-grid">
            {pages.map((page, i) => (
              <div
                key={page.id}
                className="org-card"
                draggable
                onDragStart={() => handleDragStart(i)}
                onDragEnter={() => handleDragEnter(i)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="org-card-grip"><GripVertical size={16} /></div>
                <img src={page.thumbnail} alt={page.label} className="org-card-img" />
                <div className="org-card-footer">
                  <span className="org-card-label">{page.label}</span>
                  <div className="org-card-actions">
                    <button title="Duplicate page" className="org-action-btn" onClick={() => duplicatePage(i)}>
                      <Copy size={14} />
                    </button>
                    <button title="Delete page" className="org-action-btn org-action-delete" onClick={() => deletePage(i)} disabled={pages.length <= 1}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="org-actions">
            <button className="btn-secondary" onClick={reset}><RotateCcw size={16} /> Choose Different File</button>
            <button className="btn-primary" onClick={handleSave} disabled={pages.length === 0 || saving}>
              <Download size={18} />
              {saving ? 'Saving…' : `Save & Download (${pages.length} pages)`}
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

        /* Loading */
        .org-loading {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          padding: var(--spacing-xxl); color: var(--text-muted);
        }
        .org-spinner {
          width: 40px; height: 40px; border: 3px solid var(--border-light);
          border-top-color: var(--primary); border-radius: 50%;
          animation: org-spin 0.8s linear infinite;
        }
        @keyframes org-spin { to { transform: rotate(360deg); } }

        /* Workspace */
        .org-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .org-controls {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .org-info { display: flex; justify-content: space-between; align-items: center; }
        .org-filename { font-weight: 700; font-size: 1.05rem; }
        .org-pages { color: var(--text-muted); font-size: 0.9rem; }

        /* Grid */
        .org-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: var(--spacing-md);
        }

        /* Card */
        .org-card {
          position: relative; cursor: grab;
          border: 2px solid var(--border-light); border-radius: var(--radius-md);
          overflow: hidden; transition: var(--transition-fast);
          background: var(--bg-panel);
        }
        .org-card:hover { border-color: var(--border-active); transform: translateY(-2px); box-shadow: var(--shadow-glow); }
        .org-card:active { cursor: grabbing; }

        .org-card-grip {
          position: absolute; top: 6px; left: 6px;
          color: var(--text-dim); opacity: 0.6;
          background: var(--bg-panel); border-radius: 4px; padding: 2px;
        }

        .org-card-img { width: 100%; display: block; pointer-events: none; }

        .org-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 8px; font-size: 0.8rem; font-weight: 600; color: var(--text-muted);
        }

        .org-card-actions { display: flex; gap: 4px; }

        .org-action-btn {
          display: flex; align-items: center; justify-content: center;
          width: 26px; height: 26px; border-radius: var(--radius-sm);
          color: var(--text-muted); background: var(--bg-surface);
          border: 1px solid var(--border-light); cursor: pointer;
          transition: var(--transition-fast);
        }
        .org-action-btn:hover { color: var(--primary); border-color: var(--primary); }
        .org-action-delete:hover { color: #ef4444; border-color: #ef4444; }
        .org-action-btn:disabled { opacity: 0.3; pointer-events: none; }

        .org-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .org-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
        }
      `}</style>
    </div>
  );
};

export default OrganizePdf;
