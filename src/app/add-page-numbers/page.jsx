import ToolSeoContent from '../../components/ToolSeoContent';
import AddPageNumbers from '../../components/AddPageNumbers';

export const metadata = {
  title: 'Add Page Numbers to PDF — Free Online Tool | Tiny PDF Tools',
  description: 'Add page numbers to your PDF for free. Choose position, format, font size, and color. 100% client-side, no uploads.',
  alternates: { canonical: 'https://tinypdftools.com/add-page-numbers' },
  openGraph: {
    title: 'Add Page Numbers to PDF Free Online',
    description: 'Stamp sequential page numbers on every PDF page. Choose position, font, and format. No uploads, 100% private.',
    url: 'https://tinypdftools.com/add-page-numbers',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <AddPageNumbers />
    <ToolSeoContent toolId="add-page-numbers" />
  </>
}
