import PdfToImage from '../../components/PdfToImage';

export const metadata = {
  title: 'PDF to Image — Convert PDF Pages to JPG/PNG Online | Tiny PDF Tools',
  description: 'Convert PDF pages to high-quality JPG or PNG images. Download individually or as a ZIP. 100% free, no uploads required.',
  alternates: { canonical: 'https://tinypdftools.com/pdf-to-image' }
};

export default function Page() {
  return <PdfToImage />;
}
