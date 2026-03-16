import ToolSeoContent from '../../components/ToolSeoContent';
import ExtractPdfPages from '../../components/ExtractPdfPages';

export const metadata = {
  title: 'Extract PDF Pages — Pull Specific Pages from a PDF Online Free | Tiny PDF Tools',
  description: 'Select and extract specific pages from any PDF into a new file. 100% free, no uploads — runs entirely in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/extract-pdf-pages' }
};

export default function Page() {
  return <>
    <ExtractPdfPages />
    <ToolSeoContent toolId="extract-pdf-pages" />
  </>
}
