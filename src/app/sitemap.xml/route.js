const DOMAIN = 'https://tinypdftools.com';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Static tool pages
const toolRoutes = [
  { path: '/', priority: '1.0', freq: 'daily' },
  { path: '/merge-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/split-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/compress-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/pdf-to-image', priority: '0.9', freq: 'weekly' },
  { path: '/image-to-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/rotate-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/protect-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/unlock-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/watermark-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/organize-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/add-page-numbers', priority: '0.9', freq: 'weekly' },
  { path: '/crop-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/delete-pdf-pages', priority: '0.9', freq: 'weekly' },
  { path: '/flatten-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/sign-pdf', priority: '0.9', freq: 'weekly' },
  { path: '/extract-pdf-pages', priority: '0.9', freq: 'weekly' },
  { path: '/pdf-reader', priority: '0.9', freq: 'weekly' },
  { path: '/blog', priority: '0.7', freq: 'daily' },
  { path: '/about', priority: '0.5', freq: 'monthly' },
  { path: '/contact', priority: '0.5', freq: 'monthly' },
  { path: '/privacy', priority: '0.3', freq: 'yearly' },
  { path: '/terms', priority: '0.3', freq: 'yearly' },
];

// Slugs that 301 redirect to canonical versions — exclude from sitemap
const redirectedSlugs = new Set([
  'how-to-fix-a-rotated-pdf-scan',
  'best-free-pdf-tools-online',
  'how-to-organize-rearrange-pdf-pages-free',
  'how-to-add-watermark-to-pdf-free',
  'convert-images-to-pdf-free',
  'convert-pdf-to-image-jpg-png',
  'how-to-split-pdf-pages-free',
  'how-to-rotate-pdf-pages',
  'pdf-security-best-practices-2026',
]);

async function fetchBlogSlugs() {
  if (!SUPABASE_URL || !SUPABASE_KEY) return [];

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,date&order=date.desc`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 3600 }, // cache for 1 hour
      }
    );

    if (!res.ok) return [];
    const data = await res.json();
    return data
      .filter((p) => !redirectedSlugs.has(p.slug))
      .map((p) => ({
        path: `/blog/${p.slug}`,
        lastmod: p.date ? p.date.split('T')[0] : undefined,
        priority: '0.7',
        freq: 'monthly',
      }));
  } catch {
    return [];
  }
}

import { programmaticPages } from '../../data/programmaticPages';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const blogRoutes = await fetchBlogSlugs();

  const programmaticRoutes = programmaticPages.map((p) => ({
    path: `/p/${p.slug}`,
    priority: '0.8',
    freq: 'weekly',
    lastmod: today,
  }));

  const allRoutes = [
    ...toolRoutes.map((r) => ({ ...r, lastmod: today })),
    ...blogRoutes.map((r) => ({ ...r, lastmod: r.lastmod || today })),
    ...programmaticRoutes,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
