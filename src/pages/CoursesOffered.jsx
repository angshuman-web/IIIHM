import SectionHead from '../components/ui/SectionHead';
import { Reveal, Stagger } from '../components/ui/Reveal';
import { PageHeader, CTABand, Checklist } from '../components/ui/Blocks';
import Button from '../components/ui/Button';
import Icon from '../lib/icons';
import { COURSES, ADMISSIONS_URL } from '../data/content';

export default function CoursesOffered() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Courses Offered"
        text="Industry-aligned degree programmes designed to turn a passion for hospitality into a global profession."
        trail={[['Academics', '/programme']]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Our Programmes" title="Choose Your Pathway" text="Full-time degree programmes offered under the University of Engineering & Management, Kolkata." />
          <Stagger className="grid gap-[26px] md:grid-cols-2">
            {COURSES.map(([icon, name, code, meta, desc]) => (
              <article key={code} className="card group flex h-full flex-col">
                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-royal to-blue-400 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center gap-4">
                  <div className="card-ico !mb-0"><Icon name={icon} className="ico ico-lg" /></div>
                  <span className="pill">{code}</span>
                </div>
                <h3 className="mt-5 text-[1.3rem]">{name}</h3>
                <p className="mt-1.5 inline-flex items-center gap-2 text-[.9rem] font-bold text-royal"><Icon name="clock" className="ico h-4 w-4" />{meta}</p>
                <p className="mt-3 flex-1 text-muted">{desc}</p>
                <div className="mt-6"><Button href={ADMISSIONS_URL} size="sm">Apply Now</Button></div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="eyebrow">Why Study Here</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)]">A degree built for the real world</h2>
            <p className="mt-4 text-muted">Every programme pairs classroom learning with the kitchen, the lab and the guest — supported by internships, specialization tracks and a dedicated placement cell.</p>
            <div className="mt-6">
              <Checklist items={[
                'Honours degree with dual major specializations',
                '60%+ practical, hands-on training',
                'Industry-integrated internships & live projects',
                'Foreign language (French) & soft-skills training',
                'Free coaching for Govt. competitive exams (SDP & ESP)',
              ]} />
            </div>
          </Reveal>
          <Reveal dir="right">
            <div className="rounded-xl3 border border-line bg-white p-8 shadow-card">
              <h3 className="text-[1.2rem]">Eligibility & Admissions</h3>
              <p className="mt-3 text-muted">Candidates who have passed 10+2 (any stream) from a recognised board are eligible to apply. Admission is based on merit and a personal interaction.</p>
              <p className="mt-3 text-muted">Scholarships of up to 100% are available for deserving students. For the detailed curriculum and current fee sheet, download the brochure or contact our admissions team.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/fees-structure" variant="ghost" size="sm">Fees Structure</Button>
                <Button to="/programme" variant="ghost" size="sm">BHM Programme</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand title="Ready to Begin Your Hospitality Journey?" text="Apply now and take the first step towards a global career in hotel & hospitality management." primary={['Apply for Admission', ADMISSIONS_URL]} secondary={['Talk to Us', '/contact']} />
    </>
  );
}
