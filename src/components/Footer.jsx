import { Link } from 'react-router-dom';
import Icon from '../lib/icons';
import Img from '../lib/Img';
import SmartLink from './ui/SmartLink';
import { CONTACT, ADMISSIONS_URL, DOCS } from '../data/content';

const columns = [
  {
    title: 'Institute',
    links: [
      { label: 'About IIIHM', to: '/about' },
      { label: 'Vision & Mission', to: '/vision-mission' },
      { label: 'Infrastructure', to: '/infrastructure' },
      { label: 'Laboratories', to: '/laboratories' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'BHM Programme', to: '/programme' },
      { label: 'Faculty', to: '/faculty' },
      { label: 'Placements', to: '/placements' },
      { label: 'Achievements', to: '/achievements' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Syllabus', to: DOCS.syllabus, external: true },
      { label: 'Academic Calendar', to: DOCS.calendar, external: true },
      { label: 'Holiday List', to: DOCS.holidays, external: true },
      { label: 'News & Events', to: '/news-events' },
    ],
  },
];

const socials = ['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue-900 text-blue-100/80">
      {/* Admissions banner */}
      <div className="border-b border-white/10">
        <div className="container-wide py-8">
          <a
            href={ADMISSIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl bg-royal p-7 shadow-blue transition-colors duration-300 hover:bg-blue-700 sm:flex-row sm:items-center sm:p-9"
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/75">Admissions Open · 2026</p>
              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-[28px]">Apply to the BHM Programme</h3>
              <p className="mt-1.5 text-[13.5px] text-white/80">Take the first step towards a global career in hotel &amp; hospitality management.</p>
            </div>
            <span className="flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-royal transition-all duration-300 group-hover:gap-4">
              Apply Now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-royal text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <Icon name="arrow-right" className="ico h-4 w-4" />
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="container-wide py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link to="/" className="flex items-center gap-3 font-heading font-bold">
              <Img name="iem_logo" fallback={null} alt="IIIHM" className="h-[42px] w-auto brightness-0 invert" />
              <span className="flex flex-col leading-none">
                <b className="font-heading text-[1.06rem] text-white">IIIHM</b>
                <span className="text-[.68rem] font-bold uppercase tracking-[.14em] text-blue-300">IEM Kolkata</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed">
              IEM&apos;s International Institute of Hotel &amp; Hospitality Management — shaping world-class hospitality professionals through practical excellence and industry immersion.
            </p>
            <div className="mt-5 space-y-2.5 text-[13px]">
              <p className="flex items-start gap-2.5"><Icon name="map-pin" className="ico mt-0.5 h-4 w-4 shrink-0 text-blue-300" />{CONTACT.address}</p>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-white"><Icon name="phone" className="ico h-4 w-4 shrink-0 text-blue-300" />{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white"><Icon name="mail" className="ico h-4 w-4 shrink-0 text-blue-300" />{CONTACT.email}</a>
              <a href={CONTACT.websiteHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-white"><Icon name="globe" className="ico h-4 w-4 shrink-0 text-blue-300" />{CONTACT.website}</a>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal hover:text-white">
                  <Icon name={s} className="ico h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <SmartLink
                      to={link.to}
                      external={link.external}
                      className="group inline-flex items-center gap-1.5 text-[13px] transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-blue-300 transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-[12px] text-blue-300 sm:flex-row">
          <p>© 2026 IEM&apos;s International Institute of Hotel &amp; Hospitality Management, Kolkata. All rights reserved.</p>
          <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
