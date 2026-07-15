import Icon from '../lib/icons';
import Img from '../lib/Img';
import { Reveal } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';

const MISSION = [
  'To evolve and impart to our students an outcome-based education for achieving excellence, and to promote the exchange of ideas, innovation, research and entrepreneurial skills to face global challenges.',
  'To help students grasp the seamless nature of knowledge and encourage them to put it to use in real-world situations — allowing them to transform into deserving, socially conscious individuals who pursue their leadership abilities.',
  'To impart knowledge, develop skills and enhance attitudes to meet the evolving challenges of the hospitality industry by continually improving the effectiveness of our quality management system.',
];

export default function VisionMission() {
  return (
    <>
      <PageHeader eyebrow="Purpose" title="Vision & Mission" text="The guiding principles that shape every student, every kitchen and every service at IIIHM." trail={[['About', '/about']]} />

      {/* Vision */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal dir="left">
            <div className="group relative overflow-hidden rounded-xl3 shadow-lg2">
              <Img name="vision" alt="Our vision" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3.5 shadow-card">
                <Icon name="compass" className="ico ico-lg text-royal" />
                <span className="text-[.82rem] font-bold text-ink">Centre of Excellence</span>
              </div>
            </div>
          </Reveal>
          <Reveal dir="right">
            <span className="eyebrow">Our Vision</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)]">Shaping Global Leaders in Hospitality</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-2">
              The Department of Hotel &amp; Hospitality Management at the University of Engineering and Management,
              Kolkata aims to be globally recognized as a centre of excellence in outcome-based education — developing
              global leaders in the hotel, hospitality, tourism &amp; service industry, creating knowledge in the
              frontier areas of national and global importance, and engaging students to inspire change and enrich
              the community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-soft">
        <div className="container-x">
          <div className="mb-10 text-center">
            <span className="eyebrow">Our Mission</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)]">What We Set Out to Do</h2>
          </div>
          <div className="grid gap-[26px] md:grid-cols-3">
            {MISSION.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="card group h-full">
                  <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-royal to-blue-400 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="card-ico"><span className="font-heading text-[1.4rem] font-bold">{i + 1}</span></div>
                  <p className="text-ink-2">{m}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
