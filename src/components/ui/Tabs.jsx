import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// tabs: [{ id, label, content: <JSX> }]
export default function Tabs({ tabs }) {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active);
  return (
    <div>
      <div className="flex flex-wrap gap-2.5 justify-center mb-9">
        {tabs.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative px-[22px] py-3 rounded-full font-bold text-[.92rem] border transition-all duration-300 ${
                on ? 'bg-royal text-white border-royal shadow-blue' : 'bg-white text-ink-2 border-line hover:text-royal hover:border-blue-300'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {current.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
