import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ToolGrid from '../components/ToolGrid';
import { getAllPosts } from '../lib/blogService';

const faqData = [
  {
    question: 'How do I compress a PDF without losing quality?',
    answer: 'You can compress a PDF without losing visual quality by using our "Compress PDF" tool. It intelligently downsamples embedded images and removes redundant metadata while keeping your text and vector graphics crisp. Choose the "Low Compression" option for the best visual retention.'
  },
  {
    question: 'Is it safe to edit and merge PDF files online?',
    answer: 'Yes, if you use a client-side tool like TinyPDFTools. Unlike traditional cloud services that upload your documents, our tools process your PDFs 100% locally in your web browser. This means your sensitive tax records, contracts, and medical documents never leave your device.'
  },
  {
    question: 'How can I merge multiple PDFs into one document for free?',
    answer: 'Use our free "Merge PDF" tool. Simply drag and drop your PDF files into the browser window, visually arrange them in the correct order, and click merge. It combines your files instantly without any upload limits or premium restrictions.'
  },
  {
    question: 'How do I make a PDF file size smaller for an email attachment?',
    answer: 'Email providers usually limit attachments to 20MB or 25MB. To bypass this, use our "Compress PDF" utility and select the "High Compression" setting. This will drastically reduce the file size, allowing you to easily email dense, multi-page documents.'
  },
  {
    question: 'Can I password protect a PDF for free with AES encryption?',
    answer: 'Absolutely. Navigate to our "Protect PDF" tool, upload your document, and enter a secure password. We apply bank-grade AES-256 encryption directly inside your browser to lock the file, ensuring only authorized users can open it.'
  },
  {
    question: 'How do I permanently rotate and save a PDF document?',
    answer: 'If your scanned PDF is sideways or upside down, use our "Rotate PDF" tool. You can rotate all pages by 90 or 180 degrees. Once you click download, the orientation is saved permanently without needing Adobe Acrobat.'
  }
];

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="tool-selector">
      {/* FAQ JSON-LD Schema — server-rendered for Googlebot */}
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

      {/* Hero Section — server-rendered */}
      <section className="hero">
        <div className="hero-badge">100% Free &amp; Private — No Uploads</div>
        <h1 className="hero-title">
          Lightweight &amp; Free <br className="desktop-break"/><span className="text-gradient">PDF Tools</span>
        </h1>
        <p className="hero-subtitle">
          Merge, split, compress, sign, and convert PDFs directly in your browser.
          Everything processes <strong>locally</strong> — your documents are never uploaded to a server.
        </p>
      </section>

      {/* Interactive tool search + grid — client component */}
      <ToolGrid />

      {/* Trust Badges — server-rendered */}
      <section className="trust-section">
        <div className="trust-badge">
          <strong>No file uploads</strong>
        </div>
        <div className="trust-badge">
          <strong>Instant processing</strong>
        </div>
        <div className="trust-badge">
          <strong>Unlimited usage</strong>
        </div>
        <div className="trust-badge">
          <strong>100% free</strong>
        </div>
      </section>

      {/* How It Works — server-rendered */}
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

      {/* Why Privacy Matters — server-rendered */}
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
          <strong>How to verify:</strong> Open Developer Tools (F12 &rarr; Network tab), process any PDF, and inspect the network log. You will see zero outgoing file transfers. This is not a marketing promise — it is a verifiable technical fact.
        </p>
      </section>

      {/* Stats — server-rendered */}
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
          <div className="stat-number">&infin;</div>
          <div className="stat-label">Usage Limit</div>
        </div>
      </section>

      {/* Latest Blog Posts — server-rendered */}
      {recentPosts && recentPosts.length > 0 && (
        <section className="content-section blog-preview-section">
          <h2 className="section-title">Latest PDF Guides &amp; Tutorials</h2>
          <p className="section-intro">Master PDF editing with our free guides, tips, and security tutorials.</p>
          <div className="blog-grid">
            {recentPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card glass-panel">
                {post.image && (
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </div>
                )}
                <div className="blog-card-content">
                  <span className="blog-card-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-read-more">Read Guide <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all-blogs">
            <Link href="/blog" className="btn-secondary">View All Articles</Link>
          </div>
        </section>
      )}

      {/* FAQ — server-rendered */}
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
    </div>
  );
}
