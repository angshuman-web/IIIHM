import { Reveal } from '../components/ui/Reveal';
import { PageHeader, CTABand } from '../components/ui/Blocks';
import ImageRotator from '../components/ui/ImageRotator';
import Icon from '../lib/icons';
import { MOU_IMAGES, ADMISSIONS_URL } from '../data/content';

export default function MoU() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Our Memorandum of Understanding"
        text="Partnerships that open doors to international internships and placements for our students."
        trail={[['Academics', '/programme']]}
      />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <div className="overflow-hidden rounded-xl3 shadow-lg2">
              <ImageRotator images={MOU_IMAGES} aspect="aspect-[4/3]" />
            </div>
          </Reveal>

          <Reveal dir="right">
            <span className="eyebrow">IIIHM × UMA</span>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)]">A New Era of Collaboration</h2>
            <p className="mt-4 text-ink-2 leading-relaxed">
              On <b>April 24, 2024</b>, an unconventional <b>Memorandum of Understanding (MoU)</b> was signed between{' '}
              <b>IEM’s International Institute of Hotel Management (IIIHM)</b> and the{' '}
              <b>Udaan Management Academy (UMA)</b>.
            </p>
            <p className="mt-4 text-ink-2 leading-relaxed">
              This partnership was graced by <b>Prof. (Dr.) Satyajit Chakrabarti</b>, Hon’ble Pro Vice-Chancellor of
              UEMK, and <b>Dr. Aditya Arun Udani</b>, Director of UMA. It marks the dawn of a new era of collaboration,
              aiming to provide IIIHM students with unparalleled opportunities in the global job market — offering{' '}
              <b>international internships and placements</b>.
            </p>
            <ul className="mt-6 space-y-2.5">
              {['International internship opportunities', 'Global placement pathways', 'Industry-led mentoring & exposure'].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-[.96rem] text-ink-2"><Icon name="check" className="ico h-4 w-4 text-royal" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand title="Global Opportunities Await" text="Join IIIHM and step into a world of international internships and placements." primary={['Apply Now', ADMISSIONS_URL]} secondary={['Talk to Us', '/contact']} />
    </>
  );
}
