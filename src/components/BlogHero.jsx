import {
  // Generic / category fallbacks
  Shield, ShieldCheck, Lock, Unlock, BookOpen, FileText, GraduationCap,
  Zap, Repeat, Image as ImageIcon, Scale, Sparkles,
  // Content-specific icons (keyword rules)
  Combine, Scissors, Minimize2, RotateCw, Crop, PenLine, Stamp, Layers,
  Mail, Printer, Hash, FileMinus, FileOutput, Trash2, ArrowDownUp,
  Tag, Receipt, Edit3, EyeOff, FileImage, Files, FilePlus,
} from 'lucide-react';

/**
 * Every post gets a visually distinct hero. Two axes drive uniqueness:
 *
 *   1. Topical — icon + base gradient colors are chosen from the post's
 *      slug/title/category via SLUG_OVERRIDES → KEYWORD_RULES →
 *      CATEGORY_STYLES → DEFAULT_STYLE (first match wins).
 *   2. Per-slug — the slug is hashed to pick one of 6 background patterns,
 *      a gradient angle, and a decorative flourish. This means two posts
 *      that hit the same keyword rule (e.g. two "compress" posts) still
 *      render with different backgrounds.
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
  { match: ['cover-page', 'cover page', 'title-page'],             Icon: FilePlus,    from: '#2563eb', to: '#7c3aed' },
  { match: ['metadata'],                                           Icon: Tag,         from: '#64748b', to: '#334155' },
  { match: ['blank'],                                              Icon: FileMinus,   from: '#f43f5e', to: '#e11d48' },
  { match: ['unlock', 'remove-password', 'remove password'],       Icon: Unlock,      from: '#f59e0b', to: '#d97706' },
  { match: ['redact'],                                             Icon: EyeOff,      from: '#4f46e5', to: '#1e1b4b' },
  { match: ['tax', 'receipt', 'expense', 'invoice'],               Icon: Receipt,     from: '#10b981', to: '#047857' },
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
  { match: ['organize', 'rearrange', 'reorder'],                   Icon: ArrowDownUp, from: '#d946ef', to: '#a21caf' },
  { match: ['compress', 'smaller', 'reduce', 'below-', 'under-'],  Icon: Minimize2,   from: '#22c55e', to: '#15803d' },
  { match: ['batch', 'bulk', 'multiple-pdfs', 'multiple pdfs'],    Icon: Files,       from: '#f97316', to: '#c2410c' },
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

// Deterministic djb2-xor hash — same input always yields the same style,
// so a post's hero never changes between renders.
function hashStr(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
  return h >>> 0;
}

/**
 * Six decorative background variants rendered inside the SVG viewBox 0 0 400 225.
 * Each takes a unique `pid` so multiple heroes on one page don't share <pattern> ids.
 */
const PATTERNS = [
  // 0 — Default rings (the original look)
  (pid) => (
    <g key={pid}>
      <circle cx="330" cy="45"  r="70"  fill="rgba(255,255,255,0.10)" />
      <circle cx="70"  cy="180" r="95"  fill="rgba(255,255,255,0.08)" />
      <circle cx="200" cy="110" r="140" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
    </g>
  ),
  // 1 — Dot grid
  (pid) => (
    <g key={pid}>
      <defs>
        <pattern id={pid} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="rgba(255,255,255,0.22)" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="225" fill={`url(#${pid})`} />
      <circle cx="340" cy="50" r="60" fill="rgba(255,255,255,0.10)" />
    </g>
  ),
  // 2 — Diagonal stripes
  (pid) => (
    <g key={pid}>
      <defs>
        <pattern id={pid} x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <rect x="0" y="0" width="2" height="22" fill="rgba(255,255,255,0.16)" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="225" fill={`url(#${pid})`} />
      <circle cx="60" cy="185" r="85" fill="rgba(255,255,255,0.08)" />
    </g>
  ),
  // 3 — Fine grid
  (pid) => (
    <g key={pid}>
      <defs>
        <pattern id={pid} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="225" fill={`url(#${pid})`} />
      <circle cx="320" cy="180" r="55" fill="rgba(255,255,255,0.10)" />
    </g>
  ),
  // 4 — Soft chevrons
  (pid) => (
    <g key={pid}>
      <defs>
        <pattern id={pid} x="0" y="0" width="30" height="20" patternUnits="userSpaceOnUse">
          <path d="M 0 18 L 15 6 L 30 18" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="225" fill={`url(#${pid})`} />
      <circle cx="80" cy="40" r="55" fill="rgba(255,255,255,0.10)" />
    </g>
  ),
  // 5 — Corner arcs
  (pid) => (
    <g key={pid}>
      <circle cx="380" cy="-40" r="70"  fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.3" />
      <circle cx="380" cy="-40" r="110" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
      <circle cx="380" cy="-40" r="160" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.1" />
      <circle cx="20"  cy="250" r="95"  fill="rgba(255,255,255,0.10)" />
    </g>
  ),
];

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

  // Seed the per-slug flourishes. Fall back to title/category so previews
  // without a slug still look distinct.
  const seed = slug || title || category || 'tiny-pdf-tools';
  const h = hashStr(seed);
  const patternIdx = h % PATTERNS.length;
  const angle = 100 + ((h >> 3) % 12) * 15;          // 100°–265° — always feels "diagonal"
  const Pattern = PATTERNS[patternIdx];
  // Stable id per slug so hydration matches SSR output.
  const pid = `bh-${(h >>> 0).toString(36)}`;

  return (
    <div className={`blog-hero-svg blog-hero-svg--${variant}`}>
      <div
        className="blog-hero-svg-gradient"
        style={{ background: `linear-gradient(${angle}deg, ${from} 0%, ${to} 100%)` }}
      >
        <svg
          className="blog-hero-svg-rings"
          viewBox="0 0 400 225"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {Pattern(pid)}
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
        /* Compact banner proportions for the post-page hero (was 16:9 and
           rendering ~427px tall on a 760px article — now ~240px). */
        .blog-hero-svg--hero .blog-hero-svg-gradient {
          aspect-ratio: 16 / 5;
          max-height: 260px;
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
