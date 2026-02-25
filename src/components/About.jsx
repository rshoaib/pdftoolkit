import { Shield, Zap, Lock, Globe } from 'lucide-react';

const features = [
  { icon: Lock, title: '100% Private', desc: 'Your files never leave your browser. Zero server uploads.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'All processing happens instantly on your device.' },
  { icon: Shield, title: 'No Sign Up', desc: 'No accounts, no emails, no tracking — just tools.' },
  { icon: Globe, title: 'Works Everywhere', desc: 'Any modern browser on desktop, tablet, or phone.' },
];

const About = () => (
  <div className="static-page">
    <h1>About PDF Toolkit</h1>
    <p className="about-intro">
      PDF Toolkit is a free, privacy-first collection of PDF tools that run entirely in your web browser.
      Built with modern web technologies, every operation happens client-side — your files are never uploaded to any server.
    </p>

    <div className="about-features">
      {features.map((f, i) => (
        <div key={i} className="about-feature">
          <div className="about-feature-icon">
            <f.icon size={24} />
          </div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>

    <section>
      <h2>Our Mission</h2>
      <p>
        We believe essential document tools should be free, private, and accessible to everyone.
        No hidden fees, no file size limits, no data collection. Just fast, reliable PDF tools.
      </p>
    </section>

    <section>
      <h2>Technology</h2>
      <p>
        Built with React, pdf-lib, and PDF.js — all open-source libraries.
        Hosted on Vercel's edge network for lightning-fast load times worldwide.
      </p>
    </section>

    <style>{`
      .static-page { max-width: 720px; margin: 0 auto; line-height: 1.8; }
      .static-page h1 { font-size: 2rem; font-weight: 800; margin-bottom: var(--spacing-md); }
      .about-intro { font-size: 1.1rem; color: var(--text-muted); margin-bottom: var(--spacing-xl); }
      .about-features {
        display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: var(--spacing-lg); margin-bottom: var(--spacing-xxl);
      }
      .about-feature {
        padding: var(--spacing-lg); background: var(--bg-panel);
        border: 1px solid var(--border-light); border-radius: var(--radius-md);
        text-align: center;
      }
      .about-feature-icon {
        width: 48px; height: 48px; margin: 0 auto var(--spacing-sm);
        display: flex; align-items: center; justify-content: center;
        background: var(--primary-glow); color: var(--primary);
        border-radius: var(--radius-full);
      }
      .about-feature h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
      .about-feature p { font-size: 0.85rem; color: var(--text-muted); }
      .static-page section { margin-bottom: var(--spacing-xl); }
      .static-page h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: var(--spacing-sm); }
    `}</style>
  </div>
);
export default About;
