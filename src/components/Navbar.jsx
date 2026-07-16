import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../lib/icons';
import Img from '../lib/Img';
import MegaMenu from './MegaMenu';
import SmartLink from './ui/SmartLink';
import { NAV, ADMISSIONS_URL } from '../data/content';

function Brand({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex shrink-0 items-center gap-3">
      <Img name="iem_logo" fallback={null} alt="IEM" className="h-[42px] w-auto" />
      <Img name="iiihm-logo" fallback={null} alt="IIIHM" className="h-[42px] w-auto" />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [openIdx, setOpenIdx] = useState(null); // desktop mega hover
  const [mobileIdx, setMobileIdx] = useState(null); // mobile accordion
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobile(false); setOpenIdx(null); }, [loc.pathname]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setMobile(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Which top-level item is active for the current route.
  const activeLabel = useMemo(() => {
    for (const item of NAV) {
      if (item.to === loc.pathname) return item.label;
      if (item.mega?.columns.some((c) => c.links.some((l) => l.to === loc.pathname))) return item.label;
    }
    return null;
  }, [loc.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] w-full bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-soft shadow-[0_10px_30px_rgba(11,46,107,.08)]' : 'shadow-[0_1px_0_rgba(15,23,42,.06)]'
        }`}
      >
        <div className="container-wide flex h-[70px] items-center justify-between gap-4">
          <Brand />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden h-full flex-1 items-center justify-center gap-x-0.5 xl:flex">
            {NAV.map((item, i) => {
              const isActive = item.label === activeLabel;
              return (
                <div
                  key={item.label}
                  className="group relative flex h-full items-center"
                  onMouseEnter={() => item.mega && setOpenIdx(i)}
                  onMouseLeave={() => item.mega && setOpenIdx(null)}
                >
                  <SmartLink
                    to={item.to}
                    external={item.external}
                    className={`relative flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-[13.5px] font-semibold transition-colors ${
                      isActive ? 'text-royal' : 'text-ink-2 hover:text-royal'
                    }`}
                  >
                    {item.label}
                    {item.mega && (
                      <Icon
                        name="chevron-down"
                        className={`ico h-3.5 w-3.5 text-ink-2/60 transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-royal' : ''}`}
                      />
                    )}
                    <span
                      className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-royal transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </SmartLink>
                  {item.mega && (
                    <MegaMenu mega={item.mega} label={item.label} open={openIdx === i} onNavigate={() => setOpenIdx(null)} />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={ADMISSIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-[.9rem] font-bold text-white shadow-blue transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Apply Now
              <Icon name="arrow-right" className="ico h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setMobile((m) => !m)}
              aria-label="Menu"
              className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-royal xl:hidden"
            >
              <div className="relative h-0.5 w-5 rounded bg-current">
                <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${mobile ? 'top-0 rotate-45' : '-top-1.5'}`} />
                <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${mobile ? 'top-0 -rotate-45' : 'top-1.5'}`} />
                {mobile && <span className="absolute inset-0 bg-blue-50" />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
              className="fixed inset-0 z-[1040] bg-blue-900/45 xl:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 right-0 top-0 z-[1050] w-[min(88%,380px)] overflow-y-auto bg-white px-5 pb-8 pt-6 shadow-lg2 xl:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <Brand onClick={() => setMobile(false)} />
                <button aria-label="Close" onClick={() => setMobile(false)} className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-royal">
                  <Icon name="plus" className="ico rotate-45" />
                </button>
              </div>
              {NAV.map((item, i) =>
                item.mega ? (
                  <div key={item.label} className="border-b border-line/70">
                    <button
                      onClick={() => setMobileIdx(mobileIdx === i ? null : i)}
                      className="flex w-full items-center justify-between py-3 text-[.95rem] font-semibold text-ink-2"
                    >
                      {item.label}
                      <Icon name="chevron-down" className={`ico h-4 w-4 text-ink-2/60 transition-transform ${mobileIdx === i ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileIdx === i && (
                      <div className="pb-3">
                        {item.mega.columns.map((col) => (
                          <div key={col.title} className="mb-2">
                            <p className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-muted">{col.title}</p>
                            {col.links.map((link) => (
                              <SmartLink
                                key={link.label}
                                to={link.to}
                                external={link.external}
                                onClick={() => setMobile(false)}
                                className="block rounded-lg px-3 py-2 text-[13.5px] font-medium text-ink-2 hover:bg-blue-50 hover:text-royal"
                              >
                                {link.label}
                              </SmartLink>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <SmartLink
                    key={item.label}
                    to={item.to}
                    external={item.external}
                    onClick={() => setMobile(false)}
                    className="block border-b border-line/70 py-3 text-[.95rem] font-semibold text-ink-2 hover:text-royal"
                  >
                    {item.label}
                  </SmartLink>
                )
              )}
              <a
                href={ADMISSIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobile(false)}
                className="btn btn-lg mt-4 w-full justify-center"
              >
                Apply Now <Icon name="arrow-right" className="ico" />
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
