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
 * Design notes:
 *   - Every paper uses a soft drop shadow (offset dark rect behind) and a
 *     two-tone fill (white → very pale gray) so pages feel like real paper
 *     on top of the gradient, not flat stickers.
 *   - Each document has a small colored "tag" chip near the header, a bold
 *     title bar, and light content bars below — readable at a glance even
 *     at small sizes.
 *   - Action elements (badges, arrows, stamps) get an accent halo and a
 *     sharper contrast so they pop on any gradient color.
 *   - Keep all artwork within y = 40–200 so the 16:5 slice crop (which
 *     clips ~50px off the top and bottom of a 16:9 viewBox) doesn't hide
 *     the subject.
 */

// ----- shared colors -----
const PAPER_TOP = '#ffffff';
const PAPER_BOT = '#eef2f7';
const SHADOW = 'rgba(15,23,42,0.28)';
const FOLD = 'rgba(15,23,42,0.10)';
const LINE_LIGHT = 'rgba(15,23,42,0.14)';
const LINE_MED = 'rgba(15,23,42,0.22)';
const LINE_DIM = 'rgba(15,23,42,0.32)';
const TITLE_BAR = 'rgba(15,23,42,0.78)';
const ACCENT = '#ef4444';   // red
const ACCENT_B = '#f59e0b'; // amber
const ACCENT_G = '#22c55e'; // green
const ACCENT_P = '#8b5cf6'; // purple
const ACCENT_C = '#06b6d4'; // cyan
const ACCENT_PINK = '#ec4899';

// Small accent palette, deterministic so scenes that re-render stay stable.
const CHIP_COLORS = [ACCENT, ACCENT_B, ACCENT_G, ACCENT_P, ACCENT_C, ACCENT_PINK];

// ----- shared helpers -----

// Rounded document silhouette with a folded top-right corner.
// Returns the path `d` string, so we can stack a shadow + gradient fill
// without recomputing the geometry.
function docPath(x, y, w, h, foldW = 14) {
  const r = 8;
  return [
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
}

/**
 * A polished paper document. Draws in three layers:
 *   1. Soft drop shadow (dark rect offset +4,+5)
 *   2. Paper body with a subtle top→bottom gradient
 *   3. Folded corner triangle with a slightly darker fill
 *
 * Optional `title` gives a colored accent title bar; `lineCount` controls
 * how much "content" shows below. Pass `tint` to color-wash the page (used
 * for the secondary / back document in stacked scenes).
 */
function Paper({
  x, y, w, h,
  foldW = 14,
  tint = null,          // optional overlay color for a stacked doc
  opacity = 1,
  titleColor = null,    // colored chip/title bar color; null = default slate
  lineCount = 4,
  lineColor = LINE_LIGHT,
  shadowOffset = 4,
  shadowOpacity = 0.28,
  pidSeed = 0,
}) {
  const r = 8;
  const main = docPath(x, y, w, h, foldW);
  const shadow = docPath(x + shadowOffset, y + shadowOffset + 1, w, h, foldW);
  const fold = `M ${x + w - foldW} ${y} L ${x + w - foldW} ${y + foldW} L ${x + w} ${y + foldW} Z`;

  // Deterministic gradient id per paper so multiple docs can coexist.
  const gid = `paper-${Math.abs(pidSeed || (x * 31 + y * 7 + w)).toString(36)}`;

  const titleW = Math.min(80, (w - 20) * 0.55);
  const chipColor = titleColor || CHIP_COLORS[(pidSeed || (x + y)) % CHIP_COLORS.length];

  const lines = [];
  for (let i = 0; i < lineCount; i++) {
    const lw = (i === lineCount - 1)
      ? (w - 20) * 0.55
      : (w - 20) * (0.9 - i * 0.08);
    lines.push(
      <rect
        key={i}
        x={x + 12}
        y={y + 34 + i * 10}
        width={lw}
        height={3.5}
        rx={1.75}
        fill={lineColor}
      />,
    );
  }

  return (
    <g opacity={opacity}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={PAPER_TOP} />
          <stop offset="100%" stopColor={PAPER_BOT} />
        </linearGradient>
      </defs>
      {/* soft shadow */}
      <path d={shadow} fill={SHADOW} opacity={shadowOpacity} />
      {/* paper body */}
      <path d={main} fill={`url(#${gid})`} />
      {/* optional tint overlay (e.g. for a background doc) */}
      {tint && <path d={main} fill={tint} opacity={0.55} />}
      {/* folded corner */}
      <path d={fold} fill={FOLD} />
      {/* colored accent chip + dark title bar */}
      <rect x={x + 12} y={y + 14} width={10} height={4} rx={1.5} fill={chipColor} />
      <rect x={x + 12} y={y + 22} width={titleW} height={6} rx={2} fill={TITLE_BAR} />
      {/* content lines */}
      {lines}
    </g>
  );
}

// Subtle decorative sparkle — a 4-point star for polish.
function Sparkle({ cx, cy, r = 4, color = '#fff', opacity = 0.9 }) {
  const d = `M ${cx} ${cy - r} L ${cx + r * 0.35} ${cy - r * 0.35} L ${cx + r} ${cy} L ${cx + r * 0.35} ${cy + r * 0.35} L ${cx} ${cy + r} L ${cx - r * 0.35} ${cy + r * 0.35} L ${cx - r} ${cy} L ${cx - r * 0.35} ${cy - r * 0.35} Z`;
  return <path d={d} fill={color} opacity={opacity} />;
}

// Glowing accent badge with a soft ring halo.
function Badge({ cx, cy, r = 22, color = ACCENT, children }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 10} fill={color} opacity={0.18} />
      <circle cx={cx} cy={cy} r={r + 4}  fill={color} opacity={0.28} />
      <circle cx={cx} cy={cy} r={r}      fill={color} />
      {children}
    </g>
  );
}

// ----- scenes -----
// Every scene returns a <g> rooted inside the 400×225 viewBox.

export const SCENES = {
  merge: () => (
    <g>
      <Paper x={60}  y={48} w={150} h={152} pidSeed={11} titleColor={ACCENT_P} lineCount={4} />
      <Paper x={170} y={62} w={150} h={140} pidSeed={22} titleColor={ACCENT_B} lineCount={4} opacity={0.98} />
      <Badge cx={320} cy={70} r={22}>
        <path d="M310 70 L330 70 M320 60 L320 80" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      </Badge>
      <Sparkle cx={48}  cy={60}  r={5} opacity={0.7} />
      <Sparkle cx={362} cy={165} r={4} opacity={0.6} />
    </g>
  ),

  split: () => (
    <g>
      <Paper x={120} y={46} w={160} h={148} pidSeed={31} titleColor={ACCENT_C} lineCount={4} />
      {/* vertical dashed cut */}
      <line x1={200} y1={34} x2={200} y2={200} stroke="#fff" strokeWidth="2.6" strokeDasharray="6 5" />
      {/* scissor blades pointing in */}
      <g transform="translate(82,105)">
        <path d="M0 0 L26 8 M0 0 L26 -8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-4" cy="-6" r="5" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle cx="-4" cy="6"  r="5" fill="none" stroke="#fff" strokeWidth="2.4" />
      </g>
      <g transform="translate(318,105) scale(-1,1)">
        <path d="M0 0 L26 8 M0 0 L26 -8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-4" cy="-6" r="5" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle cx="-4" cy="6"  r="5" fill="none" stroke="#fff" strokeWidth="2.4" />
      </g>
    </g>
  ),

  compress: () => (
    <g>
      <Paper x={130} y={38} w={140} h={160} pidSeed={41} titleColor={ACCENT_G} lineCount={5} />
      {/* chunky converging arrows */}
      <g fill="#fff">
        <path d="M72 80 L96 80 L96 70 L118 88 L96 106 L96 96 L72 96 Z" />
        <path d="M328 80 L304 80 L304 70 L282 88 L304 106 L304 96 L328 96 Z" />
      </g>
      {/* size badge below */}
      <g transform="translate(200,178)">
        <rect x="-36" y="-10" width="72" height="20" rx="10" fill={ACCENT_G} opacity="0.95" />
        <text x="0" y="5" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="12" fill="#fff">-65%</text>
      </g>
      <Sparkle cx={70}  cy={140} r={4} opacity={0.6} />
      <Sparkle cx={330} cy={140} r={4} opacity={0.6} />
    </g>
  ),

  rotate: () => (
    <g>
      {/* rotated paper */}
      <g transform="rotate(18 200 115)">
        <Paper x={140} y={40} w={120} h={150} pidSeed={51} titleColor={ACCENT_P} lineCount={4} />
      </g>
      {/* circular arrow arc */}
      <g stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M78 62 A 80 80 0 1 1 78 168" />
        <path d="M68 54 L84 52 L86 68" />
      </g>
      {/* degree badge */}
      <g transform="translate(330,175)">
        <circle r="18" fill={ACCENT_P} opacity="0.95" />
        <text y="4" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="11" fill="#fff">90°</text>
      </g>
    </g>
  ),

  protect: () => (
    <g>
      <Paper x={110} y={38} w={150} h={162} pidSeed={61} titleColor={ACCENT} lineCount={4} />
      {/* security shield badge pinned to the document */}
      <g transform="translate(270,130)">
        <path d="M0 -38 L32 -24 L32 6 C32 24, 18 40, 0 46 C-18 40, -32 24, -32 6 L-32 -24 Z" fill={ACCENT} opacity="0.22" />
        <path d="M0 -34 L28 -22 L28 4 C28 20, 16 34, 0 40 C-16 34, -28 20, -28 4 L-28 -22 Z" fill={ACCENT} />
        {/* padlock inside shield */}
        <rect x="-12" y="2" width="24" height="20" rx="3" fill="#fff" />
        <path d="M-7 2 L-7 -6 A 7 7 0 0 1 7 -6 L 7 2" fill="none" stroke="#fff" strokeWidth="3" />
        <circle cx="0" cy="12" r="2.2" fill={ACCENT} />
      </g>
    </g>
  ),

  unlock: () => (
    <g>
      <Paper x={110} y={38} w={150} h={162} pidSeed={71} titleColor={ACCENT_B} lineCount={4} />
      <g transform="translate(270,130)">
        <path d="M0 -38 L32 -24 L32 6 C32 24, 18 40, 0 46 C-18 40, -32 24, -32 6 L-32 -24 Z" fill={ACCENT_B} opacity="0.22" />
        <path d="M0 -34 L28 -22 L28 4 C28 20, 16 34, 0 40 C-16 34, -28 20, -28 4 L-28 -22 Z" fill={ACCENT_B} />
        {/* open padlock shackle */}
        <rect x="-12" y="2" width="24" height="20" rx="3" fill="#fff" />
        <path d="M-7 2 L-7 -6 A 7 7 0 0 1 7 -6" fill="none" stroke="#fff" strokeWidth="3" />
        <circle cx="0" cy="12" r="2.2" fill={ACCENT_B} />
      </g>
      <Sparkle cx={70} cy={70} r={5} opacity={0.75} />
    </g>
  ),

  sign: () => (
    <g>
      <Paper x={80} y={40} w={240} h={150} pidSeed={81} titleColor={ACCENT} lineCount={3} />
      {/* signature line */}
      <line x1="100" y1="168" x2="280" y2="168" stroke={LINE_MED} strokeWidth="1.5" strokeDasharray="4 4" />
      {/* handwritten signature */}
      <path
        d="M105 155 C 135 130, 155 175, 180 150 S 210 180, 235 145 S 275 165, 285 140"
        stroke={ACCENT}
        strokeWidth="3.6"
        fill="none"
        strokeLinecap="round"
      />
      {/* pen */}
      <g transform="rotate(40 300 120)">
        <path d="M300 108 L324 108 L336 116 L324 124 L300 124 Z" fill="#fff" stroke={LINE_DIM} strokeWidth="1" />
        <rect x="288" y="110" width="14" height="12" fill={ACCENT} />
        <path d="M336 112 L346 116 L336 120 Z" fill={LINE_DIM} />
      </g>
      <Sparkle cx={60} cy={60} r={4} opacity={0.7} />
    </g>
  ),

  watermark: () => (
    <g>
      <Paper x={100} y={34} w={200} h={170} pidSeed={91} titleColor={ACCENT_C} lineCount={5} />
      {/* diagonal repeating watermark */}
      <g transform="rotate(-24 200 118)" opacity="0.55">
        <text x="200" y="90"  textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="22" fill={ACCENT} letterSpacing="3">CONFIDENTIAL</text>
        <text x="200" y="130" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="22" fill={ACCENT} letterSpacing="3">CONFIDENTIAL</text>
        <text x="200" y="170" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="22" fill={ACCENT} letterSpacing="3">CONFIDENTIAL</text>
      </g>
    </g>
  ),

  flatten: () => (
    <g>
      {/* three stacked papers with visible shadows, collapsing downward */}
      <g opacity="0.85">
        <Paper x={150} y={62} w={130} h={130} pidSeed={101} titleColor={ACCENT_B} lineCount={2} shadowOpacity={0.18} />
      </g>
      <g opacity="0.92">
        <Paper x={135} y={50} w={130} h={130} pidSeed={102} titleColor={ACCENT_G} lineCount={2} shadowOpacity={0.22} />
      </g>
      <Paper x={120} y={38} w={130} h={130} pidSeed={103} titleColor={ACCENT_P} lineCount={2} />
      {/* downward press arrow */}
      <g transform="translate(310,110)" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M0 -26 L0 26" />
        <path d="M-10 16 L0 26 L10 16" strokeLinejoin="round" />
      </g>
      {/* baseline */}
      <path d="M80 185 L320 185" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  imagetopdf: () => (
    <g>
      {/* photo on the left */}
      <g transform="translate(55,52)">
        <rect width="120" height="118" rx="10" fill={SHADOW} opacity="0.3" transform="translate(4,5)" />
        <rect width="120" height="118" rx="10" fill={PAPER_TOP} />
        <circle cx="30" cy="34" r="10" fill={ACCENT_B} />
        {/* mountain / landscape */}
        <path d="M10 108 L46 60 L70 90 L92 66 L110 108 Z" fill={ACCENT_G} />
        <path d="M52 108 L82 74 L110 108 Z" fill="#0d9488" opacity="0.8" />
      </g>
      {/* arrow */}
      <g transform="translate(190,112)" stroke="#fff" strokeWidth="3.4" fill="#fff" strokeLinecap="round">
        <path d="M0 0 L30 0" />
        <path d="M24 -7 L34 0 L24 7 Z" stroke="none" />
      </g>
      {/* PDF paper on the right */}
      <Paper x={240} y={50} w={110} h={140} pidSeed={111} titleColor={ACCENT} lineCount={3} />
      <text x={295} y={142} textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="26" fill={ACCENT} letterSpacing="1">PDF</text>
    </g>
  ),

  pdftoimage: () => (
    <g>
      <Paper x={55} y={50} w={110} h={140} pidSeed={121} titleColor={ACCENT} lineCount={3} />
      <text x={110} y={142} textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="26" fill={ACCENT} letterSpacing="1">PDF</text>
      {/* arrow */}
      <g transform="translate(185,112)" stroke="#fff" strokeWidth="3.4" fill="#fff" strokeLinecap="round">
        <path d="M0 0 L30 0" />
        <path d="M24 -7 L34 0 L24 7 Z" stroke="none" />
      </g>
      {/* photo on the right */}
      <g transform="translate(235,52)">
        <rect width="120" height="118" rx="10" fill={SHADOW} opacity="0.3" transform="translate(4,5)" />
        <rect width="120" height="118" rx="10" fill={PAPER_TOP} />
        <circle cx="30" cy="34" r="10" fill={ACCENT_B} />
        <path d="M10 108 L46 60 L70 90 L92 66 L110 108 Z" fill={ACCENT_G} />
        <path d="M52 108 L82 74 L110 108 Z" fill="#0d9488" opacity="0.8" />
      </g>
    </g>
  ),

  extract: () => (
    <g>
      {/* source doc (faded) */}
      <g opacity="0.78">
        <Paper x={60} y={46} w={150} h={155} pidSeed={131} titleColor={ACCENT_C} lineCount={5} />
      </g>
      {/* extracted page flying out */}
      <g transform="translate(230,58) rotate(12)">
        <Paper x={0} y={0} w={130} h={135} pidSeed={132} titleColor={ACCENT} lineCount={3} />
      </g>
      {/* dashed extraction path */}
      <path d="M188 104 L232 82" stroke="#fff" strokeWidth="2.6" strokeDasharray="4 4" strokeLinecap="round" />
      <circle cx="232" cy="82" r="4" fill="#fff" />
    </g>
  ),

  deletepages: () => (
    <g>
      <Paper x={125} y={40} w={150} h={160} pidSeed={141} titleColor={ACCENT} lineCount={4} />
      <Badge cx={205} cy={125} r={30} color={ACCENT}>
        <path d="M-14 -14 L 14 14 M-14 14 L 14 -14" stroke="#fff" strokeWidth="5" strokeLinecap="round" transform="translate(205,125)" />
      </Badge>
    </g>
  ),

  organize: () => (
    <g>
      <Paper x={120} y={38} w={160} h={168} pidSeed={151} titleColor={ACCENT_P} lineCount={0} />
      {/* drag handles / page rows */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(138,${70 + i * 28})`}>
          <rect width="124" height="20" rx="4" fill="rgba(15,23,42,0.10)" />
          {/* handle dots */}
          <circle cx="8"  cy="10" r="1.5" fill={LINE_DIM} />
          <circle cx="8"  cy="6"  r="1.5" fill={LINE_DIM} />
          <circle cx="8"  cy="14" r="1.5" fill={LINE_DIM} />
          <circle cx="14" cy="10" r="1.5" fill={LINE_DIM} />
          <circle cx="14" cy="6"  r="1.5" fill={LINE_DIM} />
          <circle cx="14" cy="14" r="1.5" fill={LINE_DIM} />
          <rect x="24" y="7" width="70" height="6" rx="2" fill={LINE_DIM} />
        </g>
      ))}
      {/* reorder arrow */}
      <g stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M300 78 L300 166" />
        <path d="M293 85 L300 78 L307 85" />
        <path d="M293 159 L300 166 L307 159" />
      </g>
    </g>
  ),

  crop: () => (
    <g>
      <Paper x={80} y={34} w={240} h={160} pidSeed={161} titleColor={ACCENT_PINK} lineCount={0} />
      {/* dashed interior crop rect */}
      <rect x={125} y={68} width={150} height={100} fill="rgba(239,68,68,0.08)" stroke="#fff" strokeWidth="2" strokeDasharray="6 5" />
      {/* corner handles (bright) */}
      {[
        [125, 68],
        [275, 68],
        [125, 168],
        [275, 168],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <rect x={cx - 5} y={cy - 5} width="10" height="10" rx="2" fill={ACCENT} />
          <rect x={cx - 7} y={cy - 7} width="14" height="14" rx="3" fill="none" stroke="#fff" strokeWidth="2" />
        </g>
      ))}
    </g>
  ),

  pagenumbers: () => (
    <g>
      <Paper x={110} y={34} w={180} h={172} pidSeed={171} titleColor={ACCENT_C} lineCount={4} />
      {/* number row at bottom */}
      <g>
        {[1, 2, 3, 4].map((n, i) => (
          <g key={n} transform={`translate(${130 + i * 40},184)`}>
            <circle r="12" fill={i === 1 ? ACCENT : 'rgba(255,255,255,0.9)'} />
            <text y="4" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="13" fill={i === 1 ? '#fff' : TITLE_BAR}>{n}</text>
          </g>
        ))}
      </g>
    </g>
  ),

  metadata: () => (
    <g>
      <Paper x={80} y={38} w={170} h={165} pidSeed={181} titleColor={ACCENT_P} lineCount={3} />
      {/* key/value rows */}
      <g transform="translate(95,90)">
        {['Title', 'Author', 'Subject'].map((k, i) => (
          <g key={k} transform={`translate(0,${i * 22})`}>
            <rect width="44" height="12" rx="2" fill={LINE_MED} />
            <rect x="52" width="90" height="12" rx="2" fill={LINE_LIGHT} />
          </g>
        ))}
      </g>
      {/* luggage tag */}
      <g transform="translate(280,92) rotate(-12)">
        <path d="M0 0 L60 0 L84 22 L60 44 L0 44 Z" fill={ACCENT_P} />
        <path d="M0 0 L60 0 L84 22 L60 44 L0 44 Z" fill="#fff" opacity="0.14" />
        <circle cx="16" cy="22" r="5.5" fill="#fff" />
        <rect x="28" y="14" width="44" height="4" rx="2" fill="#fff" opacity="0.85" />
        <rect x="28" y="24" width="32" height="4" rx="2" fill="#fff" opacity="0.7" />
      </g>
    </g>
  ),

  redact: () => (
    <g>
      <Paper x={80} y={32} w={240} h={170} pidSeed={191} titleColor={TITLE_BAR} lineCount={0} />
      {/* mixed visible + redacted lines */}
      <g>
        <rect x="100" y="74"  width="180" height="6" rx="2" fill={LINE_LIGHT} />
        <rect x="100" y="90"  width="140" height="12" rx="2" fill="#0f172a" />
        <rect x="100" y="110" width="170" height="6" rx="2" fill={LINE_LIGHT} />
        <rect x="100" y="124" width="110" height="12" rx="2" fill="#0f172a" />
        <rect x="100" y="144" width="195" height="12" rx="2" fill="#0f172a" />
        <rect x="100" y="164" width="120" height="6" rx="2" fill={LINE_LIGHT} />
      </g>
      {/* marker stroke */}
      <path d="M88 108 L 302 108" stroke="#0f172a" strokeWidth="2" opacity="0" />
      {/* marker cap */}
      <g transform="translate(306,120) rotate(28)">
        <rect width="22" height="12" rx="2" fill="#111827" />
        <rect x="22" width="8" height="12" rx="2" fill={ACCENT} />
      </g>
    </g>
  ),

  coverpage: () => (
    <g>
      <Paper x={130} y={30} w={150} h={178} pidSeed={201} titleColor={ACCENT} lineCount={0} />
      {/* big title block */}
      <rect x={148} y={60} width={114} height={32} rx={4} fill={ACCENT} />
      <rect x={148} y={100} width={90}  height={6}  rx={3} fill={LINE_MED} />
      <rect x={148} y={114} width={72}  height={6}  rx={3} fill={LINE_LIGHT} />
      {/* divider */}
      <rect x={148} y={140} width={114} height={2}  rx={1} fill={LINE_LIGHT} />
      {/* author/date */}
      <rect x={148} y={158} width={70}  height={5}  rx={2} fill={LINE_MED} />
      <rect x={148} y={170} width={52}  height={5}  rx={2} fill={LINE_LIGHT} />
      {/* ornament */}
      <circle cx={205} cy={196} r={3} fill={ACCENT} />
    </g>
  ),

  email: () => (
    <g>
      <Paper x={60} y={44} w={130} h={152} pidSeed={211} titleColor={ACCENT_C} lineCount={4} />
      {/* envelope */}
      <g transform="translate(200,62)">
        <rect width="140" height="96" rx="8" fill={SHADOW} opacity="0.3" transform="translate(4,5)" />
        <rect width="140" height="96" rx="8" fill={PAPER_TOP} />
        <path d="M0 0 L70 56 L140 0" fill="none" stroke={LINE_DIM} strokeWidth="2.4" />
        <path d="M0 96 L56 52 M140 96 L84 52" fill="none" stroke={LINE_LIGHT} strokeWidth="1.8" />
        {/* attachment paperclip */}
        <g transform="translate(96,58) rotate(25)" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M0 0 L0 22 A 8 8 0 0 0 16 22 L16 -6 A 6 6 0 0 0 4 -6 L4 18" />
        </g>
      </g>
      <Sparkle cx={360} cy={52} r={4} opacity={0.7} />
    </g>
  ),

  comparison: () => (
    <g>
      <Paper x={40}  y={48} w={140} h={152} pidSeed={221} titleColor={ACCENT_C} lineCount={4} />
      <Paper x={220} y={48} w={140} h={152} pidSeed={222} titleColor={ACCENT_B} lineCount={4} />
      <g transform="translate(200,124)">
        <circle r="24" fill="rgba(15,23,42,0.25)" />
        <circle r="22" fill="#fff" />
        <text y="6" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="18" fill={TITLE_BAR} letterSpacing="0.5">vs</text>
      </g>
    </g>
  ),

  security: () => (
    <g>
      <Paper x={85} y={42} w={150} h={162} pidSeed={231} titleColor={ACCENT} lineCount={4} />
      {/* big shield with check */}
      <g transform="translate(280,115)">
        <path d="M0 -50 L42 -32 L42 8 C42 32, 24 54, 0 62 C-24 54, -42 32, -42 8 L-42 -32 Z" fill={ACCENT} opacity="0.2" />
        <path d="M0 -44 L38 -28 L38 6 C38 28, 22 48, 0 56 C-22 48, -38 28, -38 6 L-38 -28 Z" fill={ACCENT} />
        <path d="M-16 4 L-4 16 L 18 -10" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Sparkle cx={60} cy={62} r={4} opacity={0.8} />
      <Sparkle cx={335} cy={180} r={3} opacity={0.7} />
    </g>
  ),

  receipt: () => (
    <g>
      {/* receipt with torn bottom edge */}
      <g>
        <path
          d="M148 38 L252 38 L252 192 L240 186 L228 192 L216 186 L204 192 L192 186 L180 192 L168 186 L156 192 L148 186 Z"
          fill={SHADOW}
          opacity="0.32"
          transform="translate(4,5)"
        />
        <path
          d="M148 38 L252 38 L252 192 L240 186 L228 192 L216 186 L204 192 L192 186 L180 192 L168 186 L156 192 L148 186 Z"
          fill={PAPER_TOP}
        />
      </g>
      {/* header chip + title bar */}
      <rect x={158} y={52} width={10} height={4} rx={1.5} fill={ACCENT_G} />
      <rect x={158} y={60} width={56} height={6} rx={2} fill={TITLE_BAR} />
      {/* item rows */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0,${82 + i * 14})`}>
          <rect x={158} width={50} height={4} rx={2} fill={LINE_LIGHT} />
          <rect x={220} width={24} height={4} rx={2} fill={LINE_MED} />
        </g>
      ))}
      <rect x={158} y={132} width={84} height={1.5} fill={LINE_DIM} />
      <rect x={158} y={140} width={40} height={5} rx={2} fill={LINE_DIM} />
      <rect x={212} y={140} width={32} height={5} rx={2} fill={TITLE_BAR} />
      {/* big $ seal */}
      <g transform="translate(200,170)">
        <circle r="16" fill={ACCENT_G} />
        <text y="6" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="20" fill="#fff">$</text>
      </g>
      <Sparkle cx={320} cy={72}  r={4} opacity={0.7} />
      <Sparkle cx={95}  cy={160} r={4} opacity={0.7} />
    </g>
  ),
};

// ----------------------------------------------------------------------
// Scene resolver
// ----------------------------------------------------------------------

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
