import ToolSeoContent from '../../components/ToolSeoContent';
import CompressPdf from '../../components/CompressPdf';

export const metadata = {
  title: 'Compress PDF — Reduce PDF File Size Online for Free | Tiny PDF Tools',
  description: 'Compress PDF files by optimizing embedded images. Choose quality levels. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/compress-pdf' },
  openGraph: {
    title: 'Compress PDF Free Online — Shrink PDF File Size',
    description: 'Reduce any PDF file size by up to 90%. Runs in your browser, 100% private, no uploads required.',
    url: 'https://tinypdftools.com/compress-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <CompressPdf />
    <ToolSeoContent toolId="compress-pdf" />
  </>
}
