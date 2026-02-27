// Seed script – batch 2 blog posts for Tiny PDF Tools
// Usage: node scripts/seed-blog-2.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  /* ───────────────────── 1. Split PDF ───────────────────── */
  {
    slug: 'how-to-split-pdf-pages-free',
    title: 'How to Split a PDF Into Separate Pages for Free (2026)',
    excerpt:
      'Need to extract a single page or break a PDF into pieces? Learn how to split PDFs instantly in your browser — no uploads, no subscriptions.',
    date: '2026-02-27',
    display_date: 'February 27, 2026',
    read_time: '6 min read',
    category: 'PDF',
    related_tool_link: '/split-pdf',
    related_tool_name: 'Split PDF',
    image:
      'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80',
    content: `## Why You'd Need to Split a PDF

PDFs are designed to keep everything together — which is great until you only need **page 7 of a 200-page manual**, or the **signature page from a contract**, or a **single receipt from a bank statement**.

Common scenarios:

- **Extracting a single page** to share with someone without revealing the rest of the document
- **Breaking a scanned file** into individual documents (e.g., a multi-document scan)
- **Removing unnecessary pages** before emailing a report
- **Separating chapters** from an eBook or textbook PDF
- **Isolating invoices** from a bulk-exported financial PDF

## Why Most Splitting Tools Fall Short

| Service | The Problem |
|---------|-------------|
| Adobe Acrobat | $22.99/month subscription |
| Sejda | 3 free tasks/day, 50-page limit |
| iLovePDF | Files uploaded to servers |
| PDF2Go | Slow, ad-heavy, uploads required |

Most free tools force you to upload your file to a server, impose harsh limits, or push paid subscriptions before you can get your one page.

## How Client-Side PDF Splitting Works

Our [Split PDF](/split-pdf) tool runs **100% in your browser**:

1. You select your PDF file
2. JavaScript reads it into memory using the browser File API
3. The **pdf-lib** library parses the PDF structure
4. You choose which pages to extract (single page, range, or custom selection)
5. A new PDF is generated containing only your selected pages
6. The result downloads directly to your device

**Zero network requests. Zero server processing. Zero privacy risk.**

## Step-by-Step: Splitting a PDF

### 1. Open the Tool
Head to [Split PDF](/split-pdf) — no account needed.

### 2. Upload Your File
Drag and drop your PDF, or click to browse. The tool instantly displays a page count and preview.

### 3. Choose Your Pages
Enter the page numbers or ranges you want to extract. Examples:

| Input | Result |
|-------|--------|
| \`3\` | Extracts page 3 only |
| \`1-5\` | Extracts pages 1 through 5 |
| \`1,3,7\` | Extracts pages 1, 3, and 7 |
| \`2-4,8,10-12\` | Extracts pages 2–4, 8, and 10–12 |

### 4. Click "Split & Download"
Your new PDF is generated in milliseconds and downloads automatically.

## Pro Tips

1. **Preview first** — Check the page thumbnails to make sure you're extracting the right pages
2. **Combine after splitting** — Need to rearrange? Split out pages, then use [Merge PDF](/merge-pdf) to combine them in a new order
3. **Compress after splitting** — Scanned PDFs still large after splitting? Run the result through [Compress PDF](/compress-pdf)
4. **Protect extracted pages** — If the extracted content is sensitive, encrypt it with [Protect PDF](/protect-pdf)

## Real-World Use Cases

### Students & Researchers
Extract the 3 relevant pages from a 500-page textbook instead of lugging around the entire PDF.

### HR & Recruiting
Pull individual application forms from a batch-scanned stack and file them separately.

### Legal Professionals
Extract signature pages, specific exhibits, or targeted sections from lengthy contracts.

### Accountants
Separate individual invoices from a consolidated monthly statement PDF.

## Privacy Guarantee

Open Developer Tools (F12 → Network tab) while splitting your file. You'll see **zero file uploads**. Your documents never leave your device.

## Try It Now

Split any PDF into exactly the pages you need — instantly, privately, for free.

[Open Split PDF Tool](/split-pdf)`,
  },

  /* ───────────────── 2. PDF to Image ────────────────────── */
  {
    slug: 'convert-pdf-to-image-jpg-png',
    title: 'How to Convert PDF to JPG or PNG Images for Free (2026)',
    excerpt:
      "Need a PDF page as an image? Here's how to convert any PDF to high-quality JPG or PNG files — instantly, in your browser.",
    date: '2026-02-27',
    display_date: 'February 27, 2026',
    read_time: '7 min read',
    category: 'Conversion',
    related_tool_link: '/pdf-to-image',
    related_tool_name: 'PDF to Image',
    image:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    content: `## When Do You Need PDF-to-Image Conversion?

PDFs are great for documents, but they don't work everywhere. You often need images when:

- **Social media posts** — Instagram, Twitter, and LinkedIn don't accept PDFs
- **Presentations** — Embedding a PDF page in PowerPoint or Google Slides
- **Websites & blogs** — Displaying a document preview without a PDF viewer
- **Messaging apps** — Sharing a quick preview of a document page via WhatsApp or Slack
- **eCommerce** — Turning product spec sheets into product images
- **Thumbnails** — Generating preview images for a document library

## JPG vs PNG: Which Should You Choose?

| Feature | JPG | PNG |
|---------|-----|-----|
| **Best for** | Photos, scans, full-colour pages | Diagrams, text-heavy pages, screenshots |
| **File size** | Smaller (lossy compression) | Larger (lossless compression) |
| **Transparency** | ❌ No | ✅ Yes |
| **Text clarity** | Good at high quality | Perfect — no compression artefacts |
| **Typical use** | Email attachments, social media | Web graphics, presentations |

**Rule of thumb:** Use **JPG** for scanned/photo-heavy pages and **PNG** for crisp text and diagrams.

## How Our Converter Works

The [PDF to Image](/pdf-to-image) tool uses modern browser APIs:

1. Your PDF is loaded using the **PDF.js** rendering engine (the same engine Firefox uses)
2. Each page is drawn onto an HTML5 Canvas at your chosen resolution
3. The canvas is exported as a JPG or PNG file
4. Files download directly — nothing is uploaded anywhere

### Resolution Options

Higher DPI = sharper images but larger file sizes.

| Setting | DPI | Best For |
|---------|-----|----------|
| Standard | 72 | Quick previews, thumbnails |
| Good | 150 | Screen viewing, social media |
| High | 300 | Printing, professional use |

## Step-by-Step Guide

### 1. Open the Tool
Go to [PDF to Image](/pdf-to-image) — free, no signup.

### 2. Upload Your PDF
Drag and drop or click to browse. Multi-page PDFs are fully supported.

### 3. Choose Format & Quality
Select **JPG** or **PNG** and your preferred resolution.

### 4. Convert
Click "Convert" — each page becomes a separate image file. Multi-page PDFs produce a zip file with all images.

## Common Use Cases

### Create Social Media Posts
Turn your PDF flyer or infographic into an Instagram-ready image.

### Build Document Previews
Convert the first page of each PDF in your library to thumbnail images for a searchable gallery.

### Share Without PDF Viewers
Not everyone has a PDF reader on their phone. Send a JPG via text message and everyone can view it instantly.

### Archive & OCR Prep
Convert PDFs to images for easier archival or as input for OCR (optical character recognition) pipelines.

## Tips for Best Results

1. **For text documents** — Choose PNG at 300 DPI for crystal-clear text
2. **For social media** — JPG at 150 DPI keeps files small while looking great
3. **For printing** — Always use 300 DPI or higher
4. **Batch conversions** — Our tool converts all pages at once, saving you time
5. **Crop afterwards** — Use any basic image editor to crop the converted images if needed

## Why Client-Side Matters

Online PDF-to-image converters upload your files to remote servers. This means:
- Your documents pass through someone else's infrastructure
- You're trusting they delete your files (spoiler: you can't verify this)
- Sensitive documents are at risk

Our tool converts **entirely in your browser**. Your files never leave your device.

## Try It Now

Convert any PDF to high-quality images — instantly, privately, and free.

[Open PDF to Image Tool](/pdf-to-image)`,
  },

  /* ───────────────── 3. Image to PDF ────────────────────── */
  {
    slug: 'convert-images-to-pdf-free',
    title: 'How to Convert Images to PDF for Free (JPG, PNG, WebP → PDF)',
    excerpt:
      'Combine multiple photos or screenshots into a single PDF document. No uploads, no watermarks — convert images to PDF instantly in your browser.',
    date: '2026-02-27',
    display_date: 'February 27, 2026',
    read_time: '6 min read',
    category: 'Conversion',
    related_tool_link: '/image-to-pdf',
    related_tool_name: 'Image to PDF',
    image:
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80',
    content: `## Why Convert Images to PDF?

You'd be surprised how often you need to turn images into a PDF:

- **Scanning with your phone** — Most phone camera "scans" produce JPEG files, not PDFs
- **Submitting documents** — Agencies, banks, and universities often require PDF format
- **Creating photo portfolios** — Compile your best shots into a professional, paginated PDF
- **Archiving screenshots** — Turn scattered screenshot files into an organized document
- **Emailing multiple photos** — Instead of 20 attachments, send one clean PDF

## Supported Image Formats

Our [Image to PDF](/image-to-pdf) tool accepts all major image formats:

| Format | Extension | Notes |
|--------|-----------|-------|
| JPEG | .jpg, .jpeg | Most common photo format |
| PNG | .png | Screenshots, diagrams, transparent backgrounds |
| WebP | .webp | Modern web format, excellent compression |
| BMP | .bmp | Uncompressed bitmap images |
| GIF | .gif | Static frames from GIF files |

## How It Works

The conversion process is simple and **runs entirely in your browser**:

1. You select one or more image files
2. JavaScript reads each image using the browser File API
3. The **pdf-lib** library creates a new PDF document
4. Each image is embedded as a full page (automatically sized to fit)
5. The completed PDF downloads to your device

**No server uploads. No account. No watermark.**

## Step-by-Step Guide

### 1. Open the Tool
Navigate to [Image to PDF](/image-to-pdf) — completely free.

### 2. Add Your Images
Drag and drop your images, or click to browse. You can select multiple files at once.

### 3. Reorder Pages
Rearrange the images in the order you want them to appear in the final PDF. Use drag handles or arrow buttons to reorder.

### 4. Convert
Click "Create PDF" and your document downloads immediately.

## Real-World Scenarios

### Phone Scans → Professional PDFs
Took photos of your passport, utility bill, or ID with your phone? Convert them to a clean PDF for official submissions.

### Student Assignments
Photographed your handwritten math homework? Convert those photos to a single PDF before uploading to your school portal.

### Real Estate & Insurance
Captured photos of property damage for an insurance claim? Package them into a single, organized PDF document.

### Recipe Collections
Save your favourite recipes as screenshots and compile them into a personal cookbook PDF.

## Tips for Better Results

1. **Crop images first** — Remove unnecessary borders or backgrounds before converting
2. **Use consistent orientation** — Rotate images to the correct orientation before adding them
3. **Order matters** — Arrange images in the order you want them in the PDF
4. **Compress if needed** — If the resulting PDF is large, run it through [Compress PDF](/compress-pdf)
5. **Add protection** — For sensitive documents, encrypt the output with [Protect PDF](/protect-pdf)

## Image to PDF vs. Scanning Apps

| Feature | Scanning Apps | Our Tool |
|---------|---------------|----------|
| Cost | Free-$10/month | Free forever |
| Privacy | Files go to cloud | 100% local |
| Internet needed | Usually yes | No |
| Multi-format input | Camera only | JPG, PNG, WebP, BMP, GIF |
| Watermarks | Often on free tier | Never |

## Try It Now

Turn your images into a professional PDF — no uploads, no limits, no strings attached.

[Open Image to PDF Tool](/image-to-pdf)`,
  },

  /* ─────────────────── 4. Rotate PDF ───────────────────── */
  {
    slug: 'how-to-rotate-pdf-pages',
    title: 'How to Rotate PDF Pages in 2026 (Fix Upside-Down Scans Instantly)',
    excerpt:
      'Scanned documents come out sideways? Learn how to rotate individual PDF pages or entire documents — instantly, in your browser, for free.',
    date: '2026-02-27',
    display_date: 'February 27, 2026',
    read_time: '5 min read',
    category: 'PDF',
    related_tool_link: '/rotate-pdf',
    related_tool_name: 'Rotate PDF',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    content: `## The Sideways PDF Problem

We've all been there: you scan a document, open the PDF, and discover that **half the pages are sideways or upside-down**. Or someone sends you a PDF where the landscape pages are rotated incorrectly.

This happens constantly with:

- **Multi-page scans** where the scanner auto-detects orientation incorrectly
- **Mixed orientation documents** (portrait and landscape pages in the same file)
- **Phone camera scans** taken at the wrong angle
- **Government forms** printed in landscape but saved in portrait
- **Architectural plans** and engineering drawings

## The Adobe Tax

Adobe Acrobat can rotate pages, but it costs **$22.99/month**. For something this simple, that's absurd. Free alternatives upload your files to their servers — a privacy risk for sensitive documents.

## Rotate PDFs in Your Browser

Our [Rotate PDF](/rotate-pdf) tool lets you fix page orientation **instantly and privately**:

### How It Works
1. Upload your PDF (it stays on your device)
2. See thumbnail previews of every page
3. Click to rotate individual pages or all pages at once
4. Options: **90° clockwise**, **90° counter-clockwise**, or **180°**
5. Download the corrected PDF

The entire process happens in your browser using the **pdf-lib** library. No uploads, no servers.

## Step-by-Step Guide

### 1. Open the Tool
Go to [Rotate PDF](/rotate-pdf) — no signup, no cost.

### 2. Upload Your PDF
Drag and drop or browse to select your file.

### 3. Rotate Pages
- Click the **rotation buttons** on individual pages to fix them one at a time
- Use **"Rotate All"** to rotate every page at once
- Each click rotates 90° — click multiple times for 180° or 270°

### 4. Download
Click "Save" to download your corrected PDF.

## Common Scenarios

### Fixing Scanner Output
Multi-function printers often produce PDFs with incorrect page orientation, especially for mixed-size originals.

### Correcting Phone Scans
Phone cameras don't always detect orientation correctly, leaving you with PDFs where some pages are rotated 90° or 180°.

### Preparing for Print
Before printing, ensure all pages are oriented correctly to avoid wasting paper and ink.

### Before Merging Documents
Before combining PDFs with [Merge PDF](/merge-pdf), rotate any incorrectly oriented pages so the final document reads correctly.

## Tips

1. **Preview carefully** — Check each page thumbnail before saving
2. **Batch rotate** — If most pages need the same rotation, use "Rotate All" then fix individual exceptions
3. **Combine with other tools** — After rotating, you can [compress](/compress-pdf), [merge](/merge-pdf), or [protect](/protect-pdf) the result
4. **Save the original** — Keep a copy of the original PDF in case you need to re-do the rotation

## Privacy First

Like all Tiny PDF Tools, the Rotate tool processes everything locally. Open DevTools (F12 → Network tab) to verify — zero file uploads.

## Try It Now

Fix rotated PDF pages in seconds — free, private, and instant.

[Open Rotate PDF Tool](/rotate-pdf)`,
  },

  /* ──────────── 5. Best Free PDF Tools Comparison ────────── */
  {
    slug: 'best-free-pdf-tools-online-2026',
    title: 'The 7 Best Free Online PDF Tools in 2026 (No Signup Required)',
    excerpt:
      'A complete comparison of free online PDF tools — merge, split, compress, convert, rotate, and protect. Find out which tools actually respect your privacy.',
    date: '2026-02-27',
    display_date: 'February 27, 2026',
    read_time: '9 min read',
    category: 'Guide',
    related_tool_link: '/',
    related_tool_name: 'All Tools',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    content: `## The State of PDF Tools in 2026

Everyone needs PDF tools. Whether you're a student merging assignment pages, a lawyer splitting contracts, or an accountant compressing financial reports — at some point, you need to manipulate a PDF.

The problem? Most "free" PDF tools are anything but:

- **Hidden limits** (2 free tasks per day, then pay $9/month)
- **File uploads** (your documents go to someone else's server)
- **Watermarks** (the free tier stamps "TRIAL" across your output)
- **Account required** (hand over your email just to rotate a page)

Here's what you actually need — and how to get it for free, with **zero privacy trade-offs**.

## 1. Merge PDF — Combine Multiple PDFs

**What it does:** Takes multiple PDF files and combines them into a single document.

**When you need it:**
- Assembling a job application (resume + cover letter + references)
- Combining scanned pages into one file
- Creating document packages for legal or regulatory submission

**Why Tiny PDF Tools wins:** No file-count limits, no upload, drag-and-drop reordering. Files never leave your browser.

[Try Merge PDF →](/merge-pdf)

---

## 2. Split PDF — Extract Specific Pages

**What it does:** Extracts selected pages from a PDF, creating a new document with only the pages you choose.

**When you need it:**
- Extracting a signature page
- Pulling a single chapter from an eBook
- Separating individual invoices from a batch PDF

**Why Tiny PDF Tools wins:** Custom page ranges (e.g., "1-3, 7, 12-15"), instant processing, no page limits.

[Try Split PDF →](/split-pdf)

---

## 3. Compress PDF — Reduce File Size

**What it does:** Shrinks PDF file size by re-compressing images and optimising the document structure.

**When you need it:**
- Email attachments exceeding 25MB limits
- Uploading documents to portals with file size restrictions
- Saving storage space on scanned documents

**Why Tiny PDF Tools wins:** Three quality presets (low, medium, high compression), real-time preview of size reduction, no quality surprises.

[Try Compress PDF →](/compress-pdf)

---

## 4. PDF to Image — Convert to JPG/PNG

**What it does:** Converts PDF pages into image files (JPG or PNG).

**When you need it:**
- Sharing document pages on social media
- Creating slide decks from PDF content
- Generating thumbnails for a document library

**Why Tiny PDF Tools wins:** Choose format (JPG/PNG) and resolution (72–300 DPI), batch converts all pages, downloads as zip.

[Try PDF to Image →](/pdf-to-image)

---

## 5. Image to PDF — Convert Photos to PDF

**What it does:** Combines one or more images into a PDF document.

**When you need it:**
- Turning phone scans into proper PDFs
- Packaging photos for insurance claims
- Submitting photo IDs or documents in PDF format

**Why Tiny PDF Tools wins:** Supports JPG, PNG, WebP, BMP, GIF. Drag-and-drop reordering. No watermarks.

[Try Image to PDF →](/image-to-pdf)

---

## 6. Rotate PDF — Fix Page Orientation

**What it does:** Rotates individual or all pages in a PDF (90°, 180°, or 270°).

**When you need it:**
- Fixing sideways scanned pages
- Correcting upside-down phone scans
- Preparing mixed-orientation documents for printing

**Why Tiny PDF Tools wins:** Visual thumbnails of every page, rotate individually or all at once, instant preview.

[Try Rotate PDF →](/rotate-pdf)

---

## 7. Protect PDF — Password Encryption

**What it does:** Adds AES-256 password encryption to a PDF, preventing unauthorised access.

**When you need it:**
- Sharing contracts, NDAs, or legal documents
- Emailing tax returns or financial records
- Protecting intellectual property

**Why Tiny PDF Tools wins:** Military-grade AES-256 encryption, client-side processing (password never transmitted), no subscription.

[Try Protect PDF →](/protect-pdf)

---

## How We Compare to Alternatives

| Feature | Tiny PDF Tools | iLovePDF | SmallPDF | Adobe Online |
|---------|---------------|----------|----------|--------------|
| **Price** | Free | Free (limited) | $9/month | $14.99/month |
| **File uploads** | ❌ None | ✅ Yes | ✅ Yes | ✅ Yes |
| **Account required** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Watermarks** | ❌ Never | ❌ No | ✅ On free tier | ❌ No |
| **Daily limits** | ❌ Unlimited | 15MB/file | 2 tasks/day | Limited |
| **Works offline** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Open source** | ✅ Yes | ❌ No | ❌ No | ❌ No |

## The Privacy Difference

Every PDF tool on **Tiny PDF Tools** runs entirely in your browser. Your files are **never uploaded to any server**. You can verify this yourself:

1. Open your browser's Developer Tools (F12)
2. Go to the **Network** tab
3. Use any tool — upload a file, process it, download the result
4. Observe: **zero requests** containing your file data

This isn't just a marketing claim. It's verifiable, transparent privacy that server-based tools fundamentally cannot offer.

## Try All Tools — Free, Forever

No signup. No uploads. No watermarks. No limits.

[Explore All Tools →](/)`,
  },
];

async function seed() {
  for (const post of posts) {
    const res = await fetch(SUPABASE_URL + '/rest/v1/blog_posts', {
      method: 'POST',
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: 'Bearer ' + SERVICE_ROLE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(
        '❌ Failed to insert "' + post.slug + '": ' + res.status + ' ' + err
      );
    } else {
      console.log('✅ Inserted: ' + post.slug);
    }
  }
}

seed().then(() => console.log('\nDone!'));
