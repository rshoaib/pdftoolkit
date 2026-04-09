import ToolSeoContent from '../../components/ToolSeoContent';
import ImageToPdf from '../../components/ImageToPdf';

export const metadata = {
  title: 'Image to PDF — Convert JPG/PNG to PDF Free | TinyPDF',
  description: 'Combine JPG, PNG, or WebP images into a single PDF document. Drag to reorder. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/image-to-pdf' },
  openGraph: {
    title: 'Image to PDF Converter Free Online — JPG & PNG to PDF',
    description: 'Combine multiple images into one PDF document. Drag to reorder pages. No uploads, 100% private, completely free.',
    url: 'https://tinypdftools.com/image-to-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <ImageToPdf />
    <ToolSeoContent toolId="image-to-pdf" />
  </>
}
