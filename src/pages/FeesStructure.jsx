import SectionHead from '../components/ui/SectionHead';
import { Reveal, Stagger } from '../components/ui/Reveal';
import { PageHeader, CTABand } from '../components/ui/Blocks';
import Button from '../components/ui/Button';
import Icon from '../lib/icons';
import { COURSES, ADMISSIONS_URL, CONTACT, FEE_ROWS, FEE_TOTAL } from '../data/content';

export default function FeesStructure() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Fees Structure"
        text="Transparent, value-driven fees with generous scholarship support for deserving students."
        trail={[['Academics', '/programme']]}
      />

      {/* Scholarship highlight */}
      <section className="section">
        <div className="container-x">
          <Reveal dir="zoom">
            <div className="relative overflow-hidden rounded-xl3 px-10 py-12 text-center text-white shadow-lg2" style={{ background: 'linear-gradient(135deg,#0b2e6b,#1656C4)' }}>
              <span className="eyebrow eyebrow-light">Financial Support</span>
              <h2 className="text-white text-[clamp(1.8rem,4vw,2.8rem)]">Up to 100% Scholarship</h2>
              <p className="mx-auto mt-3 max-w-[620px] text-blue-100">Merit-based scholarships, early-bird waivers and need-based assistance are available across our programmes — with over ₹25 crores in scholarships awarded to students.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Semester-wise fee table (BHMCT) */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="BHMCT" title="Semester-wise Fee Structure" text="Bachelor of Hotel Management & Catering Technology — all amounts in ₹." />
          <Reveal>
            <div className="overflow-x-auto rounded-xl2 border border-line shadow-xs">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="px-5 py-4 text-[.82rem] font-bold uppercase tracking-wide">Semester</th>
                    <th className="px-5 py-4 text-right text-[.82rem] font-bold uppercase tracking-wide">Semester Fees</th>
                    <th className="px-5 py-4 text-right text-[.82rem] font-bold uppercase tracking-wide">Admission Fees</th>
                    <th className="px-5 py-4 text-right text-[.82rem] font-bold uppercase tracking-wide">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_ROWS.map(([sem, semFee, admFee, total], i) => (
                    <tr key={sem} className={i % 2 ? 'bg-soft' : 'bg-white'}>
                      <td className="px-5 py-3.5 font-semibold text-ink">{sem}</td>
                      <td className="px-5 py-3.5 text-right text-ink-2">₹ {semFee}</td>
                      <td className="px-5 py-3.5 text-right text-ink-2">{admFee === '—' ? '—' : `₹ ${admFee}`}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-royal">₹ {total}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-blue-100 bg-blue-50">
                    <td className="px-5 py-4 font-heading text-[1.05rem] font-bold text-ink" colSpan={3}>Grand Total</td>
                    <td className="px-5 py-4 text-right font-heading text-[1.15rem] font-bold text-royal">₹ {FEE_TOTAL}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-4 text-[.85rem] text-muted">Fees are indicative and subject to revision. Scholarships and waivers apply as per merit and need.</p>
        </div>
      </section>

      {/* Programme fee cards */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Programmes" title="Fees by Programme" text="The current fee sheet is issued at the time of admission. Reach out for the detailed year-wise breakdown." />
          <Stagger className="grid gap-[26px] md:grid-cols-2">
            {COURSES.map(([icon, name, code, meta]) => (
              <article key={code} className="card group flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="card-ico !mb-0"><Icon name={icon} className="ico ico-lg" /></div>
                  <span className="pill">{code}</span>
                </div>
                <h3 className="mt-5 text-[1.2rem]">{name}</h3>
                <p className="mt-1.5 inline-flex items-center gap-2 text-[.9rem] font-bold text-royal"><Icon name="clock" className="ico h-4 w-4" />{meta}</p>
                <ul className="mt-4 space-y-2.5 text-[.94rem] text-muted">
                  {['Semester-wise payment options', 'Scholarships up to 100% (merit & need based)', 'Early-bird and sibling waivers'].map((t) => (
                    <li key={t} className="flex items-start gap-2.5"><Icon name="check" className="ico mt-0.5 h-4 w-4 shrink-0 text-royal" />{t}</li>
                  ))}
                </ul>
                <div className="mt-6"><Button href={ADMISSIONS_URL}>Request Fee Details</Button></div>
              </article>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-[.9rem] text-muted">
            For the complete, current fees structure and payment terms, please contact our admissions team at{' '}
            <a className="font-semibold text-royal hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>{' '}
            or <a className="font-semibold text-royal hover:underline" href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
          </p>
        </div>
      </section>

      <CTABand title="Have Questions About Fees or Scholarships?" text="Our admissions team will walk you through fees, scholarships and payment options." primary={['Apply Now', ADMISSIONS_URL]} secondary={['Contact Admissions', '/contact']} />
    </>
  );
}
