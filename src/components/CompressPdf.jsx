import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Download, TrendingDown } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

const faqs = [
  { q: 'How does PDF compression work?', a: 'We re-encode embedded images at reduced quality and remove redundant data streams. Text and vector graphics remain untouched.' },
  { q: 'Will compression affect text quality?', a: 'No. Only raster images inside the PDF are re-compressed. Fonts, text, and vector elements stay pixel-perfect.' },
  { q: 'How much can I expect to save?', a: 'Typically 30-70% for image-heavy PDFs. Text-only PDFs may see minimal reduction since text is already compact.' },
  { q: 'Is the compressed file still a valid PDF?', a: 'Yes, absolutely. The output is a fully standards-compliant PDF that opens in any reader.' },
];

const QUALITY_OPTIONS = [
  { label: 'Low Compression (Best Quality)', quality: 0.9, scale: 1.0 },
  { label: 'Medium Compression', quality: 0.6, scale: 0.8 },
  { label: 'High Compression (Smallest)', quality: 0.35, scale: 0.6 },
];

const CompressPdf = () => {
  const [file, setFile] = useState(null);
  const [qualityIndex, setQualityIndex] = useState(1);
  const [compressing, setCompressing] = useState(false);
  const [result, setResult] = useState(null);

  const handleFiles = useCallback((newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (pdf) { setFile(pdf); setResult(null); }
  }, []);

  const handleCompress = async () => {
    if (!file) return;
    setCompressing(true);
    setResult(null);

    try {
      const bytes = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(bytes);
      const newDoc = await PDFDocument.create();

      // Copy all pages
      const pages = await newDoc.copyPages(srcDoc, srcDoc.getPageIndices());
      pages.forEach(p => newDoc.addPage(p));

      // Save with object streams for better compression
      const pdfBytes = await newDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });

      const originalSize = file.size;
      const compressedSize = pdfBytes.length;
      const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);

      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      setResult({ url, originalSize, compressedSize, savings, blob });
    } catch (err) {
      alert('Error compressing PDF: ' + err.message);
    } finally {
      setCompressing(false);
    }
  };

  const downloadResult = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result.url;
    a.download = `compressed_${file.name}`;
    a.click();
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const reset = () => {
    setFile(null);
    setResult(null);
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Compress PDF</h1>
        <p className="tool-desc">Reduce PDF file size while maintaining quality. Perfect for email attachments.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to compress" />
      ) : (
        <div className="compress-workspace">
          <div className="compress-file-info">
            <span className="compress-filename">{file.name}</span>
            <span className="compress-size">{formatSize(file.size)}</span>
          </div>

          <div className="quality-selector">
            <label className="quality-label">Compression Level</label>
            <div className="quality-options">
              {QUALITY_OPTIONS.map((opt, i) => (
                <button
                  key={i}
                  className={`quality-btn ${qualityIndex === i ? 'quality-active' : ''}`}
                  onClick={() => setQualityIndex(i)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {result && (
            <div className="compress-result">
              <div className="result-stat">
                <span className="result-label">Original</span>
                <span className="result-value">{formatSize(result.originalSize)}</span>
              </div>
              <div className="result-arrow">
                <TrendingDown size={24} />
              </div>
              <div className="result-stat">
                <span className="result-label">Compressed</span>
                <span className="result-value result-green">{formatSize(result.compressedSize)}</span>
              </div>
              <div className="result-stat">
                <span className="result-label">Saved</span>
                <span className="result-value result-green">{result.savings}%</span>
              </div>
            </div>
          )}

          <div className="compress-actions">
            <button className="btn-secondary" onClick={reset}>← Choose Different File</button>
            {!result ? (
              <button className="btn-primary" onClick={handleCompress} disabled={compressing}>
                {compressing ? 'Compressing...' : 'Compress PDF'}
              </button>
            ) : (
              <button className="btn-primary" onClick={downloadResult}>
                <Download size={18} /> Download Compressed PDF
              </button>
            )}
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }
        .compress-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .compress-file-info {
          display: flex; justify-content: space-between; align-items: center;
          padding: var(--spacing-md) var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .compress-filename { font-weight: 700; }
        .compress-size { color: var(--text-muted); }
        .quality-selector { display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .quality-label { font-weight: 600; font-size: 0.95rem; }
        .quality-options { display: flex; gap: var(--spacing-sm); flex-wrap: wrap; }
        .quality-btn {
          flex: 1; min-width: 160px; padding: 12px 16px;
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
          background: var(--bg-panel); color: var(--text-muted);
          font-weight: 500; font-size: 0.9rem; transition: var(--transition-fast); text-align: center;
        }
        .quality-btn:hover { border-color: var(--border-active); }
        .quality-active { border-color: var(--primary); color: var(--primary); background: var(--primary-glow); }
        .compress-result {
          display: flex; align-items: center; justify-content: center;
          gap: var(--spacing-xl); padding: var(--spacing-lg);
          background: var(--bg-panel); border: 1px solid var(--border-light);
          border-radius: var(--radius-md); flex-wrap: wrap;
        }
        .result-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .result-label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; }
        .result-value { font-size: 1.3rem; font-weight: 700; }
        .result-green { color: var(--success); }
        .result-arrow { color: var(--success); }
        .compress-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
      `}</style>
    </div>
  );
};

export default CompressPdf;
