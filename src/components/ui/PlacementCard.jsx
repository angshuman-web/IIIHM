import Img from '../../lib/Img';
import { firstNameSlug, companySlug } from '../../data/content';

// A single placed-student card: circular student photo, name, and the
// recruiting company's logo + name. Photos/logos live in /assets/images as
// <firstname>.png and <company-slug>.png.
export default function PlacementCard({ name, company }) {
  return (
    <article className="group flex h-full flex-col items-center rounded-xl2 border border-line bg-white p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-card">
      <div className="h-[86px] w-[86px] overflow-hidden rounded-full bg-soft ring-2 ring-blue-100 ring-offset-2">
        <Img name={firstNameSlug(name)} fallback={null} alt={name} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-3.5 text-[1rem] leading-tight">{name}</h3>
      <div className="mt-auto w-full pt-3">
        <div className="grid h-9 place-items-center">
          <Img name={companySlug(company)} fallback={null} alt={company} className="max-h-9 w-auto max-w-[120px] object-contain" />
        </div>
        <p className="mt-2 text-[.8rem] font-semibold text-muted">{company}</p>
      </div>
    </article>
  );
}
