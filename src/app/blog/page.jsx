import BlogList from '../../components/BlogList';

export const metadata = {
  title: 'Blog — PDF Tips, Tutorials & Guides | Tiny PDF Tools',
  description: 'Tips, tutorials, and guides for working with PDFs. Learn how to merge, split, compress, and protect your documents — all for free, 100% in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/blog' }
};

export default function Page() {
  return <BlogList />;
}
