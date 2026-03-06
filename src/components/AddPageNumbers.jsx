import { useState, useCallback } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { ListOrdered, Download, RefreshCw, Settings } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';

const faqs = [
  { q: 'What page number formats are available?', a: 'You can choose from four formats: plain number (1, 2, 3), "Page 1", "Page 1 of N", or centered dashes (- 1 -). Each format is applied consistently to every page.' },
  { q: 'Can I choose where the page numbers appear?', a: 'Yes! You can place numbers in six positions: top-left, top-center, top-right, bottom-left, bottom-center, or bottom-right. Most users prefer bottom-center.' },
  { q: 'Can I start numbering from a custom number?', a: 'Absolutely. Use the "Start From" option to begin numbering from any number. This is perfect for multi-part documents or appendices.' },
  { q: 'Does this tool upload my PDF to a server?', a: 'No. All processing happens 100% in your browser using JavaScript. Your files never leave your device — complete privacy guaranteed.' },
  { q: 'Will adding page numbers affect my PDF quality?', a: 'Not at all. Page numbers are added as lightweight text overlays. All original content, images, and formatting remain untouched.' },
];

const POSITIONS = [
  { id: 'top-left', label: 'Top Left' },
  { id: 'top-center', label: 'Top Center' },
  { id: 'top-right', label: 'Top Right' },
  { id: 'bottom-left', label: 'Bottom Left' },
  { id: 'bottom-center', label: 'Bottom Center' },
  { id: 'bottom-right', label: 'Bottom Right' },
];

const FORMATS = [
  { id: 'plain', label: '1, 2, 3', example: (n) => `${n}` },
  { id: 'page', label: 'Page 1', example: (n) => `Page ${n}` },
  { id: 'page-of', label: 'Page 1 of N', example: (n, t) => `Page ${n} of ${t}` },
  { id: 'dashes', label: '- 1 -', example: (n) => `- ${n} -` },
];

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
};

const formatPageNumber = (format, pageNum, totalPages) => {
  const fmt = FORMATS.find(f => f.id === format);
  return fmt ? fmt.example(pageNum, totalPages) : `${pageNum}`;
};

const AddPageNumbers = () => {
  const [file, setFile] = useState(null);
  const [position, setPosition] = useState('bottom-center');
  const [format, setFormat] = useState('plain');
  const [fontSize, setFontSize] = useState(12);
  const [startNumber, setStartNumber] = useState(1);
  const [color, setColor] = useState('#666666');
  const [margin, setMargin] = useState(36);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handleFiles = useCallback((files) => {
    const pdf = files.find(f => f.type === 'application/pdf');
    if (pdf) { setFile(pdf); setDone(false); }
  }, []);

  const handleAddNumbers = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const pages = doc.getPages();
      const totalPages = pages.length;
      const { r, g, b } = hexToRgb(color);

      pages.forEach((page, index) => {
        const pageNum = startNumber + index;
        const text = formatPageNumber(format, pageNum, totalPages + startNumber - 1);
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);

        let x, y;

        // Compute Y
        if (position.startsWith('top')) {
          y = height - margin;
        } else {
          y = margin - fontSize;
        }

        // Compute X
        if (position.endsWith('left')) {
          x = margin;
        } else if (position.endsWith('center')) {
          x = (width - textWidth) / 2;
        } else {
          x = width - textWidth - margin;
        }

        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(r, g, b),
        });
      });

      const pdfBytes = await doc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.replace('.pdf', '-numbered.pdf');
      a.click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      alert('Error adding page numbers: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPosition('bottom-center');
    setFormat('plain');
    setFontSize(12);
    setStartNumber(1);
    setColor('#666666');
    setMargin(36);
    setDone(false);
  };

  // For the preview miniature
  const previewPosition = () => {
    const styles = {};
    if (position.startsWith('top')) {
      styles.top = '10px';
    } else {
      styles.bottom = '10px';
    }
    if (position.endsWith('left')) {
      styles.left = '10px';
      styles.textAlign = 'left';
    } else if (position.endsWith('center')) {
      styles.left = '50%';
      styles.transform = 'translateX(-50%)';
      styles.textAlign = 'center';
    } else {
      styles.right = '10px';
      styles.textAlign = 'right';
    }
    return styles;
  };

  return (
    <div className="tool-page">
      <SEO
        title="Add Page Numbers to PDF — Free Online Tool | TinyPDFTools"
        description="Add page numbers to your PDF for free. Choose position, format, font size, and color. 100% client-side, no uploads."
        canonicalUrl="https://tinypdftools.com/add-page-numbers"
        schemaType="WebApplication"
        schemaData={{
          name: 'Add Page Numbers to PDF',
          url: 'https://tinypdftools.com/add-page-numbers',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Add page numbers to PDF pages with customizable position, format, font size, and color. Free, private, client-side processing.',
        }}
      />

      <div className="tool-header">
        <h1 className="tool-title">Add Page Numbers to PDF</h1>
        <p className="tool-desc">Stamp page numbers on every page of your PDF. Choose position, format, size, and color — 100% in your browser.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to add page numbers" />
      ) : (
        <div className="pn-workspace">
          {/* File info */}
          <div className="pn-file-info">
            <ListOrdered size={24} className="pn-file-icon" />
            <div className="pn-file-details">
              <span className="pn-file-name">{file.name}</span>
              <span className="pn-file-size">{(file.size / 1024).toFixed(0)} KB</span>
            </div>
            <button className="btn-secondary" onClick={reset} style={{ marginLeft: 'auto' }}>
              <RefreshCw size={14} /> Change File
            </button>
          </div>

          {/* Position */}
          <div className="pn-section">
            <label className="pn-label">
              <Settings size={16} /> Position
            </label>
            <div className="pn-position-grid">
              {POSITIONS.map((pos) => (
                <button
                  key={pos.id}
                  type="button"
                  className={`pn-pos-btn ${position === pos.id ? 'pn-pos-active' : ''}`}
                  onClick={() => { setPosition(pos.id); setDone(false); }}
                >
                  {pos.label}
                </button>
              ))}
            </div>
          </div>

          {/* Format */}
          <div className="pn-section">
            <label className="pn-label">Format</label>
            <div className="pn-format-row">
              {FORMATS.map((fmt) => (
                <button
                  key={fmt.id}
                  type="button"
                  className={`pn-preset-chip ${format === fmt.id ? 'pn-preset-active' : ''}`}
                  onClick={() => { setFormat(fmt.id); setDone(false); }}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="pn-section">
            <label className="pn-label">
              <Settings size={16} /> Options
            </label>

            <div className="pn-options-grid">
              {/* Font size */}
              <div className="pn-option">
                <span className="pn-option-label">Font Size</span>
                <div className="pn-option-row">
                  <input
                    type="range"
                    min="8"
                    max="24"
                    step="1"
                    value={fontSize}
                    onChange={(e) => { setFontSize(Number(e.target.value)); setDone(false); }}
                    className="pn-slider"
                    aria-label="Font size"
                  />
                  <span className="pn-option-value">{fontSize}pt</span>
                </div>
              </div>

              {/* Margin */}
              <div className="pn-option">
                <span className="pn-option-label">Margin</span>
                <div className="pn-option-row">
                  <input
                    type="range"
                    min="20"
                    max="80"
                    step="2"
                    value={margin}
                    onChange={(e) => { setMargin(Number(e.target.value)); setDone(false); }}
                    className="pn-slider"
                    aria-label="Margin from edge"
                  />
                  <span className="pn-option-value">{margin}px</span>
                </div>
              </div>

              {/* Start number */}
              <div className="pn-option">
                <span className="pn-option-label">Start From</span>
                <div className="pn-option-row">
                  <input
                    type="number"
                    min="0"
                    max="9999"
                    value={startNumber}
                    onChange={(e) => { setStartNumber(Math.max(0, Number(e.target.value))); setDone(false); }}
                    className="pn-number-input"
                    aria-label="Starting page number"
                  />
                </div>
              </div>

              {/* Color */}
              <div className="pn-option">
                <span className="pn-option-label">Color</span>
                <div className="pn-option-row pn-color-row">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => { setColor(e.target.value); setDone(false); }}
                    className="pn-color-input"
                    aria-label="Number color"
                  />
                  <span className="pn-option-value">{color.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="pn-preview-section">
            <span className="pn-label">Preview</span>
            <div className="pn-preview-box">
              <div className="pn-preview-page">
                {/* Fake lines */}
                <div className="pn-preview-lines">
                  <div className="pn-line" style={{ width: '80%' }} />
                  <div className="pn-line" style={{ width: '90%' }} />
                  <div className="pn-line" style={{ width: '60%' }} />
                  <div className="pn-line" style={{ width: '75%' }} />
                  <div className="pn-line" style={{ width: '85%' }} />
                </div>
                <span
                  className="pn-preview-number"
                  style={{
                    ...previewPosition(),
                    fontSize: `${Math.max(8, fontSize * 0.7)}px`,
                    color: color,
                  }}
                >
                  {formatPageNumber(format, startNumber, startNumber + 4)}
                </span>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pn-actions">
            <button
              className="btn-primary"
              onClick={handleAddNumbers}
              disabled={processing}
            >
              <Download size={18} />
              {processing ? 'Adding Numbers...' : done ? '✓ Done! Download Again' : 'Add Numbers & Download'}
            </button>
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .pn-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 640px;
          margin: 0 auto;
          width: 100%;
        }
        .pn-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .pn-file-icon {
          color: #dc2626;
          flex-shrink: 0;
        }
        .pn-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .pn-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .pn-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .pn-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .pn-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .pn-position-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .pn-pos-btn {
          padding: 10px 8px;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: inherit;
          text-align: center;
        }
        .pn-pos-btn:hover {
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-pos-active {
          background: rgba(220, 38, 38, 0.1);
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-format-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pn-preset-chip {
          padding: 6px 16px;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          background: var(--bg-surface);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: inherit;
        }
        .pn-preset-chip:hover {
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-preset-active {
          background: rgba(220, 38, 38, 0.1);
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .pn-option {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pn-option-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .pn-option-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pn-slider {
          flex: 1;
          accent-color: #dc2626;
          height: 6px;
          cursor: pointer;
        }
        .pn-option-value {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          min-width: 48px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .pn-number-input {
          width: 80px;
          padding: 8px 12px;
          font-size: 0.95rem;
          font-family: inherit;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-main);
          outline: none;
          transition: var(--transition-fast);
          font-variant-numeric: tabular-nums;
        }
        .pn-number-input:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }
        .pn-color-row {
          gap: 12px;
        }
        .pn-color-input {
          width: 36px;
          height: 36px;
          border: 2px solid var(--border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          padding: 2px;
          background: var(--bg-panel);
        }
        .pn-preview-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .pn-preview-box {
          display: flex;
          justify-content: center;
          padding: var(--spacing-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .pn-preview-page {
          width: 140px;
          height: 180px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
          padding: 16px 12px;
        }
        .pn-preview-lines {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }
        .pn-line {
          height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
        }
        .pn-preview-number {
          position: absolute;
          font-weight: 600;
          white-space: nowrap;
          user-select: none;
          font-variant-numeric: tabular-nums;
        }
        .pn-actions {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .pn-options-grid {
            grid-template-columns: 1fr;
          }
          .pn-position-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default AddPageNumbers;
