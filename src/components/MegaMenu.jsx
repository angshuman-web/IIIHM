import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../lib/icons';
import Img from '../lib/Img';
import SmartLink from './ui/SmartLink';

// Hover dropdown card rendered under a nav item. Optional highlighted feature
// block on the left, link columns, and an accent image on the right.
export default function MegaMenu({ mega, label, open, onNavigate }) {
  const cols = mega.columns.length;
  const align = mega.align || 'center';
  const alignCls = align === 'right'
    ? 'right-0'
    : align === 'left'
      ? 'left-0'
      : 'left-1/2 -translate-x-1/2';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute top-full ${alignCls} z-50 pt-3.5`}
        >
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lg2">
            <div className="h-1 w-full bg-royal" />
            <div className="flex min-h-[176px] max-w-[min(92vw,860px)] items-stretch gap-6 p-5">
              {/* Highlighted feature link */}
              {mega.feature && (
                <SmartLink
                  to={mega.feature.to}
                  external={mega.feature.external}
                  onClick={onNavigate}
                  className="group/feat flex w-[190px] shrink-0 flex-col justify-center gap-2 rounded-xl border border-line bg-blue-50/60 p-5 transition-colors hover:bg-blue-50"
                >
                  <span className="block text-[1.05rem] font-heading font-bold leading-tight text-royal">{mega.feature.label}</span>
                  {mega.feature.desc && <span className="block text-[12px] leading-snug text-muted">{mega.feature.desc}</span>}
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-royal">
                    Get started
                    <Icon name="arrow-right" className="ico h-3.5 w-3.5 transition-transform group-hover/feat:translate-x-0.5" />
                  </span>
                </SmartLink>
              )}

              {/* Link columns */}
              <div
                className="grid min-w-0 gap-x-8 gap-y-1"
                style={{ gridTemplateColumns: `repeat(${cols}, minmax(180px, max-content))` }}
              >
                {mega.columns.map((col) => (
                  <div key={col.title} className="min-w-0">
                    <h4 className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">{col.title}</h4>
                    <ul className="space-y-0.5">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <SmartLink
                            to={link.to}
                            external={link.external}
                            onClick={onNavigate}
                            className="group/link flex items-center justify-between gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-[13.5px] font-semibold text-ink-2 transition-colors duration-200 hover:bg-blue-50 hover:text-royal"
                          >
                            <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">{link.label}</span>
                            <Icon
                              name="arrow-right"
                              className="ico h-3.5 w-3.5 shrink-0 text-royal opacity-0 transition-opacity duration-200 group-hover/link:opacity-100"
                            />
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Accent image */}
              {mega.image && (
                <div className="group/img relative hidden w-[190px] shrink-0 overflow-hidden rounded-xl lg:block">
                  <Img name={mega.image} alt={label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/10 to-transparent" />
                  <span className="pointer-events-none absolute inset-x-3 bottom-3 text-[13px] font-bold leading-tight text-white">{label}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
