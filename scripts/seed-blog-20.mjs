// Seed script – PDF Smaller for Email article for Tiny PDF Tools
// Usage: node scripts/seed-blog-20.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  {
    slug: 'how-to-make-pdf-smaller-for-email',
    title: 'How to Make a PDF Smaller for Email (Free, No Upload) \u2014 2026 Guide',
    excerpt:
      'Reduce PDF file size to fit email attachment limits. Works with Gmail, Outlook, Yahoo, and more. 100% browser-based compression, no uploads, no sign-up.',
    date: '2026-03-07',
    display_date: 'March 7, 2026',
    read_time: '7 min read',
    category: 'PDF',
    related_tool_link: '/compress-pdf',
    related_tool_name: 'Compress PDF',
    image: '/images/blog/pdf-smaller-email-hero.png',
    content: `## The Email Attachment Problem

You have finished a report, a proposal, or a signed contract. You attach the PDF to an email, click Send, and\u2026 the email bounces. **File too large.**

Every email provider has an attachment size limit. If your PDF exceeds it, the email simply will not send. And the limits are smaller than most people expect:

| Email Provider | Maximum Attachment Size |
|---------------|------------------------|
| Gmail | 25 MB |
| Outlook / Hotmail | 20 MB |
| Yahoo Mail | 25 MB |
| iCloud Mail | 20 MB |
| AOL Mail | 25 MB |
| ProtonMail | 25 MB |
| Zoho Mail | 20 MB |

Most providers cap attachments at **20\u201325 MB**. A scanned document, a presentation with images, or a multi-page report can easily exceed that limit.

The solution? **Compress the PDF before attaching it.**

## How to Reduce PDF Size for Email (3 Steps)

Our [Compress PDF](/compress-pdf) tool processes everything in your browser. Your file is never uploaded to any server.

### Step 1: Open Compress PDF

Navigate to [Compress PDF](/compress-pdf). You will see a drag-and-drop upload area.

### Step 2: Upload Your PDF

Drag your PDF onto the upload area, or click **Select Files** to browse. The file loads directly into your browser\u2019s memory. No network transfer occurs.

### Step 3: Download the Compressed File

The tool automatically compresses your PDF by **optimizing embedded images** and removing redundant internal data. Most users see a **40\u201370% reduction** in file size.

Click **Download** to save the smaller file, then attach it to your email.

**Before and after example:**

| Metric | Before | After |
|--------|--------|-------|
| File size | 18.4 MB | 4.2 MB |
| Reduction | \u2014 | **77% smaller** |
| Fits Gmail limit? | \u274c No (over 25 MB threshold) | \u2705 Yes |
| Visual quality | Original | Virtually identical |

## Why PDF Files Get So Large

Understanding why PDFs balloon in size helps you prevent the problem in the first place.

| Cause | Typical Impact | Solution |
|-------|---------------|----------|
| High-resolution images | +5\u201315 MB per image | Compress before adding to PDF |
| Scanned documents at 300+ DPI | 2\u20135 MB per page | Scan at 150 DPI for email-quality |
| Embedded fonts | +1\u20133 MB | Use standard fonts (Arial, Times) |
| Multiple layers / annotations | +1\u20132 MB | [Flatten the PDF](/flatten-pdf) to merge layers |
| Duplicate internal objects | +1\u20135 MB | Compression removes these automatically |

The biggest culprit is almost always **images**. A single high-resolution photo embedded in a PDF can add 10+ MB to the file size.

## What If the PDF Is Still Too Large?

If compression alone does not bring your PDF under the email limit, try these strategies:

### Strategy 1: Remove Unnecessary Pages

Use [Delete Pages](/delete-pdf-pages) to remove blank pages, cover pages, or appendices that the recipient does not need. Fewer pages means a smaller file.

### Strategy 2: Split Into Multiple PDFs

Use [Split PDF](/split-pdf) to divide a large document into sections. Send each section as a separate email attachment. For example, split a 60-page report into three 20-page files.

### Strategy 3: Flatten Before Compressing

If your PDF has form fields, annotations, or interactive elements, [Flatten PDF](/flatten-pdf) first. This removes interactive layers and can significantly reduce file size. Then run [Compress PDF](/compress-pdf) on the flattened file.

### Strategy 4: Extract Only What\u2019s Needed

Use [Extract Pages](/extract-pdf-pages) to pull out only the pages the recipient needs. A 5-page extract from a 100-page document will be dramatically smaller.

## The Complete Email-Ready PDF Workflow

For the smallest possible file size, combine multiple tools in sequence:

1. [Delete Pages](/delete-pdf-pages) \u2014 Remove blank or unnecessary pages
2. [Flatten PDF](/flatten-pdf) \u2014 Merge layers and annotations
3. [Compress PDF](/compress-pdf) \u2014 Optimize images and internal structure
4. [Add Page Numbers](/add-page-numbers) \u2014 Re-number if needed after removing pages

**Result:** A clean, compact, numbered PDF that fits within any email provider\u2019s attachment limit.

## How We Compare to Other Compression Tools

| Feature | Tiny PDF Tools (Free) | Adobe Acrobat Online | Smallpdf | ILovePDF |
|---------|----------------------|---------------------|----------|----------|
| File uploads | **None \u2014 browser-side** | Uploaded to Adobe | Uploaded to Smallpdf | Uploaded to iLovePDF |
| Account required | **No** | Yes (Adobe ID) | No (limited) | No (limited) |
| Compression quality | **Automatic, balanced** | Multiple levels | Basic/Strong | 3 levels |
| Daily usage limits | **None** | Limited free | 2 tasks/day | Limited |
| Typical reduction | **40\u201370%** | 30\u201360% | 30\u201370% | 40\u201370% |
| Privacy verification | **F12 \u2192 Network tab** | Trust Adobe | Trust Smallpdf | Trust iLovePDF |
| Cost | **$0** | Free tier + paid | $12/mo | $7/mo |

The key advantage is **privacy**. When you are compressing a contract, a financial statement, or a medical document for email, you do not want it passing through a third-party server. With our tool, the file stays on your device.

> **Read more:** [How to Compress PDF to Under 1MB (Without Quality Loss)](/blog/how-to-compress-pdf-free-online)

## Frequently Asked Questions

### How much smaller will my PDF get?

Most PDFs are reduced by **40\u201370%**. The exact reduction depends on the content. PDFs with many images see the largest reductions. Text-heavy PDFs with few images may see smaller reductions (10\u201330%).

### Will compression affect the visual quality?

The compression is optimized for readability. Text remains perfectly sharp. Images are downsampled to a resolution that looks excellent on screen and in print, but is significantly smaller in file size. For most business documents, the difference is imperceptible.

### Can I compress a password-protected PDF?

You will need to remove the password first using [Unlock PDF](/unlock-pdf), then compress the unlocked file. You can re-protect it with [Protect PDF](/protect-pdf) after compression.

### Do my files get uploaded to any server?

No. Everything happens in your browser using JavaScript and the pdf-lib library. Your files never leave your device. Verify by checking the Network tab in Developer Tools (F12).

### What email providers does this work with?

The compressed PDF works with **every email provider** \u2014 Gmail, Outlook, Yahoo Mail, iCloud, ProtonMail, and any other service. A smaller PDF is a universal solution.

## Make Your PDF Email-Ready

Stop getting bounced emails. Compress any PDF to fit within email attachment limits \u2014 instantly, privately, for free.

[Open Compress PDF \u2192](/compress-pdf)`,
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
