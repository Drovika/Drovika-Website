import Link from 'next/link';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Logo } from './BrandMark';
import StoreButton, { WhatsAppIcon } from './StoreButton';
import { site, waLink, telLink } from '@/config/site';

const SOCIAL = [
  ['instagram', 'Instagram'], ['facebook', 'Facebook'], ['linkedin', 'LinkedIn'], ['x', 'X'],
].filter(([k]) => site[k]);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__brand">
            <Logo light size={42} />
            <p>Mini trucks, pickups, tempos and trucks for anything you need moved across Mumbai — booked in a minute, tracked live, priced up front.</p>
            <div className="ftr__stores">
              <StoreButton app="customer" dark={false} />
            </div>
          </div>
          <div className="ftr__col">
            <h4>Company</h4>
            <Link href="/about/">About us</Link>
            <Link href="/drivers/">Drive with Drovika</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/#faq">FAQs</Link>
          </div>
          <div className="ftr__col">
            <h4>Services</h4>
            <Link href="/#vehicles">Mini truck on rent</Link>
            <Link href="/#vehicles">House shifting</Link>
            <Link href="/#vehicles">Shop &amp; business deliveries</Link>
            <Link href="/#safety">Safety &amp; security</Link>
            
          </div>
          <div className="ftr__col">
            <h4>Reach us</h4>
            <a href={telLink()}><Phone size={16} /> {site.phone}</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp us</a>
            <a href={`mailto:${site.email}`}><Mail size={16} /> {site.email}</a>
            <span><Clock size={16} /> {site.hours}</span>
            <span><MapPin size={16} /> {site.address}</span>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>© {year} {site.name}. All rights reserved.{site.udyam ? ' · Udyam registered MSME' : ''}</span>
          <nav>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
            <Link href="/delete-account/">Delete account</Link>
            {SOCIAL.map(([k, l]) => <a key={k} href={site[k]} target="_blank" rel="noopener noreferrer">{l}</a>)}
          </nav>
        </div>
      </div>
      <div className="ftr__giant" aria-hidden="true">Drovika</div>
    </footer>
  );
}
