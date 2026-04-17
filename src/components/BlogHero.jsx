import {
  Shield, Lock, BookOpen, FileText, GraduationCap,
  Zap, Repeat, Image as ImageIcon, Scale, Sparkles,
} from 'lucide-react';

// Category → (icon, gradient) mapping. Categories not listed fall back to "default".
const CATEGORY_STYLES = {
  Privacy:       { Icon: Shield,         from: '#6366f1', to: '#8b5cf6' },
  Security:      { Icon: Lock,           from: '#f59e0b', to: '#ef4444' },
  Guides:        { Icon: BookOpen,       from: '#0ea5e9', to: '#2563eb' },
  Guide:         { Icon: BookOpen,       from: '#0ea5e9', to: '#2563eb' },
  PDF:           { Icon: FileText,       from: '#e8432a', to: '#ff6b35' },
  'PDF Basics':  { Icon: FileText,       from: '#e8432a', to: '#ff6b35' },
  Tutorials:     { Icon: GraduationCap,  from: '#10b981', to: '#14b8a6' },
  Productivity:  { Icon: Zap,            from: '#d946ef', to: '#8b5cf6' },
  Conversion:    { Icon: Repeat,         from: '#0891b2', to: '#0ea5e9' },
  Images:        { Icon: ImageIcon,      from: '#7c3aed', to: '#a855f7' },
  Comparison:    { Icon: Scale,          from: '#14b8a6', to: '#0d9488' },
};

const DEFAULT_STYLE = { Icon: Sparkles, from: '#64748b', to: '#334155' };

/**
 * Inline-SVG hero/card image for blog posts.
 *   variant="hero" → large 16:9 block used on a blog post page
 *   variant="card" → shorter thumbnail used on list/grid cards
 */
const BlogHero = ({ category, variant = 'hero' }) => {
  const { Icon, from, to } = CATEGORY_STYLES[category] || DEFAULT_STYLE;

  return (
    <div className={`blog-hero-svg blog-hero-svg--${variant}`}>
      <div
        className="blog-hero-svg-gradient"
        style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      >
        {/* Decorative backdrop rings — pure SVG, no external asset */}
        <svg
          className="blog-hero-svg-rings"
          viewBox="0 0 400 225"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="330" cy="45"  r="70"  fill="rgba(255,255,255,0.10)" />
          <circle cx="70"  cy="180" r="95"  fill="rgba(255,255,255,0.08)" />
          <circle cx="200" cy="110" r="140" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        </svg>
        <Icon
          className="blog-hero-svg-icon"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <style>{`
        .blog-hero-svg {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .blog-hero-svg--hero { margin-bottom: var(--spacing-xl); }
        .blog-hero-svg--card { height: 200px; }
        .blog-hero-svg-gradient {
          position: relative;
          width: 100%;
          height: 100%;
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .blog-hero-svg--card .blog-hero-svg-gradient {
          aspect-ratio: auto;
          height: 100%;
        }
        .blog-hero-svg-rings {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .blog-hero-svg-icon {
          position: relative;
          z-index: 1;
          width: 30%;
          height: auto;
          max-width: 128px;
          min-width: 56px;
          color: rgba(255, 255, 255, 0.95);
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
        }
        .blog-hero-svg--card .blog-hero-svg-icon {
          width: 72px;
          min-width: 0;
        }
      `}</style>
    </div>
  );
};

export default BlogHero;
