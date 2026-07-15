import { useRef } from 'react';
import Icon from '../../lib/icons';

// A horizontal scroll-snap carousel with prev/next controls.
export default function Carousel({ children, className = '' }) {
  const track = useRef(null);
  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 640);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };
  return (
    <div>
      <div
        ref={track}
        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 px-1 ${className}`}
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
      <div className="flex gap-2.5 justify-center mt-2">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="w-[46px] h-[46px] rounded-full bg-white border border-line text-royal grid place-items-center shadow-sm2 hover:bg-royal hover:text-white hover:-translate-y-0.5 transition-all duration-300"
        >
          <Icon name="arrow-right" className="ico rotate-180" />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Next"
          className="w-[46px] h-[46px] rounded-full bg-white border border-line text-royal grid place-items-center shadow-sm2 hover:bg-royal hover:text-white hover:-translate-y-0.5 transition-all duration-300"
        >
          <Icon name="arrow-right" />
        </button>
      </div>
    </div>
  );
}
