"use client";
import { useState, useCallback, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import {  Download, FileOutput, RotateCcw, CheckSquare, Square  } from 'lucide-react';
import { useToast } from './ToastContext';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';
import AdSlot from './AdSlot';
import RelatedTools from './RelatedTools';
import ToolIntro from './ToolIntro';

if (typeof window !== 'undefined') { pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'; }

const faqs = [
  { q: 'How do I extract pages from a PDF?', a: 'Upload your PDF, click the pages you want to keep (they\'ll be highlighted in green), then click "Extract & Download".' },
  { q: 'What\'s the difference between Extract and Split?', a: 'Extract copies only the pages you select into a single new PDF. Split divides a PDF by page ranges into multiple files.' },
  { q: 'Will this reduce the quality of my PDF?', a: 'No. Pages are copied byte-for-byte — zero re-encoding, zero quality loss.' },
  { q: 'Is there a page limit?', a: 'No hard limits. Since everything runs in your browser, performance depends on your device.' },
  { q: 'Do my files get uploaded?', a: 'Never. All processing happens 100% in your browser — your files never leave your device.' },
];

const ExtractPdfPages = () => {
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

  const handleExtract = async () => {
    if (selected.size === 0 || !pdfBytes) return;
    setSaving(true);
    try {
      const srcDoc = await PDFDocument.load(pdfBytes);
      const newDoc = await PDFDocument.create();
      const extractIndices = [...selected].sort((a, b) => a - b);
      const copiedPages = await newDoc.copyPages(srcDoc, extractIndices);
      copiedPages.forEach(p => newDoc.addPage(p));
      const outBytes = await newDoc.save();
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `extracted_${file.name}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const reset = () => { setFile(null); setPages([]); setSelected(new Set()); setPdfBytes(null); };

  return (
    <div className="tool-page">
      <SEO
        title="Extract PDF Pages — Pull Specific Pages from a PDF Online Free | Tiny PDF Tools"
        description="Select and extract specific pages from any PDF into a new file. 100% free, no uploads — runs entirely in your browser."
        canonicalUrl="https://tinypdftools.com/extract-pdf-pages"
        schemaType="WebApplication"
        schemaData={{
          name: 'Extract PDF Pages',
          url: 'https://tinypdftools.com/extract-pdf-pages',
          applicationCategory: 'Utility',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Extract specific pages from a PDF. 100% free and private.',
        }}
      />

      <div className="tool-header">
        <h1 className="tool-title">Extract PDF Pages</h1>
        <p className="tool-desc">Select the pages you want to keep, then download your new PDF.</p>
      </div>

      <ToolIntro
        paragraphs={['Select and extract specific pages from a PDF into a new, standalone file. Unlike splitting, extraction lets you pick individual pages by number or range — even non-consecutive pages — and combine them into a single output document.', 'This is perfect when you need specific pages from a large document without downloading the entire file. Browse page thumbnails, select the pages you need, and download a clean PDF containing only your selections.']}
        bestFor={['Pulling specific pages', 'Creating document excerpts', 'Selective sharing', 'Reference compilation']}
      />

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to extract pages" />
      ) : loading ? (
        <div className="ext-loading">
          <div className="ext-spinner" />
          <p>Loading page previews…</p>
        </div>
      ) : (
        <div className="ext-workspace">
          <div className="ext-controls">
            <div className="ext-info">
              <span className="ext-filename">{file.name}</span>
              <span className="ext-stats">
                {selected.size > 0 ? (
                  <><strong style={{ color: '#059669' }}>{selected.size} selected</strong> · {pages.length - selected.size} excluded</>
                ) : (
                  <>{pages.length} pages — click pages to select for extraction</>
                )}
              </span>
            </div>
            <button className="btn-secondary btn-sm" onClick={selectAll}>
              {selected.size === pages.length ? <><Square size={14} /> Deselect All</> : <><CheckSquare size={14} /> Select All</>}
            </button>
          </div>

          <div className="ext-grid">
            {pages.map((page) => (
              <div
                key={page.index}
                className={`ext-card ${selected.has(page.index) ? 'ext-card-selected' : ''}`}
                onClick={() => togglePage(page.index)}
              >
                <img src={page.thumbnail} alt={page.label} className="ext-card-img" />
                <div className="ext-card-footer">
                  <span className="ext-card-label">{page.label}</span>
                  {selected.has(page.index) ? (
                    <FileOutput size={14} style={{ color: '#059669' }} />
                  ) : null}
                </div>
                {selected.has(page.index) && <div className="ext-card-overlay">✓</div>}
              </div>
            ))}
          </div>

          <div className="ext-actions">
            <button className="btn-secondary" onClick={reset}><RotateCcw size={16} /> Choose Different File</button>
            <button
              className="btn-primary"
              onClick={handleExtract}
              disabled={selected.size === 0 || saving}
            >
              <Download size={18} />
              {saving ? 'Processing…' : `Extract ${selected.size} Page${selected.size !== 1 ? 's' : ''} & Download`}
            </button>
          </div>
        </div>
      )}

      
      {/* Ad slot immediately below workspace */}
      <AdSlot format="responsive" slot={process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE || ''} className="tool-inline-ad" />

      <FAQSection faqs={faqs} />

      <RelatedTools currentToolId="extract-pdf-pages" />

      <style>{`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }

        .ext-loading {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          padding: var(--spacing-xxl); color: var(--text-muted);
        }
        .ext-spinner {
          width: 40px; height: 40px; border: 3px solid var(--border-light);
          border-top-color: var(--primary); border-radius: 50%;
          animation: ext-spin 0.8s linear infinite;
        }
        @keyframes ext-spin { to { transform: rotate(360deg); } }

        .ext-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .ext-controls {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .ext-info { display: flex; flex-direction: column; gap: 4px; }
        .ext-filename { font-weight: 700; font-size: 1.05rem; }
        .ext-stats { color: var(--text-muted); font-size: 0.9rem; }
        .btn-sm { padding: 8px 14px; font-size: 0.85rem; }

        .ext-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: var(--spacing-md);
        }

        .ext-card {
          position: relative; cursor: pointer;
          border: 2px solid var(--border-light); border-radius: var(--radius-md);
          overflow: hidden; transition: var(--transition-fast);
          background: var(--bg-panel); user-select: none;
        }
        .ext-card:hover { border-color: var(--border-active); transform: translateY(-2px); box-shadow: var(--shadow-glow); }
        .ext-card-selected { border-color: #059669 !important; }
        .ext-card-selected:hover { border-color: #047857 !important; }

        .ext-card-img { width: 100%; display: block; pointer-events: none; }

        .ext-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 8px; font-size: 0.8rem; font-weight: 600; color: var(--text-muted);
        }

        .ext-card-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; font-weight: 900; color: #059669;
          background: rgba(5, 150, 105, 0.08); pointer-events: none;
        }

        .ext-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .ext-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
        }
      `}</style>
    </div>
  );
};

export default ExtractPdfPages;
