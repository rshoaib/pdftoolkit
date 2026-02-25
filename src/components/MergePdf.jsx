import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { FileText, GripVertical, Trash2, Download, Plus } from 'lucide-react';
import DropZone from './DropZone';
import FAQSection from './FAQSection';

const faqs = [
  { q: 'How do I merge PDF files?', a: 'Upload two or more PDF files, drag them to set the order, then click "Merge PDFs". Your merged file will download instantly.' },
  { q: 'Is there a file size limit?', a: 'No strict limit — everything runs in your browser. Very large files (100MB+) may be slow depending on your device.' },
  { q: 'Are my files uploaded to a server?', a: 'No. All processing happens 100% in your browser. Your files never leave your device.' },
  { q: 'Can I reorder pages before merging?', a: 'Yes! Drag the file cards to rearrange the order before merging.' },
];

const MergePdf = () => {
  const [files, setFiles] = useState([]);
  const [merging, setMerging] = useState(false);
  const [done, setDone] = useState(false);

  const handleFiles = useCallback((newFiles) => {
    const pdfFiles = newFiles.filter(f => f.type === 'application/pdf');
    setFiles(prev => [...prev, ...pdfFiles]);
    setDone(false);
  }, []);

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setDone(false);
  };

  const moveFile = (from, to) => {
    setFiles(prev => {
      const copy = [...prev];
      const [item] = copy.splice(from, 1);
      copy.splice(to, 0, item);
      return copy;
    });
  };

  const handleMerge = async () => {
    if (files.length < 2) return;
    setMerging(true);
    try {
      const merged = await PDFDocument.create();
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const doc = await PDFDocument.load(bytes);
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach(page => merged.addPage(page));
      }
      const pdfBytes = await merged.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'merged.pdf';
      a.click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      alert('Error merging PDFs: ' + err.message);
    } finally {
      setMerging(false);
    }
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Merge PDF</h1>
        <p className="tool-desc">Combine multiple PDF files into a single document. Drag to reorder.</p>
      </div>

      {files.length === 0 ? (
        <DropZone onFiles={handleFiles} accept=".pdf" label="Drop your PDF files here to merge" />
      ) : (
        <div className="merge-workspace">
          <div className="file-list">
            {files.map((file, i) => (
              <div key={`${file.name}-${i}`} className="file-card">
                <div className="file-card-grip">
                  <GripVertical size={16} />
                </div>
                <div className="file-card-icon">
                  <FileText size={20} />
                </div>
                <div className="file-card-info">
                  <span className="file-card-name">{file.name}</span>
                  <span className="file-card-size">{(file.size / 1024).toFixed(0)} KB</span>
                </div>
                <div className="file-card-actions">
                  {i > 0 && (
                    <button className="file-card-btn" onClick={() => moveFile(i, i - 1)} title="Move up">↑</button>
                  )}
                  {i < files.length - 1 && (
                    <button className="file-card-btn" onClick={() => moveFile(i, i + 1)} title="Move down">↓</button>
                  )}
                  <button className="file-card-btn file-card-delete" onClick={() => removeFile(i)} title="Remove">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="merge-actions">
            <button className="btn-secondary" onClick={() => document.querySelector('.add-more-input').click()}>
              <Plus size={16} /> Add More
            </button>
            <input
              type="file"
              accept=".pdf"
              multiple
              className="sr-only add-more-input"
              onChange={(e) => { handleFiles([...e.target.files]); e.target.value = ''; }}
            />
            <button
              className="btn-primary"
              onClick={handleMerge}
              disabled={files.length < 2 || merging}
            >
              <Download size={18} />
              {merging ? 'Merging...' : done ? '✓ Merged! Download Again' : `Merge ${files.length} PDFs`}
            </button>
          </div>
        </div>
      )}

      <FAQSection faqs={faqs} />

      <style>{`
        .tool-page {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }
        .tool-header {
          text-align: center;
          padding: var(--spacing-lg) 0;
        }
        .tool-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .tool-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
        }
        .merge-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .file-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .file-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          transition: var(--transition-fast);
        }
        .file-card:hover {
          border-color: var(--border-active);
          box-shadow: var(--shadow-sm);
        }
        .file-card-grip {
          color: var(--text-dim);
          cursor: grab;
        }
        .file-card-icon {
          color: var(--primary);
        }
        .file-card-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .file-card-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .file-card-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .file-card-actions {
          display: flex;
          gap: 4px;
        }
        .file-card-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .file-card-btn:hover {
          background: var(--bg-surface);
          color: var(--text-main);
        }
        .file-card-delete:hover {
          background: rgba(239,68,68,0.1);
          color: var(--error);
        }
        .merge-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default MergePdf;
