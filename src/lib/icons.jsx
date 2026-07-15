// Feather-style stroke icons as a single <Icon name="…" /> component.
const PATHS = {
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-up': 'M12 19V5M6 11l6-6 6 6',
  'chevron-down': 'M6 9l6 6 6-6',
  search: null, // custom below
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z',
  clock: null,
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13',
  check: 'M20 6 9 17l-5-5',
  download: 'M12 3v12M7 10l5 5 5-5M4 21h16',
  plus: 'M12 5v14M5 12h14',
};

// Icons that need multiple elements (circles etc.)
const MULTI = {
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  'map-pin': (<><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>),
  facebook: (<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>),
  linkedin: (<path d="M4 9h4v12H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM12 9h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5S16 15 16 17v4h-4z" />),
  twitter: (<path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 3.8 4.9a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4c-.6.1-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1z" />),
  youtube: (<><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>),
  'chef-hat': (<><path d="M6 19h12M7 15h10v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" /><path d="M17 15a4 4 0 0 0 1-7.9A5 5 0 0 0 8 6.1 4 4 0 0 0 7 15" /></>),
  award: (<><circle cx="12" cy="9" r="6" /><path d="M8.2 13.6 7 22l5-3 5 3-1.2-8.4" /></>),
  users: (<><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 20v-2a4 4 0 0 0-3-3.9M16 3.1A4 4 0 0 1 16 11" /></>),
  briefcase: (<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>),
  star: (<path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z" />),
  calendar: (<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>),
  building: (<><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" /></>),
  utensils: (<path d="M4 3v7a2 2 0 0 0 4 0V3M6 10v11M18 3c-1.5 0-3 1.5-3 5s1.5 4 3 4v9" />),
  bed: (<path d="M3 8v12M3 12h18v8M21 20v-6a4 4 0 0 0-4-4H8a5 5 0 0 0-5 4" />),
  plane: (<path d="M17.8 19.2 16 11l4-4a2 2 0 0 0-3-3l-4 4-8.2-1.8a.5.5 0 0 0-.5.8l3.9 4-2.2 2.2H4l-1 1 3 1 1 3 1-1v-2.2L11.3 17l4 3.9a.5.5 0 0 0 .8-.5z" />),
  ship: (<path d="M12 3v6M5 9h14l-1.5 5H6.5zM3 15c1.5 1.5 3 1.5 4.5 0S10.5 15 12 15s3 1.5 4.5 0S19.5 15 21 15v3c-1.5 1.5-3 1.5-4.5 0S13.5 18 12 18s-3-1.5-4.5 0S4.5 18 3 18z" />),
  sparkles: (<path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3zM19 15l.9 2.3L22 18l-2.1.8L19 21l-.9-2.2L16 18l2.1-.7z" />),
  'graduation-cap': (<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></>),
  heart: (<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z" />),
  trophy: (<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a2 2 0 0 0 0 4h1M16 6h3a2 2 0 0 1 0 4h-1M9 18h6M10 14v4M14 14v4M8 21h8" />),
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
  beaker: (<path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V3M7.5 14h9" />),
  layers: (<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />),
  'trending-up': (<path d="M3 17 9 11l4 4 8-8M15 4h6v6" />),
  shield: (<><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></>),
  compass: (<><circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6z" /></>),
  lightbulb: (<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />),
  camera: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7l1.5-3h5L16 7" /><circle cx="12" cy="13" r="3.5" /></>),
  handshake: (<><path d="m11 17 2 2 3-3 3 1V9l-4-4-3 1-4-1-5 4v6l3 1 3 3z" /><path d="m8 12 3 3M12 8l2 2" /></>),
  headset: (<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2zM20 14a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM18 16v1a3 3 0 0 1-3 3h-3" />),
  ticket: (<><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z" /><path d="M13 6v12" /></>),
  route: (<><circle cx="6" cy="19" r="3" /><circle cx="18" cy="5" r="3" /><path d="M9 19h6a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h6" /></>),
  cake: (<path d="M4 21V11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10M2 21h20M4 15c1.3 1.3 2.7 1.3 4 0s2.7-1.3 4 0 2.7 1.3 4 0 2.7-1.3 4 0M12 8V4M12 4l1.5-2-1.5-1-1.5 1z" />),
  megaphone: (<path d="m3 11 15-6v14L3 13zM3 11v2a2 2 0 0 0 2 2h1M8 15v3a2 2 0 0 0 4 0" />),
  microscope: (<path d="M6 18h10M6 21h14M9 3l3 3-4 4-3-3zM8 11l6 6M14 6a5 5 0 0 1 2 9" />),
  file: (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /></>),
};

export default function Icon({ name, className = 'ico', ...rest }) {
  const multi = MULTI[name];
  const path = PATHS[name];
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {multi || (path ? <path d={path} /> : null)}
    </svg>
  );
}
