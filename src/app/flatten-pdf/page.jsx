import ToolSeoContent from '../../components/ToolSeoContent';
import FlattenPdf from '../../components/FlattenPdf';

export const metadata = {
  title: 'Flatten PDF — Make PDF Non-Editable Online for Free | Tiny PDF Tools',
  description: 'Flatten PDF form fields and annotations into a static, non-editable document. 100% free, no uploads — runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/flatten-pdf' }
};

export default function Page() {
  return <>
    <FlattenPdf />
    <ToolSeoContent toolId="flatten-pdf" />
  </>
}
