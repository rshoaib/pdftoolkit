import fs from 'fs';
import path from 'path';

const files = [
  'SplitPdf.jsx',
  'SignPdf.jsx',
  'PdfToImage.jsx',
  'PdfReader.jsx',
  'OrganizePdf.jsx',
  'ExtractPdfPages.jsx',
  'DeletePdfPages.jsx',
  'CropPdf.jsx'
];

const srcComp = path.join(process.cwd(), 'src', 'components');

for (const f of files) {
  const compPath = path.join(srcComp, f);
  if (!fs.existsSync(compPath)) continue;
  
  let content = fs.readFileSync(compPath, 'utf8');
  
  // 1. Remove the static import
  content = content.replace(/import \* as pdfjsLib from 'pdfjs-dist';\n/g, '');
  
  // 2. Remove the global worker options
  content = content.replace(/if \(typeof window !== 'undefined'\) \{ pdfjsLib\.GlobalWorkerOptions\.workerSrc = '\/pdf\.worker\.min\.mjs'; \}\n/g, '');
  content = content.replace(/pdfjsLib\.GlobalWorkerOptions\.workerSrc = '\/pdf\.worker\.min\.mjs';\n/g, '');
  
  // 3. Insert the dynamic import right before pdfjsLib.getDocument
  content = content.replace(/(const doc = await pdfjsLib\.getDocument)/g, "const pdfjsLib = await import('pdfjs-dist');\n      pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';\n      $1");
  
  fs.writeFileSync(compPath, content);
  console.log(`Converted ${f} to dynamic import`);
}
