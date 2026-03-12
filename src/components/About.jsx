"use client";
import { Shield, Zap, Lock, Globe, Heart, Code } from 'lucide-react';

const features = [
  { icon: Lock, title: '100% Private', desc: 'Your files never leave your browser. Zero server uploads, zero data retention.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'All processing happens instantly on your device using modern JavaScript.' },
  { icon: Shield, title: 'No Sign Up', desc: 'No accounts, no emails, no tracking — just open a tool and start working.' },
  { icon: Globe, title: 'Works Everywhere', desc: 'Any modern browser on desktop, tablet, or phone. No software to install.' },
  { icon: Heart, title: 'Always Free', desc: 'Every tool is completely free with no usage limits, no daily caps, no premium tiers.' },
  { icon: Code, title: 'Open Technology', desc: 'Built with pdf-lib, PDF.js, and React — trusted, battle-tested open-source libraries.' },
];

const About = () => (
  <div className="static-page">
    <h1>Our Story & Mission</h1>
    <p className="about-intro">
      Tiny PDF Tools is a free, privacy-first collection of 16 professional PDF tools that run entirely in your web browser.
      Built with modern web technologies, every operation happens client-side — your files are never uploaded to any server, ever.
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
        Most PDF tools on the internet require you to upload your files to remote servers, create an account, and pay a monthly fee.
        We built Tiny PDF Tools to prove that high-quality PDF processing can happen entirely in your browser — with no hidden costs, no file size limits, and no risk of your data being stored or shared.
      </p>
      <p>
        Our goal is simple: provide every PDF operation a professional or student could need, entirely in the browser, at zero cost.
        Whether you are merging contracts, signing agreements, encrypting financial reports, or compressing files for email, you should not have to upload sensitive documents to a third-party server.
      </p>
    </section>

    <section>
      <h2>The Problem We Solve</h2>
      <p>
        Every day, millions of people share contracts, invoices, medical records, and legal filings as PDFs.
        Yet the most popular tools for editing these documents — Adobe Acrobat, Smallpdf, iLovePDF — require you to upload files to their servers for processing.
        That means your sensitive documents pass through infrastructure you cannot audit or control.
      </p>
      <p>
        Tiny PDF Tools takes a fundamentally different approach. By leveraging the power of modern browsers and JavaScript libraries like <strong>pdf-lib</strong> and <strong>PDF.js</strong>, we perform every operation locally on your device.
        You can verify this yourself by opening Developer Tools (F12 → Network tab) and checking for file uploads — you will find zero.
      </p>
    </section>

    <section>
      <h2>Technology</h2>
      <p>
        Tiny PDF Tools is built with <strong>React</strong> for the user interface, <strong>pdf-lib</strong> for PDF manipulation (merging, splitting, watermarking, encrypting, and more), and <strong>PDF.js</strong> for rendering page previews.
        The site is hosted on <strong>Vercel's</strong> edge network for lightning-fast load times worldwide. All processing logic runs in your browser's JavaScript engine — no backend server is involved in any file operation.
      </p>
    </section>

    <section>
      <h2>Who We Are</h2>
      <p>
        Tiny PDF Tools is maintained by a software developer passionate about building useful, privacy-respecting web tools.
        The project started from a personal need: editing PDFs without giving sensitive documents to third-party servers.
        What began as a single merge tool has grown into a full suite of 16 professional PDF utilities, used by students, freelancers, office workers, and businesses around the world.
      </p>
      <p>
        Have ideas for new tools or improvements? We would love to hear from you — visit our <a href="/contact">Contact page</a> to get in touch.
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
      .static-page a { color: var(--primary); text-decoration: underline; }
    `}</style>
  </div>
);
export default About;
