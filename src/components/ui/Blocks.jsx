import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../lib/icons';
import Img from '../../lib/Img';
import { Reveal } from './Reveal';
import Button from './Button';

export function Timeline({ items, light = false }) {
  // items: [ [tag, title, text], ... ] — a clean vertical rail with numbered
  // markers and minimal cards.
  return (
    <Reveal className="relative mx-auto max-w-[760px]">
      <span
        className={`absolute bottom-3 left-[22px] top-3 w-px ${light ? 'bg-white/20' : 'bg-line'}`}
        aria-hidden="true"
      />
      <div className="space-y-6">
        {items.map(([tag, title, text, images], i) => {
          const img = Array.isArray(images) ? images[0] : images;
          return (
          <div key={i} className="group relative flex gap-6">
            <div className="relative z-10 flex-none">
              <span
                className={`grid h-11 w-11 place-items-center rounded-full text-[.82rem] font-extrabold transition-colors duration-300 ${
                  light
                    ? 'bg-white/10 text-white ring-1 ring-white/25 group-hover:bg-white group-hover:text-royal'
                    : 'bg-blue-50 text-royal ring-1 ring-blue-100 group-hover:bg-royal group-hover:text-white'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div
              className={`flex flex-1 flex-col gap-5 rounded-2xl border px-6 py-5 transition-all duration-300 sm:flex-row sm:items-center ${
                light
                  ? 'border-white/15 bg-white/[.06] group-hover:bg-white/[.1]'
                  : 'border-line bg-white shadow-xs group-hover:-translate-y-0.5 group-hover:shadow-card'
              }`}
            >
              <div className="min-w-0 flex-1">
                <span className={`text-[.72rem] font-extrabold uppercase tracking-[.14em] ${light ? 'text-blue-200' : 'text-royal'}`}>{tag}</span>
                <h3 className={`mb-1 mt-1 text-[1.12rem] ${light ? 'text-white' : ''}`}>{title}</h3>
                <p className={`text-[.94rem] ${light ? 'text-blue-100' : 'text-muted'}`}>{text}</p>
              </div>
              {img && (
                <div className="aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl sm:w-44">
                  <Img name={img} alt={title} className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" />
                </div>
              )}
            </div>
          </div>
          );
        })}
      </div>
    </Reveal>
  );
}

export function Checklist({ items, light = false }) {
  return (
    <ul className="grid gap-3">
      {items.map((x, i) => (
        <li key={i} className={`flex gap-3 items-start ${light ? 'text-blue-100' : 'text-ink-2'}`}>
          <span className={`w-6 h-6 flex-none rounded-[7px] grid place-items-center mt-0.5 ${light ? 'bg-white/[.16] text-white' : 'bg-blue-50 text-royal'}`}>
            <Icon name="check" className="ico w-4 h-4" />
          </span>
          {x}
        </li>
      ))}
    </ul>
  );
}

export function Crumbs({ trail }) {
  return (
    <div className="flex gap-2 items-center text-[.86rem] mb-[18px]">
      {trail.map(([label, to], i) => {
        const last = i === trail.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {to && !last ? <Link to={to} className="text-blue-100 hover:text-white">{label}</Link> : <span className={last ? 'text-white' : 'text-blue-100'}>{label}</span>}
            {!last && <span className="text-blue-100/50">/</span>}
          </span>
        );
      })}
    </div>
  );
}

export function PageHeader({ eyebrow, title, text, trail = [] }) {
  return (
    <section className="relative pt-[68px] pb-[74px] overflow-hidden text-white" style={{ background: 'linear-gradient(135deg,#0b2e6b,#1656C4)' }}>
      <Img name="page-band" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="container-x relative z-10">
        <Crumbs trail={[['Home', '/'], ...trail, [title]]} />
        {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-[clamp(2rem,4vw,3.2rem)] balance"
        >
          {title}
        </motion.h1>
        {text && <p className="text-blue-100 mt-3.5 max-w-[640px] text-[1.1rem]">{text}</p>}
      </div>
    </section>
  );
}

export function CTABand({ title, text, primary, secondary }) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal dir="zoom">
          <div className="relative rounded-xl3 overflow-hidden px-12 py-16 text-white text-center shadow-lg2" style={{ background: 'linear-gradient(135deg,#0b2e6b,#1656C4)' }}>
            <Img name="page-band" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="relative z-10">
              <span className="eyebrow eyebrow-light">Begin Your Journey</span>
              <h2 className="text-white text-[clamp(1.7rem,3vw,2.5rem)]">{title}</h2>
              <p className="text-blue-100 max-w-[600px] mx-auto mt-4 mb-7">{text}</p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <Button to={primary[1]} variant="ghost" size="lg">{primary[0]}</Button>
                {secondary && <Button to={secondary[1]} variant="outline" size="lg" icon={null}>{secondary[0]}</Button>}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
