import { Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { ArrowRight } from 'lucide-react';

const RelatedTools = ({ currentToolId, excludeIds = [] }) => {
  // Filter out the current tool and any explicitly excluded tools
  const availableTools = tools.filter(
    t => t.id !== currentToolId && !excludeIds.includes(t.id) && t.id !== 'pdf-reader'
  );
  
  // Pick 3 random tools, or grab the first 3 if shuffling isn't needed
  // A simple determinant shuffle based on the currentToolId length or just grab related ones.
  // We'll just take 3 tools somewhat related or random.
  const shuffled = [...availableTools].sort(() => 0.5 - Math.random());
  const selectedTools = shuffled.slice(0, 3);

  if (selectedTools.length === 0) return null;

  return (
    <section className="related-tools-section">
      <h3 className="related-title">You might also like</h3>
      <div className="related-grid">
        {selectedTools.map((tool) => (
          <Link to={`/${tool.id}`} key={tool.id} className="related-card glass-panel">
            <div className="related-card-icon" style={{ background: `${tool.color}15`, color: tool.color }}>
              <tool.icon size={22} strokeWidth={1.8} />
            </div>
            <div className="related-card-body">
              <h4 className="related-card-title">{tool.title}</h4>
              <p className="related-card-desc">{tool.description.split('.')[0]}.</p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .related-tools-section {
          margin-top: var(--spacing-xxl);
          padding-top: var(--spacing-xl);
          border-top: 1px solid var(--border-light);
        }
        .related-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--spacing-md);
        }
        .related-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: inherit;
          transition: var(--transition-smooth);
        }
        .related-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-sm);
          transform: translateY(-2px);
        }
        .related-card-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }
        .related-card-body {
          flex: 1;
          min-width: 0;
        }
        .related-card-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .related-card-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </section>
  );
};

export default RelatedTools;
