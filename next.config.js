/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Duplicate blog post consolidation — 301 redirects to canonical versions
      {
        source: '/blog/how-to-fix-a-rotated-pdf-scan',
        destination: '/blog/how-to-fix-rotated-pdf-scan',
        permanent: true,
      },
      {
        source: '/blog/best-free-pdf-tools-online',
        destination: '/blog/best-free-pdf-tools-online-2026',
        permanent: true,
      },
      {
        source: '/blog/how-to-organize-rearrange-pdf-pages-free',
        destination: '/blog/how-to-organize-pdf-pages-online-free',
        permanent: true,
      },
      {
        source: '/blog/how-to-add-watermark-to-pdf-free',
        destination: '/blog/how-to-watermark-pdf-online-free',
        permanent: true,
      },
      {
        source: '/blog/convert-images-to-pdf-free',
        destination: '/blog/how-to-convert-images-to-pdf-online-free',
        permanent: true,
      },
      {
        source: '/blog/convert-pdf-to-image-jpg-png',
        destination: '/blog/pdf-to-image-convert-pdf-to-png-jpg',
        permanent: true,
      },
      {
        source: '/blog/how-to-split-pdf-pages-free',
        destination: '/blog/how-to-split-pdf-online-free',
        permanent: true,
      },
      {
        source: '/blog/how-to-rotate-pdf-pages',
        destination: '/blog/how-to-rotate-pdf-online-free',
        permanent: true,
      },
      {
        source: '/blog/pdf-security-best-practices-2026',
        destination: '/blog/pdf-security-guide-watermark-encrypt-flatten',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
