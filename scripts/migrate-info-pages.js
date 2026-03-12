import fs from 'fs';
import path from 'path';

const pages = [
  { path: 'about', component: 'About' },
  { path: 'contact', component: 'Contact' },
  { path: 'privacy', component: 'Privacy' },
  { path: 'terms', component: 'Terms' },
  { path: 'blog', component: 'BlogList' }
];

const srcApp = path.join(process.cwd(), 'src', 'app');
const srcComp = path.join(process.cwd(), 'src', 'components');

for (const p of pages) {
  const compPath = path.join(srcComp, `${p.component}.jsx`);
  if (!fs.existsSync(compPath)) continue;
  
  let content = fs.readFileSync(compPath, 'utf8');
  
  // Strip SEO
  const titleMatch = content.match(/<SEO[^>]*title=["']([^"']+)["']/);
  const descMatch = content.match(/<SEO[^>]*description=["']([^"']+)["']/);
  const canonicalMatch = content.match(/<SEO[^>]*canonicalUrl=["']([^"']+)["']/);
  
  const title = titleMatch ? titleMatch[1] : '';
  const desc = descMatch ? descMatch[1] : '';
  const canonical = canonicalMatch ? canonicalMatch[1] : '';

  // Add "use client" if needed (these pages might not even need it except for links, but let's be safe)
  if (!content.startsWith('"use client";')) {
    content = `"use client";\n` + content;
    fs.writeFileSync(compPath, content);
  }
  
  // Replace react-router-dom Link with next/link
  content = content.replace(/import \{.*?Link.*?\} from ['"]react-router-dom['"];?/g, `import Link from 'next/link';`);
  fs.writeFileSync(compPath, content);

  const pageDir = path.join(srcApp, p.path);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  
  const pageContent = `import ${p.component} from '../../components/${p.component}';

export const metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${desc.replace(/'/g, "\\'")}',
  alternates: { canonical: '${canonical}' }
};

export default function Page() {
  return <${p.component} />;
}
`;
  
  fs.writeFileSync(path.join(pageDir, 'page.jsx'), pageContent);
  console.log(`Migrated ${p.path}`);
}

// -------------------------------------
// For the dynamic blog route [slug]
// -------------------------------------
const blogPostCompPath = path.join(srcComp, 'BlogPost.jsx');
if (fs.existsSync(blogPostCompPath)) {
  let content = fs.readFileSync(blogPostCompPath, 'utf8');
  
  content = content.replace(/import \{ useParams, Link \} from 'react-router-dom';/g, `import Link from 'next/link';\nimport { useParams } from 'next/navigation';`);
  if (!content.startsWith('"use client";')) {
    content = `"use client";\n` + content;
  }
  fs.writeFileSync(blogPostCompPath, content);

  const slugDir = path.join(srcApp, 'blog', '[slug]');
  if (!fs.existsSync(slugDir)) fs.mkdirSync(slugDir, { recursive: true });

  // For BlogPost, metadata is dynamic, but we can just use generateMetadata if we want later.
  // We'll just render it as a client component for now since it fetches data on the client or uses static JSON.
  const pageContent = `import BlogPost from '../../../components/BlogPost';
export default function Page() {
  return <BlogPost />;
}`;
  fs.writeFileSync(path.join(slugDir, 'page.jsx'), pageContent);
  console.log('Migrated blog/[slug]');
}
