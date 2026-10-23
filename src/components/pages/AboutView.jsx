import Link from 'next/link';
import { Eye, Target, Heart, IndianRupee, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import VehicleArt from '@/components/VehicleArt';
import { site, vehicles } from '@/config/site';
import { pick, lp } from '@/lib/i18n';

const T = {
  en: {
    eb: 'About Drovika', t1: 'Moving Mumbai', t2: 'one load', t3: ' at a time',
    lead: 'Drovika makes booking a mini truck as easy as booking a cab — with honest prices for customers and fair earnings for the people behind the wheel.',
    why: 'Why we started',
    p1: 'Anyone who has moved house or run a shop in Mumbai knows the drill: calling tempo stands, haggling over price, waiting with no idea when the vehicle will arrive, and hoping your goods reach in one piece.',
    p2a: 'Meanwhile, thousands of vehicle owners spend hours waiting for their next trip. Drovika connects the two through two simple apps — ', p2b: ' for customers and ', p2c: ' for drivers — with the price fixed before the trip starts and every move tracked live.',
    p3: (u) => `We are a small, Mumbai-based team${u ? ' and a registered MSME (Udyam)' : ''}, building Drovika for the city we live in.`,
    badge: ['vehicle types', 'ready to book'],
    mv: [['Our mission', 'Make goods transport in Indian cities simple, transparent and safe for everyone.'], ['Our vision', 'A city where moving anything is one tap away — and every driver earns with dignity.']],
    valEb: 'What we stand for', valH: 'Our values',
    vals: [['Honest pricing', 'The fare is shown before you book. No haggling, no surprises.'], ['Safety first', 'Verified drivers, OTP-secured pickups and live tracking on every trip.'], ['Fair to drivers', 'A fair service fee, with earnings drivers can see before every trip.'], ['Care for your goods', 'We treat every load like it belongs to our own family.']],
    ctaH: 'Let’s move something together', ctaP: 'Questions, partnerships or business deliveries — we’d love to hear from you.', contact: 'Contact us', drive: 'Drive with us',
  },
  hi: {
    eb: 'Drovika के बारे में', t1: 'मुंबई को आगे बढ़ाते हुए', t2: 'एक-एक लोड', t3: ' करके',
    lead: 'Drovika मिनी ट्रक बुक करना उतना ही आसान बनाता है जितना कैब बुक करना — ग्राहकों के लिए ईमानदार किराया और गाड़ी चलाने वालों के लिए सही कमाई।',
    why: 'हमने शुरुआत क्यों की',
    p1: 'जिसने भी मुंबई में घर शिफ़्ट किया है या दुकान चलाई है, वो जानता है: टेम्पो स्टैंड पर फ़ोन करना, किराए पर मोलभाव, गाड़ी कब आएगी पता नहीं, और बस उम्मीद कि सामान सही-सलामत पहुँचे।',
    p2a: 'वहीं हज़ारों गाड़ी मालिक अगली ट्रिप के लिए घंटों इंतज़ार करते हैं। Drovika दोनों को दो आसान ऐप से जोड़ता है — ग्राहकों के लिए ', p2b: ' और ड्राइवरों के लिए ', p2c: ' — ट्रिप शुरू होने से पहले किराया तय और हर कदम लाइव ट्रैक।',
    p3: (u) => `हम मुंबई की एक छोटी टीम हैं${u ? ' और रजिस्टर्ड MSME (उद्यम)' : ''}, और जिस शहर में रहते हैं उसी के लिए Drovika बना रहे हैं।`,
    badge: ['तरह की गाड़ियाँ', 'बुकिंग के लिए तैयार'],
    mv: [['हमारा मिशन', 'भारतीय शहरों में माल ढुलाई को सबके लिए आसान, पारदर्शी और सुरक्षित बनाना।'], ['हमारा सपना', 'एक ऐसा शहर जहाँ कुछ भी भेजना बस एक टैप दूर हो — और हर ड्राइवर इज़्ज़त से कमाए।']],
    valEb: 'हम किस बात पर टिके हैं', valH: 'हमारे मूल्य',
    vals: [['ईमानदार किराया', 'बुक करने से पहले किराया दिखता है। न मोलभाव, न सरप्राइज़।'], ['सुरक्षा पहले', 'हर ट्रिप में वेरिफ़ाइड ड्राइवर, OTP से सुरक्षित पिकअप और लाइव ट्रैकिंग।'], ['ड्राइवरों के साथ इंसाफ़', 'सही सर्विस फ़ीस, और हर ट्रिप से पहले ड्राइवर को अपनी कमाई दिखती है।'], ['आपके सामान की परवाह', 'हम हर लोड को अपने परिवार के सामान की तरह संभालते हैं।']],
    ctaH: 'चलिए साथ मिलकर कुछ शिफ़्ट करें', ctaP: 'सवाल, पार्टनरशिप या बिज़नेस डिलीवरी — हमें आपसे बात करके खुशी होगी।', contact: 'संपर्क करें', drive: 'ड्राइवर बनें',
  },
  mr: {
    eb: 'Drovika बद्दल', t1: 'मुंबईला पुढे नेत', t2: 'एक-एक लोड', t3: ' करून',
    lead: 'Drovika मिनी ट्रक बुक करणे कॅब बुक करण्याइतके सोपे करते — ग्राहकांसाठी प्रामाणिक भाडे आणि गाडी चालवणाऱ्यांसाठी योग्य कमाई.',
    why: 'आम्ही सुरुवात का केली',
    p1: 'ज्याने मुंबईत घर शिफ्ट केले आहे किंवा दुकान चालवले आहे, त्याला माहीत आहे: टेम्पो स्टँडला फोन करणे, भाड्यावर घासाघीस, गाडी कधी येईल माहीत नाही, आणि फक्त आशा की माल सुखरूप पोहोचेल.',
    p2a: 'त्याच वेळी हजारो गाडीमालक पुढच्या ट्रिपसाठी तासन्तास वाट पाहतात. Drovika दोघांना दोन सोप्या ॲप्सने जोडते — ग्राहकांसाठी ', p2b: ' आणि ड्रायव्हरसाठी ', p2c: ' — ट्रिप सुरू होण्याआधी भाडे ठरलेले आणि प्रत्येक हालचाल लाइव्ह ट्रॅक.',
    p3: (u) => `आम्ही मुंबईतील एक छोटी टीम आहोत${u ? ' आणि नोंदणीकृत MSME (उद्यम)' : ''}, आणि ज्या शहरात राहतो त्याच शहरासाठी Drovika बनवत आहोत.`,
    badge: ['प्रकारच्या गाड्या', 'बुकिंगसाठी तयार'],
    mv: [['आमचे ध्येय', 'भारतीय शहरांतील मालवाहतूक सर्वांसाठी सोपी, पारदर्शक आणि सुरक्षित करणे.'], ['आमचे स्वप्न', 'असे शहर जिथे काहीही पाठवणे फक्त एका टॅपवर असेल — आणि प्रत्येक ड्रायव्हर सन्मानाने कमावेल.']],
    valEb: 'आम्ही कशावर ठाम आहोत', valH: 'आमची मूल्ये',
    vals: [['प्रामाणिक भाडे', 'बुक करण्याआधी भाडे दिसते. ना घासाघीस, ना सरप्राइज.'], ['सुरक्षा आधी', 'प्रत्येक ट्रिपमध्ये व्हेरिफाइड ड्रायव्हर, OTP ने सुरक्षित पिकअप आणि लाइव्ह ट्रॅकिंग.'], ['ड्रायव्हरसोबत न्याय', 'योग्य सर्व्हिस फी, आणि प्रत्येक ट्रिपआधी ड्रायव्हरला आपली कमाई दिसते.'], ['तुमच्या मालाची काळजी', 'आम्ही प्रत्येक लोड आपल्या कुटुंबाच्या सामानासारखा सांभाळतो.']],
    ctaH: 'चला, सोबत मिळून काहीतरी शिफ्ट करूया', ctaP: 'प्रश्न, पार्टनरशिप किंवा व्यवसाय डिलिव्हरी — तुमच्याशी बोलायला आम्हाला आवडेल.', contact: 'संपर्क करा', drive: 'ड्रायव्हर व्हा',
  },
};
const MV_IC = [Target, Eye];
const VAL_IC = [IndianRupee, ShieldCheck, Users, Heart];

export default function AboutView({ lang = 'en' }) {
  const t = pick(T, lang);
  const dot = lang === 'hi' ? '।' : '.';
  return (
    <>
      <PageHero
        eyebrow={t.eb}
        title={<>{t.t1}<span className="pn">,</span> <span className="it">{t.t2}</span>{t.t3}<span className="pn">{dot}</span></>}
        lead={t.lead}
      />

      <section className="sec about">
        <div className="wrap about__row">
          <div className="about__story rv">
            <h2 className="h-section">{t.why}</h2>
            <p>{t.p1}</p>
            <p>{t.p2a}<b>Drovika</b>{t.p2b}<b>Drovika Partner</b>{t.p2c}</p>
            <p>{t.p3(site.udyam)}</p>
          </div>
          <div className="about__art rv" style={{ '--d': '.1s' }}>
            <div className="about__card about__card--a"><VehicleArt slug="tempo" /></div>
            <div className="about__card about__card--b"><VehicleArt slug="tata_ace" /></div>
            <div className="about__badge"><b>{vehicles.length}</b><span>{t.badge[0]}<br />{t.badge[1]}</span></div>
          </div>
        </div>
      </section>

      <section className="sec mv">
        <div className="wrap mv__grid">
          {t.mv.map(([title, d], i) => {
            const Icon = MV_IC[i];
            return (
              <article key={title} className={`mv__card rv ${i ? 'mv__card--dark' : ''}`} style={{ '--d': `${i * 0.1}s` }}>
                <span className="bx__ic"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{d}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="sec values">
        <div className="wrap">
          <div className="sec__head sec__head--center rv">
            <span className="eyebrow">{t.valEb}</span>
            <h2 className="h-section">{t.valH}</h2>
          </div>
          <div className="dperks">
            {t.vals.map(([title, d], i) => {
              const Icon = VAL_IC[i];
              return (
                <article key={title} className="dperk rv" style={{ '--d': `${i * 0.08}s` }}>
                  <span className="bx__ic"><Icon size={22} /></span>
                  <h3>{title}</h3>
                  <p>{d}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec cta-band">
        <div className="wrap">
          <div className="cta rv">
            <h2 className="h-section">{t.ctaH}<span className="pn">{dot}</span></h2>
            <p>{t.ctaP}</p>
            <div className="cta__btns">
              <Link href={lp(lang, '/contact/')} className="btn btn--lime">{t.contact} <ArrowRight size={18} /></Link>
              <Link href={lp(lang, '/drivers/')} className="btn btn--ghost-light">{t.drive}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
