---
name: tinypdftools-content-pipeline
description: Auto-publish one SEO-friendly PDF-focused article to tinypdftools.com by committing a JSON file to the repo, Tue & Fri at 3 AM.
---

# tinypdftools-content-pipeline

Auto-publish one SEO-friendly, PDF-focused article to tinypdftools.com by writing a new JSON file to `src/data/blogPosts/` and pushing the commit. Cadence is controlled by this scheduled task's cron (Tue & Fri 3 AM) plus manual triggers — do NOT enforce hardcoded daily/weekly caps inside the run.

**Objective:** On each run, generate and publish ONE helpful, topical, SEO-optimized article to https://tinypdftools.com/blog/ by creating a `<slug>.json` file in `src/data/blogPosts/` and pushing to `origin/main`. The site reads posts from the filesystem at build time (`src/lib/blogService.js` + `src/app/blog/[slug]/page.jsx`), so a git commit + push IS required. Vercel redeploys automatically within ~60–120 seconds.

**Fixed infrastructure (do not re-discover at runtime):**
- Repo root: the working directory (contains `src/`, `public/`, `package.json`).
- Posts directory: `src/data/blogPosts/` — one `<slug>.json` file per post.
- Post shape (matches what `BlogList.jsx` and `BlogPost.jsx` read):
  - `id` (string) — any unique string; `String(Date.now())` is fine
  - `slug` (string, kebab-case, UNIQUE across all files)
  - `title` (string)
  - `excerpt` (string) — meta description
  - `content` (string, HTML + optional leading inline SVG)
  - `date` (string, ISO) — primary sort key, used as OpenGraph `publishedTime`
  - `displayDate` (string) — human-readable, e.g. `April 18, 2026`
  - `readTime` (string) — e.g. `6 min read`
  - `category` (string)
  - `relatedToolLink` (string) — e.g. `/merge-pdf`
  - `relatedToolName` (string) — e.g. `Merge PDF`
  - `image` (string | null) — path served from `/public`, e.g. `/blog-images/hero-<slug>.svg`. `null` is valid.
- Hero art (optional): drop SVG files into `public/blog-images/`. Served at `/blog-images/<filename>`. `BlogList.jsx` and `BlogPost.jsx` currently do NOT read `post.image` (they render `BlogHero` from slug/title/category), so setting `image` mainly affects OpenGraph / social previews.
- **Hero rendering contract (strict):** if prepending an inline SVG inside `content`, it MUST be a SINGLE complete `<svg …>…</svg>` block at the VERY START of `content`, followed by a blank line, then the HTML body. No leading whitespace or HTML before the `<svg` tag. Only the FIRST leading SVG is treated as the hero — additional SVGs inside the body render inline. Violations cause double-hero stacking (generic fallback + inline SVG both render). If you see double heroes on a new post, the deploy is stale — do not compensate by stripping the SVG from `content`.
- **Hero sizing contract:** the hero container is a compact 16:5 banner (~240 px tall on a 760 px article, `max-height: 260px`). `BlogPost.jsx` normalizes the inline SVG by stripping any root `width`/`height` attributes and forcing `preserveAspectRatio="xMidYMid slice"`. Author inline hero SVGs with a 16:5 `viewBox` (preferred `0 0 1200 375`) so nothing is cropped. If you must reuse a 16:9 viewBox, place the subject in the vertical middle — slice trims the top and bottom first.
- Live site: https://tinypdftools.com
- Host: Vercel (Hobby / free tier). Pushes to `main` trigger a production deploy. No backend, no database.
- Brand: **Tiny PDF Tools** — free, 100%-in-browser PDF tools; no uploads, no accounts, completely private. Tone: practical, privacy-forward, step-by-step, friendly, no jargon. Never claim files are uploaded server-side.
- OpenGraph article author is hardcoded to `Rizwan` in `src/app/blog/[slug]/page.jsx`. The post shape has NO `author` field — do not add one.

Use standard file tools (Read, Write, Bash). There is no database or storage MCP in this pipeline anymore.

---

## STEPS

### 1. AUDIT EXISTING POSTS

```bash
ls src/data/blogPosts | sort
```

```bash
node -e "const fs=require('fs'),p='src/data/blogPosts';fs.readdirSync(p).forEach(f=>{const o=JSON.parse(fs.readFileSync(p+'/'+f,'utf8'));console.log([o.date,o.category,o.slug,'—',o.title].join('  '));})" | sort -r | head -60
```

```bash
node -e "const fs=require('fs'),p='src/data/blogPosts',c={};fs.readdirSync(p).forEach(f=>{const o=JSON.parse(fs.readFileSync(p+'/'+f,'utf8'));c[o.category]=(c[o.category]||0)+1});console.log(c)"
```

Content pillars (map to tool routes in `src/app/`):
- **Merging & Combining** — `/merge-pdf`
- **Splitting & Extracting** — `/split-pdf`, `/extract-pdf-pages`
- **Compression & Optimization** — `/compress-pdf`
- **Conversion** — `/pdf-to-image`, `/image-to-pdf`
- **Page Manipulation** — `/rotate-pdf`, `/crop-pdf`, `/organize-pdf`, `/delete-pdf-pages`, `/add-page-numbers`
- **Security & Privacy** — `/protect-pdf`, `/unlock-pdf`, `/flatten-pdf`
- **Annotation & Signing** — `/watermark-pdf`, `/sign-pdf`
- **Reading & Navigation** — `/pdf-reader`
- **General PDF knowledge & workflows** — PDF/A vs PDF, OCR basics, PDF vs DOCX, tax/real-estate/student workflows

### 2. PICK A TOPIC

Choose ONE topic that:
- Fits a PDF pillar.
- Is NOT already covered (no near-duplicate slugs or titles).
- Has clear informational search intent.
- Prefers long-tail, specific angles (e.g., "How to compress a 50 MB PDF for email in 2026").
- Pairs with an on-site tool for `relatedToolLink` + `relatedToolName`.
- Optionally ties to a verified 2026 development (PDF 2.0 adoption, browser PDF engine updates, iOS/Android PDF behavior) — WebSearch to verify.

Record: primary keyword, 2–3 secondary keywords, target audience, search intent, on-site tool to deep-link.

### 3. GENERATE THE ARTICLE

**Length:** 1,500–2,500 words. Content length ~18k–30k chars.

**Format:** HTML, not Markdown. Use `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<a>`, `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<blockquote>`, `<code>`, `<pre>`. Do NOT use `<h1>` (title is rendered as H1 by the site).

**Style:**
- Opening hook paragraph with a concrete file-size/page-count scenario (no H2 first).
- ~6–10 H2 sections, each 150–400 words.
- 1–3 H3 subsections where natural.
- **At least one numbered step-by-step walkthrough** (`<ol>` with imperative steps).
- At least one `<ul>` or `<ol>` list and one `<table>` when a side-by-side comparison fits (e.g., JPG vs PNG vs WebP, AES-128 vs AES-256).
- **Privacy beat:** at least once, reinforce that Tiny PDF Tools processes files entirely in the browser — no uploads, no accounts — and explain why it matters for this topic.
- **FAQ:** `<h2>Frequently Asked Questions</h2>` with 5–7 `<h3>Q?</h3><p>A.</p>` pairs.
- **Trust footer:** `<p><em>This article is for general informational purposes only. PDF behavior can vary between viewers, operating systems, and PDF versions. Tiny PDF Tools processes your files entirely in your browser — nothing is uploaded to our servers.</em></p>`
- **2–4 internal links.** Valid destinations:
  - `/blog/<existing-slug>` (verify with `test -e src/data/blogPosts/<slug>.json`)
  - Tool pages: `/merge-pdf`, `/split-pdf`, `/compress-pdf`, `/pdf-to-image`, `/image-to-pdf`, `/rotate-pdf`, `/crop-pdf`, `/organize-pdf`, `/extract-pdf-pages`, `/delete-pdf-pages`, `/protect-pdf`, `/unlock-pdf`, `/watermark-pdf`, `/sign-pdf`, `/flatten-pdf`, `/add-page-numbers`, `/pdf-reader`
  - At least one link to the on-topic tool with a CTA anchor.
- **2–4 outbound citations** to authoritative sources (iso.org, pdfa.org, adobe.com for format specs, w3.org, developer.mozilla.org, nist.gov, wikipedia.org). `target="_blank" rel="noopener noreferrer"`.
- **Hero image:** produce a simple on-brand SVG. Preferred path: prepend the SVG inline to `content` per the hero rendering contract above, and leave `image = null`. Optional: also write the SVG to `public/blog-images/hero-<slug>.svg` and set `image = "/blog-images/hero-<slug>.svg"` for OpenGraph / social previews. When inlining, keep the SVG compact (under ~3 KB) and on a single top-level line so `splitLeadingSvg()` matches cleanly.
  - **Dimensions:** the rendered hero is a compact 16:5 banner (roughly 240 px tall on a 760 px-wide article). Author the SVG with a 16:5 `viewBox` — preferred `viewBox="0 0 1200 375"` (or a 16:5 multiple like `400 125`) so the composition fills the container without cropping. If you must reuse a legacy 16:9 viewBox (e.g. `1200 630`), center the subject in the middle third vertically — `BlogPost.jsx` normalizes the SVG with `preserveAspectRatio="xMidYMid slice"`, which clips top and bottom first.
  - **Do not hard-code `width`/`height` on the root `<svg>`** — the component strips them so CSS can drive sizing. Keep `viewBox` and (optional) `preserveAspectRatio` attributes only.
  - **Make the scene topical.** Lean on the article's verb/object (merge → overlapping documents + arrow, split → document with a scissor cut, compress → document being squeezed, sign → document + signature stroke, protect → document + padlock, etc.) instead of a generic abstract shape. The fallback `BlogHero` can still render a generic gradient+icon if inline-SVG is skipped — reserve inline SVGs for posts where the bespoke illustration actually adds value.

**Quality:**
- Never invent statistics, study names, file-format claims, or official figures. Verify with WebSearch; cite source + date.
- Primary keyword density ~0.8–1.5%.
- Semantic keywords: compression ratio, DPI, raster vs vector, encryption, metadata, bookmarks, OCR, fillable form, etc.
- Paragraphs 3–5 sentences max.
- No AI-boilerplate openings.
- American English.
- Accurate privacy claim: only say "runs in your browser / no uploads" about Tiny PDF Tools itself. Be factual about competitors.

### 4. PREPARE THE POST OBJECT

- **slug:** kebab-case, <60 chars, keyword-forward, globally unique. Pre-check: `test -e src/data/blogPosts/<slug>.json` — collide → append suffix (e.g., `-2026`, `-step-by-step`) and recheck. The ONLY "already posted" gate is exact slug collision.
- **title:** <65 chars, primary keyword near front, include `2026` when time-sensitive.
- **excerpt:** 140–160 chars, primary keyword once, complete sentence.
- **category:** match existing values (audit reveals them). If none fit, prefer one of: `Merging`, `Splitting`, `Compression`, `Conversion`, `Page Editing`, `Security`, `Signing & Watermarking`, `Reading`, `PDF Basics`, `Workflows`. Don't invent if close value exists.
- **id:** `String(Date.now())` is fine.
- **date:** current ISO date (`YYYY-MM-DD`) or full ISO datetime (sandbox current time).
- **displayDate:** human-readable, matches calendar date of `date`, e.g. `April 18, 2026`.
- **readTime:** word count / 225 wpm, rounded up, format `<n> min read`.
- **relatedToolLink:** most relevant tool route. Required unless pure "PDF Basics" with no tool fit.
- **relatedToolName:** human name of the tool.
- **image:** `/blog-images/hero-<slug>.svg` if you wrote a hero file to `public/blog-images/`; `null` otherwise.
- **content:** full HTML. If hero SVG generated, prepend as raw inline SVG: `svg.trim() + '\n\n' + body.trim()` — single top-level `<svg>…</svg>` block only, followed by a blank line, then the HTML body. Never include more than one leading SVG.

### 5. WRITE AND COMMIT

Write `src/data/blogPosts/<slug>.json` with the post object, 2-space indent, trailing newline. If a hero asset was generated, write `public/blog-images/hero-<slug>.svg`.

Validate JSON before committing:

```bash
node -e "JSON.parse(require('fs').readFileSync('src/data/blogPosts/<slug>.json','utf8'))"
```

Commit and push:

```bash
git add src/data/blogPosts/<slug>.json public/blog-images/hero-<slug>.svg   # omit hero path if not created
git commit -m "blog: add <title>"
git push origin main
```

Vercel begins a production build on push. Expected build time: ~60–120 seconds.

### 6. VERIFY LIVE URL

Wait ~2 minutes after push. WebFetch `https://tinypdftools.com/blog/<slug>` — confirm renders, title/first para visible, inline SVG or `BlogHero` renders (exactly one hero, never two), meta description matches excerpt, related-tool CTA renders.

WebFetch `https://tinypdftools.com/blog` — confirm new post appears newest-first.

If the live page 404s:
- Did the push land on `origin/main`? (`git log origin/main..HEAD` should be empty.)
- Did the Vercel build pass? (Deployments list on vercel.com.)
- Is the JSON valid and the slug kebab-case?

Report the issue — do NOT rewrite history or force-push. Roll forward with a follow-up commit if a fix is needed.

### 7. REPORT (under 250 words)

- New post: title, live URL
- Category
- Related tool: name → link
- Primary keyword, word count, content length (chars), `readTime`
- Internal links used
- Outbound citations (source + date)
- Hero image: `/blog-images/hero-<slug>.svg` or "inline SVG only"
- Live URL verified? yes/no + issues
- Skipped steps / warnings

---

## HARD RULES

- NEVER write a duplicate slug — always pre-check.
- NEVER invent PDF-standard facts, file-format claims, or stats — verify + cite.
- ALWAYS include the trust footer.
- NEVER store Markdown in `content` — HTML only, optional inline SVG prepended.
- NEVER modify or delete an existing `<slug>.json` file. Only add new ones.
- Scope: `src/data/blogPosts/` and `public/blog-images/` only. Do not touch other paths.
- No cadence rules inside the run — only slug collision gate.
- No post-shape changes at runtime. If a field you want doesn't exist (e.g., `author`), drop it — update `BlogPost.jsx` + `generateMetadata` first in a separate commit.
- On WebSearch/WebFetch/git-push failure mid-run, stop and emit a report. Don't retry aggressively or force-push.
- No false privacy claims about competitors. Only claim "browser-only / no uploads" for operations this site actually performs client-side.

## SUCCESS CRITERIA

- One new file at `src/data/blogPosts/<slug>.json` with unique slug and all required fields populated (`image` may be `null`).
- Optional hero SVG at `public/blog-images/hero-<slug>.svg`.
- Commit pushed to `origin/main` and Vercel production deploy succeeded.
- Live URL renders within ~2–3 minutes of push.
- Exactly ONE hero visible on the live post — not zero, not two.
- Article appears on `/blog` index.
- No duplicate or near-duplicate of existing content.
- No fabricated figures or spec claims.
