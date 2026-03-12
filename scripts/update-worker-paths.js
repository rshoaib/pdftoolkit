import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsDir = path.resolve(__dirname, '..', 'src', 'components');

const tools = [
  'SplitPdf.jsx', 'SignPdf.jsx', 'PdfToImage.jsx', 'PdfReader.jsx', 
  'OrganizePdf.jsx', 'ExtractPdfPages.jsx', 'DeletePdfPages.jsx', 'CropPdf.jsx'
];

for (const file of tools) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the cdn URL with the local reference
  content = content.replace(
    /`https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/pdf\.js\/\$\{pdfjsLib\.version\}\/pdf\.worker\.min\.mjs`/g,
    `'/pdf.worker.min.mjs'`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated workerSrc in ${file}`);
}
