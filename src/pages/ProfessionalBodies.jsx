import { Reveal, Stagger } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';
import Img from '../lib/Img';
import { PROFESSIONAL_BODIES } from '../data/content';

export default function ProfessionalBodies() {
  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        title="Professional Bodies"
        text="Proud memberships that connect our students to the wider hospitality and culinary community."
        trail={[['Campus Life', '/student-activities']]}
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-[860px] text-center text-[1.08rem] leading-relaxed text-ink-2">
              Nestled within the prestigious folds of culinary excellence, IEM’s International Institute of Hotel
              Management (IIIHM), Kolkata proudly stands as a distinguished member of both the esteemed{' '}
              <b className="text-ink">Indian Culinary Forum (ICF)</b> and the{' '}
              <b className="text-ink">Hotel &amp; Restaurant Association of Eastern India (HRAEI)</b> — epitomizing a
              commitment to fostering innovation, excellence and camaraderie within the vibrant tapestry of the
              hospitality industry.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-[26px] md:grid-cols-2">
            {PROFESSIONAL_BODIES.map(([logo, name, desc]) => (
              <article key={logo} className="card group flex h-full flex-col items-center text-center">
                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-royal to-blue-400 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-[120px] w-full place-items-center rounded-xl2 bg-soft p-5">
                  <Img name={logo} fallback={null} alt={name} className="max-h-[90px] w-auto max-w-[80%] object-contain" />
                </div>
                <h3 className="mt-6 text-[1.2rem]">{name}</h3>
                <p className="mt-2 text-muted">{desc}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
