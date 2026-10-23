import { Headphones, Camera, IndianRupee, RefreshCw, Timer, Award, CalendarX, Zap, Package, Truck, MapPin } from 'lucide-react';
import { site, vehicles } from '@/config/site';
import { fmtMinL, pick } from '@/lib/i18n';

// "Fair on both sides" — customers and drivers both read this page, so every rule shows
// what it means for each of them. Every line matches a rule in the apps.
const ace = vehicles.find((v) => v.slug === 'tata_ace');
const big = vehicles.find((v) => v.slug === 'truck');

const T = {
  en: {
    customer: 'Customer', driver: 'Driver',
    eyebrow: 'Fair on both sides', h1: 'A good trip needs ', h2: 'two happy people.',
    lead: "The person sending goods and the person driving them. Every Drovika rule is written for both, so nobody pays for someone else's change of plan.",
    c1h1: 'Plans change', c1h2: 'Nobody loses.',
    c1c: site.freeCancel ? 'Cancel without a fee. Just pick a reason, so we can keep improving.' : 'Cancel from the app in two taps. Just pick a reason.',
    c1d: 'Already reached the pickup, or well on the way? The next nearby trip comes to you first.',
    why: 'Why are you cancelling?', ch1: 'My plans changed', ch2: 'Got another vehicle', done: 'Booking cancelled', next: 'Next nearby trip is yours', prio: 'Priority for 30 min',
    c2h1: 'Loading time, ', c2h2: 'agreed upfront',
    c2p: (a, b) => `From ${a} on a Tata Ace to ${b} on a 19 ft truck, for loading and unloading together. It pauses while driving, and both of you see the same timer.`,
    minutes: 'minutes', seeAll: 'See time for every vehicle',
    c3h: 'Help in one tap', c3c: 'Something wrong on the trip? Tap Need help and Drovika calls you back.', c3d: 'Problem at the pickup or drop? Tap Support on the trip screen and our team calls you.', c3f: 'Our team sees every help request live, with the trip details.',
    c4h: 'Photos, not arguments', c4c: "Told your goods don't fit? You see the driver's live photo and can report it.", c4d: 'Goods heavier or different from the booking? Show it with a photo, no penalty.',
    c5h: 'One fare. No bargaining.', c5c: 'Pay exactly what the app showed when you booked.', c5d: 'Earn exactly what the app showed before you accepted.',
    c6h: 'Arrived means arrived', c6c: 'Your loading time starts only when the driver has really reached your pickup. The app checks it by GPS.', c6d: 'Within 1 km of the pickup, you can mark Arrived. Customer not there after 10 minutes? Cancel without a penalty.',
    c7h: "There's always a plan B", c7c: "If your driver can't make it, we find another one at the same fare.", c7d: 'Vehicle broke down? Take a short break with a photo, without it counting against you.',
    c8h: 'Showing up is rewarded', c8c: 'Drivers who keep their word get trips first, so you get reliable ones.', c8d: 'Keep your cancellations low and new trips reach you before others.',
  },
  hi: {
    customer: 'ग्राहक', driver: 'ड्राइवर',
    eyebrow: 'दोनों तरफ़ सही', h1: 'अच्छी ट्रिप के लिए चाहिए ', h2: 'दो खुश लोग।',
    lead: 'सामान भेजने वाला और सामान ले जाने वाला। Drovika का हर नियम दोनों के लिए बना है, ताकि किसी के प्लान बदलने का नुकसान दूसरे को न हो।',
    c1h1: 'प्लान बदलते हैं', c1h2: 'किसी का नुकसान नहीं।',
    c1c: site.freeCancel ? 'बिना किसी फ़ीस के कैंसल करें। बस एक कारण चुनें, ताकि हम और बेहतर कर सकें।' : 'ऐप से दो टैप में कैंसल करें। बस एक कारण चुनें।',
    c1d: 'पिकअप पर पहुँच गए या काफ़ी रास्ता तय कर लिया? पास की अगली ट्रिप पहले आपको मिलेगी।',
    why: 'आप क्यों कैंसल कर रहे हैं?', ch1: 'मेरा प्लान बदल गया', ch2: 'दूसरी गाड़ी मिल गई', done: 'बुकिंग कैंसल हुई', next: 'पास की अगली ट्रिप आपकी', prio: '30 मिनट तक प्राथमिकता',
    c2h1: 'लोडिंग का समय, ', c2h2: 'पहले से तय',
    c2p: (a, b) => `टाटा ऐस पर ${a} से लेकर 19 फ़ुट ट्रक पर ${b} तक, लोडिंग और अनलोडिंग दोनों के लिए। गाड़ी चलते समय यह रुका रहता है, और दोनों को एक ही टाइमर दिखता है।`,
    minutes: 'मिनट', seeAll: 'हर गाड़ी का समय देखें',
    c3h: 'एक टैप में मदद', c3c: 'ट्रिप में कोई दिक्कत? "Need help" दबाएँ, Drovika आपको कॉल करेगा।', c3d: 'पिकअप या ड्रॉप पर दिक्कत? ट्रिप स्क्रीन पर Support दबाएँ, हमारी टीम कॉल करेगी।', c3f: 'हमारी टीम हर मदद की रिक्वेस्ट ट्रिप की पूरी जानकारी के साथ लाइव देखती है।',
    c4h: 'बहस नहीं, फ़ोटो', c4c: 'कहा गया कि सामान गाड़ी में नहीं आएगा? आप ड्राइवर की लाइव फ़ोटो देख सकते हैं और रिपोर्ट कर सकते हैं।', c4d: 'सामान बुकिंग से भारी या अलग है? फ़ोटो से दिखाएँ, कोई पेनल्टी नहीं।',
    c5h: 'एक किराया। कोई मोलभाव नहीं।', c5c: 'उतना ही दें जितना बुक करते समय ऐप ने दिखाया।', c5d: 'उतना ही कमाएँ जितना स्वीकार करने से पहले ऐप ने दिखाया।',
    c6h: 'पहुँचे मतलब सच में पहुँचे', c6c: 'लोडिंग का समय तभी शुरू होता है जब ड्राइवर सच में पिकअप पर पहुँचे। ऐप GPS से जाँचता है।', c6d: 'पिकअप से 1 किमी के अंदर "पहुँच गए" दबा सकते हैं। 10 मिनट बाद भी ग्राहक नहीं आया? बिना पेनल्टी कैंसल करें।',
    c7h: 'हमेशा एक प्लान B', c7c: 'ड्राइवर नहीं आ पाया, तो हम उसी किराए पर दूसरा ड्राइवर ढूँढ देते हैं।', c7d: 'गाड़ी ख़राब हो गई? फ़ोटो भेजकर थोड़ा ब्रेक लें, यह आपके खिलाफ़ नहीं गिना जाएगा।',
    c8h: 'वादा निभाने का इनाम', c8c: 'जो ड्राइवर वादा निभाते हैं उन्हें ट्रिप पहले मिलती है, इसलिए आपको भरोसेमंद ड्राइवर मिलते हैं।', c8d: 'कैंसल कम रखें, नई ट्रिप दूसरों से पहले आपको मिलेंगी।',
  },
  mr: {
    customer: 'ग्राहक', driver: 'ड्रायव्हर',
    eyebrow: 'दोन्ही बाजूंनी योग्य', h1: 'चांगल्या ट्रिपसाठी हवेत ', h2: 'दोन आनंदी लोक.',
    lead: 'माल पाठवणारा आणि माल नेणारा. Drovika चा प्रत्येक नियम दोघांसाठी बनवला आहे, म्हणजे एकाच्या बदललेल्या प्लॅनचा तोटा दुसऱ्याला होत नाही.',
    c1h1: 'प्लॅन बदलतात', c1h2: 'कोणाचाही तोटा नाही.',
    c1c: site.freeCancel ? 'कोणत्याही फीशिवाय कॅन्सल करा. फक्त एक कारण निवडा, म्हणजे आम्ही आणखी सुधारू शकू.' : 'ॲपमधून दोन टॅपमध्ये कॅन्सल करा. फक्त एक कारण निवडा.',
    c1d: 'पिकअपला पोहोचलात किंवा बरेच अंतर आलात? जवळची पुढची ट्रिप आधी तुम्हाला मिळेल.',
    why: 'तुम्ही का कॅन्सल करत आहात?', ch1: 'माझा प्लॅन बदलला', ch2: 'दुसरी गाडी मिळाली', done: 'बुकिंग कॅन्सल झाले', next: 'जवळची पुढची ट्रिप तुमची', prio: '30 मिनिटे प्राधान्य',
    c2h1: 'लोडिंगचा वेळ, ', c2h2: 'आधीच ठरलेला',
    c2p: (a, b) => `टाटा एसवर ${a} पासून 19 फूट ट्रकवर ${b} पर्यंत, लोडिंग आणि अनलोडिंग दोन्हीसाठी. गाडी चालत असताना तो थांबलेला असतो, आणि दोघांनाही एकच टायमर दिसतो.`,
    minutes: 'मिनिटे', seeAll: 'प्रत्येक गाडीचा वेळ पाहा',
    c3h: 'एका टॅपमध्ये मदत', c3c: 'ट्रिपमध्ये काही अडचण? "Need help" दाबा, Drovika तुम्हाला कॉल करेल.', c3d: 'पिकअप किंवा ड्रॉपला अडचण? ट्रिप स्क्रीनवर Support दाबा, आमची टीम कॉल करेल.', c3f: 'आमची टीम प्रत्येक मदतीची रिक्वेस्ट ट्रिपच्या पूर्ण माहितीसह लाइव्ह पाहते.',
    c4h: 'वाद नाही, फोटो', c4c: 'माल गाडीत मावणार नाही असे सांगितले? तुम्ही ड्रायव्हरचा लाइव्ह फोटो पाहू शकता आणि रिपोर्ट करू शकता.', c4d: 'माल बुकिंगपेक्षा जड किंवा वेगळा आहे? फोटोने दाखवा, कोणताही दंड नाही.',
    c5h: 'एक भाडे. घासाघीस नाही.', c5c: 'बुक करताना ॲपने दाखवले तेवढेच द्या.', c5d: 'स्वीकारण्याआधी ॲपने दाखवले तेवढेच कमवा.',
    c6h: 'पोहोचलो म्हणजे खरंच पोहोचलो', c6c: 'ड्रायव्हर खरंच पिकअपला पोहोचल्यावरच लोडिंगचा वेळ सुरू होतो. ॲप GPS ने तपासते.', c6d: 'पिकअपपासून 1 किमीच्या आत "पोहोचलो" दाबू शकता. 10 मिनिटांनंतरही ग्राहक आला नाही? दंडाशिवाय कॅन्सल करा.',
    c7h: 'नेहमी एक प्लॅन B', c7c: 'ड्रायव्हर येऊ शकला नाही तर आम्ही त्याच भाड्यात दुसरा ड्रायव्हर शोधतो.', c7d: 'गाडी खराब झाली? फोटो पाठवून थोडा ब्रेक घ्या, हे तुमच्याविरुद्ध मोजले जाणार नाही.',
    c8h: 'शब्द पाळल्याचे बक्षीस', c8c: 'शब्द पाळणाऱ्या ड्रायव्हरना ट्रिप आधी मिळतात, म्हणून तुम्हाला विश्वासू ड्रायव्हर मिळतात.', c8d: 'कॅन्सल कमी ठेवा, नवीन ट्रिप इतरांच्या आधी तुम्हाला मिळतील.',
  },
};

function Two({ c, d, t }) {
  return (
    <ul className="two">
      <li><span className="two__tag"><Package size={12} />{t.customer}</span><p>{c}</p></li>
      <li><span className="two__tag two__tag--d"><Truck size={12} />{t.driver}</span><p>{d}</p></li>
    </ul>
  );
}

export default function DrovikaPromise({ lang = 'en' }) {
  const t = pick(T, lang);
  const it = lang === 'en' ? 'it' : 'it it--plain';
  return (
    <section className="sec promise" id="promise">
      <div className="grain" aria-hidden="true" />
      <div className="promise__glow" aria-hidden="true" />
      <div className="wrap">
        <div className="sec__head sec__head--center rv">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h-section">{t.h1}<span className={it}>{t.h2}</span></h2>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="pgrid">
          <article className="pc pc--cancel rv">
            <div className="pc__txt">
              <span className="pc__ic"><CalendarX size={20} /></span>
              <h3>{t.c1h1}<span className="pn">.</span> <span className={it}>{t.c1h2}</span></h3>
              <Two t={t} c={t.c1c} d={t.c1d} />
            </div>
            <div className="pc__ui" aria-hidden="true">
              <div className="pc__phone">
                <small>{t.why}</small>
                <span className="chip">{t.ch1}</span>
                <span className="chip is-on"><i />{t.ch2}</span>
                <div className="pc__done">{t.done}</div>
              </div>
              <div className="pc__toast">
                <span><Zap size={15} /></span>
                <div><b>{t.next}</b><small>{t.prio}</small></div>
              </div>
            </div>
          </article>

          <article className="pc pc--time rv" style={{ '--d': '.06s' }}>
            <span className="pc__ic"><Timer size={20} /></span>
            <h3>{t.c2h1}<span className={it}>{t.c2h2}</span></h3>
            <p>{t.c2p(fmtMinL(ace.freeMin, lang), fmtMinL(big.freeMin, lang))}</p>
            <div className="pc__ring" aria-hidden="true">
              <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" className="tr" /><circle cx="60" cy="60" r="50" className="fg" /></svg>
              <b>{ace.freeMin}<small>{t.minutes}</small></b>
            </div>
            <a href="#free-time" className="pc__link">{t.seeAll}</a>
          </article>

          <article className="pc pc--a rv" style={{ '--d': '.1s' }}>
            <span className="pc__ic"><Headphones size={20} /></span>
            <h3>{t.c3h}</h3>
            <Two t={t} c={t.c3c} d={t.c3d} />
            <p className="pc__foot">{t.c3f}</p>
          </article>

          <article className="pc pc--a rv" style={{ '--d': '.14s' }}>
            <span className="pc__ic"><Camera size={20} /></span>
            <h3>{t.c4h}</h3>
            <Two t={t} c={t.c4c} d={t.c4d} />
          </article>

          <article className="pc pc--a rv" style={{ '--d': '.18s' }}>
            <span className="pc__ic"><IndianRupee size={20} /></span>
            <h3>{t.c5h}</h3>
            <Two t={t} c={t.c5c} d={t.c5d} />
          </article>

          <article className="pc pc--b rv" style={{ '--d': '.06s' }}>
            <span className="pc__ic"><MapPin size={20} /></span>
            <h3>{t.c6h}</h3>
            <Two t={t} c={t.c6c} d={t.c6d} />
          </article>

          <article className="pc pc--b rv" style={{ '--d': '.1s' }}>
            <span className="pc__ic"><RefreshCw size={20} /></span>
            <h3>{t.c7h}</h3>
            <Two t={t} c={t.c7c} d={t.c7d} />
          </article>

          <article className="pc pc--b rv" style={{ '--d': '.14s' }}>
            <span className="pc__ic"><Award size={20} /></span>
            <h3>{t.c8h}</h3>
            <Two t={t} c={t.c8c} d={t.c8d} />
          </article>
        </div>
      </div>
    </section>
  );
}
