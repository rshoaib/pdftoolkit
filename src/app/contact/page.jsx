import Contact from '../../components/Contact';

export const metadata = {
  title: 'Contact — Tiny PDF Tools | Get in Touch',
  description: 'Have a question, bug report, or feature suggestion? Get in touch with the Tiny PDF Tools team. We read every message.',
  alternates: { canonical: 'https://tinypdftools.com/contact' },
  openGraph: {
    title: 'Contact Tiny PDF Tools',
    description: 'Have a question or suggestion? Get in touch with the Tiny PDF Tools team.',
    url: 'https://tinypdftools.com/contact',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <Contact />;
}
