// Update all blog post images from Unsplash URLs to local paths
// Usage: node scripts/update-blog-images.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const updates = [
  { slug: 'how-to-merge-pdf-files-free', image: '/images/blog/merge-pdf-hero.png' },
  { slug: 'pdf-security-best-practices-2026', image: '/images/blog/pdf-security-hero.png' },
  { slug: 'compress-pdf-without-losing-quality', image: '/images/blog/compress-pdf-hero.png' },
  { slug: 'how-to-unlock-pdf-remove-password-free', image: '/images/blog/unlock-pdf-hero.png' },
  { slug: 'how-to-organize-rearrange-pdf-pages-free', image: '/images/blog/organize-pdf-hero.png' },
  { slug: 'how-to-add-page-numbers-to-pdf-free', image: '/images/blog/add-page-numbers-hero.png' },
  { slug: 'how-to-add-watermark-to-pdf-free', image: '/images/blog/watermark-pdf-hero.png' },
  { slug: 'best-free-pdf-tools-online-2026', image: '/images/blog/best-pdf-tools-hero.png' },
  { slug: 'how-to-rotate-pdf-pages', image: '/images/blog/rotate-pdf-hero.png' },
  { slug: 'how-to-split-pdf-pages-free', image: '/images/blog/split-pdf-hero.png' },
  { slug: 'convert-pdf-to-image-jpg-png', image: '/images/blog/pdf-to-image-hero.png' },
  { slug: 'convert-images-to-pdf-free', image: '/images/blog/image-to-pdf-hero.png' },
];

async function update() {
  for (const { slug, image } of updates) {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?slug=eq.${slug}`,
      {
        method: 'PATCH',
        headers: {
          apikey: SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ image }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error(`❌ Failed to update "${slug}": ${res.status} ${err}`);
    } else {
      console.log(`✅ Updated: ${slug} → ${image}`);
    }
  }
}

update().then(() => console.log('\nDone! All blog images updated.'));
