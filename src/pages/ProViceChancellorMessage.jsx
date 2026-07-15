import LeaderMessage from '../components/ui/LeaderMessage';

export default function ProViceChancellorMessage() {
  return (
    <LeaderMessage
      eyebrow="Leadership"
      title="Pro Vice-Chancellor's Message"
      img="leader-provc"
      name="Prof. (Dr.) Satyajit Chakrabarty"
      role="Pro Vice-Chancellor"
      paragraphs={[
        'Dear Students,',
        'It gives me immense pleasure to welcome you to IEM’s International Institute of Hotel Management (IIIHM). Our institution prides itself on delivering an unparalleled educational experience, blending academic excellence with hands-on learning.',
        'We focus on developing the skills that matter most across the Hospitality, Aviation, Tourism and Retail sectors, through innovative teaching methods and an industry-aligned curriculum. From immersive culinary experiences to our advanced aviation lab facilities, every element of learning is designed to make you industry-ready.',
        'A dedicated placement cell works closely with you to facilitate a smooth transition from campus to career, connecting you with leading employers and lifelong opportunities.',
        'I encourage you to embrace every opportunity that comes your way. Your time at IIIHM will be a transformative journey — one that shapes you into a confident, capable professional ready to lead.',
      ]}
    />
  );
}
