'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './BrandMark';

const NAV = [
  { href: '/#vehicles', label: 'Vehicles' },
  { href: '/#fare', label: 'Pricing' },
  { href: '/#how', label: 'How it works' },
  { href: '/drivers/', label: 'Drive with us' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  // Pages with a dark green hero start with a see-through header
  const darkTop = path === '/' || path === '/drivers/' || path === '/drivers';

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
        <Link href="/" aria-label="Drovika home" className="hdr__brand">
          <Logo light={light} size={38} />
        </Link>
        <nav className="hdr__nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? 'is-active' : ''}>{n.label}</Link>
          ))}
        </nav>
        <div className="hdr__cta">
          <Link href="/#download" className="btn btn--lime btn--sm">
            Get the app <ArrowRight size={16} />
          </Link>
          <button className="hdr__burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
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
          <Link href="/#download" className="btn btn--lime btn--block" onClick={() => setOpen(false)}>Get the Drovika app</Link>
        </nav>
      </div>
    </header>
  );
}
