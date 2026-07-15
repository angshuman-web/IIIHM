import Icon from '../lib/icons';
import { CONTACT } from '../data/content';

// Thin utility strip above the primary navigation: contact details on the
// left, quick portal links on the right. Scrolls away with the page.
const portals = [
  { label: 'Students', href: 'https://www.iemcrp.com/' },
  { label: 'Alumni', href: 'https://alumni.iem.edu.in/' },
  { label: 'Careers', href: 'https://recruitment.iem.edu.in/' },
];

export default function TopBar() {
  return (
    <div className="hidden bg-blue-900 text-white/85 md:block">
      <div className="container-wide flex h-9 items-center justify-between text-[12.5px]">
        <div className="flex items-center gap-5">
          <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-white">
            <Icon name="phone" className="ico w-[13px] h-[13px] text-blue-300" />
            {CONTACT.phone}
          </a>
          <span className="h-3 w-px bg-white/20" />
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
            <Icon name="mail" className="ico w-[13px] h-[13px] text-blue-300" />
            {CONTACT.email}
          </a>
        </div>
        <nav className="flex items-center gap-5">
          {portals.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-colors hover:text-white"
            >
              {p.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-blue-300 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
