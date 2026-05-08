# tinypdftools-content-pipeline

Auto-publish one SEO-friendly, PDF-focused article to tinypdftools.com by committing a JSON file to the repo, on the cadence controlled by the Claude scheduled task (plus manual triggers).

**Objective:** On each run, generate and publish ONE helpful, topical, SEO-optimized article to https://tinypdftools.com/blog/ by writing a new `<slug>.json` file into `src/data/blogPosts/` and pushing the commit. The site reads posts from the filesystem at build time (blog index is rendered from `getAllPosts()` in `src/lib/blogService.js`; detail pages use Next.js App Router static params at `src/app/blog/[slug]/page.jsx`), so a git commit + push is required — Vercel redeploys automatically within ~1–2 minutes. Cadence is driven by the scheduled task's own cron/frequency plus ad-hoc manual triggers — do NOT enforce hardcoded daily/weekly caps inside the run.

**Fixed infrastructure (do not re-discover these at runtime):**

- Repo root: the working directory (contains `src/`, `public/`, `package.json`).
- Posts directory: `src/data/blogPosts/` — one `<slug>.json` file per post.
- Post shape (must match what `src/lib/blogService.js` reads from disk and what `BlogList.jsx` / `BlogPost.jsx` render):
  - `id` (string) — any stable unique id; timestamp-as-string (`"1729393200000"`) or UUID is fine. Not surfaced in the UI; exists only for React keys.
  - `slug` (string, kebab-case, UNIQUE across all files)
  - `title` (string)
  - `excerpt` (string) — used as meta description
  - `content` (string, HTML + optional leading inline SVG)
  - `date` (string, ISO date or datetime) — primary sort key, used as `publishedTime` in OpenGraph
  - `displayDate` (string) — human-readable date rendered in post header (e.g., `April 18, 2026`)
  - `readTime` (string) — e.g., `6 min read`
  - `category` (string)
  - `relatedToolLink` (string) — e.g., `/merge-pdf`
  - `relatedToolName` (string) — e.g., `Merge PDF`
  - `image` (string | null) — path served from `/public`, e.g., `/blog-images/hero-<slug>.svg`. `null` is valid — posts render cleanly without a hero asset because `BlogHero` generates one from slug/title/category.
- Hero art (optional): drop SVG files into `public/blog-images/`. Served at `/blog-images/<filename>`. The site does not currently read the `image` field in either the list or detail view (it draws `BlogHero` from metadata), so the `image` field is purely for OpenGraph / social previews and future use — setting it is still good practice.
- Live site: https://tinypdftools.com
- Host: Vercel (Hobby / free tier). Pushes to the main branch trigger a production deploy. No backend, no database, no storage bucket.
- Brand: **Tiny PDF Tools** — free, 100%-in-browser PDF tools; no uploads, no accounts, completely private. Tone: practical, privacy-forward, step-by-step, friendly, no jargon. Never claim the site handles content server-side or uploads user files to any cloud.
- OpenGraph article author in the detail page is hardcoded to `Rizwan` in `src/app/blog/[slug]/page.jsx` — the schema does NOT include an `author` field, so do not add one unless `BlogPost.jsx` and `generateMetadata` are updated first.

Use standard file tools (Read, Write, Bash) for this pipeline. There is no database or storage MCP involved anymore.

---

## EXECUTE THESE STEPS IN ORDER

### 0. PRE-FLIGHT — clean stale lock junk and refuse to start on a dirty slate

Before generating anything, confirm the repo is in a state we can safely commit + push to. If the previous run left behind unpushed commits, untracked posts, or git-lock droppings, we deal with that BEFORE writing new content. Proceeding on top of broken state has historically masked silent push failures for weeks at a time.

```bash
# 0a. Remove stale lock-variant droppings ONLY (never live locks).
# These are non-standard names produced by past failure paths or by sync/AV
# software intercepting the live lock — safe to delete unconditionally.
shopt -s nullglob
for f in .git/index.lock.bak* .git/index.lock.tmp* .git/index.lock.refresh-* .git/index.lock.old \
         .git/HEAD.lock.bak*  .git/HEAD.lock.tmp*  .git/HEAD.lock.refresh-* \
         .git/next-index-*.lock .git/next-index-*.lock.tmp_*; do
  rm -f -- "$f"
done
shopt -u nullglob

# 0b. If a LIVE lock is present, ABORT — another git process is running
# (or a previous run crashed mid-write). Do not work around it.
for f in .git/index.lock .git/HEAD.lock; do
  if [ -e "$f" ]; then
    echo "ABORT: live lock present: $f. Another git process may be running, or a previous run crashed. Resolve manually." >&2
    exit 1
  fi
done

# 0c. Audit prior-run residue — unpushed commits + untracked posts.
git fetch origin main --quiet
unpushed=$(git log --oneline origin/main..HEAD)
untracked=$(git ls-files --others --exclude-standard src/data/blogPosts/)
if [ -n "$unpushed" ] || [ -n "$untracked" ]; then
  echo "ABORT: previous-run residue detected. Refusing to add a new post on top." >&2
  echo "Unpushed commits:" >&2; echo "$unpushed" >&2
  echo "Untracked posts:"  >&2; echo "$untracked" >&2
  exit 1
fi
```

If pre-flight aborts, STOP. Emit a report listing what was found and ask the operator to push or reset locally before another run is triggered. Do NOT generate a new post on top of unresolved residue — that's how 17 days of unpushed commits stayed invisible.

### 1. AUDIT EXISTING POSTS (pick a topic that doesn't collide)

List the existing post files and inspect their frontmatter-like fields:

```bash
ls src/data/blogPosts | sort
```

Then read the `title`, `category`, and `date` fields from each file. A quick one-liner:

```bash
node -e "const fs=require('fs'),p='src/data/blogPosts';fs.readdirSync(p).forEach(f=>{const o=JSON.parse(fs.readFileSync(p+'/'+f,'utf8'));console.log([o.date,o.category,o.slug,'—',o.title].join('  '));})" | sort -r | head -60
```

Also pull the category distribution so you know which values are already used:

```bash
node -e "const fs=require('fs'),p='src/data/blogPosts',c={};fs.readdirSync(p).forEach(f=>{const o=JSON.parse(fs.readFileSync(p+'/'+f,'utf8'));c[o.category]=(c[o.category]||0)+1});console.log(c)"
```

Read the titles to understand coverage, voice, and which tools already have companion articles. The site's content pillars map to the tool routes in `src/app/`:

- **Merging & Combining** — combining multiple PDFs, ordering pages, merging PDFs with images (`/merge-pdf`)
- **Splitting & Extracting** — splitting by page ranges, extracting chapters, pulling one page out (`/split-pdf`, `/extract-pdf-pages`)
- **Compression & Optimization** — reducing file size for email, balancing quality vs size (`/compress-pdf`)
- **Conversion** — PDF ↔ images (JPG, PNG, WebP), converting multi-page PDFs to image sets (`/pdf-to-image`, `/image-to-pdf`)
- **Page Manipulation** — rotate, crop, organize/reorder, delete pages, add page numbers (`/rotate-pdf`, `/crop-pdf`, `/organize-pdf`, `/delete-pdf-pages`, `/add-page-numbers`)
- **Security & Privacy** — protect with AES-256 passwords, unlock known-password PDFs, flattening to prevent editing, why client-side processing matters (`/protect-pdf`, `/unlock-pdf`, `/flatten-pdf`)
- **Annotation & Signing** — watermarking, drawn/typed signatures, flattening annotations (`/watermark-pdf`, `/sign-pdf`)
- **Reading & Navigation** — reading PDFs in the browser, zoom, search within a PDF (`/pdf-reader`)
- **General PDF knowledge & workflows** — PDF/A vs PDF, OCR basics, PDF history, when to use PDF vs DOCX, accessibility, tax-season / real-estate / student workflows

### 2. PICK A TOPIC

Choose ONE topic that:

- Fits one of the PDF pillars above.
- Is NOT already covered (compare against the audit — no near-duplicate slugs or titles).
- Has clear informational search intent (people Googling "how to X a PDF" or "PDF X explained").
- Prefers long-tail, specific angles (e.g., "How to compress a 50 MB PDF for email in 2026" beats "PDF compression explained").
- Pairs with an on-site tool you can deep-link to (use `relatedToolLink` + `relatedToolName` fields — e.g., merging topic → `relatedToolLink = /merge-pdf`, `relatedToolName = Merge PDF`).
- Optionally ties to a current 2026 development — use WebSearch briefly to check any recent PDF-related standards changes (PDF 2.0 adoption, browser PDF engine updates, iOS/Android PDF behavior), and cite only what you verified.

Record: primary keyword, 2–3 secondary keywords, target audience, search intent, and the on-site tool to deep-link.

### 3. GENERATE THE ARTICLE

**Length:** 1,500–2,500 words. Content length ~18k–30k chars of HTML is the sweet spot.

**Format:** Content is stored as HTML (not Markdown). Use native HTML tags: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<a href="...">`, `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<blockquote>`, `<code>`, `<pre>`. Do NOT use `<h1>` (the site wraps the post with an H1 from the title).

**Style to match the site's voice:**

- Opening hook paragraph addressing the reader's concrete PDF problem (no H2 first). Lead with a scenario or a concrete file-size / page-count number.
- **~6–10 H2 sections**, each 150–400 words, scannable paragraphs.
- 1–3 H3 subsections where natural.
- **At least one numbered step-by-step walkthrough** — most PDF articles earn their keep by telling the reader exactly what to click. Use `<ol>` with short, imperative steps.
- At least one `<ul>` or `<ol>` list and one `<table>` when a side-by-side comparison is useful (e.g., JPG vs PNG vs WebP for PDF export, AES-128 vs AES-256, compress vs reduce quality).
- **Privacy beat:** at least once, reinforce that Tiny PDF Tools processes files entirely in the browser — no uploads, no accounts — and explain why that matters for the topic at hand (sensitive tax documents, contracts, medical records, etc.).
- **FAQ section at the end:** `<h2>Frequently Asked Questions</h2>` with 5–7 Q&A pairs as `<h3>Question?</h3><p>Answer.</p>` — helps qualify for FAQ rich snippets.
- **Trust footer:**
  `<p><em>This article is for general informational purposes only. PDF behavior can vary between viewers, operating systems, and PDF versions. Tiny PDF Tools processes your files entirely in your browser — nothing is uploaded to our servers.</em></p>`
- **2–4 internal links** to on-site pages. Valid destinations:
  - Blog posts: `/blog/<existing-slug>` (verify by checking that `src/data/blogPosts/<slug>.json` exists)
  - Tool pages (full current set from `src/app/`):
    `/merge-pdf`, `/split-pdf`, `/compress-pdf`, `/pdf-to-image`, `/image-to-pdf`, `/rotate-pdf`, `/crop-pdf`, `/organize-pdf`, `/extract-pdf-pages`, `/delete-pdf-pages`, `/protect-pdf`, `/unlock-pdf`, `/watermark-pdf`, `/sign-pdf`, `/flatten-pdf`, `/add-page-numbers`, `/pdf-reader`
  - Include at least one link to the on-topic tool with a clear CTA anchor like "try our <Tool Name> to do this in your browser".
- **2–4 outbound citations** to authoritative sources (iso.org for PDF/A and PDF 2.0, pdfa.org, adobe.com for format specs, w3.org, developer.mozilla.org for browser/PDF APIs, nist.gov or wikipedia.org for cryptographic primitives like AES). Open in new tab: `<a href="..." target="_blank" rel="noopener noreferrer">`.
- **Hero image:** always produce a simple, on-brand inline SVG and prepend it to `content` — this gives every post a self-contained visual even when `image` is `null`. Optionally, also write the SVG to `public/blog-images/hero-<slug>.svg` and set `image = "/blog-images/hero-<slug>.svg"` for OpenGraph / social previews.

**Quality constraints:**

- Never invent statistics, study names, file-format claims, or official figures. If you cite a number or a standard, verify it with WebSearch first, and name the source and date.
- Keep primary keyword density natural (aim ~0.8–1.5%).
- Use semantic (LSI) keywords throughout — compression ratio, DPI, raster vs vector, encryption, metadata, bookmarks, OCR, fillable form, etc., where they fit.
- Paragraphs 3–5 sentences max. Short sentences for step-by-step parts.
- No AI-boilerplate openings ("In today's digital world…").
- American English.
- **Accurate privacy claim:** only say "runs in your browser" / "no uploads" when describing Tiny PDF Tools itself. When describing a competing workflow (Adobe Acrobat online, Smallpdf, etc.), be factual about what those services do — don't disparage.

### 4. PREPARE THE POST OBJECT

- **slug:** kebab-case, <60 chars, keyword-forward, globally unique. Before writing, check:
  `test -e src/data/blogPosts/<your-slug>.json` — if it exists, append a distinguishing suffix (e.g., `-2026`, `-step-by-step`) and recheck. Reject the run only if the *exact* slug collides; cadence-based skips (day of week, weekly counts) do NOT apply here.
- **title:** <65 chars for SERP, include primary keyword near the front, include year (2026) when the angle is time-sensitive.
- **excerpt:** 140–160 chars (used as meta description in `generateMetadata`), include primary keyword once, end with a complete sentence.
- **category:** pick one that matches existing values already in the corpus (audit step 1 reveals the set). If no existing category fits, prefer one of: `Merging`, `Splitting`, `Compression`, `Conversion`, `Page Editing`, `Security`, `Signing & Watermarking`, `Reading`, `PDF Basics`, `Workflows`. Do NOT invent a new value if an existing one is close.
- **id:** any stable unique string. `String(Date.now())` is fine.
- **date:** current ISO date (`YYYY-MM-DD`) or full ISO datetime. Use the sandbox's current time.
- **displayDate:** human-readable form, e.g., `April 18, 2026`. Must match the `date` field's calendar date.
- **readTime:** computed from word count at ~225 wpm, rounded up to the nearest minute, formatted `<n> min read` (e.g., `8 min read`).
- **relatedToolLink:** the most relevant tool route, e.g., `/merge-pdf`. Required — every article should link to at least one tool. Leave empty string only if the article is a pure "PDF Basics" explainer with no tool fit.
- **relatedToolName:** human name matching the route, e.g., `Merge PDF`.
- **image:** `/blog-images/hero-<slug>.svg` if you wrote a hero file to `public/blog-images/`; `null` otherwise.
- **content:** full HTML string. If a hero SVG was generated, prepend the **raw inline SVG** to the HTML (pattern: `svg.trim() + '\n\n' + body.trim()`). This gives each post a self-contained hero.

### 5. WRITE THE FILES AND COMMIT

Write the JSON file at `src/data/blogPosts/<slug>.json` with the post object, pretty-printed with 2-space indent and a trailing newline. Example shape:

```json
{
  "id": "1729393200000",
  "slug": "how-to-flatten-a-pdf-form-in-2026",
  "title": "How to Flatten a PDF Form in 2026 (Browser-Only, Free)",
  "excerpt": "Flatten a PDF form to lock fields and prevent edits. Step-by-step guide, no uploads, no accounts — runs 100% in your browser.",
  "content": "<svg ...></svg>\n\n<p>Opening hook…</p>\n<h2>…</h2>…",
  "date": "2026-04-19",
  "displayDate": "April 19, 2026",
  "readTime": "7 min read",
  "category": "Security",
  "relatedToolLink": "/flatten-pdf",
  "relatedToolName": "Flatten PDF",
  "image": "/blog-images/hero-how-to-flatten-a-pdf-form-in-2026.svg"
}
```

If you wrote a hero asset, place it at `public/blog-images/hero-<slug>.svg`.

Then commit, push, and HARD-VERIFY the push actually reached origin. The pipeline's previous behavior of "push and hope" masked silent failures — every check below must pass or the run aborts.

Validate the post file is valid JSON first:

```bash
node -e "JSON.parse(require('fs').readFileSync('src/data/blogPosts/<slug>.json','utf8'))"
```

Commit and push (omit the hero path from `git add` if no hero file was created):

```bash
git add src/data/blogPosts/<slug>.json public/blog-images/hero-<slug>.svg
git commit -m "blog: add <title>"
git push origin main
```

HARD VERIFY the push landed on `origin/main`. Every check is mandatory; partial pass = failure.

```bash
git fetch origin main --quiet

# (a) No commits remain ahead of origin/main.
if [ -n "$(git log --oneline origin/main..HEAD)" ]; then
  echo "ABORT: push did not reach origin/main. Unpushed:"
  git log --oneline origin/main..HEAD
  exit 1
fi

# (b) The new post is present in origin/main's tree.
if ! git ls-tree -r origin/main -- "src/data/blogPosts/<slug>.json" | grep -q .; then
  echo "ABORT: src/data/blogPosts/<slug>.json is not in origin/main."
  exit 1
fi

# (c) No untracked files left behind in the posts dir.
if [ -n "$(git ls-files --others --exclude-standard src/data/blogPosts/)" ]; then
  echo "ABORT: untracked files remain in src/data/blogPosts/:"
  git ls-files --others --exclude-standard src/data/blogPosts/
  exit 1
fi
```

If any check fails, STOP and emit a failure report. **Do NOT** retry by deleting/renaming `.git/*.lock` files, do not amend or force-push, do not skip the verify. If `index.lock` reappears mid-run, that's a signal another process holds the repo — investigate, don't paper over.

### 6. VERIFY THE LIVE URL

After pushing, Vercel begins a new production build. Builds typically finish in ~60–120 seconds. Once deployed:

WebFetch `https://tinypdftools.com/blog/<slug>` and confirm:

- The page renders (not a redirect to `/blog`, not a 404).
- The title and first paragraph appear.
- The inline SVG at the top of the content renders.
- The meta description in `<head>` matches the excerpt (within trimming).
- The related-tool CTA button / link renders if the theme displays one from `relatedTool*`.

Also WebFetch `https://tinypdftools.com/blog` and confirm the new post appears in the index (newest-first by `date`).

If the live page 404s or doesn't render the row, check:

- Did the push succeed on the main branch? (`git log origin/main..HEAD` should be empty.)
- Did the Vercel build pass? (Check the deployments list on vercel.com, or wait a full 3 minutes before retrying.)
- Is the JSON valid? (`node -e "JSON.parse(...)"` above.)
- Is the slug unique and lowercase-kebab?
- Is `content` non-empty and `date` populated?

Report the issue in the summary — do NOT rewrite history or force-push to recover. Roll forward with a follow-up commit if a fix is needed.

### 7. REPORT (concise, under 250 words)

- New post: title, live URL
- Category
- Related tool: `relatedToolName` → `relatedToolLink`
- Primary keyword, word count (rough), content length (chars), `readTime`
- Internal links used (list)
- Outbound citations (list, with source + date of any figure cited)
- Hero image: `/blog-images/hero-<slug>.svg` or "inline SVG only (no file)"
- Verified on live URL? yes/no and any issues
- Any skipped steps or warnings

---

## CONSTRAINTS (hard rules)

- **NEVER write a duplicate slug** — always pre-check that `src/data/blogPosts/<slug>.json` does not exist.
- **NEVER invent PDF-standard facts, file-format claims, or statistics.** Verify with WebSearch and cite the source + date.
- **ALWAYS include the "runs in your browser / informational only" trust footer.**
- **NEVER store Markdown in the `content` field** — HTML only, optional inline SVG prepended.
- **NEVER modify or delete an existing `<slug>.json` file.** Only add new ones.
- **Do NOT touch the repo outside `src/data/blogPosts/` and `public/blog-images/`.** This pipeline is scoped to adding one post + optionally one hero SVG.
- **Do NOT enforce cadence rules inside the run** (day-of-week, same-day duplicates by date, weekly post counts). Cadence is controlled by the scheduled task's cron + manual triggers. The only "already posted" gate is exact slug collision.
- **Do NOT alter the post shape** at runtime (no new fields, no renamed fields). If a field you want doesn't exist (e.g., `author`), drop it from the object — update `BlogPost.jsx` + `generateMetadata` first in a separate commit.
- If WebSearch / WebFetch / the git push fails mid-run, stop and emit a report explaining what blocked you; do not retry aggressively or force-push.
- **NEVER rename, copy, or "back up" git lock files** (`.git/*.lock` → `.bak`, `.tmp`, `.old`, `.refresh-*`, etc.) as a workaround for lock contention. If `index.lock` or `HEAD.lock` is held, ABORT and report — investigate the holder, don't sidestep it. Lock-rename workarounds are exactly what masked silent push failures previously.
- **NEVER skip the post-push HARD VERIFY block.** All three checks (no unpushed commits, file present in `origin/main`, no untracked files) are mandatory.
- **NEVER generate a new post on top of pre-flight residue.** If Step 0 finds unpushed commits or untracked posts, abort and ask the operator to resolve before re-running.
- **Do not make false privacy claims** about competitors or about Tiny PDF Tools. Only claim "no uploads / browser-only" for the operations actually performed client-side by this site.

## SUCCESS CRITERIA

- One new file at `src/data/blogPosts/<slug>.json` with a unique slug and all required fields populated (`id`, `slug`, `title`, `excerpt`, `content`, `date`, `displayDate`, `readTime`, `category`, `relatedToolLink`, `relatedToolName`; `image` may be `null`).
- Optional hero SVG at `public/blog-images/hero-<slug>.svg`.
- Commit pushed to `origin/main` and Vercel production deploy succeeded.
- Live URL `https://tinypdftools.com/blog/<slug>` renders the new article within ~2–3 minutes of push.
- Article appears on `https://tinypdftools.com/blog` index.
- No duplicate or near-duplicate of existing content.
