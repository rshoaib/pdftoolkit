import ToolSeoContent from '../../components/ToolSeoContent';
import RotatePdf from '../../components/RotatePdf';

export const metadata = {
  title: 'Rotate PDF — Rotate PDF Pages Online for Free | Tiny PDF Tools',
  description: 'Rotate all pages in your PDF by 90°, 180°, or 270°. Lossless rotation, instant download. 100% free, no uploads.',
  alternates: { canonical: 'https://tinypdftools.com/rotate-pdf' },
  openGraph: {
    title: 'Rotate PDF Pages Free Online — Fix Sideways PDFs',
    description: 'Fix upside-down or sideways PDFs instantly. Rotate by 90°, 180°, or 270°. Free, no uploads, 100% private.',
    url: 'https://tinypdftools.com/rotate-pdf',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
};

export default function Page() {
  return <>
    <RotatePdf />
    <ToolSeoContent toolId="rotate-pdf" />
  </>
}
