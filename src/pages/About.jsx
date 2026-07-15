import SectionHead from '../components/ui/SectionHead';
import Img from '../lib/Img';
import { Reveal, Stagger } from '../components/ui/Reveal';
import { PageHeader, Checklist, CTABand } from '../components/ui/Blocks';
import { FeatureCard, StatTile } from '../components/ui/Cards';
import { ADMISSIONS_URL } from '../data/content';

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="About IIIHM" text="A centre of excellence shaping the next generation of hospitality leaders through craft, character and global exposure." />

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal dir="left">
            <span className="eyebrow">Academic Excellence Since 1990</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)]">Welcome to IEM&apos;s International Institute of Hotel Management — IIIHM</h2>
            <p className="mt-2 text-[.95rem] font-bold uppercase tracking-wide text-royal">Under the University of Engineering &amp; Management · Best Hotel Management Institute in Kolkata</p>
            <p className="text-muted mt-4">IEM&apos;s International Institute of Hotel Management (IIIHM), under the University of Engineering and Management, Kolkata (UEM Kolkata), is one of the best hotel management institutes in Kolkata and stands as a beacon of academic excellence in the field of Hotel Management education. Established with a commitment to nurturing innovative thinkers and skilled professionals, IIIHM has become a prominent institution in the educational landscape, boasting state-of-the-art infrastructure including modern classrooms, well-equipped laboratories, libraries and recreational facilities.</p>
            <p className="text-muted mt-4">The campus is designed to foster a conducive learning environment, ensuring students have access to the resources they need for academic and personal growth. The Institute provides a comprehensive curriculum that aligns with industry standards and emerging trends, with an emphasis on research and the practical application of knowledge. To bridge the gap between academia and industry, IIIHM actively collaborates with leading companies and organizations, ensuring students gain practical exposure, internships and opportunities to interact with industry professionals — enhancing their employability and readiness for the job market.</p>
            <div className="mt-6"><Checklist items={['UGC-recognised BHM degree', '60%+ practical, hands-on learning', 'Industry-integrated internships', 'Strong placement & alumni network']} /></div>
          </Reveal>
          <Reveal dir="right">
            <div className="relative rounded-xl3 overflow-hidden shadow-lg2 group">
              <Img name="about-campus" alt="Campus" className="w-full transition-transform duration-700 ease-premium group-hover:scale-105" />
              <div className="absolute bottom-5 left-5 bg-white/95 rounded-2xl px-4 py-3.5 shadow-card flex items-center gap-3"><b className="text-[1.4rem] text-royal">15+</b><span className="text-[.78rem] text-muted">Years of<br />Hospitality Excellence</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="At a Glance" title="IIIHM by the Numbers" />
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {[['96', '%', 'Placement Rate'], ['45', '+', 'Expert Faculty'], ['2500', '+', 'Alumni Worldwide'], ['40', '+', 'Hotel Partners']].map(([v, s, l]) => <StatTile key={l} value={v} suffix={s} label={l} />)}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="What Defines Us" title="Our Core Strengths" />
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            {[['chef-hat', 'Craft-first Learning', 'Professional kitchens and live labs from day one.'], ['globe', 'Global Standards', 'International service protocols and exchange pathways.'], ['handshake', 'Industry Integration', 'Curriculum co-created with leading hotel brands.'], ['users', 'Mentor Faculty', 'Chefs and hoteliers who guide every student personally.'], ['trending-up', 'Career Outcomes', 'Consistently strong placements and global mobility.'], ['heart', 'Holistic Growth', 'Grooming, communication and leadership development.']].map(([i, t, d]) => <FeatureCard key={t} icon={i} title={t} text={d} />)}
          </Stagger>
        </div>
      </section>

      <CTABand title="Discover the IIIHM Difference" text="Visit our campus, meet our faculty and experience hospitality education built for the real world." primary={['Apply Now', ADMISSIONS_URL]} secondary={['Contact Us', '/contact']} />
    </>
  );
}
