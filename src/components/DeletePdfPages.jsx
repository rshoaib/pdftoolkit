"use client";
import { useState, useCallback, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import {  Download, Trash2, RotateCcw, CheckSquare, Square  } from 'lucide-react';
import { useToast } from './ToastContext';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';
import AdSlot from './AdSlot';
import RelatedTools from './RelatedTools';
import ToolIntro from './ToolIntro';

if (typeof window !== 'undefined') { pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'; }

const faqs = [
  { q: 'How do I delete pages from a PDF?', a: 'Upload your PDF, click the pages you want to remove (they\'ll be highlighted in red), then click "Delete Selected & Download".' },
  { q: 'Will this reduce the quality of my PDF?', a: 'No. Remaining pages are copied byte-for-byte — zero re-encoding, zero quality loss.' },
  { q: 'Can I undo a deletion?', a: 'Your original file is never modified. If you make a mistake, simply upload the original file again.' },
  { q: 'Is there a page limit?', a: 'No hard limits. Since everything runs in your browser, performance depends on your device.' },
  { q: 'Do my files get uploaded?', a: 'Never. All processing happens 100% in your browser — your files never leave your device.' },
];

const DeletePdfPages = () => {
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pdfBytes, setPdfBytes] = useState(null);

  const handleFiles = useCallback((newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (pdf) {
      setFile(pdf);
      setPages([]);
      setSelected(new Set());
    }
  }, []);

  useEffect(() => {
    if (!file) return;
    let cancelled = false;

    const loadPdf = async () => {
      setLoading(true);
      const bytes = await file.arrayBuffer();
      setPdfBytes(new Uint8Array(bytes));
      const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
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
          index: i - 1,
          thumbnail: canvas.toDataURL('image/jpeg', 0.7),
          label: `Page ${i}`,
        });
        if (cancelled) return;
      }
      setPages(loaded);
      setLoading(false);
    };

    loadPdf().catch((err) => { console.error(err); setLoading(false); });
    return () => { cancelled = true; };
  }, [file]);

  const togglePage = (index) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const selectAll = () => {
    if (selected.size === pages.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(pages.map(p => p.index)));
    }
  };

  const handleDelete = async () => {
    if (selected.size === 0 || selected.size === pages.length || !pdfBytes) return;
    setSaving(true);
    try {
      const srcDoc = await PDFDocument.load(pdfBytes);
      const newDoc = await PDFDocument.create();
      const keepIndices = pages.filter(p => !selected.has(p.index)).map(p => p.index);
      const copiedPages = await newDoc.copyPages(srcDoc, keepIndices);
      copiedPages.forEach(p => newDoc.addPage(p));
      const outBytes = await newDoc.save();
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `trimmed_${file.name}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const reset = () => { setFile(null); setPages([]); setSelected(new Set()); setPdfBytes(null); };

  const remaining = pages.length - selected.size;

  return (
    <div className="tool-page">
      <SEO
        title="Delete PDF Pages — Remove Pages from PDF Online for Free | Tiny PDF Tools"
        description="Remove unwanted pages from your PDF in seconds. Click to select, download the trimmed file. 100% free, no uploads — runs in your browser."
        canonicalUrl="https://tinypdftools.com/delete-pdf-pages"
        schemaType="WebApplication"
        schemaData={{
          name: 'Delete PDF Pages',
          url: 'https://tinypdftools.com/delete-pdf-pages',
          applicationCategory: 'Utility',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Remove unwanted pages from your PDF. 100% free and private.',
        }}
      />

      <div className="tool-header">
        <h1 className="tool-title">Delete PDF Pages</h1>
        <p className="tool-desc">Select the pages you want to remove, then download your trimmed PDF.</p>
      </div>

      <ToolIntro
        paragraphs={['Remove unwanted pages from your PDF document. Browse page thumbnails, click to select the pages you want to remove, and download a clean copy with those pages stripped out.', 'This is the fastest way to eliminate blank pages, duplicate sections, cover pages, or any content you do not need. The original document is never modified — you always download a new, trimmed copy. Processing is instant and fully browser-based.']}
        bestFor={['Removing blank pages', 'Stripping cover pages', 'Cleaning scanned documents', 'Trimming appendices']}
      />

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to remove pages" />
      ) : loading ? (
        <div className="del-loading">
          <div className="del-spinner" />
          <p>Loading page previews…</p>
        </div>
      ) : (
        <div className="del-workspace">
          <div className="del-controls">
            <div className="del-info">
              <span className="del-filename">{file.name}</span>
              <span className="del-stats">
                {selected.size > 0 ? (
                  <><strong style={{ color: '#ef4444' }}>{selected.size} to delete</strong> · {remaining} remaining</>
                ) : (
                  <>{pages.length} pages — click pages to mark for deletion</>
                )}
              </span>
            </div>
            <button className="btn-secondary btn-sm" onClick={selectAll}>
              {selected.size === pages.length ? <><Square size={14} /> Deselect All</> : <><CheckSquare size={14} /> Select All</>}
            </button>
          </div>

          <div className="del-grid">
            {pages.map((page) => (
              <div
                key={page.index}
                className={`del-card ${selected.has(page.index) ? 'del-card-selected' : ''}`}
                onClick={() => togglePage(page.index)}
              >
                <img src={page.thumbnail} alt={page.label} className="del-card-img" />
                <div className="del-card-footer">
                  <span className="del-card-label">{page.label}</span>
                  {selected.has(page.index) ? (
                    <Trash2 size={14} style={{ color: '#ef4444' }} />
                  ) : null}
                </div>
                {selected.has(page.index) && <div className="del-card-overlay">✕</div>}
              </div>
            ))}
          </div>

          <div className="del-actions">
            <button className="btn-secondary" onClick={reset}><RotateCcw size={16} /> Choose Different File</button>
            <button
              className="btn-primary"
              onClick={handleDelete}
              disabled={selected.size === 0 || selected.size === pages.length || saving}
            >
              <Download size={18} />
              {saving ? 'Processing…' : `Delete ${selected.size} Page${selected.size !== 1 ? 's' : ''} & Download`}
            </button>
          </div>
          {selected.size === pages.length && pages.length > 0 && (
            <p style={{ textAlign: 'center', color: '#ef4444', fontSize: '0.9rem' }}>
              You cannot delete all pages. Deselect at least one page to keep.
            </p>
          )}
        </div>
      )}

      
      {/* Ad slot immediately below workspace */}
      <AdSlot format="responsive" slot={process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE || ''} className="tool-inline-ad" />

      <FAQSection faqs={faqs} />

      <RelatedTools currentToolId="delete-pdf-pages" />

      <style>{`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }

        .del-loading {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          padding: var(--spacing-xxl); color: var(--text-muted);
        }
        .del-spinner {
          width: 40px; height: 40px; border: 3px solid var(--border-light);
          border-top-color: var(--primary); border-radius: 50%;
          animation: del-spin 0.8s linear infinite;
        }
        @keyframes del-spin { to { transform: rotate(360deg); } }

        .del-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .del-controls {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .del-info { display: flex; flex-direction: column; gap: 4px; }
        .del-filename { font-weight: 700; font-size: 1.05rem; }
        .del-stats { color: var(--text-muted); font-size: 0.9rem; }
        .btn-sm { padding: 8px 14px; font-size: 0.85rem; }

        .del-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: var(--spacing-md);
        }

        .del-card {
          position: relative; cursor: pointer;
          border: 2px solid var(--border-light); border-radius: var(--radius-md);
          overflow: hidden; transition: var(--transition-fast);
          background: var(--bg-panel); user-select: none;
        }
        .del-card:hover { border-color: var(--border-active); transform: translateY(-2px); box-shadow: var(--shadow-glow); }
        .del-card-selected { border-color: #ef4444 !important; opacity: 0.6; }
        .del-card-selected:hover { border-color: #dc2626 !important; }

        .del-card-img { width: 100%; display: block; pointer-events: none; }

        .del-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 8px; font-size: 0.8rem; font-weight: 600; color: var(--text-muted);
        }

        .del-card-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; font-weight: 900; color: #ef4444;
          background: rgba(239, 68, 68, 0.08); pointer-events: none;
        }

        .del-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .del-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
        }
      `}</style>
    </div>
  );
};

export default DeletePdfPages;
