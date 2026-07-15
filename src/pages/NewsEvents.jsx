import SectionHead from '../components/ui/SectionHead';
import { Stagger } from '../components/ui/Reveal';
import { PageHeader, Timeline } from '../components/ui/Blocks';
import { NewsCard } from '../components/ui/Cards';
import { NEWS, EVENTS } from '../data/content';

export default function NewsEvents() {
  return (
    <>
      <PageHeader eyebrow="Newsroom" title="News & Events" text="Announcements, workshops, competitions, placements and everything happening at IIIHM." trail={[['Campus Life', '/student-activities']]} />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Latest" title="Department News" />
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            {NEWS.map(([img, tag, date, t, d]) => <NewsCard key={t} img={img} tag={tag} date={date} title={t} text={d} />)}
          </Stagger>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Calendar" title="Upcoming Events" />
          <Timeline items={EVENTS} />
        </div>
      </section>
    </>
  );
}
