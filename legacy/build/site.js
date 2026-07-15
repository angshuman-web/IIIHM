'use strict';
const fs = require('fs');
const path = require('path');
const { layout } = require('./lib');
const home = require('./page-home');
const S = require('./page-sub');
const ROOT = path.join(__dirname, '..');

const PAGES = [
  ['index.html', 'Excellence in Hotel & Hospitality Management', 'IIHM, UEM Kolkata — world-class Hotel & Hospitality Management education with hands-on training, internships and strong placements.', 'home', home()],
  ['about.html', 'About IIHM', 'Learn about the Institute of Hotel & Hospitality Management at UEM Kolkata.', 'about', S.about()],
  ['vision-mission.html', 'Vision & Mission', 'The vision, mission and values that guide IIHM, UEM.', 'about', S.vision()],
  ['programme.html', 'BHM Programme', 'Bachelor of Hotel Management — curriculum, structure, specializations and outcomes.', 'academics', S.programme()],
  ['faculty.html', 'Faculty', 'Meet the expert faculty and industry mentors at IIHM, UEM.', 'academics', S.faculty()],
  ['infrastructure.html', 'Infrastructure', 'Explore the world-class campus and facilities at IIHM, UEM.', 'about', S.infra()],
  ['laboratories.html', 'Laboratories', 'Training kitchens, labs and simulated hotel environments at IIHM, UEM.', 'about', S.labs()],
  ['placements.html', 'Placements', 'Placement records, recruiters and alumni success stories at IIHM, UEM.', 'placements', S.placements()],
  ['industry.html', 'Industry Collaboration', 'Industry partnerships and internship opportunities at IIHM, UEM.', 'placements', S.industry()],
  ['student-activities.html', 'Student Activities', 'Events, festivals, competitions and campus life at IIHM, UEM.', 'campus', S.activities()],
  ['gallery.html', 'Gallery', 'A visual journey through IIHM, UEM.', 'campus', S.gallery()],
  ['research.html', 'Research & Innovation', 'Research, consultancy and innovation at IIHM, UEM.', 'academics', S.research()],
  ['achievements.html', 'Achievements', 'Awards, rankings and milestones at IIHM, UEM.', 'campus', S.achievements()],
  ['downloads.html', 'Downloads', 'Syllabus, brochure, calendar and documents from IIHM, UEM.', 'academics', S.downloads()],
  ['news-events.html', 'News & Events', 'Latest news, announcements and upcoming events at IIHM, UEM.', 'campus', S.news()],
  ['admissions.html', 'Admissions 2026', 'Apply to the BHM programme at IIHM, UEM Kolkata.', 'admissions', S.admissions()],
  ['contact.html', 'Contact Us', 'Get in touch with IIHM, UEM Kolkata.', 'contact', S.contact()],
];

let count = 0;
for (const [file, title, desc, active, content] of PAGES) {
  const html = layout({ title, desc, content, active });
  fs.writeFileSync(path.join(ROOT, file), html);
  count++;
  console.log('wrote', file, '(' + Math.round(html.length / 1024) + ' KB)');
}
console.log('\n✔ Generated', count, 'pages');
