import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { WhatsAppIcon } from '@/components/StoreButton';
import { site, waLink, telLink } from '@/config/site';

export const metadata = {
  title: 'Contact Drovika — Call, WhatsApp or email',
  description: `Talk to the Drovika team for booking help, business deliveries or driver sign-up. Call ${site.phone} or WhatsApp us.`,
  alternates: { canonical: '/contact/' },
};

export default function Contact() {
  const cards = [
    { Icon: Phone, t: 'Call us', v: site.phone, href: telLink(), cls: '' },
    { Icon: WhatsAppIcon, t: 'WhatsApp', v: 'Chat with us', href: waLink(), cls: 'ccard--wa', ext: true },
    { Icon: Mail, t: 'Email', v: site.email, href: `mailto:${site.email}`, cls: '' },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title={<>We&apos;re here to <span className="hl">help.</span></>} lead="Booking stuck? Planning a big move? Want Drovika for your business? Reach out — a real person will answer." />
      <section className="sec contact">
        <div className="wrap contact__row">
          <div className="contact__left">
            <div className="ccards">
              {cards.map(({ Icon, t, v, href, cls, ext }, i) => (
                <a key={t} href={href} className={`ccard rv ${cls}`} style={{ '--d': `${i * 0.06}s` }} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined}>
                  <span className="ccard__ic"><Icon size={22} /></span>
                  <span><small>{t}</small><b>{v}</b></span>
                </a>
              ))}
            </div>
            <div className="cinfo rv">
              <div><Clock size={20} /><span><b>Support hours</b>{site.hours}</span></div>
              <div><MapPin size={20} /><span><b>Office</b>{site.address}</span></div>
              <div><ShieldCheck size={20} /><span><b>Grievance officer</b>{site.grievanceOfficer} · {site.email}</span></div>
            </div>
          </div>
          <div className="rv" style={{ '--d': '.1s' }}><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
