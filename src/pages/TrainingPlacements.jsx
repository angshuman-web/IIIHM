import SectionHead from '../components/ui/SectionHead';
import { Reveal, Stagger } from '../components/ui/Reveal';
import { PageHeader, CTABand } from '../components/ui/Blocks';
import { StatTile } from '../components/ui/Cards';
import ImageRotator from '../components/ui/ImageRotator';
import PlacementCard from '../components/ui/PlacementCard';
import Button from '../components/ui/Button';
import Icon from '../lib/icons';
import { PLACEMENTS_BY_YEAR, TRAINING_PARTNERS, RECRUIT_SECTORS, PLACEMENT_CONTACT, ADMISSIONS_URL } from '../data/content';

const RECENT = PLACEMENTS_BY_YEAR['2024'] || [];

export default function TrainingPlacements() {
  return (
    <>
      <PageHeader
        eyebrow="Placements"
        title="Training & Placements"
        text="Success isn’t just a destination; it’s a journey we navigate together — from first internship to final offer."
        trail={[['Placements', '/placements']]}
      />

      {/* Stats */}
      <section className="section">
        <div className="container-x">
          <Stagger className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">
            {[['96', '%', 'Placement Rate'], ['120', '+', 'Recruiters'], ['40', '+', 'Hotel Partners'], ['8.5', ' LPA', 'Highest Package']].map(([v, s, l]) => (
              <StatTile key={l} value={v} suffix={s} label={l} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* Vocational training with rotating images */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Vocational Training" title="Learning Beyond the Classroom" text="Students gain real-world exposure through structured training with our partner organizations." />
          <Stagger className="grid gap-[26px] md:grid-cols-2">
            {TRAINING_PARTNERS.map(([name, desc, images]) => (
              <article key={name} className="card group flex h-full flex-col overflow-hidden !p-0">
                <ImageRotator images={images || []} aspect="aspect-[16/9]" />
                <div className="flex items-start gap-4 p-[26px]">
                  <div className="card-ico !mb-0"><Icon name="briefcase" className="ico ico-lg" /></div>
                  <div>
                    <h3 className="text-[1.14rem]">{name}</h3>
                    <p className="mt-1.5 text-muted">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Recent placements (2024) */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Class of 2024" title="Recent Placements" text="A snapshot of our latest students placed across leading luxury hospitality brands." />
          <Stagger className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-6" gap={0.04}>
            {RECENT.map(([name, company]) => <PlacementCard key={`${name}-${company}`} name={name} company={company} />)}
          </Stagger>
          <div className="mt-10 text-center"><Button to="/placements" variant="ghost">View All Placements</Button></div>
        </div>
      </section>

      {/* Recruiting sectors + contact */}
      <section className="section section-soft">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="eyebrow">Where They Work</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">Careers Across the Industry</h2>
            <p className="mt-4 text-muted">Our graduates build careers across a wide spectrum of hospitality and allied sectors.</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {RECRUIT_SECTORS.map((s) => <span key={s} className="pill">{s}</span>)}
            </div>
          </Reveal>
          <Reveal dir="right">
            <div className="rounded-xl3 border border-line bg-white p-8 shadow-card">
              <h3 className="text-[1.2rem]">Placement Enquiry</h3>
              <p className="mt-2 text-muted">Reach out to our placement cell for recruiter partnerships and student placement support.</p>
              <div className="mt-5 space-y-3 text-[.96rem]">
                <p className="flex items-center gap-3"><Icon name="users" className="ico h-4 w-4 text-royal" /><b className="text-ink">{PLACEMENT_CONTACT.name}</b> · {PLACEMENT_CONTACT.role}</p>
                <a href={PLACEMENT_CONTACT.phoneHref} className="flex items-center gap-3 hover:text-royal"><Icon name="phone" className="ico h-4 w-4 text-royal" />{PLACEMENT_CONTACT.phone}</a>
                <a href={`mailto:${PLACEMENT_CONTACT.email}`} className="flex items-center gap-3 hover:text-royal"><Icon name="mail" className="ico h-4 w-4 text-royal" />{PLACEMENT_CONTACT.email}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand title="Recruit From IIIHM" text="Partner with us to hire industry-ready hospitality talent, or join us to launch your own career." primary={['Apply Now', ADMISSIONS_URL]} secondary={['Contact Us', '/contact']} />
    </>
  );
}
