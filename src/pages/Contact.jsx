import { useState } from 'react';
import Icon from '../lib/icons';
import { Reveal, Stagger } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';
import { InfoCard } from '../components/ui/Cards';
import { CONTACT, ADMISSIONS_URL } from '../data/content';

const CARDS = [
  ['map-pin', 'Visit Us', <>{CONTACT.address}</>],
  ['phone', 'Call Us', <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>],
  ['mail', 'Email Us', <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>],
  
];

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent('University of Engineering and Management, Sector V, Salt Lake, Kolkata 700091')}&output=embed`;

export default function Contact() {
  const [state, setState] = useState('idle');
  const submit = (e) => {
    e.preventDefault();
    setState('sending');
    setTimeout(() => { setState('sent'); e.target.reset(); setTimeout(() => setState('idle'), 4000); }, 900);
  };
  return (
    <>
      <PageHeader eyebrow="Get in Touch" title="Contact Us" text="We’d love to hear from you. Reach out for admissions, campus visits or general enquiries." />

      <section className="section">
        <div className="container-x">
          <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map(([i, t, body]) => <InfoCard key={t} icon={i} title={t}>{body}</InfoCard>)}
          </Stagger>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="eyebrow">Enquiry Form</span>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)]">Send Us a Message</h2>
            <p className="mt-4 text-muted">Fill in the form and our team will get back to you within 1–2 working days.</p>
            <form onSubmit={submit} className="mt-6 grid gap-[18px]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="field-label">Full Name</label><input required placeholder="Your name" className="field-input" /></div>
                <div><label className="field-label">Phone</label><input required type="tel" placeholder="+91" className="field-input" /></div>
              </div>
              <div><label className="field-label">Email</label><input type="email" required placeholder="you@email.com" className="field-input" /></div>
              <div>
                <label className="field-label">Subject</label>
                <select className="field-input">
                  <option>Admissions Enquiry</option>
                  <option>Campus Visit</option>
                  <option>Placements</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div><label className="field-label">Message</label><textarea required placeholder="How can we help?" className="field-input min-h-[140px] resize-y" /></div>
              <button type="submit" disabled={state === 'sending'} className="btn btn-lg justify-center disabled:opacity-70">
                {state === 'sent' ? '✓ Message Sent' : state === 'sending' ? 'Sending…' : <>Send Message <Icon name="arrow-right" className="ico" /></>}
              </button>
              {state === 'sent' && <p className="text-[.85rem] text-muted">Thank you! Our team will get back to you within 1–2 working days.</p>}
            </form>
          </Reveal>
          <Reveal dir="right">
            <div className="overflow-hidden rounded-xl2 border border-line shadow-sm2">
              <iframe
                title="IIIHM, IEM Kolkata — Salt Lake Campus"
                src={MAP_SRC}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard icon="route" title="Getting Here">Well-connected by metro, bus and cab. Campus shuttle available from key points; in the heart of Sector-V, Salt Lake.</InfoCard>
              <InfoCard icon="facebook" title="Follow Us">
                <div className="mt-1.5 flex gap-2">
                  {['facebook', 'instagram', 'linkedin', 'youtube'].map((s) => (
                    <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-[9px] bg-blue-50 text-royal transition-colors hover:bg-royal hover:text-white"><Icon name={s} className="ico h-4 w-4" /></a>
                  ))}
                </div>
              </InfoCard>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
