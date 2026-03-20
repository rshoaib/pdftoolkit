import About from '../../components/About';

export const metadata = {
  title: 'About — Tiny PDF Tools | Free Private PDF Utilities',
  description: 'Learn about Tiny PDF Tools — a free, 100% client-side PDF toolkit that processes your documents entirely in your browser. No uploads, no accounts, no data collection.',
  alternates: { canonical: 'https://tinypdftools.com/about' },
  openGraph: {
    title: 'About Tiny PDF Tools — Free & Private PDF Utilities',
    description: 'All PDF processing happens in your browser. Your files are never uploaded to any server. 100% free, 100% private.',
    url: 'https://tinypdftools.com/about',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <About />;
}
