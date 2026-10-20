import { Navigation, IndianRupee, BadgeCheck, KeyRound, Wallet, Languages, Headphones, Bell, Route, CalendarClock } from 'lucide-react';

export default function Features() {
  return (
    <section className="sec feats">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">Why Drovika</span>
          <h2 className="h-section">Everything that should have been simple<span className="pn">,</span> <span className="it">finally is.</span></h2>
        </div>
        <div className="bento">
          <article className="bx bx--track rv">
            <div className="bx__txt">
              <span className="bx__ic"><Navigation size={22} /></span>
              <h3>Live tracking, every metre</h3>
              <p>See your driver on the map from pickup to drop. Know exactly when your goods will reach.</p>
            </div>
            <div className="bx__map" aria-hidden="true">
              <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                <g stroke="rgba(255,255,255,.08)" strokeWidth="10" strokeLinecap="round" fill="none">
                  <path d="M0 60H400M0 140H400M90 0V200M220 0V200M330 0V200" />
                </g>
                <path d="M40 170 C 90 170, 90 60, 160 60 S 250 140, 300 100 S 350 30, 370 30" fill="none" stroke="#C6E66B" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 10" className="bx__dash" />
                <circle cx="40" cy="170" r="8" fill="#1E9E57" stroke="#fff" strokeWidth="3" />
                <circle cx="370" cy="30" r="8" fill="#E5484D" stroke="#fff" strokeWidth="3" />
              </svg>
            </div>
          </article>

          <article className="bx bx--price rv" style={{ '--d': '.08s' }}>
            <span className="bx__ic"><IndianRupee size={22} /></span>
            <h3>Fixed price, upfront</h3>
            <p>The fare you see is the fare you pay. No bargaining at the gate.</p>
            <div className="bx__big">₹0<small>hidden charges</small></div>
          </article>

          <article className="bx bx--verify rv" style={{ '--d': '.12s' }}>
            <span className="bx__ic"><BadgeCheck size={22} /></span>
            <h3>Verified drivers only</h3>
            <p>Licence, vehicle RC, Aadhaar and PAN are checked by our team before a driver gets a single trip.</p>
            <ul className="bx__checks">
              <li>Driving licence</li><li>Vehicle RC</li><li>ID proof</li>
            </ul>
          </article>

          <article className="bx bx--otp rv" style={{ '--d': '.16s' }}>
            <span className="bx__ic"><KeyRound size={22} /></span>
            <h3>OTP-secured trips</h3>
            <p>The trip only starts when you share your OTP with the driver at pickup — so your goods go with the right person.</p>
            <div className="bx__otp" aria-hidden="true"><i>4</i><i>8</i><i>2</i><i>1</i></div>
          </article>

          <article className="bx bx--pay rv" style={{ '--d': '.2s' }}>
            <span className="bx__ic"><Wallet size={22} /></span>
            <h3>Cash or Drovika Wallet</h3>
            <p>Pay the driver in cash or UPI after delivery, or pay from your Drovika Wallet. Add money once with UPI or card, secured by Razorpay.</p>
            <div className="bx__pills"><span>Cash</span><span>UPI to driver</span><span>Wallet</span></div>
          </article>

          <article className="bx bx--lang rv" style={{ '--d': '.24s' }}>
            <span className="bx__ic"><Languages size={22} /></span>
            <h3>English &amp; हिंदी</h3>
            <p>Use the app in the language you are comfortable with.</p>
            <div className="bx__hi" aria-hidden="true">नमस्ते</div>
          </article>

          <article className="bx bx--help rv" style={{ '--d': '.28s' }}>
            <span className="bx__ic"><Headphones size={22} /></span>
            <h3>Real humans on support</h3>
            <p>Tap Need help during a trip and we call you back. Or call or WhatsApp us — we pick up.</p>
          </article>

          <article className="bx bx--alerts rv" style={{ '--d': '.32s' }}>
            <span className="bx__ic"><Bell size={22} /></span>
            <h3>Updates at every step</h3>
            <p>Driver assigned, arrived, picked up, delivered — you get a notification each time.</p>
          </article>

          <article className="bx bx--stops rv" style={{ '--d': '.08s' }}>
            <div className="bx__txt">
              <span className="bx__ic"><Route size={22} /></span>
              <h3>Many drops, one trip</h3>
              <p>Add up to 3 stops between pickup and drop — deliver to several shops or homes in one booking, with one clear price.</p>
            </div>
            <ol className="bx__stops" aria-hidden="true">
              <li><i className="dot dot--p" />Naigaon</li>
              <li><i className="dot dot--s">1</i>Kandivali</li>
              <li><i className="dot dot--s">2</i>Jogeshwari</li>
              <li><i className="dot dot--d" />Andheri</li>
            </ol>
          </article>

          <article className="bx bx--sched rv" style={{ '--d': '.14s' }}>
            <div className="bx__txt">
              <span className="bx__ic"><CalendarClock size={22} /></span>
              <h3>Book now or for later</h3>
              <p>Plan a shifting or a stock delivery up to 7 days ahead. We start finding your driver before your pickup time and let you know.</p>
            </div>
            <div className="bx__when" aria-hidden="true">
              <div className="bx__days"><span>Today<b>13</b></span><span className="is-on">Tomorrow<b>14</b></span><span>Thu<b>15</b></span></div>
              <div className="bx__time">9:00 AM</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
