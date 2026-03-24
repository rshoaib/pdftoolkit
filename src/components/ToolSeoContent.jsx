import { toolContent } from '../data/toolContent';

/**
 * SEO content section for tool pages — adds indexable text, how-to steps, and FAQ.
 * Rendered below the actual tool component to enrich thin tool pages for Google.
 */
export default function ToolSeoContent({ toolId }) {
  const content = toolContent[toolId];
  if (!content) return null;

  // NOTE: FAQPage JSON-LD is already injected by the FAQSection component
  // inside each tool component. Only inject HowTo schema here to avoid
  // "Duplicate field FAQPage" errors in Google Rich Results Test.

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: content.heading,
    step: content.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <section style={{
        maxWidth: '720px',
        margin: '3rem auto',
        padding: '0 1.5rem',
        color: '#374151',
        lineHeight: '1.75',
      }}>
        {/* How-To Section */}
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#111827',
          marginBottom: '0.75rem',
        }}>
          {content.heading}
        </h2>
        <p style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>
          {content.intro}
        </p>

        <ol style={{
          paddingLeft: '1.5rem',
          marginBottom: '1.25rem',
        }}>
          {content.steps.map((step, i) => (
            <li key={i} style={{
              marginBottom: '0.5rem',
              fontSize: '0.95rem',
            }}>
              {step}
            </li>
          ))}
        </ol>

        <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
          {content.details}
        </p>

        {/* FAQ Section */}
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#111827',
          marginBottom: '1rem',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '1.5rem',
        }}>
          Frequently Asked Questions
        </h2>

        <div>
          {content.faqs.map((faq, i) => (
            <details key={i} style={{
              marginBottom: '0.75rem',
              borderBottom: '1px solid #f3f4f6',
              paddingBottom: '0.75rem',
            }}>
              <summary style={{
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: '#1f2937',
                padding: '0.5rem 0',
              }}>
                {faq.q}
              </summary>
              <p style={{
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                color: '#6b7280',
                paddingLeft: '0.5rem',
              }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
