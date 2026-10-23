import { KeyRound, BadgeCheck, Navigation, PhoneOff, CreditCard, FileLock2, Eye, Landmark, Headphones, Lock, ShieldCheck } from 'lucide-react';

import { pick } from '@/lib/i18n';

const T = {
  en: {
    c: [['OTP-protected pickup', 'The trip starts only when you share your OTP with the driver.'],
        ['Verified drivers', 'Licence, vehicle RC and ID are checked before anyone drives with us.'],
        ['Live tracking', 'Watch your goods move on the map, right up to the drop.'],
        ['Number stays private', 'Your phone number is shared with the driver only during an active trip.']],
    p: [['Documents kept private', 'Your licence, ID and bank details are seen only by our verification team.'],
        ['Earning shown first', 'You see what you will earn before you accept a trip.'],
        ['Tracked payouts', 'Every withdrawal to your bank or UPI comes with a reference number.'],
        ['Real people on support', 'Call or WhatsApp us whenever something goes wrong on a trip.']],
    eyebrow: 'Safety & security', h1: 'Built on trust', h2: 'on both sides.',
    lead: 'Whether you are sending goods or driving for us, your safety, your money and your data are protected at every step.',
    ct: 'When you send goods', ctag: 'For customers', pt: 'When you drive with us', ptag: 'For partners',
    b1: 'Encrypted connection (HTTPS)', b2: 'Online payments secured by Razorpay', b3: 'We never sell your data',
  },
  hi: {
    c: [['OTP से सुरक्षित पिकअप', 'ट्रिप तभी शुरू होती है जब आप ड्राइवर को अपना OTP बताते हैं।'],
        ['वेरिफ़ाइड ड्राइवर', 'हमारे साथ गाड़ी चलाने से पहले लाइसेंस, गाड़ी की RC और ID जाँची जाती है।'],
        ['लाइव ट्रैकिंग', 'ड्रॉप तक अपने सामान को मैप पर चलते हुए देखें।'],
        ['नंबर प्राइवेट रहता है', 'आपका फ़ोन नंबर ड्राइवर को सिर्फ़ चालू ट्रिप के दौरान दिखता है।']],
    p: [['डॉक्यूमेंट प्राइवेट रहते हैं', 'आपका लाइसेंस, ID और बैंक डिटेल सिर्फ़ हमारी वेरिफ़िकेशन टीम देखती है।'],
        ['कमाई पहले दिखती है', 'ट्रिप स्वीकार करने से पहले ही आपको अपनी कमाई दिखती है।'],
        ['हर पेआउट का हिसाब', 'बैंक या UPI में हर निकासी के साथ एक रेफ़रेंस नंबर मिलता है।'],
        ['सपोर्ट पर असली लोग', 'ट्रिप में कोई दिक्कत हो तो हमें कॉल या WhatsApp करें।']],
    eyebrow: 'सुरक्षा और भरोसा', h1: 'भरोसे पर बना', h2: 'दोनों तरफ़ से।',
    lead: 'चाहे आप सामान भेज रहे हों या हमारे साथ गाड़ी चला रहे हों, आपकी सुरक्षा, आपका पैसा और आपका डेटा हर कदम पर सुरक्षित है।',
    ct: 'जब आप सामान भेजते हैं', ctag: 'ग्राहकों के लिए', pt: 'जब आप हमारे साथ गाड़ी चलाते हैं', ptag: 'पार्टनर के लिए',
    b1: 'एन्क्रिप्टेड कनेक्शन (HTTPS)', b2: 'ऑनलाइन पेमेंट Razorpay से सुरक्षित', b3: 'हम आपका डेटा कभी नहीं बेचते',
  },
  mr: {
    c: [['OTP ने सुरक्षित पिकअप', 'तुम्ही ड्रायव्हरला तुमचा OTP सांगितल्यावरच ट्रिप सुरू होते.'],
        ['व्हेरिफाइड ड्रायव्हर', 'आमच्यासोबत गाडी चालवण्याआधी लायसन्स, गाडीची RC आणि ID तपासली जाते.'],
        ['लाइव्ह ट्रॅकिंग', 'ड्रॉपपर्यंत तुमचा माल नकाशावर पुढे जाताना पाहा.'],
        ['नंबर प्रायव्हेट राहतो', 'तुमचा फोन नंबर ड्रायव्हरला फक्त चालू ट्रिपदरम्यान दिसतो.']],
    p: [['कागदपत्रे प्रायव्हेट राहतात', 'तुमचे लायसन्स, ID आणि बँक तपशील फक्त आमची व्हेरिफिकेशन टीम पाहते.'],
        ['कमाई आधी दिसते', 'ट्रिप स्वीकारण्याआधीच तुम्हाला तुमची कमाई दिसते.'],
        ['प्रत्येक पेआउटचा हिशोब', 'बँक किंवा UPI मध्ये प्रत्येक पैसे काढण्यासोबत एक रेफरन्स नंबर मिळतो.'],
        ['सपोर्टवर खरी माणसे', 'ट्रिपमध्ये काही अडचण आली तर आम्हाला कॉल किंवा WhatsApp करा.']],
    eyebrow: 'सुरक्षा आणि विश्वास', h1: 'विश्वासावर उभे', h2: 'दोन्ही बाजूंनी.',
    lead: 'तुम्ही माल पाठवत असा किंवा आमच्यासोबत गाडी चालवत असा, तुमची सुरक्षा, तुमचे पैसे आणि तुमचा डेटा प्रत्येक टप्प्यावर सुरक्षित आहे.',
    ct: 'जेव्हा तुम्ही माल पाठवता', ctag: 'ग्राहकांसाठी', pt: 'जेव्हा तुम्ही आमच्यासोबत गाडी चालवता', ptag: 'पार्टनरसाठी',
    b1: 'एन्क्रिप्टेड कनेक्शन (HTTPS)', b2: 'ऑनलाइन पेमेंट Razorpay ने सुरक्षित', b3: 'आम्ही तुमचा डेटा कधीही विकत नाही',
  },
};
const CI = [KeyRound, BadgeCheck, Navigation, PhoneOff];
const PI = [FileLock2, Eye, Landmark, Headphones];

function Col({ title, tag, items, dark, delay }) {
  return (
    <article className={`safe__col rv ${dark ? 'safe__col--dark' : ''}`} style={{ '--d': delay }}>
      <span className="safe__tag">{tag}</span>
      <h3>{title}</h3>
      <ul>
        {items.map(([Icon, t, d]) => (
          <li key={t}><span className="safe__ic"><Icon size={19} /></span><div><b>{t}</b><p>{d}</p></div></li>
        ))}
      </ul>
    </article>
  );
}

export default function Safety({ lang = 'en' }) {
  const t = pick(T, lang);
  const CUSTOMER = t.c.map(([a, b], i) => [CI[i], a, b]);
  const PARTNER = t.p.map(([a, b], i) => [PI[i], a, b]);
  return (
    <section className="sec safe" id="safety">
      <div className="wrap">
        <div className="sec__head sec__head--center rv">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h-section">{t.h1}<span className="pn">,</span> <span className="it">{t.h2}</span></h2>
          <p className="lead">{t.lead}</p>
        </div>
        <div className="safe__grid">
          <Col title={t.ct} tag={t.ctag} items={CUSTOMER} delay="0s" />
          <div className="safe__shield rv" aria-hidden="true">
            <div className="safe__ring"><div className="safe__ring2"><ShieldCheck size={46} /></div></div>
          </div>
          <Col title={t.pt} tag={t.ptag} items={PARTNER} dark delay=".1s" />
        </div>
        <ul className="safe__badges rv">
          <li><Lock size={16} /> {t.b1}</li>
          <li><CreditCard size={16} /> {t.b2}</li>
          <li><ShieldCheck size={16} /> {t.b3}</li>
        </ul>
      </div>
    </section>
  );
}
