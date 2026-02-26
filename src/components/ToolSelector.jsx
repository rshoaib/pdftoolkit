import { Link } from 'react-router-dom';
import { Merge, Scissors, Minimize2, Image, FileImage, RotateCw, Lock, ArrowRight } from 'lucide-react';

const tools = [
  {
    id: 'merge-pdf',
    title: 'Merge PDF',
    description: 'Combine multiple PDF files into a single document. Drag to reorder pages.',
    icon: Merge,
    color: '#e8432a',
  },
  {
    id: 'split-pdf',
    title: 'Split PDF',
    description: 'Extract specific pages or split a PDF into separate files.',
    icon: Scissors,
    color: '#ff6b35',
  },
  {
    id: 'compress-pdf',
    title: 'Compress PDF',
    description: 'Reduce PDF file size by optimizing embedded images. Perfect for email.',
    icon: Minimize2,
    color: '#10b981',
  },
  {
    id: 'pdf-to-image',
    title: 'PDF to Image',
    description: 'Convert PDF pages to high-quality JPG or PNG images.',
    icon: Image,
    color: '#8b5cf6',
  },
  {
    id: 'image-to-pdf',
    title: 'Image to PDF',
    description: 'Combine JPG, PNG, or WebP images into a single PDF document.',
    icon: FileImage,
    color: '#0ea5e9',
  },
  {
    id: 'rotate-pdf',
    title: 'Rotate PDF',
    description: 'Rotate all pages by 90°, 180°, or 270°. Lossless and instant.',
    icon: RotateCw,
    color: '#14b8a6',
  },
  {
    id: 'protect-pdf',
    title: 'Protect PDF',
    description: 'Add password protection with AES-256 encryption to secure your PDFs.',
    icon: Lock,
    color: '#f59e0b',
  },
];

const ToolSelector = () => {
  return (
    <div className="tool-selector">
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">✨ 100% Free & Private — No Uploads</div>
        <h1 className="hero-title">
          All-in-One <span className="gradient-text">PDF Tools</span>
        </h1>
        <p className="hero-subtitle">
          Merge, split, compress, and convert PDFs entirely in your browser.
          No uploads to any server — your files never leave your device.
        </p>
      </section>

      {/* Tool Cards Grid */}
      <section className="tools-grid">
        {tools.map((tool) => (
          <Link to={`/${tool.id}`} key={tool.id} className="tool-card">
            <div className="tool-card-icon" style={{ background: `${tool.color}15`, color: tool.color }}>
              <tool.icon size={28} strokeWidth={1.8} />
            </div>
            <div className="tool-card-body">
              <h3 className="tool-card-title">{tool.title}</h3>
              <p className="tool-card-desc">{tool.description}</p>
            </div>
            <div className="tool-card-arrow">
              <ArrowRight size={18} />
            </div>
          </Link>
        ))}
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="trust-badge">
          <strong>🔒</strong> No file uploads
        </div>
        <div className="trust-badge">
          <strong>⚡</strong> Instant processing
        </div>
        <div className="trust-badge">
          <strong>♾️</strong> Unlimited usage
        </div>
        <div className="trust-badge">
          <strong>🆓</strong> 100% free
        </div>
      </section>

      <style>{`
        .tool-selector {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xxl);
        }

        .hero {
          text-align: center;
          padding: var(--spacing-xxl) 0 var(--spacing-lg);
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--primary-glow);
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          margin-bottom: var(--spacing-lg);
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: var(--spacing-md);
        }

        .gradient-text {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }

        .tool-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          transition: var(--transition-smooth);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .tool-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-3px);
        }

        .tool-card-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .tool-card-body {
          flex: 1;
          min-width: 0;
        }

        .tool-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .tool-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .tool-card-arrow {
          flex-shrink: 0;
          color: var(--text-dim);
          transition: var(--transition-fast);
        }
        .tool-card:hover .tool-card-arrow {
          color: var(--primary);
          transform: translateX(4px);
        }

        .trust-section {
          display: flex;
          justify-content: center;
          gap: var(--spacing-lg);
          flex-wrap: wrap;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
          .trust-section {
            gap: var(--spacing-sm);
          }
          .trust-badge {
            font-size: 0.8rem;
            padding: 8px 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ToolSelector;
