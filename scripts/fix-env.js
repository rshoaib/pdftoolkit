import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const srcDir = path.join(process.cwd(), 'src');
const files = walkDir(srcDir);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('import.meta.env')) {
    content = content.replace(/import\.meta\.env\.VITE_([A-Z0-9_]+)/g, 'process.env.NEXT_PUBLIC_$1');
    fs.writeFileSync(file, content);
    console.log(`Fixed environment variables in ${path.basename(file)}`);
  }
}
