// Seed script – Crop PDF blog post for Tiny PDF Tools
// Usage: node scripts/seed-blog-5.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  {
    slug: 'how-to-crop-pdf-online-free',
    title: 'How to Crop a PDF Online for Free in 2026 (No Uploads Required)',
    excerpt:
      'Trim margins, cut whitespace, or resize PDF pages visually — all in your browser. No uploads, no software, no subscriptions. Here\'s the complete guide.',
    date: '2026-03-05',
    display_date: 'March 5, 2026',
    read_time: '7 min read',
    category: 'PDF',
    related_tool_link: '/crop-pdf',
    related_tool_name: 'Crop PDF',
    image: '/images/blog/crop-pdf-hero.png',
    content: `## Why You'd Want to Crop a PDF

PDF pages often come with more whitespace than you need. Scanned documents have thick scanner margins. Downloaded reports include headers and footers you don't want. Exported slides have oversized borders that waste space when printed.

Cropping fixes all of this — but most people don't know it's something you can do for free, without installing software.

Here are common scenarios where cropping helps:

- **Removing scanner margins** — Scanned pages always have extra whitespace around the edges
- **Trimming presentation exports** — Slides exported as PDF often have oversized borders
- **Focusing on specific content** — Crop to highlight a chart, table, or image
- **Matching page sizes** — Standardize pages to A4 or Letter dimensions
- **Printing efficiency** — Remove margins so content fills more of the printed page
- **E-reader optimization** — Trim whitespace to make text larger on small screens

## The Problem With Most PDF Croppers

| Service | The Catch |
|---------|-----------|
| Adobe Acrobat Pro | $22.99/month — overkill for trimming margins |
| iLovePDF | Files uploaded to their servers |
| Smallpdf | 2 free tasks/day, then $9/month |
| Sejda | 3 free tasks/day, 200-page limit |
| PDF2Go | Upload required, ads everywhere |

Every major "free" PDF cropper requires you to **upload your file to a remote server**. For sensitive documents — contracts, medical records, financial statements — that's an unnecessary risk.

## The Client-Side Approach

Our [Crop PDF](/crop-pdf) tool takes a fundamentally different approach: **everything runs in your browser**. Your files never leave your device.

### How It Works Technically

1. You select your PDF from your device
2. JavaScript renders a page preview using the **pdfjs-dist** library
3. You drag crop handles to define the visible area
4. The **pdf-lib** library applies a CropBox to each page
5. The cropped PDF downloads directly to your device

The website only delivers the JavaScript code. It never sees, receives, or processes your actual PDF files.

## Step-by-Step: Cropping a PDF

### 1. Open the Tool
Navigate to [Crop PDF](/crop-pdf) — no signup or account required.

### 2. Upload Your PDF
Drag and drop your PDF onto the upload area, or click **"Select Files"** to browse. The file stays completely on your device.

### 3. Choose a Crop Mode

Our tool offers several preset modes to save time:

| Mode | What It Does | Best For |
|------|-------------|----------|
| **Custom** | Drag handles freely | Precise cropping |
| **Trim 10% Margins** | Removes 10% from each edge | Light margin trim |
| **Trim 20% Margins** | Removes 20% from each edge | Heavy margin removal |
| **A4 (595×842 pt)** | Sets crop to A4 dimensions | Standardizing to A4 |
| **Letter (612×792 pt)** | Sets crop to US Letter | Standardizing to Letter |

### 4. Fine-Tune the Crop Area
Drag the corner and edge handles to adjust precisely. You can also type exact values into the **X, Y, Width, and Height** input fields for pixel-perfect control.

The dimension label inside the crop area shows the exact size in PDF points, so you always know what you're getting.

### 5. Apply to All Pages (Optional)
Toggle **"Apply crop to all pages"** if you want consistent cropping across the entire document. Leave it off to crop just the page you're viewing.

### 6. Crop & Download
Click **"Crop & Download"** and your cropped PDF saves instantly. No watermark, no email required, no "premium upgrade" popup.

## Understanding PDF Crop Boxes

PDFs have multiple "box" definitions that control how pages are displayed and printed:

| Box Type | Purpose |
|----------|---------|
| **MediaBox** | Full physical page size (the total canvas) |
| **CropBox** | The visible area when viewing or printing |
| **TrimBox** | The intended final page size after trimming |
| **BleedBox** | Area for printing bleed (extends beyond TrimBox) |

Our tool adjusts the **CropBox**, which controls what you see when you open the PDF. The original content is preserved — cropping is **non-destructive**. You can always re-crop or undo the changes.

## Cropping vs. Resizing vs. Compressing

These three operations sound similar but do very different things:

| Operation | What It Does | File Size Impact | Reversible? |
|-----------|-------------|-----------------|-------------|
| **Crop** | Hides content outside the crop area | No change | ✅ Yes |
| **Resize** | Scales the entire page up or down | May change | Partially |
| **Compress** | Reduces image quality/resolution | Reduces | ❌ No |

**Key insight:** Cropping doesn't reduce file size because the hidden content still exists in the file. If you need to reduce size, use [Compress PDF](/compress-pdf) after cropping.

## Real-World Use Cases

### Cleaning Up Scanned Documents
Your office scanner adds 1-inch margins around every page. Use **Trim 20% Margins** to remove them instantly across all pages.

### Preparing Documents for Printing
Your report was designed for screen reading with wide margins. Crop to a tighter area so the content fills more of the printed page, saving paper and improving readability.

### Extracting Charts & Tables
Need just the sales chart from page 5 of a 40-page report? Crop that page to show only the chart, then use [Split PDF](/split-pdf) to extract it as a standalone document.

### Standardizing Mixed Page Sizes
Merged documents often have pages in different sizes — some A4, some Letter, some custom. Use the **A4** or **Letter** preset to crop all pages to a consistent size.

### Optimizing for E-Readers
E-readers like Kindle display PDFs poorly when pages have wide margins. Trim the margins so text fills more of the small screen.

## Tips for Better Cropping

### 1. Preview Before You Commit
Use the visual preview to verify your crop area looks correct before downloading. The dimension label shows you the exact output size in points.

### 2. Use Presets for Common Tasks
If you're just trimming margins, the **Trim 10%** or **Trim 20%** presets save time compared to dragging handles manually.

### 3. Use Numeric Inputs for Precision
For technical documents where exact dimensions matter, type values directly into the X, Y, W, H fields instead of dragging.

### 4. Combine With Other Tools
Build a complete document workflow:

1. [Crop PDF](/crop-pdf) — Trim margins and whitespace
2. [Organize PDF](/organize-pdf) — Rearrange pages if needed
3. [Add Page Numbers](/add-page-numbers) — Number the cropped pages
4. [Watermark PDF](/watermark-pdf) — Add DRAFT or CONFIDENTIAL stamps
5. [Compress PDF](/compress-pdf) — Reduce file size for sharing
6. [Protect PDF](/protect-pdf) — Add encryption before distributing

## The Privacy Advantage

Unlike every major competitor, our Crop tool processes files **100% client-side**. Want proof?

1. Open Developer Tools (F12 → Network tab)
2. Upload your PDF and crop it
3. Check the network log: **zero file uploads**

This matters especially for:
- **Legal documents** under attorney-client privilege
- **Medical records** protected by HIPAA
- **Financial statements** with sensitive data
- **Trade secrets** and intellectual property

Your files stay on your device — even from us.

## Try It Now

Crop your PDFs visually — instantly, privately, and completely free.

[Open Crop PDF Tool →](/crop-pdf)`,
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
