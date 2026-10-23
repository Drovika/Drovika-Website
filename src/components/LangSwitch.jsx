'use client';
// English · हिंदी · मराठी. Each language has its own address (/, /hi/, /mr/) so Google shows the right one.
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Languages, Check, ChevronDown } from 'lucide-react';

export const LANGS = [
  { code: 'en', short: 'EN', name: 'English', prefix: '' },
  { code: 'hi', short: 'हिं', name: 'हिंदी', prefix: '/hi' },
  { code: 'mr', short: 'मरा', name: 'मराठी', prefix: '/mr' },
];

export function splitPath(path = '/') {
  const m = path.match(/^\/(hi|mr)(\/.*)?$/);
  return m ? { lang: m[1], rest: m[2] || '/' } : { lang: 'en', rest: path || '/' };
}
const hrefFor = (l, rest) => `${l.prefix}${rest}` || '/';

// Compact pill for the header: EN | हिं | मरा
export function LangPill({ light = false }) {
  const { lang, rest } = splitPath(usePathname());
  return (
    <div className={`lang ${light ? 'lang--light' : ''}`} role="group" aria-label="Language">
      <Languages size={15} className="lang__ic" aria-hidden="true" />
      {LANGS.map((l) => (
        <Link key={l.code} href={hrefFor(l, rest)} hrefLang={l.code} lang={l.code}
          className={l.code === lang ? 'is-on' : ''} aria-current={l.code === lang ? 'true' : undefined} title={l.name}>
          {l.short}
        </Link>
      ))}
    </div>
  );
}

// A language change loads the new page fresh (plain <a>), so the right fonts and spacing apply at once, with no flash
const SUB = { en: 'Default', hi: 'Hindi', mr: 'Marathi' };
const GLYPH = { en: 'A', hi: 'अ', mr: 'म' };

// Desktop header: language button (icon + current language) → dropdown with the full names. English is the default.
export function LangMenu({ light = false }) {
  const { lang, rest } = splitPath(usePathname());
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  const cur = LANGS.find((l) => l.code === lang) || LANGS[0];
  return (
    <div className={`lmenu ${light ? 'lmenu--light' : ''} ${open ? 'is-open' : ''}`} ref={ref}>
      <button type="button" className="lmenu__btn" aria-haspopup="menu" aria-expanded={open} aria-label={`Language: ${cur.name}`} onClick={() => setOpen((v) => !v)}>
        <Languages size={17} className="lmenu__ic" />
        <span className="lmenu__cur" lang={cur.code}>{cur.short}</span>
        <ChevronDown size={14} className="lmenu__chev" />
      </button>
      {open ? (
        <div className="lmenu__list" role="menu">
          <span className="lmenu__head">Choose language · भाषा चुनें</span>
          {LANGS.map((l) => (
            <a key={l.code} href={hrefFor(l, rest)} hrefLang={l.code} lang={l.code} role="menuitem"
              className={l.code === lang ? 'is-on' : ''} aria-current={l.code === lang ? 'true' : undefined}>
              <i className="lmenu__glyph" aria-hidden="true">{GLYPH[l.code]}</i>
              <span className="lmenu__txt"><b>{l.name}</b><small>{SUB[l.code]}</small></span>
              <span className="lmenu__tick" aria-hidden="true">{l.code === lang ? <Check size={14} strokeWidth={3} /> : null}</span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

// Big buttons for the mobile menu
export function LangCards({ dark = false }) {
  const { lang, rest } = splitPath(usePathname());
  return (
    <div className={`langc ${dark ? 'langc--dark' : ''}`} role="group" aria-label="Language">
      {LANGS.map((l) => (
        <a key={l.code} href={hrefFor(l, rest)} hrefLang={l.code} lang={l.code} className={l.code === lang ? 'is-on' : ''} aria-current={l.code === lang ? 'true' : undefined}>
          <b>{l.name}</b><small>{l.code === 'en' ? 'Default' : SUB[l.code]}</small>
        </a>
      ))}
    </div>
  );
}

// Keeps <html lang> right when moving between pages inside the site (back/forward, links)
export function HtmlLang() {
  const { lang } = splitPath(usePathname());
  useEffect(() => {
    document.documentElement.lang = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' }[lang];
  }, [lang]);
  return null;
}
