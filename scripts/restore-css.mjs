import fs from 'fs';
import cp from 'child_process';

try {
  const content = cp.execSync('git show HEAD:src/components/Layout.jsx', { encoding: 'utf8' });
  const cssMatch = content.match(/<style>\{`([\s\S]*?)`\}<\/style>/);
  
  if (cssMatch && cssMatch[1]) {
    const css = cssMatch[1];
    fs.appendFileSync('src/app/globals.css', '\n/* Restored Layout CSS */\n' + css);
    console.log('Successfully appended layout CSS to globals.css');
  } else {
    console.log('Could not find style tag in Layout.jsx');
  }
} catch (e) {
  console.error(e);
}
