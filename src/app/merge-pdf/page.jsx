import ToolSeoContent from '../../components/ToolSeoContent';
import MergePdf from '../../components/MergePdf';

export const metadata = {
  title: 'Merge PDF — Combine PDF Files Online for Free | Tiny PDF Tools',
  description: 'Merge multiple PDF files into one document. Drag to reorder, then download instantly. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/merge-pdf' }
};

export default function Page() {
  return <>
    <MergePdf />
    <ToolSeoContent toolId="merge-pdf" />
  </>
}
