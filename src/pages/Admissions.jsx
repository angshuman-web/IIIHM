import { useState } from 'react';
import Icon from '../lib/icons';
import { Reveal } from '../components/ui/Reveal';
import { PageHeader, Checklist, CTABand } from '../components/ui/Blocks';
import { ADMISSIONS_URL, DOCS } from '../data/content';

export default function Admissions() {
  const [state, setState] = useState('idle');
  const submit = (e) => {
    e.preventDefault();
    setState('sending');
    setTimeout(() => { setState('sent'); e.target.reset(); setTimeout(() => setState('idle'), 3500); }, 900);
  };
  return (
    <>
      <PageHeader eyebrow="Join Us" title="Admissions 2026" text="Your journey into world-class hospitality begins with a single step. Applications are now open." />

      <section className="section">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="eyebrow">Eligibility</span>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)]">Who Can Apply</h2>
            <div className="mt-6"><Checklist items={['Passed 10+2 in any stream from a recognised board', 'Minimum aggregate as per university norms', 'Passion for hospitality & service', 'Admission based on merit and personal interaction']} /></div>
            <h3 className="mt-10 text-[clamp(1.25rem,2vw,1.6rem)]">Scholarships</h3>
            <p className="mt-4 text-muted">Merit-based scholarships, early-bird waivers and need-based assistance are available. Details are shared during counselling.</p>
            <a href={ADMISSIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg mt-8">
              Apply on the Portal <Icon name="arrow-right" className="ico" />
            </a>
          </Reveal>
          <Reveal dir="right">
            <div className="card">
              <h3 className="text-[1.22rem]">Enquire About Admission</h3>
              <p className="mb-5 mt-1.5 text-muted">Share your details and our admissions team will reach out with guidance.</p>
              <form onSubmit={submit} className="grid gap-[18px]">
                <div><label className="field-label">Full Name</label><input required placeholder="Your name" className="field-input" /></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="field-label">Email</label><input type="email" required placeholder="you@email.com" className="field-input" /></div>
                  <div><label className="field-label">Phone</label><input required placeholder="+91" className="field-input" /></div>
                </div>
                <div><label className="field-label">Programme of Interest</label><select className="field-input"><option>Bachelor of Hotel Management (BHM)</option><option>Not sure yet</option></select></div>
                <div><label className="field-label">Message</label><textarea placeholder="Tell us about your goals…" className="field-input min-h-[120px] resize-y" /></div>
                <button type="submit" disabled={state === 'sending'} className="btn btn-lg justify-center">
                  {state === 'sent' ? '✓ Enquiry Submitted' : state === 'sending' ? 'Sending…' : <>Submit Enquiry <Icon name="arrow-right" className="ico" /></>}
                </button>
                {state === 'sent' && <p className="text-[.85rem] text-muted">Thank you! Our admissions team will get back to you within 1–2 working days.</p>}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand title="Have Questions Before Applying?" text="Our admissions team is here to help you take the next step with confidence." primary={['Contact Admissions', '/contact']} secondary={['Download Syllabus', DOCS.syllabus]} />
    </>
  );
}
