const SupabaseREST = require('./supabase_rest.cjs');

const article = {
  slug: 'how-to-fix-a-rotated-pdf-scan',
  title: 'How to Fix a Rotated PDF Scan (Free & Permanent Fix)',
  excerpt: 'Tired of craning your neck to read a scanned document that was saved sideways? Learn how to permanently fix and rotate an upside-down or sideways PDF scan instantly in your browser.',
  category: 'PDF Basics',
  date: '2026-03-29',
  display_date: 'March 29, 2026',
  read_time: '3 min read',
  image: '/images/blog/rotate_scan_hero.png',
  content: `We have all been there. A colleague emails you a critical contract, or a school sends over a transcript, but whoever scanned it placed the paper in the machine sideways. 

When you open the PDF, you have to physically turn your laptop sideways or crane your neck 90 degrees just to read the text.

While most PDF readers have a "Rotate View" button, this is only a temporary fix. The second you close the file and send it to someone else, it reverts back to being upside down.

If you need a permanent fix that actually saves the rotation data to the file, here is how to do it instantly, for free, without downloading any expensive software like Adobe Acrobat.

## The Difference Between "Viewing" and "Saving"

When you open a sideways PDF in Google Chrome, Apple Preview, or Adobe Reader, you can usually right-click and select **Rotate Clockwise**.

However, this only rotates your *view* of the document. It does not alter the underlying code of the PDF file. If you hit 'Save' and send that file to your boss, they will open it and see the exact same sideways scan you originally received.

To permanently fix the scan, you need a tool that writes new rotation metadata directly into the PDF document.

## How to Permanently Rotate a PDF Scan (Free)

You don't need to pay for a PDF editor to fix a simple rotation issue. We built a completely free, browser-based **[PDF Rotate Tool](/rotate-pdf)** that does this instantly.

Because we value your privacy, our tool uses 100% client-side technology. Your scanned documents are never uploaded to a cloud server, making this the safest way to fix sensitive medical, legal, or financial scans.

### Step-by-Step Guide:

1.  **Open the Tool:** Navigate to our [Rotate PDF](/rotate-pdf) tool. No signup required.
2.  **Select Your File:** Drag and drop your sideways or upside-down PDF scan into the browser.
3.  **Adjust the Pages:** You will see a thumbnail preview of every page in your document. You can click the "Rotate Right" or "Rotate Left" buttons on individual pages if only a few pages are messed up.
4.  **Rotate All (Optional):** If the entire 50-page document was scanned upside down, click the "Rotate All Pages" button at the top to fix everything in one click.
5.  **Save Changes:** Click the **Apply Changes** button. Our tool will rewrite the PDF metadata locally on your computer.
6.  **Download:** Save your newly oriented PDF. 

Now, when you email that file to someone else or upload it to a portal, it will open perfectly right-side up for everyone.

## Common Scanning Mistakes to Avoid

To prevent this issue in the future, keep these tips in mind when using a physical scanner or a scanner app on your phone:

*   **Check the Feed Orientation:** If using a commercial office scanner with an Auto Document Feeder (ADF), double-check the icon on the plastic tray. It will show you whether to place the paper face up, face down, top-first, or bottom-first.
*   **Phone Scanner Apps:** If you are using an app like Apple Notes or Adobe Scan on your phone, hold your phone entirely steady and parallel to the paper. If you tilt the phone too much, the gyroscope might assume you are taking a landscape photo, resulting in a sideways scan.
*   **Fix it Before You Send:** Always open a PDF after you scan it. If it’s sideways, fix it using our [Rotate PDF](/rotate-pdf) tool *before* you send it to clients or colleagues to maintain a professional appearance.`
};

async function main() {
  const db = new SupabaseREST();
  await db.safeInsertWithId('blog_posts', article, 'slug');
}

main().catch(err => {
  console.error('❌ Insert failed:', err.message);
  process.exit(1);
});
