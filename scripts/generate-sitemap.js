import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://pdftoolkit.com';

const routes = [
  '/',
  '/merge-pdf',
  '/split-pdf',
  '/compress-pdf',
  '/pdf-to-image',
  '/image-to-pdf',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}${r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

const distDir = path.resolve(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
console.log(`✅ Sitemap generated with ${routes.length} routes → dist/sitemap.xml`);
