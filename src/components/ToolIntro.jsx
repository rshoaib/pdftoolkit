/**
 * ToolIntro — reusable educational intro section for tool pages.
 * Adds 200+ words of context below the tool header but above the drop zone.
 * Required for AdSense "content value" compliance — tools need educational text,
 * not just a functional interface.
 */
const ToolIntro = ({ paragraphs = [], bestFor = [] }) => {
  if (!paragraphs.length && !bestFor.length) return null;

  return (
    <div className="tool-intro">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {bestFor.length > 0 && (
        <div className="tool-best-for">
          <strong>Best for:</strong> {bestFor.join(' · ')}
        </div>
      )}
      <style>{`
        .tool-intro {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 var(--spacing-md);
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }
        .tool-intro p {
          margin-bottom: var(--spacing-md);
        }
        .tool-best-for {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          font-size: 0.9rem;
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--primary);
        }
      `}</style>
    </div>
  );
};

export default ToolIntro;
