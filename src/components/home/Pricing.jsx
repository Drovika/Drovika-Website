import { ArrowRight, BadgeCheck, HandCoins, Lock, ShieldCheck, Wallet } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import StoreButton from '../StoreButton';
import { vehicles } from '@/config/site';

const POINTS = [
  [ShieldCheck, 'Price before you book', 'Set pickup and drop in the app and see one clear price for every vehicle.'],
  [HandCoins, 'No bargaining, ever', 'The price you confirm is the price you pay — no haggling at the gate.'],
  [Wallet, 'Cash or Wallet', 'Cash or UPI to the driver after delivery, or pay from your Drovika Wallet.'],
];

const SHOW = ['three_wheeler', 'tata_ace', 'pickup', 'tata_407', 'truck'];

// Upfront pricing — shows the idea, not the numbers. Exact fares live only inside the app.
export default function Pricing() {
  return (
    <section className="sec price" id="fare">
      <div className="wrap price__row">
        <div className="price__copy rv">
          <span className="eyebrow">Upfront pricing</span>
          <h2 className="h-section">Know your fare <span className="it">before</span> you book<span className="pn">.</span></h2>
          <p className="lead">No calls, no quotes, no surprises. The Drovika app shows you the full price the moment you choose your route.</p>
          <ul className="price__points">
            {POINTS.map(([Icon, t, d]) => (
              <li key={t}>
                <span className="price__ic"><Icon size={20} /></span>
                <div><b>{t}</b><p>{d}</p></div>
              </li>
            ))}
          </ul>
          <div className="price__ctas">
            <StoreButton app="customer" />
            <a href="#how" className="price__link">How booking works <ArrowRight size={17} /></a>
          </div>
        </div>

        <div className="price__visual rv" style={{ '--d': '.1s' }} aria-label="How fares appear in the Drovika app">
          <div className="pcard">
            <div className="pcard__head">
              <div className="pcard__route">
                <span><i className="dot dot--p" />Andheri East</span>
                <span className="pcard__arrow">→</span>
                <span><i className="dot dot--d" />Bandra West</span>
              </div>
              <span className="pcard__live">Live price</span>
            </div>
            <ul className="pcard__list">
              {vehicles.filter((v) => SHOW.includes(v.slug)).map((v, i) => (
                <li key={v.slug} className={i === 0 ? 'is-on' : ''}>
                  <span className="pcard__art"><VehicleArt slug={v.slug} /></span>
                  <div className="pcard__name"><b>{v.name}</b><small>{v.capacity}</small></div>
                  <span className="pcard__fare" aria-label="Shown in the app">₹ • • •</span>
                </li>
              ))}
            </ul>
            <div className="pcard__foot"><Lock size={14} /> Exact fares are shown in the app</div>
          </div>
          <div className="pchip pchip--a"><BadgeCheck size={18} /><span><b>Price locked</b><small>once you confirm</small></span></div>
          <div className="pchip pchip--b"><ShieldCheck size={18} /><span><b>No hidden charges</b><small>what you see is what you pay</small></span></div>
        </div>
      </div>
    </section>
  );
}
