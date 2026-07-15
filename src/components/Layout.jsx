import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Icon from '../lib/icons';
import Img from '../lib/Img';

function Preloader() {
  const [done, setDone] = useState(() => typeof window !== 'undefined' && window.location.search.includes('still'));
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[2000] grid place-items-center"
          style={{ background: 'linear-gradient(135deg,#0b2e6b,#1656C4)' }}
        >
          <div className="w-[86px] h-[86px] rounded-[20px] bg-white/[.12] grid place-items-center animate-plpulse">
            <Img name="iem_logo" fallback={null} alt="IIIHM" className="w-14 h-14 object-contain brightness-0 invert" />
          </div>
          <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#3b82f6,#fff)' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed right-6 bottom-6 z-[900] w-[50px] h-[50px] rounded-full bg-royal text-white grid place-items-center shadow-blue hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
        >
          <Icon name="arrow-up" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Layout() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <>
      <Preloader />
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] z-[1200] origin-left" style={{ scaleX, background: 'linear-gradient(90deg,#1656C4,#3b82f6)' }} />
      <TopBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </>
  );
}
