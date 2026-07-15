import SectionHead from '../components/ui/SectionHead';
import { Stagger } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';
import { GalleryTile } from '../components/ui/Cards';

const GAL = [
  ['gallery-1', 'Culinary Championships', 'National-level cook-offs & live kitchens'],
  ['gallery-2', 'Bakery Festivals', 'Artisan bread & dessert showcases'],
  ['gallery-3', 'Wine & Dine Evenings', 'Fine-dining service practicums'],
  ['gallery-4', 'Guest Lectures', 'Industry leaders on campus'],
  ['gallery-5', 'Industrial Visits', 'Behind-the-scenes at five-star hotels'],
  ['gallery-6', 'Hospitality Fest', 'Annual flagship celebration'],
  ['gallery-7', 'Cultural Events', 'Music, dance and celebration'],
  ['gallery-8', 'Workshops & Seminars', 'Skill-building intensives'],
  ['gallery-9', 'International Collaborations', 'Global exposure & exchanges'],
];

export default function StudentActivities() {
  return (
    <>
      <PageHeader eyebrow="Campus Life" title="Student Activities" text="Beyond the classroom — competitions, festivals, workshops and experiences that shape well-rounded professionals." trail={[['Campus Life', '/student-activities']]} />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Vibrant Campus" title="Life at IIIHM" />
          <Stagger className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {GAL.map(([img, t, d]) => <GalleryTile key={t} img={img} title={t} text={d} />)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
