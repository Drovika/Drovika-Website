'use client';
import { useState } from 'react';
import { PackageOpen, PackageCheck, Truck, Info } from 'lucide-react';
import VehicleArt from '../VehicleArt';
import { vehicles, fmtMin } from '@/config/site';

const MAX = Math.max(...vehicles.map((v) => v.freeMin));

function Dial({ min, label, sub, Icon, tone }) {
  const C = 2 * Math.PI * 52;
  const pct = min / MAX;
  return (
    <div className={`dial dial--${tone}`}>
      <div className="dial__ring">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="52" className="dial__track" />
          <circle cx="60" cy="60" r="52" className="dial__fg" style={{ strokeDasharray: C, strokeDashoffset: C * (1 - pct) }} />
        </svg>
        <div className="dial__num"><b key={min}>{min}</b><small>minutes</small></div>
      </div>
      <div className="dial__txt">
        <span><Icon size={16} /> {label}</span>
        <p>{sub}</p>
      </div>
    </div>
  );
}

export default function FreeTime() {
  const [slug, setSlug] = useState('tata_ace');
  const v = vehicles.find((x) => x.slug === slug);
  return (
    <section className="sec ftime" id="free-time">
      <div className="wrap">
        <div className="ftime__card rv">
          <div className="ftime__head">
            <span className="eyebrow">Loading &amp; unloading time</span>
            <h2 className="h-section">Time that&apos;s clear <span className="it">to both of you.</span></h2>
            <p className="lead">Every booking includes one free time for loading and unloading together, set by vehicle size.
              It runs only while the vehicle is standing at the pickup or the drop, never while driving.</p>
          </div>

          <div className="ftime__pick" role="tablist" aria-label="Choose a vehicle">
            {vehicles.map((x) => (
              <button key={x.slug} role="tab" aria-selected={x.slug === slug} className={x.slug === slug ? 'is-on' : ''} onClick={() => setSlug(x.slug)}>
                <span className="ftime__art"><VehicleArt slug={x.slug} /></span>
                <b>{x.name}</b>
                <small>{fmtMin(x.freeMin)}</small>
              </button>
            ))}
          </div>

          <div className="ftime__show">
            <div className="ftime__veh">
              <VehicleArt slug={v.slug} title={v.name} />
              <div><b>{v.name}</b><small>{v.capacity}</small></div>
            </div>
            <Dial min={v.freeMin} tone="a" Icon={PackageOpen} label="Free time" sub="For loading and unloading together." />
            <ol className="ftime__steps">
              <li><span><PackageOpen size={16} /></span><div><b>Starts at the pickup</b><small>When the driver has really reached (checked by GPS).</small></div></li>
              <li><span><Truck size={16} /></span><div><b>Pauses while driving</b><small>Time on the road is never counted.</small></div></li>
              <li><span><PackageCheck size={16} /></span><div><b>Goes on at the drop</b><small>From where it stopped, until the goods are delivered.</small></div></li>
            </ol>
          </div>

          <p className="ftime__note">
            <Info size={15} />
            After the free time, a small per-minute waiting charge is added, and it goes fully to the driver.
            The customer and the driver see the same timer live in the app.
          </p>
        </div>
      </div>
    </section>
  );
}
