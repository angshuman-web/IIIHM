import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../lib/icons';
import Img from '../../lib/Img';
import Counter from './Counter';

const hoverLift = {
  whileHover: { y: -8 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export function FeatureCard({ icon, title, text, img }) {
  return (
    <motion.article {...hoverLift} className="card group h-full">
      {img && (
        <>
          <Img name={img} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-opacity duration-500 ease-premium group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(150deg,rgba(11,46,107,.93),rgba(15,61,145,.84))' }} />
        </>
      )}
      <span className="absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r from-royal to-blue-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-premium" />
      <div className="relative z-10">
        <div className={`card-ico ${img ? 'transition-colors duration-500 group-hover:[background-image:none] group-hover:bg-white/20 group-hover:shadow-none' : ''}`}><Icon name={icon} className="ico ico-lg" /></div>
        <h3 className={`text-[1.22rem] mb-2.5 ${img ? 'transition-colors duration-500 group-hover:text-white' : ''}`}>{title}</h3>
        <p className={`text-[.98rem] ${img ? 'text-muted transition-colors duration-500 group-hover:text-blue-100' : 'text-muted'}`}>{text}</p>
      </div>
    </motion.article>
  );
}

export function PathCard({ icon, title, text }) {
  return (
    <motion.article {...hoverLift} className="group bg-white border border-line rounded-xl2 p-[26px] flex gap-[18px] items-start shadow-xs hover:shadow-card hover:border-blue-100 h-full">
      <div className="w-[54px] h-[54px] flex-none rounded-[15px] grid place-items-center bg-blue-50 text-royal group-hover:bg-royal group-hover:text-white group-hover:-rotate-6 transition-all duration-400">
        <Icon name={icon} className="ico ico-lg" />
      </div>
      <div>
        <h3 className="text-[1.08rem] mb-1">{title}</h3>
        <p className="text-[.9rem] text-muted">{text}</p>
      </div>
    </motion.article>
  );
}

export function SpecCard({ img, title, text }) {
  return (
    <motion.article {...hoverLift} className="group relative rounded-xl2 overflow-hidden min-h-[230px] flex items-end p-6 text-white shadow-sm2 hover:shadow-lg2">
      <Img name={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110" />
      <span className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/25 to-transparent" />
      <div className="relative z-10">
        <h3 className="text-white text-[1.16rem]">{title}</h3>
        <p className="text-blue-100 text-[.9rem] max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-premium">{text}</p>
      </div>
    </motion.article>
  );
}

const parse = (v) => {
  const num = parseFloat(String(v).replace(/[^0-9.]/g, ''));
  const dec = String(v).includes('.') ? 1 : 0;
  return { num, dec };
};

export function StatBig({ value, suffix, label }) {
  const { num, dec } = parse(value);
  return (
    <div className="text-center">
      <div className="text-[clamp(1.9rem,3vw,2.7rem)] font-extrabold text-royal tracking-tight leading-none">
        <Counter to={num} decimals={dec} /><span className="text-blue-400">{suffix}</span>
      </div>
      <div className="mt-2 text-[.86rem] text-muted font-semibold">{label}</div>
    </div>
  );
}

export function StatTile({ value, suffix, label, light = false }) {
  const { num, dec } = parse(value);
  return (
    <motion.div {...hoverLift} className={`rounded-xl2 p-7 text-center shadow-xs ${light ? 'bg-white/[.08] border border-white/[.16]' : 'bg-white border border-line hover:shadow-card'}`}>
      <div className={`text-[2.3rem] font-extrabold ${light ? 'text-white' : 'text-royal'}`}>
        <Counter to={num} decimals={dec} /><span className={light ? 'text-blue-200' : 'text-blue-400'}>{suffix}</span>
      </div>
      <div className={`mt-1 text-[.86rem] font-semibold ${light ? 'text-blue-100' : 'text-muted'}`}>{label}</div>
    </motion.div>
  );
}

export function LogoCell({ file, name }) {
  return (
    <motion.div {...hoverLift} className="bg-white border border-line rounded-2xl p-[18px] grid place-items-center shadow-xs hover:shadow-card hover:border-blue-100 grayscale-[.2] hover:grayscale-0 transition-all duration-400">
      <Img name={file} alt={name} className="h-[66px] w-auto object-contain" />
    </motion.div>
  );
}

export function FacultyCard({ img, name, role, qual, expertise, fixed = false }) {
  return (
    <motion.article {...hoverLift} className={`group bg-white border border-line rounded-xl2 overflow-hidden shadow-xs hover:shadow-lg2 ${fixed ? 'flex-none w-[300px] snap-start' : ''} h-full`}>
      <div className="aspect-square overflow-hidden">
        <Img name={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" />
      </div>
      <div className="p-[22px]">
        <h3 className="text-[1.14rem]">{name}</h3>
        <div className="text-royal font-bold text-[.88rem] my-1.5">{role}</div>
        <p className="text-[.88rem] text-muted"><b>{qual}</b><br />{expertise}</p>
        <div className="flex gap-2 mt-3.5">
          {['linkedin', 'mail'].map((s) => (
            <a key={s} href="#" aria-label={s} className="w-[34px] h-[34px] rounded-[9px] bg-blue-50 text-royal grid place-items-center hover:bg-royal hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              <Icon name={s} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function NewsCard({ img, tag, date, title, text, to = '/news-events', more = true }) {
  return (
    <motion.article {...hoverLift} className="group bg-white border border-line rounded-xl2 overflow-hidden shadow-xs hover:shadow-lg2 flex flex-col h-full">
      <div className="aspect-[16/10] overflow-hidden relative">
        <span className="absolute top-3.5 left-3.5 z-10 bg-white/90 text-royal text-[.72rem] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full">{tag}</span>
        <Img name={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" />
      </div>
      <div className="p-[22px] flex flex-col flex-1">
        <span className="text-[.8rem] text-muted font-semibold inline-flex items-center gap-1.5"><Icon name="calendar" className="ico w-4 h-4" /> {date}</span>
        <h3 className="text-[1.14rem] my-2">{title}</h3>
        <p className="text-[.92rem] text-muted flex-1">{text}</p>
        {more && <Link to={to} className="btn-line mt-3 inline-flex items-center gap-1.5 group/l">Read more <Icon name="arrow-right" className="ico group-hover/l:translate-x-1 transition-transform" /></Link>}
      </div>
    </motion.article>
  );
}

export function GalleryTile({ img, title, text }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm2">
      <Img name={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-blue-900/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
        <b className="text-[1.05rem]">{title}</b>
        <span className="text-[.82rem] text-blue-100">{text}</span>
      </div>
    </div>
  );
}

export function Testimonial({ img, name, role, quote, stars }) {
  return (
    <article className="flex-none w-[380px] max-w-[88vw] snap-center bg-white border border-line rounded-xl3 p-8 shadow-sm2 relative">
      <div className="text-[3.4rem] leading-[.6] text-blue-100 font-serif h-6">“</div>
      <div className="text-royal tracking-widest text-[.9rem] mb-2">{'★'.repeat(stars)}</div>
      <p className="text-ink-2 text-[1rem] mb-5">{quote}</p>
      <div className="flex items-center gap-3.5">
        <Img name={img} alt={name} className="w-[52px] h-[52px] rounded-full object-cover" />
        <div>
          <b className="text-[.98rem] block">{name}</b>
          <span className="text-[.82rem] text-muted">{role}</span>
        </div>
      </div>
    </article>
  );
}

export function DownloadItem({ icon, title, meta }) {
  return (
    <motion.div whileHover={{ x: 4 }} className="group flex items-center gap-[18px] bg-white border border-line rounded-2xl px-[22px] py-[18px] shadow-xs hover:shadow-card hover:border-blue-100 transition-shadow">
      <span className="w-[50px] h-[50px] flex-none rounded-[13px] bg-blue-50 text-royal grid place-items-center"><Icon name={icon} className="ico ico-lg" /></span>
      <div className="flex-1">
        <h3 className="text-[1.02rem]">{title}</h3>
        <small className="text-muted">{meta}</small>
      </div>
      <a href="#" aria-label={`Download ${title}`} className="w-[44px] h-[44px] rounded-xl bg-royal text-white grid place-items-center group-hover:-translate-y-0.5 group-hover:shadow-blue transition-all"><Icon name="download" /></a>
    </motion.div>
  );
}

export function InfoCard({ icon, title, children }) {
  return (
    <motion.article {...hoverLift} className="bg-white border border-line rounded-xl2 p-7 shadow-xs hover:shadow-card h-full">
      <div className="w-[54px] h-[54px] rounded-[15px] text-white grid place-items-center mb-4 shadow-blue" style={{ background: 'linear-gradient(135deg,#1656C4,#0f3d91)' }}>
        <Icon name={icon} className="ico ico-lg" />
      </div>
      <h3 className="text-[1.1rem] mb-1.5">{title}</h3>
      <div className="text-muted text-[.95rem] [&_a]:text-royal [&_a]:font-semibold">{children}</div>
    </motion.article>
  );
}
