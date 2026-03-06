// Seed script – Image to PDF blog post for Tiny PDF Tools
// Usage: node scripts/seed-blog-13.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  {
    slug: 'how-to-convert-images-to-pdf-online-free',
    title: 'How to Convert Images to PDF Online for Free (No Upload Required) \u2014 2026 Guide',
    excerpt:
      'Combine multiple photos into a single, professional PDF \u2014 with drag-to-reorder, page size options, and zero server uploads. 100% in your browser.',
    date: '2026-03-06',
    display_date: 'March 6, 2026',
    read_time: '8 min read',
    category: 'PDF',
    related_tool_link: '/image-to-pdf',
    related_tool_name: 'Image to PDF',
    image: '/images/blog/image-to-pdf-hero.png',
    content: `## Why Convert Images to PDF?

Converting images to PDF is one of the most common document tasks. Whether you are compiling receipts, creating a photo portfolio, or packaging scanned documents, a PDF gives you a single file that looks identical on every device, every printer, and every operating system.

Here are the most common reasons people convert images to PDF:

- **Professional submissions** \u2014 Job applications, university portfolios, and insurance claims often require "one PDF file"
- **Combine multiple scans** \u2014 Turn 20 scanned pages into one organized document
- **Preserve layout** \u2014 PDFs lock images into a fixed layout that cannot be accidentally resized
- **Easier sharing** \u2014 One PDF attachment instead of a ZIP file with 15 separate images
- **Printing** \u2014 PDFs produce consistent print output across all printers

### Supported Image Formats

Our [Image to PDF](/image-to-pdf) tool accepts the most common image formats:

| Format | Best For |
|--------|----------|
| JPG / JPEG | Photos, scanned documents |
| PNG | Screenshots, graphics with transparency |

## The Problem With Most Online Converters

Most "free" image-to-PDF tools work the same way: you upload your images to their server, they convert them, and you download the result. This model has serious drawbacks.

| Service | The Catch |
|---------|-----------|
| Smallpdf | Files uploaded to servers, limited free tasks |
| Adobe Acrobat | Requires account, server-side processing |
| iLovePDF | Server upload, limited batch size for free users |
| Canva | Account required, server-side rendering |
| PDF24 | Server-side processing |
| CamScanner | Mobile-first, server-based |

The privacy risk is real. If your images contain receipts, medical records, ID scans, or personal photos, uploading them to a third-party server is unnecessary when the conversion can happen entirely in your browser.

## Our Approach: 100% Client-Side Conversion

Our [Image to PDF](/image-to-pdf) tool converts images to PDF **entirely in your browser**. Your files never leave your device.

### How It Works Under the Hood

1. You select one or more images from your device
2. JavaScript loads each image using the browser\u2019s native image APIs
3. The **pdf-lib** library creates a new PDF document
4. Each image is embedded as a page with your chosen page size
5. The finished PDF downloads directly to your device

No upload. No server. No account. No watermarks.

### Key Features

- **Drag-to-reorder** \u2014 Rearrange images in any order before conversion
- **Page size options** \u2014 Choose A4, US Letter, or Fit to Image
- **Batch processing** \u2014 Add as many images as you need
- **Instant download** \u2014 The PDF generates in seconds

## Step-by-Step Guide: Converting Images to PDF

### 1. Open the Tool

Navigate to [Image to PDF](/image-to-pdf) \u2014 no account, no software installation required.

### 2. Add Your Images

Drag and drop your images onto the upload area, or click to browse your files. You can add multiple images.

### 3. Reorder (Optional)

Drag the image thumbnails into your preferred order. The first image becomes the first page.

### 4. Choose Page Size

Select your preferred page size:

| Option | When to Use |
|--------|------------|
| **A4** | Standard international paper size (documents, reports) |
| **US Letter** | Standard North American paper size |
| **Fit to Image** | The page matches the exact dimensions of each image |

### 5. Click "Create PDF"

One click. The tool generates your multi-page PDF instantly.

### 6. Download

Click **"Download PDF"** and your file saves immediately.

## 5 Real-World Scenarios

### Scenario 1: Compiling Expense Receipts

**Problem:** You have 15 photos of restaurant receipts from a business trip. Your finance department wants them in "one PDF file."

**Solution:** Open [Image to PDF](/image-to-pdf), drop all 15 receipt photos, reorder by date, select A4, and create the PDF. One file, ready for reimbursement.

### Scenario 2: Creating a Design Portfolio

**Problem:** A freelance designer needs to send 20 project screenshots to a potential client in a single file.

**Solution:** Add all screenshots, arrange them in project order using drag-and-drop, choose Fit to Image for full-resolution output, and create the PDF.

### Scenario 3: Packaging Scanned Documents

**Problem:** You scanned your passport, utility bill, and bank statement as separate images. The visa application requires one combined PDF.

**Solution:** Add all three scans to [Image to PDF](/image-to-pdf), reorder them logically, and create a single PDF. Then use [Compress PDF](/compress-pdf) to reduce the file size if needed.

### Scenario 4: Archiving Handwritten Notes

**Problem:** A student photographed 30 pages of handwritten lecture notes. They want a single searchable-by-page PDF for their study archive.

**Solution:** Add all 30 photos in page order, select A4 for consistent sizing, and create the PDF. The result is a neatly organized document they can scroll through.

### Scenario 5: Preparing Photos for Printing

**Problem:** A photographer wants to create a proof sheet \u2014 one PDF with all selected photos, each on its own page.

**Solution:** Select the photos, choose US Letter or A4, and create the PDF. Each image gets its own page at the correct paper size.

## Image to PDF vs. Other PDF Tools

Combining images into a PDF is often just the first step. Here is what else you can do with your new PDF:

| Next Step | Best Tool | Why |
|-----------|-----------|-----|
| Add page numbers | [Add Page Numbers](/add-page-numbers) | Label each page for easy reference |
| Reduce file size | [Compress PDF](/compress-pdf) | Shrink large image-heavy PDFs |
| Combine with other PDFs | [Merge PDF](/merge-pdf) | Join your new PDF with existing documents |
| Add a watermark | [Watermark PDF](/watermark-pdf) | Stamp "DRAFT" or your brand on every page |
| Sign the document | [Sign PDF](/sign-pdf) | Add your signature to the finished PDF |
| Protect with password | [Protect PDF](/protect-pdf) | Lock the PDF with AES-256 encryption |

### The Recommended Workflow: Images \u2192 PDF \u2192 Numbers \u2192 Compress

For the most polished result, follow this sequence:

1. [Image to PDF](/image-to-pdf) \u2014 Combine your images into one document
2. [Add Page Numbers](/add-page-numbers) \u2014 Label every page
3. [Compress PDF](/compress-pdf) \u2014 Reduce file size for easy sharing

All three steps happen in your browser. No uploads, no subscriptions.

## The Privacy Advantage

Unlike every major competitor, our tool processes files **100% client-side**. Here is how to verify:

1. Open Developer Tools (F12 \u2192 Network tab)
2. Add images and create a PDF
3. Check the network log: **zero file uploads**

This matters especially for image-to-PDF conversion because the images you convert often contain **sensitive visual content** \u2014 ID scans, medical records, financial documents, or personal photos. With our tool, those images never leave your device.

## Frequently Asked Questions

### What image formats are supported?

Our tool supports **JPG/JPEG** and **PNG** formats \u2014 the two most common image types. These cover virtually all photos, screenshots, and scanned documents.

### Is there a limit on the number of images?

There is no hard limit. You can add as many images as your browser can handle. For very large batches (100+ high-resolution images), processing may take a few extra seconds.

### Does converting to PDF reduce image quality?

No. Images are embedded at their original resolution. The PDF is essentially a container that holds your images without re-compressing them. If you need a smaller file size afterward, use our [Compress PDF](/compress-pdf) tool.

### Can I reorder the images before creating the PDF?

Yes. After uploading, drag the thumbnails into any order you want. The first image becomes the first page of the PDF.

### What page sizes are available?

You can choose **A4** (210 \u00d7 297 mm), **US Letter** (8.5 \u00d7 11 inches), or **Fit to Image** (each page matches the exact dimensions of the image).

## Try It Now

Convert any number of images into a single, professional PDF \u2014 with drag-to-reorder, page size options, and complete privacy. Free, no sign-up, no upload.

[Open Image to PDF Tool \u2192](/image-to-pdf)`,
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
        '\u274C Failed to insert "' + post.slug + '": ' + res.status + ' ' + err
      );
    } else {
      console.log('\u2705 Inserted: ' + post.slug);
    }
  }
}

seed().then(() => console.log('\nDone!'));
