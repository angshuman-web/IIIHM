# IIHM, UEM — Institute of Hotel & Hospitality Management

A premium, fully responsive website for the Institute of Hotel & Hospitality
Management at the University of Engineering & Management, Kolkata.

**Stack:** Vite · React 18 · React Router v6 · Tailwind CSS · Framer Motion.

Design language: **Royal Blue (#1656C4) + White**, generous whitespace, modern
cards, glassmorphism, soft shadows, animated counters, scroll reveals, staggered
card entrances, interactive tabs / accordions / carousels, animated page
transitions, hover micro-interactions and a premium loading state.

## Run it
```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build (http://localhost:4173)
```

## Routes (17)
`/` (home) · `/about` · `/vision-mission` · `/programme` · `/faculty` ·
`/infrastructure` · `/laboratories` · `/placements` · `/industry` ·
`/student-activities` · `/gallery` · `/research` · `/achievements` ·
`/downloads` · `/news-events` · `/admissions` · `/contact`

Client-side routing via React Router. All pages share the **same navbar and
footer** (sticky glass nav with animated dropdowns, search overlay, active-link
indicators, quick "Apply Now" CTA, responsive mobile menu; footer with quick
links, academics, contact, accreditation marks and newsletter).

## Structure
```
index.html                 # Vite entry (mounts #root)
vite.config.js             # Vite + @vitejs/plugin-react
tailwind.config.js         # brand theme (colors, fonts, shadows, keyframes)
postcss.config.js
src/
  main.jsx                 # router + <MotionConfig> (respects reduced-motion)
  index.css                # Tailwind layers + reusable component classes
  data/content.js          # all site content (nav, features, faculty, faq, …)
  lib/icons.jsx            # <Icon name="…" /> stroke-icon component
  components/
    Layout.jsx             # nav + footer + page transitions + preloader + progress bar + back-to-top
    Navbar.jsx  Footer.jsx
    ui/
      Reveal.jsx           # Reveal / Stagger scroll animations (Framer whileInView)
      Counter.jsx          # count-up on scroll (useInView)
      Button.jsx SectionHead.jsx Tabs.jsx Accordion.jsx Carousel.jsx
      Cards.jsx            # Feature/Path/Spec/Faculty/News/Gallery/Stat/Logo/Info cards, Testimonial, Download
      Blocks.jsx           # PageHeader, Timeline, Checklist, Crumbs, CTABand
  pages/                   # one file per route (Home.jsx … Contact.jsx)
public/
  assets/images/           # ALL imagery, stored locally
    *.svg                  # heroes, labs, faculty, gallery, specializations, brandmark
    <company>.png          # recruiter/partner logos (taj.png, marriott.png, …)
legacy/                    # the previous static HTML/CSS build (archived, unused)
```

## Assets
- **No external image sources / CDNs.** Every image lives in `public/assets/images/`.
- Company logos are saved as `companyname.png` (e.g. `taj.png`, `oberoi.png`,
  `marriott.png`, `hyatt.png`, `hilton.png`, `radisson.png`, `leela.png`,
  `accor.png`, `ihg.png`, `novotel.png`, `lemon-tree.png`, `itc-hotels.png`).

## Notes
- Fonts use the Plus Jakarta Sans → Manrope → Inter → system stack (no external
  webfont request, per the local-only asset requirement).
- Content (stats, faculty, testimonials) is representative placeholder text —
  replace with official department data before going live.
- The Contact page has a Google Maps embed **placeholder**; drop a real `<iframe>`
  into the `.map-embed` block in `src/pages/Contact.jsx`.
- Forms are front-end demos; wire them to a backend/email service for production.
- Append `?still` to any URL to disable animations (used for static screenshots).
- The old plain-HTML build is preserved under `legacy/` for reference only.
```
