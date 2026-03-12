import ToolSelector from '../components/ToolSelector';

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <h1 className="hero-title">Tiny <span className="text-gradient">PDF Tools</span></h1>
        <p className="hero-desc">Free, private, client-side PDF utilities. No uploads required.</p>
      </div>
      
      <ToolSelector />
      
      <style>{`
        .hero { text-align: center; padding: var(--spacing-xxl) 0; }
        .hero-title { font-size: 3rem; font-weight: 800; letter-spacing: -1px; margin-bottom: 12px; }
        .hero-desc { font-size: 1.2rem; color: var(--text-muted); max-width: 600px; margin: 0 auto; line-height: 1.6; }
        
        @media (max-width: 768px) {
          .hero { padding: var(--spacing-xl) 0; }
          .hero-title { font-size: 2.2rem; }
          .hero-desc { font-size: 1.05rem; }
        }
      `}</style>
    </>
  );
}
