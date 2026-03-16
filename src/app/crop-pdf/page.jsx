import ToolSeoContent from '../../components/ToolSeoContent';
import CropPdf from '../../components/CropPdf';

export const metadata = {
  title: 'Crop PDF — Trim PDF Margins & Pages Online for Free | Tiny PDF Tools',
  description: 'Crop and trim PDF pages visually. Drag to select the area to keep, then download instantly. 100% free, no uploads — runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/crop-pdf' }
};

export default function Page() {
  return <>
    <CropPdf />
    <ToolSeoContent toolId="crop-pdf" />
  </>
}
