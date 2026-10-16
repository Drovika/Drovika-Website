import { MapPin, Building2, Factory, Waves, TreePine } from 'lucide-react';
import { areaGroups, areas } from '@/config/site';

const ICONS = { Mumbai: Building2, 'Thane district': Factory, 'Navi Mumbai': Waves, 'Vasai to Palghar': TreePine };

// Pins on the drawn map (x, y, label, label side)
const PINS = [
  [128, 44, 'Palghar', 'r'], [150, 118, 'Virar', 'r'], [140, 156, 'Vasai', 'r'], [156, 212, 'Borivali', 'l'],
  [258, 176, 'Bhiwandi', 'r'], [316, 214, 'Kalyan', 'r'], [356, 262, 'Badlapur', 'l'], [226, 232, 'Thane', 'r'],
  [146, 274, 'Andheri', 'l'], [182, 314, 'Kurla', 'r'], [124, 318, 'Bandra', 'l'], [124, 356, 'Dadar', 'l'],
  [246, 348, 'Vashi', 'r'], [306, 384, 'Panvel', 'r'], [232, 428, 'Uran', 'r'], [96, 454, 'Colaba', 'r'],
];

function ZoneMap() {
  return (
    <svg viewBox="0 0 420 500" className="zmap__svg" aria-hidden="true">
      <defs>
        <radialGradient id="zglow" cx="55%" cy="52%" r="60%">
          <stop offset="0" stopColor="#C6E66B" stopOpacity=".28" />
          <stop offset="1" stopColor="#C6E66B" stopOpacity="0" />
        </radialGradient>
        <pattern id="zdots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="#fff" opacity=".07" />
        </pattern>
      </defs>
      {/* land, sea and the harbour creek */}
      <rect width="420" height="500" fill="url(#zdots)" />
      <path d="M0 0H112C102 50 118 96 108 150S96 236 102 290 92 384 86 430 78 480 92 500H0Z" fill="#0A2E1F" />
      <path d="M92 500C118 470 150 444 176 410S200 330 206 262C214 300 222 340 214 382S206 460 214 500Z" fill="#0A2E1F" />
      <path d="M112 0C102 50 118 96 108 150S96 236 102 290 92 384 86 430 78 480 92 500" fill="none" stroke="#7FD3A5" strokeOpacity=".25" strokeWidth="1.5" />
      <circle cx="230" cy="260" r="230" fill="url(#zglow)" />
      {/* service zone */}
      <path d="M118 22C170 10 260 40 300 110S392 220 384 280 344 380 300 420 220 470 150 476 80 470 84 420 96 330 104 250 92 120 118 22Z"
        fill="#C6E66B" fillOpacity=".05" stroke="#C6E66B" strokeOpacity=".45" strokeWidth="1.5" strokeDasharray="5 7" className="zmap__zone" />
      {/* trips moving across the city */}
      <g fill="none" stroke="#C6E66B" strokeWidth="2" strokeLinecap="round" className="zmap__routes">
        <path d="M146 274C180 250 200 240 226 232" />
        <path d="M246 348C270 360 290 370 306 384" />
        <path d="M150 118C200 140 230 160 258 176" />
        <path d="M124 356C160 360 210 352 246 348" />
        <path d="M226 232C270 220 300 216 316 214" />
      </g>
      {PINS.map(([x, y, n, side], i) => (
        <g key={n} className="zpin" style={{ '--i': i }}>
          <circle cx={x} cy={y} r="11" className="zpin__ping" />
          <circle cx={x} cy={y} r="4.5" fill="#C6E66B" stroke="#06210F" strokeWidth="2" />
          <text x={side === 'l' ? x - 10 : x + 10} y={y + 4} textAnchor={side === 'l' ? 'end' : 'start'}>{n}</text>
        </g>
      ))}
    </svg>
  );
}

export default function Areas() {
  return (
    <section className="sec areas2" id="areas">
      <div className="wrap">
        <div className="areas2__top">
          <div className="areas2__copy rv">
            <span className="eyebrow">Service area</span>
            <h2 className="h-section">From Colaba to Palghar<span className="pn">,</span> <span className="it">Uran to Badlapur.</span></h2>
            <p className="lead">Drovika covers Mumbai, the Thane district, Navi Mumbai and the Vasai to Palghar belt.
              If your pickup, drop and stops are all inside this zone, we&apos;ll get it there.</p>
            <dl className="areas2__stats">
              <div><dt>{areaGroups.length}</dt><dd>regions</dd></div>
              <div><dt>{areas.length}+</dt><dd>areas covered</dd></div>
              <div><dt>7</dt><dd>days a week</dd></div>
            </dl>
          </div>
          <div className="zmap rv" style={{ '--d': '.1s' }}>
            <ZoneMap />
            <div className="zmap__legend"><i /> Drovika service zone</div>
          </div>
        </div>

        <div className="areas2__grid">
          {areaGroups.map((g, i) => {
            const Icon = ICONS[g.name] || MapPin;
            return (
              <article key={g.name} className="agrp rv" style={{ '--d': `${i * 0.06}s` }}>
                <header>
                  <span className="agrp__ic"><Icon size={19} /></span>
                  <div><h3>{g.name}</h3><small>{g.areas.length} areas</small></div>
                </header>
                <ul>{g.areas.map((a) => <li key={a}><MapPin size={13} />{a}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
