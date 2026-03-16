import ToolSeoContent from '../../components/ToolSeoContent';
import UnlockPdf from '../../components/UnlockPdf';

export const metadata = {
  title: 'Unlock PDF — Remove Password Protection Online for Free | Tiny PDF Tools',
  description: 'Remove password protection from your PDF files. Enter the password you know, get an unlocked copy. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/unlock-pdf' }
};

export default function Page() {
  return <>
    <UnlockPdf />
    <ToolSeoContent toolId="unlock-pdf" />
  </>
}
