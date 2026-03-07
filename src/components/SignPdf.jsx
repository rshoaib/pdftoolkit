import { useState, useCallback, useRef, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { Download, RotateCcw, PenTool, Type, Trash2 } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';
import ToolIntro from './ToolIntro';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

const faqs = [
  { q: 'How do I sign a PDF?', a: 'Upload your PDF, draw or type your signature, then click on the page preview to place it. Adjust the position and size, then download.' },
  { q: 'Is my signature stored anywhere?', a: 'Never. Everything runs 100% in your browser. Your signature and files never leave your device — not even temporarily.' },
  { q: 'What kind of signature can I create?', a: 'You can draw a freehand signature with your mouse or touchscreen, or type your name and we\'ll render it in a handwriting-style font.' },
  { q: 'Does this create a legally binding signature?', a: 'This tool adds a visual signature to your PDF. For legally binding digital signatures with certificates, you would need a dedicated e-signature service.' },
  { q: 'Can I sign multiple pages?', a: 'Currently, you can place your signature on one page at a time. Select the page you want before placing your signature.' },
];

const SignPdf = () => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pdfBytes, setPdfBytes] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [sigMode, setSigMode] = useState('draw'); // 'draw' | 'type'
  const [sigImage, setSigImage] = useState(null);
  const [typedName, setTypedName] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);

  // Signature placement
  const [sigPos, setSigPos] = useState(null); // { x, y } relative to page image
  const [sigSize, setSigSize] = useState({ w: 200, h: 60 });

  const canvasRef = useRef(null);
  const pageRef = useRef(null);

  const handleFiles = useCallback((newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (pdf) {
      setFile(pdf);
      setPages([]);
      setSigImage(null);
      setSigPos(null);
      setActivePage(0);
    }
  }, []);

  // Load PDF previews
  useEffect(() => {
    if (!file) return;
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      const bytes = await file.arrayBuffer();
      setPdfBytes(new Uint8Array(bytes));
      const doc = await pdfjsLib.getDocument({ data: bytes }).promise;
      const loaded = [];
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const vp = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        canvas.width = vp.width;
        canvas.height = vp.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
        loaded.push({
          index: i - 1,
          thumbnail: canvas.toDataURL('image/png'),
          width: vp.width,
          height: vp.height,
          label: `Page ${i}`,
        });
        if (cancelled) return;
      }
      setPages(loaded);
      setLoading(false);
    };
    load().catch((err) => { console.error(err); setLoading(false); });
    return () => { cancelled = true; };
  }, [file]);

  // ── Drawing canvas ────────────────────────────────────────
  useEffect(() => {
    if (sigMode !== 'draw' || !canvasRef.current) return;
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#1a1a2e';
  }, [sigMode]);

  const getPos = (e) => {
    const c = canvasRef.current;
    const rect = c.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const startDraw = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext('2d');
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const endDraw = (e) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  const confirmDrawnSig = () => {
    const c = canvasRef.current;
    setSigImage(c.toDataURL('image/png'));
  };

  const clearCanvas = () => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    setSigImage(null);
    setSigPos(null);
  };

  // ── Typed signature ────────────────────────────────────────
  const confirmTypedSig = () => {
    if (!typedName.trim()) return;
    const c = document.createElement('canvas');
    c.width = 400;
    c.height = 100;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = 'italic 42px "Georgia", "Times New Roman", serif';
    ctx.fillStyle = '#1a1a2e';
    ctx.textBaseline = 'middle';
    ctx.fillText(typedName, 20, 50);
    setSigImage(c.toDataURL('image/png'));
  };

  // ── Place signature on page ────────────────────────────────
  const handlePageClick = (e) => {
    if (!sigImage || !pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSigPos({ x: x - sigSize.w / 2, y: y - sigSize.h / 2 });
  };

  // ── Save ──────────────────────────────────────────────────
  const handleSave = async () => {
    if (!sigImage || !sigPos || !pdfBytes) return;
    setSaving(true);
    try {
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const sigBytes = await fetch(sigImage).then(r => r.arrayBuffer());
      const sigPng = await pdfDoc.embedPng(sigBytes);
      const page = pdfDoc.getPage(activePage);
      const pageData = pages[activePage];

      // Scale coordinates from displayed image to actual PDF
      const imgEl = pageRef.current?.querySelector('img');
      const displayW = imgEl ? imgEl.clientWidth : pageData.width;
      const displayH = imgEl ? imgEl.clientHeight : pageData.height;
      const scaleX = pageData.width / displayW;
      const scaleY = pageData.height / displayH;

      const pdfX = sigPos.x * scaleX;
      const pdfY = pageData.height - (sigPos.y + sigSize.h) * scaleY;
      const pdfW = sigSize.w * scaleX;
      const pdfH = sigSize.h * scaleY;

      page.drawImage(sigPng, { x: pdfX, y: pdfY, width: pdfW, height: pdfH });

      const outBytes = await pdfDoc.save();
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `signed_${file.name}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Error signing PDF: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const reset = () => { setFile(null); setPages([]); setSigImage(null); setSigPos(null); setPdfBytes(null); setTypedName(''); };

  return (
    <div className="tool-page">
      <SEO
        title="Sign PDF — Add Signature to PDF Online for Free | Tiny PDF Tools"
        description="Draw or type your signature and place it on any PDF page. 100% free, no uploads — your signature never leaves your browser."
        canonicalUrl="https://tinypdftools.com/sign-pdf"
        schemaType="WebApplication"
        schemaData={{
          name: 'Sign PDF',
          url: 'https://tinypdftools.com/sign-pdf',
          applicationCategory: 'Utility',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Add your signature to any PDF page. Free and private.',
        }}
      />

      <div className="tool-header">
        <h1 className="tool-title">Sign PDF</h1>
        <p className="tool-desc">Draw or type your signature, place it on any page, then download your signed PDF.</p>
      </div>

      <ToolIntro
        paragraphs={['Draw or type your signature and place it on any page of your PDF document. Position, resize, and adjust the signature until it fits perfectly. Ideal for signing contracts, approvals, letters, and any document that requires a personal signature.', 'Your signature is embedded directly into the PDF as a visual element. You can use a mouse, trackpad, or touchscreen to draw a freehand signature, or type your name for a clean text-based signature. Everything happens in your browser — your signed documents are never uploaded.']}
        bestFor={['Contract signing', 'Approval workflows', 'Letters and memos', 'Permission forms']}
      />

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to sign" />
      ) : loading ? (
        <div className="sign-loading">
          <div className="sign-spinner" />
          <p>Loading pages…</p>
        </div>
      ) : (
        <div className="sign-workspace">
          {/* Step 1: Create Signature */}
          <div className="sign-section">
            <h3 className="sign-section-title">1. Create Your Signature</h3>
            <div className="sign-mode-tabs">
              <button className={`sign-tab ${sigMode === 'draw' ? 'active' : ''}`} onClick={() => setSigMode('draw')}>
                <PenTool size={16} /> Draw
              </button>
              <button className={`sign-tab ${sigMode === 'type' ? 'active' : ''}`} onClick={() => setSigMode('type')}>
                <Type size={16} /> Type
              </button>
            </div>

            {sigMode === 'draw' ? (
              <div className="sign-draw-area">
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={120}
                  className="sign-canvas"
                  onMouseDown={startDraw}
                  onMouseMove={draw}
                  onMouseUp={endDraw}
                  onMouseLeave={endDraw}
                  onTouchStart={startDraw}
                  onTouchMove={draw}
                  onTouchEnd={endDraw}
                />
                <div className="sign-draw-actions">
                  <button className="btn-secondary btn-sm" onClick={clearCanvas}><Trash2 size={14} /> Clear</button>
                  <button className="btn-primary btn-sm" onClick={confirmDrawnSig}><PenTool size={14} /> Use Signature</button>
                </div>
              </div>
            ) : (
              <div className="sign-type-area">
                <input
                  type="text"
                  value={typedName}
                  onChange={(e) => setTypedName(e.target.value)}
                  placeholder="Type your name…"
                  className="sign-type-input"
                />
                <div className="sign-type-preview" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontSize: '2rem' }}>
                  {typedName || 'Your Signature'}
                </div>
                <button className="btn-primary btn-sm" onClick={confirmTypedSig} disabled={!typedName.trim()}>
                  <Type size={14} /> Use Signature
                </button>
              </div>
            )}

            {sigImage && (
              <div className="sign-preview-badge">
                ✅ Signature ready — click on the page below to place it
              </div>
            )}
          </div>

          {/* Step 2: Select page & place */}
          <div className="sign-section">
            <h3 className="sign-section-title">2. Place Signature on Page</h3>

            {pages.length > 1 && (
              <div className="sign-page-selector">
                {pages.map((p, i) => (
                  <button
                    key={i}
                    className={`sign-page-btn ${activePage === i ? 'active' : ''}`}
                    onClick={() => { setActivePage(i); setSigPos(null); }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            )}

            <div
              className="sign-page-preview"
              ref={pageRef}
              onClick={handlePageClick}
              style={{ cursor: sigImage ? 'crosshair' : 'default' }}
            >
              <img src={pages[activePage]?.thumbnail} alt={pages[activePage]?.label} style={{ width: '100%', display: 'block' }} />
              {sigPos && sigImage && (
                <img
                  src={sigImage}
                  alt="Signature"
                  className="sign-placed"
                  style={{
                    position: 'absolute',
                    left: sigPos.x,
                    top: sigPos.y,
                    width: sigSize.w,
                    height: sigSize.h,
                    pointerEvents: 'none',
                  }}
                />
              )}
            </div>

            {sigImage && (
              <div className="sign-size-control">
                <label className="sign-size-label">Signature size:</label>
                <input
                  type="range"
                  min="80"
                  max="400"
                  value={sigSize.w}
                  onChange={(e) => {
                    const w = Number(e.target.value);
                    setSigSize({ w, h: Math.round(w * 0.3) });
                  }}
                  className="sign-size-slider"
                />
                <span className="sign-size-val">{sigSize.w}px</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="sign-actions">
            <button className="btn-secondary" onClick={reset}><RotateCcw size={16} /> Start Over</button>
            <button
              className="btn-primary"
              onClick={handleSave}
              disabled={!sigImage || !sigPos || saving}
            >
              <Download size={18} />
              {saving ? 'Saving…' : 'Download Signed PDF'}
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

        .sign-loading {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          padding: var(--spacing-xxl); color: var(--text-muted);
        }
        .sign-spinner {
          width: 40px; height: 40px; border: 3px solid var(--border-light);
          border-top-color: var(--primary); border-radius: 50%;
          animation: sign-spin 0.8s linear infinite;
        }
        @keyframes sign-spin { to { transform: rotate(360deg); } }

        .sign-workspace { display: flex; flex-direction: column; gap: var(--spacing-xl); }

        .sign-section {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-lg);
          display: flex; flex-direction: column; gap: var(--spacing-md);
        }
        .sign-section-title { font-size: 1.1rem; font-weight: 700; }

        .sign-mode-tabs { display: flex; gap: 8px; }
        .sign-tab {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: var(--radius-md); font-weight: 600;
          font-size: 0.9rem; cursor: pointer; transition: var(--transition-fast);
          border: 1px solid var(--border-light); background: var(--bg-surface); color: var(--text-muted);
        }
        .sign-tab.active { background: var(--primary); color: #fff; border-color: var(--primary); }

        .sign-canvas {
          width: 100%; max-width: 400px; height: 120px;
          border: 2px dashed var(--border-light); border-radius: var(--radius-md);
          background: #fff; cursor: crosshair; touch-action: none;
        }
        .sign-draw-actions { display: flex; gap: 8px; }
        .btn-sm { padding: 8px 14px; font-size: 0.85rem; }

        .sign-type-area { display: flex; flex-direction: column; gap: 12px; }
        .sign-type-input {
          padding: 12px 16px; border: 1px solid var(--border-light);
          border-radius: var(--radius-md); font-size: 1rem; background: var(--bg-surface);
          color: var(--text-main);
        }
        .sign-type-preview {
          padding: 12px 20px; background: #fff; border-radius: var(--radius-md);
          border: 1px solid var(--border-light); color: #1a1a2e; min-height: 60px;
          display: flex; align-items: center;
        }

        .sign-preview-badge {
          padding: 10px 16px; background: #22c55e15; color: #22c55e;
          border-radius: var(--radius-md); font-weight: 600; font-size: 0.9rem; text-align: center;
        }

        .sign-page-selector { display: flex; gap: 6px; flex-wrap: wrap; }
        .sign-page-btn {
          padding: 6px 14px; border-radius: var(--radius-md); font-size: 0.85rem; font-weight: 600;
          cursor: pointer; border: 1px solid var(--border-light); background: var(--bg-surface);
          color: var(--text-muted); transition: var(--transition-fast);
        }
        .sign-page-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); }

        .sign-page-preview {
          position: relative; border: 2px solid var(--border-light); border-radius: var(--radius-md);
          overflow: hidden; max-height: 600px; overflow-y: auto;
        }

        .sign-placed { opacity: 0.9; }

        .sign-size-control {
          display: flex; align-items: center; gap: 12px;
        }
        .sign-size-label { font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
        .sign-size-slider { flex: 1; max-width: 300px; }
        .sign-size-val { font-size: 0.85rem; color: var(--text-muted); min-width: 50px; }

        .sign-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .sign-canvas { max-width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SignPdf;
