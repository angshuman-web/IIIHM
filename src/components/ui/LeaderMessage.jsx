import { PageHeader } from './Blocks';
import { Reveal } from './Reveal';
import Img from '../../lib/Img';
import Icon from '../../lib/icons';

// Shared layout for the Chancellor / Vice-Chancellor / Pro Vice-Chancellor
// message pages: a sticky portrait card beside the message body.
export default function LeaderMessage({ eyebrow, title, img, name, role, paragraphs = [], signoff = 'Warm regards' }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} text={`A message from the ${role}.`} trail={[['About', '/about']]} />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[320px_1fr]">
          <Reveal dir="left">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-card">
                <div className="aspect-[4/5] overflow-hidden bg-soft">
                  <Img name={img} fallback={null} alt={name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[1.2rem]">{name}</h3>
                  <p className="mt-1 text-[.9rem] font-bold uppercase tracking-wide text-royal">{role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right">
            <div className="relative">
              <Icon name="sparkles" className="ico ico-lg mb-4 h-9 w-9 text-blue-300" />
              <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink-2">
                {paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-[1.1rem] font-medium text-ink' : ''}>{p}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-line pt-5">
                <p className="text-muted">{signoff},</p>
                <p className="mt-1 text-[1.15rem] font-heading font-bold text-ink">{name}</p>
                <p className="text-[.9rem] font-semibold text-royal">{role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
