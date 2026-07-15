import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../../lib/icons';
import Img from '../../lib/Img';

const STILL = typeof window !== 'undefined' && window.location.search.includes('still');

// A cross-fading image carousel: auto-advances every `interval` ms and exposes
// prev/next arrows. Used inside the milestone/award cards and the MoU gallery.
export default function ImageRotator({
  images = [],
  interval = 2000,
  className = '',
  aspect = 'aspect-[16/10]',
  rounded = '',
  showArrows = true,
}) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const count = images.length;

  const go = useCallback((step) => {
    setDir(step);
    setI((prev) => (prev + step + count) % count);
  }, [count]);

  useEffect(() => {
    if (STILL || count < 2) return undefined;
    const id = setInterval(() => { setDir(1); setI((p) => (p + 1) % count); }, interval);
    return () => clearInterval(id);
  }, [count, interval]);

  if (!count) return null;

  return (
    <div className={`group/rot relative overflow-hidden ${aspect} ${rounded} ${className}`}>
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={i}
          custom={dir}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Img name={images[i]} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-2.5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-royal shadow-sm2 backdrop-blur transition hover:bg-white hover:scale-105"
          >
            <Icon name="chevron-down" className="ico h-4 w-4 rotate-90" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-2.5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-royal shadow-sm2 backdrop-blur transition hover:bg-white hover:scale-105"
          >
            <Icon name="chevron-down" className="ico h-4 w-4 -rotate-90" />
          </button>
          <div className="absolute inset-x-0 bottom-2.5 z-10 flex justify-center gap-1.5">
            {images.map((name, idx) => (
              <button
                key={name}
                type="button"
                aria-label={`Go to image ${idx + 1}`}
                onClick={() => { setDir(idx > i ? 1 : -1); setI(idx); }}
                className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
