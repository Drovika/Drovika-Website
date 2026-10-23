'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './BrandMark';
import { LangMenu, LangCards, splitPath } from './LangSwitch';
import { pick, lp } from '@/lib/i18n';

const HREFS = ['/#vehicles', '/#fare', '/#how', '/drivers/', '/about/', '/contact/'];
const T = {
  en: { nav: ['Vehicles', 'Pricing', 'How it works', 'Drive with us', 'About', 'Contact'], get: 'Get the app', getFull: 'Get the Drovika app', home: 'Drovika home', open: 'Open menu', close: 'Close menu' },
  hi: { nav: ['गाड़ियाँ', 'किराया', 'कैसे काम करता है', 'ड्राइवर बनें', 'हमारे बारे में', 'संपर्क'], get: 'ऐप डाउनलोड करें', getFull: 'Drovika ऐप डाउनलोड करें', home: 'Drovika होम', open: 'मेन्यू खोलें', close: 'मेन्यू बंद करें' },
  mr: { nav: ['गाड्या', 'भाडे', 'कसे काम करते', 'ड्रायव्हर व्हा', 'आमच्याबद्दल', 'संपर्क'], get: 'ॲप डाउनलोड करा', getFull: 'Drovika ॲप डाउनलोड करा', home: 'Drovika होम', open: 'मेन्यू उघडा', close: 'मेन्यू बंद करा' },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const { lang, rest } = splitPath(path);
  const t = pick(T, lang);
  const NAV = HREFS.map((h, i) => ({ href: lp(lang, h), label: t.nav[i] }));
  // Pages with a dark green hero start with a see-through header
  const darkTop = rest === '/' || rest === '/drivers/' || rest === '/drivers';

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const light = darkTop && !scrolled && !open;
  return (
    <header className={`hdr ${light ? 'hdr--clear' : 'hdr--solid'} ${open ? 'hdr--open' : ''}`}>
      <div className="wrap hdr__row">
        <Link href={lp(lang, '/')} aria-label={t.home} className="hdr__brand">
          <Logo light={light} size={38} />
        </Link>
        <nav className="hdr__nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? 'is-active' : ''}>{n.label}</Link>
          ))}
        </nav>
        <div className="hdr__cta">
          <LangMenu light={light} />
          <Link href={lp(lang, '/#download')} className="btn btn--lime btn--sm">
            {t.get} <ArrowRight size={16} />
          </Link>
          <button className="hdr__burger" aria-label={open ? t.close : t.open} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className="hdr__sheet" hidden={!open}>
        <nav className="wrap" aria-label="Mobile">
          {NAV.map((n, i) => (
            <Link key={n.href} href={n.href} style={{ '--i': i }} onClick={() => setOpen(false)}>
              {n.label} <ArrowRight size={18} />
            </Link>
          ))}
          <div className="hdr__langs"><span>Language · भाषा</span><LangCards /></div>
          <Link href={lp(lang, '/#download')} className="btn btn--lime btn--block" onClick={() => setOpen(false)}>{t.getFull}</Link>
        </nav>
      </div>
    </header>
  );
}
