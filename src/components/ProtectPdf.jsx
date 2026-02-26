import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Lock, Download, RefreshCw, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

const faqs = [
  { q: 'How does PDF password protection work?', a: 'A user password is required to open the PDF. An owner password controls editing permissions. Both are set during protection.' },
  { q: 'Can I remove password protection later?', a: 'Yes — open the protected PDF with the owner password in any PDF viewer and save it without protection.' },
  { q: 'Are my files uploaded to a server?', a: 'No. All encryption happens 100% in your browser. Your files and passwords never leave your device.' },
  { q: 'What encryption level is used?', a: 'pdf-lib uses AES-256 encryption, which is the industry standard for secure PDF documents.' },
];

const ProtectPdf = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handleFiles = useCallback((files) => {
    const pdf = files.find(f => f.type === 'application/pdf');
    if (pdf) { setFile(pdf); setDone(false); }
  }, []);

  const handleProtect = async () => {
    if (!file || !password.trim()) return;
    setProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);

      const pdfBytes = await doc.save({
        userPassword: password,
        ownerPassword: password,
      });

      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.replace('.pdf', '-protected.pdf');
      a.click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      alert('Error protecting PDF: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  const reset = () => { setFile(null); setPassword(''); setDone(false); setShowPassword(false); };

  const isValid = file && password.trim().length >= 4;

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Protect PDF</h1>
        <p className="tool-desc">Add password protection to your PDF files. AES-256 encryption, 100% in your browser.</p>
      </div>

      {!file ? (
        <DropZone onFiles={handleFiles} accept=".pdf" multiple={false} label="Drop your PDF file here to protect" />
      ) : (
        <div className="protect-workspace">
          <div className="protect-file-info">
            <Lock size={24} className="protect-file-icon" />
            <div className="protect-file-details">
              <span className="protect-file-name">{file.name}</span>
              <span className="protect-file-size">{(file.size / 1024).toFixed(0)} KB</span>
            </div>
            <button className="btn-secondary" onClick={reset} style={{ marginLeft: 'auto' }}>
              <RefreshCw size={14} /> Change File
            </button>
          </div>

          <div className="protect-password-section">
            <label className="protect-label" htmlFor="pdf-password">
              <ShieldCheck size={16} /> Set Password
            </label>
            <p className="protect-hint">Minimum 4 characters. Choose a strong, memorable password.</p>
            <div className="protect-password-wrap">
              <input
                id="pdf-password"
                type={showPassword ? 'text' : 'password'}
                className="protect-password-input"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setDone(false); }}
                placeholder="Enter password"
                autoComplete="off"
              />
              <button
                type="button"
                className="protect-toggle-btn"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {password.length > 0 && password.length < 4 && (
              <p className="protect-error">Password must be at least 4 characters</p>
            )}
          </div>

          <div className="protect-actions">
            <button
              className="btn-primary"
              onClick={handleProtect}
              disabled={!isValid || processing}
            >
              <Download size={18} />
              {processing ? 'Encrypting...' : done ? '✓ Protected! Download Again' : 'Protect & Download'}
            </button>
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .protect-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }
        .protect-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .protect-file-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .protect-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .protect-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .protect-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .protect-password-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .protect-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .protect-hint {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .protect-password-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .protect-password-input {
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
        .protect-password-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }
        .protect-toggle-btn {
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
        .protect-toggle-btn:hover {
          color: var(--text-main);
          background: var(--bg-surface);
        }
        .protect-error {
          font-size: 0.85rem;
          color: var(--error);
          font-weight: 500;
        }
        .protect-actions {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default ProtectPdf;
