import ToolSeoContent from '../../components/ToolSeoContent';
import UnlockPdf from '../../components/UnlockPdf';

export const metadata = {
  title: 'Unlock PDF — Remove Password Protection Free | TinyPDF',
  description: 'Remove password protection from your PDF files. Enter the password you know, get an unlocked copy. 100% free, no uploads, runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/unlock-pdf' },
  openGraph: {
    title: 'Unlock PDF Free Online — Remove Password Protection',
    description: 'Unlock a password-protected PDF instantly. Enter your password, download an unrestricted copy. No uploads, 100% private.',
    url: 'https://tinypdftools.com/unlock-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <UnlockPdf />
    <ToolSeoContent toolId="unlock-pdf" />
  </>
}
