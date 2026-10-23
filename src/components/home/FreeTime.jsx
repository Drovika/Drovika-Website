'use client';
import { useState } from 'react';
import { PackageOpen, PackageCheck, Truck, Info } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import { vehicles } from '@/config/site';
import { fmtMinL, pick } from '@/lib/i18n';
import { vehText } from './Vehicles';

const MAX = Math.max(...vehicles.map((v) => v.freeMin));

function Dial({ min, label, sub, Icon, tone, unit = 'minutes' }) {
  const C = 2 * Math.PI * 52;
  const pct = min / MAX;
  return (
    <div className={`dial dial--${tone}`}>
      <div className="dial__ring">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="52" className="dial__track" />
          <circle cx="60" cy="60" r="52" className="dial__fg" style={{ strokeDasharray: C, strokeDashoffset: C * (1 - pct) }} />
        </svg>
        <div className="dial__num"><b key={min}>{min}</b><small>{unit}</small></div>
      </div>
      <div className="dial__txt">
        <span><Icon size={16} /> {label}</span>
        <p>{sub}</p>
      </div>
    </div>
  );
}

const T = {
  en: {
    eyebrow: 'Loading & unloading time', h1: "Time that's clear ", h2: 'to both of you.',
    lead: 'Every booking includes one free time for loading and unloading together, set by vehicle size. It runs only while the vehicle is standing at the pickup or the drop, never while driving.',
    choose: 'Choose a vehicle', free: 'Free time', freeSub: 'For loading and unloading together.', unit: 'minutes',
    s1: 'Starts at the pickup', s1s: 'When the driver has really reached (checked by GPS).',
    s2: 'Pauses while driving', s2s: 'Time on the road is never counted.',
    s3: 'Goes on at the drop', s3s: 'From where it stopped, until the goods are delivered.',
    note: 'After the free time, a small per-minute waiting charge is added, and it goes fully to the driver. The customer and the driver see the same timer live in the app.',
  },
  hi: {
    eyebrow: 'लोडिंग और अनलोडिंग का समय', h1: 'समय, जो दोनों को ', h2: 'साफ़ दिखे।',
    lead: 'हर बुकिंग में लोडिंग और अनलोडिंग के लिए एक फ़्री समय मिलता है, गाड़ी के साइज़ के हिसाब से। यह तभी चलता है जब गाड़ी पिकअप या ड्रॉप पर खड़ी हो, चलते समय कभी नहीं।',
    choose: 'गाड़ी चुनें', free: 'फ़्री समय', freeSub: 'लोडिंग और अनलोडिंग दोनों के लिए।', unit: 'मिनट',
    s1: 'पिकअप पर शुरू', s1s: 'जब ड्राइवर सच में पहुँच जाए (GPS से जाँचा जाता है)।',
    s2: 'चलते समय रुका रहता है', s2s: 'सड़क पर लगा समय कभी नहीं गिना जाता।',
    s3: 'ड्रॉप पर फिर चलता है', s3s: 'जहाँ रुका था वहीं से, सामान पहुँचने तक।',
    note: 'फ़्री समय के बाद हर मिनट का थोड़ा वेटिंग चार्ज जुड़ता है, और वह पूरा ड्राइवर को मिलता है। ग्राहक और ड्राइवर दोनों ऐप में एक ही टाइमर लाइव देखते हैं।',
  },
  mr: {
    eyebrow: 'लोडिंग आणि अनलोडिंगचा वेळ', h1: 'वेळ, जो दोघांनाही ', h2: 'स्पष्ट दिसतो.',
    lead: 'प्रत्येक बुकिंगमध्ये लोडिंग आणि अनलोडिंगसाठी एक मोफत वेळ मिळतो, गाडीच्या साइझनुसार. गाडी पिकअप किंवा ड्रॉपला उभी असतानाच तो चालतो, गाडी चालत असताना कधीच नाही.',
    choose: 'गाडी निवडा', free: 'मोफत वेळ', freeSub: 'लोडिंग आणि अनलोडिंग दोन्हीसाठी.', unit: 'मिनिटे',
    s1: 'पिकअपला सुरू', s1s: 'ड्रायव्हर खरंच पोहोचल्यावर (GPS ने तपासले जाते).',
    s2: 'गाडी चालताना थांबतो', s2s: 'रस्त्यावरचा वेळ कधीच मोजला जात नाही.',
    s3: 'ड्रॉपला पुन्हा चालतो', s3s: 'जिथे थांबला तिथूनच, माल पोहोचेपर्यंत.',
    note: 'मोफत वेळेनंतर प्रत्येक मिनिटाला थोडा वेटिंग चार्ज लागतो, आणि तो पूर्ण ड्रायव्हरला मिळतो. ग्राहक आणि ड्रायव्हर दोघेही ॲपमध्ये एकच टायमर लाइव्ह पाहतात.',
  },
};

export default function FreeTime({ lang = 'en' }) {
  const t = pick(T, lang);
  const [slug, setSlug] = useState('tata_ace');
  const v = vehicles.find((x) => x.slug === slug);
  return (
    <section className="sec ftime" id="free-time">
      <div className="wrap">
        <div className="ftime__card rv">
          <div className="ftime__head">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h-section">{t.h1}<span className="it">{t.h2}</span></h2>
            <p className="lead">{t.lead}</p>
          </div>

          <div className="ftime__pick" role="tablist" aria-label={t.choose}>
            {vehicles.map((x) => (
              <button key={x.slug} role="tab" aria-selected={x.slug === slug} className={x.slug === slug ? 'is-on' : ''} onClick={() => setSlug(x.slug)}>
                <span className="ftime__art"><VehicleArt slug={x.slug} /></span>
                <b>{x.name}</b>
                <small>{fmtMinL(x.freeMin, lang)}</small>
              </button>
            ))}
          </div>

          <div className="ftime__show">
            <div className="ftime__veh">
              <VehicleArt slug={v.slug} title={v.name} />
              <div><b>{v.name}</b><small>{vehText(v, lang).capacity}</small></div>
            </div>
            <Dial min={v.freeMin} tone="a" Icon={PackageOpen} label={t.free} sub={t.freeSub} unit={t.unit} />
            <ol className="ftime__steps">
              <li><span><PackageOpen size={16} /></span><div><b>{t.s1}</b><small>{t.s1s}</small></div></li>
              <li><span><Truck size={16} /></span><div><b>{t.s2}</b><small>{t.s2s}</small></div></li>
              <li><span><PackageCheck size={16} /></span><div><b>{t.s3}</b><small>{t.s3s}</small></div></li>
            </ol>
          </div>

          <p className="ftime__note">
            <Info size={15} />
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}
