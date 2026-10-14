'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Fades sections in as you scroll. Any element with class "rv" animates once it comes into view.
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    document.documentElement.classList.add('js');
    let io;
    const t = setTimeout(() => {
      const els = document.querySelectorAll('.rv:not(.in)');
      if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
      els.forEach((e) => io.observe(e));
    }, 30);
    return () => { clearTimeout(t); if (io) io.disconnect(); };
  }, [path]);
  return null;
}
