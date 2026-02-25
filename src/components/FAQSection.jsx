import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (faqs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <section className="faq-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}>
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span>{faq.q}</span>
              <ChevronDown size={18} className={`faq-chevron ${openIndex === i ? 'faq-chevron-open' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .faq-section {
          max-width: 720px;
          margin: 0 auto;
          padding: var(--spacing-xxl) 0;
        }
        .faq-title {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: var(--spacing-xl);
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .faq-item {
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--bg-panel);
          transition: var(--transition-fast);
        }
        .faq-item:hover {
          border-color: var(--border-active);
        }
        .faq-open {
          border-color: var(--primary);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) var(--spacing-lg);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
          text-align: left;
        }
        .faq-chevron {
          flex-shrink: 0;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .faq-chevron-open {
          transform: rotate(180deg);
          color: var(--primary);
        }
        .faq-answer {
          padding: 0 var(--spacing-lg) var(--spacing-md);
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
