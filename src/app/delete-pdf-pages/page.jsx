import ToolSeoContent from '../../components/ToolSeoContent';
import DeletePdfPages from '../../components/DeletePdfPages';

export const metadata = {
  title: 'Delete PDF Pages — Remove Pages from PDF Online for Free | Tiny PDF Tools',
  description: 'Remove unwanted pages from your PDF in seconds. Click to select, download the trimmed file. 100% free, no uploads — runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/delete-pdf-pages' },
  openGraph: {
    title: 'Delete PDF Pages Free Online — Remove Unwanted Pages',
    description: 'Select and permanently remove any pages from your PDF. Click thumbnails to pick, download trimmed file. No uploads.',
    url: 'https://tinypdftools.com/delete-pdf-pages',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <DeletePdfPages />
    <ToolSeoContent toolId="delete-pdf-pages" />
  </>
}
