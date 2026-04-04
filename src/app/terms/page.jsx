export const metadata = {
  title: 'Terms of Service — Tiny PDF Tools',
  description: 'Terms of service for Tiny PDF Tools. Free, browser-based PDF tools with no warranties — use at your own discretion.',
  alternates: { canonical: 'https://tinypdftools.com/terms' },
  openGraph: {
    title: 'Terms of Service — Tiny PDF Tools',
    description: 'Terms and conditions for using Tiny PDF Tools, a free browser-based PDF toolkit.',
    url: 'https://tinypdftools.com/terms',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return (
    <div className="tool-page" style={{ maxWidth: 760, margin: '0 auto' }}>
      <div className="tool-header">
        <h1 className="tool-title">Terms of Service</h1>
        <p className="tool-desc">Last updated: April 4, 2026</p>
      </div>

      <div className="legal-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Tiny PDF Tools (&quot;the Service&quot;), available at tinypdftools.com, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            Tiny PDF Tools is a free, browser-based PDF toolkit that provides tools for merging, splitting, compressing, converting,
            encrypting, and otherwise manipulating PDF files. All file processing occurs entirely within your web browser using
            client-side JavaScript — no files are uploaded to our servers.
          </p>
        </section>

        <section>
          <h2>3. Free Use</h2>
          <p>
            All tools on Tiny PDF Tools are provided free of charge with no usage limits. No account registration is required.
            We reserve the right to modify, suspend, or discontinue any part of the Service at any time without prior notice.
          </p>
        </section>

        <section>
          <h2>4. User Responsibilities</h2>
          <ul>
            <li>You are solely responsible for the files you process using our tools.</li>
            <li>You must have the legal right to modify any documents you process through the Service.</li>
            <li>You agree not to use the Service for any unlawful purpose or in violation of any applicable laws.</li>
            <li>You are responsible for maintaining backups of your original files before processing.</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            The Service, including its design, code, and branding, is the intellectual property of Tiny PDF Tools. You may not
            copy, modify, distribute, or reverse-engineer the Service without written permission. The tools themselves are built
            using open-source libraries, and their respective licenses apply.
          </p>
        </section>

        <section>
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including
            but not limited to:
          </p>
          <ul>
            <li>Fitness for a particular purpose</li>
            <li>Accuracy or reliability of results</li>
            <li>Uninterrupted or error-free operation</li>
            <li>Compatibility with all browsers or devices</li>
          </ul>
          <p>
            PDF processing quality depends on your browser, device capabilities, and the source files. Results may vary.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Tiny PDF Tools and its creators shall not be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Service.
            This includes but is not limited to data loss, file corruption, or any other damages resulting from file processing.
          </p>
        </section>

        <section>
          <h2>8. Third-Party Services</h2>
          <p>
            The Service uses third-party services including Google Analytics (for usage statistics) and Google AdSense
            (for advertisements). Your use of the Service is also subject to the terms and privacy policies of these third-party
            providers.
          </p>
        </section>

        <section>
          <h2>9. Modifications to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated
            revision date. Continued use of the Service after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2>10. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>
            For questions about these Terms of Service, please visit our <a href="/contact">contact page</a>.
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
