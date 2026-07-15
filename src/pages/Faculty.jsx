import SectionHead from '../components/ui/SectionHead';
import { Stagger } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';
import { FacultyCard } from '../components/ui/Cards';
import { FACULTY } from '../data/content';

export default function Faculty() {
  return (
    <>
      <PageHeader eyebrow="Academics" title="Our Faculty" text="Chefs, hoteliers and scholars who have shaped luxury hospitality — now mentoring the next generation." trail={[['Academics', '/programme']]} />

      <section className="section">
        <div className="container-wide">
          <SectionHead eyebrow="Mentors" title="Meet the People Behind the Craft" />
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
            {FACULTY.map(([img, n, r, q, e]) => <FacultyCard key={n} img={img} name={n} role={r} qual={q} expertise={e} />)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
