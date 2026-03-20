import ToolSeoContent from '../../components/ToolSeoContent';
import ProtectPdf from '../../components/ProtectPdf';

export const metadata = {
  title: 'Protect PDF — Add Password to PDF Online for Free | Tiny PDF Tools',
  description: 'Add password protection with AES-256 encryption to your PDFs. 100% free, no uploads — encryption runs in your browser.',
  alternates: { canonical: 'https://tinypdftools.com/protect-pdf' },
  openGraph: {
    title: 'Password Protect PDF Free — AES-256 Encryption Online',
    description: 'Secure your PDF with bank-grade AES-256 encryption. No uploads — encryption happens inside your browser.',
    url: 'https://tinypdftools.com/protect-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <ProtectPdf />
    <ToolSeoContent toolId="protect-pdf" />
  </>
}
