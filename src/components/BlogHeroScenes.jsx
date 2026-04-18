"use client";
/**
 * Scene illustrations for BlogHero's "hero" variant.
 *
 * Each scene is a React component rendered INSIDE the 400×225 SVG viewBox
 * that BlogHero already draws the gradient + pattern on. Scenes layer a
 * topical composition (documents + arrows + accents) instead of a single
 * centered lucide icon, so each post's hero actually illustrates the
 * article's subject (merge → two documents combining, split → document
 * with a scissor cut, compress → document being squeezed, etc.).
 *
 * Keep all artwork within y = 40–200 so the 16:5 slice crop (which clips
 * ~50px off the top and bottom of a 16:9 viewBox) doesn't hide the
 * subject.
 */

// ----- shared colors -----
const WHITE = 'rgba(255,255,255,0.96)';
const WHITE_DIM = 'rgba(255,255,255,0.78)';
const LINE_LIGHT = 'rgba(15,23,42,0.18)';
const LINE_DIM = 'rgba(15,23,42,0.30)';
const ACCENT = '#ef4444';

// ----- shared helpers (return SVG primitives as JSX) -----

// Rounded document silhouette with a folded top-right corner.
function DocShape({ x, y, w, h, foldW = 14, fill = WHITE, opacity = 1 }) {
  const r = 8;
  const d = [
    `M ${x + r} ${y}`,
    `L ${x + w - foldW} ${y}`,
    `L ${x + w} ${y + foldW}`,
    `L ${x + w} ${y + h - r}`,
    `Q ${x + w} ${y + h} ${x + w - r} ${y + h}`,
    `L ${x + r} ${y + h}`,
    `Q ${x} ${y + h} ${x} ${y + h - r}`,
    `L ${x} ${y + r}`,
    `Q ${x} ${y} ${x + r} ${y}`,
    'Z',
  ].join(' ');
  return <path d={d} fill={fill} opacity={opacity} />;
}

// Faux text lines inside a document.
function DocLines({ x, y, w, count = 4, pad = 10, gap = 7, thickness = 3, color = LINE_LIGHT }) {
  const rows = [];
  for (let i = 0; i < count; i++) {
    const lineW = (i === count - 1)
      ? (w - pad * 2) * 0.65
      : (w - pad * 2) * (0.85 - i * 0.05);
    rows.push(
      <rect
        key={i}
        x={x + pad}
        y={y + 22 + i * (thickness + gap)}
        width={lineW}
        height={thickness}
        rx={thickness / 2}
        fill={color}
      />,
    );
  }
  return <g>{rows}</g>;
}

// Heading block (taller than a text line).
function DocHeader({ x, y, w, h = 10, pad = 10, color = LINE_DIM }) {
  return (
    <rect
      x={x + pad}
      y={y + 8}
      width={(w - pad * 2) * 0.55}
      height={h}
      rx={4}
      fill={color}
    />
  );
}

// Convenience: document with header + lines already drawn.
function Doc({ x, y, w, h, lineCount = 4, headerColor = LINE_DIM, lineColor = LINE_LIGHT, fill = WHITE, opacity = 1 }) {
  return (
    <g>
      <DocShape x={x} y={y} w={w} h={h} fill={fill} opacity={opacity} />
      <DocHeader x={x} y={y} w={w} color={headerColor} />
      <DocLines x={x} y={y} w={w} count={lineCount} color={lineColor} />
    </g>
  );
}

// ----- scenes -----
// Every scene returns a <g> rooted inside the 400×225 viewBox.

export const SCENES = {
  merge: () => (
    <g>
      <Doc x={80} y={40} w={150} h={165} />
      <Doc x={185} y={65} w={150} h={140} opacity={0.93} headerColor="rgba(15,23,42,0.28)" />
      <circle cx={310} cy={65} r={22} fill={ACCENT} />
      <path d="M300 65 L320 65 M310 55 L310 75" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
    </g>
  ),

  split: () => (
    <g>
      <Doc x={130} y={40} w={160} h={150} />
      <line x1={210} y1={30} x2={210} y2={200} stroke="#fff" strokeWidth="2.4" strokeDasharray="5 5" />
      <path d="M90 110 L120 110" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M300 110 L330 110" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 105 L80 110 L90 115 Z" fill="#fff" />
      <path d="M330 105 L340 110 L330 115 Z" fill="#fff" />
    </g>
  ),

  compress: () => (
    <g>
      <Doc x={130} y={32} w={140} h={160} />
      <path d="M95 60 L115 60 L115 50 L125 75 L115 100 L115 90 L95 90 Z" fill="#fff" />
      <path d="M305 60 L285 60 L285 50 L275 75 L285 100 L285 90 L305 90 Z" fill="#fff" />
      <rect x={150} y={180} width={100} height={22} rx={6} fill="#fff" opacity="0.35" />
    </g>
  ),

  rotate: () => (
    <g>
      <g transform="rotate(18 200 112)">
        <Doc x={140} y={40} w={120} h={150} />
      </g>
      <path d="M78 60 A 80 80 0 1 1 78 165" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 55 L82 52 L85 66" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  protect: () => (
    <g>
      <Doc x={125} y={40} w={150} h={165} />
      <g transform="translate(180,95)">
        <rect x={0} y={24} width={48} height={38} rx={6} fill={ACCENT} />
        <path d="M8 24 L8 14 A 16 16 0 0 1 40 14 L40 24" fill="none" stroke={ACCENT} strokeWidth="5" />
        <circle cx={24} cy={43} r={3.5} fill="#fff" />
      </g>
    </g>
  ),

  unlock: () => (
    <g>
      <Doc x={125} y={40} w={150} h={165} />
      <g transform="translate(180,95)">
        <rect x={0} y={24} width={48} height={38} rx={6} fill="#f59e0b" />
        <path d="M8 24 L8 14 A 16 16 0 0 1 40 14" fill="none" stroke="#f59e0b" strokeWidth="5" />
        <circle cx={24} cy={43} r={3.5} fill="#fff" />
      </g>
    </g>
  ),

  sign: () => (
    <g>
      <Doc x={90} y={40} w={220} h={150} lineCount={3} />
      <path d="M120 160 C 150 140, 180 180, 215 150 S 260 160, 285 145" stroke={ACCENT} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M270 135 L300 110 L310 120 L280 145 Z" fill="#fff" stroke={LINE_DIM} strokeWidth="1" />
      <path d="M295 110 L305 120" stroke={LINE_DIM} strokeWidth="1" />
    </g>
  ),

  watermark: () => (
    <g>
      <Doc x={110} y={30} w={180} h={170} />
      <g transform="rotate(-22 200 115)">
        <text
          x={200}
          y={122}
          textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif"
          fontWeight="800"
          fontSize="38"
          fill="rgba(239,68,68,0.38)"
          letterSpacing="4"
        >
          DRAFT
        </text>
      </g>
    </g>
  ),

  flatten: () => (
    <g>
      <DocShape x={140} y={56} w={130} h={140} fill={WHITE_DIM} />
      <DocShape x={130} y={46} w={130} h={140} fill="rgba(255,255,255,0.88)" />
      <Doc x={120} y={36} w={130} h={140} lineCount={3} />
      <path d="M90 170 L310 170" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  imagetopdf: () => (
    <g>
      <rect x={60} y={60} width={110} height={110} rx={10} fill={WHITE} />
      <circle cx={90} cy={90} r={10} fill="#f59e0b" />
      <path d="M70 160 L110 115 L140 150 L160 130 L170 160 Z" fill="#22c55e" />
      <path d="M185 112 L215 112" stroke="#fff" strokeWidth="3.2" />
      <path d="M210 104 L220 112 L210 120 Z" fill="#fff" />
      <DocShape x={230} y={50} w={110} h={140} />
      <text x={285} y={135} textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="30" fill={ACCENT}>PDF</text>
    </g>
  ),

  pdftoimage: () => (
    <g>
      <DocShape x={60} y={50} w={110} h={140} />
      <text x={115} y={135} textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="30" fill={ACCENT}>PDF</text>
      <path d="M185 112 L215 112" stroke="#fff" strokeWidth="3.2" />
      <path d="M210 104 L220 112 L210 120 Z" fill="#fff" />
      <rect x={230} y={60} width={110} height={110} rx={10} fill={WHITE} />
      <circle cx={260} cy={90} r={10} fill="#f59e0b" />
      <path d="M240 160 L280 115 L310 150 L330 130 L340 160 Z" fill="#22c55e" />
    </g>
  ),

  extract: () => (
    <g>
      <DocShape x={80} y={40} w={160} h={165} fill={WHITE_DIM} />
      <DocHeader x={80} y={40} w={160} />
      <DocLines x={80} y={40} w={160} count={3} />
      <g transform="translate(230,70) rotate(12)">
        <Doc x={0} y={0} w={120} h={130} lineCount={3} />
      </g>
      <path d="M190 100 L225 85" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
    </g>
  ),

  deletepages: () => (
    <g>
      <Doc x={130} y={40} w={150} h={165} />
      <g transform="translate(205,122)">
        <circle cx={0} cy={0} r={26} fill={ACCENT} />
        <path d="M-10 -10 L 10 10 M-10 10 L 10 -10" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </g>
    </g>
  ),

  organize: () => (
    <g>
      <DocShape x={130} y={40} w={150} h={165} />
      <DocHeader x={130} y={40} w={150} />
      <rect x={145} y={70} width={120} height={22} rx={4} fill="rgba(15,23,42,0.12)" />
      <rect x={145} y={100} width={120} height={22} rx={4} fill="rgba(15,23,42,0.18)" />
      <rect x={145} y={130} width={120} height={22} rx={4} fill="rgba(15,23,42,0.12)" />
      <rect x={145} y={160} width={120} height={22} rx={4} fill="rgba(15,23,42,0.18)" />
      <path d="M300 75 L300 150 M293 82 L300 75 L307 82 M293 143 L300 150 L307 143" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  crop: () => (
    <g>
      <DocShape x={95} y={35} w={210} h={160} fill={WHITE_DIM} />
      <rect x={140} y={70} width={130} height={95} fill={WHITE} />
      <path d="M128 60 L128 85 M128 60 L153 60" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M282 60 L282 85 M282 60 L257 60" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M128 175 L128 150 M128 175 L153 175" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M282 175 L282 150 M282 175 L257 175" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </g>
  ),

  pagenumbers: () => (
    <g>
      <Doc x={120} y={35} w={160} h={170} lineCount={3} />
      <text x={200} y={195} textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="18" fill={ACCENT}>1 · 2 · 3</text>
    </g>
  ),

  metadata: () => (
    <g>
      <Doc x={100} y={40} w={160} h={165} lineCount={3} />
      <g transform="translate(260,75) rotate(-18)">
        <path d="M0 0 L55 0 L80 22 L55 45 L0 45 Z" fill={ACCENT} />
        <circle cx={18} cy={22} r={5} fill="#fff" />
      </g>
    </g>
  ),

  redact: () => (
    <g>
      <DocShape x={95} y={32} w={210} h={170} />
      <DocHeader x={95} y={32} w={210} />
      <DocLines x={95} y={32} w={210} count={4} color="rgba(15,23,42,0.08)" />
      <rect x={115} y={70} width={140} height={12} rx={2} fill="#0f172a" />
      <rect x={115} y={95} width={110} height={12} rx={2} fill="#0f172a" />
      <rect x={115} y={120} width={165} height={12} rx={2} fill="#0f172a" />
    </g>
  ),

  coverpage: () => (
    <g>
      <DocShape x={130} y={30} w={150} h={170} />
      <rect x={145} y={55} width={120} height={30} rx={4} fill={ACCENT} />
      <rect x={145} y={100} width={95} height={6} rx={3} fill={LINE_LIGHT} />
      <rect x={145} y={115} width={75} height={6} rx={3} fill={LINE_LIGHT} />
      <rect x={145} y={160} width={60} height={6} rx={3} fill={LINE_LIGHT} />
    </g>
  ),

  email: () => (
    <g>
      <Doc x={80} y={40} w={130} h={160} lineCount={3} />
      <g transform="translate(210,80)">
        <rect x={0} y={0} width={120} height={80} rx={6} fill={WHITE} stroke={LINE_DIM} />
        <path d="M0 0 L60 45 L120 0" fill="none" stroke={LINE_DIM} strokeWidth="2" />
      </g>
    </g>
  ),

  comparison: () => (
    <g>
      <Doc x={60} y={45} w={140} h={155} lineCount={3} />
      <Doc x={210} y={45} w={140} h={155} lineCount={3} />
      <text x={200} y={130} textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="32" fill="#fff">vs</text>
    </g>
  ),

  security: () => (
    <g>
      <Doc x={125} y={40} w={150} h={165} />
      <g transform="translate(200,145)">
        <path d="M0 -35 L28 -22 L28 5 C28 22, 14 35, 0 40 C-14 35, -28 22, -28 5 L-28 -22 Z" fill={ACCENT} />
        <path d="M-12 4 L-2 14 L14 -8" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  ),

  receipt: () => (
    <g>
      <path d="M140 40 L140 195 L155 188 L170 195 L185 188 L200 195 L215 188 L230 195 L245 188 L260 195 L260 40 Z" fill={WHITE} />
      <rect x={155} y={60} width={90} height={8} rx={2} fill={ACCENT} />
      <rect x={155} y={80} width={80} height={4} rx={2} fill={LINE_LIGHT} />
      <rect x={155} y={92} width={70} height={4} rx={2} fill={LINE_LIGHT} />
      <rect x={155} y={104} width={85} height={4} rx={2} fill={LINE_LIGHT} />
      <rect x={155} y={125} width={90} height={6} rx={2} fill={LINE_DIM} />
      <text x={200} y={158} textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="22" fill={ACCENT}>$</text>
    </g>
  ),
};

// Per-slug scene overrides, mirroring SLUG_OVERRIDES in BlogHero.jsx.
// Use when keyword inference would pick the wrong scene for a specific post.
const SCENE_SLUG_OVERRIDES = {
  // Broad security guide — slug mentions watermark/encrypt/flatten, but the
  // post is really about PDF security so we want the security shield scene.
  'pdf-security-guide-watermark-encrypt-flatten': 'security',
};

/**
 * Map a post's slug/title to a scene name. Returns null if nothing matches
 * — callers should then fall back to the single-icon BlogHero composition.
 *
 * Kept in slug-scan order: MOST SPECIFIC rules first so "cover-page" beats
 * "page", "remove-password" beats "remove", etc.
 */
export function resolveScene({ slug = '', title = '', category = '' } = {}) {
  if (slug && SCENE_SLUG_OVERRIDES[slug]) return SCENE_SLUG_OVERRIDES[slug];
  const hay = `${slug} ${title} ${category}`.toLowerCase();
  const has = (...keys) => keys.some((k) => hay.includes(k));

  if (has('vs-', 'vs ', 'comparison', 'compare')) return 'comparison';
  if (has('cover-page', 'cover page', 'title-page', 'title page')) return 'coverpage';
  if (has('metadata')) return 'metadata';
  if (has('redact')) return 'redact';
  if (has('unlock', 'remove-password', 'remove password')) return 'unlock';
  if (has('receipt', 'expense', 'invoice')) return 'receipt';
  if (has('watermark')) return 'watermark';
  if (has('sign', 'signature')) return 'sign';
  if (has('flatten')) return 'flatten';
  if (has('protect', 'encrypt', 'password')) return 'protect';
  if (has('email', 'mail-')) return 'email';
  if (has('page-number', 'page number', 'add-page-number')) return 'pagenumbers';
  if (has('rotate', 'orientation')) return 'rotate';
  if (has('crop')) return 'crop';
  if (has('delete-page', 'remove-page', 'delete pages', 'remove pages')) return 'deletepages';
  if (has('extract-page', 'extract pages', 'pull-page')) return 'extract';
  if (has('organize', 'reorder', 'rearrange')) return 'organize';
  if (has('image-to-pdf', 'images-to-pdf', 'jpg-to-pdf', 'png-to-pdf', 'screenshots-to-pdf', 'screenshot-to-pdf')) return 'imagetopdf';
  if (has('pdf-to-image', 'pdf-to-jpg', 'pdf-to-png')) return 'pdftoimage';
  if (has('merge', 'combine')) return 'merge';
  if (has('split')) return 'split';
  if (has('compress', 'reduce', 'smaller', 'below-', 'under-')) return 'compress';
  if (has('security', 'privacy', 'safe', 'secure')) return 'security';

  return null;
}
