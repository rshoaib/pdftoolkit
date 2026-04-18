"use client";
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import BlogHero from './BlogHero';

// If the content pipeline prepended a bespoke inline <svg> illustration to
// post.content, pull it off the top so we can render it as the hero instead
// of the generated BlogHero. Returns { hero, body } where hero is the SVG
// string (or null) and body is the remaining content.
//
// The hero container is a fixed 16:5 banner (see .blog-post-inline-hero
// below), so we also normalize the extracted <svg> to:
//   - preserveAspectRatio="xMidYMid slice" — crop edges instead of
//     letterboxing when the SVG's natural viewBox is taller than 16:5
//   - width/height stripped — let CSS drive sizing
// so older posts that embedded a 1200x630 (16:9) SVG still fit the
// compact banner cleanly.
function normalizeHeroSvg(svg) {
  if (!svg) return svg;
  let out = svg;
  // Drop any fixed width/height on the root <svg> so CSS can size it.
  out = out.replace(
    /^(<svg\b[^>]*?)\s+width="[^"]*"/i,
    '$1',
  );
  out = out.replace(
    /^(<svg\b[^>]*?)\s+height="[^"]*"/i,
    '$1',
  );
  // Force slice preserveAspectRatio. Replace an existing one or inject.
  if (/preserveAspectRatio=/i.test(out)) {
    out = out.replace(
      /preserveAspectRatio="[^"]*"/i,
      'preserveAspectRatio="xMidYMid slice"',
    );
  } else {
    out = out.replace(/^<svg\b/i, '<svg preserveAspectRatio="xMidYMid slice"');
  }
  return out;
}

function splitLeadingSvg(content) {
  if (!content) return { hero: null, body: '' };
  const trimmed = content.trimStart();
  if (!trimmed.startsWith('<svg')) return { hero: null, body: content };
  // Match the first complete <svg>...</svg> block (non-greedy, multiline).
  const match = trimmed.match(/^<svg\b[\s\S]*?<\/svg>\s*/i);
  if (!match) return { hero: null, body: content };
  return { hero: normalizeHeroSvg(match[0].trim()), body: trimmed.slice(match[0].length) };
}

// Simple markdown-to-HTML converter
function renderMarkdown(md) {
  if (!md) return '';
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/<\/li>\s*<li>/gim, '</li><li>');

  // Wrap consecutive <li> tags in <ul>
  html = html.replace(/(<li>[\s\S]*?<\/li>)/gim, (match) => {
    if (!match.startsWith('<ul>')) return '<ul>' + match + '</ul>';
    return match;
  });

  // Fix nested <ul> issues
  html = html.replace(/<\/ul>\s*<ul>/g, '');

  // Handle tables
  html = html.replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/gim, (match, header, body) => {
    const headers = header.split('|').filter(h => h.trim()).map(h => `<th>${h.trim()}</th>`).join('');
    const rows = body.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
  });

  return '<p>' + html + '</p>';
}

const BlogPost = ({ post }) => {
  // If the post body starts with a bespoke inline SVG, use it as the hero
  // (and drop it from the body) so we don't render two heroes stacked.
  const { hero: inlineHeroSvg, body: contentBody } = splitLeadingSvg(post.content);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            author: { "@type": "Person", name: "Rizwan" },
            publisher: {
              "@type": "Organization",
              name: "Tiny PDF Tools",
              logo: { "@type": "ImageObject", url: "https://tinypdftools.com/favicon.svg" }
            }
          })
        }}
      />
      <div className="blog-post-nav">
        <Link href="/blog" className="blog-back-link">
          <ArrowLeft size={16} /> All Posts
        </Link>
        <button className="blog-share-btn" onClick={handleShare}>
          <Share2 size={16} /> Share
        </button>
      </div>

      <article className="blog-post-article">
        <header className="blog-post-header">
          <span className="blog-post-category">{post.category}</span>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span><Calendar size={14} /> {post.displayDate}</span>
            <span><Clock size={14} /> {post.readTime}</span>
          </div>
        </header>

        {inlineHeroSvg ? (
          <div
            className="blog-post-inline-hero"
            dangerouslySetInnerHTML={{ __html: inlineHeroSvg }}
          />
        ) : (
          <BlogHero slug={post.slug} title={post.title} category={post.category} variant="hero" />
        )}

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(contentBody) }}
        />

        {post.relatedToolLink && (
          <div className="blog-post-cta">
            <Link href={post.relatedToolLink} className="btn-primary">
              Try {post.relatedToolName} →
            </Link>
          </div>
        )}
      </article>

      <style>{`
        .blog-post-page {
          max-width: 760px;
          margin: 0 auto;
          width: 100%;
        }
        .blog-post-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xl);
        }
        .blog-back-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .blog-back-link:hover {
          color: var(--primary);
        }
        .blog-share-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          transition: var(--transition-fast);
        }
        .blog-share-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .blog-post-header {
          margin-bottom: var(--spacing-xl);
        }
        .blog-post-category {
          display: inline-block;
          padding: 4px 12px;
          background: var(--primary-glow);
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-md);
        }
        .blog-post-title {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.5px;
          margin-bottom: var(--spacing-md);
        }
        .blog-post-meta {
          display: flex;
          gap: var(--spacing-lg);
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .blog-post-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .blog-post-content {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-main);
        }
        .blog-post-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: var(--spacing-xl) 0 var(--spacing-md);
        }
        .blog-post-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: var(--spacing-lg) 0 var(--spacing-sm);
        }
        .blog-post-content p {
          margin-bottom: var(--spacing-md);
        }
        .blog-post-content strong {
          color: var(--text-main);
          font-weight: 700;
        }
        .blog-post-content blockquote {
          border-left: 3px solid var(--primary);
          padding: var(--spacing-sm) var(--spacing-lg);
          margin: var(--spacing-md) 0;
          background: var(--bg-surface);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-style: italic;
          color: var(--text-muted);
        }
        .blog-post-content ul, .blog-post-content ol {
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }
        .blog-post-content li {
          margin-bottom: var(--spacing-xs);
        }
        .blog-post-content code {
          background: var(--bg-surface);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
          color: var(--primary);
        }
        .blog-post-content a {
          color: var(--primary);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-post-content a:hover {
          text-decoration-thickness: 2px;
        }
        .blog-post-content table {
          width: 100%;
          border-collapse: collapse;
          margin: var(--spacing-md) 0;
          font-size: 0.95rem;
        }
        .blog-post-content th, .blog-post-content td {
          padding: 10px 14px;
          border: 1px solid var(--border-light);
          text-align: left;
        }
        .blog-post-content th {
          background: var(--bg-surface);
          font-weight: 600;
        }
        .blog-post-cta {
          display: flex;
          justify-content: center;
          margin: var(--spacing-xxl) 0;
        }
        .blog-post-inline-hero {
          width: 100%;
          aspect-ratio: 16 / 5;
          max-height: 260px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: var(--spacing-xl);
          background: var(--bg-surface);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .blog-post-inline-hero svg {
          display: block;
          width: 100%;
          height: 100%;
          /* The SVG itself carries preserveAspectRatio="xMidYMid slice"
             (set by splitLeadingSvg when the post content leads with an
             inline SVG) so scenes centered in the viewBox stay readable
             even when the container clips a taller natural aspect. */
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
