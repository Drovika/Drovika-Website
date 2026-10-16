import { KeyRound, BadgeCheck, Navigation, PhoneOff, CreditCard, FileLock2, Eye, Landmark, Headphones, Lock, ShieldCheck } from 'lucide-react';

const CUSTOMER = [
  [KeyRound, 'OTP-protected pickup', 'The trip starts only when you share your OTP with the driver.'],
  [BadgeCheck, 'Verified drivers', 'Licence, vehicle RC and ID are checked before anyone drives with us.'],
  [Navigation, 'Live tracking', 'Watch your goods move on the map, right up to the drop.'],
  [PhoneOff, 'Number stays private', 'Your phone number is shared with the driver only during an active trip.'],
];
const PARTNER = [
  [FileLock2, 'Documents kept private', 'Your licence, ID and bank details are seen only by our verification team.'],
  [Eye, 'Earning shown first', 'You see what you will earn before you accept a trip.'],
  [Landmark, 'Tracked payouts', 'Every withdrawal to your bank or UPI comes with a reference number.'],
  [Headphones, 'Real people on support', 'Call or WhatsApp us whenever something goes wrong on a trip.'],
];

function Col({ title, tag, items, dark, delay }) {
  return (
    <article className={`safe__col rv ${dark ? 'safe__col--dark' : ''}`} style={{ '--d': delay }}>
      <span className="safe__tag">{tag}</span>
      <h3>{title}</h3>
      <ul>
        {items.map(([Icon, t, d]) => (
          <li key={t}><span className="safe__ic"><Icon size={19} /></span><div><b>{t}</b><p>{d}</p></div></li>
        ))}
      </ul>
    </article>
  );
}

export default function Safety() {
  return (
    <section className="sec safe" id="safety">
      <div className="wrap">
        <div className="sec__head sec__head--center rv">
          <span className="eyebrow">Safety &amp; security</span>
          <h2 className="h-section">Built on trust<span className="pn">,</span> <span className="it">on both sides.</span></h2>
          <p className="lead">Whether you are sending goods or driving for us, your safety, your money and your data are protected at every step.</p>
        </div>
        <div className="safe__grid">
          <Col title="When you send goods" tag="For customers" items={CUSTOMER} delay="0s" />
          <div className="safe__shield rv" aria-hidden="true">
            <div className="safe__ring"><div className="safe__ring2"><ShieldCheck size={46} /></div></div>
          </div>
          <Col title="When you drive with us" tag="For partners" items={PARTNER} dark delay=".1s" />
        </div>
        <ul className="safe__badges rv">
          <li><Lock size={16} /> Encrypted connection (HTTPS)</li>
          <li><CreditCard size={16} /> Online payments secured by Razorpay</li>
          <li><ShieldCheck size={16} /> We never sell your data</li>
        </ul>
      </div>
    </section>
  );
}
