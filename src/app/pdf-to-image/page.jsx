import ToolSeoContent from '../../components/ToolSeoContent';
import PdfToImage from '../../components/PdfToImage';

export const metadata = {
  title: 'PDF to Image — Convert PDF to JPG/PNG Free | TinyPDF',
  description: 'Convert PDF pages to high-quality JPG or PNG images. Download individually or as a ZIP. 100% free, no uploads required.',
  alternates: { canonical: 'https://tinypdftools.com/pdf-to-image' },
  openGraph: {
    title: 'PDF to Image Converter Free — PDF to JPG or PNG Online',
    description: 'Convert each PDF page into a high-quality image. Download as individual files or a ZIP. No uploads, 100% private.',
    url: 'https://tinypdftools.com/pdf-to-image',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <PdfToImage />
    <ToolSeoContent toolId="pdf-to-image" />
  </>
}
