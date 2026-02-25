const PrivacyPolicy = () => (
  <div className="static-page">
    <h1>Privacy Policy</h1>
    <p className="updated">Last updated: February 2026</p>

    <section>
      <h2>Your Privacy is Our Priority</h2>
      <p>Tiny PDF Tools is a 100% client-side web application. <strong>None of your files are ever uploaded to any server.</strong> All PDF processing happens entirely within your browser using JavaScript.</p>
    </section>

    <section>
      <h2>Data We Don't Collect</h2>
      <ul>
        <li>❌ We do NOT upload, store, or access your PDF files</li>
        <li>❌ We do NOT require any login or account creation</li>
        <li>❌ We do NOT sell or share any personal data</li>
      </ul>
    </section>

    <section>
      <h2>Data We May Collect</h2>
      <ul>
        <li>✅ <strong>Analytics:</strong> We use Google Analytics (GA4) to collect anonymized usage data like page views, session duration, and device type. This helps us improve the tool.</li>
        <li>✅ <strong>Cookies:</strong> We use essential cookies for theme preferences. Third-party cookies may be set by Google AdSense.</li>
      </ul>
    </section>

    <section>
      <h2>Third-Party Services</h2>
      <ul>
        <li><strong>Google Analytics</strong> — anonymized traffic data</li>
        <li><strong>Google AdSense</strong> — advertising (may use cookies)</li>
        <li><strong>Google Fonts</strong> — typography (no tracking)</li>
      </ul>
    </section>

    <section>
      <h2>Contact</h2>
      <p>Questions about this policy? Reach out via our <a href="/contact">Contact page</a>.</p>
    </section>

    <style>{`
      .static-page { max-width: 720px; margin: 0 auto; line-height: 1.8; }
      .static-page h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
      .static-page .updated { color: var(--text-muted); margin-bottom: var(--spacing-xl); }
      .static-page section { margin-bottom: var(--spacing-xl); }
      .static-page h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: var(--spacing-sm); }
      .static-page ul { list-style: none; padding: 0; }
      .static-page li { padding: 4px 0; }
      .static-page a { color: var(--primary); text-decoration: underline; }
    `}</style>
  </div>
);
export default PrivacyPolicy;
