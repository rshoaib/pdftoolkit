# tinypdftools.com — Site Context

> **URL**: https://tinypdftools.com
> **Stack**: Next.js
> **Niche**: Free in-browser PDF tools — merge, split, compress, convert, edit
> **Audience**: Privacy-conscious users handling PDFs (legal, medical, financial docs)
> **Differentiator**: 100% client-side — files never upload anywhere

## 🎤 Brand Voice

- **Tone**: Practical, privacy-aware, helpful. The opposite of "upload your sensitive PDF to our servers".
- **Style**: Lead with the use case. Compare to upload-based tools and call out the privacy benefit explicitly.
- **Address**: Second person. Audience is regular users with occasional PDF tasks.
- **Values**: Privacy-first, free, no signup, no watermarks.

## 🎯 Content Pillars

| Pillar | Topics |
|---|---|
| PDF Manipulation | merge, split, rotate, reorder pages |
| PDF Compression | how it works, quality vs size tradeoffs |
| PDF Conversion | PDF to/from Word, Excel, PowerPoint, JPG, PNG |
| PDF Security | password protect, redact, sign |
| Comparisons | vs Adobe Acrobat, vs SmallPDF, vs ILovePDF (privacy angle) |
| Use cases | tax returns, contracts, medical records, legal filings |

## 🔗 Internal Link Patterns

Every guide should link to the on-site tool that handles the task ("merge PDFs", "compress PDF", etc.). Cross-link related guides.

## 📝 Frontmatter Convention

Inspect `src/app/blog/` once posts exist — match whatever shape the first post uses.

## Privacy callout (use in every post)

Brief callout box near the top, e.g.: "Unlike most PDF tools, this one runs entirely in your browser — your file never uploads to a server."
