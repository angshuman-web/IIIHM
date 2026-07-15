'use strict';
const L = require('./lib');
const { icon, sectionHead, featureCard, pathCard, specCard, logoCell, pageHeader, ctaBand } = L;

const LOGOS = [['taj','Taj Hotels'],['oberoi','Oberoi'],['itc-hotels','ITC Hotels'],['marriott','Marriott'],['hyatt','Hyatt'],['hilton','Hilton'],['radisson','Radisson'],['leela','The Leela'],['accor','Accor'],['ihg','IHG'],['novotel','Novotel'],['lemon-tree','Lemon Tree']];
const check = x => `<li><span class="ck">${icon('check')}</span>${x}</li>`;
const statTile = (n,s,l)=>`<div class="stat-tile"><div class="num"><span data-count="${n}">0</span><span class="suf">${s}</span></div><div class="lbl">${l}</div></div>`;

/* ---------------- ABOUT ---------------- */
function about(){return pageHeader({eyebrow:'About Us',title:'About IIHM, UEM',text:'A centre of excellence shaping the next generation of hospitality leaders through craft, character and global exposure.',trail:[]})+`
<section class="section"><div class="container"><div class="split">
  <div data-reveal="left">
    <span class="eyebrow">Our Story</span>
    <h2 class="h2">Excellence in Hotel &amp; Hospitality Management</h2>
    <p class="muted mt-2">The Institute of Hotel &amp; Hospitality Management (IIHM) at the University of Engineering &amp; Management, Kolkata, is dedicated to producing industry-ready hospitality professionals. We combine a rigorous, globally benchmarked curriculum with immersive hands-on training in professional kitchens, laboratories and a fully simulated hotel environment.</p>
    <p class="muted mt-2">Our philosophy is simple — hospitality is learned by doing. From the first semester, students step into real service situations, guided by faculty who have led kitchens and hotels across the country and abroad.</p>
    <ul class="checklist mt-3">${['UGC-recognised BHM degree','60%+ practical, hands-on learning','Industry-integrated internships','Strong placement & alumni network'].map(check).join('')}</ul>
  </div>
  <div class="media" data-reveal="right"><img src="assets/images/about-campus.svg" alt="Campus"><div class="badge"><b>15+</b><span>Years of<br>Hospitality Excellence</span></div></div>
</div></div></section>

<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'At a Glance',title:'IIHM by the Numbers'})}
  <div class="stats-grid" data-stagger>${statTile(96,'%','Placement Rate')+statTile(45,'+','Expert Faculty')+statTile(2500,'+','Alumni Worldwide')+statTile(40,'+','Hotel Partners')}</div>
</div></section>

<section class="section"><div class="container">
  ${sectionHead({eyebrow:'What Defines Us',title:'Our Core Strengths'})}
  <div class="grid g3" data-stagger>${[['chef-hat','Craft-first Learning','Professional kitchens and live labs from day one.'],['globe','Global Standards','International service protocols and exchange pathways.'],['handshake','Industry Integration','Curriculum co-created with leading hotel brands.'],['users','Mentor Faculty','Chefs and hoteliers who guide every student personally.'],['trending-up','Career Outcomes','Consistently strong placements and global mobility.'],['heart','Holistic Growth','Grooming, communication and leadership development.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>

${ctaBand({title:'Discover the IIHM Difference',text:'Visit our campus, meet our faculty and experience hospitality education built for the real world.',primary:['Apply Now','admissions.html'],secondary:['Contact Us','contact.html']})}`;}

/* ---------------- VISION & MISSION ---------------- */
function vision(){return pageHeader({eyebrow:'Purpose',title:'Vision & Mission',text:'The guiding principles that shape every student, every kitchen and every service at IIHM.',trail:[['About','about.html']]})+`
<section class="section"><div class="container"><div class="grid g2" data-stagger>
  <article class="card card-accent"><div class="card-ico">${icon('compass','ico ico-lg')}</div><h3>Our Vision</h3><p>To be a globally recognised centre of hospitality education that nurtures ethical, innovative and world-class professionals who elevate the art of service and lead the industry into the future.</p></article>
  <article class="card card-accent"><div class="card-ico">${icon('target','ico ico-lg')}</div><h3>Our Mission</h3><p>To deliver immersive, industry-integrated hospitality education that blends craft, character and career — empowering every graduate with the skills, confidence and values to succeed anywhere in the world.</p></article>
</div></div></section>

<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Our Values',title:'The Principles We Live By'})}
  <div class="grid g4" data-stagger>${[['heart','Warmth','Hospitality begins with genuine care for people.'],['award','Excellence','Uncompromising standards in every detail.'],['shield','Integrity','Ethics and responsibility at the core of service.'],['lightbulb','Innovation','Embracing new ideas that shape the industry.'],['globe','Global Mindset','Preparing students for careers without borders.'],['users','Inclusion','A diverse, respectful and supportive community.'],['trending-up','Growth','Lifelong learning and continuous improvement.'],['sparkles','Passion','Loving the craft of hospitality above all.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>

<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Objectives',title:'What We Set Out To Achieve'})}
  <div style="max-width:820px;margin-inline:auto"><div class="accordion" data-reveal>
    ${[['Produce industry-ready professionals','Equip students with technical mastery and soft skills that meet and exceed global hospitality standards.'],['Foster experiential learning','Ensure the majority of learning happens through practice in kitchens, labs and live service environments.'],['Build strong industry linkages','Maintain deep partnerships that translate into internships, projects and placements.'],['Encourage entrepreneurship','Support students in launching their own hospitality ventures through mentoring and incubation.'],['Champion holistic development','Develop confident, ethical and well-rounded individuals ready to lead.']].map(([q,a],i)=>`<div class="acc-item${i===0?' open':''}"><button class="acc-q">${q}<span class="pm">${icon('plus')}</span></button><div class="acc-a"${i===0?' style="max-height:300px"':''}><div>${a}</div></div></div>`).join('')}
  </div></div>
</div></section>`;}

/* ---------------- PROGRAMME ---------------- */
function programme(){return pageHeader({eyebrow:'Academics',title:'Bachelor of Hotel Management',text:'A 4-year, 8-semester degree that transforms passion for hospitality into a distinguished global career.',trail:[['Academics','programme.html']]})+`
<section class="section"><div class="container"><div class="split">
  <div class="media" data-reveal="left"><img src="assets/images/programme-bhm.svg" alt="BHM"><div class="badge"><b>4 Yrs</b><span>8 Semesters</span></div></div>
  <div data-reveal="right">
    <span class="eyebrow">Programme Overview</span>
    <h2 class="h2">Craft. Management. Global Careers.</h2>
    <p class="muted mt-2">The BHM programme delivers a complete hospitality education — from mastering the kitchen and service floor to leading hotel operations and launching ventures. Practical training, internships and specialization tracks ensure every graduate is ready for the industry.</p>
    <div class="grid g2 mt-3">${[['Eligibility','10+2 in any stream'],['Duration','4 Years · 8 Semesters'],['Degree','UGC-recognised BHM'],['Mode','Full-time, on-campus']].map(([a,b])=>`<div><small class="muted" style="font-weight:700;text-transform:uppercase;letter-spacing:.1em;font-size:.72rem">${a}</small><div style="font-weight:700">${b}</div></div>`).join('')}</div>
    <a class="btn mt-3" href="downloads.html">${icon('download')} Download Syllabus</a>
  </div>
</div></div></section>

<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Structure',title:'Semester-wise Journey'})}
  <div class="timeline" data-reveal>
    ${[['Semester 1–2','Foundations','Culinary fundamentals, food & beverage service basics, front office, housekeeping foundations, communication and hygiene & sanitation.'],['Semester 3–4','Core Operations','Advanced food production, F&B management, accommodation operations, hospitality accounting and nutrition.'],['Semester 5','Industrial Training','A full semester of paid, on-the-job training with leading hotel chains.'],['Semester 6','Specialization','Elective specialization — food production, F&B, front office, bakery, events and more.'],['Semester 7–8','Management & Capstone','Strategic management, marketing, HR, entrepreneurship, hospitality law and an industry capstone project.']].map(([y,t,d])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card"><span class="yr">${y}</span><h3>${t}</h3><p>${d}</p></div></div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Specializations',title:'Shape Your Own Path'})}
  <div class="grid g4" data-stagger>${[['spec-foodproduction','Food Production','Culinary arts & cuisine mastery.'],['spec-bakery','Bakery & Confectionery','Patisserie and artisan baking.'],['spec-frontoffice','Front Office','Guest cycle & revenue management.'],['spec-fbservice','F&B Service','Fine-dining & beverage service.'],['spec-housekeeping','Housekeeping','Accommodation & styling.'],['spec-events','Event Management','MICE & banqueting.'],['spec-tourism','Tourism','Destination & travel operations.'],['spec-luxury','Luxury Operations','Five-star service culture.']].map(([img,t,d])=>specCard({img:img+'.svg',title:t,text:d})).join('')}</div>
</div></section>

<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Outcomes',title:'Where a BHM Can Take You'})}
  <div class="grid g3" data-stagger>${[['building','Hotel Operations','Management roles across luxury hotels & resorts.'],['chef-hat','Culinary Careers','Professional kitchens and celebrated restaurants.'],['plane','Aviation & Cruise','In-flight and onboard hospitality worldwide.'],['ticket','Events & MICE','Weddings, conferences and large-scale events.'],['lightbulb','Entrepreneurship','Your own café, cloud kitchen or boutique stay.'],['globe','Global Mobility','International placements across continents.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>

${ctaBand({title:'Ready to Begin Your BHM Journey?',text:'Applications for the 2026 intake are open. Secure your seat and step into a world of hospitality.',primary:['Apply Now','admissions.html'],secondary:['Download Brochure','downloads.html']})}`;}

/* ---------------- FACULTY ---------------- */
function faculty(){
  const F=[['faculty-1','Dr. Anirban Sen','Head of Department','PhD in Hospitality Management','Culinary science, service innovation'],['faculty-2','Chef Meghna Roy','Senior Faculty — Food Production','Certified Master Chef','Patisserie, modern Indian cuisine'],['faculty-3','Prof. Rajat Malhotra','Faculty — Front Office','MBA · 14 yrs luxury hotels','Revenue management, guest experience'],['faculty-4','Ms. Kavya Iyer','Faculty — F&B Service','Certified Sommelier L2','Beverage service, banquet operations'],['faculty-5','Dr. Sourav Dutta','Faculty — Tourism','PhD in Tourism Studies','Destination management, MICE'],['faculty-6','Ms. Ritika Bose','Faculty — Housekeeping','M.Sc. Hospitality','Accommodation ops, sustainability'],['faculty-7','Chef Arjun Nair','Faculty — Bakery','Le Cordon Bleu trained','Artisan bread, chocolate art'],['faculty-8','Mr. Debjit Saha','Faculty — Front Office','MBA · Ex-Marriott','PMS systems, guest relations']];
  return pageHeader({eyebrow:'Academics',title:'Our Faculty',text:'Chefs, hoteliers and scholars who have shaped luxury hospitality — now mentoring the next generation.',trail:[['Academics','programme.html']]})+`
<section class="section"><div class="container-wide">
  ${sectionHead({eyebrow:'Mentors',title:'Meet the People Behind the Craft'})}
  <div class="grid g4" data-stagger>
    ${F.map(([img,n,r,q,e])=>`<article class="faculty-card"><div class="fc-img"><img src="assets/images/${img}.svg" alt="${n}"></div><div class="fc-body"><h3>${n}</h3><div class="role">${r}</div><p><b>${q}</b><br>${e}</p><div class="fc-social"><a href="#" aria-label="LinkedIn">${icon('linkedin')}</a><a href="#" aria-label="Email">${icon('mail')}</a></div></div></article>`).join('')}
  </div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Our Approach',title:'Teaching That Transforms'})}
  <div class="grid g3" data-stagger>${[['users','Small Batches','Personal attention with low student-to-faculty ratios.'],['chef-hat','Practitioner-led','Faculty with real hotel and kitchen leadership experience.'],['globe','Guest Masterclasses','Regular sessions from visiting chefs and general managers.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>`;}

/* ---------------- INFRASTRUCTURE ---------------- */
function infra(){return pageHeader({eyebrow:'Campus',title:'Infrastructure',text:'A modern campus purpose-built for immersive hospitality learning and world-class training.',trail:[['About','about.html']]})+`
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Facilities',title:'Everything You Need to Learn by Doing'})}
  <div class="grid g3" data-stagger>${[['lab-kitchen','Training Kitchens','Professional-grade kitchens with modern equipment.'],['lab-restaurant','Mock Restaurants','Full service floors for live guest experiences.'],['lab-mockhotel','Simulated Hotel','Front office, rooms and back-of-house in one space.'],['lab-bakery','Bakery Studio','Ovens, proofers and chocolate & pastry stations.'],['lab-software','Smart Classrooms','Tech-enabled rooms with hospitality software.'],['about-campus','Hostels & Amenities','Secure hostels, dining, library and sports facilities.']].map(([img,t,d])=>`<article class="card" style="padding:0;overflow:hidden"><div style="aspect-ratio:16/10;overflow:hidden"><img src="assets/images/${img}.svg" alt="${t}" style="width:100%;height:100%;object-fit:cover"></div><div style="padding:24px"><h3 style="font-size:1.14rem">${t}</h3><p class="muted mt-2" style="font-size:.92rem">${d}</p></div></article>`).join('')}</div>
</div></section>
<section class="section section-blue"><div class="container">
  ${sectionHead({eyebrow:'Campus Highlights',title:'Built for Excellence'})}
  <div class="stats-grid" data-stagger>${statTile(12,'+','Specialised Labs')+statTile(50,'+','Smart Classrooms')+statTile(24,'/7','Hostel Support')+statTile(100,'%','Wi-Fi Campus')}</div>
</div></section>`;}

/* ---------------- LABORATORIES ---------------- */
function labs(){
  const LAB=[['lab-kitchen','Training Kitchen','Multi-cuisine kitchens with commercial ranges, tandoors and cold sections for volume cookery and live practicals.'],['lab-frontoffice','Front Office Lab','A working reception with property management software for reservations, check-in and the complete guest cycle.'],['lab-housekeeping','Housekeeping Lab','Model guest rooms to master bed-making, room styling, linen handling and luxury turndown service.'],['lab-bakery','Bakery & Confectionery Lab','Deck ovens, proofers, dough sheeters and chocolate stations for breads, pastries and desserts.'],['lab-foodproduction','Food Production Lab','Dedicated quantity kitchens for continental, Indian and international cuisine training.'],['lab-restaurant','Mock Restaurant','A fine-dining floor where students run real service — from mise en place to guest delight.'],['lab-mockhotel','Simulated Hotel','An end-to-end hotel environment integrating front office, rooms and F&B for holistic training.'],['lab-software','Hospitality Software Lab','Hands-on exposure to industry-standard POS and PMS platforms used across global chains.']];
  return pageHeader({eyebrow:'Campus',title:'Laboratories & Training Facilities',text:'Where theory meets the flame, the floor and the front desk. Our labs replicate real hospitality environments.',trail:[['About','about.html']]})+`
<section class="section"><div class="container">
  ${LAB.map((l,i)=>`<div class="split" style="${i>0?'margin-top:64px':''}"><div class="media" data-reveal="${i%2?'right':'left'}" style="${i%2?'order:2':''}"><img src="assets/images/${l[0]}.svg" alt="${l[1]}"></div><div data-reveal="${i%2?'left':'right'}"><span class="eyebrow">Lab ${String(i+1).padStart(2,'0')}</span><h2 class="h3">${l[1]}</h2><p class="muted mt-2">${l[2]}</p></div></div>`).join('')}
</div></section>
${ctaBand({title:'See Our Labs in Person',text:'Book a campus tour and experience our training facilities first-hand.',primary:['Book a Tour','contact.html'],secondary:['Apply Now','admissions.html']})}`;}

/* ---------------- PLACEMENTS ---------------- */
function placements(){return pageHeader({eyebrow:'Careers',title:'Placements',text:'A dedicated career cell, deep recruiter relationships and a placement record you can rely on.',trail:[['Placements','placements.html']]})+`
<section class="section"><div class="container">
  <div class="stats-grid" data-stagger>${statTile(96,'%','Placement Rate')+statTile(120,'+','Recruiters')+statTile(8.5,' LPA','Highest Package')+statTile(4.2,' LPA','Average Package')}</div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Recruiters',title:'Our Placement Partners'})}
  <div class="logo-grid" data-stagger>${LOGOS.map(([f,n])=>logoCell(f,n)).join('')}</div>
</div></section>
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'The Journey',title:'From Internship to Placement'})}
  <div class="timeline" data-reveal>${[['Step 01','Career Readiness','Resume clinics, grooming, aptitude and interview training.'],['Step 02','Industrial Internship','Paid on-the-job training with leading hotel chains.'],['Step 03','Pre-Placement Offers','Top interns convert training into confirmed offers.'],['Step 04','Campus Recruitment','120+ recruiters conduct on-campus selections.'],['Step 05','Placed & Beyond','Lifelong alumni network and global mobility.']].map(([y,t,d])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card"><span class="yr">${y}</span><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Success Stories',title:'Alumni Who Inspire'})}
  <div class="grid g3" data-stagger>${[['person-1','Ananya Ghosh','Commis Chef · Taj Bengal','From training kitchen to a five-star brigade in under a year.'],['person-2','Rohan Mehta','Management Trainee · Marriott','Internship converted into a coveted management-trainee role.'],['person-5','Sneha Kapoor','Guest Relations · Cruise Line','Now sailing the world in international cruise hospitality.']].map(([img,n,r,q])=>`<article class="card"><div style="display:flex;gap:14px;align-items:center;margin-bottom:14px"><img src="assets/images/${img}.svg" alt="${n}" style="width:56px;height:56px;border-radius:50%"><div><b>${n}</b><div class="role" style="color:var(--blue);font-weight:700;font-size:.85rem">${r}</div></div></div><p class="muted">“${q}”</p></article>`).join('')}</div>
</div></section>
${ctaBand({title:'Launch Your Career With Us',text:'Join a programme built to place you in the world’s best hospitality brands.',primary:['Apply Now','admissions.html'],secondary:['Meet Recruiters','industry.html']})}`;}

/* ---------------- INDUSTRY ---------------- */
function industry(){return pageHeader({eyebrow:'Partnerships',title:'Industry Collaboration',text:'Strong, lasting relationships with the world’s leading hospitality brands power our internships and placements.',trail:[['Placements','placements.html']]})+`
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Our Partners',title:'Where Excellence Meets Opportunity'})}
  <div class="logo-grid" data-stagger>${LOGOS.map(([f,n])=>logoCell(f,n)).join('')}</div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'How We Collaborate',title:'Partnerships That Add Real Value'})}
  <div class="grid g3" data-stagger>${[['briefcase','Internships','Structured, paid industrial training at partner hotels.'],['handshake','Live Projects','Students solve real operational challenges with brands.'],['users','Guest Lectures','GMs and executive chefs mentor students on campus.'],['route','Placement Drives','On-campus recruitment across luxury chains.'],['award','Certifications','Industry-recognised skill certifications and workshops.'],['globe','Global Pathways','International internships and overseas placements.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>
<section class="section section-blue"><div class="container">
  ${sectionHead({eyebrow:'Impact',title:'Collaboration in Numbers'})}
  <div class="stats-grid" data-stagger>${statTile(40,'+','Hotel Partners')+statTile(300,'+','Internships / yr')+statTile(50,'+','Guest Lectures / yr')+statTile(96,'%','Conversion to Offers')}</div>
</div></section>`;}

/* ---------------- STUDENT ACTIVITIES ---------------- */
function activities(){
  const G=[['gallery-1','Culinary Championships','National-level cook-offs & live kitchens'],['gallery-2','Bakery Festivals','Artisan bread & dessert showcases'],['gallery-3','Wine & Dine Evenings','Fine-dining service practicums'],['gallery-4','Guest Lectures','Industry leaders on campus'],['gallery-5','Industrial Visits','Behind-the-scenes at five-star hotels'],['gallery-6','Hospitality Fest','Annual flagship celebration'],['gallery-7','Cultural Events','Music, dance and celebration'],['gallery-8','Workshops & Seminars','Skill-building intensives'],['gallery-9','International Collaborations','Global exposure & exchanges']];
  return pageHeader({eyebrow:'Campus Life',title:'Student Activities',text:'Beyond the classroom — competitions, festivals, workshops and experiences that shape well-rounded professionals.',trail:[['Campus Life','student-activities.html']]})+`
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Vibrant Campus',title:'Life at IIHM'})}
  <div class="gallery-grid" data-stagger>${G.map(([img,t,d])=>`<div class="g-tile"><img src="assets/images/${img}.svg" alt="${t}"><div class="ov"><b>${t}</b><span>${d}</span></div></div>`).join('')}</div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Signature Events',title:'Moments That Matter'})}
  <div class="grid g3" data-stagger>${[['trophy','Culinary Competitions','Inter-college cook-offs and national challenges.'],['cake','Bakery & Dessert Fests','Showcasing patisserie and confectionery talent.'],['megaphone','Guest Lectures','Learning directly from industry stalwarts.'],['route','Industrial Visits','On-site learning at leading hotels and resorts.'],['sparkles','Hospitality Festival','Our flagship celebration of food, service and culture.'],['globe','International Exchanges','Cross-cultural exposure and global collaborations.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>`;}

/* ---------------- GALLERY ---------------- */
function gallery(){
  const imgs=['gallery-1','gallery-5','gallery-2','gallery-8','gallery-3','gallery-6','gallery-4','gallery-9','gallery-7','lab-kitchen','lab-bakery','lab-restaurant','lab-frontoffice','lab-mockhotel','lab-housekeeping'];
  return pageHeader({eyebrow:'Campus Life',title:'Gallery',text:'A visual journey through our kitchens, celebrations, competitions and everyday craft.',trail:[['Campus Life','student-activities.html']]})+`
<section class="section"><div class="container">
  <div class="tabs" data-reveal><button class="tab active">All</button><button class="tab">Kitchens</button><button class="tab">Events</button><button class="tab">Labs</button></div>
  <div class="masonry" data-reveal>${imgs.map((g,i)=>`<div class="m-item"><img src="assets/images/${g}.svg" alt="Gallery ${i+1}"><span class="cap">IIHM · Moments</span></div>`).join('')}</div>
</div></section>`;}

/* ---------------- RESEARCH ---------------- */
function research(){return pageHeader({eyebrow:'Knowledge',title:'Research & Innovation',text:'Advancing hospitality through research, consultancy, innovation and entrepreneurship.',trail:[['Academics','programme.html']]})+`
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Focus Areas',title:'Where We Innovate'})}
  <div class="grid g3" data-stagger>${[['microscope','Culinary Science','Food chemistry, nutrition and modern gastronomy.'],['globe','Tourism Studies','Destination management and experiential tourism.'],['trending-up','Hospitality Analytics','Data-driven guest experience and revenue insights.'],['lightbulb','Sustainability','Green kitchens, waste reduction and responsible sourcing.'],['handshake','Industry Consultancy','Advisory projects on operations and service design.'],['route','Startup Incubation','Support for cafés, cloud kitchens and hospitality ventures.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Output',title:'Publications & Projects'})}
  <div class="grid g2" data-stagger>${[['file','Journal Publications','Peer-reviewed research in hospitality and tourism journals.'],['book','Conference Papers','Presentations at national and international symposiums.'],['beaker','Innovation Prototypes','Food-tech and hospitality automation experiments.'],['award','Funded Projects','Grant-supported research and consultancy engagements.']].map(([i,t,d])=>`<div class="dl-item"><span class="dl-ico">${icon(i,'ico ico-lg')}</span><div class="dl-meta"><h3>${t}</h3><small class="muted">${d}</small></div></div>`).join('')}</div>
</div></section>`;}

/* ---------------- ACHIEVEMENTS ---------------- */
function achievements(){return pageHeader({eyebrow:'Recognition',title:'Achievements & Milestones',text:'A legacy of awards, rankings and student accomplishments across national and international stages.',trail:[['Campus Life','student-activities.html']]})+`
<section class="section"><div class="container">
  <div class="stats-grid" data-stagger>${statTile(80,'+','Awards Won')+statTile(25,'+','Competition Titles')+statTile(15,'+','Years of Excellence')+statTile(2500,'+','Successful Alumni')}</div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Timeline',title:'Milestones Through the Years'})}
  <div class="timeline" data-reveal>${[['2025','National Culinary Champions','Gold at the Young Chef India culinary challenge.'],['2024','Best Hospitality Institute — East','Recognised among the region’s top hospitality schools.'],['2023','Global Internship Tie-ups','New pathways with international hotel groups & cruise lines.'],['2022','95%+ Placement Milestone','A record-breaking placement season.'],['2021','New State-of-the-art Labs','Bakery, food production and mock-hotel facilities inaugurated.'],['2019','Silver at National Bakery Fest','Students shine in patisserie competitions.']].map(([y,t,d])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card"><span class="yr">${y}</span><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>
</div></section>
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Distinctions',title:'Awards & Recognitions'})}
  <div class="grid g4" data-stagger>${[['trophy','Culinary Golds','Multiple national cook-off titles.'],['award','Institute Rankings','Top hospitality school recognitions.'],['star','Student Honours','Excellence awards for our students.'],['shield','Accreditations','Recognised quality and standards.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}</div>
</div></section>`;}

/* ---------------- DOWNLOADS ---------------- */
function downloads(){
  const D=[['file','BHM Syllabus 2026','Complete course structure & credits','PDF · 2.4 MB'],['calendar','Academic Calendar 2026–27','Term dates, exams & holidays','PDF · 0.8 MB'],['book','Programme Brochure','Everything about IIHM & BHM','PDF · 5.1 MB'],['briefcase','Internship Guidelines','Industrial training handbook','PDF · 1.2 MB'],['shield','Examination Regulations','Assessment & evaluation norms','PDF · 1.0 MB'],['download','Admission Application Form','Apply for the 2026 intake','PDF · 0.6 MB'],['graduation-cap','Scholarship Policy','Merit & need-based support','PDF · 0.5 MB'],['building','Hostel & Facilities Guide','Accommodation and amenities','PDF · 1.1 MB']];
  return pageHeader({eyebrow:'Resources',title:'Downloads',text:'Syllabus, calendar, brochure and departmental documents — all in one place.',trail:[['Academics','programme.html']]})+`
<section class="section"><div class="container">
  <div class="grid g2" data-stagger>${D.map(([i,t,s,m])=>`<div class="dl-item"><span class="dl-ico">${icon(i,'ico ico-lg')}</span><div class="dl-meta"><h3>${t}</h3><small class="muted">${s} · ${m}</small></div><a class="dl-btn" href="#" aria-label="Download ${t}">${icon('download')}</a></div>`).join('')}</div>
  <p class="muted center mt-4" style="font-size:.9rem">Documents are provided for reference. For the latest versions, please contact the department office.</p>
</div></section>`;}

/* ---------------- NEWS & EVENTS ---------------- */
function news(){
  const N=[['gallery-6','Admissions','15 Jul 2026','BHM 2026 Admissions Now Open','Applications invited for the flagship Bachelor of Hotel Management programme with early-bird scholarships.'],['gallery-4','Workshop','08 Jul 2026','Masterclass with Michelin-trained Chef','A three-day culinary intensive on modern plating and molecular gastronomy.'],['gallery-1','Placements','28 Jun 2026','Record Placement Season Concludes','96% of the graduating batch placed across leading hospitality brands.'],['gallery-3','Event','20 Jun 2026','Wine & Dine Service Showcase','Final-year students host a full fine-dining service evening.'],['gallery-2','Competition','10 Jun 2026','Bakery Fest Winners Announced','Our patisserie team sweeps top honours at the regional bakery challenge.'],['gallery-5','Visit','02 Jun 2026','Industrial Visit to Luxury Resort','Students experience back-of-house operations at a five-star property.']];
  const E=[['20 Jul 2026','Open House & Campus Tour','Explore kitchens, labs and the mock hotel with live demos.'],['05 Aug 2026','International Chefs’ Symposium','Global culinary leaders on the future of gastronomy.'],['18 Aug 2026','Hospitality Career Fair','Meet 40+ recruiters and secure internship offers.'],['02 Sep 2026','Annual Fest — “Aatithya”','Culinary battles, service competitions and culture.']];
  return pageHeader({eyebrow:'Newsroom',title:'News & Events',text:'Announcements, workshops, competitions, placements and everything happening at IIHM.',trail:[['Campus Life','student-activities.html']]})+`
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'Latest',title:'Department News'})}
  <div class="grid g3" data-stagger>${N.map(([img,tag,date,t,d])=>`<article class="news-card"><div class="nc-img"><span class="tag">${tag}</span><img src="assets/images/${img}.svg" alt="${t}"></div><div class="nc-body"><span class="date">${icon('calendar')} ${date}</span><h3>${t}</h3><p>${d}</p><a class="btn-line mt-2" href="#">Read more ${icon('arrow-right')}</a></div></article>`).join('')}</div>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({eyebrow:'Calendar',title:'Upcoming Events'})}
  <div class="timeline" data-reveal>${E.map(([d,t,x])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card"><span class="yr">${d}</span><h3>${t}</h3><p>${x}</p></div></div>`).join('')}</div>
</div></section>`;}

/* ---------------- ADMISSIONS ---------------- */
function admissions(){return pageHeader({eyebrow:'Join Us',title:'Admissions 2026',text:'Your journey into world-class hospitality begins with a single step. Applications are now open.',trail:[]})+`
<section class="section"><div class="container">
  ${sectionHead({eyebrow:'How to Apply',title:'A Simple, Guided Process'})}
  <div class="timeline" data-reveal>${[['Step 01','Submit Application','Complete the online application form with your details and documents.'],['Step 02','Counselling & Interaction','A friendly discussion to understand your goals and aspirations.'],['Step 03','Offer & Scholarship','Receive your admission offer and applicable scholarship details.'],['Step 04','Enrolment','Confirm your seat, complete formalities and welcome aboard!']].map(([y,t,d])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card"><span class="yr">${y}</span><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>
</div></section>
<section class="section section-soft"><div class="container"><div class="split">
  <div data-reveal="left"><span class="eyebrow">Eligibility</span><h2 class="h2">Who Can Apply</h2><ul class="checklist mt-3">${['Passed 10+2 in any stream from a recognised board','Minimum aggregate as per university norms','Passion for hospitality & service','Admission based on merit and personal interaction'].map(check).join('')}</ul>
  <h3 class="h3 mt-4">Scholarships</h3><p class="muted mt-2">Merit-based scholarships, early-bird waivers and need-based assistance are available. Details are shared during counselling.</p></div>
  <div data-reveal="right"><article class="card"><h3>Enquire About Admission</h3><p class="muted mb-0" style="margin:6px 0 18px">Share your details and our admissions team will reach out with guidance.</p>
    <form class="form" data-demo>
      <div class="field"><label>Full Name</label><input required placeholder="Your name"></div>
      <div class="grid g2" style="gap:16px"><div class="field"><label>Email</label><input type="email" required placeholder="you@email.com"></div><div class="field"><label>Phone</label><input required placeholder="+91"></div></div>
      <div class="field"><label>Programme of Interest</label><select><option>Bachelor of Hotel Management (BHM)</option><option>Not sure yet</option></select></div>
      <div class="field"><label>Message</label><textarea placeholder="Tell us about your goals…"></textarea></div>
      <button class="btn btn-lg" type="submit">Submit Enquiry ${icon('arrow-right')}</button>
      <p class="form-note muted" style="font-size:.85rem"></p>
    </form></article></div>
</div></div></section>
${ctaBand({title:'Have Questions Before Applying?',text:'Our admissions team is here to help you take the next step with confidence.',primary:['Contact Admissions','contact.html'],secondary:['Download Brochure','downloads.html']})}`;}

/* ---------------- CONTACT ---------------- */
function contact(){return pageHeader({eyebrow:'Get in Touch',title:'Contact Us',text:'We’d love to hear from you. Reach out for admissions, campus visits or general enquiries.',trail:[]})+`
<section class="section"><div class="container">
  <div class="grid g3" data-stagger>
    ${[['map-pin','Visit Us','IIHM, University of Engineering & Management, University Area, Action Area III, Newtown, Kolkata 700160'],['phone','Call Us','Admissions: +91 33 2357 2059<br>Office: +91 98300 00000'],['mail','Email Us','<a href="mailto:iihm@uem.edu.in">iihm@uem.edu.in</a><br><a href="mailto:admissions@uem.edu.in">admissions@uem.edu.in</a>'],['clock','Office Hours','Mon–Sat: 9:30 AM – 6:00 PM<br>Sunday: Closed'],['headset','Emergency Contact','24×7 Helpline<br>+91 98300 11111'],['route','Getting Here','10 mins from Newtown; nearest metro & bus stops within walking distance.']].map(([i,t,d])=>`<article class="info-card"><div class="ic-ico">${icon(i,'ico ico-lg')}</div><h3>${t}</h3><p>${d}</p></article>`).join('')}
  </div>
</div></section>
<section class="section section-soft"><div class="container"><div class="split">
  <div data-reveal="left"><span class="eyebrow">Enquiry Form</span><h2 class="h2">Send Us a Message</h2><p class="muted mt-2">Fill in the form and our team will get back to you within 1–2 working days.</p>
    <form class="form mt-3" data-demo>
      <div class="grid g2" style="gap:16px"><div class="field"><label>Full Name</label><input required placeholder="Your name"></div><div class="field"><label>Phone</label><input required placeholder="+91"></div></div>
      <div class="field"><label>Email</label><input type="email" required placeholder="you@email.com"></div>
      <div class="field"><label>Subject</label><select><option>Admissions Enquiry</option><option>Campus Visit</option><option>Placements</option><option>General Enquiry</option></select></div>
      <div class="field"><label>Message</label><textarea required placeholder="How can we help?"></textarea></div>
      <button class="btn btn-lg" type="submit">Send Message ${icon('arrow-right')}</button>
      <p class="form-note muted" style="font-size:.85rem"></p>
    </form>
  </div>
  <div data-reveal="right">
    <div class="map-embed"><div class="mp">${icon('map-pin','ico ico-lg')}<div style="margin-top:8px;font-weight:700">Google Maps Embed</div><small class="muted">UEM Kolkata · Newtown Campus</small></div></div>
    <div class="grid g2 mt-3" style="gap:16px">
      <article class="info-card"><div class="ic-ico">${icon('route','ico ico-lg')}</div><h3>Transportation</h3><p class="muted">Well-connected by metro, bus and cab. Campus shuttle available from key points.</p></article>
      <article class="info-card"><div class="ic-ico">${icon('facebook','ico ico-lg')}</div><h3>Follow Us</h3><div class="footer-social" style="margin-top:6px">${['facebook','instagram','linkedin','youtube'].map(s=>`<a href="#" aria-label="${s}" style="background:var(--blue-50);color:var(--blue)">${icon(s)}</a>`).join('')}</div></article>
    </div>
  </div>
</div></div></section>`;}

module.exports = { about, vision, programme, faculty, infra, labs, placements, industry, activities, gallery, research, achievements, downloads, news, admissions, contact };
