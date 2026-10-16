import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, Lock, Timer } from 'lucide-react';
import { fromPrice, maxFreeMin, fmtMin, site, vehicles } from '@/config/site';
import PhoneMock from './PhoneMock';
import StoreButton from '../StoreButton';
import VehicleArt from '../VehicleArt';

function Skyline() {
  const b = [
    [0, 60, 40], [36, 34, 30], [62, 74, 34], [92, 20, 24], [112, 52, 40], [148, 6, 20], [164, 40, 34], [196, 64, 28],
    [220, 26, 38], [254, 56, 30], [280, 14, 22], [298, 46, 38], [332, 66, 30], [358, 30, 34], [388, 52, 34],
    [418, 10, 26], [440, 44, 36], [472, 62, 30], [498, 24, 40], [534, 50, 30], [560, 36, 36], [592, 68, 28],
  ];
  return (
    <svg className="hero__sky" viewBox="0 0 620 100" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {b.map(([x, y, w]) => <rect key={x} x={x} y={y} width={w} height={100 - y} fill="#fff" opacity=".04" />)}
      {b.map(([x, y, w]) => [0, 1, 2, 3].filter((r) => y + 8 + r * 13 < 92).map((r) => (
        <rect key={`${x}-${r}`} x={x + 5} y={y + 8 + r * 13} width={w - 10} height="3" rx="1.5" fill="#C6E66B" opacity=".06" />
      )))}
    </svg>
  );
}

const ace = vehicles.find((v) => v.slug === 'tata_ace');

export default function Hero() {
  const stats = [
    [`₹${fromPrice}`, 'starting fare'],
    [String(vehicles.length), 'vehicle sizes'],
    [`Up to ${fmtMin(maxFreeMin)}`, 'loading time included'],
    ['100%', 'verified drivers'],
  ];

  return (
    <section className="hero hero--p">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__grid" />
        <div className="grain" />
      </div>
      <div className="wrap hero__row">
        <div className="hero__copy">
          <span className="hero__pill">
            <em>New</em>Fair rules for customers and drivers
          </span>
          <h1 className="h-display hero__title">
            Move anything across Mumbai<span className="pn">,</span> <span className="it hero__lime">the fair way.</span>
          </h1>
          <p className="hero__lead">
            Book a 3 wheeler, Tata Ace, pickup, tempo or truck in under a minute. One fixed fare, loading and unloading
            time included, and clear rules that are fair to you and to the driver who carries your goods.
          </p>
          <div className="hero__ctas">
            <StoreButton app="customer" />
            <Link href="/#promise" className="btn btn--ghost-light">The Drovika promise <ArrowRight size={18} /></Link>
          </div>
          <dl className="hstats">
            {stats.map(([n, l]) => (
              <div key={l}><dt>{n}</dt><dd>{l}</dd></div>
            ))}
          </dl>
          {site.firstTripOffer ? <p className="hero__offer"><Check size={15} /> {site.firstTripOffer}</p> : null}
        </div>
        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <PhoneMock />
          <div className="float float--a">
            <span className="float__ic"><Lock size={18} /></span>
            <div><b>Fare locked</b><small>No bargaining, either side</small></div>
          </div>
          <div className="float float--b">
            <span className="float__ic float__ic--lime"><Timer size={18} /></span>
            <div><b>{ace.freeMin} min loading time</b><small>included · {ace.freeMin} min to unload</small></div>
          </div>
          <div className="float float--c">
            <span className="float__ic float__ic--ghost"><BadgeCheck size={18} /></span>
            <div><b>Verified driver</b><small>Licence, RC &amp; ID checked</small></div>
          </div>
        </div>
      </div>
      <div className="hero__road" aria-hidden="true">
        <Skyline />
        <div className="hero__lane" />
        <div className="hero__truck"><VehicleArt slug="tempo" /></div>
      </div>
    </section>
  );
}
