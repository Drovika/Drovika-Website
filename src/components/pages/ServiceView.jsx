// Information pages for Google: Services (for every customer, all vehicles) and Areas we serve.
// Each one says what Drovika does, which vehicles there are, why Drovika and a few FAQs, then "get the app / call / WhatsApp".
// Fares and routes stay in the app, never on these pages.
import Link from 'next/link';
import {
  IndianRupee, Timer, ShieldCheck, MapPinned, Wallet, Route, Plus, Phone, ArrowRight, Weight, ChevronRight,
  House, Store, Package, Sofa, Building2, HardHat,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import HeroArt from '@/components/HeroArt';
import VehicleArt from '@/components/VehicleArt';
import StoreButton, { WhatsAppIcon } from '@/components/StoreButton';
import Areas from '@/components/home/Areas';
import { vehText } from '@/components/home/Vehicles';
import { site, vehicles, waLink, telLink } from '@/config/site';
import { pick, lp, fmtMinL } from '@/lib/i18n';
import { pageUrl } from '@/lib/meta';

const vBySlug = (s) => vehicles.find((v) => v.slug === s);
const PERK_IC = [IndianRupee, Timer, ShieldCheck, MapPinned, Route, Wallet];
// What people move, the icon, and the vehicles that usually fit
const USES = [
  [House, ['tata_ace', 'tata_407', 'tempo']],
  [Store, ['three_wheeler', 'tata_ace', 'pickup_1ton']],
  [Package, ['three_wheeler', 'tata_ace', 'pickup_1ton']],
  [Sofa, ['tata_ace', 'pickup', 'tata_407']],
  [Building2, ['tata_407', 'tempo', 'truck_17ft']],
  [HardHat, ['pickup', 'pickup_9ft', 'truck']],
];

export const SERVICES = {
  services: {
    en: {
      crumb: 'Services', eb: 'Mini truck & tempo booking in Mumbai',
      t1: 'One app for ', t2: 'everything you move.',
      lead: 'From a few cartons to a full house, book a 3 wheeler, Tata Ace, pickup, tempo or truck across Mumbai, Thane and Navi Mumbai. See the full price before you book.',
      wa: 'Hi Drovika, I need a vehicle.',
      uH: 'What people move with Drovika', uP: 'Homes, shops and businesses, all in one app.',
      uses: [
        ['House shifting', '1 RK to 3 BHK moves, with free time for loading and unloading.'],
        ['Shop stock', 'Stock from wholesale markets to your shop, any day.'],
        ['Business deliveries', 'Orders and parcels to your customers, up to 3 stops in one trip.'],
        ['Furniture & appliances', 'A new sofa, fridge or washing machine, home safely.'],
        ['Office shifting', 'Desks, chairs, files and computers to the new office.'],
        ['Building material', 'Pipes, rods, tiles and long items in open-body pickups and trucks.'],
      ],
      vH: 'All vehicles, one app', vP: (n) => `${n} sizes, from a 3 wheeler to a 19ft truck. Not sure which one? Call us and we’ll suggest the right one.`,
      perks: [['Price before you book', 'The app shows the full fare first. No bargaining.'], ['Free loading time', 'Free time at pickup and drop for loading and unloading.'], ['Verified drivers', 'Licence, RC and ID of every driver checked by our team.'], ['Live tracking', 'Follow your goods on the map till they reach.'], ['Up to 3 stops', 'Deliver to more than one place in a single trip.'], ['Drovika Wallet', 'Add money once and pay every booking from it.']],
      qa: [
        ['How much does a mini truck cost in Mumbai?', 'It depends on the vehicle and the distance. A 3 wheeler starts from ₹{three_wheeler} and a Tata Ace from ₹{tata_ace}. The app shows the exact price before you book.'],
        ['Which vehicle should I book?', 'For parcels, a 3 wheeler. For 1 RK / 1 BHK or shop stock, a Tata Ace. For 1–2 BHK, a Tata 407. For 2–3 BHK, a 14ft Tempo. For factory or warehouse loads, a 17ft or 19ft truck.'],
        ['Can I deliver to more than one place in one trip?', 'Yes. Add up to 3 stops between pickup and the final drop.'],
        ['Can I book for a later date?', 'Yes. Schedule a booking up to 7 days ahead in the app.'],
        ['How do I pay?', 'Pay cash or UPI to the driver after delivery, or pay from Drovika Wallet.'],
      ],
      ctaH: 'Ready to move something?',
    },
    hi: {
      crumb: 'सेवाएँ', eb: 'मुंबई में मिनी ट्रक और टेम्पो बुकिंग',
      t1: 'एक ऐप, ', t2: 'हर सामान के लिए।',
      lead: 'कुछ कार्टन से लेकर पूरा घर, मुंबई, ठाणे और नवी मुंबई में 3 व्हीलर, टाटा ऐस, पिकअप, टेम्पो या ट्रक बुक करें। बुक करने से पहले पूरा किराया देखें।',
      wa: 'नमस्ते Drovika, मुझे एक गाड़ी चाहिए।',
      uH: 'लोग Drovika से क्या भेजते हैं', uP: 'घर, दुकान और बिज़नेस, सब एक ही ऐप में।',
      uses: [
        ['घर की शिफ़्टिंग', '1 RK से 3 BHK तक, लोडिंग-अनलोडिंग के फ़्री समय के साथ।'],
        ['दुकान का माल', 'होलसेल मार्केट से आपकी दुकान तक, किसी भी दिन।'],
        ['बिज़नेस डिलीवरी', 'ग्राहकों तक ऑर्डर और पार्सल, एक ट्रिप में 3 स्टॉप तक।'],
        ['फ़र्नीचर और उपकरण', 'नया सोफ़ा, फ़्रिज या वॉशिंग मशीन, सुरक्षित घर तक।'],
        ['ऑफ़िस शिफ़्टिंग', 'टेबल, कुर्सी, फ़ाइलें और कंप्यूटर नए ऑफ़िस तक।'],
        ['बिल्डिंग मटेरियल', 'पाइप, सरिया, टाइल्स और लंबा सामान, खुली बॉडी पिकअप और ट्रक में।'],
      ],
      vH: 'सारी गाड़ियाँ, एक ऐप', vP: (n) => `${n} साइज़, 3 व्हीलर से 19ft ट्रक तक। पक्का नहीं पता? हमें कॉल करें, हम सही गाड़ी बताएँगे।`,
      perks: [['बुकिंग से पहले किराया', 'ऐप पहले पूरा किराया दिखाता है। कोई मोलभाव नहीं।'], ['फ़्री लोडिंग टाइम', 'पिकअप और ड्रॉप पर लोडिंग-अनलोडिंग का फ़्री समय।'], ['वेरिफ़ाइड ड्राइवर', 'हर ड्राइवर का लाइसेंस, RC और ID हमारी टीम जाँचती है।'], ['लाइव ट्रैकिंग', 'सामान पहुँचने तक मैप पर देखते रहें।'], ['3 स्टॉप तक', 'एक ही ट्रिप में एक से ज़्यादा जगह डिलीवरी।'], ['Drovika वॉलेट', 'एक बार पैसे जोड़ें, हर बुकिंग उसी से।']],
      qa: [
        ['मुंबई में मिनी ट्रक का कितना किराया है?', 'गाड़ी और दूरी पर निर्भर करता है। 3 व्हीलर ₹{three_wheeler} से और टाटा ऐस ₹{tata_ace} से शुरू। बुक करने से पहले ऐप सही किराया दिखाता है।'],
        ['कौन सी गाड़ी बुक करूँ?', 'पार्सल के लिए 3 व्हीलर। 1 RK / 1 BHK या दुकान के माल के लिए टाटा ऐस। 1–2 BHK के लिए टाटा 407। 2–3 BHK के लिए 14ft टेम्पो। फ़ैक्टरी या गोदाम के माल के लिए 17ft या 19ft ट्रक।'],
        ['क्या एक ट्रिप में एक से ज़्यादा जगह डिलीवरी हो सकती है?', 'हाँ। पिकअप और आख़िरी ड्रॉप के बीच 3 स्टॉप तक जोड़ें।'],
        ['क्या बाद की तारीख के लिए बुक कर सकते हैं?', 'हाँ। ऐप में 7 दिन पहले तक बुकिंग शेड्यूल करें।'],
        ['पेमेंट कैसे करें?', 'डिलीवरी के बाद ड्राइवर को कैश या UPI दें, या Drovika वॉलेट से पेमेंट करें।'],
      ],
      ctaH: 'कुछ भेजना है?',
    },
    mr: {
      crumb: 'सेवा', eb: 'मुंबईत मिनी ट्रक आणि टेम्पो बुकिंग',
      t1: 'एक ॲप, ', t2: 'प्रत्येक सामानासाठी.',
      lead: 'काही कार्टनपासून पूर्ण घरापर्यंत, मुंबई, ठाणे आणि नवी मुंबईत 3 व्हीलर, टाटा एस, पिकअप, टेम्पो किंवा ट्रक बुक करा. बुक करण्याआधी पूर्ण भाडे पाहा.',
      wa: 'नमस्कार Drovika, मला एक गाडी हवी आहे.',
      uH: 'लोक Drovika ने काय पाठवतात', uP: 'घर, दुकान आणि व्यवसाय, सर्व एकाच ॲपमध्ये.',
      uses: [
        ['घराची शिफ्टिंग', '1 RK ते 3 BHK पर्यंत, लोडिंग-अनलोडिंगच्या मोफत वेळेसह.'],
        ['दुकानाचा माल', 'घाऊक बाजारातून तुमच्या दुकानापर्यंत, कोणत्याही दिवशी.'],
        ['व्यवसाय डिलिव्हरी', 'ग्राहकांपर्यंत ऑर्डर आणि पार्सल, एका ट्रिपमध्ये 3 स्टॉपपर्यंत.'],
        ['फर्निचर आणि उपकरणे', 'नवा सोफा, फ्रिज किंवा वॉशिंग मशीन, सुरक्षित घरापर्यंत.'],
        ['ऑफिस शिफ्टिंग', 'टेबल, खुर्च्या, फाइल्स आणि कॉम्प्युटर नव्या ऑफिसपर्यंत.'],
        ['बांधकाम साहित्य', 'पाईप, सळ्या, टाइल्स आणि लांब सामान, उघड्या बॉडीच्या पिकअप आणि ट्रकमध्ये.'],
      ],
      vH: 'सर्व गाड्या, एक ॲप', vP: (n) => `${n} साइझ, 3 व्हीलरपासून 19ft ट्रकपर्यंत. नक्की माहीत नाही? आम्हाला कॉल करा, आम्ही योग्य गाडी सांगू.`,
      perks: [['बुकिंगआधी भाडे', 'ॲप आधी पूर्ण भाडे दाखवते. घासाघीस नाही.'], ['मोफत लोडिंग वेळ', 'पिकअप आणि ड्रॉपवर लोडिंग-अनलोडिंगसाठी मोफत वेळ.'], ['व्हेरिफाइड ड्रायव्हर', 'प्रत्येक ड्रायव्हरचे लायसन्स, RC आणि ID आमची टीम तपासते.'], ['लाइव्ह ट्रॅकिंग', 'सामान पोहोचेपर्यंत नकाशावर पाहत राहा.'], ['3 स्टॉपपर्यंत', 'एकाच ट्रिपमध्ये एकापेक्षा जास्त ठिकाणी डिलिव्हरी.'], ['Drovika वॉलेट', 'एकदा पैसे जोडा, प्रत्येक बुकिंग त्यातूनच.']],
      qa: [
        ['मुंबईत मिनी ट्रकचे भाडे किती आहे?', 'गाडी आणि अंतरावर अवलंबून. 3 व्हीलर ₹{three_wheeler} पासून आणि टाटा एस ₹{tata_ace} पासून सुरू. बुक करण्याआधी ॲप नक्की भाडे दाखवते.'],
        ['कोणती गाडी बुक करू?', 'पार्सलसाठी 3 व्हीलर. 1 RK / 1 BHK किंवा दुकानाच्या मालासाठी टाटा एस. 1–2 BHK साठी टाटा 407. 2–3 BHK साठी 14ft टेम्पो. फॅक्टरी किंवा गोदामाच्या मालासाठी 17ft किंवा 19ft ट्रक.'],
        ['एका ट्रिपमध्ये एकापेक्षा जास्त ठिकाणी डिलिव्हरी करता येते का?', 'हो. पिकअप आणि शेवटच्या ड्रॉपच्या मध्ये 3 स्टॉपपर्यंत जोडा.'],
        ['नंतरच्या तारखेसाठी बुक करता येते का?', 'हो. ॲपमध्ये 7 दिवस आधीपर्यंत बुकिंग शेड्यूल करा.'],
        ['पेमेंट कसे करायचे?', 'डिलिव्हरीनंतर ड्रायव्हरला रोख किंवा UPI द्या, किंवा Drovika वॉलेटमधून पेमेंट करा.'],
      ],
      ctaH: 'काही पाठवायचे आहे?',
    },
  },

  areas: {
    areas: true,
    en: {
      crumb: 'Areas we serve', eb: 'Areas we serve',
      t1: 'Goods transport from ', t2: 'Colaba to Palghar.',
      lead: 'Drovika covers all of Mumbai, the Thane district, Navi Mumbai and the Vasai to Palghar belt. Pickup, drop and every stop just need to be inside this zone.',
      wa: 'Hi Drovika, do you serve my area?',
      qa: [
        ['Do you serve my area?', 'If your pickup, drop and stops are inside Mumbai, Thane district, Navi Mumbai or Vasai to Palghar, yes. The app tells you right away if an address is outside the zone.'],
        ['Can I book from Mumbai to Thane or Navi Mumbai?', 'Yes. Trips between any two places inside the zone are allowed, like Andheri to Thane or Dadar to Vashi.'],
        ['Do you go outside Mumbai, like Pune or Nashik?', 'Not yet. Drovika works only inside the Mumbai region for now.'],
        ['Which vehicles are available in my area?', 'All vehicles, from a 3 wheeler to a 19ft truck, can be booked anywhere in the zone, starting from ₹{three_wheeler}.'],
      ],
      ctaH: 'Moving something in your area?',
    },
    hi: {
      crumb: 'हमारे एरिया', eb: 'हमारे एरिया',
      t1: 'माल ढुलाई ', t2: 'कोलाबा से पालघर तक।',
      lead: 'Drovika पूरी मुंबई, ठाणे ज़िला, नवी मुंबई और वसई से पालघर तक चलता है। बस पिकअप, ड्रॉप और हर स्टॉप इस ज़ोन के अंदर होना चाहिए।',
      wa: 'नमस्ते Drovika, क्या आप मेरे एरिया में आते हैं?',
      qa: [
        ['क्या आप मेरे एरिया में आते हैं?', 'अगर आपका पिकअप, ड्रॉप और स्टॉप मुंबई, ठाणे ज़िला, नवी मुंबई या वसई से पालघर के अंदर हैं, तो हाँ। पता ज़ोन से बाहर हो तो ऐप तुरंत बता देता है।'],
        ['क्या मुंबई से ठाणे या नवी मुंबई बुक कर सकते हैं?', 'हाँ। ज़ोन के अंदर किसी भी दो जगह के बीच ट्रिप हो सकती है, जैसे अंधेरी से ठाणे या दादर से वाशी।'],
        ['क्या आप मुंबई के बाहर, जैसे पुणे या नासिक जाते हैं?', 'अभी नहीं। फ़िलहाल Drovika सिर्फ़ मुंबई क्षेत्र में चलता है।'],
        ['मेरे एरिया में कौन सी गाड़ियाँ मिलेंगी?', '3 व्हीलर से 19ft ट्रक तक, सारी गाड़ियाँ ज़ोन में कहीं भी बुक हो सकती हैं, ₹{three_wheeler} से शुरू।'],
      ],
      ctaH: 'आपके एरिया में कुछ भेजना है?',
    },
    mr: {
      crumb: 'आमचे एरिया', eb: 'आमचे एरिया',
      t1: 'मालवाहतूक ', t2: 'कुलाबा ते पालघर.',
      lead: 'Drovika संपूर्ण मुंबई, ठाणे जिल्हा, नवी मुंबई आणि वसई ते पालघर पट्ट्यात चालते. फक्त पिकअप, ड्रॉप आणि प्रत्येक स्टॉप या झोनमध्ये असायला हवा.',
      wa: 'नमस्कार Drovika, तुम्ही माझ्या भागात येता का?',
      qa: [
        ['तुम्ही माझ्या भागात येता का?', 'तुमचा पिकअप, ड्रॉप आणि स्टॉप मुंबई, ठाणे जिल्हा, नवी मुंबई किंवा वसई ते पालघरमध्ये असतील तर हो. पत्ता झोनबाहेर असेल तर ॲप लगेच सांगते.'],
        ['मुंबईहून ठाणे किंवा नवी मुंबई बुक करता येते का?', 'हो. झोनमधील कोणत्याही दोन ठिकाणांमध्ये ट्रिप करता येते, जसे अंधेरी ते ठाणे किंवा दादर ते वाशी.'],
        ['तुम्ही मुंबईबाहेर, जसे पुणे किंवा नाशिकला जाता का?', 'अजून नाही. सध्या Drovika फक्त मुंबई प्रदेशात चालते.'],
        ['माझ्या भागात कोणत्या गाड्या मिळतील?', '3 व्हीलरपासून 19ft ट्रकपर्यंत, सर्व गाड्या झोनमध्ये कुठेही बुक करता येतात, ₹{three_wheeler} पासून सुरू.'],
      ],
      ctaH: 'तुमच्या भागात काही पाठवायचे आहे?',
    },
  },
};

const UI = {
  en: { home: 'Home', from: 'from', why: 'Why Drovika', faq: 'Quick answers', ctaP: 'Book in the Drovika app, or talk to us first.', call: 'Call us', free: (m) => `${m} free`, also: 'Also see' },
  hi: { home: 'होम', from: 'से शुरू', why: 'Drovika ही क्यों', faq: 'छोटे सवाल-जवाब', ctaP: 'Drovika ऐप में बुक करें, या पहले हमसे बात करें।', call: 'कॉल करें', free: (m) => `${m} फ़्री`, also: 'यह भी देखें' },
  mr: { home: 'होम', from: 'पासून', why: 'Drovika का', faq: 'छोटी प्रश्नोत्तरे', ctaP: 'Drovika ॲपमध्ये बुक करा, किंवा आधी आमच्याशी बोला.', call: 'कॉल करा', free: (m) => `${m} मोफत`, also: 'हेही पाहा' },
};

export default function ServiceView({ slug, lang = 'en' }) {
  const S = SERVICES[slug];
  const t = pick(S, lang);
  const u = pick(UI, lang);
  const fill = (a) => a.replace(/\{(\w+)\}/g, (_, s) => vBySlug(s)?.base ?? '');
  const qa = t.qa.map(([q, a]) => [q, fill(a)]);
  const other = slug === 'areas' ? 'services' : 'areas';
  const homeUrl = `${site.url}${pageUrl(lang, 'home')}`;
  const thisUrl = `${site.url}${pageUrl(lang, slug)}`;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: u.home, item: homeUrl },
        { '@type': 'ListItem', position: 2, name: t.crumb, item: thisUrl },
      ] },
      ...(S.areas ? [] : [{
        '@type': 'Service', name: t.eb, serviceType: 'Goods transport', url: thisUrl, provider: { '@id': `${site.url}/#company` },
        areaServed: ['Mumbai', 'Thane', 'Navi Mumbai', 'Palghar'].map((n) => ({ '@type': 'City', name: n })),
        hasOfferCatalog: { '@type': 'OfferCatalog', name: t.vH, itemListElement: vehicles.map((v) => ({
          '@type': 'Offer', itemOffered: { '@type': 'Service', name: v.name },
          priceSpecification: { '@type': 'PriceSpecification', price: v.base, minPrice: v.base, priceCurrency: 'INR' },
        })) },
      }]),
      { '@type': 'FAQPage', mainEntity: qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };

  return (
    <>
      <PageHero eyebrow={t.eb} title={<>{t.t1}<span className="it">{t.t2}</span></>} lead={t.lead} art={<HeroArt kind={S.areas ? 'route' : 'fleet'} lang={lang} />}>
        <div className="svc__hero-btns">
          <StoreButton app="customer" lang={lang} />
          <a href={telLink()} className="btn btn--ghost"><Phone size={18} /> {u.call}</a>
          <a href={waLink(t.wa)} target="_blank" rel="noopener noreferrer" className="btn btn--ghost"><WhatsAppIcon size={18} /> WhatsApp</a>
        </div>
        <nav className="svc__crumbs" aria-label="Breadcrumb">
          <Link href={lp(lang, '/')}>{u.home}</Link><ChevronRight size={14} /><span aria-current="page">{t.crumb}</span>
        </nav>
      </PageHero>

      {S.areas ? <Areas lang={lang} more={false} compact /> : null}

      {t.uses ? (
        <section className="sec svc" id="uses">
          <div className="wrap">
            <div className="sec__head rv">
              <h2 className="h-section">{t.uH}</h2>
              <p className="lead">{t.uP}</p>
            </div>
            <div className="svc__uses">
              {t.uses.map(([title, d], i) => {
                const [Icon, fits] = USES[i];
                return (
                  <article key={title} className="svc__use rv" style={{ '--d': `${i * 0.06}s` }}>
                    <span className="bx__ic"><Icon size={22} /></span>
                    <h3>{title}</h3>
                    <p>{d}</p>
                    <div className="svc__fits">{fits.map((s) => <span key={s}>{vBySlug(s).name}</span>)}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {t.vH ? (
        <section className="sec svc svc--soft" id="vehicles">
          <div className="wrap">
            <div className="sec__head rv">
              <h2 className="h-section">{t.vH}</h2>
              <p className="lead">{t.vP(vehicles.length)}</p>
            </div>
            <div className="svc__veh">
              {vehicles.map((v, i) => {
                const x = vehText(v, lang);
                return (
                  <article key={v.slug} className="svc__vcard rv" style={{ '--d': `${(i % 3) * 0.08}s` }}>
                    <div className="svc__art"><VehicleArt slug={v.slug} title={v.name} /></div>
                    <div className="svc__vtop">
                      <div><h3>{v.name}</h3><small>{x.nick}</small></div>
                      <span className="svc__price"><small>{u.from}</small> ₹{v.base}</span>
                    </div>
                    <div className="svc__meta">
                      <span><Weight size={15} /> {x.capacity}</span>
                      <span><Timer size={15} /> {u.free(fmtMinL(v.freeMin, lang))}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {t.perks ? (
        <section className="sec svc">
          <div className="wrap">
            <div className="sec__head sec__head--center rv"><h2 className="h-section">{u.why}<span className="pn">?</span></h2></div>
            <div className="dperks dperks--6">
              {t.perks.map(([title, d], i) => {
                const Icon = PERK_IC[i];
                return (
                  <article key={title} className="dperk rv" style={{ '--d': `${(i % 3) * 0.08}s` }}>
                    <span className="bx__ic"><Icon size={22} /></span>
                    <h3>{title}</h3>
                    <p>{d}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className={`sec svc${t.perks ? ' svc--soft' : ''}`}>
        <div className="wrap svc__faq">
          <h2 className="h-section rv">{u.faq}</h2>
          <div className="faq__list">
            {qa.map(([q, a], i) => (
              <details key={q} className="qa rv" style={{ '--d': `${i * 0.04}s` }} open={i === 0}>
                <summary>{q}<span className="qa__ic"><Plus size={20} /></span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <div className="svc__also rv">
            <span>{u.also}:</span>
            <Link href={lp(lang, `/${other}/`)} className="svc__chip">{pick(SERVICES[other], lang).crumb} <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="sec cta-band">
        <div className="wrap">
          <div className="cta rv">
            <h2 className="h-section">{t.ctaH}</h2>
            <p>{u.ctaP}</p>
            <div className="cta__btns">
              <StoreButton app="customer" lang={lang} dark={false} />
              <a href={waLink(t.wa)} target="_blank" rel="noopener noreferrer" className="btn btn--lime"><WhatsAppIcon size={18} /> WhatsApp</a>
              <a href={telLink()} className="cta__link"><Phone size={16} /> {site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
