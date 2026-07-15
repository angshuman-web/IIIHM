// Shared layout, icons, nav, footer and component helpers for the IIHM site generator.
'use strict';

// ---------------- Icons (feather-style, 24x24 stroke) ----------------
const P = {
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'arrow-up': '<path d="M12 19V5M6 11l6-6 6 6"/>',
  'chevron-down': '<path d="M6 9l6 6 6-6"/>',
  'chevron-right': '<path d="M9 6l6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  'map-pin': '<path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  facebook: '<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  linkedin: '<path d="M4 9h4v12H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM12 9h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5S16 15 16 17v4h-4z"/>',
  twitter: '<path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 3.8 4.9a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4c-.6.1-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1z"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/>',
  'chef-hat': '<path d="M6 19h12M7 15h10v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/><path d="M17 15a4 4 0 0 0 1-7.9A5 5 0 0 0 8 6.1 4 4 0 0 0 7 15"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.2 13.6 7 22l5-3 5 3-1.2-8.4"/>',
  users: '<path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 0 0-3-3.9M16 3.1A4 4 0 0 1 16 11"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  star: '<path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/>',
  coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M6 3v2M10 3v2M14 3v2"/>',
  utensils: '<path d="M4 3v7a2 2 0 0 0 4 0V3M6 10v11M18 3c-1.5 0-3 1.5-3 5s1.5 4 3 4v9"/>',
  bed: '<path d="M3 8v12M3 12h18v8M21 20v-6a4 4 0 0 0-4-4H8a5 5 0 0 0-5 4"/>',
  plane: '<path d="M17.8 19.2 16 11l4-4a2 2 0 0 0-3-3l-4 4-8.2-1.8a.5.5 0 0 0-.5.8l3.9 4-2.2 2.2H4l-1 1 3 1 1 3 1-1v-2.2L11.3 17l4 3.9a.5.5 0 0 0 .8-.5z"/>',
  ship: '<path d="M12 3v6M5 9h14l-1.5 5H6.5zM3 15c1.5 1.5 3 1.5 4.5 0S10.5 15 12 15s3 1.5 4.5 0S19.5 15 21 15v3c-1.5 1.5-3 1.5-4.5 0S13.5 18 12 18s-3-1.5-4.5 0S4.5 18 3 18z"/>',
  sparkles: '<path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3zM19 15l.9 2.3L22 18l-2.1.8L19 21l-.9-2.2L16 18l2.1-.7z"/>',
  'graduation-cap': '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
  heart: '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a2 2 0 0 0 0 4h1M16 6h3a2 2 0 0 1 0 4h-1M9 18h6M10 14v4M14 14v4M8 21h8"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  beaker: '<path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V3M7.5 14h9"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/>',
  'trending-up': '<path d="M3 17 9 11l4 4 8-8M15 4h6v6"/>',
  shield: '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  quote: '<path d="M7 7H4v6h3l-1 4h2l1-4V7zM17 7h-3v6h3l-1 4h2l1-4V7z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  'external-link': '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  home: '<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6z"/>',
  lightbulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="13" r="3.5"/>',
  handshake: '<path d="m11 17 2 2 3-3 3 1V9l-4-4-3 1-4-1-5 4v6l3 1 3 3z"/><path d="m8 12 3 3M12 8l2 2"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2zM20 14a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM18 16v1a3 3 0 0 1-3 3h-3"/>',
  ticket: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z"/><path d="M13 6v12"/>',
  route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h6"/>',
  cake: '<path d="M4 21V11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10M2 21h20M4 15c1.3 1.3 2.7 1.3 4 0s2.7-1.3 4 0 2.7 1.3 4 0 2.7-1.3 4 0M12 8V4M12 4l1.5-2-1.5-1-1.5 1z"/>',
  megaphone: '<path d="m3 11 15-6v14L3 13zM3 11v2a2 2 0 0 0 2 2h1M8 15v3a2 2 0 0 0 4 0"/>',
  microscope: '<path d="M6 18h10M6 21h14M9 3l3 3-4 4-3-3zM8 11l6 6M14 6a5 5 0 0 1 2 9"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
};

function icon(name, cls = 'ico') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
}

// ---------------- Navigation model ----------------
const NAV = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', children: [
    ['about.html', 'About IIHM', 'building', 'Our story & identity'],
    ['vision-mission.html', 'Vision & Mission', 'compass', 'Purpose & values'],
    ['infrastructure.html', 'Infrastructure', 'layers', 'World-class campus'],
    ['laboratories.html', 'Laboratories', 'beaker', 'Training labs & kitchens'],
  ]},
  { label: 'Academics', children: [
    ['programme.html', 'Programme (BHM)', 'graduation-cap', 'Curriculum & structure'],
    ['faculty.html', 'Faculty', 'users', 'Meet our mentors'],
    ['research.html', 'Research & Innovation', 'microscope', 'Publications & projects'],
    ['downloads.html', 'Downloads', 'download', 'Syllabus & documents'],
  ]},
  { label: 'Placements', children: [
    ['placements.html', 'Placements', 'trending-up', 'Records & recruiters'],
    ['industry.html', 'Industry Collaboration', 'handshake', 'Partners & internships'],
  ]},
  { label: 'Campus Life', children: [
    ['student-activities.html', 'Student Activities', 'sparkles', 'Events & festivals'],
    ['gallery.html', 'Gallery', 'camera', 'Moments in frames'],
    ['achievements.html', 'Achievements', 'trophy', 'Awards & milestones'],
    ['news-events.html', 'News & Events', 'megaphone', 'Latest updates'],
  ]},
  { label: 'Admissions', href: 'admissions.html' },
  { label: 'Contact', href: 'contact.html' },
];

function navbar() {
  const items = NAV.map(it => {
    if (it.children) {
      const links = it.children.map(([h, t, ic, s]) =>
        `<a href="${h}"><span class="di">${icon(ic)}</span><span>${t}<small>${s}</small></span></a>`).join('');
      return `<li class="nav-item"><button>${it.label}${icon('chevron-down', 'ico chev')}</button><div class="dropdown">${links}</div></li>`;
    }
    return `<li><a href="${it.href}">${it.label}</a></li>`;
  }).join('');
  return `
  <header class="nav">
    <div class="nav-inner">
      <a class="brand" href="index.html">
        <img src="assets/images/brandmark.svg" alt="IIHM logo">
        <span class="bt"><b>IIHM</b><span>Hospitality · UEM</span></span>
      </a>
      <nav aria-label="Primary"><ul class="nav-menu">${items}</ul></nav>
      <div class="nav-actions">
        <button class="nav-search" data-search-open aria-label="Search">${icon('search')}</button>
        <a class="nav-cta" href="admissions.html">Apply Now</a>
        <button class="nav-toggle" aria-label="Menu"><span></span></button>
      </div>
    </div>
  </header>`;
}

function mobileMenu() {
  const groups = NAV.map(it => {
    if (it.children) {
      return `<div class="m-group"><b>${it.label}</b>${it.children.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</div>`;
    }
    return `<a href="${it.href}">${it.label}</a>`;
  }).join('');
  return `
  <div class="mobile-overlay"></div>
  <aside class="mobile-menu" aria-label="Mobile navigation">
    ${groups}
    <a class="btn btn-lg" href="admissions.html">Apply Now ${icon('arrow-right')}</a>
  </aside>`;
}

function searchOverlay() {
  return `
  <div class="search-overlay">
    <form class="search-box" onsubmit="return false">
      ${icon('search', 'ico ico-lg')}
      <input type="search" placeholder="Search programmes, facilities, faculty…" aria-label="Search">
    </form>
    <div class="search-hint">Try “BHM curriculum”, “placements”, “bakery lab” — press Esc to close</div>
  </div>`;
}

function footer() {
  const quick = [['about.html','About IIHM'],['programme.html','BHM Programme'],['faculty.html','Faculty'],['placements.html','Placements'],['gallery.html','Gallery'],['contact.html','Contact Us']];
  const acad = [['laboratories.html','Laboratories'],['infrastructure.html','Infrastructure'],['research.html','Research'],['downloads.html','Downloads'],['achievements.html','Achievements'],['news-events.html','News & Events']];
  const social = ['facebook','instagram','linkedin','twitter','youtube'];
  return `
  <footer class="footer">
    <div class="container-wide">
      <div class="footer-top">
        <div class="footer-about">
          <a class="brand" href="index.html"><img src="assets/images/brandmark.svg" alt="IIHM"><span class="bt"><b>IIHM</b><span>Hospitality · UEM</span></span></a>
          <p>The Institute of Hotel & Hospitality Management at University of Engineering & Management shapes world-class hospitality professionals through practical excellence, industry immersion and international standards.</p>
          <div class="footer-social">${social.map(s => `<a href="#" aria-label="${s}">${icon(s)}</a>`).join('')}</div>
          <div class="accreds">
            <img src="assets/images/accred-naac.svg" alt="NAAC A+">
            <img src="assets/images/accred-aicte.svg" alt="AICTE">
            <img src="assets/images/accred-ugc.svg" alt="UGC">
            <img src="assets/images/accred-nirf.svg" alt="NIRF">
          </div>
        </div>
        <div><h4>Quick Links</h4><div class="footer-links">${quick.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</div></div>
        <div><h4>Academics</h4><div class="footer-links">${acad.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</div></div>
        <div>
          <h4>Reach Us</h4>
          <div class="contact-line">${icon('map-pin')}<span>IIHM, University of Engineering & Management, University Area, Action Area III, Newtown, Kolkata 700160</span></div>
          <div class="contact-line">${icon('phone')}<span>+91 33 2357 2059</span></div>
          <div class="contact-line">${icon('mail')}<span>iihm@uem.edu.in</span></div>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p style="font-size:.9rem;color:#a9c4ee;margin-bottom:14px">Get admission alerts, events and hospitality insights.</p>
          <form class="newsletter" data-demo><input type="email" placeholder="Your email" required aria-label="Email"><button type="submit">Subscribe</button></form>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Institute of Hotel & Hospitality Management, UEM Kolkata. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Anti-Ragging</a> · <a href="#">Grievance</a></span>
      </div>
    </div>
  </footer>`;
}

function preloader() {
  return `<div class="preloader"><div class="pl-mark"><img src="assets/images/brandmark.svg" alt=""></div><div class="pl-bar"></div></div>`;
}

// ---------------- Page shell ----------------
function layout({ title, desc, content, active }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} · IIHM, UEM Kolkata</title>
  <meta name="description" content="${desc}">
  <link rel="icon" type="image/svg+xml" href="assets/images/brandmark.svg">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body${active ? ` data-page="${active}"` : ''}>
  ${preloader()}
  <div class="scroll-progress"></div>
  ${navbar()}
  ${mobileMenu()}
  ${searchOverlay()}
  <main>
${content}
  </main>
  ${footer()}
  <button class="to-top" aria-label="Back to top">${icon('arrow-up')}</button>
  <script src="assets/js/main.js"></script>
</body>
</html>`;
}

// ---------------- Component helpers ----------------
function sectionHead({ eyebrow, title, text, align = 'center', light = false }) {
  return `<div class="section-head ${align === 'left' ? 'left' : ''}" data-reveal>
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
    <h2 class="h2 balance">${title}</h2>
    ${text ? `<p>${text}</p>` : ''}
  </div>`;
}
function featureCard({ ic, title, text }) {
  return `<article class="card feature-card card-accent"><div class="card-ico">${icon(ic, 'ico ico-lg')}</div><h3>${title}</h3><p>${text}</p></article>`;
}
function pathCard({ ic, title, text }) {
  return `<article class="path-card"><div class="pc-ico">${icon(ic, 'ico ico-lg')}</div><div><h3>${title}</h3><p>${text}</p></div></article>`;
}
function specCard({ img, title, text }) {
  return `<article class="spec-card"><img src="assets/images/${img}" alt="${title}"><div class="sc-body"><h3>${title}</h3><p>${text}</p></div></article>`;
}
function logoCell(file, name) {
  return `<div class="logo-cell"><img src="assets/images/${file}.png" alt="${name}"></div>`;
}
function crumbs(items) {
  return `<div class="crumbs">${items.map((it, i) => i < items.length - 1 ? `<a href="${it[1]}">${it[0]}</a><span>/</span>` : `<span style="color:#fff;opacity:1">${it[0]}</span>`).join('')}</div>`;
}
function pageHeader({ eyebrow, title, text, trail }) {
  return `<section class="page-header"><div class="container">
    ${crumbs([['Home', 'index.html'], ...(trail || []), [title]])}
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
    <h1 class="balance">${title}</h1>
    ${text ? `<p>${text}</p>` : ''}
  </div></section>`;
}
function ctaBand({ title, text, primary, secondary }) {
  return `<section class="section"><div class="container"><div class="cta-band" data-reveal="zoom">
    <span class="eyebrow">Begin Your Journey</span>
    <h2 class="h2">${title}</h2>
    <p>${text}</p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a class="btn btn-lg btn-ghost" href="${primary[1]}">${primary[0]} ${icon('arrow-right')}</a>
      ${secondary ? `<a class="btn btn-lg btn-outline" href="${secondary[1]}">${secondary[0]}</a>` : ''}
    </div>
  </div></div></section>`;
}

module.exports = {
  icon, layout, sectionHead, featureCard, pathCard, specCard, logoCell,
  crumbs, pageHeader, ctaBand, NAV,
};
