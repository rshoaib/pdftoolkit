import BlogList from '../../components/BlogList';
import { getAllPosts } from '../../lib/blogService';
// Render on demand so new posts in Supabase appear without a rebuild.
// blogService.getAllPosts() has its own in-memory 5-min TTL cache.
export const revalidate = 0;

export const metadata = {
  title: 'Blog — PDF Tips, Tutorials & Guides | Tiny PDF Tools',
  description: 'Tips, tutorials, and guides for working with PDFs. Learn how to merge, split, compress, and protect your documents — all for free, 100% in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/blog' }
};

export default async function Page() {
  const posts = await getAllPosts();
  return <BlogList posts={posts} />;
}
