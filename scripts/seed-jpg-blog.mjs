// Seed script for new blog post: Combine JPG to PDF
import fs from 'fs';

// Helper to determine the token from the .env file
const envContent = fs.readFileSync('.env', 'utf-8');
const urlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/);
// We need the service role key to insert. 
// We will extract it from the existing seed-blog.mjs since .env only has anon key
const seedBlogContent = fs.readFileSync('scripts/seed-blog.mjs', 'utf-8');
const keyMatch = seedBlogContent.match(/const SERVICE_ROLE_KEY =[\s\n]*'([^']+)'/);

const SUPABASE_URL = urlMatch ? urlMatch[1].trim() : 'https://vovcdsutmcjkdlracgtv.supabase.co';
const SERVICE_ROLE_KEY = keyMatch ? keyMatch[1] : '';

if (!SERVICE_ROLE_KEY) {
  console.error('Could not find SERVICE_ROLE_KEY in scripts/seed-blog.mjs');
  process.exit(1);
}

const posts = [
  {
    slug: 'how-to-combine-jpg-to-pdf-online-free-2026',
    title: 'How to Combine JPG Images into One PDF Online for Free (No Upload)',
    excerpt: 'Tired of cluttered image folders or struggling to share multiple photos? Learn how to combine JPG images into a single, professional PDF document in seconds—100% free and completely private.',
    date: '2026-03-13',
    display_date: 'March 13, 2026',
    read_time: '5 min read',
    category: 'Images',
    related_tool_link: '/pdf-to-image',
    related_tool_name: 'Image to PDF',
    image: '/images/blog/combine-jpg-to-pdf.png',
    content: `## The Hassle of Sharing Multiple Images

Sharing a dozen individual JPG files is frustrating. Email clients reject large attachments, and recipients hate downloading files one by one. The solution? **Combining your images into a single PDF.**

Whether you are sending a portfolio, submitting homework scans, or compiling receipts for an expense report, a PDF ensures your images stay organized and formatted exactly as you intended.

However, most "free" online converters come with hidden catches. 

## The Problem with Cloud Converters

When you search for a JPG to PDF converter, you'll find hundreds of cloud-based tools. 

| Competitor Feature | The Hidden Catch |
|--------------------|------------------|
| **"Free" Usage** | Often capped at 2 tasks per day, then demands a paid subscription. |
| **File Size Limits** | Refuses to process high-resolution photos over 15MB. |
| **Privacy Risks** | Uploads your personal photos to remote servers (often indefinitely). |
| **Watermarks** | Slaps an ugly logo on your final PDF document. |

For sensitive images—like scans of your ID, financial documents, or private photos—uploading to a random server is a major privacy risk.

## 100% Private, Client-Side Conversion

This is where **Tiny PDF Tools** is completely different.

Our tool runs entirely using **client-side processing**. This means the software loads directly into your web browser, and the conversion happens instantly on your own computer or smartphone. 

**Your files never leave your device.** There are zero uploads, no file size limits, and no accounts required.

## Step-by-Step: Combine JPGs to PDF

Converting your images is incredibly simple and takes less than 5 seconds.

### 1. Open the Image to PDF Tool
Navigate to our [Image to PDF](/pdf-to-image) converter. (Note: this tool supports both PDF to Image and Image to PDF functionality).

### 2. Select Your Images
Click the upload button or drag and drop your JPG, PNG, or WEBP files directly into the browser window. You can select multiple files at once.

### 3. Arrange the Order
Once added, you can drag the image thumbnails to reorder them. The order they appear on screen will be the exact order of the PDF pages.

### 4. Convert and Download
Click the "Convert to PDF" button. Because everything runs locally on your hardware, the PDF generates instantly. The file downloads directly to your downloads folder.

## Pro Tips for the Best Results

To get the most professional-looking document, follow these quick tips:

1. **Check Orientation:** Ensure all your photos are rotated correctly before merging. If you need to fix a PDF page later, use our [Rotate PDF](/rotate-pdf) tool.
2. **Watch the File Size:** High-resolution photos create massive PDFs. Use our [Compress PDF](/compress-pdf) tool on the final document to shrink it for email.
3. **Organize Pages:** If you forgot a photo, you don't need to start over! Use our [Organize PDF](/organize-pdf) tool to insert, delete, or rearrange pages in the finished PDF.

## Try It Now

Ready to organize your scattered images into a clean, professional document? Experience 100% private, lightning-fast conversion today.

[Open Image to PDF Tool](/pdf-to-image)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Is it safe to convert private photos to PDF online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, but only if you use a client-side tool like Tiny PDF Tools. Cloud-based converters upload your files to external servers, which is a privacy risk. Our tool converts files entirely within your web browser."
    }
  }, {
    "@type": "Question",
    "name": "How many JPG images can I combine for free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no hard limits because the processing uses your device's memory. You can easily combine 50+ high-resolution images for free."
    }
  }, {
    "@type": "Question",
    "name": "Does converting JPG to PDF reduce image quality?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No, embedding JPG images into a PDF container preserves their original resolution and quality. If the PDF becomes too large, you can optionally compress it."
    }
  }]
}
</script>
`
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

seed().then(() => console.log('\\nDone!'));
