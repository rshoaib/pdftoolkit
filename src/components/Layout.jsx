import { Moon, Sun, FileText, Coffee, Github } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import AdSlot from './AdSlot';
import CookieConsent from './CookieConsent';

const Layout = ({ children, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="layout">
      <header className="header">
        <div className="logo-container" onClick={() => onNavigate && onNavigate('/')} style={{ cursor: 'pointer' }}>
          <div className="logo-icon">
            <FileText size={24} />
          </div>
          <div className="logo-text">
            Tiny<span className="text-highlight">PDFTools</span>
          </div>
        </div>
        <nav className="nav">
          <button className="theme-btn" onClick={toggleTheme} title="Toggle Theme" aria-label="Toggle dark mode">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/'); }} className="nav-link">Home</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/about'); }} className="nav-link">About</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/contact'); }} className="nav-link">Contact</a>
          <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/blog'); }} className="nav-link">Blog</a>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <CookieConsent />

      <AdSlot format="responsive" slot={import.meta.env.VITE_AD_SLOT_FOOTER || ''} className="footer-ad" />

      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Tiny PDF Tools. 100% Client-Side Privacy.
        </p>
        <div className="footer-links">
          <a href="https://www.buymeacoffee.com/rshoaib" target="_blank" rel="noopener noreferrer" className="footer-link coffee-link">
            <Coffee size={16} /> <span>Donate</span>
          </a>
          <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/privacy'); }} className="footer-link">Privacy Policy</a>
          <a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/terms'); }} className="footer-link">Terms</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/contact'); }} className="footer-link">Contact</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/about'); }} className="footer-link">About Us</a>
          <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/blog'); }} className="footer-link">Blog</a>
        </div>
      </footer>

      <div className="quick-links">
        <span>PDF Tools:</span>
        <a href="/merge-pdf" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/merge-pdf'); }}>Merge PDF</a>
        <a href="/split-pdf" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/split-pdf'); }}>Split PDF</a>
        <a href="/compress-pdf" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/compress-pdf'); }}>Compress PDF</a>
        <a href="/pdf-to-image" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/pdf-to-image'); }}>PDF to Image</a>
        <a href="/image-to-pdf" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/image-to-pdf'); }}>Image to PDF</a>
        <a href="/rotate-pdf" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/rotate-pdf'); }}>Rotate PDF</a>
        <a href="/protect-pdf" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/protect-pdf'); }}>Protect PDF</a>
        <a href="/watermark-pdf" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('/watermark-pdf'); }}>Watermark PDF</a>
      </div>

      <div className="quick-links" style={{ borderTop: 'none', paddingTop: '0' }}>
        <span>Our Other Tools:</span>
        <a href="https://onlineimageshrinker.com" target="_blank" rel="noopener noreferrer">Image Shrinker</a>
        <a href="https://dailysmartcalc.com" target="_blank" rel="noopener noreferrer">Smart Calculators</a>
        <a href="https://mycalcfinance.com" target="_blank" rel="noopener noreferrer">Finance Calculators</a>
        <a href="https://legalpolicygen.com" target="_blank" rel="noopener noreferrer">Legal Policy Generator</a>
        <a href="https://imrizwan.com" target="_blank" rel="noopener noreferrer">Developer Blog</a>
      </div>

      <style>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--spacing-xl);
          height: 72px;
          border-bottom: 1px solid var(--border-light);
          background-color: var(--bg-panel);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient);
          border-radius: var(--radius-md);
          color: #fff;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .text-highlight {
          color: var(--primary);
        }

        .nav {
          display: flex;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .theme-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .theme-btn:hover {
          background: var(--bg-surface);
          color: var(--text-main);
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-main);
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .footer {
          border-top: 1px solid var(--border-light);
          padding: var(--spacing-lg) var(--spacing-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 0.875rem;
          background-color: var(--bg-panel);
        }

        .footer-link {
          color: var(--text-muted);
          transition: var(--transition-fast);
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          padding: 0;
        }
        .footer-link:hover {
          color: var(--primary);
        }

        .coffee-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #FFDD00;
        }
        .coffee-link:hover {
          color: #FFC000;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .quick-links {
          padding: 20px var(--spacing-xl);
          background: var(--bg-surface);
          border-top: 1px solid var(--border-light);
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .quick-links a {
          color: var(--text-muted);
          text-decoration: none;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          transition: 0.2s;
        }
        .quick-links a:hover {
          background: var(--bg-panel);
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .header {
            padding: 0 var(--spacing-md);
            height: 60px;
          }
          .logo-text {
            font-size: 1.1rem;
          }
          .logo-icon {
            width: 32px;
            height: 32px;
          }
          .logo-icon svg {
            width: 18px;
            height: 18px;
          }
          .nav {
            gap: var(--spacing-md);
            font-size: 0.9rem;
          }
          .footer {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .footer-links {
            justify-content: center;
          }
          .main-content {
            padding: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
