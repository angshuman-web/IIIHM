import { Stagger } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';
import Icon from '../lib/icons';
import { RULES } from '../data/content';

export default function Rules() {
  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        title="Rules of IIIHM"
        text="The standards of conduct, dress and discipline that uphold the professional culture of our institute."
        trail={[['Campus Life', '/student-activities']]}
      />

      <section className="section">
        <div className="container-x">
          <Stagger className="grid gap-[26px] md:grid-cols-2">
            {RULES.map(([icon, title, items]) => (
              <article key={title} className="card group h-full">
                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-royal to-blue-400 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center gap-4">
                  <div className="card-ico !mb-0"><Icon name={icon} className="ico ico-lg" /></div>
                  <h3 className="text-[1.2rem]">{title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[.95rem] text-ink-2">
                      <Icon name="check" className="ico mt-0.5 h-4 w-4 shrink-0 text-royal" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Stagger>
          <p className="mt-8 rounded-xl2 border border-line bg-soft px-5 py-4 text-center text-[.9rem] text-muted">
            These rules are issued under the University of Engineering &amp; Management, Kolkata. The institute reserves the right to amend them; students are advised to follow all notices issued from time to time.
          </p>
        </div>
      </section>
    </>
  );
}
