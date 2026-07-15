import Img from '../lib/Img';
import { Reveal } from '../components/ui/Reveal';
import { PageHeader, CTABand } from '../components/ui/Blocks';
import { LABS, ADMISSIONS_URL } from '../data/content';

export default function Laboratories() {
  return (
    <>
      <PageHeader eyebrow="Campus" title="Laboratories & Training Facilities" text="Step into a world of culinary excellence and hospitality innovation — state-of-the-art facilities where every corner reflects professionalism and creativity." trail={[['About', '/about']]} />

      <section className="section">
        <div className="container-x space-y-16">
          {LABS.map(([img, title, text], i) => {
            const flip = i % 2 === 1;
            return (
              <div key={title} className="grid lg:grid-cols-2 gap-14 items-center">
                <Reveal dir={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : ''}>
                  <div className="relative rounded-xl3 overflow-hidden shadow-lg2 group">
                    <Img name={img} alt={title} className="w-full transition-transform duration-700 ease-premium group-hover:scale-105" />
                  </div>
                </Reveal>
                <Reveal dir={flip ? 'left' : 'right'}>
                  <span className="eyebrow">Lab {String(i + 1).padStart(2, '0')}</span>
                  <h2 className="text-[clamp(1.25rem,2vw,1.6rem)]">{title}</h2>
                  <p className="text-muted mt-4">{text}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <CTABand title="See Our Labs in Person" text="Book a campus tour and experience our training facilities first-hand." primary={['Book a Tour', '/contact']} secondary={['Apply Now', ADMISSIONS_URL]} />
    </>
  );
}
