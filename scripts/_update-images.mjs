// One-time script to update blog post images from stock photos to custom AI illustrations
const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SK =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const updates = [
  {
    slug: 'how-to-unlock-pdf-remove-password-free',
    image: 'https://tinypdftools.com/blog/unlock-pdf-hero.png',
  },
  {
    slug: 'how-to-organize-rearrange-pdf-pages-free',
    image: 'https://tinypdftools.com/blog/organize-pdf-hero.png',
  },
  {
    slug: 'how-to-add-page-numbers-to-pdf-free',
    image: 'https://tinypdftools.com/blog/page-numbers-hero.png',
  },
];

for (const { slug, image } of updates) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/blog_posts?slug=eq.${slug}`,
    {
      method: 'PATCH',
      headers: {
        apikey: SK,
        Authorization: `Bearer ${SK}`,
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
    console.log(`✅ Updated image: ${slug}`);
  }
}

console.log('\nDone!');
