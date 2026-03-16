import ToolSeoContent from '../../components/ToolSeoContent';
import CompressPdf from '../../components/CompressPdf';

export const metadata = {
  title: 'Compress PDF — Reduce PDF File Size Online for Free | Tiny PDF Tools',
  description: 'Compress PDF files by optimizing embedded images. Choose quality levels. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/compress-pdf' }
};

export default function Page() {
  return <>
    <CompressPdf />
    <ToolSeoContent toolId="compress-pdf" />
  </>
}
