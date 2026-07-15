// ---- Institute contact details & key links ----
export const ADMISSIONS_URL = 'https://exam.iem.edu.in/';
export const CONTACT = {
  phone: '+91-98755 98082',
  phoneHref: 'tel:+919875598082',
  email: 'admissions@iiihm.in',
  website: 'iiihm.iem.edu.in',
  websiteHref: 'https://iiihm.iem.edu.in',
  address: "IEM's International Institute of Hotel Management, Under University of Engineering & Management, Plot No. J-1/1, Block EP & GP, Sector-V, Salt Lake, Kolkata – 700091",
  addressShort: 'Salt Lake, Kolkata – 700091',
};

// Downloadable documents — drop the real PDFs at public/assets/docs/<name>.pdf
export const DOCS = {
  syllabus: '/assets/docs/syllabus.pdf',
  calendar: '/assets/docs/academic-calendar.pdf',
  holidays: '/assets/docs/holiday-list.pdf',
};

// ---- Navigation (mega-menu structure) ----
// item: { label, to } | { label, mega: { image, wide, align, columns: [{ title, links:[{ label, to, external }] }] } }
export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    mega: {
      image: 'about-campus',
      align: 'left',
      columns: [
        { title: 'The Institute', links: [
          { label: 'About IIIHM', to: '/about' },
          { label: 'Vision & Mission', to: '/vision-mission' },
        ]},
        { title: 'Leadership', links: [
          { label: "Chancellor's Message", to: '/chancellors-message' },
          { label: "Vice-Chancellor's Message", to: '/vice-chancellors-message' },
          { label: "Pro Vice-Chancellor's Message", to: '/pro-vice-chancellors-message' },
        ]},
        { title: 'Campus', links: [
          { label: 'Infrastructure', to: '/infrastructure' },
          { label: 'Laboratories', to: '/laboratories' },
        ]},
      ],
    },
  },
  {
    label: 'Academics',
    to: '/programme',
    mega: {
      image: 'programme-bhm',
      columns: [
        { title: 'Programmes', links: [
          { label: 'BHMCT', to: '/programme' },
          { label: 'BHHA', to: '/programme' },
          { label: 'Courses Offered', to: '/courses-offered' },
        ]},
        { title: 'People & Resources', links: [
          { label: 'Faculty', to: '/faculty' },
          { label: 'Our MoU', to: '/mou' },
          { label: 'Syllabus', to: DOCS.syllabus, external: true },
          { label: 'Academic Calendar', to: DOCS.calendar, external: true },
          { label: 'Holiday List', to: DOCS.holidays, external: true },
        ]},
      ],
    },
  },
  {
    label: 'Placements',
    to: '/placements',
    mega: {
      image: 'placements',
      columns: [
        { title: 'Placements', links: [
          { label: 'Placement Overview', to: '/placements' },
          { label: 'Training & Placements', to: '/training-placements' },
        ]},
      ],
    },
  },
  {
    label: 'Campus Life',
    to: '/student-activities',
    mega: {
      image: 'student-life',
      align: 'right',
      columns: [
        { title: 'Student Life', links: [
          { label: 'Student Activities', to: '/student-activities' },
          { label: 'Achievements', to: '/achievements' },
          { label: 'News & Events', to: '/news-events' },
        ]},
        { title: 'At the Institute', links: [
          { label: 'Rules of IIIHM', to: '/rules' },
          { label: 'Professional Bodies', to: '/professional-bodies' },
        ]},
      ],
    },
  },
  {
    label: 'Admissions',
    to: ADMISSIONS_URL,
    external: true,
    mega: {
      image: 'admissions-cta',
      align: 'right',
      feature: { label: 'Apply Online', desc: 'Start your application on the IEM exam portal', to: ADMISSIONS_URL, external: true },
      columns: [
        { title: 'Admissions', links: [
          { label: 'Fees Structure', to: '/fees-structure' },
          { label: 'Courses Offered', to: '/courses-offered' },
          { label: 'Our MoU', to: '/mou' },
        ]},
      ],
    },
  },
  { label: 'Contact', to: '/contact' },
];

// ---- Programmes / courses offered ----
export const COURSES = [
  ['graduation-cap', 'Bachelor of Hotel Management & Catering Technology', 'BHMCT', '4 Years · 8 Semesters',
    'A comprehensive honours degree spanning food production, F&B service, front office, housekeeping and hospitality management — with dual major specializations and a full industrial internship.'],
  ['utensils', 'B.Sc. in Hospitality & Hotel Administration', 'BHHA', '3 Years · 6 Semesters',
    'An industry-aligned degree blending operational craft with management foundations, preparing students for global careers across hotels, tourism, aviation and allied hospitality sectors.'],
];

// ---- Training & placements ----
export const PLACEMENT_CONTACT = {
  name: 'Mr. Sanjoy Gupta',
  role: 'Placement Cell',
  phone: '+91 90838 19023',
  phoneHref: 'tel:+919083819023',
  email: 'sanjoy.gupta@uem.edu.in',
};
// [name, description, [rotating images]]
export const TRAINING_PARTNERS = [
  ['TajSats Kolkata Pvt. Ltd.', 'Catering & food-service vocational training.', ['vocation1a', 'vocation1b', 'vocation1c']],
  ['3S Travel Network Pvt. Ltd.', 'Travel & hospitality-sector industry exposure.', ['vocation2a', 'vocation2b', 'vocation2c']],
];
export const RECRUIT_SECTORS = ['Hotels & Resorts', 'Restaurants & QSR', 'Travel Networks', 'Airlines', 'Retail Hospitality'];

// ---- Placements by year (source: iiihm.in/training-placements) ----
// [student name, company/hotel]
export const PLACEMENTS_BY_YEAR = {
  '2024': [
    ['Abhishek Tiwari', 'The Oberoi Grand, Kolkata'],
    ['Utsab Ghosh', 'ITC Sonar'],
    ['Pabitra Ghosh', 'ITC Royal Bengal'],
    ['Shahreyar Khan', 'Hotel Mayura'],
    ['Riya Mondal', 'The Vedic Village, Kolkata'],
    ['Suhani Raj', 'Conrad, Bengaluru'],
  ],
  '2023': [
    ['Amar Kumar Bhujel', 'Crowne Plaza Ahmedabad'],
    ['Anushka Das', 'Hyatt Kolkata'],
    ['Arnab Ghosh', 'ITC Royal Bengal'],
    ['Arnab Mondal', 'The Deltin Daman'],
    ['Arpan Ghosh', 'Palm Meadows Bengaluru'],
    ['Gungun Saha', 'JW Marriott Kolkata'],
    ['Isha Dutta', 'Indigo Airlines'],
    ['Bidisha Saha', 'IEMA'],
    ['Jyoti Bhowmick', 'The Deltin Daman'],
    ['Jyoti Nayak', 'The Westin Pune'],
    ['Piyali Saha', 'Marriott Goa'],
    ['Rahul Shaw', 'Hyatt Amritsar'],
    ['Sudipto Kundu', 'Indigo Airlines'],
    ['Sutanu Dutta', 'ITC Royal Bengal'],
    ['Sandipa Biswas', 'The Deltin Daman'],
  ],
  '2022': [
    ['Devarya Ghosh', 'Quess Corp'],
    ['Anjali Kumari', 'Novotel Bengaluru'],
    ['Aditya Gayen', 'Sayaji Indore'],
    ['Anupam Sharma', 'Shawn Elizey, Jabalpur'],
    ['Anwesha Deb', 'Sarovar Kerala'],
    ['Bijoy Biswas', 'Novotel Bengaluru'],
    ['Bikram Sarkar', 'Sarovar Kerala'],
    ['Churni Bhattacharyya', 'Royal Orchid'],
    ['Isani Patra', 'Novotel Kolkata'],
    ['Komal Kumari', 'Novotel Ahmedabad'],
    ['Krishnendu Jana', 'Novotel Kolkata'],
    ['Manisha Das', 'Triton by Daiichi, Raipur'],
    ['Meghna Sardar', 'Reliance Retail JioMart'],
    ['Nisha Karmakar', 'Triton by Daiichi, Raipur'],
    ['Paramita Guha', 'Novotel Bengaluru'],
    ['Payal Thakur', 'Novotel Bengaluru'],
    ['Pradipta Ghosh', 'Sarovar Kerala'],
    ['Prasanta Seal', 'Le Meridien Goa'],
    ['Pratibha Kumari', 'Triton by Daiichi, Raipur'],
    ['Pritam Dhar', 'Reliance Retail JioMart'],
    ['Priyanka Ghosh', 'Novotel Bengaluru'],
    ['Puja Sethia', 'Reliance Retail JioMart'],
    ['Rachaita Majumder', 'Novotel Bengaluru'],
    ['Ranojoy Ghosh', 'Sayaji Indore'],
    ['Sanower Sk', 'Shawn Elizey, Jabalpur'],
    ['Sipan Majumder', 'Shawn Elizey, Jabalpur'],
    ['Soumya Debnath', 'ITC One Complex'],
    ['Subhajit Jana', 'Sayaji Indore'],
    ['Surajit Halder', 'Absolute Barbecues'],
    ['Syed Zeeshan Hussain', 'Shawn Elizey, Jabalpur'],
    ['Tumpa Gharai', 'ITC One Complex'],
  ],
};

// slug helpers shared by the placements UI and the asset-generation script
export const firstNameSlug = (name) => name.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '');
export const companySlug = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// ---- Fees (BHMCT, per semester in ₹) ----
export const FEE_ROWS = [
  ['Semester 1', '50,000', '10,000', '60,000'],
  ['Semester 2', '50,000', '—', '50,000'],
  ['Semester 3', '50,000', '—', '50,000'],
  ['Semester 4', '50,000', '—', '50,000'],
  ['Semester 5', '50,000', '—', '50,000'],
  ['Semester 6', '50,000', '—', '50,000'],
  ['Semester 7', '50,000', '—', '50,000'],
  ['Semester 8', '50,000', '—', '50,000'],
];
export const FEE_TOTAL = '4,10,000';

// ---- Site search index (used by the navbar search) ----
export const SEARCH_INDEX = [
  { label: 'Home', to: '/', cat: 'Page', keywords: 'home main' },
  { label: 'About IIIHM', to: '/about', cat: 'About', keywords: 'about institute history' },
  { label: 'Vision & Mission', to: '/vision-mission', cat: 'About', keywords: 'vision mission values' },
  { label: "Chancellor's Message", to: '/chancellors-message', cat: 'Leadership', keywords: 'chancellor message banani chakrabarti' },
  { label: "Vice-Chancellor's Message", to: '/vice-chancellors-message', cat: 'Leadership', keywords: 'vice chancellor message' },
  { label: "Pro Vice-Chancellor's Message", to: '/pro-vice-chancellors-message', cat: 'Leadership', keywords: 'pro vice chancellor satyajit chakrabarty' },
  { label: 'Infrastructure', to: '/infrastructure', cat: 'Campus', keywords: 'infrastructure campus facilities' },
  { label: 'Laboratories', to: '/laboratories', cat: 'Campus', keywords: 'labs kitchen aviation front office bakery' },
  { label: 'Programmes (BHMCT & BHHA)', to: '/programme', cat: 'Academics', keywords: 'bhmct bhha degree programme course hotel management' },
  { label: 'Courses Offered', to: '/courses-offered', cat: 'Academics', keywords: 'courses bhmct bhha' },
  { label: 'Faculty', to: '/faculty', cat: 'Academics', keywords: 'faculty mentors teachers professors' },
  { label: 'Fees Structure', to: '/fees-structure', cat: 'Academics', keywords: 'fees fee structure cost scholarship' },
  { label: 'Our MoU', to: '/mou', cat: 'Academics', keywords: 'mou memorandum understanding udaan uma internship' },
  { label: 'Placements', to: '/placements', cat: 'Placements', keywords: 'placements jobs recruiters students' },
  { label: 'Training & Placements', to: '/training-placements', cat: 'Placements', keywords: 'training vocational placements' },
  { label: 'Student Activities', to: '/student-activities', cat: 'Campus Life', keywords: 'student activities life clubs' },
  { label: 'Achievements', to: '/achievements', cat: 'Campus Life', keywords: 'achievements awards milestones' },
  { label: 'News & Events', to: '/news-events', cat: 'Campus Life', keywords: 'news events announcements' },
  { label: 'Rules of IIIHM', to: '/rules', cat: 'Campus Life', keywords: 'rules regulations dress code discipline' },
  { label: 'Professional Bodies', to: '/professional-bodies', cat: 'Campus Life', keywords: 'professional bodies icf hraei membership' },
  { label: 'Contact', to: '/contact', cat: 'Page', keywords: 'contact address phone email map' },
  { label: 'Privacy Policy', to: '/privacy-policy', cat: 'Legal', keywords: 'privacy policy data cookies' },
  { label: 'Apply Online', to: ADMISSIONS_URL, external: true, cat: 'Admissions', keywords: 'apply admission online exam portal' },
];

// ---- Rules & regulations ----
export const RULES = [
  ['shield', 'General Conduct', [
    'Comply with the rules and regulations of IIIHM under the University of Engineering & Management, Kolkata.',
    'Maintain professional and courteous conduct with faculty, staff and fellow students at all times.',
  ]],
  ['briefcase', 'Dress Code', [
    'Boys: grey trousers, white full-sleeve shirt bearing the IEM logo, uniform tie and IIIHM blazer.',
    'Boys: formal black Oxford shoes with black socks; name plate is mandatory during college hours.',
    'Girls: grey trousers, white full-sleeve shirt bearing the IEM logo and uniform tie, kept tucked in.',
    'Not permitted for anyone: jeans, t-shirts, hair dye, visible tattoos, spiked hairstyles or rolled-up sleeves.',
  ]],
  ['star', 'Grooming Standards', [
    'Boys: clean, neatly styled, well-combed short hair with sides not covering the ears; no long side locks.',
    'Girls: hair kept away from the face and off the shoulders, or tied neatly in a bun / ponytail.',
    'No hair colour or bleaching, no visible tattoos, no showy watches, and no mobile phone use on campus.',
  ]],
  ['book', 'Library Rules', [
    'A library card is issued after joining the University and is valid across all semesters.',
    'Return books within the stipulated period and maintain complete silence inside the library.',
    'Eatables and mobile phones are not allowed inside the library.',
  ]],
  ['target', 'Discipline', [
    'Major offences — ragging, consumption of alcohol/drugs, assault, cheating or theft — may lead to rustication.',
    'Minor offences — abusive language, dress-code violations or disobeying instructions — may attract warnings, suspension or fines.',
  ]],
];

// ---- Professional bodies ----
export const PROFESSIONAL_BODIES = [
  ['icf', 'Indian Culinary Forum (ICF)',
    'A proud member of the ICF — India’s premier association of professional chefs — fostering culinary innovation, skill development and excellence across the industry.'],
  ['hraei', 'Hotel & Restaurant Association of Eastern India (HRAEI)',
    'A member of HRAEI, championing the interests, standards and growth of the hospitality and restaurant industry across Eastern India.'],
];

// ---- Memorandum of Understanding ----
export const MOU_IMAGES = ['mou1', 'mou2', 'mou3', 'mou4'];

export const LOGOS = [
  ['taj', 'Taj Hotels'], ['oberoi', 'Oberoi'], ['itc-hotels', 'ITC Hotels'], ['marriott', 'Marriott'],
  ['hyatt', 'Hyatt'], ['hilton', 'Hilton'], ['radisson', 'Radisson'], ['leela', 'The Leela'],
  ['accor', 'Accor'], ['ihg', 'IHG'], ['novotel', 'Novotel'], ['lemon-tree', 'Lemon Tree'],
];

// ---- Why IIIHM — key differentiators ----
// [icon, title, text, hoverImage] — the image fills the card on hover.
export const FEATURES = [
  ['award', 'A Legacy of Excellence', '31 years of glorious academic excellence of the IEM Group.', 'why1'],
  ['lightbulb', 'Future-Ready Curriculum', 'The first hotel management school in India to teach AI, IoT, ML & Digital Marketing in its syllabus.', 'why2'],
  ['handshake', 'Industry Connections', 'Tie-ups with hospitality-industry leaders and HRs of leading 5-star properties as guest speakers.', 'why3'],
];

export const SPECS = [
  ['spec-foodproduction', 'Food Production', 'Classical & modern culinary arts, continental and Indian cuisine, and volume cookery.'],
  ['spec-bakery', 'Bakery & Confectionery', 'Artisan breads, patisserie, chocolate work and dessert plating techniques.'],
  ['spec-frontoffice', 'Front Office Operations', 'Reservations, guest cycle, revenue management and world-class check-in experiences.'],
  ['spec-fbservice', 'Food & Beverage Service', 'Fine-dining service, mixology, sommelier basics and banquet operations.'],
  ['spec-housekeeping', 'Housekeeping', 'Room styling, linen & laundry management and luxury turndown standards.'],
  ['spec-events', 'Event Management', 'MICE, weddings, banquets and large-scale hospitality event execution.'],
  ['spec-tourism', 'Tourism', 'Destination management, travel operations and experiential tourism.'],
  ['spec-cruise', 'Cruise Hospitality', 'Onboard operations, guest experience and international cruise careers.'],
  ['spec-airline', 'Airline Hospitality', 'In-flight service, cabin crew grooming and aviation hospitality standards.'],
  ['spec-luxury', 'Luxury Hotel Operations', 'Five-star service culture, brand standards and guest delight strategy.'],
  ['spec-entrepreneur', 'Entrepreneurship', 'Launching cafés, cloud kitchens, boutique stays and hospitality ventures.'],
  ['spec-culinary', 'Culinary Innovation', 'Molecular gastronomy, food styling and contemporary plating trends.'],
];

export const CAREERS = [
  ['building', 'Hotel Manager', 'Lead operations of luxury properties and hotel chains.'],
  ['chef-hat', 'Executive Chef', 'Command professional kitchens and design signature menus.'],
  ['utensils', 'Restaurant Manager', 'Run fine-dining outlets and F&B operations.'],
  ['ticket', 'Event Planner', 'Curate weddings, MICE and large-scale celebrations.'],
  ['headset', 'Hospitality Consultant', 'Advise brands on service design and operations.'],
  ['ship', 'Cruise Manager', 'Manage guest experiences aboard international cruises.'],
  ['plane', 'Airline Hospitality', 'Deliver premium in-flight and airport experiences.'],
  ['globe', 'Tourism Professional', 'Design destinations and travel experiences.'],
  ['lightbulb', 'Entrepreneur', 'Build cafés, cloud kitchens and boutique hospitality brands.'],
  ['award', 'Luxury Resort Operations', 'Operate premium resorts and wellness retreats.'],
];

// Faculty & mentors of the BHM Department (source: iiihm.in/faculty-mentors).
// [image, name, designation, department/specialization, focus area]
export const FACULTY = [
  ['faculty-7', 'Prof. Koustav Bose', 'Assistant Professor & Head of Department', 'BHM Department', 'Leads the Bachelor of Hotel Management programme'],
  ['faculty-8', 'Prof. Suman Barman', 'Assistant Professor & Asst. Head of Department', 'Hospitality Operations', 'Hotel operations and management studies'],
  ['faculty-2', 'Chef Supriya Mishra', 'Assistant Professor', 'Food Production & Culinary Arts', 'Professional cookery and kitchen operations'],
  ['faculty-1', 'Chef Soumik Bhattacharya', 'Chef & Lecturer', 'Food Production', 'Live kitchen training and culinary skills'],
  ['faculty-4', 'Prof. Pooja Tandoon', 'Aviation Trainer', 'Airline & Cabin Crew Training', 'In-flight service and aviation hospitality'],
  ['faculty-6', 'Prof. Anusua Dutta Roy', 'Assistant Professor', 'Hospitality Management', 'Front office and guest service operations'],
  ['faculty-5', 'Prof. Ujjwal Basu', 'Assistant Professor', 'Food & Beverage Service', 'F&B service and restaurant management'],
  ['faculty-3', 'Mr. Anurag Banerjee', 'Department Intern', 'BHM Department', 'Supports training, labs and student activities'],
];

// Laboratories & training facilities (source: iiihm.in/infrastructure)
export const LABS = [
  ['lab-foodproduction', 'Advanced Food Production Lab', 'Equipped with modern cooking appliances and utensils for practical culinary training across a range of techniques and styles — including a dedicated Baking & Pastry section with ovens, mixers and equipment for breads, pastries and desserts.'],
  ['lab-housekeeping', 'Advanced Accommodation Lab', 'Simulates hotel-room environments with housekeeping amenities, where students practise room setup, cleaning procedures and guest-service protocols.'],
  ['lab-frontoffice', 'Advanced Front Office Lab', 'Equipped with a reception desk and computers, training students in guest check-in / check-out and reservation procedures that mirror actual front-desk operations.'],
  ['lab-restaurant', 'Advanced Restaurant Setup', 'A restaurant-style setup with tables, chairs and a beverage area — focused on restaurant service, order-taking, beverage management and food presentation.'],
  ['lab-aviation', 'Neerja Bhanot Aviation Lab', 'A specialized facility dedicated to aviation studies and training, covering aviation safety, security and management.'],
  ['lab-software', 'Computer Lab', 'Equipped with hospitality-management software and reservation systems for hands-on exposure to the platforms used across the industry.'],
  ['lab-seminar', 'Seminar Halls & Auditoriums', 'Spacious halls used for conducting workshops, seminars and guest lectures — fully equipped with modern audio-visual facilities.'],
  ['lab-library', 'Library', 'A well-stocked library holding a collection of books, journals and resources dedicated to Hotel Management, offering a quiet space for study and research.'],
  ['lab-classroom', 'ICT-Enabled Classrooms', 'Smart classrooms equipped with audio-visual aids for theoretical sessions, enabling interactive teaching and lively group discussions.'],
];

export const LAB_CARDS = [
  ['lab-kitchen', 'Training Kitchens', 'Professional gas & induction ranges for volume cookery.'],
  ['lab-frontoffice', 'Front Office Lab', 'Live reservation & check-in simulations with PMS software.'],
  ['lab-housekeeping', 'Housekeeping Lab', 'Model guest rooms for styling & turndown practice.'],
  ['lab-bakery', 'Bakery & Confectionery', 'Ovens, proofers and chocolate stations for patisserie.'],
  ['lab-foodproduction', 'Food Production Labs', 'Quantity kitchens for continental & Indian cuisine.'],
  ['lab-restaurant', 'Mock Restaurant', 'Fine-dining service floor for real guest experiences.'],
  ['lab-mockhotel', 'Simulated Hotel', 'A full mock hotel to master the guest cycle end-to-end.'],
  ['lab-software', 'Hospitality Software', 'Hands-on exposure to industry POS & PMS platforms.'],
];

export const TESTI = [
  ['komal', 'Komal Kumari', 'Novotel, Ahmedabad', 'Attending IIIHM was the best decision I made for my future. The supportive faculty, industry-relevant curriculum and real-world exposure have equipped me with the confidence and knowledge to excel in the dynamic world of hospitality.', 5],
  ['anjali', 'Anjali Kumari', 'Novotel, Bengaluru', 'IIIHM exceeded all my expectations! From state-of-the-art facilities to dedicated mentors, every aspect of my journey here was exceptional. Thanks to IIIHM, I’m confidently stepping into the hospitality industry with a solid foundation and endless possibilities ahead.', 5],
  ['devarya', 'Devarya Ghosh', 'Quess Corp', 'IIIHM transformed my passion for hospitality into a career reality! I’ve acquired invaluable skills that have set me on a path to success in the industry, thanks to expert guidance and hands-on training.', 5],
  ['aditya', 'Aditya Gayen', 'Sayaji, Indore', 'My experience at IIIHM has been truly transformative. The practical learning approach, expert faculty and continuous industry interaction helped me develop both professional skills and personal confidence. IIIHM has prepared me to thrive in the fast-paced hospitality industry.', 5],
  ['komal', 'Komal Kumari', 'Novotel, Ahmedabad', 'IIIHM provided me with the perfect blend of academic excellence and hands-on training. The encouraging environment, experienced mentors and exposure to real hospitality operations gave me the skills and confidence to pursue a successful career in the global hospitality sector.', 5],
];

// Flavour Garden — the campus café, jointly founded by IIIHM (Hotel Management
// Institute of the IEM-UEM Group) and the IEM Research Foundation (IEM RF).
export const FLAVOUR_GARDEN_IMAGES = [ 'flavour-garden2', 'flavour-garden3', 'flavour-garden4', 'flavour-garden5'];
export const FLAVOUR_GARDEN_MAP_URL = 'https://maps.app.goo.gl/pPtVdq6HhnKgsZxf7';

export const NEWS = [
  ['gallery-6', 'Admissions', '15 Jul 2026', 'BHM 2026 Admissions Now Open', 'Applications invited for the flagship Bachelor of Hotel Management programme with early-bird scholarships.'],
  ['gallery-4', 'Workshop', '08 Jul 2026', 'Masterclass with Michelin-trained Chef', 'A three-day culinary intensive on modern plating and molecular gastronomy for final-year students.'],
  ['gallery-1', 'Placements', '28 Jun 2026', 'Record Placement Season Concludes', '96% of the graduating batch placed across leading luxury hospitality brands and international chains.'],
  ['gallery-3', 'Event', '20 Jun 2026', 'Wine & Dine Service Showcase', 'Final-year students host a full fine-dining service evening for invited guests.'],
  ['gallery-2', 'Competition', '10 Jun 2026', 'Bakery Fest Winners Announced', 'Our patisserie team sweeps top honours at the regional bakery challenge.'],
  ['gallery-5', 'Visit', '02 Jun 2026', 'Industrial Visit to Luxury Resort', 'Students experience back-of-house operations at a five-star property.'],
];

export const EVENTS = [
  ['20 Jul 2026', 'Open House & Campus Tour', 'Explore our training kitchens, labs and mock hotel with live demonstrations.'],
  ['05 Aug 2026', 'International Chefs’ Symposium', 'Global culinary leaders share trends shaping the future of gastronomy.'],
  ['18 Aug 2026', 'Hospitality Career Fair', 'Meet 40+ recruiters, attend interviews and secure internship offers.'],
  ['02 Sep 2026', 'Annual Hospitality Fest — “Aatithya”', 'Culinary battles, service competitions and cultural showcases.'],
];

export const FAQ = [
  ['What is the eligibility for the BHM programme?', 'Candidates must have passed 10+2 (any stream) from a recognised board with a minimum aggregate as per university norms. Admission is based on merit and a personal interaction.'],
  ['Are internships part of the curriculum?', 'Yes. Structured industrial training with reputed hotels is embedded in the programme, giving students paid, real-world exposure that often leads to pre-placement offers.'],
  ['What kind of placement support does IIIHM offer?', 'A dedicated career cell provides resume building, grooming sessions, mock interviews and direct access to a network of luxury hotel recruiters, achieving consistently strong placement records.'],
  ['What facilities and laboratories are available?', 'Training kitchens, bakery & confectionery lab, front-office lab, housekeeping lab, food production labs, mock restaurants, a simulated hotel environment and hospitality software suites.'],
  ['Are scholarships available?', 'Yes. Merit-based scholarships, early-bird waivers and need-based assistance are available. Details are shared during counselling and on the admissions page.'],
  ['Is hostel accommodation provided?', 'Separate, secure and well-maintained hostel facilities for boys and girls are available with dining, Wi-Fi and 24×7 support.'],
  ['What career opportunities can I expect?', 'Graduates work as hotel managers, chefs, F&B professionals, event planners, cruise and airline hospitality executives, entrepreneurs and more, in India and abroad.'],
];

export const STUDENT_LIFE = [
  ['gallery-1', 'Culinary Championships', 'National-level cook-offs & live kitchens'],
  ['gallery-2', 'Bakery Fest', 'Artisan bread & dessert showcases'],
  ['gallery-3', 'Wine & Dine Evenings', 'Fine-dining service practicums'],
  ['gallery-4', 'Guest Lectures', 'Industry leaders on campus'],
  ['gallery-5', 'Industrial Visits', 'Behind-the-scenes at five-star hotels'],
  ['gallery-6', 'Hospitality Fest', 'Annual flagship celebration'],
];

export const PLACE_STEPS = [
  ['Step 01', 'Career Readiness', 'Resume clinics, grooming, aptitude and communication training.'],
  ['Step 02', 'Industrial Internship', 'Paid on-the-job training with leading hotel chains.'],
  ['Step 03', 'Pre-Placement Offers', 'Strong interns convert internships into confirmed offers.'],
  ['Step 04', 'Campus Recruitment', '120+ recruiters conduct on-campus interviews & selections.'],
  ['Step 05', 'Placed & Beyond', 'Lifelong alumni network and global career mobility.'],
];

// [year, title, text, [images…]] — the image set rotates inside each card.
export const ACHIEVEMENTS = [
  ['2024', 'Sikkhar Gourab 2024', 'UEM leaders represented the IEM-UEM Group at Republic Bangla’s Sikkhar Gourab programme, participating in education-focused panel discussions and felicitating outstanding Board Examination achievers.', ['award1a', 'award1b', 'award1c']],
  ['2024', 'No. 1 Private University in West Bengal', 'EducationWorld recognised UEM Kolkata as the No. 1 Private University in West Bengal, reaffirming its commitment to academic excellence, innovation and quality higher education.', ['award2a', 'award2b', 'award2c']],
  ['2024', 'ASSOCHAM Best Private University Award', 'UEM was honoured by ASSOCHAM as the Best Private University of the Year for pioneering Education 5.0, with the award presented by Union Minister Dr. Sukanta Majumdar.', ['award3a', 'award3b', 'award3c']],
  ['2024', 'World Education Congress Honours', 'UEM Kolkata received the Best Institution Overall Award and the Skill Development Leadership Award from the World Education Congress, recognising excellence in higher education and skill development.', ['award4a', 'award4b', 'award4c']],
  ['2024', 'Excellence in Education & Placements', 'The IEM-UEM Group received prestigious recognitions from ABP Ananda, Zee 24 Ghanta and News18 Bihar & Jharkhand for outstanding placements, educational excellence and institutional leadership.', ['award5a', 'award5b', 'award5c']],
  ['2022', 'National Excellence & Hospitality Rankings', 'UEM Kolkata earned top honours in the GHRDC Hotel Management Survey 2022 — 2nd Rank in Emerging Excellence, 2nd Best Private Hotel Management Institute in West Bengal and 2nd in the Eastern & Central Region — and was recognised by Competition Success Review (CSR) among India’s leading hotel management institutes.', ['award6a', 'award6b', 'award6c']],
];
