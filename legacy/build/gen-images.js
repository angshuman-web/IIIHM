// Generates premium, consistent SVG imagery (local) into assets/images.
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'assets', 'images');

// Hospitality icon path library (drawn on a 0..100 viewBox, stroke-based).
const ICONS = {
  chefhat: 'M30 55c-9 0-16-7-16-15 0-8 6-14 14-15 2-9 10-16 22-16s20 7 22 16c8 1 14 7 14 15 0 8-7 15-16 15zM32 55v22a4 4 0 004 4h28a4 4 0 004-4V55',
  bell: 'M20 66c0-18 12-30 30-30s30 12 30 30zM14 66h72M50 30v-8M44 22h12',
  cloche: 'M18 64a32 32 0 0164 0zM12 64h76M50 32v-7M45 25h10',
  building: 'M25 82V26a4 4 0 014-4h42a4 4 0 014 4v56M18 82h64M37 34h8M55 34h8M37 48h8M55 48h8M37 62h8M55 62h8M44 82v-10h12v10',
  bed: 'M16 44v34M16 54h68v24M84 62V52a8 8 0 00-8-8H40a8 8 0 00-8 8v10M16 70h68',
  suitcase: 'M28 40h44a4 4 0 014 4v34a4 4 0 01-4 4H28a4 4 0 01-4-4V44a4 4 0 014-4zM40 40v-8a4 4 0 014-4h12a4 4 0 014 4v8M50 52v18',
  wine: 'M34 22h32l-3 20a13 13 0 01-26 0zM50 55v20M38 80h24M35 33h30',
  cup: 'M26 38h44v20a20 20 0 01-40 0zM70 42h8a8 8 0 010 16h-9M28 80h40',
  cake: 'M26 78V54a10 10 0 0110-10h28a10 10 0 0110 10v24M22 78h56M26 60h48M50 44v-8M50 36l4-6-4-4-4 4z',
  plate: 'M50 24a26 26 0 100 52 26 26 0 000-52zM50 36a14 14 0 100 28 14 14 0 000-28z',
  globe: 'M50 22a28 28 0 100 56 28 28 0 000-56zM22 50h56M50 22c-10 8-10 48 0 56M50 22c10 8 10 48 0 56',
  spark: 'M50 20l6 20 20 6-20 6-6 20-6-20-20-6 20-6z',
  graduate: 'M50 30L18 44l32 14 32-14zM32 52v16c0 6 8 10 18 10s18-4 18-10V52M82 46v16',
};

function svg(w,h,body){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">${body}</svg>`;}

function grad(id,c1,c2,angle=135){
  const a=angle*Math.PI/180, x2=Math.round(50+50*Math.cos(a)), y2=Math.round(50+50*Math.sin(a));
  return `<linearGradient id="${id}" x1="${100-x2}%" y1="${100-y2}%" x2="${x2}%" y2="${y2}%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
}

// Themed illustration card: gradient bg + large hospitality icon + decorative dots/arcs.
function illus(file,w,h,c1,c2,icon,label){
  const cx=w/2, iconScale=Math.min(w,h)*0.0052;
  const ix=cx-50*iconScale, iy=h/2-52*iconScale;
  const dots=[];
  for(let i=0;i<7;i++){
    const r=(3+((i*13)%7));
    const x=((i*89)%w), y=((i*57+30)%h);
    dots.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="${0.05+ (i%3)*0.03}"/>`);
  }
  const body=`<defs>${grad('g',c1,c2)}</defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <circle cx="${w*0.85}" cy="${h*0.18}" r="${h*0.28}" fill="#ffffff" opacity="0.06"/>
  <circle cx="${w*0.12}" cy="${h*0.9}" r="${h*0.22}" fill="#ffffff" opacity="0.05"/>
  <path d="M0 ${h*0.8} Q ${w*0.5} ${h*0.6} ${w} ${h*0.85} L ${w} ${h} L 0 ${h} Z" fill="#ffffff" opacity="0.06"/>
  ${dots.join('')}
  <g transform="translate(${ix} ${iy}) scale(${iconScale})">
    <path d="${ICONS[icon]}" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>
  </g>`;
  fs.writeFileSync(path.join(OUT,file+'.svg'), svg(w,h,body));
  console.log('svg',file);
}

// Faculty avatar (abstract, professional)
function avatar(file,c1,c2){
  const body=`<defs>${grad('g',c1,c2,160)}</defs>
  <rect width="400" height="400" fill="url(#g)"/>
  <circle cx="200" cy="200" r="150" fill="#ffffff" opacity="0.08"/>
  <circle cx="200" cy="160" r="52" fill="#ffffff" opacity="0.92"/>
  <path d="M110 330c0-52 40-86 90-86s90 34 90 86z" fill="#ffffff" opacity="0.92"/>`;
  fs.writeFileSync(path.join(OUT,file+'.svg'), svg(400,400,body));
  console.log('svg',file);
}

const BLUE='#1656C4', DEEP='#0B2E6B', SKY='#3B82F6', TEAL='#0E7C86', GOLD='#B98A2E',
      PLUM='#6D28A8', ROSE='#B83280', GREEN='#0E8A5F', SLATE='#334155', INDIGO='#3730A3';

// Hero banner (wide) — layered hospitality skyline + motifs
function hero(){
  const w=1600,h=900;
  const body=`<defs>
    ${grad('sky',DEEP,BLUE,120)}
    ${grad('glow','#2E6BE0','#1656C4')}
    <radialGradient id="rg" cx="70%" cy="30%" r="70%"><stop offset="0" stop-color="#3B82F6" stop-opacity="0.55"/><stop offset="1" stop-color="#1656C4" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#sky)"/>
  <rect width="${w}" height="${h}" fill="url(#rg)"/>
  <circle cx="1180" cy="230" r="120" fill="#ffffff" opacity="0.10"/>
  <circle cx="300" cy="180" r="60" fill="#ffffff" opacity="0.07"/>
  <circle cx="1420" cy="640" r="90" fill="#ffffff" opacity="0.06"/>
  <g opacity="0.5" fill="none" stroke="#DCEBFF" stroke-width="3">
    <g transform="translate(240 560) scale(3.4)"><path d="${ICONS.chefhat}" opacity="0.28"/></g>
  </g>
  <g transform="translate(1120 470) scale(3.2)" fill="none" stroke="#DCEBFF" stroke-width="3" opacity="0.30" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS.cloche}"/></g>
  <g transform="translate(720 120) scale(2.0)" fill="none" stroke="#DCEBFF" stroke-width="3" opacity="0.22" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS.building}"/></g>
  <path d="M0 760 Q 400 700 800 760 T 1600 760 L 1600 900 L 0 900 Z" fill="#ffffff" opacity="0.05"/>
  <path d="M0 820 Q 500 770 1000 820 T 1600 820 L 1600 900 L 0 900 Z" fill="#ffffff" opacity="0.06"/>`;
  fs.writeFileSync(path.join(OUT,'hero-hospitality.svg'), svg(w,h,body));
  console.log('svg hero');
}

// Page-header band (wide short)
function band(file,c1,c2){
  const w=1600,h=420;
  const body=`<defs>${grad('g',c1,c2,120)}<radialGradient id="r" cx="80%" cy="20%" r="80%"><stop offset="0" stop-color="#ffffff" stop-opacity="0.18"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/><rect width="${w}" height="${h}" fill="url(#r)"/>
  <circle cx="1350" cy="120" r="150" fill="#fff" opacity="0.06"/><circle cx="180" cy="360" r="120" fill="#fff" opacity="0.05"/>
  <path d="M0 320 Q 400 280 800 320 T 1600 320 L 1600 420 L 0 420 Z" fill="#fff" opacity="0.05"/>`;
  fs.writeFileSync(path.join(OUT,file+'.svg'), svg(w,h,body));
  console.log('svg',file);
}

hero();
band('page-band','#0B2E6B','#1656C4');

// Lab / experiential learning images
illus('lab-kitchen',800,600,DEEP,BLUE,'chefhat');
illus('lab-frontoffice',800,600,'#0F3D91',SKY,'bell');
illus('lab-housekeeping',800,600,TEAL,'#12A0AD','bed');
illus('lab-bakery',800,600,GOLD,'#D9A84A','cake');
illus('lab-foodproduction',800,600,'#0B2E6B','#2E6BE0','cloche');
illus('lab-restaurant',800,600,PLUM,'#8B45C9','wine');
illus('lab-mockhotel',800,600,INDIGO,'#5B54D6','building');
illus('lab-software',800,600,SLATE,'#5A6B85','globe');

// Section / feature imagery
illus('programme-bhm',900,600,DEEP,BLUE,'graduate');
illus('about-campus',900,600,'#0F3D91',SKY,'building');
illus('experiential',900,600,PLUM,'#8B45C9','cloche');
illus('placements',900,600,GREEN,'#1FB07A','spark');
illus('industry',900,600,GOLD,'#D9A84A','suitcase');
illus('research',900,600,INDIGO,'#5B54D6','globe');
illus('student-life',900,600,ROSE,'#E255A1','cup');
illus('admissions-cta',900,600,DEEP,'#2E6BE0','graduate');

// Gallery tiles (varied)
const galSpecs=[
  ['gallery-1',DEEP,BLUE,'chefhat'],['gallery-2',GOLD,'#D9A84A','cake'],
  ['gallery-3',PLUM,'#8B45C9','wine'],['gallery-4',TEAL,'#12A0AD','bell'],
  ['gallery-5',GREEN,'#1FB07A','cloche'],['gallery-6',INDIGO,'#5B54D6','building'],
  ['gallery-7',ROSE,'#E255A1','cup'],['gallery-8','#0F3D91',SKY,'plate'],
  ['gallery-9',SLATE,'#5A6B85','suitcase'],
];
galSpecs.forEach(([f,a,b,i])=>illus(f,600,450,a,b,i));

// Specialization tiles (small square)
const specs=[
  ['spec-foodproduction','cloche'],['spec-bakery','cake'],['spec-frontoffice','bell'],
  ['spec-fbservice','wine'],['spec-housekeeping','bed'],['spec-events','spark'],
  ['spec-tourism','globe'],['spec-cruise','suitcase'],['spec-airline','plate'],
  ['spec-luxury','building'],['spec-entrepreneur','graduate'],['spec-culinary','chefhat'],
];
const palette=[DEEP,BLUE,GOLD,PLUM,TEAL,GREEN,ROSE,INDIGO,SLATE,'#0F3D91','#8B45C9','#12A0AD'];
specs.forEach(([f,i],k)=>illus(f,400,400,palette[k%palette.length],palette[(k+3)%palette.length],i));

// Faculty avatars
[['faculty-1',DEEP,BLUE],['faculty-2',PLUM,'#8B45C9'],['faculty-3',TEAL,'#12A0AD'],
 ['faculty-4',GOLD,'#D9A84A'],['faculty-5',GREEN,'#1FB07A'],['faculty-6',INDIGO,'#5B54D6'],
 ['faculty-7',ROSE,'#E255A1'],['faculty-8','#0F3D91',SKY]].forEach(([f,a,b])=>avatar(f,a,b));

// Testimonial avatars
[['person-1',DEEP,BLUE],['person-2',GOLD,'#D9A84A'],['person-3',PLUM,'#8B45C9'],
 ['person-4',TEAL,'#12A0AD'],['person-5',GREEN,'#1FB07A']].forEach(([f,a,b])=>avatar(f,a,b));

// Accreditation marks
function accred(file,txt,c){
  const body=`<defs>${grad('g',c,c)}</defs><rect width="160" height="160" rx="20" fill="#ffffff"/><circle cx="80" cy="80" r="60" fill="none" stroke="${c}" stroke-width="6"/><text x="80" y="92" font-family="Arial,Helvetica,sans-serif" font-size="34" font-weight="700" fill="${c}" text-anchor="middle">${txt}</text>`;
  fs.writeFileSync(path.join(OUT,file+'.svg'), svg(160,160,body));
  console.log('svg',file);
}
accred('accred-naac','A+', '#1656C4');
accred('accred-aicte','AICTE'.slice(0,4), '#0B2E6B');
accred('accred-ugc','UGC', '#0E7C86');
accred('accred-nirf','NIRF', '#B98A2E');

// Simple monochrome logo mark for navbar/footer (SVG)
function brandmark(){
  const body=`<defs>${grad('g',DEEP,BLUE)}</defs>
  <rect width="100" height="100" rx="24" fill="url(#g)"/>
  <g transform="translate(14 20) scale(0.72)" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS.chefhat}"/></g>`;
  fs.writeFileSync(path.join(OUT,'brandmark.svg'), svg(100,100,body));
  // favicon-ish
  console.log('svg brandmark');
}
brandmark();

console.log('ALL IMAGES DONE');
