# tinypdftools.com — daily content routine

## Mission

Land **one** meaningful change per run. New site, blog scaffold exists but no posts yet — Lane C dominates early.

## Pre-flight

1. Read `.agents/context/site-context.md` for brand voice + tool URL map.
2. Read `.agents/context/target-keywords.md` for keyword backlog.
3. Posts dir: inspect `src/app/blog/` to discover post storage. Branch: `main`.

## Priority lanes — pick the FIRST lane with work to do

### Lane A — Refresh stuck content
Once posts exist: heuristic = `date` ≥30 days old. Refresh tool comparisons (other free PDF tools come and go), browser support for PDF.js features, file size benchmarks.

### Lane B — Internal-link strengthening
Once Lane A is clear: cross-link guides to the relevant on-site PDF tool surfaces.

### Lane C — New post (dominant early)
Pick from `.agents/context/target-keywords.md`. Inspect existing posts first to learn frontmatter shape. Every post pairs with an on-site PDF tool CTA and emphasizes the privacy-first / client-side angle.

## Hard constraints

- Never more than 1 lane per run. Never more than 1 post created.
- Never fabricate browser/spec/PDF format facts. Verify via Adobe PDF spec, ISO 32000, browser caniuse.
- Never delete content. Never force-push. Never `--no-verify`.

## After the change

1. Lint check (if available). Push to `origin/main`.
2. One-paragraph report.

If all lanes clear: one-line skip. Don't manufacture work.
