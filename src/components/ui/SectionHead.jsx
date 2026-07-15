import { Reveal } from './Reveal';

export default function SectionHead({ eyebrow, title, text, align = 'center', light = false }) {
  const isCenter = align === 'center';
  return (
    <Reveal className={`${isCenter ? 'mx-auto text-center max-w-[720px]' : 'max-w-[720px]'} mb-14`}>
      {eyebrow && <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>}
      <h2 className={`text-[clamp(1.7rem,3vw,2.5rem)] balance ${light ? 'text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-4 text-[1.08rem] ${light ? 'text-blue-100' : 'text-muted'}`}>{text}</p>}
    </Reveal>
  );
}
