import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found - Tiny PDF Tools',
  description: 'The page you are looking for does not exist. Try one of our free PDF tools instead.',
};

const popularTools = [
  { name: 'Merge PDF', href: '/merge-pdf', desc: 'Combine multiple PDFs into one' },
  { name: 'Compress PDF', href: '/compress-pdf', desc: 'Reduce PDF file size' },
  { name: 'Split PDF', href: '/split-pdf', desc: 'Extract or separate pages' },
  { name: 'PDF to Image', href: '/pdf-to-image', desc: 'Convert PDF to JPG/PNG' },
  { name: 'Protect PDF', href: '/protect-pdf', desc: 'Add password encryption' },
  { name: 'Sign PDF', href: '/sign-pdf', desc: 'Add your signature to PDF' },
];

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: '72px', fontWeight: 800, margin: 0, color: 'var(--accent, #e8432a)' }}>
        404
      </h1>
      <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '8px 0 16px' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '40px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <div style={{ textAlign: 'left', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
          Try one of our popular tools:
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {popularTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              style={{
                display: 'block',
                padding: '14px 16px',
                borderRadius: '10px',
                border: '1px solid #e5e5e5',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s',
              }}
            >
              <strong style={{ display: 'block', fontSize: '14px' }}>{tool.name}</strong>
              <span style={{ fontSize: '13px', color: '#888' }}>{tool.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '12px 32px',
          background: 'var(--accent, #e8432a)',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '15px',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
