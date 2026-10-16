import { Clock, Camera, IndianRupee, RefreshCw, Timer, Award, CalendarX, Zap, Package, Truck } from 'lucide-react';
import { site, vehicles, fmtMin } from '@/config/site';

// "Fair on both sides" — customers and drivers both read this page, so every rule shows
// what it means for each of them. Every line matches a rule in the apps.
const ace = vehicles.find((v) => v.slug === 'tata_ace');
const big = vehicles.find((v) => v.slug === 'truck');

function Two({ c, d }) {
  return (
    <ul className="two">
      <li><span className="two__tag"><Package size={12} />Customer</span><p>{c}</p></li>
      <li><span className="two__tag two__tag--d"><Truck size={12} />Driver</span><p>{d}</p></li>
    </ul>
  );
}

export default function DrovikaPromise() {
  return (
    <section className="sec promise" id="promise">
      <div className="grain" aria-hidden="true" />
      <div className="promise__glow" aria-hidden="true" />
      <div className="wrap">
        <div className="sec__head sec__head--center rv">
          <span className="eyebrow">Fair on both sides</span>
          <h2 className="h-section">A good trip needs <span className="it">two happy people.</span></h2>
          <p className="lead">The person sending goods and the person driving them. Every Drovika rule is written for both,
            so nobody pays for someone else&apos;s change of plan.</p>
        </div>

        <div className="pgrid">
          <article className="pc pc--cancel rv">
            <div className="pc__txt">
              <span className="pc__ic"><CalendarX size={20} /></span>
              <h3>Plans change<span className="pn">.</span> <span className="it">Nobody loses.</span></h3>
              <Two
                c={site.freeCancel ? 'Cancel without a fee. Just pick a reason, so we can keep improving.' : 'Cancel from the app in two taps. Just pick a reason.'}
                d="Already reached the pickup, or well on the way? The next nearby trip comes to you first."
              />
            </div>
            <div className="pc__ui" aria-hidden="true">
              <div className="pc__phone">
                <small>Why are you cancelling?</small>
                <span className="chip">My plans changed</span>
                <span className="chip is-on"><i />Got another vehicle</span>
                <div className="pc__done">Booking cancelled</div>
              </div>
              <div className="pc__toast">
                <span><Zap size={15} /></span>
                <div><b>Next nearby trip is yours</b><small>Priority for 30 min</small></div>
              </div>
            </div>
          </article>

          <article className="pc pc--time rv" style={{ '--d': '.06s' }}>
            <span className="pc__ic"><Timer size={20} /></span>
            <h3>Loading time, <span className="it">agreed upfront</span></h3>
            <p>From {ace.freeMin} min on a Tata Ace to {fmtMin(big.freeMin)} on a 19 ft truck, at pickup and again at the drop.
              Both of you see the same timer.</p>
            <div className="pc__ring" aria-hidden="true">
              <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" className="tr" /><circle cx="60" cy="60" r="50" className="fg" /></svg>
              <b>{ace.freeMin}<small>minutes</small></b>
            </div>
            <a href="#free-time" className="pc__link">See time for every vehicle</a>
          </article>

          <article className="pc pc--a rv" style={{ '--d': '.1s' }}>
            <span className="pc__ic"><Clock size={20} /></span>
            <h3>Running late? Ask, don&apos;t assume.</h3>
            <Two c="Not ready yet? Ask your driver for a later pickup." d="Stuck in traffic? Ask the customer for more time." />
            <p className="pc__foot">The new time is set only when the other person agrees.</p>
          </article>

          <article className="pc pc--a rv" style={{ '--d': '.14s' }}>
            <span className="pc__ic"><Camera size={20} /></span>
            <h3>Photos, not arguments</h3>
            <Two c="Told your goods don't fit? You see the driver's live photo and can report it." d="Goods heavier or different from the booking? Show it with a photo, no penalty." />
          </article>

          <article className="pc pc--a rv" style={{ '--d': '.18s' }}>
            <span className="pc__ic"><IndianRupee size={20} /></span>
            <h3>One fare. No bargaining.</h3>
            <Two c="Pay exactly what the app showed when you booked." d="Earn exactly what the app showed before you accepted." />
          </article>

          <article className="pc pc--b rv" style={{ '--d': '.1s' }}>
            <span className="pc__ic"><RefreshCw size={20} /></span>
            <h3>There&apos;s always a plan B</h3>
            <Two c="If your driver can't make it, we find another one at the same fare." d="Vehicle broke down? Take a short break with a photo, without it counting against you." />
          </article>

          <article className="pc pc--b rv" style={{ '--d': '.14s' }}>
            <span className="pc__ic"><Award size={20} /></span>
            <h3>Showing up is rewarded</h3>
            <Two c="Drivers who keep their word get trips first, so you get reliable ones." d="Keep your cancellations low and new trips reach you before others." />
          </article>
        </div>
      </div>
    </section>
  );
}
