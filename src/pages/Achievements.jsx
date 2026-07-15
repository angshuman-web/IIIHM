import SectionHead from '../components/ui/SectionHead';
import { Stagger } from '../components/ui/Reveal';
import { PageHeader, Timeline } from '../components/ui/Blocks';
import { StatTile, FeatureCard } from '../components/ui/Cards';
import { ACHIEVEMENTS } from '../data/content';

export default function Achievements() {
  return (
    <>
      <PageHeader eyebrow="Recognition" title="Achievements & Milestones" text="A legacy of awards, rankings and student accomplishments across national and international stages." trail={[['Campus Life', '/student-activities']]} />

      <section className="section">
        <div className="container-x">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {[['80', '+', 'Awards Won'], ['25', '+', 'Competition Titles'], ['15', '+', 'Years of Excellence'], ['2500', '+', 'Successful Alumni']].map(([v, s, l]) => <StatTile key={l} value={v} suffix={s} label={l} />)}
          </Stagger>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Timeline" title="Milestones Through the Years" />
          <Timeline items={ACHIEVEMENTS} />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Distinctions" title="Awards & Recognitions" />
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-[26px]">
            {[['trophy', 'Culinary Golds', 'Multiple national cook-off titles.'], ['award', 'Institute Rankings', 'Top hospitality school recognitions.'], ['star', 'Student Honours', 'Excellence awards for our students.'], ['shield', 'Accreditations', 'Recognised quality and standards.']].map(([i, t, d]) => <FeatureCard key={t} icon={i} title={t} text={d} />)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
