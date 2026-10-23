import { MapPin, Truck, PackageCheck, MoveRight } from 'lucide-react';
import { pick } from '@/lib/i18n';

const T = {
  en: {
    eyebrow: 'How it works', h1: 'Booked in 60 seconds', h2: 'Delivered with care', swipe: 'Swipe for the next step',
    s1: 'Set pickup, stops & drop', s1d: 'Search the address or drop a pin on the map. Add stops on the way, and book for now or later.',
    s2: 'Pick a vehicle, see the price', s2d: 'Compare 9 vehicles, from a 3 wheeler to a 19 ft truck — the full fare is shown before you confirm.',
    s3: 'Track it live, pay your way', s3d: 'A verified driver arrives, starts with your OTP, and you watch every turn until delivery. Pay cash, UPI or Drovika Wallet.',
    otp: 'Pickup · OTP verified',
  },
  hi: {
    eyebrow: 'कैसे काम करता है', h1: '60 सेकंड में बुकिंग', h2: 'सावधानी से डिलीवरी', swipe: 'अगला स्टेप देखने के लिए स्वाइप करें',
    s1: 'पिकअप, स्टॉप और ड्रॉप चुनें', s1d: 'पता खोजें या मैप पर पिन लगाएँ। रास्ते में स्टॉप जोड़ें, और अभी या बाद के लिए बुक करें।',
    s2: 'गाड़ी चुनें, किराया देखें', s2d: '3 व्हीलर से 19 फ़ुट ट्रक तक, 9 गाड़ियों की तुलना करें — कन्फ़र्म करने से पहले पूरा किराया दिखता है।',
    s3: 'लाइव ट्रैक करें, अपने तरीके से पेमेंट', s3d: 'वेरिफ़ाइड ड्राइवर आता है, आपके OTP से ट्रिप शुरू करता है, और आप डिलीवरी तक हर मोड़ देखते हैं। कैश, UPI या Drovika वॉलेट से पेमेंट।',
    otp: 'पिकअप · OTP वेरिफ़ाइड',
  },
  mr: {
    eyebrow: 'कसे काम करते', h1: '60 सेकंदात बुकिंग', h2: 'काळजीपूर्वक डिलिव्हरी', swipe: 'पुढची स्टेप पाहण्यासाठी स्वाइप करा',
    s1: 'पिकअप, स्टॉप आणि ड्रॉप निवडा', s1d: 'पत्ता शोधा किंवा नकाशावर पिन लावा. वाटेत स्टॉप जोडा, आणि आत्ता किंवा नंतरसाठी बुक करा.',
    s2: 'गाडी निवडा, भाडे पाहा', s2d: '3 व्हीलरपासून 19 फूट ट्रकपर्यंत, 9 गाड्यांची तुलना करा — कन्फर्म करण्याआधी पूर्ण भाडे दिसते.',
    s3: 'लाइव्ह ट्रॅक करा, तुमच्या पद्धतीने पेमेंट', s3d: 'व्हेरिफाइड ड्रायव्हर येतो, तुमच्या OTP ने ट्रिप सुरू करतो, आणि तुम्ही डिलिव्हरीपर्यंत प्रत्येक वळण पाहता. रोख, UPI किंवा Drovika वॉलेटने पेमेंट.',
    otp: 'पिकअप · OTP व्हेरिफाइड',
  },
};

export default function HowItWorks({ lang = 'en' }) {
  const t = pick(T, lang);
  const STEPS = [
    {
      Icon: MapPin, t: t.s1, d: t.s1d,
      ui: (
        <div className="hw-ui hw-ui--loc">
          <div><i className="dot dot--p" /> Andheri East, Mumbai</div>
          <div><i className="dot dot--s">1</i> Santacruz, Mumbai</div>
          <div><i className="dot dot--d" /> Bandra West, Mumbai</div>
        </div>
      ),
    },
    {
      Icon: Truck, t: t.s2, d: t.s2d,
      ui: (
        <div className="hw-ui hw-ui--veh">
          <span className="is-on"><b>Tata Ace</b>✓</span>
          <span><b>Pickup</b>›</span>
        </div>
      ),
    },
    {
      Icon: PackageCheck, t: t.s3, d: t.s3d,
      ui: (
        <div className="hw-ui hw-ui--otp">
          <small>{t.otp}</small>
          <span><i>4</i><i>8</i><i>2</i><i>1</i></span>
        </div>
      ),
    },
  ];
  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <div className="sec__head sec__head--center rv">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h-section">{t.h1}<span className="pn">.</span> <br className="br-d" />{t.h2}<span className="pn">.</span></h2>
        </div>
        <p className="rail-hint rail-hint--center" aria-hidden="true">{t.swipe} <MoveRight size={16} /></p>
        <ol className="how__steps">
          {STEPS.map(({ Icon, t: title, d, ui }, i) => (
            <li key={title} className="hstep rv" style={{ '--d': `${i * 0.12}s` }}>
              <div className="hstep__num">0{i + 1}</div>
              <div className="hstep__icon"><Icon size={26} /></div>
              <h3>{title}</h3>
              <p>{d}</p>
              {ui}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
