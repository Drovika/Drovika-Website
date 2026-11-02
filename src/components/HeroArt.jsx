// Right-side picture for the light page heroes (Services, Areas, About, Contact), so wide screens don't look empty.
// Pure drawings + text chips; no prices other than the public "starting from".
import { BadgeCheck, Clock, MapPin, Phone, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import VehicleArt from './VehicleArt';
import BrandMark from './BrandMark';
import { WhatsAppIcon } from './StoreButton';
import { fromPrice, vehicles, areas } from '@/config/site';
import { pick } from '@/lib/i18n';

const T = {
  en: {
    nVeh: (n) => `${n} vehicle sizes`, from: `From ₹${fromPrice}`, price: 'Price before you book', verified: 'Verified drivers',
    pickup: 'Pickup', drop: 'Drop', nAreas: (n) => `${n}+ areas`, inZone: 'Inside the zone', live: 'Live tracking',
    made: 'Made in Mumbai', msme: 'Udyam registered MSME', fair: 'Fair to customers & drivers',
    real: 'Real people, real help', hours: 'Every day, 8 AM – 10 PM', call: 'Call', chat: 'WhatsApp',
    q: 'Hi, I need a Tata Ace from Andheri to Thane.', a: 'Sure! Book it in the app, or we can help you right here.',
  },
  hi: {
    nVeh: (n) => `${n} साइज़ की गाड़ियाँ`, from: `₹${fromPrice} से शुरू`, price: 'बुकिंग से पहले किराया', verified: 'वेरिफ़ाइड ड्राइवर',
    pickup: 'पिकअप', drop: 'ड्रॉप', nAreas: (n) => `${n}+ एरिया`, inZone: 'ज़ोन के अंदर', live: 'लाइव ट्रैकिंग',
    made: 'मुंबई में बना', msme: 'उद्यम रजिस्टर्ड MSME', fair: 'ग्राहक और ड्राइवर, दोनों के लिए सही',
    real: 'असली लोग, असली मदद', hours: 'हर दिन, सुबह 8 से रात 10', call: 'कॉल', chat: 'WhatsApp',
    q: 'नमस्ते, मुझे अंधेरी से ठाणे के लिए टाटा ऐस चाहिए।', a: 'ज़रूर! ऐप में बुक करें, या हम यहीं मदद कर देते हैं।',
  },
  mr: {
    nVeh: (n) => `${n} साइझच्या गाड्या`, from: `₹${fromPrice} पासून`, price: 'बुकिंगआधी भाडे', verified: 'व्हेरिफाइड ड्रायव्हर',
    pickup: 'पिकअप', drop: 'ड्रॉप', nAreas: (n) => `${n}+ एरिया`, inZone: 'झोनमध्ये', live: 'लाइव्ह ट्रॅकिंग',
    made: 'मुंबईत बनलेले', msme: 'उद्यम नोंदणीकृत MSME', fair: 'ग्राहक आणि ड्रायव्हर, दोघांसाठी योग्य',
    real: 'खरी माणसे, खरी मदत', hours: 'दररोज, सकाळी 8 ते रात्री 10', call: 'कॉल', chat: 'WhatsApp',
    q: 'नमस्कार, मला अंधेरी ते ठाण्यासाठी टाटा एस हवी आहे.', a: 'नक्की! ॲपमध्ये बुक करा, किंवा आम्ही इथेच मदत करतो.',
  },
};

function Chip({ icon: Icon, children, className = '' }) {
  return <span className={`hart__chip ${className}`}><Icon size={16} />{children}</span>;
}

export default function HeroArt({ kind, lang = 'en', udyam = false }) {
  const t = pick(T, lang);
  if (kind === 'fleet') {
    return (
      <div className="hart hart--fleet" aria-hidden="true">
        <div className="hart__card hart__card--dark"><VehicleArt slug="tempo" /></div>
        <div className="hart__card hart__card--lime"><VehicleArt slug="tata_ace" /></div>
        <div className="hart__card hart__card--white"><VehicleArt slug="three_wheeler" /></div>
        <div className="hart__badge"><b>{vehicles.length}</b><span>{t.nVeh(vehicles.length).replace(/^\d+\s*/, '')}<br /><em>{t.from}</em></span></div>
        <Chip icon={BadgeCheck} className="hart__c1">{t.price}</Chip>
        <Chip icon={ShieldCheck} className="hart__c2">{t.verified}</Chip>
      </div>
    );
  }
  if (kind === 'route') {
    return (
      <div className="hart hart--route" aria-hidden="true">
        <div className="hart__map">
          <svg viewBox="0 0 400 300" className="hart__roads">
            <path d="M-10 230 C 80 200, 120 120, 210 120 S 340 60, 410 40" />
            <path d="M40 -10 C 70 80, 60 180, 120 310" />
            <path d="M250 -10 C 240 90, 300 170, 290 310" />
            <path className="hart__route" d="M80 214 C 140 160, 170 132, 210 122 S 300 92, 322 74" />
          </svg>
          <span className="hart__pin hart__pin--a"><i />{t.pickup}</span>
          <span className="hart__pin hart__pin--b"><i />{t.drop}</span>
          <div className="hart__truck"><VehicleArt slug="tata_ace" /></div>
        </div>
        <div className="hart__badge hart__badge--r"><b>{areas.length}+</b><span>{t.nAreas(areas.length).replace(/^\d+\+\s*/, '')}<br /><em>{t.inZone}</em></span></div>
        <Chip icon={MapPin} className="hart__c1">Mumbai · Thane · Navi Mumbai</Chip>
        <Chip icon={Truck} className="hart__c2">{t.live}</Chip>
      </div>
    );
  }
  if (kind === 'brand') {
    return (
      <div className="hart hart--brand" aria-hidden="true">
        <div className="hart__rings"><span /><span /><span /></div>
        <div className="hart__mark"><BrandMark size={150} /></div>
        <Chip icon={MapPin} className="hart__c1">{t.made}</Chip>
        {udyam ? <Chip icon={BadgeCheck} className="hart__c2">{t.msme}</Chip> : null}
        <Chip icon={Sparkles} className="hart__c3">{t.fair}</Chip>
      </div>
    );
  }
  // kind === 'support'
  return (
    <div className="hart hart--support" aria-hidden="true">
      <div className="hart__sup">
        <div className="hart__sup-top"><BrandMark size={46} /><div><b>Drovika</b><small>{t.real}</small></div></div>
        <div className="hart__bubble hart__bubble--in">{t.q}</div>
        <div className="hart__bubble hart__bubble--out">{t.a}</div>
        <div className="hart__sup-btns"><span><Phone size={16} /> {t.call}</span><span className="wa"><WhatsAppIcon size={16} /> {t.chat}</span></div>
      </div>
      <Chip icon={Clock} className="hart__c1">{t.hours}</Chip>
    </div>
  );
}
