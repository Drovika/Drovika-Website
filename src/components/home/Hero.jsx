import Link from 'next/link';
import { ArrowRight, BadgeCheck, Gift, IndianRupee, Navigation, ShieldCheck } from 'lucide-react';
import { fromPrice, site } from '@/config/site';
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
      {b.map(([x, y, w]) => <rect key={x} x={x} y={y} width={w} height={100 - y} fill="#fff" opacity=".045" />)}
      {b.map(([x, y, w]) => [0, 1, 2, 3].filter((r) => y + 8 + r * 13 < 92).map((r) => (
        <rect key={`${x}-${r}`} x={x + 5} y={y + 8 + r * 13} width={w - 10} height="3" rx="1.5" fill="#C6E66B" opacity=".07" />
      )))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__grid" />
      </div>
      <div className="wrap hero__row">
        <div className="hero__copy">
          <span className="hero__pill"><i />Made for Mumbai · Thane · Navi Mumbai</span>
          <h1 className="h-display hero__title">
            Move anything across Mumbai, <span className="hero__lime">in minutes.</span>
          </h1>
          <p className="hero__lead">
            Book a 3 wheeler, Tata Ace, pickup, tempo or truck in under a minute — right now or for later. See the exact
            fare before you book, add stops on the way, track your goods live, and pay by cash or UPI.
          </p>
          <div className="hero__ctas">
            <StoreButton app="customer" />
            <Link href="/#fare" className="btn btn--ghost-light">See pricing <ArrowRight size={18} /></Link>
          </div>
          <ul className="hero__trust">
            <li><IndianRupee size={17} /> From <b>₹{fromPrice}</b></li>
            <li><ShieldCheck size={17} /> Verified drivers</li>
            <li><Navigation size={17} /> Live tracking</li>
            {site.firstTripOffer ? <li><Gift size={17} /> <b>{site.firstTripOffer}</b></li> : null}
          </ul>
        </div>
        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <PhoneMock />
          <div className="float float--a">
            <span className="float__ic"><IndianRupee size={18} /></span>
            <div><b>Fixed fare</b><small>Price locked before you book</small></div>
          </div>
          <div className="float float--b">
            <span className="float__ic float__ic--lime"><BadgeCheck size={18} /></span>
            <div><b>Verified driver</b><small>DL, RC &amp; ID checked</small></div>
          </div>
          <div className="float float--c">
            <span className="float__dot" />
            <div><b>Goods picked up</b><small>On the way to drop</small></div>
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
