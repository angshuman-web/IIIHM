'use strict';
const L = require('./lib');
const { icon, sectionHead, featureCard, pathCard, specCard, logoCell, ctaBand } = L;

const LOGOS = [['taj','Taj Hotels'],['oberoi','Oberoi'],['itc-hotels','ITC Hotels'],['marriott','Marriott'],['hyatt','Hyatt'],['hilton','Hilton'],['radisson','Radisson'],['leela','The Leela'],['accor','Accor'],['ihg','IHG'],['novotel','Novotel'],['lemon-tree','Lemon Tree']];

const FEATURES = [
  ['trending-up','Industry Exposure','Live projects, hotel visits and guest lectures from leading hospitality brands keep learning rooted in the real world.'],
  ['chef-hat','Practical Learning','Over 60% hands-on training across professional kitchens, labs and simulated hotel environments from semester one.'],
  ['globe','International Standards','A globally benchmarked curriculum aligned with luxury hospitality practices and international service protocols.'],
  ['briefcase','Structured Internships','Paid internships with five-star chains that convert into pre-placement offers and global career pathways.'],
  ['lightbulb','Entrepreneurship','Incubation support, food-startup mentoring and business labs for future restaurateurs and hoteliers.'],
  ['heart','Personality Development','Grooming, communication, etiquette and leadership modules that build confident, polished professionals.'],
  ['shield','Placement Support','A dedicated career cell, mock interviews and lifelong recruiter network ensuring strong placement outcomes.'],
  ['layers','State-of-the-art Facilities','Training kitchens, front-office labs, bakery, mock restaurants and hospitality software under one roof.'],
];

const SPECS = [
  ['spec-foodproduction','Food Production','Classical & modern culinary arts, continental and Indian cuisine, and volume cookery.'],
  ['spec-bakery','Bakery & Confectionery','Artisan breads, patisserie, chocolate work and dessert plating techniques.'],
  ['spec-frontoffice','Front Office Operations','Reservations, guest cycle, revenue management and world-class check-in experiences.'],
  ['spec-fbservice','Food & Beverage Service','Fine-dining service, mixology, sommelier basics and banquet operations.'],
  ['spec-housekeeping','Housekeeping','Room styling, linen & laundry management and luxury turndown standards.'],
  ['spec-events','Event Management','MICE, weddings, banquets and large-scale hospitality event execution.'],
  ['spec-tourism','Tourism','Destination management, travel operations and experiential tourism.'],
  ['spec-cruise','Cruise Hospitality','Onboard operations, guest experience and international cruise careers.'],
  ['spec-airline','Airline Hospitality','In-flight service, cabin crew grooming and aviation hospitality standards.'],
  ['spec-luxury','Luxury Hotel Operations','Five-star service culture, brand standards and guest delight strategy.'],
  ['spec-entrepreneur','Entrepreneurship','Launching cafés, cloud kitchens, boutique stays and hospitality ventures.'],
  ['spec-culinary','Culinary Innovation','Molecular gastronomy, food styling and contemporary plating trends.'],
];

const CAREERS = [
  ['building','Hotel Manager','Lead operations of luxury properties and hotel chains.'],
  ['chef-hat','Executive Chef','Command professional kitchens and design signature menus.'],
  ['utensils','Restaurant Manager','Run fine-dining outlets and F&B operations.'],
  ['ticket','Event Planner','Curate weddings, MICE and large-scale celebrations.'],
  ['headset','Hospitality Consultant','Advise brands on service design and operations.'],
  ['ship','Cruise Manager','Manage guest experiences aboard international cruises.'],
  ['plane','Airline Hospitality','Deliver premium in-flight and airport experiences.'],
  ['globe','Tourism Professional','Design destinations and travel experiences.'],
  ['lightbulb','Entrepreneur','Build cafés, cloud kitchens and boutique hospitality brands.'],
  ['award','Luxury Resort Operations','Operate premium resorts and wellness retreats.'],
];

const FACULTY = [
  ['faculty-1','Dr. Anirban Sen','Head of Department','PhD, Hospitality Management','Culinary science, service innovation'],
  ['faculty-2','Chef Meghna Roy','Sr. Faculty — Food Production','Certified Master Chef','Patisserie, modern Indian cuisine'],
  ['faculty-3','Prof. Rajat Malhotra','Faculty — Front Office','MBA, 14 yrs at luxury chains','Revenue management, guest cycle'],
  ['faculty-4','Ms. Kavya Iyer','Faculty — F&B Service','Sommelier Level 2','Beverage service, banquet ops'],
  ['faculty-5','Dr. Sourav Dutta','Faculty — Tourism','PhD, Tourism Studies','Destination management, MICE'],
  ['faculty-6','Ms. Ritika Bose','Faculty — Housekeeping','M.Sc. Hospitality','Accommodation ops, sustainability'],
];

const STUDENT_LIFE = [
  ['gallery-1','Culinary Championships','National-level cook-offs & live kitchens'],
  ['gallery-2','Bakery Fest','Artisan bread & dessert showcases'],
  ['gallery-3','Wine & Dine Evenings','Fine-dining service practicums'],
  ['gallery-4','Guest Lectures','Industry leaders on campus'],
  ['gallery-5','Industrial Visits','Behind-the-scenes at five-star hotels'],
  ['gallery-6','Hospitality Fest','Annual flagship celebration'],
];

const TESTI = [
  ['person-1','Ananya Ghosh','BHM 2023 · Taj Bengal','The training kitchens and mentorship at IIHM made my transition into a five-star kitchen seamless. I felt industry-ready from day one.',5],
  ['person-2','Rohan Mehta','Alumnus · Marriott','From mock hotel drills to real internships, IIHM builds confidence you can feel in every guest interaction. Best decision of my career.',5],
  ['person-3','Priya Nair','BHM Final Year','The specialization tracks let me discover my passion for patisserie. The bakery lab is genuinely world-class.',5],
  ['person-4','Chef Vikram Rao','Alumni · Oberoi','IIHM graduates arrive polished, punctual and technically strong. They are consistently among our top interns.',5],
  ['person-5','Sneha Kapoor','Alumna · Cruise Line','The cruise & airline modules opened international doors for me. Today I sail the world doing what I love.',5],
];

const NEWS = [
  ['gallery-6','Admissions','15 Jul 2026','BHM 2026 Admissions Now Open','Applications invited for the flagship Bachelor of Hotel Management programme with early-bird scholarships.'],
  ['gallery-4','Workshop','08 Jul 2026','Masterclass with Michelin-trained Chef','A three-day culinary intensive on modern plating and molecular gastronomy for final-year students.'],
  ['gallery-1','Placements','28 Jun 2026','Record Placement Season Concludes','96% of the graduating batch placed across leading luxury hospitality brands and international chains.'],
];

const EVENTS = [
  ['20 Jul 2026','Open House & Campus Tour','Explore our training kitchens, labs and mock hotel with live demonstrations.'],
  ['05 Aug 2026','International Chefs’ Symposium','Global culinary leaders share trends shaping the future of gastronomy.'],
  ['18 Aug 2026','Hospitality Career Fair','Meet 40+ recruiters, attend interviews and secure internship offers.'],
  ['02 Sep 2026','Annual Hospitality Fest — “Aatithya”','Culinary battles, service competitions and cultural showcases.'],
];

const FAQ = [
  ['What is the eligibility for the BHM programme?','Candidates must have passed 10+2 (any stream) from a recognised board with a minimum aggregate as per university norms. Admission is based on merit and a personal interaction.'],
  ['Are internships part of the curriculum?','Yes. Structured industrial training with reputed hotels is embedded in the programme, giving students paid, real-world exposure that often leads to pre-placement offers.'],
  ['What kind of placement support does IIHM offer?','A dedicated career cell provides resume building, grooming sessions, mock interviews and direct access to a network of luxury hotel recruiters, achieving consistently strong placement records.'],
  ['What facilities and laboratories are available?','Training kitchens, bakery & confectionery lab, front-office lab, housekeeping lab, food production labs, mock restaurants, a simulated hotel environment and hospitality software suites.'],
  ['Are scholarships available?','Yes. Merit-based scholarships, early-bird waivers and need-based assistance are available. Details are shared during counselling and on the admissions page.'],
  ['Is hostel accommodation provided?','Separate, secure and well-maintained hostel facilities for boys and girls are available with dining, Wi-Fi and 24×7 support.'],
  ['What career opportunities can I expect?','Graduates work as hotel managers, chefs, F&B professionals, event planners, cruise and airline hospitality executives, entrepreneurs and more, in India and abroad.'],
];

function stat(num, suf, lbl) {
  return `<div class="stat"><div class="num"><span data-count="${num}">0</span>${suf ? `<span class="suf">${suf}</span>` : ''}</div><div class="lbl">${lbl}</div></div>`;
}
function statTile(num, suf, lbl) {
  return `<div class="stat-tile"><div class="num"><span data-count="${num}">0</span><span class="suf">${suf}</span></div><div class="lbl">${lbl}</div></div>`;
}

module.exports = function homeContent() {
  return `
  <!-- HERO -->
  <section class="hero">
    <span class="floaty f1"></span><span class="floaty f2"></span><span class="floaty f3"></span>
    <div class="container">
      <div class="hero-inner" data-reveal>
        <span class="eyebrow">Institute of Hotel &amp; Hospitality Management · UEM</span>
        <h1>Crafting Leaders in <span class="hl">Hotel &amp; Hospitality</span> Excellence</h1>
        <p>Where world-class culinary artistry, luxury service and global hospitality careers begin. Learn by doing in professional kitchens, live labs and a fully simulated hotel environment.</p>
        <div class="hero-cta">
          <a class="btn btn-lg" href="programme.html">Explore Programme ${icon('arrow-right')}</a>
          <a class="btn btn-lg btn-ghost" href="admissions.html">Apply Now</a>
          <a class="btn btn-lg btn-outline" href="downloads.html">${icon('download')} Download Brochure</a>
        </div>
        <div class="hero-stats">
          <div class="hs"><b><span data-count="96">0</span>%</b><span>Placement Rate</span></div>
          <div class="hs"><b><span data-count="120">0</span>+</b><span>Recruiters</span></div>
          <div class="hs"><b><span data-count="15">0</span>+</b><span>Years of Excellence</span></div>
        </div>
      </div>
    </div>
    <a class="scroll-ind" href="#stats" aria-label="Scroll down"><span class="mouse"></span>Scroll</a>
  </section>

  <!-- STATS -->
  <section id="stats" class="section-sm" style="padding-top:0">
    <div class="container">
      <div class="stats-card" data-reveal="zoom">
        ${stat(96,'%','Placement')}
        ${stat(120,'+','Recruiters')}
        ${stat(40,'+','Hotel Partners')}
        ${stat(300,'+','Internships / yr')}
        ${stat(15,'+','Years Excellence')}
      </div>
      <div class="stats-grid" style="margin-top:22px" data-stagger>
        ${statTile(45,'+','Expert Faculty')}
        ${statTile(12,'+','Training Labs')}
        ${statTile(2500,'+','Alumni Network')}
        ${statTile(80,'+','Awards Won')}
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'Why IIHM', title:'Why Choose IIHM, UEM', text:'A hospitality education engineered for the real world — blending craft, character and career from the very first semester.'})}
      <div class="grid g4" data-stagger>
        ${FEATURES.map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}
      </div>
    </div>
  </section>

  <!-- PROGRAMME OVERVIEW (tabs) -->
  <section class="section">
    <div class="container">
      ${sectionHead({eyebrow:'Programme', title:'Bachelor of Hotel Management (BHM)', text:'A comprehensive 4-year (8-semester) degree that turns passion for hospitality into a global profession.'})}
      <div data-tabs data-reveal>
        <div class="tabs">
          <button class="tab active" data-tab="c">Curriculum Highlights</button>
          <button class="tab" data-tab="s">Semester Structure</button>
          <button class="tab" data-tab="o">Career Outcomes</button>
          <button class="tab" data-tab="r">Industry Relevance</button>
        </div>
        <div class="tab-panel active" data-panel="c">
          <div class="split">
            <div>
              <h3 class="h3">A curriculum built around craft</h3>
              <p class="muted mt-2">Every module pairs theory with the kitchen, the lab and the guest. Core areas span food production, F&amp;B service, front office, housekeeping, hospitality accounting, HR and strategic management.</p>
              <ul class="checklist mt-3">
                ${['Professional culinary & bakery training','Front office & accommodation operations','Food & beverage service and management','Hospitality marketing, finance & HR','Communication, French & soft skills','Entrepreneurship & hospitality law'].map(x=>`<li><span class="ck">${icon('check')}</span>${x}</li>`).join('')}
              </ul>
            </div>
            <div class="media"><img src="assets/images/programme-bhm.svg" alt="BHM programme"><div class="badge"><b>4 Yrs</b><span>8 Semesters<br>UGC-aligned degree</span></div></div>
          </div>
        </div>
        <div class="tab-panel" data-panel="s">
          <div class="grid g4">
            ${[['Year 1','Foundations','Culinary basics, service fundamentals, front office & housekeeping foundations.'],['Year 2','Core Operations','Advanced kitchen, F&B management, accommodation & hospitality accounting.'],['Year 3','Specialization + Internship','Elective specialization and a full industrial training semester.'],['Year 4','Management & Capstone','Strategic management, entrepreneurship and an industry capstone project.']].map(([y,t,d])=>`<article class="card"><span class="pill">${y}</span><h3 style="margin-top:12px">${t}</h3><p>${d}</p></article>`).join('')}
          </div>
        </div>
        <div class="tab-panel" data-panel="o">
          <div class="grid g3">
            ${[['trophy','Global Careers','Roles across luxury hotels, cruise lines, airlines and QSR brands worldwide.'],['trending-up','Fast Growth','Structured management-trainee tracks with accelerated career progression.'],['lightbulb','Own Ventures','Launch cafés, cloud kitchens and boutique hospitality brands with incubation support.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}
          </div>
        </div>
        <div class="tab-panel" data-panel="r">
          <div class="grid g3">
            ${[['handshake','Live Industry Projects','Curriculum co-designed with hotel partners and refreshed every year.'],['users','Guest Faculty','Executive chefs and GMs mentor students through masterclasses.'],['globe','International Exposure','Global service standards, exchange pathways and overseas placements.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}
          </div>
        </div>
      </div>
      <div class="center mt-4"><a class="btn" href="programme.html">View Full Programme ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- EXPERIENTIAL LEARNING -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'Learn by Doing', title:'Experiential Learning at Its Core', text:'Real kitchens. Real service. Real hotel operations. Our labs replicate the environments you will lead tomorrow.'})}
      <div class="grid g4" data-stagger>
        ${[['lab-kitchen','Training Kitchens','Professional gas & induction ranges for volume cookery.'],['lab-frontoffice','Front Office Lab','Live reservation & check-in simulations with PMS software.'],['lab-housekeeping','Housekeeping Lab','Model guest rooms for styling & turndown practice.'],['lab-bakery','Bakery & Confectionery','Ovens, proofers and chocolate stations for patisserie.'],['lab-foodproduction','Food Production Labs','Quantity kitchens for continental & Indian cuisine.'],['lab-restaurant','Mock Restaurant','Fine-dining service floor for real guest experiences.'],['lab-mockhotel','Simulated Hotel','A full mock hotel to master the guest cycle end-to-end.'],['lab-software','Hospitality Software','Hands-on exposure to industry POS & PMS platforms.']].map(([img,t,d])=>`<article class="card" style="padding:0;overflow:hidden"><div style="aspect-ratio:4/3;overflow:hidden"><img src="assets/images/${img}.svg" alt="${t}" style="width:100%;height:100%;object-fit:cover;transition:transform .6s"></div><div style="padding:22px"><h3 style="font-size:1.1rem">${t}</h3><p class="muted" style="font-size:.9rem;margin-top:6px">${d}</p></div></article>`).join('')}
      </div>
      <div class="center mt-4"><a class="btn btn-ghost" href="laboratories.html">Tour Our Laboratories ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- SPECIALIZATIONS -->
  <section class="section">
    <div class="container">
      ${sectionHead({eyebrow:'Specializations', title:'Choose Your Hospitality Path', text:'Eleven specialization tracks let you shape a career around what you love most.'})}
      <div class="grid g4" data-stagger>
        ${SPECS.map(([img,t,d])=>specCard({img:img+'.svg',title:t,text:d})).join('')}
      </div>
    </div>
  </section>

  <!-- INDUSTRY PARTNERS -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'Industry Partnerships', title:'Where Our Students Train & Get Hired', text:'Deep partnerships with the world’s most respected hospitality brands power internships and placements.'})}
      <div class="logo-grid" data-stagger>
        ${LOGOS.map(([f,n])=>logoCell(f,n)).join('')}
      </div>
      <div class="center mt-4"><a class="btn btn-ghost" href="industry.html">Explore Industry Collaboration ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- CAREER PATHWAYS -->
  <section class="section">
    <div class="container">
      ${sectionHead({eyebrow:'Career Pathways', title:'Careers That Take You Around the World', text:'A hospitality degree opens doors across hotels, kitchens, events, aviation, cruising and entrepreneurship.'})}
      <div class="grid g2" data-stagger>
        ${CAREERS.map(([i,t,d])=>pathCard({ic:i,title:t,text:d})).join('')}
      </div>
    </div>
  </section>

  <!-- PLACEMENTS -->
  <section class="section section-blue">
    <div class="container">
      ${sectionHead({eyebrow:'Placements', title:'A Placement Record You Can Trust', text:'From first internship to final offer, we walk every step with you.'})}
      <div class="stats-grid" data-stagger>
        ${statTile(96,'%','Placement Rate')}
        ${statTile(120,'+','Recruiters')}
        ${statTile(8.5,' LPA','Highest Package')}
        ${statTile(300,'+','Internships / yr')}
      </div>
      <div style="max-width:820px;margin:56px auto 0" data-reveal>
        <div class="timeline">
          ${[['Step 01','Career Readiness','Resume clinics, grooming, aptitude and communication training.'],['Step 02','Industrial Internship','Paid on-the-job training with leading hotel chains.'],['Step 03','Pre-Placement Offers','Strong interns convert internships into confirmed offers.'],['Step 04','Campus Recruitment','120+ recruiters conduct on-campus interviews & selections.'],['Step 05','Placed & Beyond','Lifelong alumni network and global career mobility.']].map(([y,t,d])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16)"><span class="yr" style="color:#ffd98a">${y}</span><h3 style="color:#fff">${t}</h3><p style="color:#c3d7f7">${d}</p></div></div>`).join('')}
        </div>
      </div>
      <div class="center mt-4"><a class="btn btn-ghost" href="placements.html">See Placement Highlights ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- FACULTY CAROUSEL -->
  <section class="section">
    <div class="container-wide">
      ${sectionHead({eyebrow:'Faculty Spotlight', title:'Learn From Industry Masters', text:'Chefs, hoteliers and scholars who have shaped luxury hospitality mentor you personally.'})}
      <div data-carousel data-reveal>
        <div class="carousel-track">
          ${FACULTY.map(([img,n,r,q,e])=>`<article class="faculty-card"><div class="fc-img"><img src="assets/images/${img}.svg" alt="${n}"></div><div class="fc-body"><h3>${n}</h3><div class="role">${r}</div><p><b>${q}</b><br>${e}</p><div class="fc-social"><a href="#" aria-label="LinkedIn">${icon('linkedin')}</a><a href="#" aria-label="Email">${icon('mail')}</a></div></div></article>`).join('')}
        </div>
        <div class="carousel-nav"><button data-prev aria-label="Previous">${icon('arrow-right','ico')}<span style="transform:rotate(180deg);display:inline-flex">${icon('arrow-right')}</span></button><button data-next aria-label="Next">${icon('arrow-right')}</button></div>
      </div>
      <div class="center mt-2"><a class="btn btn-ghost" href="faculty.html">Meet All Faculty ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- STUDENT LIFE -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'Campus Life', title:'A Vibrant Student Experience', text:'Competitions, festivals, guest lectures and industrial visits that make learning unforgettable.'})}
      <div class="gallery-grid" data-stagger>
        ${STUDENT_LIFE.map(([img,t,d])=>`<div class="g-tile"><img src="assets/images/${img}.svg" alt="${t}"><div class="ov"><b>${t}</b><span>${d}</span></div></div>`).join('')}
      </div>
      <div class="center mt-4"><a class="btn btn-ghost" href="student-activities.html">Explore Student Activities ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- ACHIEVEMENTS TIMELINE -->
  <section class="section">
    <div class="container">
      ${sectionHead({eyebrow:'Achievements', title:'Milestones & Recognitions', text:'A legacy of awards, rankings and student accomplishments in national and international arenas.'})}
      <div class="timeline" data-reveal>
        ${[['2025','National Culinary Champions','IIHM team wins gold at the Young Chef India culinary challenge.'],['2024','Best Hospitality Institute — East','Recognised among the region’s top hospitality schools.'],['2023','International Internship Tie-ups','New pathways established with global hotel groups and cruise lines.'],['2022','Record Placements','Crossed a 95% placement milestone for the graduating batch.'],['2021','State-of-the-art Labs','Inauguration of new bakery, food production and mock-hotel facilities.']].map(([y,t,d])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card"><span class="yr">${y}</span><h3>${t}</h3><p>${d}</p></div></div>`).join('')}
      </div>
      <div class="center mt-4"><a class="btn btn-ghost" href="achievements.html">All Achievements ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- GALLERY PREVIEW (masonry) -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'Gallery', title:'Moments From Our Campus', text:'A glimpse into the kitchens, celebrations and everyday craft that define life at IIHM.'})}
      <div class="masonry" data-reveal>
        ${['gallery-1','gallery-5','gallery-2','gallery-8','gallery-3','gallery-6','gallery-4','gallery-9','gallery-7'].map((g,i)=>`<div class="m-item"><img src="assets/images/${g}.svg" alt="Gallery ${i+1}"><span class="cap">IIHM · Moments</span></div>`).join('')}
      </div>
      <div class="center mt-4"><a class="btn" href="gallery.html">Open Full Gallery ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section">
    <div class="container-wide">
      ${sectionHead({eyebrow:'Testimonials', title:'Voices of Our Students', text:'Students, alumni and recruiters share what makes IIHM special.'})}
      <div data-carousel data-reveal>
        <div class="testi-track">
          ${TESTI.map(([img,n,r,q,s])=>`<article class="testi"><div class="quote">“</div><div class="stars">${'★'.repeat(s)}</div><p>${q}</p><div class="who"><img src="assets/images/${img}.svg" alt="${n}"><div><b>${n}</b><span>${r}</span></div></div></article>`).join('')}
        </div>
        <div class="carousel-nav"><button data-prev aria-label="Previous"><span style="transform:rotate(180deg);display:inline-flex">${icon('arrow-right')}</span></button><button data-next aria-label="Next">${icon('arrow-right')}</button></div>
      </div>
    </div>
  </section>

  <!-- NEWS -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'Newsroom', title:'Latest News & Announcements', text:'Admission notices, workshops, competitions and placement updates from the department.'})}
      <div class="grid g3" data-stagger>
        ${NEWS.map(([img,tag,date,t,d])=>`<article class="news-card"><div class="nc-img"><span class="tag">${tag}</span><img src="assets/images/${img}.svg" alt="${t}"></div><div class="nc-body"><span class="date">${icon('calendar')} ${date}</span><h3>${t}</h3><p>${d}</p><a class="btn-line mt-2" href="news-events.html">Read more ${icon('arrow-right')}</a></div></article>`).join('')}
      </div>
      <div class="center mt-4"><a class="btn btn-ghost" href="news-events.html">All News & Events ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- EVENTS TIMELINE -->
  <section class="section">
    <div class="container">
      ${sectionHead({eyebrow:'Upcoming', title:'Events & Department Calendar', text:'Mark your calendar — open houses, symposiums, career fairs and our flagship fest.'})}
      <div class="timeline" data-reveal>
        ${EVENTS.map(([d,t,x])=>`<div class="tl-item"><span class="dot"></span><div class="tl-card"><span class="yr">${d}</span><h3>${t}</h3><p>${x}</p></div></div>`).join('')}
      </div>
    </div>
  </section>

  <!-- RESEARCH & INNOVATION -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'Research & Innovation', title:'Advancing Hospitality Knowledge', text:'Publications, consultancy and innovation projects that push the industry forward.'})}
      <div class="grid g3" data-stagger>
        ${[['microscope','Applied Research','Faculty-led studies in culinary science, tourism and guest experience.'],['handshake','Industry Consultancy','Advisory projects with hotels on operations and service design.'],['lightbulb','Innovation Projects','Sustainable kitchens, food-tech and hospitality automation prototypes.'],['graduation-cap','Student Research','Undergraduate research on food trends and hospitality analytics.'],['route','Startup Support','Incubation for cafés, cloud kitchens and boutique hospitality ventures.'],['globe','Collaborations','Joint programmes with international institutions and hotel groups.']].map(([i,t,d])=>featureCard({ic:i,title:t,text:d})).join('')}
      </div>
      <div class="center mt-4"><a class="btn btn-ghost" href="research.html">Explore Research ${icon('arrow-right')}</a></div>
    </div>
  </section>

  <!-- DOWNLOADS -->
  <section class="section">
    <div class="container">
      ${sectionHead({eyebrow:'Resources', title:'Downloads & Documents', text:'Everything you need — from the syllabus to the academic calendar — in one place.'})}
      <div class="grid g2" data-stagger>
        ${[['file','BHM Syllabus 2026','PDF · 2.4 MB'],['calendar','Academic Calendar','PDF · 0.8 MB'],['book','Programme Brochure','PDF · 5.1 MB'],['briefcase','Internship Guidelines','PDF · 1.2 MB'],['shield','Examination Regulations','PDF · 1.0 MB'],['download','Admission Form','PDF · 0.6 MB']].map(([i,t,m])=>`<div class="dl-item"><span class="dl-ico">${icon(i,'ico ico-lg')}</span><div class="dl-meta"><h3>${t}</h3><small>${m}</small></div><a class="dl-btn" href="downloads.html" aria-label="Download ${t}">${icon('download')}</a></div>`).join('')}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section section-soft">
    <div class="container">
      ${sectionHead({eyebrow:'FAQ', title:'Frequently Asked Questions', text:'Answers to what prospective students and parents ask us most.'})}
      <div class="accordion" data-reveal>
        ${FAQ.map(([q,a],i)=>`<div class="acc-item${i===0?' open':''}"><button class="acc-q">${q}<span class="pm">${icon('plus')}</span></button><div class="acc-a"${i===0?' style="max-height:400px"':''}><div>${a}</div></div></div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ADMISSION CTA -->
  ${ctaBand({title:'Your Hospitality Career Starts Here', text:'Join one of the region’s leading Hotel & Hospitality Management departments and step into a world of global opportunity.', primary:['Apply for Admission','admissions.html'], secondary:['Talk to Us','contact.html']})}
  `;
};
