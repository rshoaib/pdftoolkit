import ToolSeoContent from '../../components/ToolSeoContent';
import MergePdf from '../../components/MergePdf';

export const metadata = {
  title: 'Merge PDF — Combine PDF Files Online for Free | Tiny PDF Tools',
  description: 'Merge multiple PDF files into one document. Drag to reorder, then download instantly. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/merge-pdf' },
  openGraph: {
    title: 'Merge PDF Free Online — Combine PDFs Instantly',
    description: 'Join multiple PDF files into one. Drag to reorder, download instantly. No uploads, 100% private.',
    url: 'https://tinypdftools.com/merge-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <MergePdf />
    <ToolSeoContent toolId="merge-pdf" />
  </>
}
