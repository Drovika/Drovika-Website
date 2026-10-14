import Link from 'next/link';
import { ArrowRight, Banknote, MapPin, CalendarClock, ShieldCheck } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import StoreButton from '../StoreButton';

const PERKS = [
  [Banknote, 'Keep most of every fare', 'A small, fair service fee. See your earning on every trip before you accept.'],
  [MapPin, 'Trips near you — and home', 'Get requests close to you. Heading home? Turn on go-home mode and get trips going your way.'],
  [CalendarClock, 'Your time, your rules', 'Go online when you want. No fixed shifts, no targets.'],
  [ShieldCheck, 'Withdraw to your bank', 'Online trip earnings go to your wallet — withdraw to your bank account or UPI.'],
];

export default function DriverBand() {
  return (
    <section className="sec dband" id="drive">
      <div className="dband__bg" aria-hidden="true" />
      <div className="wrap dband__row">
        <div className="dband__copy rv">
          <span className="eyebrow eyebrow--light">Drovika Partner</span>
          <h2 className="h-section">Own a tempo or truck? <span className="dband__lime">Earn more with it.</span></h2>
          <p className="dband__lead">Join Drovika as a driver partner and get steady trips across Mumbai — with fair pay and no middlemen.</p>
          <div className="dband__ctas">
            <StoreButton app="partner" label="Partner app" />
            <Link href="/drivers/" className="btn btn--ghost-light">Learn more <ArrowRight size={18} /></Link>
          </div>
          <div className="dband__fleet" aria-hidden="true">
            <VehicleArt slug="tata_ace" />
            <VehicleArt slug="pickup" />
            <VehicleArt slug="tempo" />
          </div>
        </div>
        <div className="dband__perks">
          {PERKS.map(([Icon, t, d], i) => (
            <div key={t} className="perk rv" style={{ '--d': `${i * 0.08}s` }}>
              <span className="perk__ic"><Icon size={22} /></span>
              <div><h3>{t}</h3><p>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
