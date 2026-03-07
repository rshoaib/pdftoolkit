import { useState } from 'react';
import { Mail, MessageSquare, Send, HelpCircle, Bug, Lightbulb, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@tinypdftools.com?subject=${encodeURIComponent(formData.subject || 'Contact Form')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="static-page">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have a question, found a bug, or want to suggest a new feature? We would love to hear from you.
        Our team typically responds within 24–48 hours during business days.
      </p>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        {submitted ? (
          <div className="success-message">
            <Send size={24} />
            <p><strong>Thank you!</strong> Your email client should have opened with the message pre-filled. If it did not, please email us directly at <a href="mailto:hello@tinypdftools.com">hello@tinypdftools.com</a>.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              >
                <option value="">Select a topic…</option>
                <option value="General Question">General Question</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Privacy Concern">Privacy Concern</option>
                <option value="Business Inquiry">Business Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Please describe your question, issue, or suggestion in detail…"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button type="submit" className="submit-btn">
              <Send size={16} /> Send Message
            </button>
          </form>
        )}
      </section>

      {/* Common Support Topics */}
      <section>
        <h2>Common Support Topics</h2>
        <p>Before reaching out, check if your question is covered below:</p>
        <div className="support-topics">
          <div className="topic-card">
            <HelpCircle size={20} className="topic-icon" />
            <div>
              <h3>How to use a tool</h3>
              <p>Each tool has a simple drag-and-drop interface. Upload your PDF, make changes, and download the result. Check our <a href="/blog">blog guides</a> for detailed step-by-step instructions.</p>
            </div>
          </div>
          <div className="topic-card">
            <Bug size={20} className="topic-icon" />
            <div>
              <h3>Reporting a bug</h3>
              <p>If a tool is not working correctly, please include the browser you are using (Chrome, Firefox, Safari, etc.), the tool name, and a description of the issue. Screenshots are helpful.</p>
            </div>
          </div>
          <div className="topic-card">
            <Lightbulb size={20} className="topic-icon" />
            <div>
              <h3>Suggesting a feature</h3>
              <p>We are always looking for new tools and improvements. Tell us what PDF operation you need and we will evaluate it for our roadmap.</p>
            </div>
          </div>
          <div className="topic-card">
            <Shield size={20} className="topic-icon" />
            <div>
              <h3>Privacy and security</h3>
              <p>All tools process files 100% in your browser. Your files are never uploaded to any server. Read our <a href="/privacy">Privacy Policy</a> for full details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Email */}
      <section className="direct-email">
        <div className="email-card">
          <Mail size={20} />
          <div>
            <strong>Prefer email?</strong> Reach us directly at <a href="mailto:hello@tinypdftools.com">hello@tinypdftools.com</a>
          </div>
        </div>
      </section>

      <style>{`
        .static-page { max-width: 720px; margin: 0 auto; line-height: 1.8; }
        .static-page h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .contact-intro { color: var(--text-muted); font-size: 1.1rem; margin-bottom: var(--spacing-xl); }
        .static-page section { margin-bottom: var(--spacing-xl); }
        .static-page h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: var(--spacing-sm); }
        .static-page a { color: var(--primary); text-decoration: underline; }

        .contact-form-section { margin-bottom: var(--spacing-xxl); }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 14px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          background: var(--bg-panel);
          color: var(--text-main);
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: var(--gradient);
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: opacity 0.2s;
          align-self: flex-start;
        }
        .submit-btn:hover { opacity: 0.9; }

        .success-message {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--primary);
          border-radius: var(--radius-md);
          color: var(--primary);
        }
        .success-message p { color: var(--text-main); margin: 0; }

        .support-topics {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }
        .topic-card {
          display: flex;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .topic-icon {
          flex-shrink: 0;
          color: var(--primary);
          margin-top: 2px;
        }
        .topic-card h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .topic-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin: 0;
        }

        .direct-email .email-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
export default Contact;
