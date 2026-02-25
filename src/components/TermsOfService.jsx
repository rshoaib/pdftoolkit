const TermsOfService = () => (
  <div className="static-page">
    <h1>Terms of Service</h1>
    <p className="updated">Last updated: February 2026</p>

    <section>
      <h2>1. Acceptance</h2>
      <p>By using Tiny PDF Tools, you agree to these terms. If you do not agree, please do not use the service.</p>
    </section>

    <section>
      <h2>2. Service Description</h2>
      <p>Tiny PDF Tools provides free, browser-based PDF manipulation tools. All processing occurs on your device. We do not store, transmit, or have access to your files.</p>
    </section>

    <section>
      <h2>3. No Warranty</h2>
      <p>The service is provided "as is" without warranties of any kind. We do not guarantee that the tools will work perfectly for all PDF files or in all browsers.</p>
    </section>

    <section>
      <h2>4. Limitation of Liability</h2>
      <p>Tiny PDF Tools shall not be liable for any damages arising from the use of, or inability to use, this service. Always keep backup copies of your original files.</p>
    </section>

    <section>
      <h2>5. Acceptable Use</h2>
      <p>You agree to use the service only for lawful purposes. Do not use it to process files that violate any laws or regulations.</p>
    </section>

    <section>
      <h2>6. Changes</h2>
      <p>We may update these terms at any time. Continued use of the service constitutes acceptance of any changes.</p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>Questions? Reach out via our <a href="/contact">Contact page</a>.</p>
    </section>

    <style>{`
      .static-page { max-width: 720px; margin: 0 auto; line-height: 1.8; }
      .static-page h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
      .static-page .updated { color: var(--text-muted); margin-bottom: var(--spacing-xl); }
      .static-page section { margin-bottom: var(--spacing-xl); }
      .static-page h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: var(--spacing-sm); }
      .static-page a { color: var(--primary); text-decoration: underline; }
    `}</style>
  </div>
);
export default TermsOfService;
