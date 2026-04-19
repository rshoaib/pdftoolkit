# Tiny PDF Tools

Free online PDF tools that run 100% in your browser. No uploads, no accounts — completely private.

**Live:** [tinypdftools.com](https://tinypdftools.com)

## Features

- **Merge / Split / Compress** PDFs
- **PDF ↔ Images** (JPG, PNG, WebP)
- **Rotate / Crop / Organize / Extract / Delete** pages
- **Protect / Unlock** with AES-256
- **Watermark / Sign / Flatten / Add Page Numbers**
- **PDF Reader** (zoom, navigate, search)

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **PDF Engine:** pdf-lib + pdfjs-dist (client-side)
- **Blog:** static JSON files in `src/data/blogPosts/` (no backend)
- **Styling:** Vanilla CSS with dark/light theme
- **Icons:** lucide-react
- **Analytics:** Google Analytics 4 (react-ga4)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev        # Start Next dev server
npm run build      # Production build
npm run start      # Serve production build locally
npm run ping       # Ping search engines with sitemap
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values for analytics / ads. The site has no backend and requires no secrets to run.

## Blog

Blog posts live as JSON files under `src/data/blogPosts/` and are bundled at build time. To add a post, drop a `<slug>.json` file matching the shape used by `src/lib/blogService.js`, commit, and push. See `CONTENT_PIPELINE.md` for the full authoring workflow.

## Deployment

Push to `main` → Vercel auto-deploys to [tinypdftools.com](https://tinypdftools.com).
