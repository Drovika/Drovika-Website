import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, Lock, Timer } from 'lucide-react';
import { fromPrice, maxFreeMin, site, vehicles } from '@/config/site';
import { fmtMinL, lp, pick } from '@/lib/i18n';
import PhoneMock from './PhoneMock';
import StoreButton from '../StoreButton';
import VehicleArt from '../VehicleArt';

function Skyline() {
  const b = [
    [0, 60, 40], [36, 34, 30], [62, 74, 34], [92, 20, 24], [112, 52, 40], [148, 6, 20], [164, 40, 34], [196, 64, 28],
    [220, 26, 38], [254, 56, 30], [280, 14, 22], [298, 46, 38], [332, 66, 30], [358, 30, 34], [388, 52, 34],
    [418, 10, 26], [440, 44, 36], [472, 62, 30], [498, 24, 40], [534, 50, 30], [560, 36, 36], [592, 68, 28],
  ];
  return (
    <svg className="hero__sky" viewBox="0 0 620 100" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {b.map(([x, y, w]) => <rect key={x} x={x} y={y} width={w} height={100 - y} fill="#fff" opacity=".04" />)}
      {b.map(([x, y, w]) => [0, 1, 2, 3].filter((r) => y + 8 + r * 13 < 92).map((r) => (
        <rect key={`${x}-${r}`} x={x + 5} y={y + 8 + r * 13} width={w - 10} height="3" rx="1.5" fill="#C6E66B" opacity=".06" />
      )))}
    </svg>
  );
}

const ace = vehicles.find((v) => v.slug === 'tata_ace');

const T = {
  en: {
    newTag: 'New', pill: 'Fair rules for customers and drivers',
    t1: 'Move anything across Mumbai', t2: 'the fair way.',
    lead: 'Book a 3 wheeler, Tata Ace, pickup, tempo or truck in under a minute. One fixed fare, loading and unloading time included, and clear rules that are fair to you and to the driver who carries your goods.',
    promise: 'The Drovika promise', s1: 'starting fare', s2: 'vehicle sizes', s3pre: 'Up to', s3: 'free loading time', s4: 'verified drivers',
    offer: site.firstTripOffer,
    f1: 'Fare locked', f1s: 'No bargaining, either side', f2: (m) => `${m} min free time`, f2s: 'For loading + unloading', f3: 'Verified driver', f3s: 'Licence, RC & ID checked',
  },
  hi: {
    newTag: 'नया', pill: 'ग्राहक और ड्राइवर, दोनों के लिए सही नियम',
    t1: 'मुंबई में कुछ भी भेजें', t2: 'सही तरीके से।',
    lead: '3 व्हीलर, टाटा ऐस, पिकअप, टेम्पो या ट्रक एक मिनट में बुक करें। एक तय किराया, लोडिंग-अनलोडिंग का समय शामिल, और साफ़ नियम जो आपके और आपका सामान ले जाने वाले ड्राइवर, दोनों के लिए सही हैं।',
    promise: 'Drovika का वादा', s1: 'शुरुआती किराया', s2: 'गाड़ियों के साइज़', s3pre: '', s3: 'तक फ़्री लोडिंग टाइम', s4: 'वेरिफ़ाइड ड्राइवर',
    offer: site.firstTripOffer ? 'पहली ट्रिप पर ₹50 तक की छूट' : '',
    f1: 'किराया लॉक', f1s: 'दोनों तरफ़ से कोई मोलभाव नहीं', f2: (m) => `${m} मिनट फ़्री टाइम`, f2s: 'लोडिंग + अनलोडिंग के लिए', f3: 'वेरिफ़ाइड ड्राइवर', f3s: 'लाइसेंस, RC और ID जाँचे गए',
  },
  mr: {
    newTag: 'नवीन', pill: 'ग्राहक आणि ड्रायव्हर, दोघांसाठी योग्य नियम',
    t1: 'मुंबईत काहीही पाठवा', t2: 'योग्य पद्धतीने.',
    lead: '3 व्हीलर, टाटा एस, पिकअप, टेम्पो किंवा ट्रक एका मिनिटात बुक करा. एक ठरलेले भाडे, लोडिंग-अनलोडिंगचा वेळ समाविष्ट, आणि स्पष्ट नियम जे तुमच्यासाठी आणि तुमचा माल नेणाऱ्या ड्रायव्हरसाठी योग्य आहेत.',
    promise: 'Drovika चे वचन', s1: 'सुरुवातीचे भाडे', s2: 'गाड्यांचे साइझ', s3pre: '', s3: 'पर्यंत मोफत लोडिंग वेळ', s4: 'व्हेरिफाइड ड्रायव्हर',
    offer: site.firstTripOffer ? 'पहिल्या ट्रिपवर ₹50 पर्यंत सूट' : '',
    f1: 'भाडे लॉक', f1s: 'दोन्ही बाजूंनी घासाघीस नाही', f2: (m) => `${m} मिनिटे मोफत वेळ`, f2s: 'लोडिंग + अनलोडिंगसाठी', f3: 'व्हेरिफाइड ड्रायव्हर', f3s: 'लायसन्स, RC आणि ID तपासले',
  },
};

export default function Hero({ lang = 'en' }) {
  const t = pick(T, lang);
  const stats = [
    [`₹${fromPrice}`, t.s1],
    [String(vehicles.length), t.s2],
    [`${t.s3pre ? `${t.s3pre} ` : ''}${fmtMinL(maxFreeMin, lang)}`, t.s3],
    ['100%', t.s4],
  ];

  return (
    <section className="hero hero--p">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__grid" />
        <div className="grain" />
      </div>
      <div className="wrap hero__row">
        <div className="hero__copy">
          <span className="hero__pill">
            <em>{t.newTag}</em>{t.pill}
          </span>
          <h1 className="h-display hero__title">
            {t.t1}<span className="pn">,</span> <span className={`${lang === 'en' ? 'it ' : ''}hero__lime`}>{t.t2}</span>
          </h1>
          <p className="hero__lead">{t.lead}</p>
          <div className="hero__ctas">
            <StoreButton app="customer" lang={lang} />
            <Link href={lp(lang, '/#promise')} className="btn btn--ghost-light">{t.promise} <ArrowRight size={18} /></Link>
          </div>
          <dl className="hstats">
            {stats.map(([n, l]) => (
              <div key={l}><dt>{n}</dt><dd>{l}</dd></div>
            ))}
          </dl>
          {t.offer ? <p className="hero__offer"><Check size={15} /> {t.offer}</p> : null}
        </div>
        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <PhoneMock lang={lang} />
          <div className="float float--a">
            <span className="float__ic"><Lock size={18} /></span>
            <div><b>{t.f1}</b><small>{t.f1s}</small></div>
          </div>
          <div className="float float--b">
            <span className="float__ic float__ic--lime"><Timer size={18} /></span>
            <div><b>{t.f2(ace.freeMin)}</b><small>{t.f2s}</small></div>
          </div>
          <div className="float float--c">
            <span className="float__ic float__ic--ghost"><BadgeCheck size={18} /></span>
            <div><b>{t.f3}</b><small>{t.f3s}</small></div>
          </div>
        </div>
      </div>
      <div className="hero__road" aria-hidden="true">
        <Skyline />
        <div className="hero__lane" />
        <div className="hero__truck"><VehicleArt slug="tempo" /></div>
      </div>
    </section>
  );
}
