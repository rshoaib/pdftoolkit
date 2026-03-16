import ToolSeoContent from '../../components/ToolSeoContent';
import SignPdf from '../../components/SignPdf';

export const metadata = {
  title: 'Sign PDF — Add Signature to PDF Online for Free | Tiny PDF Tools',
  description: 'Draw or type your signature and place it on any PDF page. 100% free, no uploads — your signature never leaves your browser.',
  alternates: { canonical: 'https://tinypdftools.com/sign-pdf' }
};

export default function Page() {
  return <>
    <SignPdf />
    <ToolSeoContent toolId="sign-pdf" />
  </>
}
