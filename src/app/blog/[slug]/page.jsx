import BlogPost from '../../../components/BlogPost';
import { getAllPosts, getPostBySlug } from '../../../lib/blogService';
import { notFound } from 'next/navigation';

// Pre-render one static page per post at build time.
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found | Tiny PDF Tools' };
  }

  const url = `https://tinypdftools.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Tiny PDF Tools`,
    description: post.excerpt || post.title,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url,
      siteName: 'Tiny PDF Tools',
      type: 'article',
      publishedTime: post.date,
      authors: ['Rizwan'],
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.excerpt || post.title,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}