import { motion } from 'framer-motion';

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
};

// Single element reveal on scroll
export function Reveal({ children, as = 'div', dir = 'up', delay = 0, className = '', ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      variants={VARIANTS[dir]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

// Stagger container: direct children animate in sequence
export function Stagger({ children, className = '', gap = 0.09, dir = 'up', ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {Array.isArray(children)
        ? children.map((c, i) => (
            <motion.div key={i} variants={VARIANTS[dir]} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              {c}
            </motion.div>
          ))
        : <motion.div variants={VARIANTS[dir]} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>}
    </motion.div>
  );
}

// Stagger item wrapper used when children need to keep their own layout (grids)
export function StaggerItem({ children, dir = 'up', className = '' }) {
  return (
    <motion.div className={className} variants={VARIANTS[dir]} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}
