import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Unlock, Download, RefreshCw, Eye, EyeOff, KeyRound } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';
import SEO from './SEO';

const faqs = [
  { q: 'How does PDF unlocking work?', a: 'You provide the password for the protected PDF. The tool decrypts it in your browser and saves a new copy without any password protection.' },
  { q: 'Can I unlock a PDF without the password?', a: 'No. You must know the correct password. This tool is designed for removing protection from PDFs you own — not for bypassing security.' },
  { q: 'Are my files uploaded to a server?', a: 'No. All decryption happens 100% in your browser. Your files and passwords never leave your device.' },
  { q: 'Will unlocking change the PDF content?', a: 'No. The content, formatting, images, and text remain exactly the same. Only the password protection is removed.' },
  { q: 'What if I enter the wrong password?', a: 'The tool will show an error message. Simply re-enter the correct password and try again.' },
];

const UnlockPdf = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleFiles = useCallback((files) => {
    const pdf = files.find(f => f.type === 'application/pdf');
    if (pdf) { setFile(pdf); setDone(false); setError(''); }
  }, []);

  const handleUnlock = async () => {
    if (!file || !password.trim()) return;
    setProcessing(true);
    setError('');
    try {
      const bytes = await file.arrayBuffer();

      // Load with the user-provided password
      const doc = await PDFDocument.load(bytes, {
        password: password,
        ignoreEncryption: false,
      });

      // Save without encryption (no userPassword/ownerPassword args)
      const pdfBytes = await doc.save();

      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.replace('.pdf', '-unlocked.pdf');
      a.click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      if (err.message && (err.message.includes('password') || err.message.includes('decrypt') || err.message.includes('encrypted'))) {
        setError('Incorrect password. Please check and try again.');
      } else {
        setError('Error unlocking PDF: ' + err.message);
      }
    } finally {
      setProcessing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPassword('');
    setDone(false);
    setError('');
    setShowPassword(false);
  };

  const isValid = file && password.trim().length > 0;

  return (
    <div className="tool-page">
      <SEO
        title="Unlock PDF — Remove Password Protection Online for Free | Tiny PDF Tools"
        description="Remove password protection from your PDF files. Enter the password you know, get an unlocked copy. 100% free, no uploads, runs in your browser."
        canonicalUrl="https://tinypdftools.com/unlock-pdf"
        schemaType="WebApplication"
        schemaData={{
          name: 'Unlock PDF',
          url: 'https://tinypdftools.com/unlock-pdf',
          applicationCategory: 'Utility',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Remove PDF password protection securely in your browser. 100% free and private.',
        }}
      />
      <div className="tool-header">
        <h1 className="tool-title">Unlock PDF</h1>
        <p className="tool-desc">Remove password protection from your PDF files. Enter the password you know, get an unlocked copy — 100% in your browser.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your password-protected PDF here" />
      ) : (
        <div className="unlock-workspace">
          <div className="unlock-file-info">
            <Unlock size={24} className="unlock-file-icon" />
            <div className="unlock-file-details">
              <span className="unlock-file-name">{file.name}</span>
              <span className="unlock-file-size">{(file.size / 1024).toFixed(0)} KB</span>
            </div>
            <button className="btn-secondary" onClick={reset} style={{ marginLeft: 'auto' }}>
              <RefreshCw size={14} /> Change File
            </button>
          </div>

          <div className="unlock-password-section">
            <label className="unlock-label" htmlFor="unlock-password">
              <KeyRound size={16} /> Enter PDF Password
            </label>
            <p className="unlock-hint">Enter the password used to protect this PDF.</p>
            <div className="unlock-password-wrap">
              <input
                id="unlock-password"
                type={showPassword ? 'text' : 'password'}
                className="unlock-password-input"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setDone(false); setError(''); }}
                placeholder="Enter password"
                autoComplete="off"
                onKeyDown={(e) => { if (e.key === 'Enter' && isValid) handleUnlock(); }}
              />
              <button
                type="button"
                className="unlock-toggle-btn"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {error && (
              <p className="unlock-error">{error}</p>
            )}
          </div>

          <div className="unlock-actions">
            <button
              className="btn-primary"
              onClick={handleUnlock}
              disabled={!isValid || processing}
            >
              <Download size={18} />
              {processing ? 'Unlocking...' : done ? '✓ Unlocked! Download Again' : 'Unlock & Download'}
            </button>
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .unlock-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }
        .unlock-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .unlock-file-icon {
          color: #22c55e;
          flex-shrink: 0;
        }
        .unlock-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .unlock-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .unlock-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .unlock-password-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .unlock-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .unlock-hint {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .unlock-password-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .unlock-password-input {
          width: 100%;
          padding: 12px 48px 12px 16px;
          font-size: 1rem;
          font-family: inherit;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-main);
          transition: var(--transition-fast);
          outline: none;
        }
        .unlock-password-input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
        }
        .unlock-toggle-btn {
          position: absolute;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          padding: 4px;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
        }
        .unlock-toggle-btn:hover {
          color: var(--text-main);
          background: var(--bg-surface);
        }
        .unlock-error {
          font-size: 0.85rem;
          color: var(--error);
          font-weight: 500;
        }
        .unlock-actions {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default UnlockPdf;
