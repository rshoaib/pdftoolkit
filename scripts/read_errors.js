const fs = require('fs');
const content = fs.readFileSync('scripts/build_error2.txt', 'utf8');
const lines = content.split('\n');
const errorLines = [];
let capture = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('Error:') || line.includes('error on')) {
    capture = true;
    errorLines.push(line);
    // capture next 10 lines
    for (let j = 1; j <= 20; j++) {
      if (lines[i+j]) errorLines.push(lines[i+j]);
    }
    break;
  }
}
console.log(errorLines.join('\n'));
