import ToolSeoContent from '../../components/ToolSeoContent';
import WatermarkPdf from '../../components/WatermarkPdf';

export const metadata = {
  title: 'Watermark PDF — Add Text Watermarks Free | TinyPDF',
  description: 'Add custom text watermarks to your PDF pages. Choose font size, opacity, rotation, and color. 100% free, no uploads, 100% in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/watermark-pdf' },
  openGraph: {
    title: 'Add Watermark to PDF Free Online — Custom Text & Logo',
    description: 'Stamp DRAFT, CONFIDENTIAL, or any custom text on your PDF pages. Choose size, color, and opacity. No uploads, 100% private.',
    url: 'https://tinypdftools.com/watermark-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <WatermarkPdf />
    <ToolSeoContent toolId="watermark-pdf" />
  </>
}
