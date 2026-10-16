import { Sofa, Store, House, Laptop, HardHat, Briefcase, ShoppingBag, Boxes } from 'lucide-react';

const ITEMS = [
  [House, 'House shifting'], [Store, 'Shop stock'], [Sofa, 'Furniture'], [Laptop, 'Electronics'],
  [HardHat, 'Building material'], [Briefcase, 'Office moves'], [ShoppingBag, 'E-commerce returns'], [Boxes, 'Warehouse loads'],
];

export default function Marquee() {
  const row = ITEMS.map(([Icon, t]) => (
    <span key={t} className="mq__item"><Icon size={20} />{t}</span>
  ));
  return (
    <div className="mq" aria-label="What you can move">
      <div className="mq__track">{row}{row}</div>
    </div>
  );
}
