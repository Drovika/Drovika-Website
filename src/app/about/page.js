import Link from 'next/link';
import { Eye, Target, Heart, IndianRupee, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import VehicleArt from '@/components/VehicleArt';
import { site } from '@/config/site';

export const metadata = {
  title: 'About Drovika — Goods transport built for Mumbai',
  description: 'Drovika is a Mumbai-born goods transport platform connecting people and businesses with verified mini truck, tempo and truck owners.',
  alternates: { canonical: '/about/' },
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Drovika"
        title={<>Moving Mumbai, <span className="hl">one load</span> at a time.</>}
        lead="Drovika makes booking a mini truck as easy as booking a cab — with honest prices for customers and fair earnings for the people behind the wheel."
      />

      <section className="sec about">
        <div className="wrap about__row">
          <div className="about__story rv">
            <h2 className="h-section">Why we started</h2>
            <p>Anyone who has moved house or run a shop in Mumbai knows the drill: calling tempo stands, haggling over price, waiting with no idea when the vehicle will arrive, and hoping your goods reach in one piece.</p>
            <p>Meanwhile, thousands of vehicle owners spend hours waiting for their next trip. Drovika connects the two through two simple apps — <b>Drovika</b> for customers and <b>Drovika Partner</b> for drivers — with the price fixed before the trip starts and every move tracked live.</p>
            <p>We are a small, Mumbai-based team{site.udyam ? ' and a registered MSME (Udyam)' : ''}, building Drovika for the city we live in.</p>
          </div>
          <div className="about__art rv" style={{ '--d': '.1s' }}>
            <div className="about__card about__card--a"><VehicleArt slug="tempo" /></div>
            <div className="about__card about__card--b"><VehicleArt slug="tata_ace" /></div>
            <div className="about__badge"><b>4</b><span>vehicle types<br />ready to book</span></div>
          </div>
        </div>
      </section>

      <section className="sec mv">
        <div className="wrap mv__grid">
          {[
            [Target, 'Our mission', 'Make goods transport in Indian cities simple, transparent and safe for everyone.'],
            [Eye, 'Our vision', 'A city where moving anything is one tap away — and every driver earns with dignity.'],
          ].map(([Icon, t, d], i) => (
            <article key={t} className={`mv__card rv ${i ? 'mv__card--dark' : ''}`} style={{ '--d': `${i * 0.1}s` }}>
              <span className="bx__ic"><Icon size={22} /></span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sec values">
        <div className="wrap">
          <div className="sec__head sec__head--center rv">
            <span className="eyebrow">What we stand for</span>
            <h2 className="h-section">Our values</h2>
          </div>
          <div className="dperks">
            {[
              [IndianRupee, 'Honest pricing', 'The fare is shown before you book. No haggling, no surprises.'],
              [ShieldCheck, 'Safety first', 'Verified drivers, OTP-secured pickups and live tracking on every trip.'],
              [Users, 'Fair to drivers', 'A fair service fee, with earnings drivers can see before every trip.'],
              [Heart, 'Care for your goods', 'We treat every load like it belongs to our own family.'],
            ].map(([Icon, t, d], i) => (
              <article key={t} className="dperk rv" style={{ '--d': `${i * 0.08}s` }}>
                <span className="bx__ic"><Icon size={22} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec cta-band">
        <div className="wrap">
          <div className="cta rv">
            <h2 className="h-section">Let&apos;s move something together.</h2>
            <p>Questions, partnerships or business deliveries — we&apos;d love to hear from you.</p>
            <div className="cta__btns">
              <Link href="/contact/" className="btn btn--lime">Contact us <ArrowRight size={18} /></Link>
              <Link href="/drivers/" className="btn btn--ghost-light">Drive with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
