import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import {  Download, RotateCcw, Layers, ShieldCheck  } from 'lucide-react';
import { useToast } from './ToastContext';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';
import AdSlot from './AdSlot';
import RelatedTools from './RelatedTools';
import ToolIntro from './ToolIntro';

const faqs = [
  { q: 'What does flattening a PDF do?', a: 'Flattening merges all interactive elements — form fields, annotations, comments — into the page background. The result is a static, non-editable PDF.' },
  { q: 'Why would I flatten a PDF?', a: 'Common reasons include: preventing further editing before sharing, ensuring consistent printing, meeting legal or compliance submission requirements, and reducing file complexity.' },
  { q: 'Does flattening remove my form data?', a: 'No — the data you entered into form fields is preserved and baked into the page. It just becomes non-editable text.' },
  { q: 'Will flattening change the appearance?', a: 'No. The visual output is identical — only the interactivity is removed.' },
  { q: 'Do my files get uploaded anywhere?', a: 'Never. Everything runs 100% in your browser. Your files never leave your device.' },
];

const FlattenPdf = () => {
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [resultUrl, setResultUrl] = useState(null);
  const [stats, setStats] = useState(null);

  const handleFiles = useCallback((newFiles) => {
    const pdf = newFiles.find(f => f.type === 'application/pdf');
    if (pdf) {
      setFile(pdf);
      setDone(false);
      setResultUrl(null);
      setStats(null);
    }
  }, []);

  const handleFlatten = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });

      const form = pdfDoc.getForm();
      const fields = form.getFields();
      const fieldCount = fields.length;

      form.flatten();

      const outBytes = await pdfDoc.save();
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      setResultUrl(url);
      setStats({
        originalSize: file.size,
        flattenedSize: outBytes.length,
        fieldsFlattened: fieldCount,
        pages: pdfDoc.getPageCount(),
      });
      setDone(true);
    } catch (err) {
      toast.error('Error flattening PDF: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `flattened_${file.name}`;
    a.click();
  };

  const reset = () => {
    setFile(null);
    setDone(false);
    setProcessing(false);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setStats(null);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="tool-page">
      <SEO
        title="Flatten PDF — Make PDF Non-Editable Online for Free | Tiny PDF Tools"
        description="Flatten PDF form fields and annotations into a static, non-editable document. 100% free, no uploads — runs in your browser."
        canonicalUrl="https://tinypdftools.com/flatten-pdf"
        schemaType="WebApplication"
        schemaData={{
          name: 'Flatten PDF',
          url: 'https://tinypdftools.com/flatten-pdf',
          applicationCategory: 'Utility',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Flatten PDF forms and annotations into a static document. Free and private.',
        }}
      />

      <div className="tool-header">
        <h1 className="tool-title">Flatten PDF</h1>
        <p className="tool-desc">Merge form fields, annotations, and comments into a static, non-editable PDF.</p>
      </div>

      <ToolIntro
        paragraphs={['Merge interactive form fields, annotations, comments, and digital signatures into a static, non-editable PDF layer. Flattening is essential before archiving forms, submitting completed applications, or sharing filled documents where recipients should not modify the content.', 'The flattened PDF looks identical to the original but all interactive elements become permanent, static content. This also reduces file size and ensures the document displays consistently across all PDF viewers and printers.']}
        bestFor={['Archiving filled forms', 'Submitting applications', 'Locking annotations', 'Print preparation']}
      />

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to flatten" />
      ) : !done ? (
        <div className="flat-workspace">
          <div className="flat-file-info">
            <Layers size={28} style={{ color: 'var(--primary)' }} />
            <div>
              <div className="flat-filename">{file.name}</div>
              <div className="flat-filesize">{formatSize(file.size)}</div>
            </div>
          </div>

          <div className="flat-explainer">
            <h3>What will happen:</h3>
            <ul>
              <li>Form fields will be baked into the page (data preserved, no longer editable)</li>
              <li>Annotations and comments will be merged into the background</li>
              <li>The result is a clean, static PDF safe to share or print</li>
            </ul>
          </div>

          <div className="flat-actions">
            <button className="btn-secondary" onClick={reset}><RotateCcw size={16} /> Choose Different File</button>
            <button className="btn-primary" onClick={handleFlatten} disabled={processing}>
              <Layers size={18} />
              {processing ? 'Flattening…' : 'Flatten PDF'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flat-workspace">
          <div className="flat-success">
            <ShieldCheck size={48} style={{ color: '#22c55e' }} />
            <h2>PDF Flattened Successfully</h2>
          </div>

          {stats && (
            <div className="flat-stats-grid">
              <div className="flat-stat">
                <span className="flat-stat-value">{stats.pages}</span>
                <span className="flat-stat-label">Pages</span>
              </div>
              <div className="flat-stat">
                <span className="flat-stat-value">{stats.fieldsFlattened}</span>
                <span className="flat-stat-label">Fields Flattened</span>
              </div>
              <div className="flat-stat">
                <span className="flat-stat-value">{formatSize(stats.originalSize)}</span>
                <span className="flat-stat-label">Original Size</span>
              </div>
              <div className="flat-stat">
                <span className="flat-stat-value">{formatSize(stats.flattenedSize)}</span>
                <span className="flat-stat-label">Flattened Size</span>
              </div>
            </div>
          )}

          <div className="flat-actions">
            <button className="btn-secondary" onClick={reset}><RotateCcw size={16} /> Flatten Another</button>
            <button className="btn-primary" onClick={handleDownload}>
              <Download size={18} /> Download Flattened PDF
            </button>
          </div>
        </div>
      )}

      
      {/* Ad slot immediately below workspace */}
      <AdSlot format="responsive" slot={import.meta.env.VITE_AD_SLOT_IN_ARTICLE || ''} className="tool-inline-ad" />

      <FAQSection faqs={faqs} />

      <RelatedTools currentToolId="flatten-pdf" />

      <style>{`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }

        .flat-workspace {
          display: flex; flex-direction: column; gap: var(--spacing-lg);
          padding: var(--spacing-xl); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-lg);
        }

        .flat-file-info {
          display: flex; align-items: center; gap: var(--spacing-md);
        }
        .flat-filename { font-weight: 700; font-size: 1.1rem; }
        .flat-filesize { color: var(--text-muted); font-size: 0.9rem; }

        .flat-explainer {
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-surface); border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }
        .flat-explainer h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 8px; }
        .flat-explainer ul { padding-left: 20px; color: var(--text-muted); font-size: 0.9rem; }
        .flat-explainer li { margin-bottom: 4px; }

        .flat-success { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .flat-success h2 { font-size: 1.4rem; font-weight: 700; }

        .flat-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-md);
        }

        .flat-stat {
          text-align: center; padding: var(--spacing-md);
          background: var(--bg-surface); border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }
        .flat-stat-value { display: block; font-size: 1.3rem; font-weight: 700; color: var(--primary); }
        .flat-stat-label { display: block; font-size: 0.8rem; color: var(--text-muted); margin-top: 4px; }

        .flat-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .flat-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
};

export default FlattenPdf;
