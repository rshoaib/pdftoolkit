// Seed script for pdftoolkit blog posts
// Usage: node scripts/seed-blog.mjs

const SUPABASE_URL = 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjEyMDc4NywiZXhwIjoyMDg3Njk2Nzg3fQ.P24xpkU0GpjQw903eAhrohRyR2ve0R9jR0vSZ53-c6c';

const posts = [
  {
    slug: 'how-to-merge-pdf-files-free',
    title: 'How to Merge PDF Files for Free in 2026 (No Uploads Required)',
    excerpt: 'Stop uploading sensitive documents to random websites. Learn how to merge PDFs securely in your browser — no signup, no file uploads, 100% private.',
    date: '2026-02-26',
    display_date: 'February 26, 2026',
    read_time: '7 min read',
    category: 'PDF',
    related_tool_link: '/merge-pdf',
    related_tool_name: 'Merge PDF',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    content: `## The Problem With Most PDF Mergers

Every time you need to combine PDF files, you face the same dilemma: upload your documents to a random website and *hope* they don't keep copies, or pay $150/year for Adobe Acrobat.

Neither option is great — especially if you're working with sensitive documents like contracts, legal filings, tax returns, or medical records.

**The truth is:** your browser is powerful enough to merge PDFs entirely on your device, with zero uploads.

## Why "Free" PDF Tools Aren't Really Free

Most "free online PDF tools" have a catch:

| Service | The Catch |
|---------|-----------|
| iLovePDF | Files uploaded to servers, 15MB limit |
| SmallPDF | 2 free tasks/day, then $9/month |
| Adobe Online | Requires Adobe account, limited free tier |
| PDF24 | Files uploaded to German servers |

Even if a service claims to "delete files after 1 hour," you're still trusting a third party with your data. For HIPAA-covered documents, legal contracts, or financial records, this is a compliance risk.

## The Client-Side Approach

**Client-side processing** means the PDF merging happens entirely in your web browser — on your computer, tablet, or phone. The files never travel to any server.

### How It Works Technically

1. You select files from your device
2. JavaScript reads the files into memory using the File API
3. The **pdf-lib** library (a battle-tested open-source PDF engine) parses each PDF
4. Pages are copied from source documents into a new combined PDF
5. The merged PDF is generated and downloaded directly to your device

The "server" (our website) only delivers the JavaScript code. It never sees, receives, or touches your actual PDF files.

## Step-by-Step: Merging PDFs with Tiny PDF Tools

### 1. Open the Merge Tool
Navigate to [Merge PDF](/merge-pdf) — no signup required.

### 2. Add Your Files
Either **drag and drop** your PDF files onto the upload area, or click **"Select Files"** to browse your device. You can add as many files as you want.

### 3. Reorder (Optional)
Use the **↑ ↓ arrows** to arrange the files in the order you want them merged. Need to remove a file? Click the trash icon.

### 4. Click "Merge PDFs"
Hit the merge button. Processing happens instantly — even large files merge in seconds because everything runs locally on your hardware.

### 5. Download
Your merged PDF downloads automatically. That's it. No email, no watermark, no "premium upgrade" popup.

## Common Use Cases

### Combining Scanned Documents
Scanned a multi-page document as separate files? Merge them into a single PDF for easy sharing.

### Assembling Job Applications
Combine your resume, cover letter, portfolio, and references into one professional PDF.

### Consolidating Reports
Merge monthly reports, invoices, or financial statements into quarterly or annual compilations.

### Legal Document Packages
Combine contracts, exhibits, and supporting documents into a single court-ready filing.

## Tips for Better PDFs

1. **Check page orientation** before merging — rotate individual pages first if needed using our [Rotate PDF](/rotate-pdf) tool
2. **Minimize file size** by compressing PDFs before merging using our [Compress PDF](/compress-pdf) tool
3. **Verify page order** by reviewing the file list in the merge tool before clicking merge
4. **Password-protect** sensitive merged documents using our [Protect PDF](/protect-pdf) tool

## Privacy You Can Verify

Don't just take our word for it. Here's how you can verify that no files are uploaded:

1. Open your browser's **Developer Tools** (F12 → Network tab)
2. Upload and merge your files
3. Observe: **zero network requests** are made with your file data

This is the transparency that server-based tools can't offer.

## Try It Now

Ready to merge your PDFs securely? No signup, no uploads, no limits.

[Open Merge PDF Tool](/merge-pdf)`
  },
  {
    slug: 'pdf-security-best-practices-2026',
    title: 'PDF Security in 2026: How to Protect Sensitive Documents',
    excerpt: 'From password protection to AES-256 encryption — learn how to secure your PDF documents and why most people do it wrong.',
    date: '2026-02-26',
    display_date: 'February 26, 2026',
    read_time: '8 min read',
    category: 'Security',
    related_tool_link: '/protect-pdf',
    related_tool_name: 'Protect PDF',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    content: `## Why PDF Security Matters

PDFs are the world's most trusted document format. Over **2.5 trillion PDFs** exist worldwide — contracts, tax returns, medical records, financial statements, intellectual property.

Yet most people share sensitive PDFs with zero protection:

- No password
- No encryption
- No access controls
- Via email (which is not encrypted by default)

This is the digital equivalent of mailing your Social Security card in a clear envelope.

## Understanding PDF Encryption Levels

Not all PDF "protection" is created equal. There are two levels:

### User Password (Open Password)
This is the password required to **open** the PDF. Without it, the document cannot be viewed at all. The contents are encrypted — not just locked behind a dialog box.

### Owner Password (Permissions Password)
This controls **what users can do** after opening the PDF:
- Print the document
- Copy text or images
- Edit or modify content
- Add annotations

> **Important:** The owner password is weaker protection. Tools exist that can remove permission restrictions. The user password (open password) is the strong protection that actually encrypts the content.

## AES-256: The Gold Standard

PDF encryption has evolved through several generations:

| Version | Algorithm | Key Length | Security Level |
|---------|-----------|------------|---------------|
| PDF 1.3 | RC4 | 40-bit | ❌ Broken in seconds |
| PDF 1.5 | RC4 | 128-bit | ⚠️ Theoretically breakable |
| PDF 1.7 | AES | 128-bit | ✅ Strong |
| PDF 2.0 | AES | 256-bit | ✅ Military-grade |

**AES-256 encryption** is the same standard used by:
- The U.S. Government for TOP SECRET documents
- Banks for financial transactions
- VPNs for internet traffic

With AES-256, brute-forcing the encryption would take **longer than the age of the universe** with current computing technology.

## How to Protect a PDF (The Right Way)

### Step 1: Choose a Strong Password
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, and symbols
- Never reuse passwords across documents
- Use a passphrase like "Correct-Horse-Battery-Staple-42!"

### Step 2: Use Client-Side Encryption
Never upload sensitive documents to online encryption services. Use a tool that encrypts locally:

1. Go to [Protect PDF](/protect-pdf)
2. Drop your PDF file
3. Enter your password (minimum 4 characters; we recommend 12+)
4. Click "Protect & Download"

The encryption happens entirely in your browser. Your file never leaves your device.

### Step 3: Share Securely
- Send the PDF and password through **different channels** (PDF via email, password via text message)
- Use a password manager to share credentials securely
- Set an expiration date for shared access when possible

## Common Mistakes

### 1. Using Weak Passwords
"password123" can be cracked in less than 1 second. Use a password manager to generate and store strong passwords.

### 2. Sending Password with the PDF
If you email a PDF and its password in the same email, you've just handed both keys to anyone who compromises that email account.

### 3. Relying on "Permissions Only"
Setting "no print" or "no copy" without an open password provides zero real security. These restrictions can be removed with free tools in seconds.

### 4. Using Outdated Encryption
If your PDF tool uses RC4 encryption, your document is vulnerable. Always use AES-256.

## When to Encrypt PDFs

| Document Type | Encrypt? | Why |
|---------------|----------|-----|
| Contracts & NDAs | ✅ Yes | Legal confidentiality |
| Tax returns | ✅ Yes | Contains SSN, financial data |
| Medical records | ✅ Yes | HIPAA compliance |
| Resumes | ⚠️ Optional | Contains personal info |
| Marketing materials | ❌ No | Meant to be shared widely |
| Published reports | ❌ No | Already public |

## Try It Now

Protect your sensitive PDFs with AES-256 encryption — instantly, in your browser.

[Open Protect PDF Tool](/protect-pdf)`
  },
  {
    slug: 'compress-pdf-without-losing-quality',
    title: 'How to Compress PDFs Without Losing Quality (2026 Guide)',
    excerpt: "That 50MB PDF won't send via email. Here's how to reduce PDF file size by up to 90% while keeping text sharp and images clear.",
    date: '2026-02-25',
    display_date: 'February 25, 2026',
    read_time: '6 min read',
    category: 'PDF',
    related_tool_link: '/compress-pdf',
    related_tool_name: 'Compress PDF',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    content: `## Why PDFs Get So Large

A simple one-page letter might be 50KB. But scanned documents, image-heavy reports, and presentations can balloon to 50MB or more.

The culprit? **Embedded images.**

When you scan a document, each page becomes a high-resolution image (often 300 DPI or higher). A single scanned page can be 5-10MB. A 20-page scanned contract? **100-200MB.**

### What Makes PDFs Large

| Component | Typical Size | % of File |
|-----------|-------------|-----------|
| Embedded images | 1-10MB each | 80-95% |
| Fonts | 50-500KB | 2-10% |
| Text content | 1-50KB | 1-5% |
| Metadata | 1-10KB | <1% |

The takeaway: **if you want to reduce PDF size, you need to optimize the images.**

## How PDF Compression Works

There are three approaches to reducing PDF file size:

### 1. Image Re-compression
The most effective method. Embedded images are extracted, re-compressed at a lower quality setting, and re-embedded. This can reduce file size by **60-90%** with minimal visible quality loss.

### 2. Image Downscaling
Reducing the resolution (DPI) of embedded images. A 300 DPI image downscaled to 150 DPI is 75% smaller. For screen viewing, 72-100 DPI is perfectly adequate.

### 3. Font Subsetting
Instead of embedding entire font files (which can be 500KB+ each), only embed the specific characters used in the document.

## Quality vs. Size: The Trade-off

Our [Compress PDF](/compress-pdf) tool offers three presets:

### Low Compression (Best Quality)
- Quality: 90%
- Scale: 100% (no downscaling)
- Best for: Documents you'll print at high quality
- Typical reduction: **20-40%**

### Medium Compression (Balanced)
- Quality: 60%
- Scale: 80%
- Best for: Email attachments, general sharing
- Typical reduction: **50-70%**

### High Compression (Smallest Size)
- Quality: 35%
- Scale: 60%
- Best for: Archival, web uploads, maximum space savings
- Typical reduction: **70-90%**

## Tips for Smaller PDFs

### Before Creating the PDF
1. **Resize images first** — Don't paste a 4000×3000 photo into a Word doc. Resize to the actual display size.
2. **Use JPEG for photos, PNG for diagrams** — JPEGs compress photos much better.
3. **Remove unnecessary pages** — Use our [Split PDF](/split-pdf) tool to extract only the pages you need.

### After Creating the PDF
1. **Try Medium compression first** — It's the best balance of quality and size for most uses.
2. **Compare before and after** — Open both files to check that text is still readable.
3. **Compress then protect** — Compress first, then encrypt. Compressing encrypted PDFs is less effective.

## Email Size Limits

Most email providers have attachment limits:

| Provider | Max Attachment |
|----------|---------------|
| Gmail | 25 MB |
| Outlook | 20 MB |
| Yahoo | 25 MB |
| iCloud | 20 MB |

If your PDF exceeds these limits, compression is your best friend.

## The Privacy Advantage

Unlike online compression services that upload your files to their servers, our tool compresses PDFs entirely in your browser. Your documents never leave your device.

This matters especially for:
- Legal documents under client privilege
- Medical records (HIPAA)
- Financial statements
- Trade secrets and IP

## Try It Now

Compress your PDFs instantly — no uploads, no limits, no quality surprises.

[Open Compress PDF Tool](/compress-pdf)`
  }
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
      console.error('❌ Failed to insert "' + post.slug + '": ' + res.status + ' ' + err);
    } else {
      console.log('✅ Inserted: ' + post.slug);
    }
  }
}

seed().then(() => console.log('\nDone!'));
