import fs from 'fs';
import path from 'path';

const tools = [
  { id: 'merge-pdf', component: 'MergePdf' },
  { id: 'split-pdf', component: 'SplitPdf' },
  { id: 'compress-pdf', component: 'CompressPdf' },
  { id: 'pdf-to-image', component: 'PdfToImage' },
  { id: 'image-to-pdf', component: 'ImageToPdf' },
  { id: 'rotate-pdf', component: 'RotatePdf' },
  { id: 'protect-pdf', component: 'ProtectPdf' },
  { id: 'unlock-pdf', component: 'UnlockPdf' },
  { id: 'watermark-pdf', component: 'WatermarkPdf' },
  { id: 'organize-pdf', component: 'OrganizePdf' },
  { id: 'add-page-numbers', component: 'AddPageNumbers' },
  { id: 'crop-pdf', component: 'CropPdf' },
  { id: 'delete-pdf-pages', component: 'DeletePdfPages' },
  { id: 'flatten-pdf', component: 'FlattenPdf' },
  { id: 'sign-pdf', component: 'SignPdf' },
  { id: 'extract-pdf-pages', component: 'ExtractPdfPages' }
];

const srcApp = path.join(process.cwd(), 'src', 'app');
const srcComp = path.join(process.cwd(), 'src', 'components');

for (const t of tools) {
  const compPath = path.join(srcComp, `${t.component}.jsx`);
  if (!fs.existsSync(compPath)) continue;
  
  let content = fs.readFileSync(compPath, 'utf8');
  
  // Extract SEO Data for Next.js metadata
  const titleMatch = content.match(/<SEO[^>]*title=["']([^"']+)["']/);
  const descMatch = content.match(/<SEO[^>]*description=["']([^"']+)["']/);
  const canonicalMatch = content.match(/<SEO[^>]*canonicalUrl=["']([^"']+)["']/);
  
  const title = titleMatch ? titleMatch[1] : '';
  const desc = descMatch ? descMatch[1] : '';
  const canonical = canonicalMatch ? canonicalMatch[1] : '';

  // Add "use client"; at the very top of the Component
  if (!content.startsWith('"use client";')) {
    content = `"use client";\n` + content;
    fs.writeFileSync(compPath, content);
  }
  
  // Create Next.js App Router Page
  const pageDir = path.join(srcApp, t.id);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  
  const pageContent = `import ${t.component} from '../../components/${t.component}';

export const metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${desc.replace(/'/g, "\\'")}',
  alternates: { canonical: '${canonical}' }
};

export default function Page() {
  return <${t.component} />;
}
`;
  
  fs.writeFileSync(path.join(pageDir, 'page.jsx'), pageContent);
  console.log(`Migrated ${t.id}`);
}
