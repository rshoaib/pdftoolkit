/**
 * Script to add ToolIntro component to all tool pages.
 * Run with: node scripts/add-tool-intros.mjs
 */
import fs from 'fs';
import path from 'path';

const COMPONENTS_DIR = 'src/components';

const toolIntros = {
  MergePdf: {
    paragraphs: [
      'Need to combine multiple PDF files into a single document? Whether you are assembling a job application package, compiling reports, or merging scanned pages, this tool lets you join any number of PDFs into one cohesive file.',
      'Simply drag and drop your PDFs, rearrange them in any order, and click merge. The combined document preserves all formatting, fonts, images, and hyperlinks from the original files. Processing happens entirely in your browser — your files are never uploaded to any server.',
    ],
    bestFor: ['Job applications', 'Report compilation', 'Scanned documents', 'Document packages'],
  },
  SplitPdf: {
    paragraphs: [
      'Extract specific pages from a PDF or break a large document into smaller, more manageable files. This is essential when you need to send only certain pages from a report, separate chapters from a textbook, or pull out a single form from a multi-page document.',
      'Select exactly which pages to extract by specifying page ranges. The original document remains untouched — you get a new PDF containing only the pages you selected. All processing runs locally in your browser for complete privacy.',
    ],
    bestFor: ['Extracting chapters', 'Sending partial documents', 'Separating forms', 'Academic papers'],
  },
  CompressPdf: {
    paragraphs: [
      'Large PDF files can be difficult to share via email, upload to portals, or store efficiently. This compression tool reduces file size by optimizing internal data structures, downsampling embedded images, and removing redundant metadata — all without noticeably affecting visual quality.',
      'Most users see a 40–70% reduction in file size for image-heavy PDFs. Text-only documents are already compact, so compression results may vary. Choose from three compression levels depending on whether you prioritize quality or file size.',
    ],
    bestFor: ['Email attachments', 'Portal uploads', 'Archiving', 'Cloud storage optimization'],
  },
  PdfToImage: {
    paragraphs: [
      'Convert PDF pages into high-quality JPG or PNG images. This is useful for embedding PDF content in presentations, social media posts, websites, or image-editing tools that do not support PDF format natively.',
      'Each page of your PDF is rendered as a separate image at your chosen resolution. PNG format preserves transparency and crisp text, while JPG offers smaller file sizes. The conversion happens entirely in your browser using PDF.js rendering.',
    ],
    bestFor: ['Presentation slides', 'Social media', 'Website content', 'Thumbnail generation'],
  },
  ImageToPdf: {
    paragraphs: [
      'Combine JPG, PNG, or WebP images into a single PDF document. This is commonly used for converting scanned receipts, photos, whiteboard notes, or design mockups into a shareable, printable PDF format.',
      'Upload multiple images, rearrange them in any order, and generate a PDF where each image fills its own page. The output preserves the original image quality and dimensions. Everything is processed in your browser — your images never leave your device.',
    ],
    bestFor: ['Scanned receipts', 'Photo albums', 'Design portfolios', 'Whiteboard captures'],
  },
  RotatePdf: {
    paragraphs: [
      'Fix wrongly oriented PDF pages by rotating them 90°, 180°, or 270° clockwise. This commonly happens with scanned documents, mobile photos converted to PDF, or documents saved in landscape format that should be portrait.',
      'The rotation is lossless — it modifies only the page orientation metadata without re-encoding the content. Your text, images, and formatting remain pixel-perfect. The operation is instant and runs entirely in your browser.',
    ],
    bestFor: ['Scanned documents', 'Mobile captures', 'Landscape-to-portrait fixes', 'Presentation formatting'],
  },
  ProtectPdf: {
    paragraphs: [
      'Add password protection and AES-256 encryption to your PDF files. This prevents unauthorized users from opening, copying, or printing your sensitive documents. Essential for contracts, financial reports, medical records, and any confidential material shared digitally.',
      'You set the password, and the tool encrypts the entire document in your browser. The encrypted PDF can only be opened by someone who knows the password. Since encryption happens client-side, your unprotected document is never sent to any server.',
    ],
    bestFor: ['Contracts and agreements', 'Financial documents', 'Medical records', 'Confidential reports'],
  },
  UnlockPdf: {
    paragraphs: [
      'Remove password protection from PDF files that you own. If you have the correct password but want to create an unlocked copy for easier access, this tool decrypts the document and saves a new, password-free version.',
      'Enter the existing password, and the tool creates an unprotected copy. This is useful when you frequently reference a password-protected document. The decryption runs entirely in your browser — your password and document never leave your device.',
    ],
    bestFor: ['Frequently accessed documents', 'Document archiving', 'Removing own passwords', 'Team sharing'],
  },
  WatermarkPdf: {
    paragraphs: [
      'Add text watermarks to every page of your PDF. Commonly used to mark documents as "DRAFT", "CONFIDENTIAL", "SAMPLE", or with your company name to protect intellectual property and establish ownership.',
      'Customize the watermark text, font size, opacity, rotation angle, and color. The watermark is embedded directly into the PDF pages. You can preview the result before downloading. Processing happens locally in your browser for complete privacy.',
    ],
    bestFor: ['Draft documents', 'Confidential markings', 'Brand protection', 'Legal documents'],
  },
  OrganizePdf: {
    paragraphs: [
      'Rearrange, delete, or duplicate pages within a PDF using an intuitive drag-and-drop interface. This gives you complete control over your document\'s page order without needing to split and merge manually.',
      'Visual page thumbnails make it easy to identify and move pages. Delete unwanted pages, duplicate important ones, or reorder sections to create the exact document structure you need. Changes are applied instantly in your browser.',
    ],
    bestFor: ['Report restructuring', 'Removing blank pages', 'Reordering sections', 'Document cleanup'],
  },
  AddPageNumbers: {
    paragraphs: [
      'Stamp page numbers on every page of your PDF document. Choose the position (top or bottom, left, center, or right), number format, font size, and starting number. Essential for multi-page reports, manuscripts, and official documents.',
      'Page numbers are embedded as text directly onto the PDF pages. You can preview the placement before downloading. The operation runs entirely in your browser, so your document never touches a remote server.',
    ],
    bestFor: ['Reports and manuscripts', 'Academic papers', 'Legal filings', 'Multi-page proposals'],
  },
  CropPdf: {
    paragraphs: [
      'Visually trim margins or cut specific areas from PDF pages. Draw a crop rectangle directly on the page preview to define exactly which area to keep. This is useful for removing headers, footers, whitespace, or focusing on specific content areas.',
      'The crop tool modifies the visible area of the page without destroying the underlying content. You can apply the same crop to all pages or set different crops per page. Everything runs in your browser for instant, private processing.',
    ],
    bestFor: ['Removing margins', 'Trimming headers/footers', 'Focusing on content areas', 'Print preparation'],
  },
  DeletePdfPages: {
    paragraphs: [
      'Remove unwanted pages from your PDF document. Browse page thumbnails, click to select the pages you want to remove, and download a clean copy with those pages stripped out.',
      'This is the fastest way to eliminate blank pages, duplicate sections, cover pages, or any content you do not need. The original document is never modified — you always download a new, trimmed copy. Processing is instant and fully browser-based.',
    ],
    bestFor: ['Removing blank pages', 'Stripping cover pages', 'Cleaning scanned documents', 'Trimming appendices'],
  },
  FlattenPdf: {
    paragraphs: [
      'Merge interactive form fields, annotations, comments, and digital signatures into a static, non-editable PDF layer. Flattening is essential before archiving forms, submitting completed applications, or sharing filled documents where recipients should not modify the content.',
      'The flattened PDF looks identical to the original but all interactive elements become permanent, static content. This also reduces file size and ensures the document displays consistently across all PDF viewers and printers.',
    ],
    bestFor: ['Archiving filled forms', 'Submitting applications', 'Locking annotations', 'Print preparation'],
  },
  SignPdf: {
    paragraphs: [
      'Draw or type your signature and place it on any page of your PDF document. Position, resize, and adjust the signature until it fits perfectly. Ideal for signing contracts, approvals, letters, and any document that requires a personal signature.',
      'Your signature is embedded directly into the PDF as a visual element. You can use a mouse, trackpad, or touchscreen to draw a freehand signature, or type your name for a clean text-based signature. Everything happens in your browser — your signed documents are never uploaded.',
    ],
    bestFor: ['Contract signing', 'Approval workflows', 'Letters and memos', 'Permission forms'],
  },
  ExtractPdfPages: {
    paragraphs: [
      'Select and extract specific pages from a PDF into a new, standalone file. Unlike splitting, extraction lets you pick individual pages by number or range — even non-consecutive pages — and combine them into a single output document.',
      'This is perfect when you need specific pages from a large document without downloading the entire file. Browse page thumbnails, select the pages you need, and download a clean PDF containing only your selections.',
    ],
    bestFor: ['Pulling specific pages', 'Creating document excerpts', 'Selective sharing', 'Reference compilation'],
  },
};

let updated = 0;
let skipped = 0;

for (const [componentName, intro] of Object.entries(toolIntros)) {
  const filePath = path.join(COMPONENTS_DIR, `${componentName}.jsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ File not found: ${filePath}`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has ToolIntro
  if (content.includes('ToolIntro')) {
    console.log(`⏭️ Already has ToolIntro: ${componentName}`);
    skipped++;
    continue;
  }

  // 1. Add import for ToolIntro after the last existing import
  const importLines = content.split('\n').filter(l => l.startsWith('import '));
  const lastImport = importLines[importLines.length - 1];
  content = content.replace(
    lastImport,
    `${lastImport}\nimport ToolIntro from './ToolIntro';`
  );

  // 2. Build the ToolIntro JSX
  const paragraphsStr = intro.paragraphs.map(p => `'${p.replace(/'/g, "\\'")}'`).join(', ');
  const bestForStr = intro.bestFor.map(b => `'${b}'`).join(', ');
  const toolIntroJsx = `\n      <ToolIntro\n        paragraphs={[${paragraphsStr}]}\n        bestFor={[${bestForStr}]}\n      />\n`;

  // 3. Insert ToolIntro after the closing </div> of tool-header
  // Pattern: </div> followed by empty line and drop zone or workspace
  const headerPattern = /<\/div>\s*\n\s*\n\s*{/;
  if (headerPattern.test(content)) {
    content = content.replace(headerPattern, (match) => {
      return `</div>\n${toolIntroJsx}\n      {`;
    });
  } else {
    // Fallback: insert after tool-desc paragraph's parent div
    const altPattern = /(<p className="tool-desc">.*?<\/p>\s*\n\s*<\/div>)/;
    if (altPattern.test(content)) {
      content = content.replace(altPattern, (match) => {
        return `${match}\n${toolIntroJsx}`;
      });
    } else {
      console.log(`⚠️ Could not find insertion point: ${componentName}`);
      skipped++;
      continue;
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Updated: ${componentName}`);
  updated++;
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
