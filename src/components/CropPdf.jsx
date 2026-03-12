"use client";
import { useState, useCallback, useRef, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import {  Crop, Download, RefreshCw, Maximize2  } from 'lucide-react';
import { useToast } from './ToastContext';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';
import AdSlot from './AdSlot';
import RelatedTools from './RelatedTools';
import ToolIntro from './ToolIntro';

if (typeof window !== 'undefined') { pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'; }

const faqs = [
  { q: 'How do I crop a PDF?', a: 'Upload your PDF, drag the crop handles to define the area you want to keep, then click "Crop & Download". The cropped PDF downloads instantly.' },
  { q: 'Are my files uploaded to a server?', a: 'No. All processing happens 100% in your browser using pdf-lib. Your files never leave your device.' },
  { q: 'Does cropping affect PDF quality?', a: 'No. Cropping sets the visible area (CropBox) without re-encoding. Text, images, and vectors remain perfectly intact.' },
  { q: 'Can I crop all pages at once?', a: 'Yes! Toggle "Apply to all pages" to crop every page with the same dimensions. You can also crop just the current page.' },
];

const PRESETS = [
  { id: 'custom', label: 'Custom' },
  { id: 'trim-10', label: 'Trim 10% Margins' },
  { id: 'trim-20', label: 'Trim 20% Margins' },
  { id: 'a4', label: 'A4 (595×842)' },
  { id: 'letter', label: 'Letter (612×792)' },
];

const CropPdf = () => {
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [pdfBytes, setPdfBytes] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [applyAll, setApplyAll] = useState(true);
  const [preset, setPreset] = useState('custom');

  // Crop rect in PDF points (origin bottom-left)
  const [cropRect, setCropRect] = useState({ x: 0, y: 0, w: 0, h: 0 });

  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const dragState = useRef(null);

  // Scale factor between canvas display size and PDF points
  const [scale, setScale] = useState(1);

  const handleFiles = useCallback((files) => {
    const pdf = files.find(f => f.type === 'application/pdf');
    if (pdf) {
      setFile(pdf);
      setDone(false);
      pdf.arrayBuffer().then(buf => {
        const bytes = new Uint8Array(buf);
        setPdfBytes(bytes);
      });
    }
  }, []);

  // Render the current page preview
  useEffect(() => {
    if (!pdfBytes) return;
    let cancelled = false;

    (async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      const doc = await pdfjsLib.getDocument({ data: pdfBytes.slice() }).promise;
        setPageCount(doc.numPages);
        const page = await doc.getPage(currentPage + 1);
        const viewport = page.getViewport({ scale: 1 });
        const pdfW = viewport.width;
        const pdfH = viewport.height;
        setPageSize({ width: pdfW, height: pdfH });

        // Fit canvas to container
        const container = containerRef.current;
        const maxW = container ? container.clientWidth - 32 : 560;
        const displayScale = Math.min(maxW / pdfW, 600 / pdfH, 1.5);
        setScale(displayScale);

        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;
        canvas.width = pdfW * displayScale;
        canvas.height = pdfH * displayScale;

        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: page.getViewport({ scale: displayScale }) }).promise;

        // Initialize crop rect to full page on first load
        if (cropRect.w === 0 && cropRect.h === 0) {
          setCropRect({ x: 0, y: 0, w: pdfW, h: pdfH });
        }
      } catch (err) {
        console.error('Render error:', err);
      }
    })();

    return () => { cancelled = true; };
  }, [pdfBytes, currentPage]);

  // Apply preset
  useEffect(() => {
    if (!pageSize.width || !pageSize.height) return;
    const { width: pw, height: ph } = pageSize;

    switch (preset) {
      case 'trim-10': {
        const mx = pw * 0.1, my = ph * 0.1;
        setCropRect({ x: mx, y: my, w: pw - 2 * mx, h: ph - 2 * my });
        break;
      }
      case 'trim-20': {
        const mx = pw * 0.2, my = ph * 0.2;
        setCropRect({ x: mx, y: my, w: pw - 2 * mx, h: ph - 2 * my });
        break;
      }
      case 'a4':
        setCropRect({ x: 0, y: 0, w: 595, h: 842 });
        break;
      case 'letter':
        setCropRect({ x: 0, y: 0, w: 612, h: 792 });
        break;
      case 'custom':
      default:
        break;
    }
  }, [preset, pageSize]);

  // Convert PDF-points crop rect to canvas-pixel coords (flip Y)
  const toCanvasCoords = () => {
    const cw = canvasRef.current?.width || 0;
    const ch = canvasRef.current?.height || 0;
    if (!cw || !ch) return { left: 0, top: 0, width: 0, height: 0 };
    return {
      left: cropRect.x * scale,
      top: (pageSize.height - cropRect.y - cropRect.h) * scale,
      width: cropRect.w * scale,
      height: cropRect.h * scale,
    };
  };

  // Handle type for cursor
  const getHandle = (ex, ey) => {
    const cc = toCanvasCoords();
    const h = 10;
    const inX = ex >= cc.left - h && ex <= cc.left + cc.width + h;
    const inY = ey >= cc.top - h && ey <= cc.top + cc.height + h;

    if (!inX || !inY) return 'outside';

    const nearLeft = Math.abs(ex - cc.left) < h;
    const nearRight = Math.abs(ex - (cc.left + cc.width)) < h;
    const nearTop = Math.abs(ey - cc.top) < h;
    const nearBottom = Math.abs(ey - (cc.top + cc.height)) < h;

    if (nearTop && nearLeft) return 'nw';
    if (nearTop && nearRight) return 'ne';
    if (nearBottom && nearLeft) return 'sw';
    if (nearBottom && nearRight) return 'se';
    if (nearLeft) return 'w';
    if (nearRight) return 'e';
    if (nearTop) return 'n';
    if (nearBottom) return 's';

    if (ex > cc.left && ex < cc.left + cc.width && ey > cc.top && ey < cc.top + cc.height) return 'move';
    return 'outside';
  };

  const getPointerPos = (e) => {
    const rect = overlayRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    const pos = getPointerPos(e);
    const handle = getHandle(pos.x, pos.y);
    if (handle === 'outside') return;

    dragState.current = {
      handle,
      startX: pos.x,
      startY: pos.y,
      startRect: { ...cropRect },
    };
  };

  const handlePointerMove = (e) => {
    if (!dragState.current) {
      // Just update cursor
      const pos = getPointerPos(e);
      const handle = getHandle(pos.x, pos.y);
      const cursors = { nw: 'nwse-resize', ne: 'nesw-resize', sw: 'nesw-resize', se: 'nwse-resize', n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize', move: 'move', outside: 'crosshair' };
      overlayRef.current.style.cursor = cursors[handle] || 'default';
      return;
    }

    e.preventDefault();
    const pos = getPointerPos(e);
    const dx = (pos.x - dragState.current.startX) / scale;
    const dy = -(pos.y - dragState.current.startY) / scale; // Flip Y
    const sr = dragState.current.startRect;
    const pw = pageSize.width;
    const ph = pageSize.height;

    let { x, y, w, h } = sr;

    switch (dragState.current.handle) {
      case 'move':
        x = Math.max(0, Math.min(pw - w, sr.x + dx));
        y = Math.max(0, Math.min(ph - h, sr.y + dy));
        break;
      case 'se':
        w = Math.max(20, sr.w + dx);
        h = Math.max(20, sr.h - dy);
        y = sr.y + dy + (sr.h - h + (h === 20 ? sr.h - 20 : 0));
        y = sr.y + (sr.h - h);
        break;
      case 'sw':
        x = sr.x + dx;
        w = Math.max(20, sr.w - dx);
        if (w === 20) x = sr.x + sr.w - 20;
        h = Math.max(20, sr.h - dy);
        y = sr.y + (sr.h - h);
        break;
      case 'ne':
        w = Math.max(20, sr.w + dx);
        y = sr.y + dy;
        h = Math.max(20, sr.h + dy);
        if (h === 20) y = sr.y + sr.h - 20;
        break;
      case 'nw':
        x = sr.x + dx;
        w = Math.max(20, sr.w - dx);
        if (w === 20) x = sr.x + sr.w - 20;
        y = sr.y + dy;
        h = Math.max(20, sr.h + dy);
        if (h === 20) y = sr.y + sr.h - 20;
        break;
      case 'n':
        y = sr.y + dy;
        h = Math.max(20, sr.h + dy);
        if (h === 20) y = sr.y + sr.h - 20;
        break;
      case 's':
        h = Math.max(20, sr.h - dy);
        y = sr.y + (sr.h - h);
        break;
      case 'e':
        w = Math.max(20, sr.w + dx);
        break;
      case 'w':
        x = sr.x + dx;
        w = Math.max(20, sr.w - dx);
        if (w === 20) x = sr.x + sr.w - 20;
        break;
    }

    // Clamp
    x = Math.max(0, x);
    y = Math.max(0, y);
    w = Math.min(w, pw - x);
    h = Math.min(h, ph - y);

    setCropRect({ x, y, w, h });
    setPreset('custom');
  };

  const handlePointerUp = () => {
    dragState.current = null;
  };

  const handleCrop = async () => {
    if (!pdfBytes) return;
    setProcessing(true);
    try {
      const doc = await PDFDocument.load(pdfBytes);
      const pages = doc.getPages();

      if (applyAll) {
        pages.forEach(page => {
          page.setCropBox(cropRect.x, cropRect.y, cropRect.w, cropRect.h);
        });
      } else {
        pages[currentPage].setCropBox(cropRect.x, cropRect.y, cropRect.w, cropRect.h);
      }

      const croppedBytes = await doc.save();
      const blob = new Blob([croppedBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.replace('.pdf', '-cropped.pdf');
      a.click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      toast.error('Error cropping PDF: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPdfBytes(null);
    setPageCount(0);
    setCurrentPage(0);
    setPageSize({ width: 0, height: 0 });
    setCropRect({ x: 0, y: 0, w: 0, h: 0 });
    setDone(false);
    setPreset('custom');
  };

  const cc = toCanvasCoords();

  return (
    <div className="tool-page">
      <SEO
        title="Crop PDF — Trim PDF Margins & Pages Online for Free | Tiny PDF Tools"
        description="Crop and trim PDF pages visually. Drag to select the area to keep, then download instantly. 100% free, no uploads — runs in your browser."
        canonicalUrl="https://tinypdftools.com/crop-pdf"
        schemaType="WebApplication"
        schemaData={{
          name: 'Crop PDF',
          url: 'https://tinypdftools.com/crop-pdf',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />

      <div className="tool-header">
        <h1 className="tool-title">Crop PDF</h1>
        <p className="tool-desc">Visually trim margins or cut specific areas from your PDF pages. Drag the handles to define the crop area.</p>
      </div>

      <ToolIntro
        paragraphs={['Visually trim margins or cut specific areas from PDF pages. Draw a crop rectangle directly on the page preview to define exactly which area to keep. This is useful for removing headers, footers, whitespace, or focusing on specific content areas.', 'The crop tool modifies the visible area of the page without destroying the underlying content. You can apply the same crop to all pages or set different crops per page. Everything runs in your browser for instant, private processing.']}
        bestFor={['Removing margins', 'Trimming headers/footers', 'Focusing on content areas', 'Print preparation']}
      />

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to crop" />
      ) : (
        <div className="crop-workspace">
          {/* File info bar */}
          <div className="crop-file-info">
            <Crop size={24} className="crop-file-icon" />
            <div className="crop-file-details">
              <span className="crop-file-name">{file.name}</span>
              <span className="crop-file-size">{(file.size / 1024).toFixed(0)} KB · {pageCount} page{pageCount > 1 ? 's' : ''}</span>
            </div>
            <button className="btn-secondary" onClick={reset} style={{ marginLeft: 'auto' }}>
              <RefreshCw size={14} /> Change File
            </button>
          </div>

          {/* Preset buttons */}
          <div className="crop-presets">
            <label className="crop-label">Crop Mode</label>
            <div className="crop-preset-btns">
              {PRESETS.map(p => (
                <button
                  key={p.id}
                  className={`crop-preset-btn ${preset === p.id ? 'crop-preset-active' : ''}`}
                  onClick={() => setPreset(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Canvas + crop overlay */}
          <div className="crop-canvas-area" ref={containerRef}>
            <div className="crop-canvas-wrapper" style={{ width: cc.left + cc.width > 0 ? (canvasRef.current?.width || 'auto') : 'auto' }}>
              <canvas ref={canvasRef} className="crop-canvas" />
              <div
                ref={overlayRef}
                className="crop-overlay"
                style={{ width: canvasRef.current?.width, height: canvasRef.current?.height }}
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
              >
                {/* Dimmed areas outside crop */}
                <div className="crop-dim crop-dim-top" style={{ height: cc.top }} />
                <div className="crop-dim crop-dim-bottom" style={{ top: cc.top + cc.height, height: `calc(100% - ${cc.top + cc.height}px)` }} />
                <div className="crop-dim crop-dim-left" style={{ top: cc.top, height: cc.height, width: cc.left }} />
                <div className="crop-dim crop-dim-right" style={{ top: cc.top, height: cc.height, left: cc.left + cc.width, width: `calc(100% - ${cc.left + cc.width}px)` }} />

                {/* Crop rectangle */}
                <div className="crop-rect" style={{ left: cc.left, top: cc.top, width: cc.width, height: cc.height }}>
                  <div className="crop-handle crop-handle-nw" />
                  <div className="crop-handle crop-handle-ne" />
                  <div className="crop-handle crop-handle-sw" />
                  <div className="crop-handle crop-handle-se" />
                  <div className="crop-handle crop-handle-n" />
                  <div className="crop-handle crop-handle-s" />
                  <div className="crop-handle crop-handle-e" />
                  <div className="crop-handle crop-handle-w" />
                  {/* Dimension label */}
                  <div className="crop-dims-label">
                    {Math.round(cropRect.w)} × {Math.round(cropRect.h)} pt
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page navigation */}
          {pageCount > 1 && (
            <div className="crop-page-nav">
              <button className="btn-secondary" onClick={() => setCurrentPage(Math.max(0, currentPage - 1))} disabled={currentPage === 0}>
                ← Prev
              </button>
              <span className="crop-page-label">Page {currentPage + 1} of {pageCount}</span>
              <button className="btn-secondary" onClick={() => setCurrentPage(Math.min(pageCount - 1, currentPage + 1))} disabled={currentPage >= pageCount - 1}>
                Next →
              </button>
            </div>
          )}

          {/* Options */}
          <div className="crop-options">
            <label className="crop-toggle">
              <input type="checkbox" checked={applyAll} onChange={e => setApplyAll(e.target.checked)} />
              <span>Apply crop to all pages</span>
            </label>
          </div>

          {/* Numeric inputs */}
          <div className="crop-inputs-row">
            <div className="crop-input-group">
              <label>X</label>
              <input type="number" value={Math.round(cropRect.x)} onChange={e => { setCropRect(r => ({ ...r, x: +e.target.value })); setPreset('custom'); }} min={0} max={pageSize.width} />
            </div>
            <div className="crop-input-group">
              <label>Y</label>
              <input type="number" value={Math.round(cropRect.y)} onChange={e => { setCropRect(r => ({ ...r, y: +e.target.value })); setPreset('custom'); }} min={0} max={pageSize.height} />
            </div>
            <div className="crop-input-group">
              <label>W</label>
              <input type="number" value={Math.round(cropRect.w)} onChange={e => { setCropRect(r => ({ ...r, w: +e.target.value })); setPreset('custom'); }} min={20} max={pageSize.width} />
            </div>
            <div className="crop-input-group">
              <label>H</label>
              <input type="number" value={Math.round(cropRect.h)} onChange={e => { setCropRect(r => ({ ...r, h: +e.target.value })); setPreset('custom'); }} min={20} max={pageSize.height} />
            </div>
          </div>

          {/* Action */}
          <div className="crop-actions">
            <button className="btn-primary" onClick={handleCrop} disabled={processing}>
              <Download size={18} />
              {processing ? 'Cropping...' : done ? '✓ Done! Download Again' : 'Crop & Download'}
            </button>
          </div>
        </div>
      )}

      
      {/* Ad slot immediately below workspace */}
      <AdSlot format="responsive" slot={process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE || ''} className="tool-inline-ad" />

      <FAQSection faqs={faqs} />

      <RelatedTools currentToolId="crop-pdf" />

      <style>{`
        .crop-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
        }
        .crop-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .crop-file-icon { color: var(--primary); flex-shrink: 0; }
        .crop-file-details { display: flex; flex-direction: column; min-width: 0; }
        .crop-file-name { font-weight: 600; font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .crop-file-size { font-size: 0.8rem; color: var(--text-muted); }

        .crop-presets { display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .crop-label { font-weight: 600; font-size: 0.95rem; color: var(--text-main); }
        .crop-preset-btns { display: flex; gap: var(--spacing-sm); flex-wrap: wrap; }
        .crop-preset-btn {
          padding: 8px 16px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.85rem;
          transition: var(--transition-fast);
          cursor: pointer;
        }
        .crop-preset-btn:hover { border-color: var(--border-active); color: var(--text-main); }
        .crop-preset-active { border-color: var(--primary); color: var(--primary); background: var(--primary-glow); }

        .crop-canvas-area {
          display: flex;
          justify-content: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: var(--spacing-md);
          overflow: hidden;
        }
        .crop-canvas-wrapper {
          position: relative;
          display: inline-block;
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .crop-canvas {
          display: block;
        }
        .crop-overlay {
          position: absolute;
          top: 0;
          left: 0;
          cursor: crosshair;
          touch-action: none;
        }

        .crop-dim {
          position: absolute;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.45);
          pointer-events: none;
          transition: none;
        }
        .crop-dim-top { top: 0; }
        .crop-dim-bottom { }
        .crop-dim-left { left: 0; }
        .crop-dim-right { }

        .crop-rect {
          position: absolute;
          border: 2px solid var(--primary);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.3);
          pointer-events: none;
        }
        .crop-handle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #fff;
          border: 2px solid var(--primary);
          border-radius: 2px;
          pointer-events: none;
        }
        .crop-handle-nw { top: -6px; left: -6px; }
        .crop-handle-ne { top: -6px; right: -6px; }
        .crop-handle-sw { bottom: -6px; left: -6px; }
        .crop-handle-se { bottom: -6px; right: -6px; }
        .crop-handle-n { top: -6px; left: 50%; transform: translateX(-50%); }
        .crop-handle-s { bottom: -6px; left: 50%; transform: translateX(-50%); }
        .crop-handle-e { top: 50%; right: -6px; transform: translateY(-50%); }
        .crop-handle-w { top: 50%; left: -6px; transform: translateY(-50%); }

        .crop-dims-label {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.7);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          pointer-events: none;
        }

        .crop-page-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
        }
        .crop-page-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .crop-options {
          display: flex;
          justify-content: center;
        }
        .crop-toggle {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 10px 20px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-main);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .crop-toggle:hover { border-color: var(--primary); }
        .crop-toggle input[type="checkbox"] {
          accent-color: var(--primary);
          width: 18px;
          height: 18px;
        }

        .crop-inputs-row {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }
        .crop-input-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .crop-input-group label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .crop-input-group input {
          width: 80px;
          padding: 8px 10px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          background: var(--bg-panel);
          color: var(--text-main);
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
          font-family: var(--font-sans);
          transition: var(--transition-fast);
        }
        .crop-input-group input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .crop-actions {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .crop-preset-btns { flex-direction: column; }
          .crop-inputs-row { gap: var(--spacing-sm); }
          .crop-input-group input { width: 65px; }
        }
      `}</style>
    </div>
  );
};

export default CropPdf;
