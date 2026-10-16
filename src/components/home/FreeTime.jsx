'use client';
import { useState } from 'react';
import { PackageOpen, PackageCheck, Info } from 'lucide-react';
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
            <p className="lead">Every booking includes time to load at the pickup and the same time again to unload at the drop.
              It is set by vehicle size, so the customer isn&apos;t rushed and the driver knows the job before it starts.</p>
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
            <Dial min={v.freeMin} tone="a" Icon={PackageOpen} label="Loading at pickup" sub="Starts when the driver reaches the pickup." />
            <span className="ftime__plus" aria-hidden="true">+</span>
            <Dial min={v.freeMin} tone="b" Icon={PackageCheck} label="Unloading at drop" sub="Starts again when the goods reach the drop." />
          </div>

          <p className="ftime__note">
            <Info size={15} />
            The customer and the driver see the same timer live in the app, so both know exactly where the time stands.
          </p>
        </div>
      </div>
    </section>
  );
}
