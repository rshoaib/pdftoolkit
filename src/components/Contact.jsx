import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => (
  <div className="static-page">
    <h1>Contact Us</h1>
    <p className="contact-intro">
      Have questions, feedback, or feature requests? We'd love to hear from you.
    </p>

    <div className="contact-cards">
      <div className="contact-card">
        <div className="contact-icon">
          <Mail size={28} />
        </div>
        <h3>Email</h3>
        <p>For general inquiries and support</p>
        <a href="mailto:hello@tinypdftools.com" className="contact-link">hello@tinypdftools.com</a>
      </div>
      <div className="contact-card">
        <div className="contact-icon">
          <MessageSquare size={28} />
        </div>
        <h3>Feature Requests</h3>
        <p>Suggest new tools or improvements</p>
        <a href="mailto:hello@tinypdftools.com?subject=Feature%20Request" className="contact-link">Send a request</a>
      </div>
    </div>

    <style>{`
      .static-page { max-width: 720px; margin: 0 auto; line-height: 1.8; }
      .static-page h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
      .contact-intro { color: var(--text-muted); font-size: 1.1rem; margin-bottom: var(--spacing-xl); }
      .contact-cards {
        display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: var(--spacing-lg);
      }
      .contact-card {
        padding: var(--spacing-xl); background: var(--bg-panel);
        border: 1px solid var(--border-light); border-radius: var(--radius-md);
        text-align: center;
      }
      .contact-icon {
        width: 56px; height: 56px; margin: 0 auto var(--spacing-md);
        display: flex; align-items: center; justify-content: center;
        background: var(--primary-glow); color: var(--primary);
        border-radius: var(--radius-full);
      }
      .contact-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
      .contact-card p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: var(--spacing-md); }
      .contact-link {
        color: var(--primary); font-weight: 600; text-decoration: underline;
      }
    `}</style>
  </div>
);
export default Contact;
