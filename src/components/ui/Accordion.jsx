import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../../lib/icons';

// items: [ [question, answer], ... ]
export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="max-w-[860px] mx-auto">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`bg-white border rounded-2xl mb-3.5 overflow-hidden transition-all duration-300 ${
              isOpen ? 'border-blue-300 shadow-card' : 'border-line'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full text-left flex justify-between items-center gap-4 px-6 py-[22px] font-bold text-[1.05rem] text-ink"
            >
              {q}
              <span
                className={`w-[30px] h-[30px] flex-none rounded-[9px] grid place-items-center transition-all duration-300 ${
                  isOpen ? 'bg-royal text-white rotate-[135deg]' : 'bg-blue-50 text-royal'
                }`}
              >
                <Icon name="plus" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-[22px] text-muted">{a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
