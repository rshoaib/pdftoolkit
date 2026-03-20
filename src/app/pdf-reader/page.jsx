import ToolSeoContent from '../../components/ToolSeoContent';
import PdfReader from '../../components/PdfReader';

export const metadata = {
  title: 'PDF Reader — View PDF Files Online for Free | Tiny PDF Tools',
  description: 'Open and read PDF files directly in your browser. Zoom, navigate pages, rotate, and search text — 100% free, no uploads, works offline.',
  alternates: { canonical: 'https://tinypdftools.com/pdf-reader' },
  openGraph: {
    title: 'Free Online PDF Reader — View PDFs in Your Browser',
    description: 'Read any PDF instantly in your browser. Navigate pages, zoom, search text. No uploads, 100% private, completely free.',
    url: 'https://tinypdftools.com/pdf-reader',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <PdfReader />
    <ToolSeoContent toolId="pdf-reader" />
  </>;
}
