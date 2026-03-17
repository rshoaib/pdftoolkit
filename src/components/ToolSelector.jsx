"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { tools } from '../data/tools';

const ToolSelector = () => {
  const faqData = [
    {
      question: 'Are all 18 PDF tools really free?',
      answer: 'Yes. Every tool on Tiny PDF Tools is completely free with no usage limits, no daily caps, and no premium tiers. There is no account to create and nothing to install. We keep every tool free for everyone.',
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

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Tools' },
    { key: 'convert', label: 'Convert' },
    { key: 'edit', label: 'Edit' },
    { key: 'security', label: 'Security' },
    { key: 'organize', label: 'Organize' },
  ];

  const toolCategories = {
    'merge-pdf': 'organize', 'split-pdf': 'organize', 'organize-pdf': 'organize',
    'delete-pdf-pages': 'organize', 'extract-pdf-pages': 'organize',
    'compress-pdf': 'edit', 'rotate-pdf': 'edit', 'crop-pdf': 'edit',
    'watermark-pdf': 'edit', 'add-page-numbers': 'edit', 'flatten-pdf': 'edit', 'sign-pdf': 'edit',
    'pdf-to-image': 'convert', 'image-to-pdf': 'convert', 'pdf-reader': 'convert',
    'protect-pdf': 'security', 'unlock-pdf': 'security',
  };

  const popularToolIds = ['merge-pdf', 'split-pdf', 'compress-pdf', 'pdf-to-image', 'protect-pdf', 'sign-pdf'];

  const popularArr = useMemo(() => {
    // Maintain the order defined in popularToolIds
    return popularToolIds.map(id => tools.find(t => t.id === id)).filter(Boolean);
  }, []);

  const otherTools = useMemo(() => {
    return tools.filter(t => !popularToolIds.includes(t.id));
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter(t => {
      const matchesSearch = !search || t.title.toLowerCase().includes(search.toLowerCase())
        || t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || toolCategories[t.id] === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const filteredOtherTools = useMemo(() => {
    return otherTools.filter(t => {
      const matchesSearch = !search || t.title.toLowerCase().includes(search.toLowerCase())
        || t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || toolCategories[t.id] === category;
      return matchesSearch && matchesCategory;
    });
  }, [otherTools, search, category]);

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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">✨ 100% Free & Private — No Uploads</div>
        <h1 className="hero-title">
          Lightweight & Free <br className="desktop-break"/><span className="text-gradient">PDF Tools</span>
        </h1>
        <p className="hero-subtitle">
          Merge, split, compress, sign, and convert PDFs directly in your browser. 
          Everything processes <strong>locally</strong> — your documents are never uploaded to a server.
        </p>
        
        {/* Search */}
        <div className="search-bar-container">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search 18 free tools... (e.g. merge, compress, sign)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* 
        If user is actively typing in search, show traditional grid of ALL filtered tools.
        If user is NOT searching, show the engineered layout (Popular vs Tabs).
      */}
      {search ? (
        <section className="search-results-section content-section">
          <h2 className="section-title">Search Results</h2>
          <div className="tools-grid">
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
            {filteredTools.length === 0 && (
              <p className="no-results">No tools match your search "{search}".</p>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* POPULAR TOOLS SECTION (Top 6) */}
          <section className="popular-tools-section content-section">
            <h2 className="section-title">Most Popular Tools</h2>
            <div className="tools-grid featured-grid">
              {popularArr.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} isFeatured={true} />
              ))}
            </div>
          </section>

          {/* CATEGORIZED TOOLS TABS (Remaining 12) */}
          <section className="categorized-tools-section content-section">
            <div className="category-header">
              <h2 className="section-title">More PDF Tools</h2>
              <div className="category-tabs">
                {categories.map(c => (
                  <button
                    key={c.key}
                    className={`category-tab ${category === c.key ? 'category-tab-active' : ''}`}
                    onClick={() => setCategory(c.key)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="tools-grid">
              {filteredOtherTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
              {filteredOtherTools.length === 0 && (
                <p className="no-results">No remaining tools in this category.</p>
              )}
            </div>
          </section>
        </>
      )}

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
          <div className="step-card glass-panel">
            <div className="step-number">1</div>
            <h3>Choose Your Tool</h3>
            <p>Select any of the 18 PDF tools above. Each tool is purpose-built for a specific task — from merging and splitting to signing and encrypting. Click the tool card to get started instantly.</p>
          </div>
          <div className="step-card glass-panel">
            <div className="step-number">2</div>
            <h3>Upload Your PDF</h3>
            <p>Drag and drop your PDF file onto the upload area, or click to browse your device. The file loads directly into your browser's memory — it is never sent to any external server or cloud storage.</p>
          </div>
          <div className="step-card glass-panel">
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
          <div className="stat-number">18</div>
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
          padding: calc(var(--spacing-xxl) * 1.5) 0 var(--spacing-lg);
          max-width: 800px;
          margin: 0 auto;
        }

        .desktop-break { display: block; }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--primary-glow);
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          margin-bottom: var(--spacing-lg);
          animation: float 3s ease-in-out infinite;
        }

        .hero-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -2px;
          margin-bottom: var(--spacing-md);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto var(--spacing-xl);
          line-height: 1.7;
        }

        .search-bar-container {
          display: flex;
          justify-content: center;
          margin: 0 auto;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 12px 24px;
          background: var(--bg-panel);
          border: 2px solid var(--border-light);
          border-radius: var(--radius-full);
          width: 100%;
          max-width: 520px;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }
        .search-bar:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
          transform: translateY(-2px);
        }
        .search-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .search-input {
          border: none;
          background: transparent;
          outline: none;
          font-family: inherit;
          font-size: 1.05rem;
          color: var(--text-main);
          width: 100%;
          font-weight: 500;
        }
        .search-input::placeholder {
          color: var(--text-dim);
          font-weight: 400;
        }

        .category-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: var(--spacing-xl);
        }

        .category-tabs {
          display: inline-flex;
          background: var(--bg-surface);
          padding: 4px;
          border-radius: var(--radius-lg);
          margin-top: var(--spacing-md);
          border: 1px solid var(--border-light);
        }
        
        .category-tab {
          padding: 8px 24px;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .category-tab:hover {
          color: var(--primary);
        }
        .category-tab-active {
          background: var(--bg-panel);
          color: var(--text-main);
          box-shadow: var(--shadow-sm);
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          color: var(--text-muted);
          font-size: 1.1rem;
          padding: var(--spacing-xl) 0;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }

        .featured-grid .tool-card {
          padding: var(--spacing-xl);
          background: var(--bg-panel);
          border: 2px solid var(--border-light);
          position: relative;
        }
        
        .featured-grid .tool-card-title {
          font-size: 1.25rem;
        }
        
        .featured-grid .tool-card-icon {
          width: 64px;
          height: 64px;
        }

        .tool-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          transition: var(--transition-smooth);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          opacity: 0;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tool-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-4px);
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
          color: var(--text-main);
        }

        .tool-card-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .tool-card-arrow {
          flex-shrink: 0;
          color: var(--text-dim);
          transition: var(--transition-fast);
          padding: 8px;
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
          padding-top: var(--spacing-xl);
          border-top: 1px solid var(--border-light);
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }

        .content-section {
          max-width: 1040px;
          margin: 0 auto;
          width: 100%;
        }
        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: var(--spacing-sm);
          letter-spacing: -0.5px;
        }
        .section-intro {
          text-align: center;
          color: var(--text-muted);
          font-size: 1.1rem;
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
          gap: var(--spacing-xl);
        }
        .step-card {
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          transition: var(--transition-smooth);
        }
        .step-card:hover {
          box-shadow: var(--shadow-glow);
          transform: translateY(-4px);
        }
        .step-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
        }
        .step-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .step-number {
          width: 54px;
          height: 54px;
          margin: 0 auto var(--spacing-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient);
          color: #fff;
          font-weight: 800;
          font-size: 1.4rem;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-glow);
        }

        .comparison-table-wrap {
          overflow-x: auto;
          margin-bottom: var(--spacing-md);
          background: var(--bg-panel);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .comparison-table th,
        .comparison-table td {
          padding: 16px 20px;
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
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        .comparison-table td:last-child {
          color: var(--primary);
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-lg);
          background: var(--gradient);
          color: #fff;
          border-radius: var(--radius-lg);
          padding: var(--spacing-xl);
        }
        .stat-card {
          text-align: center;
          padding: var(--spacing-md);
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 4px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .stat-label {
          font-size: 0.95rem;
          font-weight: 600;
          opacity: 0.9;
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
          font-size: 1.05rem;
          cursor: pointer;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .faq-question::-webkit-details-marker { display: none; }
        .faq-question::after {
          content: '+';
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--text-dim);
          transition: transform 0.2s;
        }
        .faq-item[open] .faq-question::after {
          content: '−';
          color: var(--primary);
        }
        .faq-answer {
          padding: 0 var(--spacing-lg) var(--spacing-lg);
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .desktop-break { display: none; }
          .hero-title {
            font-size: 2.2rem;
          }
          .search-bar {
            padding: 10px 20px;
          }
           .category-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            gap: 4px;
          }
          .category-tab {
            text-align: center;
            padding: 10px 8px;
          }
          .tools-grid {
            grid-template-columns: 1fr;
          }
          .trust-section {
            gap: var(--spacing-sm);
          }
          .trust-badge {
            font-size: 0.85rem;
            padding: 10px 16px;
            width: calc(50% - 4px);
            justify-content: center;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            border-radius: 0;
            margin: 0 calc(-1 * var(--spacing-xl));
          }
          .section-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

// Component for a Tool Card
const ToolCard = ({ tool, index, isFeatured = false }) => (
  <Link 
    href={`/${tool.id}`} 
    className="tool-card"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <div className="tool-card-icon" style={{ background: `${tool.color}15`, color: tool.color }}>
      <tool.icon size={isFeatured ? 32 : 28} strokeWidth={isFeatured ? 2 : 1.8} />
    </div>
    <div className="tool-card-body">
      <h3 className="tool-card-title">{tool.title}</h3>
      <p className="tool-card-desc">{tool.description}</p>
    </div>
    <div className="tool-card-arrow">
      <ArrowRight size={isFeatured ? 20 : 18} />
    </div>
  </Link>
);

export default ToolSelector;
