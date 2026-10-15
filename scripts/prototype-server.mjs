// Serves design/prototype.html with its /_blob/<hash> image references mapped to design-system assets,
// so the prototype renders fully (the bundle ships without its images). Reference tool only.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const A = (p) => path.join(root, 'design/design-system/assets', p);
const BLOBS = {
  // logo submark (header, hero watermark)
  '8776f353': A('Logos/ruyat-logo-submark.svg'),
  'b0e940d2': A('Logos/ruyat-logo-submark.svg'),
  'ef502559': A('Logos/ruyat-logo-submark.svg'),
  // about card + footer
  'a925c67c': A('Logos/ruyat-logo-primary-white.svg'),
  '91d18464': A('Logos/ruyat-logo-primary-white.svg'),
  'ec04a0ff': A('Logos/ruyat-logo-primary-white.svg'),
  '1cdc958d': A('Logos/ruyat-logo-primary-white.svg'),
  '6bf88ac0': A('Logos/ruyat-logo-primary-white.svg'),
  'f0c7c907': A('Logos/ruyat-logo-primary-white.svg'),
  // partners
  '9da74921': A('Partners/al-faisal/alfaisal-logo-ar.svg'),
  '9d3316cb': A('Logos/ruyat-logo-secondary-white.svg'),
  'fca6c170': A('Partners/ruyat-shams/ruyat-shams-1-full.svg'),
  // hero slides 1..3 (desktop, tablet, mobile)
  'f545b2c2': A('Hero/hero-skyline.jpg'), '566badcd': A('Hero/hero-skyline.jpg'), '85617508': A('Hero/hero-skyline.jpg'),
  '08863791': A('Hero/hero-business-handshake.jpg'), 'db2376c7': A('Hero/hero-business-handshake.jpg'), 'c7bf51d7': A('Hero/hero-business-handshake.jpg'),
  'cf9a9167': A('Hero/hero-umrah-kaaba.jpg'), '9c8299f6': A('Hero/hero-umrah-kaaba.jpg'),
};
const TYPES = { '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.html': 'text/html' };

const port = Number(process.argv[2] || 4399);
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  let file;
  if (url.pathname.startsWith('/_blob/')) file = BLOBS[url.pathname.slice(7, 15)];
  else if (url.pathname === '/') file = path.join(root, 'design/prototype.html');
  if (!file || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`prototype on http://localhost:${port}/`));
