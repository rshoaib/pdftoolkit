import BlogPost from '../../../components/BlogPost';
import { getPostBySlug } from '../../../lib/blogService';
import { notFound } from 'next/navigation';

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
      ...(post.image && { images: [{ url: `https://tinypdftools.com${post.image}`, width: 1200, height: 630, alt: post.title }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      ...(post.image && { images: [`https://tinypdftools.com${post.image}`] }),
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}