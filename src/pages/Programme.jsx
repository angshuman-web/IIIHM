import SectionHead from '../components/ui/SectionHead';
import Button from '../components/ui/Button';
import Img from '../lib/Img';
import Icon from '../lib/icons';
import { Reveal, Stagger } from '../components/ui/Reveal';
import { PageHeader, Timeline, CTABand } from '../components/ui/Blocks';
import { FeatureCard } from '../components/ui/Cards';
import { ADMISSIONS_URL, DOCS } from '../data/content';

const PROGRAMMES = [
  {
    code: 'BHMCT',
    name: 'Bachelor of Hotel Management & Catering Technology',
    img: 'programme-bhm',
    badge: ['4 Yrs', '8 Semesters'],
    facts: [['Eligibility', '10+2 in any stream'], ['Duration', '4 Years · 8 Semesters'], ['Degree', 'Honours, Dual Major'], ['Mode', 'Full-time, on-campus']],
    text: 'A comprehensive honours degree spanning food production, F&B service, front office, housekeeping and hospitality management — with dual major specializations (Marketing as a major) and a full industrial internship.',
  },
  {
    code: 'BHHA',
    name: 'B.Sc. in Hospitality & Hotel Administration',
    img: 'spec-luxury',
    badge: ['3 Yrs', '6 Semesters'],
    facts: [['Eligibility', '10+2 in any stream'], ['Duration', '3 Years · 6 Semesters'], ['Degree', 'B.Sc. Degree'], ['Mode', 'Full-time, on-campus']],
    text: 'An industry-aligned degree blending operational craft with management foundations, preparing students for global careers across hotels, tourism, aviation and allied hospitality sectors.',
  },
];

const SEMS = [
  ['Semester 1–2', 'Foundations', 'Culinary fundamentals, food & beverage service basics, front office, housekeeping foundations, communication and hygiene & sanitation.'],
  ['Semester 3–4', 'Core Operations', 'Advanced food production, F&B management, accommodation operations, hospitality accounting and nutrition.'],
  ['Semester 5', 'Industrial Training', 'A full semester of paid, on-the-job training with leading hotel chains.'],
  ['Semester 6', 'Specialization', 'Elective specialization — food production, F&B, front office, bakery, events and more.'],
  ['Semester 7–8', 'Management & Capstone', 'Strategic management, marketing, HR, entrepreneurship, hospitality law and an industry capstone project.'],
];

export default function Programme() {
  return (
    <>
      <PageHeader eyebrow="Academics" title="Our Programmes" text="Two industry-aligned degrees — BHMCT and BHHA — that transform a passion for hospitality into a distinguished global career." trail={[['Academics', '/programme']]} />

      {PROGRAMMES.map((p, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={p.code} className={`section ${flip ? 'section-soft' : ''}`}>
            <div className="container-x grid items-center gap-14 lg:grid-cols-2">
              <Reveal dir={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : ''}>
                <div className="group relative overflow-hidden rounded-xl3 shadow-lg2">
                  <Img name={p.img} alt={p.name} className="w-full transition-transform duration-700 ease-premium group-hover:scale-105" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3.5 shadow-card"><b className="text-[1.4rem] text-royal">{p.badge[0]}</b><span className="text-[.78rem] text-muted">{p.badge[1]}</span></div>
                </div>
              </Reveal>
              <Reveal dir={flip ? 'left' : 'right'}>
                <span className="pill">{p.code}</span>
                <h2 className="mt-3 text-[clamp(1.5rem,2.6vw,2.2rem)]">{p.name}</h2>
                <p className="mt-4 text-muted">{p.text}</p>
                <div className="mt-6 grid grid-cols-2 gap-5">
                  {p.facts.map(([a, b]) => (
                    <div key={a}><small className="text-[.72rem] font-bold uppercase tracking-wider text-muted">{a}</small><div className="font-bold">{b}</div></div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={ADMISSIONS_URL}>Apply Now</Button>
                  <Button href={DOCS.syllabus} variant="ghost" icon="download" iconLeft>Syllabus</Button>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Structure" title="Semester-wise Journey" text="A progressive path from culinary foundations to management and a capstone project." />
          <Timeline items={SEMS} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Outcomes" title="Where Our Programmes Can Take You" />
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {[['building', 'Hotel Operations', 'Management roles across luxury hotels & resorts.'], ['chef-hat', 'Culinary Careers', 'Professional kitchens and celebrated restaurants.'], ['plane', 'Aviation & Cruise', 'In-flight and onboard hospitality worldwide.'], ['ticket', 'Events & MICE', 'Weddings, conferences and large-scale events.'], ['lightbulb', 'Entrepreneurship', 'Your own café, cloud kitchen or boutique stay.'], ['globe', 'Global Mobility', 'International placements across continents.']].map(([ic, t, d]) => <FeatureCard key={t} icon={ic} title={t} text={d} />)}
          </Stagger>
        </div>
      </section>

      <CTABand title="Ready to Begin Your Journey?" text="Applications for the 2026 intake are open. Secure your seat and step into a world of hospitality." primary={['Apply Now', ADMISSIONS_URL]} secondary={['Download Syllabus', DOCS.syllabus]} />
    </>
  );
}
