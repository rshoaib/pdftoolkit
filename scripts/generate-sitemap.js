import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://tinypdftools.com';
const distDir = path.resolve(__dirname, '..', 'dist');

// ── Route definitions with SEO metadata ──────────────────────────
const routes = [
  { path: '/', title: 'Tiny PDF Tools — Free Online PDF Tools | Merge, Split, Compress', desc: 'Free online PDF tools that run 100% in your browser. Merge, split, compress PDFs, convert PDF to images and images to PDF. No uploads, no accounts — 100% private.', priority: '1.0', freq: 'daily' },
  { path: '/merge-pdf', title: 'Merge PDF — Combine PDF Files Online for Free | Tiny PDF Tools', desc: 'Merge multiple PDF files into one document. Drag to reorder, then download instantly. 100% free, no uploads, runs in your browser.', priority: '0.9', freq: 'weekly' },
  { path: '/split-pdf', title: 'Split PDF — Extract Pages from PDF Online for Free | Tiny PDF Tools', desc: 'Split a PDF into separate files or extract specific pages. 100% free, no uploads, runs entirely in your browser.', priority: '0.9', freq: 'weekly' },
  { path: '/compress-pdf', title: 'Compress PDF — Reduce PDF File Size Online for Free | Tiny PDF Tools', desc: 'Compress PDF files by optimizing embedded images. Choose quality levels. 100% free, no uploads, runs in your browser.', priority: '0.9', freq: 'weekly' },
  { path: '/pdf-to-image', title: 'PDF to Image — Convert PDF Pages to JPG/PNG Online | Tiny PDF Tools', desc: 'Convert PDF pages to high-quality JPG or PNG images. Download individually or as a ZIP. 100% free, no uploads required.', priority: '0.9', freq: 'weekly' },
  { path: '/image-to-pdf', title: 'Image to PDF — Convert JPG/PNG to PDF Online for Free | Tiny PDF Tools', desc: 'Combine JPG, PNG, or WebP images into a single PDF document. Drag to reorder. 100% free, no uploads, runs in your browser.', priority: '0.9', freq: 'weekly' },
  { path: '/rotate-pdf', title: 'Rotate PDF — Rotate PDF Pages Online for Free | Tiny PDF Tools', desc: 'Rotate all pages in your PDF by 90°, 180°, or 270°. Lossless rotation, instant download. 100% free, no uploads.', priority: '0.9', freq: 'weekly' },
  { path: '/protect-pdf', title: 'Protect PDF — Add Password to PDF Online for Free | Tiny PDF Tools', desc: 'Add password protection with AES-256 encryption to your PDFs. 100% free, no uploads — encryption runs in your browser.', priority: '0.9', freq: 'weekly' },
  { path: '/watermark-pdf', title: 'Watermark PDF — Add Text Watermarks Online for Free | Tiny PDF Tools', desc: 'Add custom text watermarks to your PDF pages. Choose font size, opacity, rotation, and color. 100% free, no uploads, 100% in your browser.', priority: '0.9', freq: 'weekly' },
  { path: '/about', title: 'About — Tiny PDF Tools', desc: 'Learn about Tiny PDF Tools — free, private, browser-based PDF utilities.', priority: '0.5', freq: 'monthly' },
  { path: '/contact', title: 'Contact — Tiny PDF Tools', desc: 'Get in touch with the Tiny PDF Tools team.', priority: '0.5', freq: 'monthly' },
  { path: '/privacy', title: 'Privacy Policy — Tiny PDF Tools', desc: 'Privacy policy for Tiny PDF Tools. Your files never leave your device.', priority: '0.3', freq: 'monthly' },
  { path: '/terms', title: 'Terms of Service — Tiny PDF Tools', desc: 'Terms of service for Tiny PDF Tools.', priority: '0.3', freq: 'monthly' },
  { path: '/blog', title: 'Blog — PDF Tips, Tutorials & Guides | Tiny PDF Tools', desc: 'Tips, tutorials, and guides for working with PDFs. Learn how to merge, split, compress, and protect your documents.', priority: '0.7', freq: 'weekly' },
  { path: '/blog/how-to-merge-pdf-files-free', title: 'How to Merge PDF Files for Free in 2026 | Tiny PDF Tools', desc: 'Learn how to merge PDFs securely in your browser — no signup, no file uploads, 100% private.', priority: '0.7', freq: 'monthly' },
  { path: '/blog/pdf-security-best-practices-2026', title: 'PDF Security in 2026: How to Protect Sensitive Documents | Tiny PDF Tools', desc: 'From password protection to AES-256 encryption — learn how to secure your PDF documents.', priority: '0.7', freq: 'monthly' },
  { path: '/blog/compress-pdf-without-losing-quality', title: 'How to Compress PDFs Without Losing Quality | Tiny PDF Tools', desc: 'Reduce PDF file size by up to 90% while keeping text sharp and images clear.', priority: '0.7', freq: 'monthly' },
];

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// ── 1. Generate sitemap.xml ──────────────────────────────────────
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
console.log(`✅ Sitemap generated with ${routes.length} routes → dist/sitemap.xml`);

// ── 2. Inject per-route meta tags into index.html ────────────────
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8');

  for (const route of routes) {
    if (route.path === '/') continue; // homepage already has correct meta

    const slug = route.path.replace(/^\//, '');
    const routeHtml = html
      .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
      .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${route.desc}">`)
      .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${route.title}">`)
      .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${route.desc}">`)
      .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${DOMAIN}${route.path}">`)
      .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${route.title}">`)
      .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${route.desc}">`);

    // Create directory for the route and write index.html
    const routeDir = path.join(distDir, slug);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
  }

  console.log(`✅ Per-route meta tags injected for ${routes.length - 1} routes`);
} else {
  console.warn('⚠️  dist/index.html not found — skipping meta injection');
}
