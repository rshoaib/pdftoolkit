import ToolSeoContent from '../../components/ToolSeoContent';
import CropPdf from '../../components/CropPdf';

export const metadata = {
  title: 'Crop PDF — Trim PDF Margins & Pages Online for Free | Tiny PDF Tools',
  description: 'Crop and trim PDF pages visually. Drag to select the area to keep, then download instantly. 100% free, no uploads — runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/crop-pdf' },
  openGraph: {
    title: 'Crop PDF Free Online — Trim Margins & Pages Visually',
    description: 'Drag crop handles to trim margins or cut specific areas of your PDF. Visual editor, no uploads, completely free.',
    url: 'https://tinypdftools.com/crop-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <CropPdf />
    <ToolSeoContent toolId="crop-pdf" />
  </>;
}
