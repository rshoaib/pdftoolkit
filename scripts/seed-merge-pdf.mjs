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
If you are working on a Mac or Windows PC, you frequently need to combine multiple PDF documents into a single file. Whether you are merging tax returns, grouping project reports, or assembling a portfolio, piecing together documents shouldn't cost you a monthly subscription.

In this 2026 guide, we'll show you exactly how to merge PDF files on Mac and Windows for free, without needing to install Adobe Acrobat or upload your private documents to a cloud server.

## Why You Don't Need Adobe Acrobat to Merge PDFs

Adobe Acrobat is the industry standard for PDF editing, but it is also an expensive enterprise tool. For everyday users who just need to combine a few pages, paying a monthly subscription fee is unnecessary.

While there are many free online PDF mergers, most of them pose a serious privacy risk. The vast majority of online tools (like Smallpdf or iLovePDF) require you to upload your files to their servers. If you are merging confidential financial records or legal contracts, you are trusting a third party with your sensitive data.

The solution? **Client-side PDF tools.** These modern utilities run entirely within your web browser. When you use a client-side tool, your files are processed directly on your computer's RAM. They never leave your device, ensuring 100% privacy and blazing-fast speeds.

## How to Merge PDFs for Free (Windows & Mac)

Because client-side tools run in the browser, the process is identical whether you are using Windows 11, macOS, or Linux. Here is how to securely merge your files in seconds using our free [Merge PDF](/merge-pdf) tool.

### Step 1: Open the Secure Merge Tool
Navigate to the [Tiny PDF Tools Merge PDF](/merge-pdf) utility. Because the tool runs locally in your browser, it loads instantly and works completely offline once opened.

### Step 2: Select Your PDF Files
Drag and drop your PDF files into the designated drop zone, or click the "Select Files" button to browse your computer. You can select multiple files at once.

### Step 3: Arrange the Order
Once your files are loaded, you will see a visual list. Click and drag the files to arrange them in the exact order you want them to appear in the final merged document.

### Step 4: Click "Merge" and Save
Click the prominent **Merge PDFs** button. Because there is no upload required, the merging process happens instantly. Your new, combined PDF will automatically download to your computer.

## What to Do After Merging Your PDFs

Merging documents is often just the first step in preparing a file for sharing or archiving. Depending on your needs, you might want to perform a few extra optimizations.

**Optimize File Size:** When you combine multiple large PDFs, the resulting file can be too big to send as an email attachment. If you need to make the file smaller, you can instantly shrink it without losing quality using our [Compress PDF](/compress-pdf) tool.

**Extract Specific Pages:** Did you accidentally include an extra file, or do you only need certain pages from the newly merged document? You don't have to start over. Simply run the document through the [Split PDF](/split-pdf) tool to extract exactly what you need.

**Sign the Final Document:** If you merged several contracts or agreements together that require your authorization, you can digitally sign the final document securely using our [Sign PDF](/sign-pdf) utility.

By keeping all of your document processing client-side, you guarantee that your data remains yours.

## Frequently Asked Questions (FAQ)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Can I merge PDFs on a Mac without downloading software?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. While Macs include the Preview app for basic merging, using a client-side web tool like TinyPDFTools is faster and doesn't require downloading any third-party software. It works directly in Safari or Chrome."
    }
  }, {
    "@type": "Question",
    "name": "Are there file size limits when merging PDFs offline?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Because client-side tools process files using your device's memory rather than a cloud server, there are no artificial file size limits or paywalls. You are only limited by your computer's RAM."
    }
  }, {
    "@type": "Question",
    "name": "Is it safe to merge confidential documents online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It is only safe if you use a 100% client-side tool. Traditional cloud editors upload your files to external servers, which is a privacy risk. Client-side tools merge the files locally on your device."
    }
  }]
}
</script>

### Can I merge PDFs on a Mac without downloading software?
Yes. While macOS includes the Preview app for basic merging, using a client-side web tool like ours is faster, more intuitive, and doesn't require downloading any third-party software. It works flawlessly directly in Safari or Chrome.

### Are there file size limits when merging PDFs offline?
Because client-side tools process files using your device's memory rather than a cloud server, there are no artificial file size limits or paywalls. You are free to merge massive documents.

### Is it safe to merge confidential documents online?
It is only safe if you use a 100% client-side tool. Traditional cloud editors upload your files to external servers, which is a privacy risk. Client-side tools merge the files locally on your device, ensuring maximum security.

## Start Merging Your Documents Securely

Stop paying for expensive software or risking your data on cloud servers. Get your work done instantly with our secure, browser-based utilities.

**[Try the Free Merge PDF Tool Now →](/merge-pdf)**
`;

const posts = [{
  slug: "merge-pdf-mac-windows-free",
  title: "How to Merge PDF Files on Mac and Windows (100% Free, No Adobe)",
  excerpt: "Learn how to securely merge multiple PDF documents into a single file on any operating system without expensive software or privacy-risking cloud uploads.",
  content: articleContent,
  // Using today's date dynamically
  date: new Date().toISOString(),
  display_date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()),
  read_time: "4 min read",
  category: "Tutorials",
  related_tool_link: "/merge-pdf",
  related_tool_name: "Merge PDF",
  image: "/images/blog/merge-pdf-hero.png"
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

seed().then(() => console.log('Done!'));
