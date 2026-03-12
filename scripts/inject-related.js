import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsDir = path.resolve(__dirname, '..', 'src', 'components');

const tools = [
  'SplitPdf.jsx', 'CompressPdf.jsx', 'PdfToImage.jsx', 'ImageToPdf.jsx',
  'RotatePdf.jsx', 'ProtectPdf.jsx', 'UnlockPdf.jsx', 'WatermarkPdf.jsx',
  'OrganizePdf.jsx', 'AddPageNumbers.jsx', 'CropPdf.jsx', 'DeletePdfPages.jsx',
  'FlattenPdf.jsx', 'SignPdf.jsx', 'ExtractPdfPages.jsx', 'PdfReader.jsx'
];

for (const file of tools) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has RelatedTools
  if (content.includes('RelatedTools')) continue;

  // Add imports
  content = content.replace(
    /import SEO from '\.\/SEO';/g,
    `import SEO from './SEO';\nimport AdSlot from './AdSlot';\nimport RelatedTools from './RelatedTools';`
  );

  // Determine tool id from filename
  // CropPdf.jsx -> crop-pdf
  const filenameNoExt = file.replace('.jsx', '');
  const toolId = filenameNoExt.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  // Inject before <FAQSection faqs={faqs} />
  const injectionStr = `
      {/* Ad slot immediately below workspace */}
      <AdSlot format="responsive" slot={import.meta.env.VITE_AD_SLOT_IN_ARTICLE || ''} className="tool-inline-ad" />

      <FAQSection`;

  content = content.replace(/<FAQSection/g, injectionStr);

  // Inject RelatedTools after FAQ
  const endInjection = `<FAQSection faqs={faqs} />

      <RelatedTools currentToolId="${toolId}" />`;
      
  content = content.replace(/<FAQSection faqs=\{faqs\} \/>/g, endInjection);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
