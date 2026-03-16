const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const REST_BASE = SUPABASE_URL ? `${SUPABASE_URL}/rest/v1/blog_posts` : null;

const headers = SUPABASE_KEY
  ? {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    }
  : {};

// Cache
const CACHE_TTL = 5 * 60 * 1000;
let cachedPosts = null;
let cacheTime = 0;

function isCacheValid() {
  return cachedPosts && Date.now() - cacheTime < CACHE_TTL;
}

function rowToPost(r) {
  return {
    id: String(r.id),
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    content: r.content,
    date: r.date,
    displayDate: r.display_date,
    readTime: r.read_time,
    category: r.category,
    relatedToolLink: r.related_tool_link,
    relatedToolName: r.related_tool_name,
    image: r.image || null,
  };
}

export async function getAllPosts() {
  if (isCacheValid()) return cachedPosts;
  if (!REST_BASE) return [];

  try {
    const res = await fetch(
      `${REST_BASE}?select=*&order=date.desc`,
      { headers }
    );

    if (!res.ok) {
      console.warn('[blogService] REST API error:', res.status);
      return [];
    }

    const data = await res.json();

    if (!data || data.length === 0) {
      console.warn('[blogService] No posts returned');
      return [];
    }

    cachedPosts = data.map(rowToPost);
    cacheTime = Date.now();
    return cachedPosts;
  } catch (err) {
    console.warn('[blogService] Network error:', err);
    return [];
  }
}

export async function getPostBySlug(slug) {
  if (!REST_BASE) return null;

  // Try cache first
  if (isCacheValid()) {
    return cachedPosts.find((p) => p.slug === slug) || null;
  }

  try {
    const res = await fetch(
      `${REST_BASE}?select=*&slug=eq.${encodeURIComponent(slug)}&limit=1`,
      { headers }
    );

    if (!res.ok) {
      console.warn('[blogService] REST API error:', res.status);
      return null;
    }

    const data = await res.json();
    return data && data.length > 0 ? rowToPost(data[0]) : null;
  } catch (err) {
    console.warn('[blogService] Network error:', err);
    return null;
  }
}
