"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { tools } from '../data/tools';

const toolCategories = {
  'merge-pdf': 'organize', 'split-pdf': 'organize', 'organize-pdf': 'organize',
  'delete-pdf-pages': 'organize', 'extract-pdf-pages': 'organize',
  'compress-pdf': 'edit', 'rotate-pdf': 'edit', 'crop-pdf': 'edit',
  'watermark-pdf': 'edit', 'add-page-numbers': 'edit', 'flatten-pdf': 'edit', 'sign-pdf': 'edit',
  'pdf-to-image': 'convert', 'image-to-pdf': 'convert', 'pdf-reader': 'convert',
  'protect-pdf': 'security', 'unlock-pdf': 'security',
};

const popularToolIds = ['merge-pdf', 'split-pdf', 'compress-pdf', 'pdf-to-image', 'protect-pdf', 'sign-pdf'];

const categories = [
  { key: 'all', label: 'All Tools' },
  { key: 'convert', label: 'Convert' },
  { key: 'edit', label: 'Edit' },
  { key: 'security', label: 'Security' },
  { key: 'organize', label: 'Organize' },
];

const ToolCard = ({ tool, index, isFeatured = false }) => (
  <Link
    href={`/${tool.id}`}
    className="tool-card"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <div className="tool-card-icon" style={{ background: `${tool.color}15`, color: tool.color }}>
      <tool.icon size={isFeatured ? 32 : 28} strokeWidth={isFeatured ? 2 : 1.8} />
    </div>
    <div className="tool-card-body">
      <h3 className="tool-card-title">{tool.title}</h3>
      <p className="tool-card-desc">{tool.description}</p>
    </div>
    <div className="tool-card-arrow">
      <ArrowRight size={isFeatured ? 20 : 18} />
    </div>
  </Link>
);

const ToolGrid = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const popularArr = useMemo(() => {
    return popularToolIds.map(id => tools.find(t => t.id === id)).filter(Boolean);
  }, []);

  const otherTools = useMemo(() => {
    return tools.filter(t => !popularToolIds.includes(t.id));
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter(t => {
      const matchesSearch = !search || t.title.toLowerCase().includes(search.toLowerCase())
        || t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || toolCategories[t.id] === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const filteredOtherTools = useMemo(() => {
    return otherTools.filter(t => {
      const matchesSearch = !search || t.title.toLowerCase().includes(search.toLowerCase())
        || t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || toolCategories[t.id] === category;
      return matchesSearch && matchesCategory;
    });
  }, [otherTools, search, category]);

  return (
    <div className="tool-grid-wrapper">
      {/* Search */}
      <div className="search-bar-container">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search 18 free tools... (e.g. merge, compress, sign)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {search ? (
        <section className="search-results-section content-section">
          <h2 className="section-title">Search Results</h2>
          <div className="tools-grid">
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
            {filteredTools.length === 0 && (
              <p className="no-results">No tools match your search &ldquo;{search}&rdquo;.</p>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* POPULAR TOOLS SECTION (Top 6) */}
          <section className="popular-tools-section content-section">
            <h2 className="section-title">Most Popular Tools</h2>
            <div className="tools-grid featured-grid">
              {popularArr.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} isFeatured={true} />
              ))}
            </div>
          </section>

          {/* CATEGORIZED TOOLS TABS (Remaining 12) */}
          <section className="categorized-tools-section content-section">
            <div className="category-header">
              <h2 className="section-title">More PDF Tools</h2>
              <div className="category-tabs">
                {categories.map(c => (
                  <button
                    key={c.key}
                    className={`category-tab ${category === c.key ? 'category-tab-active' : ''}`}
                    onClick={() => setCategory(c.key)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="tools-grid">
              {filteredOtherTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
              {filteredOtherTools.length === 0 && (
                <p className="no-results">No remaining tools in this category.</p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ToolGrid;
