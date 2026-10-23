import { ArrowRight, Check, Weight, Ruler, MoveRight, Timer } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import { vehicles } from '@/config/site';
import { fmtMinL, pick } from '@/lib/i18n';

const T = {
  en: {
    eyebrow: 'Our fleet', h1: 'The right vehicle ', h2: 'for every load.',
    lead: 'From a single fridge to a full 3 BHK — pick the size that fits. Your exact price is shown before you book.',
    swipe: (n) => `Swipe to compare all ${n} vehicles`, from: 'from', approx: 'approx.',
    free: (m) => [m, ' free for loading ', '+', ' unloading'], exact: 'Exact price in app', see: (n) => `See how ${n} fares are shown`,
    upto: (kg) => `Upto ${kg}`,
  },
  hi: {
    eyebrow: 'हमारी गाड़ियाँ', h1: 'हर सामान के लिए ', h2: 'सही गाड़ी।',
    lead: 'एक फ़्रिज से लेकर पूरे 3 BHK तक — सही साइज़ चुनें। बुक करने से पहले आपका पक्का किराया दिखता है।',
    swipe: (n) => `सभी ${n} गाड़ियाँ देखने के लिए स्वाइप करें`, from: 'शुरुआत', approx: 'लगभग',
    free: (m) => [m, ' फ़्री, लोडिंग ', '+', ' अनलोडिंग के लिए'], exact: 'पक्का किराया ऐप में', see: (n) => `${n} का किराया कैसे दिखता है`,
    upto: (kg) => `${kg} तक`,
  },
  mr: {
    eyebrow: 'आमच्या गाड्या', h1: 'प्रत्येक मालासाठी ', h2: 'योग्य गाडी.',
    lead: 'एका फ्रिजपासून पूर्ण 3 BHK पर्यंत — योग्य साइझ निवडा. बुक करण्याआधी तुमचे नक्की भाडे दिसते.',
    swipe: (n) => `सर्व ${n} गाड्या पाहण्यासाठी स्वाइप करा`, from: 'सुरुवात', approx: 'अंदाजे',
    free: (m) => [m, ' मोफत, लोडिंग ', '+', ' अनलोडिंगसाठी'], exact: 'नक्की भाडे ॲपमध्ये', see: (n) => `${n} चे भाडे कसे दिसते`,
    upto: (kg) => `${kg} पर्यंत`,
  },
};

// Nicknames and "best for" lines per vehicle, in Hindi and Marathi (English comes from config/site.js)
const V = {
  hi: {
    three_wheeler: ['छोटा टेम्पो', ['पार्सल और कार्टन', 'छोटे घरेलू उपकरण', 'दुकान की डिलीवरी']],
    tata_ace: ['छोटा हाथी', ['1 RK / 1 BHK शिफ़्टिंग', 'दुकान का माल', 'घरेलू उपकरण']],
    pickup_1ton: ['ढकी हुई मिनी ट्रक', ['दुकान का माल', 'छोटी शिफ़्टिंग', 'ई-कॉमर्स का माल']],
    pickup: ['खुली बॉडी', ['फ़र्नीचर', 'बिल्डिंग मटेरियल', 'लंबा सामान']],
    pickup_9ft: ['खुली बॉडी, बड़ी', ['थोक माल', 'बड़े उपकरण', 'पाइप और सरिया']],
    tata_407: ['10 फ़ुट टेम्पो', ['1–2 BHK शिफ़्टिंग', 'ऑफ़िस शिफ़्टिंग', 'गोदाम का माल']],
    tempo: ['बंद बॉडी', ['2–3 BHK शिफ़्टिंग', 'थोक माल', 'इवेंट का सामान']],
    truck_17ft: ['मीडियम ट्रक', ['बड़ी शिफ़्टिंग', 'गोदाम का माल', 'मशीनरी']],
    truck: ['भारी ट्रक', ['फ़ैक्टरी का माल', 'वेयरहाउस स्टॉक', 'पूरे घर की शिफ़्टिंग']],
  },
  mr: {
    three_wheeler: ['छोटा टेम्पो', ['पार्सल आणि कार्टन', 'छोटी घरगुती उपकरणे', 'दुकानाची डिलिव्हरी']],
    tata_ace: ['छोटा हत्ती', ['1 RK / 1 BHK शिफ्टिंग', 'दुकानाचा माल', 'घरगुती उपकरणे']],
    pickup_1ton: ['झाकलेला मिनी ट्रक', ['दुकानाचा माल', 'छोटी शिफ्टिंग', 'ई-कॉमर्सचा माल']],
    pickup: ['उघडी बॉडी', ['फर्निचर', 'बांधकाम साहित्य', 'लांब सामान']],
    pickup_9ft: ['उघडी बॉडी, मोठी', ['घाऊक माल', 'मोठी उपकरणे', 'पाईप आणि सळ्या']],
    tata_407: ['10 फूट टेम्पो', ['1–2 BHK शिफ्टिंग', 'ऑफिस शिफ्टिंग', 'गोदामाचा माल']],
    tempo: ['बंद बॉडी', ['2–3 BHK शिफ्टिंग', 'घाऊक माल', 'इव्हेंटचे सामान']],
    truck_17ft: ['मध्यम ट्रक', ['मोठी शिफ्टिंग', 'गोदामाचा माल', 'मशिनरी']],
    truck: ['जड ट्रक', ['फॅक्टरीचा माल', 'वेअरहाऊस स्टॉक', 'पूर्ण घराची शिफ्टिंग']],
  },
};
export const vehText = (v, lang) => {
  const x = V[lang]?.[v.slug];
  const kg = v.capacity.replace('Upto ', '');
  return { nick: x ? x[0] : v.nick, bestFor: x ? x[1] : v.bestFor, capacity: pick(T, lang).upto(kg), kg };
};

export default function Vehicles({ lang = 'en' }) {
  const t = pick(T, lang);
  return (
    <section className="sec vehicles" id="vehicles">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h-section">{t.h1}<span className="it">{t.h2}</span></h2>
          <p className="lead">{t.lead}</p>
        </div>
        <p className="rail-hint" aria-hidden="true">{t.swipe(vehicles.length)} <MoveRight size={16} /></p>
        <div className="vgrid">
          {vehicles.map((v, i) => {
            const x = vehText(v, lang);
            const f = t.free(fmtMinL(v.freeMin, lang));
            return (
              <article key={v.slug} className="vcard rv" style={{ '--d': `${i * 0.08}s` }}>
                <div className="vcard__art">
                  <span className="vcard__cap">{x.capacity}</span>
                  <VehicleArt slug={v.slug} className="vcard__svg" title={v.name} />
                </div>
                <div className="vcard__body">
                  <div className="vcard__top">
                    <div>
                      <h3>{v.name}</h3>
                      <small>{x.nick}</small>
                    </div>
                    <div className="vcard__price">
                      <small>{t.from}</small>
                      <b>₹{v.base}</b>
                    </div>
                  </div>
                  <div className="vcard__meta">
                    <span><Weight size={15} /> {x.kg}</span>
                    <span><Ruler size={15} /> {v.size} <em>{t.approx}</em></span>
                  </div>
                  <div className="vcard__free"><Timer size={15} /><span><b>{f[0]}</b>{f[1]}<i>{f[2]}</i>{f[3]}</span></div>
                  <ul className="vcard__list">
                    {x.bestFor.map((b) => <li key={b}><Check size={15} />{b}</li>)}
                  </ul>
                  <div className="vcard__foot">
                    <span>{t.exact}</span>
                    <a href="#fare" className="vcard__go" aria-label={t.see(v.name)}><ArrowRight size={18} /></a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
