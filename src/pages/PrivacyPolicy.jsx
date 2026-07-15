import { Reveal } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/Blocks';
import { CONTACT } from '../data/content';

const INSTITUTE = "IEM's International Institute of Hotel & Hospitality Management (IIIHM)";

// Section renderer — a heading followed by paragraphs and/or bullet lists.
function Block({ title, children }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-[clamp(1.2rem,2vw,1.5rem)]">{title}</h2>
      <div className="mt-3 space-y-3 text-[.98rem] leading-relaxed text-ink-2">{children}</div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="mt-1 space-y-1.5">
      {items.map((it) => (
        <li key={typeof it === 'string' ? it : it[0]} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        text="How we collect, use, share and protect your information when you use our website and services."
      />

      <section className="section">
        <div className="container-x max-w-[860px]">
          <Reveal>
            <p className="rounded-xl2 border border-line bg-soft px-5 py-4 text-[.9rem] text-muted">
              <b className="text-ink-2">Last updated: April 11, 2024.</b> This Privacy Policy describes the policies
              and procedures for the collection, use and disclosure of your information when you use our Service, and
              explains your privacy rights and how the law protects you. In this policy, <b className="text-ink-2">“the
              Institute”, “we”, “us”</b> refers to {INSTITUTE}, Kolkata.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10">
              <Block title="Interpretation & Definitions">
                <p>
                  Capitalized terms have the meanings defined below and apply equally in the singular and plural.
                </p>
                <List
                  items={[
                    <><b className="text-ink-2">Account</b> — a unique account created for you to access our Service.</>,
                    <><b className="text-ink-2">Company</b> — {INSTITUTE}, Kolkata.</>,
                    <><b className="text-ink-2">Cookies</b> — small files placed on your device that record details of your browsing.</>,
                    <><b className="text-ink-2">Personal Data</b> — any information relating to an identified or identifiable individual.</>,
                    <><b className="text-ink-2">Service</b> — this Website, accessible at {CONTACT.website}.</>,
                    <><b className="text-ink-2">Usage Data</b> — data collected automatically when using the Service.</>,
                  ]}
                />
              </Block>

              <Block title="Information We Collect">
                <p>While using our Service, we may ask you to provide certain personally identifiable information, including:</p>
                <List items={['Email address', 'First and last name', 'Phone number', 'Usage data']} />
                <p>
                  <b className="text-ink-2">Usage Data</b> is collected automatically and may include your device’s IP
                  address, browser type and version, the pages you visit, the date and time of your visit, time spent on
                  pages, unique device identifiers and other diagnostic data. When you access the Service by a mobile
                  device, we may also collect device type, unique ID, operating system and browser information.
                </p>
              </Block>

              <Block title="Cookies & Tracking Technologies">
                <p>
                  We use cookies and similar tracking technologies (including beacons, tags and scripts) to track
                  activity on our Service and store certain information. The cookies we use include:
                </p>
                <List
                  items={[
                    <><b className="text-ink-2">Necessary / Essential cookies</b> (session) — enable core features and help authenticate users and prevent fraudulent use.</>,
                    <><b className="text-ink-2">Acceptance cookies</b> (persistent) — identify whether users have accepted the use of cookies.</>,
                    <><b className="text-ink-2">Functionality cookies</b> (persistent) — remember your choices such as login details and language preference.</>,
                  ]}
                />
              </Block>

              <Block title="How We Use Your Information">
                <p>The Institute may use your Personal Data for the following purposes:</p>
                <List
                  items={[
                    'To provide and maintain our Service, and to monitor its usage.',
                    'To manage your registration and account as a user of the Service.',
                    'To contact you by email, phone, SMS or other electronic communication.',
                    'To provide you with news, notices and general information about the Institute.',
                    'To manage and respond to your requests and enquiries.',
                    'For data analysis, identifying usage trends and improving the Service.',
                  ]}
                />
              </Block>

              <Block title="Sharing Your Information">
                <p>We may share your personal information in the following situations:</p>
                <List
                  items={[
                    'With service providers to monitor and analyse the use of our Service and to contact you.',
                    'With affiliates, who are required to honour this Privacy Policy.',
                    'With business partners to offer you certain products, services or promotions.',
                    'With other users, when you share information in public areas of the Service.',
                    'With your consent, for any other purpose.',
                  ]}
                />
              </Block>

              <Block title="Data Retention">
                <p>
                  We retain your Personal Data only for as long as necessary for the purposes set out in this policy,
                  and to the extent required to comply with our legal obligations, resolve disputes and enforce our
                  agreements. Usage Data is generally retained for a shorter period, except where used to strengthen
                  security or improve functionality.
                </p>
              </Block>

              <Block title="Transfer of Your Information">
                <p>
                  Your information may be processed at locations outside your state or country where data-protection
                  laws may differ. Your consent to this Privacy Policy, followed by your submission of information,
                  represents your agreement to that transfer. We take all steps reasonably necessary to ensure your
                  data is treated securely.
                </p>
              </Block>

              <Block title="Your Rights & Deleting Your Data">
                <p>
                  You have the right to access, update or request deletion of the Personal Data we hold about you. You
                  may do so through your account settings or by contacting us. Please note we may need to retain
                  certain information where a legal obligation or lawful basis exists.
                </p>
              </Block>

              <Block title="Disclosure of Your Information">
                <p>
                  We may disclose your Personal Data in connection with a merger, acquisition or sale of assets (with
                  prior notice), or where required to do so by law or in response to valid requests by public
                  authorities. We may also disclose data in good faith to comply with legal obligations, protect the
                  rights and safety of the Institute or others, and prevent or investigate wrongdoing.
                </p>
              </Block>

              <Block title="Security">
                <p>
                  The security of your data is important to us, but no method of transmission over the Internet or
                  method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                  protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </Block>

              <Block title="Children’s Privacy">
                <p>
                  Our Service does not address anyone under the age of 13, and we do not knowingly collect personally
                  identifiable information from children under 13. If you are a parent or guardian and are aware that
                  your child has provided us with Personal Data, please contact us so we can remove it.
                </p>
              </Block>

              <Block title="Links to Other Websites">
                <p>
                  Our Service may contain links to third-party websites that are not operated by us. We strongly advise
                  you to review the privacy policy of every site you visit. We assume no responsibility for the content,
                  privacy policies or practices of any third-party sites or services.
                </p>
              </Block>

              <Block title="Changes to This Privacy Policy">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the “Last updated” date, and, where appropriate, by other means.
                  You are advised to review this policy periodically for any changes.
                </p>
              </Block>

              <Block title="Contact Us">
                <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                <List
                  items={[
                    <>By email: <a className="font-semibold text-royal hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></>,
                    <>By phone: <a className="font-semibold text-royal hover:underline" href={CONTACT.phoneHref}>{CONTACT.phone}</a></>,
                    <>By post: {CONTACT.address}</>,
                  ]}
                />
              </Block>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
