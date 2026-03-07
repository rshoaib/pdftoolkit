import { Link } from 'react-router-dom';
import { Merge, Scissors, Minimize2, Image, FileImage, RotateCw, Lock, Unlock, Droplets, GripVertical, ListOrdered, Crop, ArrowRight, Trash2, Layers, PenTool, FileOutput } from 'lucide-react';

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
  {
    id: 'unlock-pdf',
    title: 'Unlock PDF',
    description: 'Remove password protection from PDFs you own. Enter password, get unlocked copy.',
    icon: Unlock,
    color: '#22c55e',
  },
  {
    id: 'watermark-pdf',
    title: 'Watermark PDF',
    description: 'Add text watermarks with custom size, opacity, rotation, and color.',
    icon: Droplets,
    color: '#6366f1',
  },
  {
    id: 'organize-pdf',
    title: 'Organize PDF',
    description: 'Drag and drop to rearrange pages, delete unwanted pages, or duplicate them.',
    icon: GripVertical,
    color: '#0d9488',
  },
  {
    id: 'add-page-numbers',
    title: 'Add Page Numbers',
    description: 'Stamp page numbers on every page. Choose position, format, and style.',
    icon: ListOrdered,
    color: '#dc2626',
  },
  {
    id: 'crop-pdf',
    title: 'Crop PDF',
    description: 'Visually trim margins or cut specific areas from PDF pages. Drag to crop.',
    icon: Crop,
    color: '#7c3aed',
  },
  {
    id: 'delete-pdf-pages',
    title: 'Delete Pages',
    description: 'Remove unwanted pages from your PDF. Click to select, download the trimmed file.',
    icon: Trash2,
    color: '#ef4444',
  },
  {
    id: 'flatten-pdf',
    title: 'Flatten PDF',
    description: 'Merge form fields and annotations into a static, non-editable document.',
    icon: Layers,
    color: '#64748b',
  },
  {
    id: 'sign-pdf',
    title: 'Sign PDF',
    description: 'Draw or type your signature and place it on any page of your PDF.',
    icon: PenTool,
    color: '#2563eb',
  },
  {
    id: 'extract-pdf-pages',
    title: 'Extract Pages',
    description: 'Select and extract specific pages from a PDF into a new file.',
    icon: FileOutput,
    color: '#059669',
  },
];

const ToolSelector = () => {
  const faqData = [
    {
      question: 'Are all 16 PDF tools really free?',
      answer: 'Yes. Every tool on Tiny PDF Tools is completely free with no usage limits, no daily caps, and no premium tiers. There is no account to create and nothing to install. We generate revenue through non-intrusive display ads, which allows us to keep every tool free for everyone.',
    },
    {
      question: 'Do my PDF files get uploaded to a server?',
      answer: 'No. Every tool processes files 100% in your browser using JavaScript and the pdf-lib library. Your files never leave your device. You can verify this yourself by opening Developer Tools (F12), going to the Network tab, and processing any PDF — you will see zero file uploads.',
    },
    {
      question: 'What browsers and devices are supported?',
      answer: 'Tiny PDF Tools works on all modern browsers including Chrome, Firefox, Edge, Safari, and Brave. The tools work on desktop computers, laptops, tablets, and mobile phones. No software installation or browser extension is required.',
    },
    {
      question: 'Is there a file size limit for PDFs?',
      answer: 'There is no hard file size limit. Since all processing happens in your browser\'s memory, very large PDFs (over 100 MB) may take longer to process depending on your device\'s available RAM. For most documents under 50 MB, processing is near-instant.',
    },
    {
      question: 'How is this different from Adobe Acrobat or Smallpdf?',
      answer: 'The key difference is privacy and cost. Adobe Acrobat costs $22.99/month and requires account creation. Smallpdf limits free users to 2 tasks per day and uploads files to their servers. Tiny PDF Tools is completely free, requires no account, and processes everything in your browser — your files never touch a remote server.',
    },
    {
      question: 'Can I use these tools for business and commercial documents?',
      answer: 'Absolutely. Many professionals use Tiny PDF Tools for contracts, invoices, proposals, and financial reports. Since files are processed entirely in your browser, there is no risk of data exposure through third-party servers. This makes our tools particularly well-suited for sensitive business documents.',
    },
  ];

  return (
    <div className="tool-selector">
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">✨ 100% Free & Private — No Uploads</div>
        <h1 className="hero-title">
          All-in-One <span className="gradient-text">PDF Tools</span>
        </h1>
        <p className="hero-subtitle">
          Merge, split, compress, sign, watermark, encrypt, and convert PDFs entirely in your browser.
          No uploads to any server — your files never leave your device. 16 professional tools, completely free.
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

      {/* How It Works */}
      <section className="content-section">
        <h2 className="section-title">How It Works</h2>
        <p className="section-intro">Every tool follows the same simple, three-step process. No accounts, no installations, no waiting.</p>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choose Your Tool</h3>
            <p>Select any of the 16 PDF tools above. Each tool is purpose-built for a specific task — from merging and splitting to signing and encrypting. Click the tool card to get started instantly.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Upload Your PDF</h3>
            <p>Drag and drop your PDF file onto the upload area, or click to browse your device. The file loads directly into your browser's memory — it is never sent to any external server or cloud storage.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Download the Result</h3>
            <p>Make your changes and click the action button. The processed PDF downloads directly to your device in seconds. The original file is never modified, preserved, or stored anywhere — once you close the tab, it is gone.</p>
          </div>
        </div>
      </section>

      {/* Why Privacy Matters */}
      <section className="content-section">
        <h2 className="section-title">Why Client-Side Processing Matters</h2>
        <p className="section-intro">
          Most PDF tools upload your files to remote servers for processing. That means your contracts, financial statements, medical records, and personal documents pass through third-party infrastructure you cannot audit or control. Tiny PDF Tools takes a fundamentally different approach.
        </p>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Server-Based Tools</th>
                <th>Tiny PDF Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>File handling</td><td>Uploaded to remote servers</td><td><strong>Never leaves your device</strong></td></tr>
              <tr><td>Account required</td><td>Yes — email + password</td><td><strong>No account needed</strong></td></tr>
              <tr><td>Data retention</td><td>Files may be stored</td><td><strong>Zero data retention</strong></td></tr>
              <tr><td>Usage limits</td><td>2–5 tasks/day (free tier)</td><td><strong>Unlimited, always</strong></td></tr>
              <tr><td>Cost</td><td>$12–$23/month</td><td><strong>$0 — forever free</strong></td></tr>
              <tr><td>Privacy verification</td><td>Trust the provider</td><td><strong>Check Network tab (F12)</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p className="section-note">
          <strong>How to verify:</strong> Open Developer Tools (F12 → Network tab), process any PDF, and inspect the network log. You will see zero outgoing file transfers. This is not a marketing promise — it is a verifiable technical fact.
        </p>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-number">16</div>
          <div className="stat-label">Free PDF Tools</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">0</div>
          <div className="stat-label">Files Uploaded</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">0</div>
          <div className="stat-label">Accounts Required</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">∞</div>
          <div className="stat-label">Usage Limit</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
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


        .content-section {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        .section-title {
          font-size: 1.8rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: var(--spacing-sm);
        }
        .section-intro {
          text-align: center;
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto var(--spacing-xl);
        }
        .section-note {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-top: var(--spacing-lg);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--primary);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }
        .step-card {
          padding: var(--spacing-xl);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          text-align: center;
        }
        .step-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
        }
        .step-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .step-number {
          width: 48px;
          height: 48px;
          margin: 0 auto var(--spacing-md);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient);
          color: #fff;
          font-weight: 800;
          font-size: 1.3rem;
          border-radius: var(--radius-full);
        }

        .comparison-table-wrap {
          overflow-x: auto;
          margin-bottom: var(--spacing-md);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.92rem;
        }
        .comparison-table th,
        .comparison-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--border-light);
        }
        .comparison-table th {
          background: var(--bg-surface);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
        }
        .comparison-table td:last-child {
          color: var(--primary);
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-lg);
        }
        .stat-card {
          text-align: center;
          padding: var(--spacing-xl);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .faq-item {
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .faq-item[open] {
          border-color: var(--primary);
        }
        .faq-question {
          padding: var(--spacing-lg);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .faq-question::-webkit-details-marker { display: none; }
        .faq-question::after {
          content: '+';
          font-size: 1.3rem;
          font-weight: 300;
          color: var(--text-muted);
          transition: transform 0.2s;
        }
        .faq-item[open] .faq-question::after {
          content: '−';
          color: var(--primary);
        }
        .faq-answer {
          padding: 0 var(--spacing-lg) var(--spacing-lg);
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
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
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .stats-section {
            grid-template-columns: repeat(2, 1fr);
          }
          .section-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ToolSelector;
