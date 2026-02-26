import { supabase } from './supabase';

// Local fallback data
const localPosts = [];

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
  if (!supabase) return localPosts;

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error || !data || data.length === 0) {
      console.warn('[blogService] Supabase fetch failed, using local fallback', error);
      return localPosts;
    }

    cachedPosts = data.map(rowToPost);
    cacheTime = Date.now();
    return cachedPosts;
  } catch (err) {
    console.warn('[blogService] Network error, using local fallback', err);
    return localPosts;
  }
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug);
}
