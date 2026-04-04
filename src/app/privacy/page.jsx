export const metadata = {
  title: 'Privacy Policy — Tiny PDF Tools',
  description: 'Privacy policy for Tiny PDF Tools. All PDF processing happens 100% in your browser — no files are uploaded to any server.',
  alternates: { canonical: 'https://tinypdftools.com/privacy' },
  openGraph: {
    title: 'Privacy Policy — Tiny PDF Tools',
    description: 'Learn how Tiny PDF Tools protects your privacy. 100% client-side processing, no uploads, no tracking of your files.',
    url: 'https://tinypdftools.com/privacy',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return (
    <div className="tool-page" style={{ maxWidth: 760, margin: '0 auto' }}>
      <div className="tool-header">
        <h1 className="tool-title">Privacy Policy</h1>
        <p className="tool-desc">Last updated: April 4, 2026</p>
      </div>

      <div className="legal-content">
        <section>
          <h2>Our Core Privacy Promise</h2>
          <p>
            Tiny PDF Tools processes all PDF files <strong>100% in your browser</strong>. Your documents are never uploaded to any server.
            We cannot see, access, or store your files — they never leave your device.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information We Do NOT Collect</h3>
          <ul>
            <li>Your PDF files or document contents</li>
            <li>File names or metadata from your documents</li>
            <li>Any personally identifiable information (PII) from your files</li>
          </ul>

          <h3>Information We May Collect</h3>
          <ul>
            <li><strong>Analytics Data:</strong> We use Google Analytics 4 to collect anonymous usage data such as page views, tool usage frequency, browser type, device type, and approximate geographic region. This data is aggregated and cannot identify you personally.</li>
            <li><strong>Contact Information:</strong> If you contact us through our contact form, we collect the information you voluntarily provide (name, email, message).</li>
          </ul>
        </section>

        <section>
          <h2>How Your Files Are Processed</h2>
          <p>
            All PDF operations — merging, splitting, compressing, encrypting, converting, and more — are performed using JavaScript libraries
            running directly in your web browser. Specifically:
          </p>
          <ul>
            <li>Files are loaded into your browser&apos;s memory</li>
            <li>Processing occurs entirely on your device using client-side JavaScript</li>
            <li>Processed files are downloaded directly from your browser</li>
            <li>No data is transmitted to our servers or any third-party servers during file processing</li>
          </ul>
          <p>
            You can verify this yourself by opening your browser&apos;s Developer Tools (F12) and monitoring the Network tab while using any tool.
          </p>
        </section>

        <section>
          <h2>Cookies and Tracking</h2>
          <ul>
            <li><strong>Google Analytics:</strong> Uses cookies to collect anonymous usage statistics. You can opt out using browser settings or a Google Analytics opt-out extension.</li>
            <li><strong>Google AdSense:</strong> May use cookies to serve relevant advertisements. These are governed by Google&apos;s own privacy policy.</li>
            <li><strong>Theme Preference:</strong> We store your light/dark theme preference in your browser&apos;s local storage. This never leaves your device.</li>
          </ul>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <ul>
            <li><strong>Google Analytics 4:</strong> For anonymous site usage statistics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><strong>Google AdSense:</strong> For displaying advertisements. <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google Ads Policy</a></li>
            <li><strong>Vercel:</strong> Our hosting provider. Serves the website files. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a></li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            Since your files never leave your device, the risk of data breach through our service is effectively zero for your document contents.
            Our website is served over HTTPS to ensure secure delivery of the application code to your browser.
          </p>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>
            Tiny PDF Tools does not knowingly collect personal information from children under 13. Our tools are general-purpose utilities
            that do not require account creation or personal data submission.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
            Your continued use of the site constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please reach out via our <a href="/contact">contact page</a>.
          </p>
        </section>
      </div>

      <style>{`
        .legal-content {
          line-height: 1.8;
          color: var(--text-main);
        }
        .legal-content section {
          margin-bottom: var(--spacing-xl);
        }
        .legal-content h2 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px solid var(--border-light);
        }
        .legal-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: var(--spacing-md) 0 var(--spacing-sm);
        }
        .legal-content p {
          margin-bottom: var(--spacing-md);
          color: var(--text-muted);
        }
        .legal-content ul {
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }
        .legal-content li {
          margin-bottom: var(--spacing-xs);
          color: var(--text-muted);
        }
        .legal-content a {
          color: var(--primary);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-content strong {
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
}
