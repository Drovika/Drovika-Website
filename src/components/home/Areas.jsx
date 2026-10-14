import { MapPin } from 'lucide-react';
import { areaGroups } from '@/config/site';

export default function Areas() {
  return (
    <section className="sec areas">
      <div className="wrap areas__row">
        <div className="areas__copy rv">
          <span className="eyebrow">Service area</span>
          <h2 className="h-section">From Colaba to Palghar, Uran to Badlapur.</h2>
          <p className="lead">Drovika covers Mumbai, Thane district, Navi Mumbai and the Vasai–Palghar belt. If your pickup, drop and stops are all inside this zone, we&apos;ll get it there.</p>
        </div>
        <div className="areas__map rv" style={{ '--d': '.1s' }}>
          <svg viewBox="0 0 320 380" aria-hidden="true" className="areas__svg">
            <defs>
              <radialGradient id="ag" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#C6E66B" stopOpacity=".55" />
                <stop offset="1" stopColor="#C6E66B" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M0 0h110c-8 30 6 50-2 80s-24 40-16 74 18 60 6 92-30 48-26 80 16 40 8 54H0Z" fill="#DCEBEA" />
            <path d="M118 20 C 150 10, 230 18, 290 40 L 300 360 C 240 372, 170 368, 130 360 C 110 320, 100 280, 104 240 C 108 200, 90 160, 100 120 C 108 80, 104 50, 118 20 Z" fill="#fff" stroke="#0F4A2C" strokeOpacity=".15" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="190" cy="190" r="150" fill="url(#ag)" />
            {[
              [128, 330, 'Colaba'], [150, 250, 'Dadar'], [146, 205, 'Bandra'], [160, 168, 'Andheri'], [162, 108, 'Borivali'],
              [172, 22, 'Palghar'], [178, 62, 'Virar'], [222, 140, 'Thane'], [232, 238, 'Vashi'], [262, 290, 'Panvel'], [196, 222, 'Kurla'],
            ].map(([x, y, n], i) => (
              <g key={n} className="apin" style={{ '--i': i }}>
                <circle cx={x} cy={y} r="10" fill="#0F4A2C" fillOpacity=".12" className="apin__ping" />
                <circle cx={x} cy={y} r="4.5" fill="#0F4A2C" stroke="#fff" strokeWidth="2" />
                <text x={x + 9} y={y + 4} fontSize="10.5" fontWeight="600" fill="#0F4A2C" fontFamily="Poppins, sans-serif" >{n}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="areas__groups rv" style={{ '--d': '.15s' }}>
          {areaGroups.map((g) => (
            <div key={g.region} className="areas__group">
              <h3>{g.region}</h3>
              <ul className="areas__chips">
                {g.places.map((a) => <li key={a}><MapPin size={14} />{a}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
