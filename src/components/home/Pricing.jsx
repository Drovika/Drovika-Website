import { ArrowRight, BadgeCheck, HandCoins, Lock, ShieldCheck, Wallet } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import StoreButton from '../StoreButton';
import { vehicles } from '@/config/site';
import { pick } from '@/lib/i18n';
import { vehText } from './Vehicles';

const T = {
  en: {
    p1: 'Price before you book', p1d: 'Set pickup and drop in the app and see one clear price for every vehicle.',
    p2: 'No bargaining, ever', p2d: 'The price you confirm is the price you pay — no haggling at the gate.',
    p3: 'Cash or Wallet', p3d: 'Cash or UPI to the driver after delivery, or pay from your Drovika Wallet.',
    eyebrow: 'Upfront pricing', h1: 'Know your fare ', h2: 'before', h3: ' you book',
    lead: 'No calls, no quotes, no surprises. The Drovika app shows you the full price the moment you choose your route.',
    how: 'How booking works', aria: 'How fares appear in the Drovika app', live: 'Live price', inApp: 'Shown in the app', exact: 'Exact fares are shown in the app',
    c1: 'Price locked', c1s: 'once you confirm', c2: 'No hidden charges', c2s: 'what you see is what you pay',
  },
  hi: {
    p1: 'बुकिंग से पहले किराया', p1d: 'ऐप में पिकअप और ड्रॉप डालें और हर गाड़ी का एक साफ़ किराया देखें।',
    p2: 'कभी कोई मोलभाव नहीं', p2d: 'जो किराया आप कन्फ़र्म करते हैं वही देते हैं — गेट पर कोई बहस नहीं।',
    p3: 'कैश या वॉलेट', p3d: 'डिलीवरी के बाद ड्राइवर को कैश या UPI, या अपने Drovika वॉलेट से पेमेंट।',
    eyebrow: 'पहले से तय किराया', h1: 'बुक करने से ', h2: 'पहले', h3: ' किराया जानें',
    lead: 'न कॉल, न कोटेशन, न कोई सरप्राइज़। रूट चुनते ही Drovika ऐप पूरा किराया दिखा देता है।',
    how: 'बुकिंग कैसे होती है', aria: 'Drovika ऐप में किराया कैसे दिखता है', live: 'लाइव किराया', inApp: 'ऐप में दिखता है', exact: 'पक्का किराया ऐप में दिखता है',
    c1: 'किराया लॉक', c1s: 'कन्फ़र्म करते ही', c2: 'कोई छुपा चार्ज नहीं', c2s: 'जो दिखे, वही दें',
  },
  mr: {
    p1: 'बुकिंगआधी भाडे', p1d: 'ॲपमध्ये पिकअप आणि ड्रॉप टाका आणि प्रत्येक गाडीचे एक स्पष्ट भाडे पाहा.',
    p2: 'कधीही घासाघीस नाही', p2d: 'जे भाडे तुम्ही कन्फर्म करता तेच देता — गेटवर कोणताही वाद नाही.',
    p3: 'रोख किंवा वॉलेट', p3d: 'डिलिव्हरीनंतर ड्रायव्हरला रोख किंवा UPI, किंवा तुमच्या Drovika वॉलेटमधून पेमेंट.',
    eyebrow: 'आधीच ठरलेले भाडे', h1: 'बुक करण्याच्या ', h2: 'आधी', h3: ' भाडे जाणून घ्या',
    lead: 'ना कॉल, ना कोटेशन, ना कोणतेही सरप्राइज. मार्ग निवडताच Drovika ॲप पूर्ण भाडे दाखवते.',
    how: 'बुकिंग कसे होते', aria: 'Drovika ॲपमध्ये भाडे कसे दिसते', live: 'लाइव्ह भाडे', inApp: 'ॲपमध्ये दिसते', exact: 'नक्की भाडे ॲपमध्ये दिसते',
    c1: 'भाडे लॉक', c1s: 'कन्फर्म करताच', c2: 'कोणताही लपलेला चार्ज नाही', c2s: 'जे दिसते तेच द्या',
  },
};

const SHOW = ['three_wheeler', 'tata_ace', 'pickup', 'tata_407', 'truck'];

// Upfront pricing — shows the idea, not the numbers. Exact fares live only inside the app.
export default function Pricing({ lang = 'en' }) {
  const t = pick(T, lang);
  const POINTS = [[ShieldCheck, t.p1, t.p1d], [HandCoins, t.p2, t.p2d], [Wallet, t.p3, t.p3d]];
  return (
    <section className="sec price" id="fare">
      <div className="wrap price__row">
        <div className="price__copy rv">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h-section">{t.h1}<span className="it">{t.h2}</span>{t.h3}<span className="pn">{lang === 'hi' ? '।' : '.'}</span></h2>
          <p className="lead">{t.lead}</p>
          <ul className="price__points">
            {POINTS.map(([Icon, t, d]) => (
              <li key={t}>
                <span className="price__ic"><Icon size={20} /></span>
                <div><b>{t}</b><p>{d}</p></div>
              </li>
            ))}
          </ul>
          <div className="price__ctas">
            <StoreButton app="customer" lang={lang} />
            <a href="#how" className="price__link">{t.how} <ArrowRight size={17} /></a>
          </div>
        </div>

        <div className="price__visual rv" style={{ '--d': '.1s' }} aria-label={t.aria}>
          <div className="pcard">
            <div className="pcard__head">
              <div className="pcard__route">
                <span><i className="dot dot--p" />Andheri East</span>
                <span className="pcard__arrow">→</span>
                <span><i className="dot dot--d" />Bandra West</span>
              </div>
              <span className="pcard__live">{t.live}</span>
            </div>
            <ul className="pcard__list">
              {vehicles.filter((v) => SHOW.includes(v.slug)).map((v, i) => (
                <li key={v.slug} className={i === 0 ? 'is-on' : ''}>
                  <span className="pcard__art"><VehicleArt slug={v.slug} /></span>
                  <div className="pcard__name"><b>{v.name}</b><small>{vehText(v, lang).capacity}</small></div>
                  <span className="pcard__fare" aria-label={t.inApp}>₹ • • •</span>
                </li>
              ))}
            </ul>
            <div className="pcard__foot"><Lock size={14} /> {t.exact}</div>
          </div>
          <div className="pchip pchip--a"><BadgeCheck size={18} /><span><b>{t.c1}</b><small>{t.c1s}</small></span></div>
          <div className="pchip pchip--b"><ShieldCheck size={18} /><span><b>{t.c2}</b><small>{t.c2s}</small></span></div>
        </div>
      </div>
    </section>
  );
}
