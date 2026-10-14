import { Phone, Star, ShieldCheck, Navigation } from 'lucide-react';

// The Drovika app on a phone — drawn in code, so it is sharp and animated.
const ROUTE = 'M70 300 C 70 262, 118 252, 128 226 S 118 178, 168 168 S 230 172, 232 150';

export default function PhoneMock() {
  return (
    <div className="phone" aria-label="Drovika app showing a live trip">
      <div className="phone__screen">
        <div className="phone__status"><b>9:41</b><span className="phone__island" /><span className="phone__sig"><i /><i /><i /><i /></span></div>
        <div className="phone__map">
          <svg viewBox="0 0 300 330" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="300" height="330" fill="#E8EEE2" />
            <path d="M0 0h46c-10 40 14 70 4 110s-30 60-18 100 22 80 6 120H0Z" fill="#CBE2E4" />
            <path d="M0 0h46c-10 40 14 70 4 110s-30 60-18 100 22 80 6 120" fill="none" stroke="#B5D4D7" strokeWidth="2" />
            <rect x="176" y="168" width="70" height="46" rx="10" fill="#D6E7C8" />
            <rect x="96" y="40" width="44" height="34" rx="8" fill="#D6E7C8" />
            <g stroke="#FFFFFF" strokeLinecap="round" fill="none">
              <path d="M40 60H300M50 150H300M30 250H300M120 0V330M200 0V330M260 0V330" strokeWidth="9" />
              <path d="M60 0 L300 280M150 330 L300 190" strokeWidth="6" />
            </g>
            <g stroke="#F3F6EF" strokeLinecap="round" fill="none" strokeWidth="3">
              <path d="M40 100H300M40 200H300M80 0V330M160 0V330M230 0V330" />
            </g>
            <path d={ROUTE} fill="none" stroke="#0F4A2C" strokeOpacity=".16" strokeWidth="14" strokeLinecap="round" />
            <path id="dv-route" d={ROUTE} fill="none" stroke="#0F4A2C" strokeWidth="5" strokeLinecap="round" className="phone__route" />
            <circle cx="70" cy="300" r="11" fill="#1E9E57" fillOpacity=".2" />
            <circle cx="70" cy="300" r="6" fill="#1E9E57" stroke="#fff" strokeWidth="2.5" />
            <g transform="translate(232 150)">
              <circle r="16" fill="#E5484D" fillOpacity=".18" className="phone__ping" />
              <path d="M0 4c-6-7-10-11-10-16a10 10 0 0 1 20 0c0 5-4 9-10 16Z" fill="#E5484D" stroke="#fff" strokeWidth="2" transform="translate(0 -4)" />
              <circle cy="-16" r="3.4" fill="#fff" />
            </g>
            <g>
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#dv-route" />
              </animateMotion>
              <g transform="rotate(0)">
                <rect x="-13" y="-8" width="20" height="16" rx="3" fill="#C6E66B" stroke="#0F4A2C" strokeWidth="2" />
                <path d="M7 -6h4l4 4v8H7Z" fill="#fff" stroke="#0F4A2C" strokeWidth="2" strokeLinejoin="round" />
              </g>
            </g>
          </svg>
          <div className="phone__trip">
            <div><i className="dot dot--p" /><span><small>Pickup</small>Andheri East</span></div>
            <div><i className="dot dot--d" /><span><small>Drop</small>Bandra West</span></div>
          </div>
          <div className="phone__locate"><Navigation size={15} /></div>
        </div>
        <div className="phone__sheet">
          <div className="phone__grab" />
          <div className="phone__eta">
            <div><small>Driver on the way</small><b>Arriving in 6 min</b></div>
            <span className="phone__live"><i />LIVE</span>
          </div>
          <div className="phone__bar"><i /></div>
          <div className="phone__driver">
            <span className="phone__avatar">RK</span>
            <div className="phone__who">
              <b>Rakesh · <Star size={11} fill="#F2B705" stroke="#F2B705" /> 4.9</b>
              <small>Tata Ace · MH 02 ●● 4821</small>
            </div>
            <span className="phone__icon phone__icon--call"><Phone size={16} /></span>
          </div>
          <div className="phone__foot">
            <div><small>Fixed fare</small><b>₹426</b></div>
            <div className="phone__otp"><small><ShieldCheck size={11} /> Start OTP</small><span><i>4</i><i>8</i><i>2</i><i>1</i></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
