import { promisify } from 'node:util';
import { execFile as _execFile } from 'node:child_process';
import path from 'node:path';
import sharp from 'sharp';

const execFile = promisify(_execFile);
const DIR = path.resolve('public/assets/images');
const curl = (u) => execFile('curl', ['-sL', '--max-time', '40', u], { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024 }).then((r) => r.stdout);

// name -> {kw, lock, w, h}. loremflickr first, picsum fallback.
const PHOTOS = {
  mou1: ['handshake,business', 71, 1000, 750],
  mou2: ['signing,document,pen', 72, 1000, 750],
  mou3: ['conference,meeting,people', 73, 1000, 750],
  mou4: ['partnership,agreement', 74, 1000, 750],
  'award1a': ['chef,competition', 81, 800, 500], 'award1b': ['cooking,contest', 82, 800, 500], 'award1c': ['culinary,award', 83, 800, 500],
  'award2a': ['trophy,award', 84, 800, 500], 'award2b': ['ceremony,award', 85, 800, 500], 'award2c': ['medal,winner', 86, 800, 500],
  'award3a': ['handshake,partnership', 87, 800, 500], 'award3b': ['business,meeting', 88, 800, 500], 'award3c': ['contract,signing', 89, 800, 500],
  'award4a': ['graduation,students', 90, 800, 500], 'award4b': ['celebration,success', 91, 800, 500], 'award4c': ['students,campus', 92, 800, 500],
  'award5a': ['bakery,cake', 93, 800, 500], 'award5b': ['pastry,dessert', 94, 800, 500], 'award5c': ['bread,baking', 95, 800, 500],
};

async function fetchPhoto(name, [kw, lock, w, h]) {
  // try loremflickr, then picsum seeded
  const urls = [
    `https://loremflickr.com/${w}/${h}/${kw}?lock=${lock}`,
    `https://picsum.photos/seed/${name}${lock}/${w}/${h}`,
  ];
  for (const u of urls) {
    try {
      const buf = await curl(u);
      if (buf.length < 1500) throw new Error('tiny ' + buf.length);
      await sharp(buf).png({ quality: 90 }).toFile(path.join(DIR, `${name}.png`));
      return `${name} OK (${u.includes('picsum') ? 'picsum' : 'flickr'})`;
    } catch (e) { /* try next */ }
  }
  return `${name} FAILED`;
}

// ---- Badge logos for ICF & HRAEI (generated placeholders) ----
function badgeSVG({ acronym, full, sub }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1656C4"/><stop offset="1" stop-color="#0b2e6b"/>
    </linearGradient></defs>
    <circle cx="250" cy="250" r="230" fill="url(#g)"/>
    <circle cx="250" cy="250" r="230" fill="none" stroke="#ffffff" stroke-width="6" stroke-opacity="0.5"/>
    <circle cx="250" cy="250" r="200" fill="none" stroke="#7ba7ec" stroke-width="2"/>
    <text x="250" y="235" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="96" font-weight="700" fill="#ffffff" letter-spacing="4">${acronym}</text>
    <text x="250" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#cfe0fb" letter-spacing="2">EST · INDIA</text>
    <text x="250" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="21" font-weight="600" fill="#ffffff">${full}</text>
    <text x="250" y="388" text-anchor="middle" font-family="Arial, sans-serif" font-size="21" font-weight="600" fill="#ffffff">${sub}</text>
  </svg>`;
}

async function makeLogo(name, opts) {
  await sharp(Buffer.from(badgeSVG(opts))).png().toFile(path.join(DIR, `${name}.png`));
  return `${name}.png logo generated`;
}

async function run() {
  const results = [];
  const entries = Object.entries(PHOTOS);
  const POOL = 4; let i = 0;
  async function worker() { while (i < entries.length) { const [n, spec] = entries[i++]; results.push(await fetchPhoto(n, spec)); } }
  await Promise.all(Array.from({ length: POOL }, worker));

  results.push(await makeLogo('icf', { acronym: 'ICF', full: 'Indian Culinary', sub: 'Forum' }));
  results.push(await makeLogo('hraei', { acronym: 'HRAEI', full: 'Hotel & Restaurant Assn.', sub: 'of Eastern India' }));

  const fails = results.filter((r) => r.includes('FAILED'));
  console.log(results.join('\n'));
  console.log(`\nTOTAL ${results.length}, FAILED ${fails.length}`);
}
run().catch((e) => { console.error(e); process.exit(1); });
