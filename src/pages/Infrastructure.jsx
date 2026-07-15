import SectionHead from '../components/ui/SectionHead';
import Img from '../lib/Img';
import { Stagger } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';
import { StatTile } from '../components/ui/Cards';

const CARDS = [
  ['lab-kitchen', 'Training Kitchens', 'Professional-grade kitchens with modern equipment.'],
  ['lab-restaurant', 'Mock Restaurants', 'Full service floors for live guest experiences.'],
  ['lab-mockhotel', 'Simulated Hotel', 'Front office, rooms and back-of-house in one space.'],
  ['lab-bakery', 'Bakery Studio', 'Ovens, proofers and chocolate & pastry stations.'],
  ['lab-software', 'Smart Classrooms', 'Tech-enabled rooms with hospitality software.'],
  ['lab-aviation', 'Neerja Bhanot Aviation Lab', 'A specialized facility dedicated to aviation studies and training, covering aviation safety, security and management.'],
];

export default function Infrastructure() {
  return (
    <>
      <PageHeader eyebrow="Campus" title="Infrastructure" text="A modern campus purpose-built for immersive hospitality learning and world-class training." trail={[['About', '/about']]} />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Facilities" title="Everything You Need to Learn by Doing" />
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            {CARDS.map(([img, t, d]) => (
              <article key={t} className="card group !p-0 overflow-hidden h-full">
                <div className="aspect-[16/10] overflow-hidden"><Img name={img} alt={t} className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" /></div>
                <div className="p-6"><h3 className="text-[1.14rem]">{t}</h3><p className="text-muted mt-2 text-[.92rem]">{d}</p></div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container-x">
          <SectionHead light eyebrow="Campus Highlights" title="Built for Excellence" />
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {[['12', '+', 'Specialised Labs'], ['50', '+', 'Smart Classrooms'], ['24', '/7', 'Hostel Support'], ['100', '%', 'Wi-Fi Campus']].map(([v, s, l]) => <StatTile key={l} value={v} suffix={s} label={l} light />)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
