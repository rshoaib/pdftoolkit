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
  
  // Replace direct assignment with window check
  const target = "pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';";
  const replacement = "if (typeof window !== 'undefined') { pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'; }";
  
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(compPath, content);
    console.log(`Fixed ${f}`);
  }
}
