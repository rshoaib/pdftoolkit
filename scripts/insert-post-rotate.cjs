const SupabaseREST = require('./supabase_rest.cjs');
const fs = require('fs');

const article = {
  slug: 'how-to-fix-rotated-pdf-scan',
  title: 'How to Fix a Rotated PDF Scan (Free & Permanent Fix)',
  excerpt: 'Tired of craning your neck to read a scanned document that was saved sideways? Learn how to permanently fix and rotate an upside-down or sideways PDF scan instantly in your browser.',
  category: 'PDF Basics',
  date: '2026-03-30',
  display_date: 'March 30, 2026',
  read_time: '3 min read',
  image: '/images/blog/how-to-fix-rotated-pdf-scan-hero.png',
  content: fs.readFileSync('./scripts/article-payload.html', 'utf8')
};

async function main() {
  const db = new SupabaseREST();
  await db.update('blog_posts', article, 'slug', article.slug);
  console.log('✅ Successfully patched the missing content and hero image for tinypdftools!');
}

main().catch(err => {
  console.error('❌ Update failed:', err.message);
  process.exit(1);
});
