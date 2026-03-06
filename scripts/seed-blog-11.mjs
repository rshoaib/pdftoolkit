// Seed script – Delete PDF Pages blog post for Tiny PDF Tools
// Usage: node scripts/seed-blog-11.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  {
    slug: 'how-to-delete-pages-from-pdf-free',
    title: 'How to Delete Pages From a PDF for Free (No Upload Required) \u2014 2026 Guide',
    excerpt:
      'Remove unwanted pages from any PDF in seconds \u2014 click to select, download the trimmed file. 100% free, no account, files never leave your browser.',
    date: '2026-03-06',
    display_date: 'March 6, 2026',
    read_time: '7 min read',
    category: 'PDF',
    related_tool_link: '/delete-pdf-pages',
    related_tool_name: 'Delete Pages',
    image: '/images/blog/delete-pdf-pages-hero.png',
    content: `## Why Delete Pages From a PDF?

Not every page in a PDF belongs there. A 30-page report with a blank page at the end. A scanned document with the scanner's cover sheet. A contract that includes appendices your recipient does not need to see.

Deleting pages from a PDF is one of the most common document tasks, and you should not need paid software to do it.

Common reasons to remove PDF pages:

- **Removing blank or duplicate pages** \u2014 Clean up scanned documents and exported reports
- **Stripping cover pages** \u2014 Remove title pages or scanner cover sheets
- **Hiding sensitive sections** \u2014 Delete pages with confidential data before sharing
- **Trimming appendices** \u2014 Send the main content without unnecessary attachments
- **Fixing export errors** \u2014 Remove corrupted or misformatted pages from automated exports
- **Meeting file size limits** \u2014 Fewer pages means smaller files for email attachments

## The Problem With Most PDF Page Removers

Most online tools require you to upload your document to a remote server. For a task as simple as removing a page, that is an unnecessary privacy risk.

| Service | The Catch |
|---------|-----------|
| Adobe Acrobat Online | Requires Adobe account sign-in |
| Smallpdf | 2 free tasks/day, then $12/month |
| iLovePDF | Files uploaded to remote servers |
| PDF24 | Server-side processing |
| Sejda | 3 tasks/day, 200-page limit |
| PDF2Go | Upload required, ad-heavy interface |

Every service on this list uploads your file to their servers. For tax documents, contracts, and HR paperwork, that is a privacy risk you should not accept for a simple page removal.

## Our Approach: 100% Client-Side Page Deletion

Our [Delete Pages](/delete-pdf-pages) tool works entirely in your browser. **Your PDF never leaves your device.**

### How It Works Under the Hood

1. You select a PDF from your device
2. JavaScript renders visual thumbnails of every page using **pdfjs-dist**
3. You click pages to mark them for deletion (red highlight and \u2715 overlay)
4. **pdf-lib** creates a new PDF containing only the pages you want to keep
5. The trimmed file downloads directly to your device

No upload. No server. No account. The process is instant and completely private.

## Step-by-Step Guide: Deleting PDF Pages

### 1. Open the Tool

Navigate to [Delete Pages](/delete-pdf-pages) \u2014 no sign-up, no software to install.

### 2. Upload Your PDF

Drag and drop your file onto the upload area, or click to browse. The file loads entirely in your browser and page thumbnails appear in a visual grid.

### 3. Select Pages to Delete

Click on any page thumbnail to mark it for deletion. Selected pages show a **red border** and a **\u2715 overlay** so you can clearly see what will be removed.

| Action | How |
|--------|-----|
| **Select a page** | Click its thumbnail (turns red) |
| **Deselect a page** | Click the red thumbnail again |
| **Select all pages** | Click "Select All" button |
| **Deselect all** | Click "Deselect All" button |

The toolbar shows a live count: **"3 to delete \u00B7 7 remaining"** so you always know the result before committing.

### 4. Delete and Download

Click **"Delete Selected & Download"** and your trimmed PDF saves immediately. The remaining pages are in their original order, at full quality.

> **Note:** You cannot delete all pages. At least one page must remain in the document.

## 5 Real-World Deletion Scenarios

### Scenario 1: Removing a Scanner Cover Sheet

**Problem:** Your office scanner adds a blank cover sheet to every scan. Your 5-page document has 6 pages.

**Solution:** Open [Delete Pages](/delete-pdf-pages), click page 1 (the cover sheet), delete, and download. Takes about 10 seconds.

### Scenario 2: Stripping Appendices Before Sharing

**Problem:** A 25-page proposal includes 10 pages of appendices (pricing, internal notes) that the client should not see yet.

**Solution:** Select pages 16-25, delete them, and share the clean 15-page version. The original file stays untouched for your records.

### Scenario 3: Cleaning Up a Scanned Document

**Problem:** You scanned a 20-page document, but pages 4, 8, and 15 are duplicates or came through blank.

**Solution:** Click the three problem pages in the thumbnail grid, delete, and download. The visual preview makes it easy to spot which pages to remove.

### Scenario 4: Preparing a Document for Merging

**Problem:** You need pages 1-5 from Document A combined with pages 3-8 from Document B, but both files have extra pages.

**Solution:** Use [Delete Pages](/delete-pdf-pages) to trim each file to just the pages you need, then [Merge PDF](/merge-pdf) to combine them into one clean document.

### Scenario 5: Reducing File Size for Email

**Problem:** Your report is 8 MB and your email limit is 5 MB. Compressing alone was not enough.

**Solution:** Delete less-important pages (table of contents, blank pages, appendices), then run the result through [Compress PDF](/compress-pdf) for maximum reduction.

## Delete Pages vs. Other PDF Tools

Different tools for different problems:

| Task | Best Tool | Why |
|------|-----------|-----|
| Remove specific pages | [Delete Pages](/delete-pdf-pages) | Click-to-select visual deletion |
| Extract pages into a new file | [Split PDF](/split-pdf) | Keeps selected pages, discards the rest |
| Rearrange page order | [Organize PDF](/organize-pdf) | Drag-and-drop reordering |
| Combine multiple trimmed files | [Merge PDF](/merge-pdf) | Joins PDFs after cleanup |
| Reduce file size | [Compress PDF](/compress-pdf) | Optimizes without removing pages |
| Fix page orientation | [Rotate PDF](/rotate-pdf) | Corrects sideways pages |
| Sign before sharing | [Sign PDF](/sign-pdf) | Add your signature to any page |
| Lock after editing | [Protect PDF](/protect-pdf) | Password-encrypt the final file |

### Delete Pages vs. Split PDF: Which Should You Use?

This is the most common question. Here is the simple rule:

- **Delete Pages** = "I want to **remove** these pages and keep everything else"
- **Split PDF** = "I want to **keep** only these pages and discard everything else"

If you are removing a few pages from a large document, use Delete Pages. If you are extracting a small section from a large document, use [Split PDF](/split-pdf).

## The Privacy Advantage

Unlike every major competitor, our tool processes files **100% client-side**. Here is how to verify:

1. Open Developer Tools (F12 \u2192 Network tab)
2. Upload a PDF and delete pages
3. Check the network log: **zero file uploads**

Your document never touches a server. There is no upload, no server-side processing, no data retention, and no activity log. The JavaScript code runs entirely in your browser's sandbox.

## Frequently Asked Questions

### Will deleting pages reduce quality?

No. Remaining pages are copied byte-for-byte into a new document. There is zero re-encoding, zero quality loss, and zero compression applied. The output is identical to the original pages.

### Can I undo a deletion after downloading?

Your original file is never modified. If you make a mistake, simply upload the original file and try again. We recommend keeping a backup of important documents before any editing.

### Is there a page or file size limit?

No hard limits. Since everything runs in your browser, performance depends on your device. Modern laptops handle PDFs with 500+ pages without issues.

### Can I delete pages from a password-protected PDF?

You will need to unlock it first. Use our [Unlock PDF](/unlock-pdf) tool to remove the password, then delete the pages you do not need.

### Does this work on mobile?

Yes. The tool works in any modern browser on any device. The thumbnail grid adapts to smaller screens, and touch input works for selecting pages.

## Try It Now

Remove unwanted pages from any PDF in under 30 seconds \u2014 click to select, download the trimmed file. Free, private, and no sign-up required.

[Open Delete Pages Tool \u2192](/delete-pdf-pages)`,
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
