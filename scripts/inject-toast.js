import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsDir = path.resolve(__dirname, '..', 'src', 'components');

const tools = [
  'MergePdf.jsx', 'SplitPdf.jsx', 'CompressPdf.jsx', 'PdfToImage.jsx', 'ImageToPdf.jsx',
  'RotatePdf.jsx', 'ProtectPdf.jsx', 'UnlockPdf.jsx', 'WatermarkPdf.jsx',
  'OrganizePdf.jsx', 'AddPageNumbers.jsx', 'CropPdf.jsx', 'DeletePdfPages.jsx',
  'FlattenPdf.jsx', 'SignPdf.jsx', 'ExtractPdfPages.jsx'
];

for (const file of tools) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has useToast
  if (content.includes('useToast')) continue;

  // 1. Add import statement
  // We'll attach it right after the react imports or lucide imports.
  // Let's just put it near the top after lucide-react.
  content = content.replace(
    /import \{([^{}]+)\} from 'lucide-react';/g,
    `import { $1 } from 'lucide-react';\nimport { useToast } from './ToastContext';`
  );

  // 2. Inject `const toast = useToast();` at the beginning of the component
  const componentName = file.replace('.jsx', '');
  content = content.replace(
    new RegExp(`const ${componentName} = \\(\\) => \\{`),
    `const ${componentName} = () => {\n  const toast = useToast();`
  );

  // 3. Replace alert(...) with toast.error(...)
  // We only replace error alerts usually. In most files it's `alert('Error...` so:
  content = content.replace(/alert\((['`].*?['`]?)\);/g, `toast.error($1);`);
  content = content.replace(/alert\(err\.message\);/g, `toast.error(err.message);`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected toast into ${file}`);
}
