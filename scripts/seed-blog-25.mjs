import fs from 'fs';

// Helper to determine the token from the .env file
const envContent = fs.readFileSync('.env', 'utf-8');
const urlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/);
// We need the service role key to insert.
const seedBlogContent = fs.readFileSync('scripts/seed-blog.mjs', 'utf-8');
const keyMatch = seedBlogContent.match(/const SERVICE_ROLE_KEY =[\s\n]*'([^']+)'/);

const SUPABASE_URL = urlMatch ? urlMatch[1].trim().replace(/['"']/g, '') : 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY = keyMatch ? keyMatch[1] : '';

if (!SERVICE_ROLE_KEY) {
  console.error('Could not find SERVICE_ROLE_KEY in scripts/seed-blog.mjs');
  process.exit(1);
}

const articleContent = `
Your PDF is 47MB. Gmail caps attachments at 25MB. Outlook? 20MB. You need to send it right now.

Sound familiar? This is one of the most common frustrations for anyone who works with PDFs — students submitting assignments, freelancers sharing contracts, or office workers distributing reports.

The good news: you do **not** need to pay for Adobe Acrobat or upload your sensitive document to a random website. In this guide, you will learn exactly how to shrink any PDF under the email limit using free, **client-side tools that never touch your files**.

## Email Attachment Size Limits (2026)

Before you start compressing, know exactly what you are working with:

| Email Provider | Max Attachment | Safe Target Size |
|----------------|---------------|-----------------|
| Gmail | 25 MB | 18 MB |
| Outlook / Microsoft 365 | 20 MB | 15 MB |
| Yahoo Mail | 25 MB | 18 MB |
| iCloud Mail | 20 MB | 15 MB |
| ProtonMail | 25 MB | 18 MB |

### Why "Safe Target" Is Lower Than the Limit

Email uses **Base64 encoding** to transmit attachments. This encoding adds roughly **33% overhead** to the raw file size. A 19MB PDF becomes approximately 25.3MB after encoding — and gets silently rejected.

**Rule of thumb:** aim for a PDF that is **75% of the stated limit** to guarantee delivery.

## Method 1: Compress the PDF (Best for Most Cases)

If your PDF is between 20MB and 100MB, compression alone will usually solve the problem. Our [Compress PDF](/compress-pdf) tool can reduce file size by **50–90%** while keeping text perfectly sharp.

### Step-by-Step Instructions

1. Open the [Compress PDF](/compress-pdf) tool — no signup required
2. Drag and drop your PDF onto the upload area
3. Select a compression level:
   - **Low** (90% quality) — best for print-quality documents
   - **Medium** (60% quality) — ideal for email attachments
   - **High** (35% quality) — maximum size reduction for archival
4. Click **"Compress"** and wait a few seconds
5. Download your compressed PDF

### Before and After: Real-World Results

| Original Size | Medium Compression | High Compression |
|--------------|-------------------|-----------------|
| 47 MB scanned contract | 12 MB (74% smaller) | 6 MB (87% smaller) |
| 25 MB photo report | 8 MB (68% smaller) | 4 MB (84% smaller) |
| 15 MB presentation | 5 MB (67% smaller) | 3 MB (80% smaller) |

> **Privacy note:** Your file never leaves your browser. The compression runs entirely on your device using JavaScript — zero server uploads.

## Method 2: Split the PDF (When Compression Is Not Enough)

Sometimes a single PDF is simply too large, or you only need to send specific sections. In these cases, splitting is your best option.

### When to Split Instead of Compress

- The PDF contains **hundreds of pages** (e.g., a full manual or legal filing)
- You only need to send **specific chapters or sections**
- The recipient's inbox has a **strict 10MB limit**
- The PDF contains **high-resolution images that cannot be compressed further**

### How to Split a PDF

1. Open the [Split PDF](/split-pdf) tool
2. Upload your large PDF
3. Select the page ranges you want to extract (e.g., pages 1–20 for Part 1, pages 21–40 for Part 2)
4. Click **"Split"** to generate separate, smaller files
5. Attach each part to a separate email

> **Pro tip:** Mention in the email subject line that you are sending the document in parts (e.g., "Contract — Part 1 of 3") so the recipient knows what to expect.

## Method 3: Remove Unnecessary Pages First

Before compressing or splitting, check whether you actually need every page in the PDF. Often, large PDFs contain blank pages, cover sheets, or appendices that the recipient does not need.

1. Open the [Delete Pages](/delete-pdf-pages) tool
2. Upload your PDF
3. Click on the pages you want to remove (blank pages, irrelevant appendices)
4. Download the trimmed PDF
5. **Then** compress the result for maximum reduction

This two-step approach — delete first, compress second — often produces dramatically smaller files than compression alone.

## Method 4: The Nuclear Option (Compress + Split)

For extremely large PDFs (100MB+), combine both methods:

1. **Compress first** using [Compress PDF](/compress-pdf) with High settings
2. **Split the result** using [Split PDF](/split-pdf) into email-sized chunks
3. **Send each chunk** in a separate email with numbered subject lines

This workflow handles even the most massive documents while keeping everything within email limits.

## What About Cloud Storage Links?

Services like Google Drive and Dropbox let you share a link instead of an attachment. This works, but it has drawbacks:

| Approach | Pros | Cons |
|----------|------|------|
| **Direct attachment** | Recipient has the file permanently, works offline | Size limits apply |
| **Cloud link** | No size limit | Recipient needs internet, link can expire, privacy concerns |
| **Compress + attach** | Best of both worlds — permanent file, within limits | Requires compression step |

For **sensitive or legally binding documents**, a direct attachment is always preferable. You maintain control over the file, and there is no risk of a shared link being accessed by unauthorized parties.

## Protecting Your Compressed PDF

If you are sending sensitive documents over email, always encrypt them before attaching:

1. Compress the PDF using [Compress PDF](/compress-pdf)
2. Password-protect it using [Protect PDF](/protect-pdf) with AES-256 encryption
3. Attach the protected PDF to your email
4. **Send the password through a different channel** (text message, phone call, or secure chat)

This ensures that even if the email is intercepted, the document remains unreadable without the password.

## Common Mistakes to Avoid

### 1. Compressing an Already-Encrypted PDF
Always compress **before** encrypting. Encrypted data cannot be effectively compressed because the encryption algorithm destroys the patterns that compression relies on.

### 2. Sending One Giant Split File
If you split a PDF but each part is still over the limit, compress the parts first. Split → Compress, or Compress → Split — either order works.

### 3. Using a Random Online Tool
Most "free" compression websites upload your file to their servers. For contracts, medical records, tax returns, or any sensitive document, this is a privacy risk. Use tools that process everything [client-side in your browser](/).

### 4. Forgetting About the 33% Encoding Overhead
A 24MB file will fail on a 25MB email limit because of Base64 encoding. Always aim for **75% of the stated limit**.

## Frequently Asked Questions (FAQ)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the maximum PDF size I can email?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Gmail and Yahoo allow up to 25MB, while Outlook and iCloud cap at 20MB. Due to Base64 encoding overhead, aim for 18MB (Gmail/Yahoo) or 15MB (Outlook/iCloud) to ensure delivery."
    }
  }, {
    "@type": "Question",
    "name": "Does compressing a PDF reduce its quality?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Text in PDFs remains perfectly sharp after compression. Only embedded images are affected, and at Medium compression (60% quality), the difference is virtually invisible on screen. For print-critical documents, use Low compression (90% quality)."
    }
  }, {
    "@type": "Question",
    "name": "Can I compress a password-protected PDF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It is best to compress the PDF first, then add password protection. Encrypted data cannot be effectively compressed because the encryption algorithm eliminates the patterns that compression algorithms rely on."
    }
  }, {
    "@type": "Question",
    "name": "Is it safe to compress sensitive PDFs online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Only if the tool processes files client-side (in your browser). Tiny PDF Tools compresses PDFs entirely on your device — your file never leaves your computer. Cloud-based tools upload your document to their servers, which is a privacy risk for sensitive files."
    }
  }, {
    "@type": "Question",
    "name": "How do I send a PDF that is over 100MB?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Use the compress-then-split method: first compress the PDF with High settings to reduce size by up to 90%, then split it into email-sized chunks. Send each chunk as a separate email with numbered subject lines."
    }
  }]
}
</script>

### What is the maximum PDF size I can email?
Gmail and Yahoo allow up to 25MB, while Outlook and iCloud cap at 20MB. Due to Base64 encoding overhead, aim for **18MB** (Gmail/Yahoo) or **15MB** (Outlook/iCloud) to ensure delivery.

### Does compressing a PDF reduce its quality?
Text remains perfectly sharp. Only embedded images are affected, and at Medium compression (60% quality), the difference is virtually invisible on screen. For print-critical documents, use Low compression.

### Can I compress a password-protected PDF?
Compress **before** encrypting. Encrypted data cannot be effectively compressed because the encryption algorithm eliminates the compression patterns.

### Is it safe to compress sensitive PDFs online?
Only if the tool processes files **client-side** (in your browser). Tiny PDF Tools compresses PDFs entirely on your device — your file never leaves your computer.

### How do I send a PDF that is over 100MB?
Compress first with High settings to reduce size by up to 90%, then split into email-sized chunks. Send each chunk in a separate email.

## Start Shrinking Your PDFs Now

Stop wrestling with email rejection notices. Compress your PDF in seconds — no uploads, no signups, no limits.

**[Open Compress PDF Tool →](/compress-pdf)**
`;

const posts = [{
  slug: "email-large-pdf-compress-under-25mb",
  title: "How to Email a Large PDF (Compress It Under 25MB for Free) — 2026 Guide",
  excerpt: "Your PDF is too big for email. Learn how to compress, split, and send PDFs under Gmail and Outlook limits — 100% free, no uploads, no signups.",
  content: articleContent,
  date: new Date().toISOString(),
  display_date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()),
  read_time: "8 min read",
  category: "Productivity",
  related_tool_link: "/compress-pdf",
  related_tool_name: "Compress PDF",
  image: "/images/blog/email-large-pdf.png"
}];

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
