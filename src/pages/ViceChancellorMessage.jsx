import LeaderMessage from '../components/ui/LeaderMessage';

export default function ViceChancellorMessage() {
  return (
    <LeaderMessage
      eyebrow="Leadership"
      title="Vice-Chancellor's Message"
      img="leader-vc"
      name="Vice-Chancellor"
      role="Vice-Chancellor, UEM Kolkata"
      signoff="With best wishes"
      paragraphs={[
        'Dear Students,',
        'Welcome to IEM’s International Institute of Hotel Management (IIIHM), where tradition meets innovation and education transcends every boundary. Here you will find an environment designed to nurture curiosity, sharpen skills and shape the leaders of tomorrow.',
        'Our programmes prepare you for the hospitality, tourism and aviation industries through rigorous academics balanced with rich, practical experience. From professional culinary training to a fully functional aviation lab where students engage in real simulations and hands-on preparation, learning here is immersive and industry-focused.',
        'You will never walk this journey alone. Our faculty and staff serve as dedicated mentors throughout your academic life, guiding you as you grow in confidence and capability.',
        'Think of IIIHM not merely as a destination, but as a launchpad for your dreams — a place where you will transform, develop and emerge as an industry leader and an inspiration to others.',
      ]}
    />
  );
}
