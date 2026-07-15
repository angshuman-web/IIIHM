import LeaderMessage from '../components/ui/LeaderMessage';

export default function ChancellorMessage() {
  return (
    <LeaderMessage
      eyebrow="Leadership"
      title="Chancellor's Message"
      img="leader-chancellor"
      name="Prof. Banani Chakrabarti"
      role="Chancellor"
      paragraphs={[
        'Dear Scholars,',
        'Step into the esteemed halls of IEM’s International Institute of Hotel Management (IIIHM) under the University of Engineering & Management (UEM), Kolkata, where an extraordinary voyage awaits you. Prepare for an experience that transcends the ordinary.',
        'At IIIHM, we pledge an unwavering commitment to deliver superlative education in Hotel and Hospitality Management. Our curriculum, meticulously crafted, aims to furnish you with the indispensable knowledge and skills essential for thriving in the ever-evolving realm of this industry. From theoretical groundwork to hands-on application, our comprehensive training regimen is tailored to prepare you for the myriad challenges and boundless opportunities that await your conquest.',
        'Your journey at IIIHM is not merely academic; it is a tapestry woven with enriching experiences and fulfilling encounters. Our avant-garde facilities stand as bastions of excellence, ensuring your access to premier resources for both scholastic pursuits and personal development — be it immersing yourself in culinary arts, engaging in workshops, or delving into our cutting-edge aviation laboratory.',
        'Furthermore, our commitment to your success extends beyond the classroom. With a steadfast focus on placements, we forge robust ties with industry leaders and maintain a dedicated placement cell tirelessly working to secure lucrative opportunities for our students. As you tread towards graduation, be assured that you shall emerge equipped to carve a triumphant path across the Hospitality, Aviation, Tourism and Retail sectors.',
        'Embrace this odyssey with fervour and dedication, for your sojourn at IIIHM shall not only sculpt your professional trajectory but also etch indelible memories destined to endure a lifetime.',
      ]}
    />
  );
}
