import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getAllPosts } from '../lib/blogService';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="tool-page">
      <div className="tool-header">
        <h1 className="tool-title">Blog</h1>
        <p className="tool-desc">Tips, tutorials, and guides for working with PDFs.</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
          Loading posts…
        </div>
      ) : posts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
          No posts yet. Check back soon!
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
              {post.image && (
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
              )}
              <div className="blog-card-body">
                <span className="blog-card-category">{post.category}</span>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span><Calendar size={14} /> {post.displayDate}</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                </div>
                <div className="blog-card-cta">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: var(--spacing-lg);
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
          text-decoration: none;
          color: inherit;
        }
        .blog-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-3px);
        }
        .blog-card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .blog-card:hover .blog-card-image img {
          transform: scale(1.05);
        }
        .blog-card-body {
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          flex: 1;
        }
        .blog-card-category {
          display: inline-block;
          align-self: flex-start;
          padding: 3px 10px;
          background: var(--primary-glow);
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blog-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.4;
        }
        .blog-card-excerpt {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          flex: 1;
        }
        .blog-card-meta {
          display: flex;
          gap: var(--spacing-md);
          font-size: 0.8rem;
          color: var(--text-dim);
        }
        .blog-card-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .blog-card-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: var(--spacing-sm);
          transition: var(--transition-fast);
        }
        .blog-card:hover .blog-card-cta {
          gap: 10px;
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogList;
