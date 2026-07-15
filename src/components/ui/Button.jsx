import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../lib/icons';

const MLink = motion(Link);

// variant: solid | ghost | outline | line
export default function Button({ to, href, children, variant = 'solid', size = '', icon = 'arrow-right', iconLeft = false, className = '', ...rest }) {
  const cls = [
    'btn',
    variant === 'ghost' && 'btn-ghost',
    variant === 'outline' && 'btn-outline',
    variant === 'line' && 'btn-line',
    size === 'lg' && 'btn-lg',
    className,
  ].filter(Boolean).join(' ');

  const iconEl = icon ? <Icon name={icon} className="ico group-hover:translate-x-1 transition-transform duration-300" /> : null;
  const content = (
    <span className="group inline-flex items-center gap-2.5">
      {iconLeft && iconEl}
      {children}
      {!iconLeft && iconEl}
    </span>
  );
  const motionProps = { whileTap: { scale: 0.97 }, ...rest };

  // Treat external URLs / PDFs as anchors (new tab); in-app paths use router links.
  const external = to && (/^(https?:|mailto:|tel:)/.test(to) || to.endsWith('.pdf'));
  if (to && !external) return <MLink to={to} className={cls} {...motionProps}>{content}</MLink>;
  const url = external ? to : href || '#';
  const newTab = url && (/^https?:/.test(url) || url.endsWith('.pdf'));
  return (
    <motion.a href={url} className={cls} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...motionProps}>
      {content}
    </motion.a>
  );
}
