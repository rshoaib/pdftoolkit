/**
 * SEO content for each tool page — descriptions, how-to steps, and FAQs.
 * Used by the ToolSeoContent component to add indexable content below each tool.
 */
export const toolContent = {
  'merge-pdf': {
    heading: 'How to Merge PDF Files Online',
    intro: 'Combining multiple PDF files into one document is one of the most common document tasks — whether you are compiling reports, combining scanned pages, or bundling contracts for a client. Our free merge tool lets you do it entirely in your browser with zero uploads to any server.',
    steps: [
      'Click "Select PDF Files" or drag and drop your PDFs into the upload area.',
      'Reorder the files by dragging them into your preferred sequence.',
      'Click "Merge PDFs" to combine all files into a single document.',
      'Download your merged PDF instantly — no email or signup required.',
    ],
    details: 'Unlike most online PDF tools, Tiny PDF Tools processes everything locally using JavaScript. Your files never leave your device, which makes this the most privacy-friendly way to merge PDFs. The tool supports unlimited file sizes and there is no cap on the number of files you can combine in one session.',
    faqs: [
      { q: 'Is there a file size limit for merging PDFs?', a: 'No. Since processing happens in your browser, there is no server-side upload limit. However, very large files (500MB+) may be slower on older devices.' },
      { q: 'Are my files uploaded to a server?', a: 'No. All processing happens locally in your browser. Your files never leave your device.' },
      { q: 'Can I reorder pages after merging?', a: 'Yes. Use our Organize PDF tool to rearrange individual pages after merging.' },
    ],
  },
  'split-pdf': {
    heading: 'How to Split a PDF Into Separate Files',
    intro: 'Need to extract specific pages from a large PDF? Our split tool lets you select exactly which pages to keep and generates a new, smaller PDF file instantly. Perfect for pulling out a single chapter from an e-book, extracting an invoice from a statement bundle, or sending only the relevant pages of a report.',
    steps: [
      'Upload your PDF file by clicking "Select PDF" or drag and drop.',
      'Choose a split method: by page range, extract every N pages, or pick individual pages.',
      'Click "Split PDF" to generate your new file(s).',
      'Download the resulting PDFs directly to your device.',
    ],
    details: 'Splitting a PDF is useful when you need to share part of a document without revealing the full file. For example, sending only pages 3–5 of a contract, or isolating a specific form from a bundle. Everything runs in your browser — your data stays private.',
    faqs: [
      { q: 'Can I split a PDF into individual pages?', a: 'Yes. Select "Split every 1 page" to create a separate PDF for each page of your document.' },
      { q: 'Does splitting reduce file quality?', a: 'No. The split is lossless — the original content, fonts, and images are preserved exactly.' },
      { q: 'Can I split a password-protected PDF?', a: 'You will need to unlock the PDF first using our Unlock PDF tool, then split it.' },
    ],
  },
  'compress-pdf': {
    heading: 'How to Compress a PDF to Reduce File Size',
    intro: 'Large PDFs are a pain to email, upload, or share. Our compression tool reduces file size by optimizing embedded images while keeping the text layer and layout perfectly intact. The result is a smaller file that looks identical to the original.',
    steps: [
      'Upload your PDF file.',
      'Choose a compression level: light (minimal quality loss), medium (balanced), or strong (maximum size reduction).',
      'Click "Compress" to process the file.',
      'Download your compressed PDF and compare the file sizes.',
    ],
    details: 'PDF compression works by re-encoding the images inside the document at a lower resolution or quality setting. Text, vector graphics, and metadata are not affected. This makes it ideal for PDFs with scanned pages or embedded photographs, where the images account for most of the file size.',
    faqs: [
      { q: 'How much smaller will my PDF be?', a: 'It depends on the content. Image-heavy PDFs can shrink by 50–90%. Text-only PDFs have little room for compression.' },
      { q: 'Will compression affect text quality?', a: 'No. Only embedded images are re-encoded. Text, fonts, and vector graphics remain unchanged.' },
      { q: 'Is this tool free to use?', a: 'Yes. Tiny PDF Tools is 100% free with no hidden limits or watermarks.' },
    ],
  },
  'pdf-to-image': {
    heading: 'How to Convert PDF to JPG or PNG Images',
    intro: 'Need to turn a PDF page into an image? Our converter renders each page as a high-quality JPG or PNG image that you can use in presentations, social media posts, print materials, or websites. Every page becomes a separate image file.',
    steps: [
      'Upload the PDF you want to convert.',
      'Select your preferred image format (JPG or PNG) and quality level.',
      'Click "Convert" to render each page as an image.',
      'Download individual images or all of them as a ZIP file.',
    ],
    details: 'This is especially useful for sharing PDF content on platforms that do not support PDF files — like Instagram, Twitter, or WhatsApp. PNG format is best for text-heavy pages (sharper edges), while JPG is ideal for pages with photos (smaller file size).',
    faqs: [
      { q: 'What resolution are the output images?', a: 'By default, pages are rendered at 150 DPI (suitable for screens). You can increase this for print-quality output.' },
      { q: 'Can I convert a specific page only?', a: 'Yes. After uploading, select which pages you want to convert.' },
      { q: 'Is there a page limit?', a: 'No. You can convert PDFs with hundreds of pages, though very large files may take longer to process in the browser.' },
    ],
  },
  'image-to-pdf': {
    heading: 'How to Convert Images to PDF',
    intro: 'Combine multiple JPG, PNG, or WebP images into a single PDF document. This is ideal for creating photo albums, digitizing scanned receipts, compiling screenshots into a report, or converting design mockups into a shareable format.',
    steps: [
      'Upload your images (JPG, PNG, or WebP format).',
      'Drag to reorder the images in the sequence you want.',
      'Adjust page size and orientation if needed.',
      'Click "Create PDF" and download your new document.',
    ],
    details: 'Each image becomes a full page in the resulting PDF. The tool automatically adjusts the page dimensions to match each image, so there are no awkward white borders. This is the fastest way to turn a folder of images into a professional-looking PDF without installing any software.',
    faqs: [
      { q: 'What image formats are supported?', a: 'JPG, JPEG, PNG, and WebP images are supported.' },
      { q: 'Can I control the page size?', a: 'Yes. You can choose standard sizes like A4 or Letter, or let the tool auto-size pages to match each image.' },
      { q: 'Is there a limit on the number of images?', a: 'No hard limit. However, combining hundreds of high-resolution images may be slow on older devices.' },
    ],
  },
  'rotate-pdf': {
    heading: 'How to Rotate PDF Pages',
    intro: 'Scanned a document upside down? Received a PDF with sideways pages? Our rotate tool lets you fix the orientation of all pages in a single click. Choose 90°, 180°, or 270° rotation — the change is applied losslessly, meaning no quality degradation.',
    steps: [
      'Upload your PDF file.',
      'Select the rotation angle: 90° (clockwise), 180°, or 270° (counterclockwise).',
      'Click "Rotate" to apply the change.',
      'Download your corrected PDF.',
    ],
    details: 'Rotation is a metadata-level change, not a re-encoding. This means the operation is instantaneous and the file quality is preserved perfectly. It is especially useful for fixing scanned documents that were fed into the scanner in the wrong orientation.',
    faqs: [
      { q: 'Can I rotate specific pages only?', a: 'Currently, rotation is applied to all pages. To rotate individual pages, use our Organize PDF tool.' },
      { q: 'Does rotation affect file size?', a: 'No. Rotation is a metadata change and does not alter the file size.' },
      { q: 'Can I undo a rotation?', a: 'Yes. Simply rotate again by the complementary angle (e.g., rotate 270° to undo a 90° rotation).' },
    ],
  },
  'protect-pdf': {
    heading: 'How to Password Protect a PDF',
    intro: 'Add AES-256 encryption and password protection to any PDF file. This prevents unauthorized access — the recipient must enter the correct password to open and view the document. Essential for contracts, financial documents, medical records, and any sensitive information.',
    steps: [
      'Upload the PDF you want to protect.',
      'Enter a strong password (we recommend 8+ characters with mixed case, numbers, and symbols).',
      'Click "Protect PDF" to encrypt the file.',
      'Download your secured PDF and share it safely.',
    ],
    details: 'AES-256 is the same encryption standard used by governments and financial institutions. Once protected, the PDF cannot be opened without the correct password. Remember to share the password with your recipient through a separate channel (like a phone call or text message) — never include it in the same email as the file.',
    faqs: [
      { q: 'What encryption does this use?', a: 'AES-256 bit encryption, the current industry standard for document security.' },
      { q: 'Can I remove the password later?', a: 'Yes. Use our Unlock PDF tool with the original password to remove protection.' },
      { q: 'Is my password stored anywhere?', a: 'No. Everything happens in your browser. We never see or store your password.' },
    ],
  },
  'unlock-pdf': {
    heading: 'How to Unlock a Password-Protected PDF',
    intro: 'Have a PDF that you own but cannot edit because it is password-protected? Our unlock tool removes the password restriction so you can freely print, copy, and edit the document. You must know the original password to unlock the file — this tool does not crack or bypass passwords.',
    steps: [
      'Upload your password-protected PDF.',
      'Enter the document password.',
      'Click "Unlock PDF" to remove the protection.',
      'Download the unlocked version.',
    ],
    details: 'This tool is designed for legitimate use cases — like unlocking your own documents when you have forgotten which restrictions you applied. It removes the open password and any permission restrictions (print, copy, edit) from the PDF.',
    faqs: [
      { q: 'Can I unlock a PDF without the password?', a: 'No. You must provide the correct password. This tool does not crack or bypass encryption.' },
      { q: 'Does unlocking change the document content?', a: 'No. The content remains identical — only the password restriction is removed.' },
      { q: 'Is this legal?', a: 'Yes, as long as you are the rightful owner of the document or have authorization to remove the protection.' },
    ],
  },
  'watermark-pdf': {
    heading: 'How to Add a Watermark to PDF Pages',
    intro: 'Watermarking your PDFs adds a visible text overlay to every page — perfect for marking documents as "DRAFT", "CONFIDENTIAL", "SAMPLE", or adding your company name. Our tool lets you customize the watermark text, size, color, opacity, and rotation angle.',
    steps: [
      'Upload your PDF file.',
      'Type your watermark text (e.g., "CONFIDENTIAL" or "DRAFT").',
      'Customize the appearance: font size, color, opacity, and rotation.',
      'Click "Add Watermark" and download the watermarked PDF.',
    ],
    details: 'Watermarks are rendered as transparent text overlays on each page. They are visible when viewing or printing the document but do not obscure the underlying content. This is a common practice for legal documents, internal drafts, and proof copies shared with clients before final approval.',
    faqs: [
      { q: 'Can I remove a watermark after adding it?', a: 'The watermark is permanently embedded in the PDF. Keep a copy of the original file before watermarking.' },
      { q: 'Can I use an image as a watermark?', a: 'Currently, only text watermarks are supported.' },
      { q: 'Will the watermark appear when printing?', a: 'Yes. The watermark is rendered into the PDF and will be visible in both digital and printed copies.' },
    ],
  },
  'organize-pdf': {
    heading: 'How to Rearrange PDF Pages',
    intro: 'Our organizer lets you visually rearrange, delete, and duplicate pages within a PDF. See thumbnail previews of every page, drag them into your preferred order, and download the reorganized file. No desktop software needed.',
    steps: [
      'Upload your PDF file.',
      'View thumbnail previews of all pages.',
      'Drag and drop pages to reorder them, or click to delete unwanted pages.',
      'Click "Save" to download your reorganized PDF.',
    ],
    details: 'This is the most versatile page management tool we offer. Unlike splitting or merging, page organization gives you fine-grained control over every page in the document. It is perfect for preparing presentation handouts, rearranging scanned documents, or cleaning up multi-page forms.',
    faqs: [
      { q: 'Can I duplicate a page?', a: 'Yes. Click the duplicate icon on any page thumbnail to create a copy.' },
      { q: 'Can I add pages from another PDF?', a: 'Not directly. Merge the two PDFs first, then use this tool to rearrange the combined pages.' },
      { q: 'Is there a page limit?', a: 'No. However, PDFs with hundreds of pages may take a moment to generate thumbnails.' },
    ],
  },
  'add-page-numbers': {
    heading: 'How to Add Page Numbers to a PDF',
    intro: 'Automatically stamp sequential page numbers on every page of your PDF. Choose the position (top/bottom, left/center/right), number format (1, 2, 3 or i, ii, iii), font size, and starting number. Essential for reports, theses, manuals, and any multi-page document.',
    steps: [
      'Upload your PDF file.',
      'Choose the position for page numbers (e.g., bottom center).',
      'Select a format and starting number.',
      'Click "Add Numbers" and download the result.',
    ],
    details: 'Page numbering is one of those small details that makes a document look professional. Our tool supports multiple number formats including Arabic numerals (1, 2, 3), Roman numerals (i, ii, iii), and custom prefixes like "Page 1 of N".',
    faqs: [
      { q: 'Can I skip numbering on the first page?', a: 'Yes. Set the starting page to 2 to skip the cover page.' },
      { q: 'Can I choose the font and size?', a: 'Yes. You can customize the font size and color of the page numbers.' },
      { q: 'Does this work with scanned PDFs?', a: 'Yes. Page numbers are overlaid on top of the existing content regardless of how the PDF was created.' },
    ],
  },
  'crop-pdf': {
    heading: 'How to Crop PDF Pages',
    intro: 'Trim unwanted margins, headers, footers, or specific regions from your PDF pages. Our visual crop tool shows a live preview where you can drag the crop boundaries exactly where you want them. Perfect for removing whitespace or isolating specific content areas.',
    steps: [
      'Upload your PDF file.',
      'Use the visual crop handles to define the area you want to keep.',
      'Apply the crop to all pages or selected pages only.',
      'Download your cropped PDF.',
    ],
    details: 'Cropping is non-destructive to the underlying content — it adjusts the visible area (the "media box") of each page. This means the original content still exists in the file but is hidden outside the crop boundary. Use this to remove distracting margins from scanned documents or to standardize page sizes across a multi-page document.',
    faqs: [
      { q: 'Can I crop different areas on different pages?', a: 'Currently, the same crop region is applied to all pages. For per-page cropping, use an image editor after converting to images.' },
      { q: 'Does cropping reduce file size?', a: 'Not significantly, since the hidden content is still stored in the file. Use our Compress tool for size reduction.' },
      { q: 'Can I undo a crop?', a: 'The original content is preserved in the file, but you cannot visually undo the crop in this tool. Keep your original file as a backup.' },
    ],
  },
  'delete-pdf-pages': {
    heading: 'How to Delete Pages From a PDF',
    intro: 'Quickly remove unwanted pages from any PDF. See thumbnail previews of every page, click to select the ones you want to delete, and download the trimmed document. Simple, fast, and completely private.',
    steps: [
      'Upload your PDF file.',
      'Browse the page thumbnails and click to select pages you want to remove.',
      'Click "Delete Selected Pages" to process.',
      'Download your trimmed PDF.',
    ],
    details: 'This is the fastest way to remove blank pages, duplicate pages, or irrelevant sections from a document. Common use cases include cleaning up scanned documents that have blank separator pages, removing cover sheets from faxed documents, or trimming appendices from a report before sharing.',
    faqs: [
      { q: 'Can I undo deleted pages?', a: 'No. The deletion is permanent in the output file. Always keep a copy of the original PDF.' },
      { q: 'Can I delete all pages except one?', a: 'Yes. Select all pages for deletion except the one you want to keep. Alternatively, use our Extract Pages tool.' },
      { q: 'Does deleting pages reduce file size?', a: 'Yes. Removing pages with images or heavy content will proportionally reduce the file size.' },
    ],
  },
  'flatten-pdf': {
    heading: 'How to Flatten a PDF',
    intro: 'Flattening converts interactive form fields, annotations, and comments into static, non-editable content. The result is a "print-ready" PDF where all layers are merged into one. This prevents recipients from modifying form entries or annotations after submission.',
    steps: [
      'Upload your PDF with form fields or annotations.',
      'Click "Flatten PDF" to merge all layers.',
      'Download the flattened, static document.',
    ],
    details: 'Flattening is essential when submitting completed forms, archiving signed contracts, or sharing annotated documents where you do not want the recipient to modify anything. The visual appearance stays identical, but form fields become plain text and annotations become part of the page.',
    faqs: [
      { q: 'What does "flatten" mean?', a: 'It means merging all interactive layers (form fields, annotations, comments) into a single static layer that cannot be edited.' },
      { q: 'Can I un-flatten a PDF?', a: 'No. Flattening is irreversible. Keep a copy of the original if you need the editable version.' },
      { q: 'Will the appearance change?', a: 'No. The document looks exactly the same — only the interactivity is removed.' },
    ],
  },
  'sign-pdf': {
    heading: 'How to Sign a PDF Online',
    intro: 'Add your signature to any PDF without printing, signing by hand, and re-scanning. Draw your signature with a mouse or touchscreen, or type your name and choose a handwriting-style font. Place it anywhere on the page, resize it, and download the signed document.',
    steps: [
      'Upload the PDF you need to sign.',
      'Create your signature: draw it freehand or type your name.',
      'Click on the page where you want to place your signature.',
      'Resize and position it, then download the signed PDF.',
    ],
    details: 'This tool is designed for personal or informal signatures — like signing a lease agreement, an offer letter, or an internal approval form. For legally binding digital signatures with certificate verification, a dedicated e-signature service (like DocuSign) is recommended.',
    faqs: [
      { q: 'Is this a legally valid signature?', a: 'In many cases, yes. Electronic signatures are legally recognized under the ESIGN Act and eIDAS regulation. However, some documents require certified digital signatures.' },
      { q: 'Can I save my signature for later?', a: 'Your signature is created fresh each session. For privacy, nothing is stored after you close the page.' },
      { q: 'Can I add multiple signatures?', a: 'Yes. You can place multiple signatures on different pages of the same document.' },
    ],
  },
  'extract-pdf-pages': {
    heading: 'How to Extract Pages From a PDF',
    intro: 'Pull out specific pages from a large PDF document and save them as a new, separate file. Unlike splitting (which divides the entire document), extraction lets you cherry-pick exactly which pages you want. Enter page numbers or ranges and download only what you need.',
    steps: [
      'Upload your PDF file.',
      'Enter the page numbers or ranges you want to extract (e.g., "1, 3, 5-8").',
      'Click "Extract" to create a new PDF with only the selected pages.',
      'Download your extracted pages.',
    ],
    details: 'Page extraction is ideal when you need a specific section of a large document. For example, extracting pages 15–20 from a 100-page manual, pulling out a single chapter from a textbook, or isolating a specific form from a government document bundle.',
    faqs: [
      { q: 'What is the difference between extract and split?', a: 'Extract lets you pick specific non-contiguous pages (e.g., pages 1, 5, and 12). Split divides the document into sequential chunks.' },
      { q: 'Can I extract pages into separate files?', a: 'This tool creates one file with all selected pages. To get individual files per page, use Split PDF with "1 page per file" setting.' },
      { q: 'Does extraction alter the remaining PDF?', a: 'No. The original PDF is not modified. A new file is created with only the extracted pages.' },
    ],
  },
};
