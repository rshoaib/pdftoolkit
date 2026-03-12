import ImageToPdf from '../../components/ImageToPdf';

export const metadata = {
  title: 'Image to PDF — Convert JPG/PNG to PDF Online for Free | Tiny PDF Tools',
  description: 'Combine JPG, PNG, or WebP images into a single PDF document. Drag to reorder. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/image-to-pdf' }
};

export default function Page() {
  return <ImageToPdf />;
}
