import ToolSeoContent from '../../components/ToolSeoContent';
import SplitPdf from '../../components/SplitPdf';

export const metadata = {
  title: 'Split PDF — Extract Pages from PDF Online for Free | Tiny PDF Tools',
  description: 'Split a PDF into separate files or extract specific pages. 100% free, no uploads, runs entirely in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/split-pdf' },
  openGraph: {
    title: 'Split PDF Free Online — Extract Pages Instantly',
    description: 'Extract specific pages or split a PDF into separate files. No uploads, 100% private, completely free.',
    url: 'https://tinypdftools.com/split-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <SplitPdf />
    <ToolSeoContent toolId="split-pdf" />
  </>
}
