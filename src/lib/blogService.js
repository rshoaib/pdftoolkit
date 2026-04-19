// Blog posts are stored as JSON files in src/data/blogPosts/.
// Previously this module fetched from Supabase REST — that backend has been
// retired. Posts now ship with the Vercel build, so there are no network
// calls, no env vars, and no cache layer to worry about.
//
// To publish a new post: drop a <slug>.json file into src/data/blogPosts/
// matching the Post shape below, commit, and push. Vercel redeploys
// automatically.
//
// Post shape (must match what BlogList.jsx and BlogPost.jsx read):
//   { id, slug, title, excerpt, content, date, displayDate, readTime,
//     category, relatedToolLink, relatedToolName, image }

import fs from 'node:fs';
import path from 'node:path';

const POSTS_DIR = path.join(process.cwd(), 'src', 'data', 'blogPosts');

// Read + sort once per server process. Next.js reuses the module between
// requests, so this acts as a build/runtime cache without any TTL logic.
let cachedPosts = null;

function loadPosts() {
  if (cachedPosts) return cachedPosts;

  let files;
  try {
    files = fs.readdirSync(POSTS_DIR);
  } catch (err) {
    console.warn('[blogService] posts directory missing:', err.message);
    cachedPosts = [];
    return cachedPosts;
  }

  const posts = [];
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    try {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      posts.push(JSON.parse(raw));
    } catch (err) {
      console.warn(`[blogService] skipping ${file}:`, err.message);
    }
  }

  // Newest first, matching the previous `order=date.desc` query.
  posts.sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return (isNaN(db) ? 0 : db) - (isNaN(da) ? 0 : da);
  });

  cachedPosts = posts;
  return cachedPosts;
}

export async function getAllPosts() {
  return loadPosts();
}

export async function getPostBySlug(slug) {
  return loadPosts().find((p) => p.slug === slug) || null;
}
