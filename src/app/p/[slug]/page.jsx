import { notFound } from 'next/navigation';
import { programmaticPages } from '../../../data/programmaticPages';
import ToolSeoContent from '../../../components/ToolSeoContent';

// Dynamically import tools to keep bundle size small
import CompressPdf from '../../../components/CompressPdf';
import MergePdf from '../../../components/MergePdf';
import SplitPdf from '../../../components/SplitPdf';
import ProtectPdf from '../../../components/ProtectPdf';
import PdfToImage from '../../../components/PdfToImage';

const ToolComponents = {
  'compress-pdf': CompressPdf,
  'merge-pdf': MergePdf,
  'split-pdf': SplitPdf,
  'protect-pdf': ProtectPdf,
  'pdf-to-image': PdfToImage,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = programmaticPages.find(p => p.slug === slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: `https://tinypdftools.com/p/${page.slug}` }
  };
}

export function generateStaticParams() {
  return programmaticPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function ProgrammaticPage({ params }) {
  const { slug } = await params;
  const page = programmaticPages.find(p => p.slug === slug);
  if (!page) notFound();

  const ToolComponent = ToolComponents[page.toolId];
  if (!ToolComponent) notFound();

  return (
    <>
      <ToolComponent
        title={page.title}
        description={page.description}
        seoOverride={{
          title: page.seoTitle,
          description: page.seoDescription,
          canonical: `https://tinypdftools.com/p/${page.slug}`
        }}
      />
      {page.seoContent && (
        <div className="tool-page" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="programmatic-seo-content" dangerouslySetInnerHTML={{ __html: page.seoContent }} />
        </div>
      )}
      <ToolSeoContent toolId={page.toolId} />
    </>
  );
}
