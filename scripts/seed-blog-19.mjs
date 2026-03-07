// Seed script – Extract Pages article for Tiny PDF Tools
// Usage: node scripts/seed-blog-19.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  {
    slug: 'how-to-extract-pages-from-pdf-online-free',
    title: 'How to Extract Pages from a PDF Online for Free (No Upload) \u2014 2026 Guide',
    excerpt:
      'Select specific pages from any PDF and extract them into a new file. Visual thumbnails, click-to-select, 100% browser-based. No uploads, no sign-up.',
    date: '2026-03-07',
    display_date: 'March 7, 2026',
    read_time: '7 min read',
    category: 'PDF',
    related_tool_link: '/extract-pdf-pages',
    related_tool_name: 'Extract Pages',
    image: '/images/blog/extract-pages-hero.png',
    content: `## Why Extract Pages from a PDF?

Not every page in a PDF is relevant to every recipient. You might have a 50-page report but only need pages 12\u201318. Or a contract where only the signature page needs to go to a colleague. Or a textbook chapter you want to study without the rest of the book.

Extracting pages lets you pull out exactly what you need \u2014 no more, no less. The result is a clean, lightweight PDF containing only the pages you selected.

The problem? Most online extractors **upload your file to a remote server**. That means your contracts, financial documents, or personal files pass through infrastructure you cannot control.

Our [Extract Pages](/extract-pdf-pages) tool takes a different approach: **everything happens in your browser**. Your file never leaves your device.

## How to Extract Pages (Step-by-Step)

### Step 1: Open the Tool

Navigate to [Extract Pages](/extract-pdf-pages). You will see a drop zone where you can upload your PDF.

### Step 2: Upload Your PDF

**Drag and drop** your PDF file onto the upload area, or click **Select Files** to browse your device. The file loads directly into your browser\u2019s memory \u2014 no network upload occurs.

### Step 3: Select the Pages You Want

Once your PDF loads, you will see **thumbnail previews** of every page. Click on the pages you want to extract. Selected pages are highlighted with a visual indicator.

**Tips for page selection:**
- Click individual pages to select or deselect them
- Selected pages are visually highlighted
- You can select non-consecutive pages (e.g., pages 1, 5, and 12)
- The page count updates in real time

### Step 4: Extract and Download

Click the **Extract** button. A new PDF is instantly generated containing only your selected pages. The download starts automatically.

**That\u2019s it.** Four steps, no account, no upload, no waiting.

## Common Use Cases

| Scenario | Pages to Extract | Why |
|----------|-----------------|-----|
| Sharing a specific chapter | Pages 25\u201340 | Send only the relevant section |
| Submitting a signed page | Page 15 (signature page) | Isolate the signed agreement |
| Removing cover/back pages | Pages 2\u201349 of 50 | Clean up a scanned document |
| Creating a study guide | Pages 5, 12, 28, 43 | Compile key sections from a textbook |
| Extracting an invoice | Page 3 | Pull one invoice from a batch |
| Portfolio selection | Pages 1, 7, 14, 22 | Pick your best work samples |

## Extract Pages vs. Split PDF vs. Delete Pages

Three of our tools deal with separating pages from a PDF. Here is when to use each:

| Tool | Best For | How It Works |
|------|----------|-------------|
| [Extract Pages](/extract-pdf-pages) | **Picking specific pages into a new file** | Select pages visually, download a new PDF |
| [Split PDF](/split-pdf) | **Dividing a PDF by page range** | Enter a range (e.g., 1\u20135), split into sections |
| [Delete Pages](/delete-pdf-pages) | **Removing unwanted pages** | Select pages to remove, keep the rest |

**Rule of thumb:**
- Want **only certain pages**? Use **Extract Pages**
- Want to **divide into ranges**? Use **Split PDF**
- Want to **remove a few bad pages**? Use **Delete Pages**

## How It Compares to Other Tools

| Feature | Tiny PDF Tools (Free) | Adobe Acrobat Online | Smallpdf | PDF24 |
|---------|----------------------|---------------------|----------|-------|
| File uploads | **None \u2014 client-side** | Uploaded to Adobe servers | Uploaded to Smallpdf servers | Uploaded to PDF24 servers |
| Account required | **No** | Yes (free Adobe ID) | No (limited free) | No |
| Visual page thumbnails | **\u2705 Yes** | \u2705 Yes | \u2705 Yes | \u2705 Yes |
| Non-consecutive selection | **\u2705 Yes** | \u2705 Yes | \u2705 Yes | \u2705 Yes |
| Daily usage limits | **None** | Limited free | 2 tasks/day free | Limited |
| Privacy verification | **F12 \u2192 Network tab** | Trust Adobe | Trust Smallpdf | Trust PDF24 |
| Cost | **$0** | Free tier + paid | $12/mo for unlimited | Free |

The critical difference is **where your file goes**. With our tool, you can press F12, open the Network tab, and verify that zero file transfers occur. With server-based tools, you have to trust the provider.

## After Extracting: Next Steps

Once you have your extracted pages, here are common follow-up actions:

| Next Step | Tool | Why |
|-----------|------|-----|
| Combine with other documents | [Merge PDF \u2192](/merge-pdf) | Build a new document from extracted sections |
| Add page numbers | [Add Page Numbers \u2192](/add-page-numbers) | Re-number extracted pages starting from 1 |
| Compress for email | [Compress PDF \u2192](/compress-pdf) | Reduce file size before sending |
| Add your signature | [Sign PDF \u2192](/sign-pdf) | Sign the extracted page directly |
| Read before extracting | [PDF Reader \u2192](/pdf-reader) | Preview the document to identify which pages you need |

> **Pro tip:** Use the [PDF Reader](/pdf-reader) first to review your document, note the page numbers you need, then switch to [Extract Pages](/extract-pdf-pages) to pull them out.

> **Read more:** [15 Best Free PDF Tools Online (No Upload, No Sign-Up)](/blog/best-free-pdf-tools-online)

## Frequently Asked Questions

### Can I extract non-consecutive pages?

Yes. Click on any combination of pages \u2014 they do not need to be in order. For example, you can select pages 1, 5, and 23 to extract just those three pages into a new PDF.

### Is the original PDF modified?

No. The original file is never changed. Extract Pages creates a brand-new PDF containing copies of your selected pages. Your source document remains untouched.

### Is there a page limit?

There is no hard limit. Since all processing happens in your browser, very large PDFs (hundreds of pages) may take slightly longer to generate thumbnails, but the extraction itself is fast.

### Do my files get uploaded?

No. Everything happens 100% in your browser using JavaScript and the pdf-lib library. Your files never leave your device. Verify this by checking the Network tab in Developer Tools (F12).

### What\u2019s the difference between Extract Pages and Split PDF?

[Extract Pages](/extract-pdf-pages) lets you pick individual, non-consecutive pages visually. [Split PDF](/split-pdf) divides a document by page range (e.g., pages 1\u20135 become one file, pages 6\u201310 become another). Use Extract when you want specific pages; use Split when you want to divide into sections.

## Start Extracting

Select the pages you need and download a clean, new PDF \u2014 instantly, privately, for free.

[Open Extract Pages \u2192](/extract-pdf-pages)`,
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
