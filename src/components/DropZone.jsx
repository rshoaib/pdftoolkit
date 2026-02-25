import { useCallback, useState, useRef } from 'react';
import { Upload, FileUp, X } from 'lucide-react';

const DropZone = ({ onFiles, accept = '.pdf', multiple = true, label = 'Drop your PDF files here' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = [...e.dataTransfer.files];
    if (files.length > 0) onFiles(files);
  }, [onFiles]);

  const handleChange = useCallback((e) => {
    const files = [...e.target.files];
    if (files.length > 0) onFiles(files);
    e.target.value = '';
  }, [onFiles]);

  return (
    <div
      className={`dropzone ${isDragging ? 'dropzone-active' : ''}`}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="sr-only"
        aria-label="Upload files"
      />
      <div className="dropzone-content">
        <div className="dropzone-icon">
          <Upload size={36} strokeWidth={1.5} />
        </div>
        <p className="dropzone-label">{label}</p>
        <p className="dropzone-hint">or click to browse</p>
        <button type="button" className="btn-primary dropzone-btn">
          <FileUp size={18} /> Select Files
        </button>
      </div>

      <style>{`
        .dropzone {
          border: 2px dashed var(--border-light);
          border-radius: var(--radius-lg);
          padding: var(--spacing-xxl) var(--spacing-xl);
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: center;
          background: var(--bg-panel);
          position: relative;
        }
        .dropzone:hover, .dropzone-active {
          border-color: var(--primary);
          background: var(--primary-glow);
        }
        .dropzone-active {
          transform: scale(1.01);
        }
        .dropzone-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
        }
        .dropzone-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          background: var(--primary-glow);
          color: var(--primary);
        }
        .dropzone-label {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .dropzone-hint {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .dropzone-btn {
          margin-top: var(--spacing-sm);
        }
      `}</style>
    </div>
  );
};

export default DropZone;
