import Link from 'next/link';
import { Banknote, MapPin, CalendarClock, Landmark, House, Milestone, Smartphone, FileText, BadgeCheck, Navigation, Check, Plus, ArrowRight, Phone, Lock, Route, Zap, UserX, Camera, Wrench, Timer } from 'lucide-react';
import StoreButton, { WhatsAppIcon } from '@/components/StoreButton';
import VehicleArt from '@/components/VehicleArt';
import { vehicles, waLink, telLink, site } from '@/config/site';

export const metadata = {
  title: 'Drive with Drovika — Attach your tempo or truck in Mumbai',
  description: 'Own a 3 wheeler, Tata Ace, pickup, tempo or truck? Join Drovika Partner and get goods transport trips across Mumbai. Fair earnings, trips near you, withdraw to your bank or UPI.',
  alternates: { canonical: '/drivers/' },
};

const STEPS = [
  [Smartphone, 'Download the Partner app', 'Get Drovika Partner from Google Play and sign up with your mobile number.'],
  [FileText, 'Upload your documents', 'Add your licence, RC, Aadhaar, PAN, vehicle photo and bank details from your phone.'],
  [BadgeCheck, 'Get verified', 'Our team checks your documents — usually within a day.'],
  [Navigation, 'Go online & earn', 'Switch online, accept trips near you, and start earning.'],
];

const DOCS = ['Driving licence', 'Vehicle RC', 'Aadhaar card', 'PAN card', 'Vehicle photo', 'Bank account / UPI for payouts'];

// Fair rules for partners — must match Admin → Cancellations → Rules
const FAIR = [
  [Zap, 'Wasted trip? The next one is yours', 'If a customer cancels after you reach the pickup, or after you have driven 500 m or more towards it, the next nearby trip comes to you first.'],
  [UserX, 'Customer not reachable? You are covered', 'Wait 10 minutes at the pickup and call twice from the app. Then you can cancel, and it does not count against you.'],
  [Camera, 'Goods not as booked? Show a photo', 'Too heavy, not fitting, not allowed, or a different trip? Take a live photo at the pickup and cancel without a penalty.'],
  [Wrench, 'Vehicle broke down? Take a break', 'Send a photo of your number plate, rest for an hour, and send a photo of the fixed vehicle to go online again.'],
  [Timer, 'Loading time is clear from the start', 'Every trip includes a set time for loading and unloading, by vehicle size. You and the customer see the same timer.'],
];

const QA = [
  ['How much do I earn per trip?', 'Drovika keeps a small service fee on each trip and the rest is yours. The app shows your exact earning for every trip before you accept it.'],
  ['How do I get paid?', 'For cash trips you collect the fare from the customer directly. For online-paid trips, your earning is added to your Drovika wallet and you can request a withdrawal to your bank account.'],
  ['What about cash trips?', 'On cash trips you keep the cash, and Drovika’s service fee is added to your dues. Clear them from the app with UPI. Each vehicle has a dues limit — ₹500 for small vehicles and pickups, ₹1,000 for Tata 407 and 14 ft tempos, ₹1,500 for trucks. At the limit, new trips pause until you pay; there is no late fee.'],
  ['What is go-home mode?', 'Set your home location once in the app. When you are ready to head back, turn on go-home mode and you will only get trips whose drop is closer to your home. It works up to 2 times a day, for 3 hours each time, and switches off by itself when you reach near home.'],
  ['What if the customer uses a coupon?', 'Your earning stays the same. On a cash trip you collect the discounted amount the app shows, and Drovika adds the coupon amount to your wallet.'],
  ['What if I need to cancel a trip?', 'Everyone has a bad day, so 1 cancel a day is free. Cancels with proof (customer not at the pickup, goods not as booked, breakdown) do not count once checked. If you cancel more often, new trips pause for a short while. The app always shows why, and you can appeal from the app.'],
  ['What is the cancellation score?', 'It shows how many of your accepted trips you cancelled in the last 7 days, at the bottom of your home screen. 5% or less is excellent and gets you trips first. A higher score means trips reach you a little later, and our team checks in if it gets very high.'],
  ['When do I get my next trip after a cash trip?', 'Collect the cash and tap "Cash received" in the app. New trip requests come only after that, so every cash trip is settled properly.'],
  ['Do I need to work fixed hours?', 'No. Go online when you want to take trips and go offline when you are done.'],
  ['Which vehicles can join?', '3 wheelers, Tata Ace and other mini trucks, 8 ft and 9 ft pickups, Tata 407, 14 ft tempos, and 17 ft and 19 ft trucks — all with valid papers.'],
  ['What about tolls?', 'When a trip passes a toll naka or toll bridge, the toll is already added to the fare and comes to you in full — Drovika takes no commission on it. You pay it at the naka as usual.'],
];

export default function Drivers() {
  return (
    <>
      <section className="hero hero--p dhero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__glow hero__glow--a" />
          <div className="hero__glow hero__glow--b" />
          <div className="hero__grid" />
          <div className="grain" />
        </div>
        <div className="wrap dhero__row">
          <div className="dhero__copy">
            <span className="hero__pill"><i />Drovika Partner · Mumbai</span>
            <h1 className="h-display hero__title">Your vehicle<span className="pn">.</span> Your hours<span className="pn">.</span> <span className="hero__lime it">Your earnings.</span></h1>
            <p className="hero__lead">Attach your 3 wheeler, Tata Ace, pickup, tempo or truck with Drovika and get goods transport trips across Mumbai — no middlemen, no fixed shifts.</p>
            <div className="hero__ctas">
              <StoreButton app="partner" label="Partner app" />
              <a href={waLink('Hi Drovika, I want to join as a driver partner.')} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light"><WhatsAppIcon size={18} /> Ask on WhatsApp</a>
            </div>
          </div>
          <div className="offer rv" aria-label="Drovika Partner app: a new trip request">
            <div className="offer__top">
              <span className="offer__new"><i />New trip</span>
              <span className="offer__timer">18</span>
            </div>
            <small className="offer__lbl">You earn</small>
            <div className="offer__earn"><span>₹ • • •</span><em><Lock size={12} /> Shown before you accept</em></div>
            <div className="offer__chips">
              <div><Navigation size={16} /><b>0.5 km</b><small>to pickup</small></div>
              <div><Route size={16} /><b>10 km</b><small>trip</small></div>
              <div><Milestone size={16} /><b>2</b><small>stops</small></div>
            </div>
            <div className="offer__route">
              <div><i className="dot dot--p" /><span><small>Pickup</small>Andheri East</span></div>
              <div><i className="dot dot--d" /><span><small>Drop</small>Bandra West</span></div>
            </div>
            <div className="offer__slide"><span className="offer__knob"><Check size={20} /></span>Slide to accept</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec__head sec__head--center rv">
            <span className="eyebrow">Why partners choose us</span>
            <h2 className="h-section">Built to keep <span className="it">your wheels turning.</span></h2>
          </div>
          <div className="dperks dperks--6">
            {[
              [Banknote, 'Fair, clear earnings', 'A small service fee and the rest is yours — shown before you accept every trip.'],
              [MapPin, 'Trips close to you', 'Requests come from customers near your location — less empty running.'],
              [CalendarClock, 'Total flexibility', 'No shifts, no targets. Go online only when it suits you.'],
              [Landmark, 'Withdraw to your bank', 'Online trip earnings collect in your wallet. Request a payout to your bank or UPI anytime.'],
              [House, 'Go-home mode', 'Done for the day? Set your home and get trips that end closer to it — no empty ride back. Up to 2 times a day.'],
              [Milestone, 'Extra stops, extra pay', 'Multi-stop trips pay more for every extra stop. You see all stops and the full route before you accept.'],
            ].map(([Icon, t, d], i) => (
              <article key={t} className="dperk rv" style={{ '--d': `${i * 0.08}s` }}>
                <span className="bx__ic"><Icon size={22} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec fair" id="fair">
        <div className="wrap fair__row">
          <div className="rv">
            <span className="eyebrow">Fair rules</span>
            <h2 className="h-section">Fair rules <span className="it">for every trip.</span></h2>
            <p className="lead">The same clear rules apply to customers and partners. When plans change, nobody loses out, and partners who keep their word get trips first.</p>
            <ul className="fair__list">
              {FAIR.map(([Icon, t, d]) => (
                <li key={t}><span><Icon size={19} /></span><div><b>{t}</b><p>{d}</p></div></li>
              ))}
            </ul>
          </div>
          <div className="score rv" style={{ '--d': '.1s' }} aria-label="Cancellation score as shown on the Partner app home screen">
            <div className="grain" aria-hidden="true" />
            <div className="score__top"><small>Your cancellation score · last 7 days</small><span className="score__badge">Excellent</span></div>
            <div className="score__big">3%<small>1 of 34 trips</small></div>
            <div className="score__bar"><i /></div>
            <div className="score__legend">
              <div><b>0–5%</b><small>Excellent · trips first</small></div>
              <div><b>5–15%</b><small>Good</small></div>
              <div><b>15–25%</b><small>High · trips a bit later</small></div>
              <div><b>25%+</b><small>Our team checks in</small></div>
            </div>
            <p className="score__note">Shown at the bottom of your home screen in the Partner app.</p>
          </div>
        </div>
      </section>

      <section className="sec join">
        <div className="wrap join__row">
          <div className="rv">
            <span className="eyebrow">How to join</span>
            <h2 className="h-section join__title">Start earning in four steps<span className="pn">.</span></h2>
            <ol className="join__steps">
              {STEPS.map(([Icon, t, d], i) => (
                <li key={t}>
                  <span className="join__n"><Icon size={20} /></span>
                  <div><b><em>Step {i + 1}</em>{t}</b><p>{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="docs rv" style={{ '--d': '.1s' }}>
            <h3>Keep these ready</h3>
            <ul>{DOCS.map((d) => <li key={d}><Check size={18} />{d}</li>)}</ul>
            <div className="docs__veh">
              <span>Vehicles we accept</span>
              <div>{vehicles.map((v) => <figure key={v.slug}><VehicleArt slug={v.slug} /><figcaption>{v.name}</figcaption></figure>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec faq">
        <div className="wrap faq__row">
          <div className="faq__head rv">
            <span className="eyebrow">Partner FAQs</span>
            <h2 className="h-section">Good to know<span className="pn">.</span></h2>
            <p className="lead">Still have a question? <a className="nowrap" href={telLink()}>Call {site.phone}</a></p>
          </div>
          <div className="faq__list">
            {QA.map(([q, a], i) => (
              <details key={q} className="qa rv" open={i === 0}>
                <summary>{q}<span className="qa__ic"><Plus size={20} /></span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec cta-band">
        <div className="wrap">
          <div className="cta rv">
            <h2 className="h-section">Ready to drive with Drovika<span className="pn">?</span></h2>
            <p>Download the Partner app and finish sign-up in about 10 minutes.</p>
            <div className="cta__btns">
              <StoreButton app="partner" />
              <a href={telLink()} className="btn btn--ghost-light"><Phone size={18} /> Talk to our team</a>
              <Link href="/" className="cta__link">Booking for yourself? <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
