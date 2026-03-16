"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, FileText, Coffee, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import AdSlot from '../components/AdSlot';
import CookieConsent from '../components/CookieConsent';

export default function ClientLayout({ children }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="layout">
      <header className="header">
        <Link href="/" className="logo-container">
          <div className="logo-icon">
            <FileText size={24} />
          </div>
          <div className="logo-text">
            Tiny<span className="text-gradient">PDFTools</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="nav nav-desktop">
          <button className="theme-btn" onClick={toggleTheme} title="Toggle Theme" aria-label="Toggle dark mode">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
        </nav>

        {/* Mobile controls */}
        <div className="nav-mobile-controls">
          <button className="theme-btn" onClick={toggleTheme} title="Toggle Theme" aria-label="Toggle dark mode">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Mobile drawer menu */}
      <nav className={`mobile-drawer ${menuOpen ? 'mobile-drawer-open' : ''}`}>
        <Link href="/" className="mobile-nav-link">Home</Link>
        <Link href="/about" className="mobile-nav-link">About</Link>
        <Link href="/contact" className="mobile-nav-link">Contact</Link>
        <Link href="/blog" className="mobile-nav-link">Blog</Link>
        <Link href="/merge-pdf" className="mobile-nav-link">Merge PDF</Link>
        <Link href="/compress-pdf" className="mobile-nav-link">Compress PDF</Link>
        <Link href="/split-pdf" className="mobile-nav-link">Split PDF</Link>
        <Link href="/pdf-to-image" className="mobile-nav-link">PDF to Image</Link>
        <Link href="/sign-pdf" className="mobile-nav-link">Sign PDF</Link>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <CookieConsent />

      <AdSlot format="responsive" slot={process.env.NEXT_PUBLIC_AD_SLOT_FOOTER || ''} className="footer-ad" />

      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Tiny PDF Tools. 100% Client-Side Privacy.
        </p>
        <div className="footer-links">
          <a href="https://www.buymeacoffee.com/rshoaib" target="_blank" rel="noopener noreferrer" className="footer-link coffee-link">
            <Coffee size={16} /> <span>Donate</span>
          </a>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/about" className="footer-link">About Us</Link>
          <Link href="/blog" className="footer-link">Blog</Link>
        </div>
      </footer>

      <div className="quick-links">
        <span>PDF Tools:</span>
        <Link href="/merge-pdf">Merge PDF</Link>
        <Link href="/split-pdf">Split PDF</Link>
        <Link href="/compress-pdf">Compress PDF</Link>
        <Link href="/pdf-to-image">PDF to Image</Link>
        <Link href="/image-to-pdf">Image to PDF</Link>
        <Link href="/rotate-pdf">Rotate PDF</Link>
        <Link href="/protect-pdf">Protect PDF</Link>
        <Link href="/unlock-pdf">Unlock PDF</Link>
        <Link href="/watermark-pdf">Watermark PDF</Link>
        <Link href="/organize-pdf">Organize PDF</Link>
        <Link href="/add-page-numbers">Add Page Numbers</Link>
        <Link href="/delete-pdf-pages">Delete Pages</Link>
        <Link href="/flatten-pdf">Flatten PDF</Link>
        <Link href="/sign-pdf">Sign PDF</Link>
      </div>

      <div className="quick-links" style={{ borderTop: 'none', paddingTop: '0' }}>
        <span>Our Other Tools:</span>
        <a href="https://onlineimageshrinker.com" target="_blank" rel="noopener noreferrer">Image Shrinker</a>
        <a href="https://dailysmartcalc.com" target="_blank" rel="noopener noreferrer">Smart Calculators</a>
        <a href="https://mycalcfinance.com" target="_blank" rel="noopener noreferrer">Finance Calculators</a>
        <a href="https://legalpolicygen.com" target="_blank" rel="noopener noreferrer">Legal Policy Generator</a>
        <a href="https://imrizwan.com" target="_blank" rel="noopener noreferrer">Developer Blog</a>
      </div>
    </div>
  );
}
