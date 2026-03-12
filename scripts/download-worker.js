import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';
const dest = path.join(process.cwd(), 'public', 'pdf.worker.min.mjs');

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error('Failed to download: ' + res.statusCode);
    return;
  }
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded worker successfully.');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading: ' + err.message);
});
