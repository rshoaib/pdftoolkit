import { useState, useCallback } from 'react';
import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';
import { Droplets, Download, RefreshCw, Type, Settings } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

const faqs = [
  { q: 'What types of watermarks can I add?', a: 'You can add custom text watermarks with full control over font size, opacity, rotation angle, and color. The watermark is applied to every page of your PDF.' },
  { q: 'Will the watermark affect the quality of my PDF?', a: 'No. The watermark is added as a text overlay on top of your existing content. All original text, images, and formatting remain untouched.' },
  { q: 'Are my files uploaded to a server?', a: 'No. All watermarking happens 100% in your browser. Your files never leave your device — complete privacy guaranteed.' },
  { q: 'Can I remove the watermark later?', a: 'The watermark is permanently embedded into the PDF. If you need the original, keep a copy of your file before watermarking.' },
  { q: 'What is the best use case for PDF watermarks?', a: 'Common uses include marking documents as DRAFT, CONFIDENTIAL, or SAMPLE, branding with your company name, and protecting shared documents from unauthorized redistribution.' },
];

const PRESET_TEXTS = ['DRAFT', 'CONFIDENTIAL', 'SAMPLE', 'DO NOT COPY', 'APPROVED'];

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
};

const WatermarkPdf = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('DRAFT');
  const [fontSize, setFontSize] = useState(60);
  const [opacity, setOpacity] = useState(0.15);
  const [rotation, setRotation] = useState(45);
  const [color, setColor] = useState('#888888');
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handleFiles = useCallback((files) => {
    const pdf = files.find(f => f.type === 'application/pdf');
    if (pdf) { setFile(pdf); setDone(false); }
  }, []);

  const handleWatermark = async () => {
    if (!file || !text.trim()) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const pages = doc.getPages();
      const { r, g, b } = hexToRgb(color);

      for (const page of pages) {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const textHeight = fontSize;

        // Center the watermark on the page
        const x = (width - textWidth) / 2;
        const y = (height - textHeight) / 2;

        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(r, g, b),
          rotate: degrees(rotation),
          opacity,
        });
      }

      const pdfBytes = await doc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.replace('.pdf', '-watermarked.pdf');
      a.click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      alert('Error watermarking PDF: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setText('DRAFT');
    setFontSize(60);
    setOpacity(0.15);
    setRotation(45);
    setColor('#888888');
    setDone(false);
  };

  const isValid = file && text.trim().length > 0;

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Watermark PDF</h1>
        <p className="tool-desc">Add custom text watermarks to your PDF pages. Choose font size, opacity, rotation, and color — 100% in your browser.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to watermark" />
      ) : (
        <div className="wm-workspace">
          {/* File info */}
          <div className="wm-file-info">
            <Droplets size={24} className="wm-file-icon" />
            <div className="wm-file-details">
              <span className="wm-file-name">{file.name}</span>
              <span className="wm-file-size">{(file.size / 1024).toFixed(0)} KB</span>
            </div>
            <button className="btn-secondary" onClick={reset} style={{ marginLeft: 'auto' }}>
              <RefreshCw size={14} /> Change File
            </button>
          </div>

          {/* Watermark text */}
          <div className="wm-section">
            <label className="wm-label" htmlFor="wm-text">
              <Type size={16} /> Watermark Text
            </label>
            <input
              id="wm-text"
              type="text"
              className="wm-text-input"
              value={text}
              onChange={(e) => { setText(e.target.value); setDone(false); }}
              placeholder="Enter watermark text"
              maxLength={50}
              autoComplete="off"
            />
            <div className="wm-presets">
              {PRESET_TEXTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`wm-preset-chip ${text === t ? 'wm-preset-active' : ''}`}
                  onClick={() => { setText(t); setDone(false); }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="wm-section">
            <label className="wm-label">
              <Settings size={16} /> Options
            </label>

            <div className="wm-options-grid">
              {/* Font size */}
              <div className="wm-option">
                <span className="wm-option-label">Font Size</span>
                <div className="wm-option-row">
                  <input
                    type="range"
                    min="24"
                    max="120"
                    step="2"
                    value={fontSize}
                    onChange={(e) => { setFontSize(Number(e.target.value)); setDone(false); }}
                    className="wm-slider"
                    aria-label="Font size"
                  />
                  <span className="wm-option-value">{fontSize}px</span>
                </div>
              </div>

              {/* Opacity */}
              <div className="wm-option">
                <span className="wm-option-label">Opacity</span>
                <div className="wm-option-row">
                  <input
                    type="range"
                    min="0.05"
                    max="0.5"
                    step="0.01"
                    value={opacity}
                    onChange={(e) => { setOpacity(Number(e.target.value)); setDone(false); }}
                    className="wm-slider"
                    aria-label="Opacity"
                  />
                  <span className="wm-option-value">{Math.round(opacity * 100)}%</span>
                </div>
              </div>

              {/* Rotation */}
              <div className="wm-option">
                <span className="wm-option-label">Rotation</span>
                <div className="wm-option-row">
                  <input
                    type="range"
                    min="0"
                    max="90"
                    step="5"
                    value={rotation}
                    onChange={(e) => { setRotation(Number(e.target.value)); setDone(false); }}
                    className="wm-slider"
                    aria-label="Rotation"
                  />
                  <span className="wm-option-value">{rotation}°</span>
                </div>
              </div>

              {/* Color */}
              <div className="wm-option">
                <span className="wm-option-label">Color</span>
                <div className="wm-option-row wm-color-row">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => { setColor(e.target.value); setDone(false); }}
                    className="wm-color-input"
                    aria-label="Watermark color"
                  />
                  <span className="wm-option-value">{color.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="wm-preview-section">
            <span className="wm-label">Preview</span>
            <div className="wm-preview-box">
              <div className="wm-preview-page">
                <span
                  className="wm-preview-text"
                  style={{
                    fontSize: `${Math.max(10, fontSize * 0.22)}px`,
                    opacity: opacity,
                    transform: `rotate(-${rotation}deg)`,
                    color: color,
                  }}
                >
                  {text || 'WATERMARK'}
                </span>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="wm-actions">
            <button
              className="btn-primary"
              onClick={handleWatermark}
              disabled={!isValid || processing}
            >
              <Download size={18} />
              {processing ? 'Watermarking...' : done ? '✓ Done! Download Again' : 'Watermark & Download'}
            </button>
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .wm-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 640px;
          margin: 0 auto;
          width: 100%;
        }
        .wm-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .wm-file-icon {
          color: #6366f1;
          flex-shrink: 0;
        }
        .wm-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .wm-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .wm-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .wm-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .wm-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .wm-text-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 1rem;
          font-family: inherit;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-main);
          transition: var(--transition-fast);
          outline: none;
        }
        .wm-text-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
        .wm-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .wm-preset-chip {
          padding: 5px 14px;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          background: var(--bg-surface);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: inherit;
        }
        .wm-preset-chip:hover {
          border-color: #6366f1;
          color: #6366f1;
        }
        .wm-preset-active {
          background: rgba(99, 102, 241, 0.12);
          border-color: #6366f1;
          color: #6366f1;
        }
        .wm-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .wm-option {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .wm-option-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .wm-option-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wm-slider {
          flex: 1;
          accent-color: #6366f1;
          height: 6px;
          cursor: pointer;
        }
        .wm-option-value {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          min-width: 48px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .wm-color-row {
          gap: 12px;
        }
        .wm-color-input {
          width: 36px;
          height: 36px;
          border: 2px solid var(--border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          padding: 2px;
          background: var(--bg-panel);
        }
        .wm-preview-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .wm-preview-box {
          display: flex;
          justify-content: center;
          padding: var(--spacing-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .wm-preview-page {
          width: 140px;
          height: 180px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
        }
        .wm-preview-text {
          font-weight: 700;
          letter-spacing: 2px;
          white-space: nowrap;
          user-select: none;
          text-align: center;
        }
        .wm-actions {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .wm-options-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WatermarkPdf;
