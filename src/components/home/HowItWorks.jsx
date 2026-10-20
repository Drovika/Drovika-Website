import { MapPin, Truck, PackageCheck, MoveRight } from 'lucide-react';

const STEPS = [
  {
    Icon: MapPin, t: 'Set pickup, stops & drop', d: 'Search the address or drop a pin on the map. Add stops on the way, and book for now or later.',
    ui: (
      <div className="hw-ui hw-ui--loc">
        <div><i className="dot dot--p" /> Andheri East, Mumbai</div>
        <div><i className="dot dot--s">1</i> Santacruz, Mumbai</div>
        <div><i className="dot dot--d" /> Bandra West, Mumbai</div>
      </div>
    ),
  },
  {
    Icon: Truck, t: 'Pick a vehicle, see the price', d: 'Compare 9 vehicles, from a 3 wheeler to a 19 ft truck — the full fare is shown before you confirm.',
    ui: (
      <div className="hw-ui hw-ui--veh">
        <span className="is-on"><b>Tata Ace</b>✓</span>
        <span><b>Pickup</b>›</span>
      </div>
    ),
  },
  {
    Icon: PackageCheck, t: 'Track it live, pay your way', d: 'A verified driver arrives, starts with your OTP, and you watch every turn until delivery. Pay cash, UPI or Drovika Wallet.',
    ui: (
      <div className="hw-ui hw-ui--otp">
        <small>Pickup · OTP verified</small>
        <span><i>4</i><i>8</i><i>2</i><i>1</i></span>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <div className="sec__head sec__head--center rv">
          <span className="eyebrow">How it works</span>
          <h2 className="h-section">Booked in 60 seconds<span className="pn">.</span> <br className="br-d" />Delivered with care<span className="pn">.</span></h2>
        </div>
        <p className="rail-hint rail-hint--center" aria-hidden="true">Swipe for the next step <MoveRight size={16} /></p>
        <ol className="how__steps">
          {STEPS.map(({ Icon, t, d, ui }, i) => (
            <li key={t} className="hstep rv" style={{ '--d': `${i * 0.12}s` }}>
              <div className="hstep__num">0{i + 1}</div>
              <div className="hstep__icon"><Icon size={26} /></div>
              <h3>{t}</h3>
              <p>{d}</p>
              {ui}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
