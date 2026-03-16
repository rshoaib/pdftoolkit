import ToolSeoContent from '../../components/ToolSeoContent';
import WatermarkPdf from '../../components/WatermarkPdf';

export const metadata = {
  title: 'Watermark PDF — Add Text Watermarks Online for Free | Tiny PDF Tools',
  description: 'Add custom text watermarks to your PDF pages. Choose font size, opacity, rotation, and color. 100% free, no uploads, 100% in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/watermark-pdf' }
};

export default function Page() {
  return <>
    <WatermarkPdf />
    <ToolSeoContent toolId="watermark-pdf" />
  </>
}
