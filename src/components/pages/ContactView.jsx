import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { WhatsAppIcon } from '@/components/StoreButton';
import { site, waLink, telLink } from '@/config/site';
import { pick } from '@/lib/i18n';

const T = {
  en: { eb: 'Contact', t1: 'We’re here to ', t2: 'help.', lead: 'Booking stuck? Planning a big move? Want Drovika for your business? Reach out — a real person will answer.', call: 'Call us', chat: 'Chat with us', email: 'Email', hoursT: 'Support hours', hours: null, office: 'Office', address: null, griev: 'Grievance officer' },
  hi: { eb: 'संपर्क', t1: 'हम मदद के लिए ', t2: 'हाज़िर हैं।', lead: 'बुकिंग अटक गई? बड़ी शिफ़्टिंग प्लान कर रहे हैं? अपने बिज़नेस के लिए Drovika चाहिए? हमसे बात करें — असली इंसान जवाब देगा।', call: 'कॉल करें', chat: 'हमसे चैट करें', email: 'ईमेल', hoursT: 'सपोर्ट का समय', hours: 'हर दिन, सुबह 8 से रात 10 बजे तक', office: 'ऑफ़िस', address: 'मुंबई, महाराष्ट्र, भारत', griev: 'शिकायत अधिकारी' },
  mr: { eb: 'संपर्क', t1: 'आम्ही मदतीसाठी ', t2: 'हजर आहोत.', lead: 'बुकिंग अडकली? मोठी शिफ्टिंग प्लॅन करताय? तुमच्या व्यवसायासाठी Drovika हवे? आमच्याशी बोला — खरा माणूस उत्तर देईल.', call: 'कॉल करा', chat: 'आमच्याशी चॅट करा', email: 'ईमेल', hoursT: 'सपोर्टची वेळ', hours: 'दररोज, सकाळी 8 ते रात्री 10', office: 'ऑफिस', address: 'मुंबई, महाराष्ट्र, भारत', griev: 'तक्रार अधिकारी' },
};

export default function ContactView({ lang = 'en' }) {
  const t = pick(T, lang);
  const cards = [
    { Icon: Phone, t: t.call, v: site.phone, href: telLink(), cls: '' },
    { Icon: WhatsAppIcon, t: 'WhatsApp', v: t.chat, href: waLink(), cls: 'ccard--wa', ext: true },
    { Icon: Mail, t: t.email, v: site.email, href: `mailto:${site.email}`, cls: '' },
  ];
  return (
    <>
      <PageHero eyebrow={t.eb} title={<>{t.t1}<span className="it">{t.t2}</span></>} lead={t.lead} />
      <section className="sec contact">
        <div className="wrap contact__row">
          <div className="contact__left">
            <div className="ccards">
              {cards.map(({ Icon, t: title, v, href, cls, ext }, i) => (
                <a key={title} href={href} className={`ccard rv ${cls}`} style={{ '--d': `${i * 0.06}s` }} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined}>
                  <span className="ccard__ic"><Icon size={22} /></span>
                  <span><small>{title}</small><b>{v}</b></span>
                </a>
              ))}
            </div>
            <div className="cinfo rv">
              <div><Clock size={20} /><span><b>{t.hoursT}</b>{t.hours || site.hours}</span></div>
              <div><MapPin size={20} /><span><b>{t.office}</b>{t.address || site.address}</span></div>
              <div><ShieldCheck size={20} /><span><b>{t.griev}</b>{site.grievanceOfficer} · {site.email}</span></div>
            </div>
          </div>
          <div className="rv" style={{ '--d': '.1s' }}><ContactForm lang={lang} /></div>
        </div>
      </section>
    </>
  );
}
