import {
  // Generic / category fallbacks
  Shield, ShieldCheck, Lock, Unlock, BookOpen, FileText, GraduationCap,
  Zap, Repeat, Image as ImageIcon, Scale, Sparkles,
  // Content-specific icons (keyword rules)
  Combine, Scissors, Minimize2, RotateCw, Crop, PenLine, Stamp, Layers,
  Mail, Printer, Hash, FileMinus, FileOutput, Trash2, ArrowDownUp,
  Tag, Receipt, Edit3, EyeOff, FileImage,
} from 'lucide-react';

/**
 * Resolution order (first match wins):
 *   1. SLUG_OVERRIDES — explicit per-post override
 *   2. KEYWORD_RULES  — keyword scan over slug + title (most-specific → least-specific)
 *   3. CATEGORY_STYLES — broad category fallback
 *   4. DEFAULT_STYLE
 */

// 1) Per-slug overrides. Add an entry only when keyword inference picks the wrong icon.
const SLUG_OVERRIDES = {
  // Comprehensive security guide — slug contains "watermark" which would win
  // keyword inference, but the post is really about PDF security as a whole.
  'pdf-security-guide-watermark-encrypt-flatten': { Icon: ShieldCheck, from: '#6366f1', to: '#8b5cf6' },
};

// 2) Keyword rules. ORDER MATTERS — put specific before general so e.g.
//    "remove-password" hits Unlock before "remove" alone hits Trash2.
const KEYWORD_RULES = [
  { match: ['vs-', 'vs ', 'comparison'],                           Icon: Scale,       from: '#14b8a6', to: '#0d9488' },
  { match: ['metadata'],                                           Icon: Tag,         from: '#64748b', to: '#334155' },
  { match: ['blank'],                                              Icon: FileMinus,   from: '#f43f5e', to: '#e11d48' },
  { match: ['unlock', 'remove-password', 'remove password'],       Icon: Unlock,      from: '#f59e0b', to: '#d97706' },
  { match: ['redact'],                                             Icon: EyeOff,      from: '#4f46e5', to: '#1e1b4b' },
  { match: ['tax'],                                                Icon: Receipt,     from: '#10b981', to: '#047857' },
  { match: ['email'],                                              Icon: Mail,        from: '#0ea5e9', to: '#0284c7' },
  { match: ['print'],                                              Icon: Printer,     from: '#475569', to: '#1e40af' },
  { match: ['page-number', 'page number'],                         Icon: Hash,        from: '#6366f1', to: '#4338ca' },
  { match: ['watermark'],                                          Icon: Stamp,       from: '#06b6d4', to: '#0891b2' },
  { match: ['flatten'],                                            Icon: Layers,      from: '#a8a29e', to: '#57534e' },
  { match: ['password', 'protect', 'encrypt'],                     Icon: Lock,        from: '#ef4444', to: '#b91c1c' },
  { match: ['sign ', 'signature', '-sign-', 'sign-pdf'],           Icon: PenLine,     from: '#3b82f6', to: '#1d4ed8' },
  { match: ['rotate', 'rotated'],                                  Icon: RotateCw,    from: '#8b5cf6', to: '#6d28d9' },
  { match: ['crop'],                                               Icon: Crop,        from: '#ec4899', to: '#be185d' },
  { match: ['extract'],                                            Icon: FileOutput,  from: '#84cc16', to: '#4d7c0f' },
  { match: ['delete', 'remove '],                                  Icon: Trash2,      from: '#fb7185', to: '#dc2626' },
  { match: ['pdf-to-image', 'pdf to image', 'pdf-to-jpg', 'pdf-to-png', 'convert-pdf-to'], Icon: ImageIcon, from: '#a855f7', to: '#d946ef' },
  { match: ['image-to-pdf', 'images-to-pdf', 'jpg-to-pdf', 'word-to-pdf', 'images to pdf', 'jpg to pdf'], Icon: FileImage, from: '#0891b2', to: '#1d4ed8' },
  { match: ['merge', 'combine'],                                   Icon: Combine,     from: '#e8432a', to: '#ff6b35' },
  { match: ['split'],                                              Icon: Scissors,    from: '#7c3aed', to: '#a855f7' },
  { match: ['organize', 'rearrange'],                              Icon: ArrowDownUp, from: '#d946ef', to: '#a21caf' },
  { match: ['compress', 'smaller', 'reduce', 'below-', 'under-'],  Icon: Minimize2,   from: '#22c55e', to: '#15803d' },
  { match: ['convert'],                                            Icon: Repeat,      from: '#06b6d4', to: '#0369a1' },
  // Tightened so "editors" (plural, as in "Cloud Editors") doesn't trigger this rule.
  { match: ['edit-pdf', 'edit pdf', 'edit-a-pdf'],                 Icon: Edit3,       from: '#2563eb', to: '#1e40af' },
  // Require the full phrase so slugs like "already" or "spread" don't accidentally match.
  { match: ['read-pdf', 'read pdf', 'read-a-pdf'],                 Icon: BookOpen,    from: '#0ea5e9', to: '#2563eb' },
  { match: ['security', 'safer', 'client-side', 'privacy'],        Icon: ShieldCheck, from: '#6366f1', to: '#8b5cf6' },
  { match: ['best', 'top '],                                       Icon: Sparkles,    from: '#fbbf24', to: '#f59e0b' },
];

// 3) Category fallback — for posts whose slug/title doesn't hit any keyword.
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

// 4) Last-resort default.
const DEFAULT_STYLE = { Icon: Sparkles, from: '#64748b', to: '#334155' };

function resolveStyle({ slug, title, category }) {
  if (slug && SLUG_OVERRIDES[slug]) return SLUG_OVERRIDES[slug];

  const haystack = `${slug || ''} ${title || ''}`.toLowerCase();
  for (const rule of KEYWORD_RULES) {
    if (rule.match.some((k) => haystack.includes(k.toLowerCase()))) {
      return { Icon: rule.Icon, from: rule.from, to: rule.to };
    }
  }

  if (category && CATEGORY_STYLES[category]) return CATEGORY_STYLES[category];
  return DEFAULT_STYLE;
}

/**
 * Inline-SVG hero/card image for blog posts.
 *   variant="hero" → large 16:9 block used on a blog post page
 *   variant="card" → shorter thumbnail used on list/grid cards
 *
 * Accepts slug + title + category. Callers can pass just category for
 * backward-compat (falls through to the category fallback).
 */
const BlogHero = ({ slug, title, category, variant = 'hero' }) => {
  const { Icon, from, to } = resolveStyle({ slug, title, category });

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
