import { Sofa, Store, House, Laptop, HardHat, Briefcase, ShoppingBag, Boxes } from 'lucide-react';

const ICONS = [House, Store, Sofa, Laptop, HardHat, Briefcase, ShoppingBag, Boxes];
const WORDS = {
  en: ['House shifting', 'Shop stock', 'Furniture', 'Electronics', 'Building material', 'Office moves', 'E-commerce returns', 'Warehouse loads'],
  hi: ['घर शिफ़्टिंग', 'दुकान का माल', 'फ़र्नीचर', 'इलेक्ट्रॉनिक्स', 'बिल्डिंग मटेरियल', 'ऑफ़िस शिफ़्टिंग', 'ई-कॉमर्स रिटर्न', 'गोदाम का माल'],
  mr: ['घर शिफ्टिंग', 'दुकानाचा माल', 'फर्निचर', 'इलेक्ट्रॉनिक्स', 'बांधकाम साहित्य', 'ऑफिस शिफ्टिंग', 'ई-कॉमर्स रिटर्न', 'गोदामाचा माल'],
};

export default function Marquee({ lang = 'en' }) {
  const ITEMS = ICONS.map((Icon, i) => [Icon, (WORDS[lang] || WORDS.en)[i]]);
  const row = ITEMS.map(([Icon, t]) => (
    <span key={t} className="mq__item"><Icon size={20} />{t}</span>
  ));
  return (
    <div className="mq" aria-label="What you can move">
      <div className="mq__track">{row}{row}</div>
    </div>
  );
}
