import fs from 'fs';
const content = fs.readFileSync('scripts/build_error2.txt', 'utf8');
const lines = content.split('\n');
const errorLines = [];
let capture = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('Error:') || line.includes('error on') || line.includes('ReferenceError')) {
    capture = true;
    errorLines.push(line);
    // capture next 30 lines
    for (let j = 1; j <= 30; j++) {
      if (lines[i+j]) errorLines.push(lines[i+j].trim());
    }
    break;
  }
}
console.log(errorLines.join('\n'));
