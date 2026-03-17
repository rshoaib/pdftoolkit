import './globals.css';
import ClientLayout from './ClientLayout';
import { ToastProvider } from '../components/ToastContext';

export const metadata = {
  metadataBase: new URL('https://tinypdftools.com'),
  title: 'Tiny PDF Tools - Free Online PDF Tools | Merge, Split, Compress',
  description: 'Free online PDF tools that run 100% in your browser. Merge, split, compress PDFs, convert PDF to images and images to PDF. No uploads, no accounts — 100% private.',
  openGraph: {
    title: 'Tiny PDF Tools - Free Online PDF Tools',
    description: 'Merge, split, compress PDFs and convert between PDF and images. 100% client-side, no uploads required.',
    url: 'https://tinypdftools.com',
    siteName: 'Tiny PDF Tools',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiny PDF Tools - Free Online PDF Tools',
    description: 'Free PDF tools that run entirely in your browser. No uploads, 100% private.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="zIQyJOap2T4-CAKlwe-RWKcDO7VZlh0nh-khv_TTSjA" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e8432a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3166995085202346" crossOrigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var t = localStorage.getItem('theme');
            if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', t);
          })();
        `}} />
      </head>
      <body>
        <ToastProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ToastProvider>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-20YF1S3X16"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-20YF1S3X16');
        `}} />
      </body>
    </html>
  );
}
