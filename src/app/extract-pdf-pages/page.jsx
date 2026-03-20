import ToolSeoContent from '../../components/ToolSeoContent';
import ExtractPdfPages from '../../components/ExtractPdfPages';

export const metadata = {
  title: 'Extract PDF Pages — Pull Specific Pages from a PDF Online Free | Tiny PDF Tools',
  description: 'Select and extract specific pages from any PDF into a new file. 100% free, no uploads — runs entirely in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/extract-pdf-pages' },
  openGraph: {
    title: 'Extract PDF Pages Free Online — Save Specific Pages',
    description: 'Pick exact page numbers or ranges from any PDF and download them as a new document. Fast, free, and private.',
    url: 'https://tinypdftools.com/extract-pdf-pages',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <ExtractPdfPages />
    <ToolSeoContent toolId="extract-pdf-pages" />
  </>
}
