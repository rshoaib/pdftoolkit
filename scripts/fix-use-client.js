import fs from 'fs';
import path from 'path';

const srcComp = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(srcComp).filter(f => f.endsWith('.jsx'));

for (const f of files) {
  const compPath = path.join(srcComp, f);
  let content = fs.readFileSync(compPath, 'utf8');
  
  if (content.match(/import.*\{.*use(State|Effect|Ref|Callback|Context|Memo).*\}/)) {
    if (!content.startsWith('"use client";')) {
      content = '"use client";\n' + content;
      fs.writeFileSync(compPath, content);
      console.log(`Added "use client" to ${f}`);
    }
  }
}
