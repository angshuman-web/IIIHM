import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../lib/icons';
import Img from '../lib/Img';
import Button from '../components/ui/Button';
import SectionHead from '../components/ui/SectionHead';
import Counter from '../components/ui/Counter';
import { Reveal, Stagger } from '../components/ui/Reveal';
import Carousel from '../components/ui/Carousel';
import ImageRotator from '../components/ui/ImageRotator';
import { Timeline, Checklist, CTABand } from '../components/ui/Blocks';
import {
  FeatureCard, StatBig, StatTile, LogoCell, FacultyCard, NewsCard, GalleryTile, Testimonial,
} from '../components/ui/Cards';
import {
  FEATURES, FACULTY, LOGOS, TESTI, NEWS, EVENTS, STUDENT_LIFE, LAB_CARDS, ACHIEVEMENTS, COURSES, ADMISSIONS_URL,
  FLAVOUR_GARDEN_IMAGES, FLAVOUR_GARDEN_MAP_URL,
} from '../data/content';

const ease = [0.16, 1, 0.3, 1];

// Hero background images live at /assets/images/hero1.png, hero2.png … and
// cross-fade automatically every 2 seconds.
const HERO_IMAGES = ['hero1', 'hero2', 'hero3', 'hero4'];
const STILL = typeof window !== 'undefined' && window.location.search.includes('still');

function HeroBackdrop() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (STILL || HERO_IMAGES.length < 2) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % HERO_IMAGES.length), 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <AnimatePresence>
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease }}
          className="absolute inset-0"
        >
          <Img name={HERO_IMAGES[active]} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-70px)] items-center overflow-hidden">
      {/* Auto-rotating backdrop images + navy overlay */}
      <HeroBackdrop />
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(100deg,rgba(11,46,107,.94) 0%,rgba(15,61,145,.8) 45%,rgba(22,86,196,.42) 100%)' }} />

      <div className="container-wide relative z-10 py-20 text-white lg:py-28">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
            IEM&apos;s International Institute of Hotel &amp; Hospitality Management
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 text-white text-[clamp(2.4rem,5.2vw,4.1rem)] leading-[1.06]"
          >
            Crafting Leaders in <span className="text-blue-300">Hotel &amp; Hospitality</span> Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-blue-100"
          >
            Where world-class culinary artistry, luxury service and global careers begin — learning by doing in professional
            kitchens, live labs and a fully simulated hotel environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <Button to="/programme" size="lg">Explore Programme</Button>
            <Button href={ADMISSIONS_URL} variant="outline" size="lg" icon={null}>Apply Now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* STATS — one elevated card overlapping the hero */}
      <section id="stats" className="relative pb-16">
        <div className="container-x">
          <Reveal dir="zoom" className="relative z-10 -mt-16 grid grid-cols-2 gap-8 rounded-xl3 bg-white px-8 py-11 shadow-lg2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {[['96', '%', 'Placement'], ['120', '+', 'Recruiters'], ['40', '+', 'Hotel Partners'], ['25', ' Cr+', 'Scholarships (₹)'], ['35', '+', 'Yrs Academic Excellence']].map(([v, s, l]) => (
              <StatBig key={l} value={v} suffix={s} label={l} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Why IIIHM" title="Why Choose IIIHM" text="A hospitality education engineered for the real world — blending craft, character and career from the very first semester." />
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(([i, t, d, img]) => <FeatureCard key={t} icon={i} title={t} text={d} img={img} />)}
          </Stagger>
        </div>
      </section>

      {/* PROGRAMME TABS */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Programme" title="Bachelor of Hotel Management (BHM)" text="A comprehensive 4-year (8-semester) degree that turns passion for hospitality into a global profession." />
          <Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <h3 className="text-[clamp(1.25rem,2vw,1.6rem)]">A curriculum built around craft</h3>
                <p className="mt-4 text-muted">Every module pairs theory with the kitchen, the lab and the guest. Core areas span food production, F&amp;B service, front office, housekeeping, hospitality accounting, HR and strategic management.</p>
                <div className="mt-6"><Checklist items={['Professional culinary & bakery training', 'Front office & accommodation operations', 'Food & beverage service and management', 'Hospitality marketing, finance & HR', 'Communication, French & soft skills', 'Entrepreneurship & hospitality law']} /></div>
              </div>
              <div className="group relative overflow-hidden rounded-xl3 shadow-lg2">
                <Img name="programme-bhm" alt="BHM programme" className="w-full transition-transform duration-700 ease-premium group-hover:scale-105" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3.5 shadow-card"><b className="text-[1.4rem] text-royal">4 Yrs</b><span className="text-[.78rem] text-muted">8 Semesters<br />UGC-aligned degree</span></div>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 text-center"><Button to="/programme">View Full Programme</Button></div>
        </div>
      </section>

      {/* COURSES OFFERED */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Courses Offered" title="Programmes That Launch Careers" text="Full-time, industry-aligned degrees offered under the University of Engineering & Management, Kolkata." />
          <Stagger className="grid gap-[26px] md:grid-cols-2">
            {COURSES.map(([icon, name, code, meta, desc]) => (
              <article key={code} className="card group flex h-full flex-col">
                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-royal to-blue-400 transition-transform duration-500 ease-premium group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="card-ico !mb-0"><Icon name={icon} className="ico ico-lg" /></div>
                  <span className="pill">{code}</span>
                </div>
                <h3 className="mt-5 text-[1.24rem]">{name}</h3>
                <p className="mt-1.5 inline-flex items-center gap-2 text-[.9rem] font-bold text-royal"><Icon name="clock" className="ico h-4 w-4" />{meta}</p>
                <p className="mt-3 flex-1 text-[.96rem] text-muted">{desc}</p>
              </article>
            ))}
          </Stagger>
          <div className="mt-10 text-center"><Button to="/courses-offered" variant="ghost">View All Courses</Button></div>
        </div>
      </section>

      {/* EXPERIENTIAL LEARNING */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Learn by Doing" title="Experiential Learning at Its Core" text="Real kitchens. Real service. Real hotel operations. Our labs replicate the environments you will lead tomorrow." />
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
            {LAB_CARDS.map(([img, t, d]) => (
              <article key={t} className="card group h-full overflow-hidden !p-0">
                <div className="aspect-[4/3] overflow-hidden"><Img name={img} alt={t} className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" /></div>
                <div className="p-[22px]"><h3 className="text-[1.1rem]">{t}</h3><p className="mt-1.5 text-[.9rem] text-muted">{d}</p></div>
              </article>
            ))}
          </Stagger>
          <div className="mt-10 text-center"><Button to="/laboratories" variant="ghost">Tour Our Laboratories</Button></div>
        </div>
      </section>

      {/* INDUSTRY PARTNERS */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Industry Partnerships" title="Where Our Students Train & Get Hired" text="Deep partnerships with the world’s most respected hospitality brands power internships and placements." />
          <Stagger className="grid grid-cols-3 gap-[18px] md:grid-cols-4 lg:grid-cols-6" gap={0.05}>
            {LOGOS.map(([f, n]) => <LogoCell key={f} file={f} name={n} />)}
          </Stagger>
        </div>
      </section>

      {/* PLACEMENTS */}
      <section className="section section-blue">
        <div className="container-x">
          <SectionHead light eyebrow="Placements" title="A Placement Record You Can Trust" text="From first internship to final offer, we walk every step with you." />
          <Stagger className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">
            {[['96', '%', 'Placement Rate'], ['120', '+', 'Recruiters'], ['8.5', ' LPA', 'Highest Package'], ['300', '+', 'Internships / yr']].map(([v, s, l]) => (
              <StatTile key={l} value={v} suffix={s} label={l} light />
            ))}
          </Stagger>
          <div className="mt-12 text-center"><Button to="/placements" variant="ghost">See Placement Highlights</Button></div>
        </div>
      </section>

      {/* FACULTY CAROUSEL */}
      <section className="section">
        <div className="container-wide">
          <SectionHead eyebrow="Faculty Spotlight" title="Learn From Industry Masters" text="Chefs, hoteliers and scholars who have shaped luxury hospitality mentor you personally." />
          <Reveal>
            <Carousel>
              {FACULTY.slice(0, 6).map(([img, n, r, q, e]) => <FacultyCard key={n} img={img} name={n} role={r} qual={q} expertise={e} fixed />)}
            </Carousel>
          </Reveal>
          <div className="mt-2 text-center"><Button to="/faculty" variant="ghost">Meet All Faculty</Button></div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Campus Life" title="A Vibrant Student Experience" text="Competitions, festivals, guest lectures and industrial visits that make learning unforgettable." />
          <Stagger className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_LIFE.map(([img, t, d]) => <GalleryTile key={t} img={img} title={t} text={d} />)}
          </Stagger>
          <div className="mt-10 text-center"><Button to="/student-activities" variant="ghost">Explore Student Activities</Button></div>
        </div>
      </section>

      {/* MILESTONES — cards (was a step timeline) */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Achievements" title="Milestones & Recognitions" text="A legacy of awards, rankings and student accomplishments in national and international arenas." />
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.slice(0, 6).map(([year, title, text, images]) => (
              <article key={year} className="card group h-full overflow-hidden !p-0">
                <ImageRotator images={images || []} aspect="aspect-[16/10]" />
                <div className="p-[26px]">
                  <span className="pill">{year}</span>
                  <h3 className="mt-3 text-[1.14rem]">{title}</h3>
                  <p className="mt-1.5 text-[.94rem] text-muted">{text}</p>
                </div>
              </article>
            ))}
          </Stagger>
          <div className="mt-10 text-center"><Button to="/achievements" variant="ghost">All Achievements</Button></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-soft">
        <div className="container-wide">
          <SectionHead eyebrow="Testimonials" title="Voices of Our Students" text="Students, alumni and recruiters share what makes IIIHM special." />
          <Reveal><Carousel>{TESTI.map((t, i) => <Testimonial key={i} img={t[0]} name={t[1]} role={t[2]} quote={t[3]} stars={t[4]} />)}</Carousel></Reveal>
        </div>
      </section>

      {/* NEWS */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Newsroom" title="Latest News & Announcements" text="Admission notices, workshops, competitions and placement updates from the department." />
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {NEWS.slice(0, 3).map(([img, tag, date, t, d]) => <NewsCard key={t} img={img} tag={tag} date={date} title={t} text={d} />)}
          </Stagger>
          <div className="mt-10 text-center"><Button to="/news-events" variant="ghost">All News & Events</Button></div>
        </div>
      </section>

      {/* EVENTS — professional timeline */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Upcoming" title="Events & Department Calendar" text="Mark your calendar — open houses, symposiums, career fairs and our flagship fest." />
          <Timeline items={EVENTS} />
        </div>
      </section>

      {/* FLAVOUR GARDEN — the campus café */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Café on Campus" title="Flavour Garden" text="A charming café jointly founded by IIIHM — the Hotel Management Institute of the IEM-UEM Group — and the IEM Research Foundation (IEM RF), where students brew, plate and serve real guests every day." />
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-[18px] lg:grid-cols-4">
            {FLAVOUR_GARDEN_IMAGES.map((img, idx) => (
              <div
                key={img}
                className={`group relative overflow-hidden rounded-2xl shadow-sm2 ${idx === 0 ? 'col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-[4/3]' : 'aspect-[4/3]'}`}
              >
                <Img name={img} alt="Flavour Garden café" className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110" />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Button href={FLAVOUR_GARDEN_MAP_URL} icon="map-pin">Get Directions</Button>
          </div>
        </div>
      </section>

      <CTABand title="Your Hospitality Career Starts Here" text="Join one of the region’s leading Hotel & Hospitality Management departments and step into a world of global opportunity." primary={['Apply for Admission', ADMISSIONS_URL]} secondary={['Talk to Us', '/contact']} />
    </>
  );
}
