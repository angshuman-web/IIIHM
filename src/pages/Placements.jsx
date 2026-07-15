import { useState } from 'react';
import SectionHead from '../components/ui/SectionHead';
import { Stagger } from '../components/ui/Reveal';
import { PageHeader, CTABand } from '../components/ui/Blocks';
import { StatTile, LogoCell, FeatureCard } from '../components/ui/Cards';
import PlacementCard from '../components/ui/PlacementCard';
import { LOGOS, PLACEMENTS_BY_YEAR, ADMISSIONS_URL } from '../data/content';

const YEARS = Object.keys(PLACEMENTS_BY_YEAR).sort((a, b) => b - a);

export default function Placements() {
  const [year, setYear] = useState(YEARS[0]);
  const list = PLACEMENTS_BY_YEAR[year] || [];

  return (
    <>
      <PageHeader eyebrow="Careers" title="Placements" text="A dedicated career cell, deep recruiter relationships and a placement record you can rely on." trail={[['Placements', '/placements']]} />

      <section className="section">
        <div className="container-x">
          <Stagger className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">
            {[['96', '%', 'Placement Rate'], ['120', '+', 'Recruiters'], ['8.5', ' LPA', 'Highest Package'], ['4.2', ' LPA', 'Average Package']].map(([v, s, l]) => <StatTile key={l} value={v} suffix={s} label={l} />)}
          </Stagger>
        </div>
      </section>

      {/* Placed students with year toggle */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Our Placed Students" title="Success Stories, Year on Year" text="Our students, placed across the finest hospitality brands in India and abroad." />

          {/* Year toggle */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-full border border-line bg-white p-1.5 shadow-xs">
              {YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setYear(y)}
                  className={`rounded-full px-6 py-2.5 text-[.95rem] font-bold transition-all duration-300 ${
                    year === y ? 'bg-royal text-white shadow-blue' : 'text-ink-2 hover:text-royal'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          <Stagger key={year} className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-5" gap={0.04}>
            {list.map(([name, company]) => <PlacementCard key={`${name}-${company}`} name={name} company={company} />)}
          </Stagger>
          <p className="mt-8 text-center text-[.9rem] text-muted">Showing {list.length} placements from the {year} batch.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Recruiters" title="Our Placement Partners" />
          <Stagger className="grid grid-cols-3 gap-[18px] md:grid-cols-4 lg:grid-cols-6" gap={0.05}>
            {LOGOS.map(([f, n]) => <LogoCell key={f} file={f} name={n} />)}
          </Stagger>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Career Cell" title="How We Support Your Placement" text="End-to-end career preparation that turns training into confirmed offers." />
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {[['briefcase', 'Industrial Internships', 'Paid on-the-job training with leading hotel chains.'], ['handshake', 'Pre-Placement Offers', 'Strong interns convert internships into confirmed offers.'], ['trending-up', 'Campus Recruitment', '120+ recruiters conduct on-campus interviews and selections.']].map(([i, t, d]) => <FeatureCard key={t} icon={i} title={t} text={d} />)}
          </Stagger>
        </div>
      </section>

      <CTABand title="Launch Your Career With Us" text="Join a programme built to place you in the world’s best hospitality brands." primary={['Apply Now', ADMISSIONS_URL]} secondary={['Talk to Us', '/contact']} />
    </>
  );
}
