import { notFound } from 'next/navigation';
import { programmaticPages } from '../../../data/programmaticPages';
import ToolSeoContent from '../../../components/ToolSeoContent';

// Dynamically import tools to keep bundle size small
import CompressPdf from '../../../components/CompressPdf';
import MergePdf from '../../../components/MergePdf';
import SplitPdf from '../../../components/SplitPdf';
import ProtectPdf from '../../../components/ProtectPdf';

const ToolComponents = {
  'compress-pdf': CompressPdf,
  'merge-pdf': MergePdf,
  'split-pdf': SplitPdf,
  'protect-pdf': ProtectPdf,
};

export function generateMetadata({ params }) {
  const page = programmaticPages.find(p => p.slug === params.slug);
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

export default function ProgrammaticPage({ params }) {
  const page = programmaticPages.find(p => p.slug === params.slug);
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
      <ToolSeoContent toolId={page.toolId} />
    </>
  );
}
