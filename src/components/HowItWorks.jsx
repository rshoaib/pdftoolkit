import { CheckCircle2 } from 'lucide-react';

const HowItWorks = ({ steps = [], schemaTitle = "How to use this tool" }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>
      <div className="how-steps-container">
        {steps.map((step, index) => (
          <div key={index} className="how-step-card glass-panel">
            <div className="step-badge">{index + 1}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .how-it-works-section {
          margin-top: var(--spacing-xxl);
          max-width: 800px;
          margin-inline: auto;
        }
        .how-steps-container {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }
        .how-step-card {
          display: flex;
          gap: var(--spacing-lg);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          align-items: flex-start;
        }
        .step-badge {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          background: var(--gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
        }
        .step-content {
          flex: 1;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .step-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 600px) {
          .how-step-card {
            flex-direction: column;
            gap: var(--spacing-md);
            padding: var(--spacing-md);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
