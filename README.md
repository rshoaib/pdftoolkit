# Tiny PDF Tools

Free online PDF tools that run 100% in your browser. No uploads, no accounts — completely private.

**Live:** [tinypdftools.com](https://tinypdftools.com)

## Features

- **Merge PDFs** — Combine multiple PDF files into one
- **Split PDF** — Extract specific pages from a PDF
- **Compress PDF** — Reduce PDF file size
- **PDF to Images** — Convert PDF pages to JPG/PNG
- **Images to PDF** — Convert images into a PDF document

## Tech Stack

- **Frontend:** React 19 + React Router 7
- **Build:** Vite 5
- **PDF Engine:** pdf-lib + pdfjs-dist (client-side)
- **Styling:** Vanilla CSS with dark/light theme
- **Analytics:** Google Analytics 4 (react-ga4)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev        # Start dev server
npm run build      # Production build + sitemap
npm run preview    # Preview production build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```
VITE_GA_ID=G-XXXXXXXXXX
VITE_ADSENSE_CLIENT=
VITE_AD_SLOT_FOOTER=
```

## Deployment

Push to `main` → Vercel auto-deploys to [tinypdftools.com](https://tinypdftools.com)
