import { ArrowRight, Check, Weight, Ruler, MoveRight, Timer } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import { vehicles, fmtMin } from '@/config/site';

export default function Vehicles() {
  return (
    <section className="sec vehicles" id="vehicles">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">Our fleet</span>
          <h2 className="h-section">The right vehicle <span className="it">for every load.</span></h2>
          <p className="lead">From a single fridge to a full 3 BHK — pick the size that fits. Your exact price is shown before you book.</p>
        </div>
        <p className="rail-hint" aria-hidden="true">Swipe to compare all {vehicles.length} vehicles <MoveRight size={16} /></p>
        <div className="vgrid">
          {vehicles.map((v, i) => (
            <article key={v.slug} className="vcard rv" style={{ '--d': `${i * 0.08}s` }}>
              <div className="vcard__art">
                <span className="vcard__cap">{v.capacity}</span>
                <VehicleArt slug={v.slug} className="vcard__svg" title={v.name} />
              </div>
              <div className="vcard__body">
                <div className="vcard__top">
                  <div>
                    <h3>{v.name}</h3>
                    <small>{v.nick}</small>
                  </div>
                  <div className="vcard__price">
                    <small>from</small>
                    <b>₹{v.base}</b>
                  </div>
                </div>
                <div className="vcard__meta">
                  <span><Weight size={15} /> {v.capacity.replace('Upto ', '')}</span>
                  <span><Ruler size={15} /> {v.size} <em>approx.</em></span>
                </div>
                <div className="vcard__free"><Timer size={15} /><span><b>{fmtMin(v.freeMin)}</b> free for loading <i>+</i> unloading</span></div>
                <ul className="vcard__list">
                  {v.bestFor.map((b) => <li key={b}><Check size={15} />{b}</li>)}
                </ul>
                <div className="vcard__foot">
                  <span>Exact price in app</span>
                  <a href="#fare" className="vcard__go" aria-label={`See how ${v.name} fares are shown`}><ArrowRight size={18} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
