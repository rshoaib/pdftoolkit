// Seed script – Rotate PDF blog post for Tiny PDF Tools
// Usage: node scripts/seed-blog-7.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  {
    slug: 'how-to-rotate-pdf-online-free',
    title: 'How to Rotate a PDF Online for Free (No Upload Required) — 2026 Guide',
    excerpt:
      'Fix sideways or upside-down PDF pages in seconds — completely free, no sign-up, and your files never leave your browser.',
    date: '2026-03-06',
    display_date: 'March 6, 2026',
    read_time: '9 min read',
    category: 'PDF',
    related_tool_link: '/rotate-pdf',
    related_tool_name: 'Rotate PDF',
    image: '/images/blog/rotate-pdf-hero.png',
    content: `## Why You Need to Rotate a PDF

Scanned documents land sideways. Phone-scanned receipts arrive upside down. A colleague emails a landscape-orientation report embedded in a portrait PDF. These are everyday annoyances, and they happen far more often than they should.

Here are the most common scenarios where rotating a PDF is the fastest fix:

- **Scanned documents** \u2014 Flatbed and phone scanners frequently produce pages rotated 90\u00b0 or 180\u00b0
- **Combined files** \u2014 Merged PDFs from different sources sometimes mix portrait and landscape pages
- **Mobile captures** \u2014 Photos converted to PDF on phones often have wrong orientation metadata
- **Presentations** \u2014 Slide decks exported to PDF may need landscape-to-portrait conversion
- **Forms and contracts** \u2014 Government and legal forms occasionally arrive rotated
- **Ebook formatting** \u2014 Digital books with mixed page layouts require consistent orientation

The problem is simple. The fix should be too.

## The Problem With Most PDF Rotators

Most online tools claim to rotate PDFs "for free" but come with significant catches:

| Service | The Catch |
|---------|-----------|
| Adobe Acrobat Online | Requires Adobe account sign-in |
| Smallpdf | 2 free tasks/day, then $12/month |
| iLovePDF | Files uploaded to remote servers |
| PDF2Go | Upload required, cluttered with ads |
| Sejda | 3 tasks/day, 200-page limit |
| PDF Candy | Server-side processing, speed limits |

Every one of these services uploads your PDF to a remote server. For personal documents, contracts, or tax forms, that is a privacy risk you should not have to accept.

## Our Approach: 100% Client-Side Rotation

Our [Rotate PDF](/rotate-pdf) tool works differently. **Everything happens in your browser.** Your files never leave your device \u2014 not even temporarily.

### How It Works Under the Hood

1. You select a PDF from your device
2. JavaScript loads the file using **pdf-lib**, a client-side PDF manipulation library
3. Each selected page is rotated by the angle you choose (90\u00b0, 180\u00b0, or 270\u00b0)
4. A new PDF is generated entirely in memory
5. The modified file downloads directly to your device

The server delivers only the JavaScript code. It never sees, receives, or processes your actual document.

## Step-by-Step Guide: Rotating PDF Pages

### 1. Open the Tool

Navigate to [Rotate PDF](/rotate-pdf) \u2014 no account, no sign-up, no software to install.

### 2. Select Your PDF

Drag and drop your file onto the upload area, or click **"Select Files"** to browse. The file loads entirely in your browser.

### 3. Choose the Rotation

| Option | Result |
|--------|--------|
| **Rotate 90\u00b0 clockwise** | Turns each page a quarter-turn right |
| **Rotate 90\u00b0 counter-clockwise** | Turns each page a quarter-turn left |
| **Rotate 180\u00b0** | Flips each page upside-down (useful for fully inverted scans) |

You can rotate all pages at once or select specific pages to rotate individually.

### 4. Preview the Result

See a live preview of your rotated pages before downloading. This lets you catch any pages that still need adjustment.

### 5. Download Your Rotated PDF

Click **"Download"** and your corrected PDF saves directly to your device. The original file is never modified.

## Common Rotation Scenarios (With Solutions)

### Scanned Document Is Sideways

**Problem:** Your scanner produced a PDF where every page is rotated 90\u00b0 clockwise.
**Solution:** Open [Rotate PDF](/rotate-pdf), select all pages, rotate 90\u00b0 counter-clockwise, download.

### Mixed Orientation After Merging

**Problem:** You used [Merge PDF](/merge-pdf) to combine a portrait report with a landscape spreadsheet. Some pages are now sideways.
**Solution:** Open the merged file in [Rotate PDF](/rotate-pdf), select only the sideways pages, rotate 90\u00b0, and download.

### Upside-Down Phone Scan

**Problem:** A receipt scanned with your phone's camera is completely inverted.
**Solution:** Rotate 180\u00b0 to flip the page right-side up.

### Landscape Presentation Needs Portrait

**Problem:** A client needs your slide deck as a portrait document.
**Solution:** Rotate 90\u00b0, then use [Crop PDF](/crop-pdf) to trim the resulting margins.

## Rotation vs. Other PDF Fixes

Not every orientation problem needs rotation. Here is when to use our other tools instead:

| Problem | Best Tool | Why |
|---------|-----------|-----|
| Pages are sideways | [Rotate PDF](/rotate-pdf) | Changes page orientation |
| Pages in wrong order | [Split PDF](/split-pdf) + [Merge PDF](/merge-pdf) | Reorder by splitting and re-merging |
| Margins are too wide | [Crop PDF](/crop-pdf) | Trims edges without rotation |
| Need only certain pages | [Split PDF](/split-pdf) | Extracts specific page ranges |
| File is too large | [Compress PDF](/compress-pdf) | Reduces size without changing layout |
| Need images, not PDF | [PDF to Image](/pdf-to-image) | Exports pages as PNG or JPG |

## Build a Complete PDF Workflow

Rotation is often just one step in a larger document workflow. Here is a practical sequence:

1. [Unlock PDF](/unlock-pdf) \u2014 Remove password protection if needed
2. [Rotate PDF](/rotate-pdf) \u2014 Fix page orientation
3. [Crop PDF](/crop-pdf) \u2014 Trim unnecessary margins
4. [Add Page Numbers](/add-page-numbers) \u2014 Number the pages
5. [Watermark PDF](/watermark-pdf) \u2014 Add "Confidential" or your brand
6. [Compress PDF](/compress-pdf) \u2014 Reduce file size for sharing
7. [Merge PDF](/merge-pdf) \u2014 Combine with other documents

Every tool runs 100% in your browser. No uploads at any step.

## Understanding PDF Page Rotation

PDF files store page rotation as metadata, not by physically rearranging pixels. This is important to understand:

- **Rotation is lossless** \u2014 No image quality is lost, ever
- **Text remains searchable** \u2014 Rotated PDFs keep their text layer intact
- **File size stays the same** \u2014 Rotation changes a single number in the page dictionary
- **Hyperlinks still work** \u2014 Embedded links and bookmarks are preserved
- **Forms remain fillable** \u2014 Interactive form fields rotate with the page

This is fundamentally different from rotating an image, where re-encoding can reduce quality. PDF rotation is always lossless.

## The Privacy Advantage

Unlike every major competitor, our tool processes files **100% client-side**. Here is how to verify:

1. Open Developer Tools (F12 \u2192 Network tab)
2. Select your PDF and rotate it
3. Check the network log: **zero file uploads**

This matters for:
- **Legal documents** under attorney-client privilege
- **Tax forms** with personal financial information
- **Medical records** protected by HIPAA
- **Business contracts** with confidential terms
- **HR documents** with employee personal data

Your files stay on your device \u2014 even from us.

## Frequently Asked Questions

### Can I rotate a password-protected PDF?
Yes, but you will need to unlock it first. Use our [Unlock PDF](/unlock-pdf) tool to remove the password, then rotate. If you do not know the password, the file cannot be processed by any tool.

### Is there a page or file size limit?
No hard limits. Since everything runs in your browser, performance depends on your device. Modern laptops handle 200+ page PDFs without issues.

### Will rotation affect the text or image quality?
No. PDF rotation modifies page metadata only. The content \u2014 text, images, vector graphics \u2014 remains bit-for-bit identical.

### Can I rotate just one page in a multi-page document?
Yes. Select specific pages to rotate while leaving the rest unchanged. This is especially useful for merged documents with mixed orientations.

### Does the file size change after rotation?
Negligibly. Rotation changes a single rotation flag in the page dictionary. The difference is typically a few bytes.

## Try It Now

Fix sideways and upside-down PDF pages in seconds \u2014 free, private, and no sign-up required.

[Open Rotate PDF Tool \u2192](/rotate-pdf)`,
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
