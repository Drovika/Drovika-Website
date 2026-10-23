import Link from 'next/link';
import { ArrowRight, Banknote, MapPin, Zap, ShieldCheck } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import StoreButton from '../StoreButton';

import { pick, lp } from '@/lib/i18n';

const T = {
  en: {
    perks: [['Keep most of every fare', 'A small, fair service fee. See your earning on every trip before you accept.'],
      ['Trips near you — and home', 'Get requests close to you. Heading home? Turn on go-home mode and get trips going your way.'],
      ['Wasted trip? Next one is yours', 'If a customer cancels after you reach the pickup, you get the next nearby trip first.'],
      ['Fair rules, shown to you', 'Your cancellation score is on your home screen. Show up on time and get more trips.']],
    eyebrow: 'Drovika Partner', h1: 'Own a tempo or truck', q: '?', h2: 'Earn more with it.',
    lead: 'Join Drovika as a driver partner and get steady trips across Mumbai, with fair pay, fair rules and no middlemen.',
    app: 'Partner app', more: 'Learn more',
  },
  hi: {
    perks: [['हर किराए का बड़ा हिस्सा आपका', 'छोटी और सही सर्विस फ़ीस। ट्रिप लेने से पहले हर ट्रिप की कमाई देखें।'],
      ['पास की ट्रिप — और घर की तरफ़ भी', 'अपने पास की ट्रिप पाएँ। घर जा रहे हैं? गो-होम मोड चालू करें और अपने रास्ते की ट्रिप पाएँ।'],
      ['ट्रिप बेकार गई? अगली आपकी', 'पिकअप पर पहुँचने के बाद ग्राहक कैंसल करे, तो पास की अगली ट्रिप पहले आपको मिलती है।'],
      ['साफ़ नियम, आपके सामने', 'आपका कैंसलेशन स्कोर होम स्क्रीन पर दिखता है। समय पर पहुँचें और ज़्यादा ट्रिप पाएँ।']],
    eyebrow: 'Drovika पार्टनर', h1: 'टेम्पो या ट्रक है', q: '?', h2: 'उससे ज़्यादा कमाएँ।',
    lead: 'Drovika से ड्राइवर पार्टनर के रूप में जुड़ें और पूरे मुंबई में लगातार ट्रिप पाएँ — सही कमाई, साफ़ नियम और कोई बिचौलिया नहीं।',
    app: 'पार्टनर ऐप', more: 'और जानें',
  },
  mr: {
    perks: [['प्रत्येक भाड्याचा मोठा हिस्सा तुमचा', 'छोटी आणि योग्य सर्व्हिस फी. ट्रिप घेण्याआधी प्रत्येक ट्रिपची कमाई पाहा.'],
      ['जवळच्या ट्रिप — आणि घराकडेही', 'तुमच्या जवळच्या ट्रिप मिळवा. घरी जाताय? गो-होम मोड चालू करा आणि तुमच्या वाटेवरच्या ट्रिप मिळवा.'],
      ['ट्रिप वाया गेली? पुढची तुमची', 'पिकअपला पोहोचल्यावर ग्राहकाने कॅन्सल केले, तर जवळची पुढची ट्रिप आधी तुम्हाला मिळते.'],
      ['स्पष्ट नियम, तुमच्यासमोर', 'तुमचा कॅन्सलेशन स्कोर होम स्क्रीनवर दिसतो. वेळेवर पोहोचा आणि जास्त ट्रिप मिळवा.']],
    eyebrow: 'Drovika पार्टनर', h1: 'टेम्पो किंवा ट्रक आहे', q: '?', h2: 'त्यातून जास्त कमवा.',
    lead: 'Drovika सोबत ड्रायव्हर पार्टनर म्हणून जोडा आणि संपूर्ण मुंबईत सतत ट्रिप मिळवा — योग्य कमाई, स्पष्ट नियम आणि कोणताही मध्यस्थ नाही.',
    app: 'पार्टनर ॲप', more: 'अधिक जाणून घ्या',
  },
};
const PI = [Banknote, MapPin, Zap, ShieldCheck];

export default function DriverBand({ lang = 'en' }) {
  const t = pick(T, lang);
  const PERKS = t.perks.map(([a, b], i) => [PI[i], a, b]);
  return (
    <section className="sec dband" id="drive">
      <div className="dband__bg" aria-hidden="true" />
      <div className="wrap dband__row">
        <div className="dband__copy rv">
          <span className="eyebrow eyebrow--light">{t.eyebrow}</span>
          <h2 className="h-section">{t.h1}<span className="pn">{t.q}</span> <span className="dband__lime it">{t.h2}</span></h2>
          <p className="dband__lead">{t.lead}</p>
          <div className="dband__ctas">
            <StoreButton app="partner" label={t.app} lang={lang} />
            <Link href={lp(lang, '/drivers/')} className="btn btn--ghost-light">{t.more} <ArrowRight size={18} /></Link>
          </div>
          <div className="dband__fleet" aria-hidden="true">
            <VehicleArt slug="tata_ace" />
            <VehicleArt slug="pickup" />
            <VehicleArt slug="tempo" />
          </div>
        </div>
        <div className="dband__perks">
          {PERKS.map(([Icon, title, d], i) => (
            <div key={title} className="perk rv" style={{ '--d': `${i * 0.08}s` }}>
              <span className="perk__ic"><Icon size={22} /></span>
              <div><h3>{title}</h3><p>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
