import { Navigation, IndianRupee, BadgeCheck, KeyRound, Wallet, Languages, Headphones, Bell, Route, CalendarClock } from 'lucide-react';
import { pick } from '@/lib/i18n';

const T = {
  en: {
    eyebrow: 'Why Drovika', h1: 'Everything that should have been simple', h2: 'finally is.',
    trk: 'Live tracking, every metre', trkd: 'See your driver on the map from pickup to drop. Know exactly when your goods will reach.',
    pr: 'Fixed price, upfront', prd: 'The fare you see is the fare you pay. No bargaining at the gate.', hidden: 'hidden charges',
    ver: 'Verified drivers only', verd: 'Licence, vehicle RC, Aadhaar and PAN are checked by our team before a driver gets a single trip.', v1: 'Driving licence', v2: 'Vehicle RC', v3: 'ID proof',
    otp: 'OTP-secured trips', otpd: 'The trip only starts when you share your OTP with the driver at pickup — so your goods go with the right person.',
    pay: 'Cash or Drovika Wallet', payCash: 'Cash:', payCashD: ' pay the driver after delivery, in cash or by UPI, as you like. ', payWal: 'Wallet:', payWalD: ' add money once with UPI or card, secured by Razorpay, and pay every trip from it.', pill1: 'Cash', pill2: 'Wallet',
    lang: 'English & हिंदी', langd: 'Use the app in the language you are comfortable with.',
    help: 'Real humans on support', helpd: 'Tap Need help during a trip and we call you back. Or call or WhatsApp us — we pick up.',
    upd: 'Updates at every step', updd: 'Driver assigned, arrived, picked up, delivered — you get a notification each time.',
    stops: 'Many drops, one trip', stopsd: 'Add up to 3 stops between pickup and drop — deliver to several shops or homes in one booking, with one clear price.',
    sch: 'Book now or for later', schd: 'Plan a shifting or a stock delivery up to 7 days ahead. We start finding your driver before your pickup time and let you know.',
    today: 'Today', tom: 'Tomorrow', thu: 'Thu',
  },
  hi: {
    eyebrow: 'Drovika क्यों', h1: 'जो आसान होना चाहिए था', h2: 'अब सच में आसान है।',
    trk: 'हर मीटर की लाइव ट्रैकिंग', trkd: 'पिकअप से ड्रॉप तक ड्राइवर को मैप पर देखें। पता रहेगा कि सामान कब पहुँचेगा।',
    pr: 'पहले से तय किराया', prd: 'जो किराया दिखे वही दें। गेट पर कोई मोलभाव नहीं।', hidden: 'छुपे चार्ज',
    ver: 'सिर्फ़ वेरिफ़ाइड ड्राइवर', verd: 'ड्राइवर को पहली ट्रिप मिलने से पहले हमारी टीम लाइसेंस, गाड़ी की RC, आधार और पैन जाँचती है।', v1: 'ड्राइविंग लाइसेंस', v2: 'गाड़ी की RC', v3: 'ID प्रूफ़',
    otp: 'OTP से सुरक्षित ट्रिप', otpd: 'ट्रिप तभी शुरू होती है जब आप पिकअप पर ड्राइवर को OTP बताते हैं — ताकि सामान सही आदमी के साथ जाए।',
    pay: 'कैश या Drovika वॉलेट', payCash: 'कैश:', payCashD: ' डिलीवरी के बाद ड्राइवर को कैश या UPI से, जैसे चाहें। ', payWal: 'वॉलेट:', payWalD: ' एक बार UPI या कार्ड से पैसे जोड़ें (Razorpay से सुरक्षित), और हर ट्रिप उसी से पे करें।', pill1: 'कैश', pill2: 'वॉलेट',
    lang: 'English और हिंदी', langd: 'ऐप उस भाषा में चलाएँ जिसमें आप सहज हैं।',
    help: 'सपोर्ट पर असली लोग', helpd: 'ट्रिप के दौरान "Need help" दबाएँ, हम आपको कॉल करेंगे। या हमें कॉल या WhatsApp करें — हम फ़ोन उठाते हैं।',
    upd: 'हर कदम की जानकारी', updd: 'ड्राइवर मिला, पहुँचा, सामान लिया, पहुँचाया — हर बार आपको नोटिफ़िकेशन मिलता है।',
    stops: 'कई ड्रॉप, एक ट्रिप', stopsd: 'पिकअप और ड्रॉप के बीच 3 स्टॉप तक जोड़ें — एक ही बुकिंग में कई दुकानों या घरों में डिलीवरी, एक साफ़ किराए में।',
    sch: 'अभी या बाद के लिए बुक करें', schd: 'शिफ़्टिंग या माल की डिलीवरी 7 दिन पहले तक प्लान करें। पिकअप के समय से पहले हम ड्राइवर ढूँढना शुरू करते हैं और आपको बताते हैं।',
    today: 'आज', tom: 'कल', thu: 'गुरु',
  },
  mr: {
    eyebrow: 'Drovika का', h1: 'जे सोपे असायला हवे होते', h2: 'ते आता खरंच सोपे आहे.',
    trk: 'प्रत्येक मीटरचे लाइव्ह ट्रॅकिंग', trkd: 'पिकअपपासून ड्रॉपपर्यंत ड्रायव्हरला नकाशावर पाहा. माल कधी पोहोचेल ते नक्की कळेल.',
    pr: 'आधीच ठरलेले भाडे', prd: 'जे भाडे दिसते तेच द्या. गेटवर कोणतीही घासाघीस नाही.', hidden: 'लपलेले चार्ज',
    ver: 'फक्त व्हेरिफाइड ड्रायव्हर', verd: 'ड्रायव्हरला पहिली ट्रिप मिळण्याआधी आमची टीम लायसन्स, गाडीची RC, आधार आणि पॅन तपासते.', v1: 'ड्रायव्हिंग लायसन्स', v2: 'गाडीची RC', v3: 'ID पुरावा',
    otp: 'OTP ने सुरक्षित ट्रिप', otpd: 'पिकअपला तुम्ही ड्रायव्हरला OTP सांगितल्यावरच ट्रिप सुरू होते — म्हणजे माल योग्य माणसासोबत जातो.',
    pay: 'रोख किंवा Drovika वॉलेट', payCash: 'रोख:', payCashD: ' डिलिव्हरीनंतर ड्रायव्हरला रोख किंवा UPI ने, जसे हवे तसे. ', payWal: 'वॉलेट:', payWalD: ' एकदा UPI किंवा कार्डने पैसे जोडा (Razorpay ने सुरक्षित), आणि प्रत्येक ट्रिपचे पेमेंट त्यातूनच करा.', pill1: 'रोख', pill2: 'वॉलेट',
    lang: 'English आणि हिंदी', langd: 'तुम्हाला सोयीच्या भाषेत ॲप वापरा.',
    help: 'सपोर्टवर खरी माणसे', helpd: 'ट्रिपदरम्यान "Need help" दाबा, आम्ही तुम्हाला कॉल करू. किंवा आम्हाला कॉल किंवा WhatsApp करा — आम्ही फोन उचलतो.',
    upd: 'प्रत्येक टप्प्याची माहिती', updd: 'ड्रायव्हर मिळाला, पोहोचला, माल घेतला, पोहोचवला — प्रत्येक वेळी तुम्हाला नोटिफिकेशन मिळते.',
    stops: 'अनेक ड्रॉप, एक ट्रिप', stopsd: 'पिकअप आणि ड्रॉपच्या मध्ये 3 स्टॉपपर्यंत जोडा — एकाच बुकिंगमध्ये अनेक दुकानांत किंवा घरांत डिलिव्हरी, एका स्पष्ट भाड्यात.',
    sch: 'आत्ता किंवा नंतरसाठी बुक करा', schd: 'शिफ्टिंग किंवा मालाची डिलिव्हरी 7 दिवस आधीपर्यंत प्लॅन करा. पिकअपच्या वेळेआधी आम्ही ड्रायव्हर शोधायला सुरुवात करतो आणि तुम्हाला कळवतो.',
    today: 'आज', tom: 'उद्या', thu: 'गुरु',
  },
};

export default function Features({ lang = 'en' }) {
  const t = pick(T, lang);
  return (
    <section className="sec feats">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h-section">{t.h1}<span className="pn">,</span> <span className="it">{t.h2}</span></h2>
        </div>
        <div className="bento">
          <article className="bx bx--track rv">
            <div className="bx__txt">
              <span className="bx__ic"><Navigation size={22} /></span>
              <h3>{t.trk}</h3>
              <p>{t.trkd}</p>
            </div>
            <div className="bx__map" aria-hidden="true">
              <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                <g stroke="rgba(255,255,255,.08)" strokeWidth="10" strokeLinecap="round" fill="none">
                  <path d="M0 60H400M0 140H400M90 0V200M220 0V200M330 0V200" />
                </g>
                <path d="M40 170 C 90 170, 90 60, 160 60 S 250 140, 300 100 S 350 30, 370 30" fill="none" stroke="#C6E66B" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 10" className="bx__dash" />
                <circle cx="40" cy="170" r="8" fill="#1E9E57" stroke="#fff" strokeWidth="3" />
                <circle cx="370" cy="30" r="8" fill="#E5484D" stroke="#fff" strokeWidth="3" />
              </svg>
            </div>
          </article>

          <article className="bx bx--price rv" style={{ '--d': '.08s' }}>
            <span className="bx__ic"><IndianRupee size={22} /></span>
            <h3>{t.pr}</h3>
            <p>{t.prd}</p>
            <div className="bx__big">₹0<small>{t.hidden}</small></div>
          </article>

          <article className="bx bx--verify rv" style={{ '--d': '.12s' }}>
            <span className="bx__ic"><BadgeCheck size={22} /></span>
            <h3>{t.ver}</h3>
            <p>{t.verd}</p>
            <ul className="bx__checks">
              <li>{t.v1}</li><li>{t.v2}</li><li>{t.v3}</li>
            </ul>
          </article>

          <article className="bx bx--otp rv" style={{ '--d': '.16s' }}>
            <span className="bx__ic"><KeyRound size={22} /></span>
            <h3>{t.otp}</h3>
            <p>{t.otpd}</p>
            <div className="bx__otp" aria-hidden="true"><i>4</i><i>8</i><i>2</i><i>1</i></div>
          </article>

          <article className="bx bx--pay rv" style={{ '--d': '.2s' }}>
            <span className="bx__ic"><Wallet size={22} /></span>
            <h3>{t.pay}</h3>
            <p><b>{t.payCash}</b>{t.payCashD}<b>{t.payWal}</b>{t.payWalD}</p>
            <div className="bx__pills"><span>{t.pill1}</span><span>{t.pill2}</span></div>
          </article>

          <article className="bx bx--lang rv" style={{ '--d': '.24s' }}>
            <span className="bx__ic"><Languages size={22} /></span>
            <h3>{t.lang}</h3>
            <p>{t.langd}</p>
            <div className="bx__hi" aria-hidden="true">नमस्ते</div>
          </article>

          <article className="bx bx--help rv" style={{ '--d': '.28s' }}>
            <span className="bx__ic"><Headphones size={22} /></span>
            <h3>{t.help}</h3>
            <p>{t.helpd}</p>
          </article>

          <article className="bx bx--alerts rv" style={{ '--d': '.32s' }}>
            <span className="bx__ic"><Bell size={22} /></span>
            <h3>{t.upd}</h3>
            <p>{t.updd}</p>
          </article>

          <article className="bx bx--stops rv" style={{ '--d': '.08s' }}>
            <div className="bx__txt">
              <span className="bx__ic"><Route size={22} /></span>
              <h3>{t.stops}</h3>
              <p>{t.stopsd}</p>
            </div>
            <ol className="bx__stops" aria-hidden="true">
              <li><i className="dot dot--p" />Naigaon</li>
              <li><i className="dot dot--s">1</i>Kandivali</li>
              <li><i className="dot dot--s">2</i>Jogeshwari</li>
              <li><i className="dot dot--d" />Andheri</li>
            </ol>
          </article>

          <article className="bx bx--sched rv" style={{ '--d': '.14s' }}>
            <div className="bx__txt">
              <span className="bx__ic"><CalendarClock size={22} /></span>
              <h3>{t.sch}</h3>
              <p>{t.schd}</p>
            </div>
            <div className="bx__when" aria-hidden="true">
              <div className="bx__days"><span>{t.today}<b>13</b></span><span className="is-on">{t.tom}<b>14</b></span><span>{t.thu}<b>15</b></span></div>
              <div className="bx__time">9:00 AM</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
