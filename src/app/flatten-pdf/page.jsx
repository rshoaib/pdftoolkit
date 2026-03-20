import ToolSeoContent from '../../components/ToolSeoContent';
import FlattenPdf from '../../components/FlattenPdf';

export const metadata = {
  title: 'Flatten PDF — Make PDF Non-Editable Online for Free | Tiny PDF Tools',
  description: 'Flatten PDF form fields and annotations into a static, non-editable document. 100% free, no uploads — runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/flatten-pdf' },
  openGraph: {
    title: 'Flatten PDF Free Online — Make Forms Non-Editable',
    description: 'Convert form fields and annotations into static content. Perfect for submitting completed forms. No uploads, 100% private.',
    url: 'https://tinypdftools.com/flatten-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <FlattenPdf />
    <ToolSeoContent toolId="flatten-pdf" />
  </>
}
