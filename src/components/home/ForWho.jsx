import Link from 'next/link';
import { House, Store, Check, ArrowRight } from 'lucide-react';

const CARDS = [
  {
    Icon: House, tag: 'For homes', t: 'Shifting home? We\'ve got the wheels.',
    list: ['1 BHK to 3 BHK moves', 'New fridge, washing machine or sofa', 'Up to 3 drops in one trip'],
    cta: 'See vehicle sizes', href: '/#vehicles',
  },
  {
    Icon: Store, tag: 'For businesses', t: 'Daily deliveries for shops & SMEs.',
    list: ['Stock from wholesale markets', 'Deliveries to your customers', 'Drovika Wallet: add money once, pay every trip from it'],
    cta: 'Talk to us', href: '/contact/',
  },
];

export default function ForWho() {
  return (
    <section className="sec forwho">
      <div className="wrap fw__grid">
        {CARDS.map(({ Icon, tag, t, list, cta, href }, i) => (
          <article key={tag} className={`fw rv ${i ? 'fw--b' : 'fw--a'}`} style={{ '--d': `${i * 0.1}s` }}>
            <span className="fw__tag"><Icon size={16} /> {tag}</span>
            <h3>{t}</h3>
            <ul>{list.map((l) => <li key={l}><Check size={17} />{l}</li>)}</ul>
            <Link href={href} className="fw__cta">{cta} <ArrowRight size={18} /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
