import ToolSeoContent from '../../components/ToolSeoContent';
import OrganizePdf from '../../components/OrganizePdf';

export const metadata = {
  title: 'Organize PDF — Rearrange & Reorder Pages | TinyPDF',
  description: 'Drag and drop to reorder PDF pages, delete unwanted pages, or duplicate them. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/organize-pdf' },
  openGraph: {
    title: 'Organize PDF Pages Free Online — Reorder, Delete & Duplicate',
    description: 'Drag to reorder pages, click to delete, or duplicate any page. Visual editor, no uploads, 100% private.',
    url: 'https://tinypdftools.com/organize-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <OrganizePdf />
    <ToolSeoContent toolId="organize-pdf" />
  </>;
}
