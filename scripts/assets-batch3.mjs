import { promisify } from 'node:util';
import { execFile as _execFile } from 'node:child_process';
import path from 'node:path';
import sharp from 'sharp';
import { PLACEMENTS_BY_YEAR, firstNameSlug, companySlug } from '../src/data/content.js';

const execFile = promisify(_execFile);
const DIR = path.resolve('public/assets/images');
const curl = (u) => execFile('curl', ['-sL', '--max-time', '40', u], { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024 }).then((r) => r.stdout);
const hash = (s) => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function savePortrait(name, id, w = 480, h = 560) {
  for (let a = 0; a < 3; a++) {
    try {
      const buf = await curl(`https://i.pravatar.cc/512?img=${((id + a * 7) % 70) + 1}`);
      if (buf.length < 1200) throw new Error('tiny');
      await sharp(buf).resize(w, h, { fit: 'cover', position: 'top' }).png().toFile(path.join(DIR, `${name}.png`));
      return true;
    } catch { /* retry */ }
  }
  return false;
}

async function savePhoto(name, kw, lock, w, h) {
  const urls = [`https://loremflickr.com/${w}/${h}/${kw}?lock=${lock}`, `https://picsum.photos/seed/${name}${lock}/${w}/${h}`];
  for (const u of urls) {
    try { const buf = await curl(u); if (buf.length < 1500) throw 0; await sharp(buf).png().toFile(path.join(DIR, `${name}.png`)); return true; } catch { /* next */ }
  }
  return false;
}

function wordmarkSVG(nameRaw) {
  const name = nameRaw.replace(/,/g, '');
  const fs = Math.max(17, Math.min(34, Math.floor(760 / name.length)));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="140" viewBox="0 0 440 140">
    <rect width="440" height="140" rx="16" fill="#ffffff"/>
    <rect x="20" y="18" width="46" height="6" rx="3" fill="#1656C4"/>
    <text x="20" y="86" font-family="Georgia, 'Times New Roman', serif" font-size="${fs}" font-weight="700" fill="#0b2e6b">${esc(name)}</text>
    <text x="20" y="116" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#7ba7ec" letter-spacing="2">RECRUITER</text>
  </svg>`;
}

async function run() {
  const log = [];

  // 1. Testimonial portraits (gender-matched picks)
  const testis = [['testimonial1', 47], ['testimonial2', 13], ['testimonial3', 44], ['testimonial4', 68], ['testimonial5', 5]];
  for (const [n, id] of testis) log.push(`${n}:${await savePortrait(n, id)}`);

  // 2. Student portraits (unique first names) + company wordmark logos
  const firstNames = new Set();
  const companies = new Set();
  for (const list of Object.values(PLACEMENTS_BY_YEAR)) {
    for (const [student, company] of list) { firstNames.add(firstNameSlug(student)); companies.add(company); }
  }
  let sOK = 0, sFail = 0;
  for (const fn of firstNames) {
    const ok = await savePortrait(fn, hash(fn) % 70, 400, 480);
    ok ? sOK++ : sFail++;
  }
  for (const c of companies) {
    await sharp(Buffer.from(wordmarkSVG(c))).png().toFile(path.join(DIR, `${companySlug(c)}.png`));
  }
  log.push(`students ok=${sOK} fail=${sFail} (of ${firstNames.size}); companyLogos=${companies.size}`);

  // 3. Vocational rotator images
  const voc = [
    ['vocation1a', 'catering,food', 301], ['vocation1b', 'chef,kitchen', 302], ['vocation1c', 'banquet,buffet', 303],
    ['vocation2a', 'travel,airport', 304], ['vocation2b', 'tourism,hotel', 305], ['vocation2c', 'reception,hotel', 306],
  ];
  for (const [n, kw, lk] of voc) log.push(`${n}:${await savePhoto(n, kw, lk, 800, 500)}`);

  // 4. Vision + aviation lab
  log.push(`vision:${await savePhoto('vision', 'graduation,students,success', 311, 1000, 750)}`);
  log.push(`lab-aviation:${await savePhoto('lab-aviation', 'airplane,cabin,aircraft', 312, 800, 600)}`);

  console.log(log.join('\n'));
}
run().catch((e) => { console.error(e); process.exit(1); });
