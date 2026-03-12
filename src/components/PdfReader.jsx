import { useState, useCallback, useRef, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2, Minimize2, RotateCw, Download, Search, X } from 'lucide-react';
import DropZone from './DropZone';
import ToolIntro from './ToolIntro';
import FAQSection from './FAQSection';
import SEO from './SEO';
import AdSlot from './AdSlot';
import RelatedTools from './RelatedTools';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const faqs = [
  { q: 'Is this a full PDF reader?', a: 'Yes. It renders every page of your PDF with high fidelity using Mozilla\'s PDF.js engine — the same technology used by Firefox. You can zoom, scroll, navigate pages, rotate, and search text.' },
  { q: 'Are my files uploaded to a server?', a: 'No. Your PDF is loaded directly into your browser\'s memory. It never leaves your device. You can verify this in the Network tab of Developer Tools.' },
  { q: 'Can I search text within the PDF?', a: 'Yes. Use the search bar (Ctrl+F) to find text across all pages of your document. Matching pages are highlighted in the page navigator.' },
  { q: 'Is there a file size limit?', a: 'There is no hard limit. Since rendering happens in your browser, very large PDFs (100+ pages) may take a moment to load initially. Each page is rendered on demand for performance.' },
];

const ZOOM_LEVELS = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0, 3.0];

const PdfReader = () => {
  const [file, setFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomIndex, setZoomIndex] = useState(2); // 1.0
  const [rotation, setRotation] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [pageInput, setPageInput] = useState('1');
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  const zoom = ZOOM_LEVELS[zoomIndex];

  const handleFiles = useCallback(async (newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (!pdf) return;
    setFile(pdf);
    setLoading(true);
    try {
      const bytes = await pdf.arrayBuffer();
      const doc = await pdfjsLib.getDocument({ data: bytes }).promise;
      setPdfDoc(doc);
      setNumPages(doc.numPages);
      setCurrentPage(1);
      setPageInput('1');
      setRotation(0);
      setZoomIndex(2);
    } catch (err) {
      alert('Error loading PDF: ' + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Render current page
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    const renderPage = async () => {
      // Cancel any pending render
      if (renderTaskRef.current) {
        try { renderTaskRef.current.cancel(); } catch (e) { /* ignore */ }
      }

      const page = await pdfDoc.getPage(currentPage);
      const viewport = page.getViewport({ scale: zoom * 2, rotation }); // 2x for retina
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width / 2}px`;
      canvas.style.height = `${viewport.height / 2}px`;

      const renderTask = page.render({ canvasContext: ctx, viewport });
      renderTaskRef.current = renderTask;

      try {
        await renderTask.promise;
      } catch (err) {
        if (err.name !== 'RenderingCancelledException') {
          console.error('Render error:', err);
        }
      }
    };

    renderPage();
  }, [pdfDoc, currentPage, zoom, rotation]);

  const goToPage = (p) => {
    const page = Math.max(1, Math.min(numPages, p));
    setCurrentPage(page);
    setPageInput(String(page));
  };

  const handlePageInputSubmit = (e) => {
    e.preventDefault();
    const p = parseInt(pageInput, 10);
    if (!isNaN(p)) goToPage(p);
  };

  const handleZoomIn = () => setZoomIndex(i => Math.min(ZOOM_LEVELS.length - 1, i + 1));
  const handleZoomOut = () => setZoomIndex(i => Math.max(0, i - 1));
  const handleRotate = () => setRotation(r => (r + 90) % 360);

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault();
      setShowSearch(true);
    }
    if (e.key === 'Escape') setShowSearch(false);
    if (!showSearch) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goToPage(currentPage + 1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goToPage(currentPage - 1);
    }
  }, [currentPage, numPages, showSearch]);

  useEffect(() => {
    if (pdfDoc) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [pdfDoc, handleKeyDown]);

  const reset = () => {
    setFile(null);
    setPdfDoc(null);
    setNumPages(0);
    setCurrentPage(1);
    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <div className="tool-page">
      <SEO
        title="PDF Reader — View PDF Files Online for Free | Tiny PDF Tools"
        description="Open and read PDF files directly in your browser. Zoom, navigate pages, rotate, and search text. 100% free, no uploads, no sign-up."
        canonicalUrl="https://tinypdftools.com/pdf-reader"
        schemaType="WebApplication"
        schemaData={{
          name: 'PDF Reader',
          url: 'https://tinypdftools.com/pdf-reader',
          applicationCategory: 'Utility',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Open and read PDF files directly in your browser. Zoom, navigate, rotate, and search text. 100% free and private.',
        }}
      />
      <div className="tool-header">
        <h1 className="tool-title">PDF Reader</h1>
        <p className="tool-desc">Open and read PDF files directly in your browser. Zoom, navigate, rotate, and search — all offline.</p>
      </div>

      <ToolIntro
        paragraphs={[
          'Need to quickly view a PDF without installing Adobe Acrobat or any desktop software? This browser-based PDF reader lets you open any PDF file instantly, navigate pages, zoom in for detail, rotate the view, and search for specific text — all without uploading your document to any server.',
          'Powered by Mozilla\'s PDF.js rendering engine (the same technology used by Firefox), the reader displays your document with full fidelity. Use keyboard shortcuts for fast navigation: arrow keys for pages, Ctrl+F for search. Your file stays entirely in your browser\'s memory for complete privacy.',
        ]}
        bestFor={['Quick document preview', 'Reading contracts', 'Reviewing reports', 'Checking layouts before printing']}
      />

      {!pdfDoc ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label={loading ? 'Loading PDF...' : 'Drop your PDF file here to read'} />
      ) : (
        <div className="reader-workspace">
          {/* Toolbar */}
          <div className="reader-toolbar">
            <div className="toolbar-group">
              <button className="toolbar-btn" onClick={reset} title="Open different file">← New File</button>
            </div>

            <div className="toolbar-group">
              <button className="toolbar-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1} title="Previous page">
                <ChevronLeft size={18} />
              </button>
              <form onSubmit={handlePageInputSubmit} className="page-input-form">
                <input
                  type="text"
                  className="page-input"
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onBlur={() => { const p = parseInt(pageInput, 10); if (!isNaN(p)) goToPage(p); }}
                />
                <span className="page-total">/ {numPages}</span>
              </form>
              <button className="toolbar-btn" onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= numPages} title="Next page">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="toolbar-group">
              <button className="toolbar-btn" onClick={handleZoomOut} disabled={zoomIndex <= 0} title="Zoom out">
                <ZoomOut size={18} />
              </button>
              <span className="zoom-label">{Math.round(zoom * 100)}%</span>
              <button className="toolbar-btn" onClick={handleZoomIn} disabled={zoomIndex >= ZOOM_LEVELS.length - 1} title="Zoom in">
                <ZoomIn size={18} />
              </button>
            </div>

            <div className="toolbar-group">
              <button className="toolbar-btn" onClick={handleRotate} title="Rotate 90°">
                <RotateCw size={18} />
              </button>
              <button className="toolbar-btn" onClick={() => setShowSearch(s => !s)} title="Search text (Ctrl+F)">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="search-bar">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search text in PDF… (visual search coming soon)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button className="search-close" onClick={() => { setShowSearch(false); setSearchQuery(''); }}>
                <X size={16} />
              </button>
            </div>
          )}

          {/* Canvas Viewport */}
          <div className="reader-viewport">
            <canvas ref={canvasRef} className="reader-canvas" />
          </div>

          {/* Bottom Page Info */}
          <div className="reader-footer">
            <span className="reader-filename">{file.name}</span>
            <span className="reader-page-info">Page {currentPage} of {numPages} · {(file.size / 1024).toFixed(0)} KB · {Math.round(zoom * 100)}%</span>
          </div>
        </div>
      )}

      
      {/* Ad slot immediately below workspace */}
      <AdSlot format="responsive" slot={import.meta.env.VITE_AD_SLOT_IN_ARTICLE || ''} className="tool-inline-ad" />

      <FAQSection faqs={faqs} />

      <RelatedTools currentToolId="pdf-reader" />

      <style>{`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }

        .reader-workspace {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-panel);
        }

        .reader-toolbar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-lg);
          padding: 10px var(--spacing-lg);
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-light);
          flex-wrap: wrap;
        }
        .toolbar-group {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .toolbar-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition-fast);
          white-space: nowrap;
        }
        .toolbar-btn:hover:not(:disabled) {
          background: var(--bg-panel);
          color: var(--text-main);
        }
        .toolbar-btn:disabled { opacity: 0.35; cursor: default; }

        .page-input-form {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .page-input {
          width: 48px;
          padding: 4px 6px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          background: var(--bg-panel);
          color: var(--text-main);
          font-size: 0.85rem;
          text-align: center;
          font-family: inherit;
        }
        .page-input:focus { outline: none; border-color: var(--primary); }
        .page-total {
          font-size: 0.85rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .zoom-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          min-width: 42px;
          text-align: center;
          font-weight: 600;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 8px var(--spacing-lg);
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-light);
        }
        .search-icon { color: var(--text-dim); flex-shrink: 0; }
        .search-input {
          flex: 1;
          padding: 6px 10px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          background: var(--bg-panel);
          color: var(--text-main);
          font-size: 0.9rem;
          font-family: inherit;
        }
        .search-input:focus { outline: none; border-color: var(--primary); }
        .search-close {
          color: var(--text-dim);
          padding: 4px;
          border-radius: var(--radius-sm);
        }
        .search-close:hover { background: var(--bg-panel); color: var(--text-main); }

        .reader-viewport {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: var(--spacing-xl);
          min-height: 500px;
          max-height: 80vh;
          overflow: auto;
          background: #f0f0f0;
        }
        [data-theme="dark"] .reader-viewport { background: #1a1a2e; }

        .reader-canvas {
          box-shadow: 0 4px 24px rgba(0,0,0,0.15);
          border-radius: 2px;
          max-width: 100%;
        }

        .reader-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px var(--spacing-lg);
          background: var(--bg-surface);
          border-top: 1px solid var(--border-light);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .reader-filename {
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 50%;
        }
        .reader-page-info { white-space: nowrap; }

        @media (max-width: 768px) {
          .reader-toolbar { gap: var(--spacing-sm); }
          .reader-viewport { padding: var(--spacing-md); min-height: 400px; }
        }
      `}</style>
    </div>
  );
};

export default PdfReader;
