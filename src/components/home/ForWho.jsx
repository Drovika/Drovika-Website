import Link from 'next/link';
import { House, Store, Check, ArrowRight } from 'lucide-react';
import { lp } from '@/lib/i18n';

const T = {
  en: [
    { tag: 'For homes', t: 'Shifting home? We\'ve got the wheels.', list: ['1 BHK to 3 BHK moves', 'New fridge, washing machine or sofa', 'Up to 3 drops in one trip'], cta: 'See vehicle sizes' },
    { tag: 'For businesses', t: 'Daily deliveries for shops & SMEs.', list: ['Stock from wholesale markets', 'Deliveries to your customers', 'Drovika Wallet: add money once, pay every trip from it'], cta: 'Talk to us' },
  ],
  hi: [
    { tag: 'घरों के लिए', t: 'घर शिफ़्ट कर रहे हैं? गाड़ी हमारी।', list: ['1 BHK से 3 BHK तक शिफ़्टिंग', 'नया फ़्रिज, वॉशिंग मशीन या सोफ़ा', 'एक ट्रिप में 3 ड्रॉप तक'], cta: 'गाड़ियों के साइज़ देखें' },
    { tag: 'बिज़नेस के लिए', t: 'दुकानों और छोटे बिज़नेस के लिए रोज़ की डिलीवरी।', list: ['होलसेल मार्केट से माल', 'अपने ग्राहकों तक डिलीवरी', 'Drovika वॉलेट: एक बार पैसे जोड़ें, हर ट्रिप उसी से'], cta: 'हमसे बात करें' },
  ],
  mr: [
    { tag: 'घरांसाठी', t: 'घर शिफ्ट करताय? गाडी आमची.', list: ['1 BHK ते 3 BHK शिफ्टिंग', 'नवीन फ्रिज, वॉशिंग मशीन किंवा सोफा', 'एका ट्रिपमध्ये 3 ड्रॉपपर्यंत'], cta: 'गाड्यांचे साइझ पाहा' },
    { tag: 'व्यवसायांसाठी', t: 'दुकाने आणि छोट्या व्यवसायांसाठी रोजची डिलिव्हरी.', list: ['घाऊक बाजारातून माल', 'तुमच्या ग्राहकांपर्यंत डिलिव्हरी', 'Drovika वॉलेट: एकदा पैसे जोडा, प्रत्येक ट्रिप त्यातूनच'], cta: 'आमच्याशी बोला' },
  ],
};
const ICONS = [House, Store];
const HREFS = ['/#vehicles', '/contact/'];

export default function ForWho({ lang = 'en' }) {
  const cards = T[lang] || T.en;
  return (
    <section className="sec forwho">
      <div className="wrap fw__grid">
        {cards.map(({ tag, t, list, cta }, i) => {
          const Icon = ICONS[i];
          return (
            <article key={tag} className={`fw rv ${i ? 'fw--b' : 'fw--a'}`} style={{ '--d': `${i * 0.1}s` }}>
              <span className="fw__tag"><Icon size={16} /> {tag}</span>
              <h3>{t}</h3>
              <ul>{list.map((l) => <li key={l}><Check size={17} />{l}</li>)}</ul>
              <Link href={lp(lang, HREFS[i])} className="fw__cta">{cta} <ArrowRight size={18} /></Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
