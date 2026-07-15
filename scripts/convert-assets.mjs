// One-off asset pipeline:
//  • photographic placeholders  -> real online photos (loremflickr / pravatar) -> PNG
//  • accreditation / brand marks -> faithful rasterization of the existing SVG -> PNG
//  • hero1..hero4                -> rotating hero backdrops (task: auto-rotating hero)
// After a PNG is produced for a given base name, the matching .svg is deleted.
import { promisify } from 'node:util';
import { execFile as _execFile } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const execFile = promisify(_execFile);
const DIR = path.resolve('public/assets/images');
const curl = (url) => execFile('curl', ['-sL', '--max-time', '40', url], { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024 }).then((r) => r.stdout);

// keyword + size for each photographic asset ---------------------------------
const lf = (kw, lock, w = 800, h = 600) => ({ url: `https://loremflickr.com/${w}/${h}/${kw}?lock=${lock}` });
const banner = (kw, lock) => lf(kw, lock, 1200, 800);

const PHOTOS = {
  // hero backdrops (auto-rotating)
  'hero1': lf('luxury,hotel,lobby', 11, 1600, 900),
  'hero2': lf('fine,dining,restaurant', 12, 1600, 900),
  'hero3': lf('chef,gourmet,kitchen', 13, 1600, 900),
  'hero4': lf('hotel,resort,pool', 14, 1600, 900),
  'hero-hospitality': lf('luxury,hotel,hospitality', 15, 1600, 900),
  // wide banners / feature images
  'about-campus': banner('hotel,building,campus', 21),
  'admissions-cta': banner('hotel,reception,welcome', 22),
  'programme-bhm': banner('hospitality,students,hotel', 23),
  'page-band': banner('hotel,texture,gold', 24),
  'industry': banner('luxury,hotel,interior', 25),
  'placements': banner('business,interview,handshake', 26),
  'research': banner('library,study,books', 27),
  'experiential': banner('chef,cooking,training', 28),
  'student-life': banner('students,celebration,campus', 29),
  // gallery
  'gallery-1': lf('restaurant,chef', 31), 'gallery-2': lf('bakery,dessert', 32),
  'gallery-3': lf('fine,dining', 33), 'gallery-4': lf('lecture,seminar', 34),
  'gallery-5': lf('hotel,luxury', 35), 'gallery-6': lf('festival,event', 36),
  'gallery-7': lf('banquet,buffet', 37), 'gallery-8': lf('cocktail,bar', 38),
  'gallery-9': lf('waiter,service', 39),
  // laboratories
  'lab-bakery': lf('bakery,pastry', 41), 'lab-foodproduction': lf('kitchen,cooking', 42),
  'lab-frontoffice': lf('hotel,reception,desk', 43), 'lab-housekeeping': lf('hotel,bedroom,bed', 44),
  'lab-kitchen': lf('chef,professional,kitchen', 45), 'lab-mockhotel': lf('hotel,lobby', 46),
  'lab-restaurant': lf('restaurant,dining,table', 47), 'lab-software': lf('computer,office,desk', 48),
  // specializations
  'spec-airline': lf('airplane,cabin,crew', 51), 'spec-bakery': lf('bread,bakery', 52),
  'spec-cruise': lf('cruise,ship,ocean', 53), 'spec-culinary': lf('gourmet,plating,food', 54),
  'spec-entrepreneur': lf('cafe,coffee,shop', 55), 'spec-events': lf('event,banquet,decor', 56),
  'spec-fbservice': lf('waiter,restaurant,service', 57), 'spec-foodproduction': lf('cooking,chef,food', 58),
  'spec-frontoffice': lf('hotel,front,desk', 59), 'spec-housekeeping': lf('hotel,housekeeping,linen', 60),
  'spec-luxury': lf('luxury,hotel,suite', 61), 'spec-tourism': lf('travel,tourism,landmark', 62),
};

// portraits (pravatar has ~70 distinct real headshots) ------------------------
const PORTRAITS = {
  'faculty-1': 12, 'faculty-2': 45, 'faculty-3': 15, 'faculty-4': 44, 'faculty-5': 33,
  'faculty-6': 47, 'faculty-7': 51, 'faculty-8': 68, 'person-1': 26, 'person-2': 13,
  'person-3': 5, 'person-4': 60, 'person-5': 9,
};

// logos/badges to rasterize faithfully from their existing SVG ----------------
const RASTERIZE = ['accred-aicte', 'accred-naac', 'accred-nirf', 'accred-ugc', 'brandmark'];

async function run() {
  const results = { ok: [], fail: [] };

  const tasks = [];

  for (const [name, spec] of Object.entries(PHOTOS)) {
    tasks.push(async () => {
      const buf = await curl(spec.url);
      if (buf.length < 1000) throw new Error(`tiny (${buf.length})`);
      await sharp(buf).png({ quality: 90 }).toFile(path.join(DIR, `${name}.png`));
      results.ok.push(name);
    });
  }
  for (const [name, id] of Object.entries(PORTRAITS)) {
    tasks.push(async () => {
      const buf = await curl(`https://i.pravatar.cc/512?img=${id}`);
      if (buf.length < 1000) throw new Error(`tiny (${buf.length})`);
      await sharp(buf).resize(512, 640, { fit: 'cover', position: 'top' }).png().toFile(path.join(DIR, `${name}.png`));
      results.ok.push(name);
    });
  }
  for (const name of RASTERIZE) {
    tasks.push(async () => {
      const svgPath = path.join(DIR, `${name}.svg`);
      if (!fs.existsSync(svgPath)) return;
      await sharp(svgPath, { density: 300 }).png().toFile(path.join(DIR, `${name}.png`));
      results.ok.push(name);
    });
  }

  // small concurrency pool
  const POOL = 6;
  let i = 0;
  const failedNames = [];
  async function worker() {
    while (i < tasks.length) {
      const idx = i++;
      try { await tasks[idx](); }
      catch (e) { results.fail.push(String(e.message || e)); failedNames.push(idx); }
    }
  }
  await Promise.all(Array.from({ length: POOL }, worker));

  console.log(`OK: ${results.ok.length}  FAIL: ${results.fail.length}`);
  if (results.fail.length) console.log('FAILS:', results.fail.slice(0, 40).join(' | '));

  // delete every .svg that now has a .png sibling
  let removed = 0;
  for (const f of fs.readdirSync(DIR)) {
    if (f.endsWith('.svg')) {
      const png = path.join(DIR, f.replace(/\.svg$/, '.png'));
      if (fs.existsSync(png)) { fs.unlinkSync(path.join(DIR, f)); removed++; }
    }
  }
  console.log(`Removed ${removed} SVG files.`);
  const leftSvg = fs.readdirSync(DIR).filter((f) => f.endsWith('.svg'));
  if (leftSvg.length) console.log('SVG remaining:', leftSvg.join(', '));
}

run().catch((e) => { console.error(e); process.exit(1); });
