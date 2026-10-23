import Link from 'next/link';
import { Banknote, MapPin, CalendarClock, Landmark, House, Milestone, Smartphone, FileText, BadgeCheck, Navigation, Check, Plus, ArrowRight, Phone, Lock, Route, Zap, UserX, Camera, Wrench, Timer } from 'lucide-react';
import StoreButton, { WhatsAppIcon } from '@/components/StoreButton';
import VehicleArt from '@/components/VehicleArt';
import { vehicles, waLink, telLink, site } from '@/config/site';
import { pick, lp } from '@/lib/i18n';
import { DRIVERS_T } from './DriversText';

const PERK_IC = [Banknote, MapPin, CalendarClock, Landmark, House, Milestone];
const STEP_IC = [Smartphone, FileText, BadgeCheck, Navigation];
// Fair rules for partners — must match Admin → Cancellations → Rules
const FAIR_IC = [Zap, UserX, Camera, Wrench, Timer];

export default function DriversView({ lang = 'en' }) {
  const t = pick(DRIVERS_T, lang);
  const STEPS = t.steps.map(([a, d], i) => [STEP_IC[i], a, d]);
  const FAIR = t.fair.map(([a, d], i) => [FAIR_IC[i], a, d]);
  const QA = t.qa;
  const DOCS = t.docs;
  const dot = lang === 'hi' ? '।' : '.';
  return (
    <>
      <section className="hero hero--p dhero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__glow hero__glow--a" />
          <div className="hero__glow hero__glow--b" />
          <div className="hero__grid" />
          <div className="grain" />
        </div>
        <div className="wrap dhero__row">
          <div className="dhero__copy">
            <span className="hero__pill"><i />{t.pill}</span>
            <h1 className="h-display hero__title">{t.h1a}<span className="pn">{dot}</span> {t.h1b}<span className="pn">{dot}</span> <span className="hero__lime it">{t.h1c}</span></h1>
            <p className="hero__lead">{t.lead}</p>
            <div className="hero__ctas">
              <StoreButton app="partner" label={t.app} lang={lang} />
              <a href={waLink(t.waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light"><WhatsAppIcon size={18} /> {t.ask}</a>
            </div>
          </div>
          <div className="offer rv" aria-label={t.offerAria}>
            <div className="offer__top">
              <span className="offer__new"><i />{t.newTrip}</span>
              <span className="offer__timer">18</span>
            </div>
            <small className="offer__lbl">{t.youEarn}</small>
            <div className="offer__earn"><span>₹ • • •</span><em><Lock size={12} /> {t.shown}</em></div>
            <div className="offer__chips">
              <div><Navigation size={16} /><b>0.5 km</b><small>{t.toPickup}</small></div>
              <div><Route size={16} /><b>10 km</b><small>{t.trip}</small></div>
              <div><Milestone size={16} /><b>2</b><small>{t.stops}</small></div>
            </div>
            <div className="offer__route">
              <div><i className="dot dot--p" /><span><small>{t.pickup}</small>Andheri East</span></div>
              <div><i className="dot dot--d" /><span><small>{t.drop}</small>Bandra West</span></div>
            </div>
            <div className="offer__slide"><span className="offer__knob"><Check size={20} /></span>{t.slide}</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec__head sec__head--center rv">
            <span className="eyebrow">{t.whyEb}</span>
            <h2 className="h-section">{t.whyH1}<span className="it">{t.whyH2}</span></h2>
          </div>
          <div className="dperks dperks--6">
            {t.perks.map(([a, d], i) => [PERK_IC[i], a, d]).map(([Icon, title, d], i) => (
              <article key={title} className="dperk rv" style={{ '--d': `${i * 0.08}s` }}>
                <span className="bx__ic"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec fair" id="fair">
        <div className="wrap fair__row">
          <div className="rv">
            <span className="eyebrow">{t.fairEb}</span>
            <h2 className="h-section">{t.fairH1}<span className="it">{t.fairH2}</span></h2>
            <p className="lead">{t.fairLead}</p>
            <ul className="fair__list">
              {FAIR.map(([Icon, title, d]) => (
                <li key={title}><span><Icon size={19} /></span><div><b>{title}</b><p>{d}</p></div></li>
              ))}
            </ul>
          </div>
          <div className="score rv" style={{ '--d': '.1s' }} aria-label={t.scoreAria}>
            <div className="grain" aria-hidden="true" />
            <div className="score__top"><small>{t.scoreTop}</small><span className="score__badge">{t.excellent}</span></div>
            <div className="score__big">3%<small>{t.scoreSub}</small></div>
            <div className="score__bar"><i /></div>
            <div className="score__legend">
              <div><b>0–5%</b><small>{t.lg[0][0]}</small></div>
              <div><b>5–15%</b><small>{t.lg[1][0]}</small></div>
              <div><b>15–25%</b><small>{t.lg[2][0]}</small></div>
              <div><b>25%+</b><small>{t.lg[3][0]}</small></div>
            </div>
            <p className="score__note">{t.scoreNote}</p>
          </div>
        </div>
      </section>

      <section className="sec join">
        <div className="wrap join__row">
          <div className="rv">
            <span className="eyebrow">{t.joinEb}</span>
            <h2 className="h-section join__title">{t.joinH}<span className="pn">{dot}</span></h2>
            <ol className="join__steps">
              {STEPS.map(([Icon, title, d], i) => (
                <li key={title}>
                  <span className="join__n"><Icon size={20} /></span>
                  <div><b><em>{t.step(i + 1)}</em>{title}</b><p>{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="docs rv" style={{ '--d': '.1s' }}>
            <h3>{t.ready}</h3>
            <ul>{DOCS.map((d) => <li key={d}><Check size={18} />{d}</li>)}</ul>
            <div className="docs__veh">
              <span>{t.vehAcc}</span>
              <div>{vehicles.map((v) => <figure key={v.slug}><VehicleArt slug={v.slug} /><figcaption>{v.name}</figcaption></figure>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec faq">
        <div className="wrap faq__row">
          <div className="faq__head rv">
            <span className="eyebrow">{t.faqEb}</span>
            <h2 className="h-section">{t.faqH}<span className="pn">{dot}</span></h2>
            <p className="lead">{t.faqLead}<a className="nowrap" href={telLink()}>{t.call} {site.phone}</a></p>
          </div>
          <div className="faq__list">
            {QA.map(([q, a], i) => (
              <details key={q} className="qa rv" open={i === 0}>
                <summary>{q}<span className="qa__ic"><Plus size={20} /></span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec cta-band">
        <div className="wrap">
          <div className="cta rv">
            <h2 className="h-section">{t.ctaH}<span className="pn">?</span></h2>
            <p>{t.ctaP}</p>
            <div className="cta__btns">
              <StoreButton app="partner" lang={lang} />
              <a href={telLink()} className="btn btn--ghost-light"><Phone size={18} /> {t.talk}</a>
              <Link href={lp(lang, '/')} className="cta__link">{t.self} <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
