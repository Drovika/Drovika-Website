'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { splitPath } from './LangSwitch';
import { pick, lp } from '@/lib/i18n';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Logo } from './BrandMark';
import StoreButton, { WhatsAppIcon } from './StoreButton';
import { site, waLink, telLink } from '@/config/site';

const SOCIAL = [
  ['instagram', 'Instagram'], ['facebook', 'Facebook'], ['linkedin', 'LinkedIn'], ['x', 'X'],
].filter(([k]) => site[k]);

const T = {
  en: {
    about: 'Mini trucks, pickups, tempos and trucks for anything you need moved across Mumbai — booked in a minute, tracked live, priced up front.',
    company: 'Company', aboutUs: 'About us', drive: 'Drive with Drovika', contact: 'Contact', faq: 'FAQs',
    services: 'Services', s1: 'Mini truck on rent', s2: 'House shifting', s3: 'Shop & business deliveries', s4: 'Safety & security', s5: 'Pricing',
    reach: 'Reach us', wa: 'WhatsApp us', rights: 'All rights reserved.', msme: ' · Udyam registered MSME',
    privacy: 'Privacy', terms: 'Terms', refund: 'Refund & cancellation', del: 'Delete account', hours: null,
  },
  hi: {
    about: 'मुंबई में कुछ भी शिफ़्ट करना हो — मिनी ट्रक, पिकअप, टेम्पो और ट्रक। एक मिनट में बुकिंग, लाइव ट्रैकिंग, पहले से तय किराया।',
    company: 'कंपनी', aboutUs: 'हमारे बारे में', drive: 'Drovika के साथ ड्राइव करें', contact: 'संपर्क', faq: 'सवाल-जवाब',
    services: 'सेवाएँ', s1: 'किराए पर मिनी ट्रक', s2: 'घर की शिफ़्टिंग', s3: 'दुकान और बिज़नेस डिलीवरी', s4: 'सुरक्षा और भरोसा', s5: 'किराया',
    reach: 'हमसे संपर्क करें', wa: 'WhatsApp करें', rights: 'सर्वाधिकार सुरक्षित।', msme: ' · उद्यम रजिस्टर्ड MSME',
    privacy: 'Privacy', terms: 'Terms', refund: 'Refund & cancellation', del: 'Delete account', hours: 'हर दिन, सुबह 8 से रात 10 बजे तक',
  },
  mr: {
    about: 'मुंबईत काहीही हलवायचे असो — मिनी ट्रक, पिकअप, टेम्पो आणि ट्रक. एका मिनिटात बुकिंग, लाइव्ह ट्रॅकिंग, आधीच ठरलेले भाडे.',
    company: 'कंपनी', aboutUs: 'आमच्याबद्दल', drive: 'Drovika सोबत ड्राइव्ह करा', contact: 'संपर्क', faq: 'प्रश्नोत्तरे',
    services: 'सेवा', s1: 'भाड्याने मिनी ट्रक', s2: 'घराची शिफ्टिंग', s3: 'दुकान आणि व्यवसाय डिलिव्हरी', s4: 'सुरक्षा आणि विश्वास', s5: 'भाडे',
    reach: 'आमच्याशी संपर्क', wa: 'WhatsApp करा', rights: 'सर्व हक्क राखीव.', msme: ' · उद्यम नोंदणीकृत MSME',
    privacy: 'Privacy', terms: 'Terms', refund: 'Refund & cancellation', del: 'Delete account', hours: 'दररोज, सकाळी 8 ते रात्री 10',
  },
};

export default function Footer() {
  const { lang } = splitPath(usePathname());
  const t = pick(T, lang);
  const L = (h) => lp(lang, h);
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__brand">
            <Logo light size={42} />
            <p>{t.about}</p>
            <div className="ftr__stores">
              <StoreButton app="customer" dark={false} lang={lang} />
            </div>
          </div>
          <div className="ftr__col">
            <h4>{t.company}</h4>
            <Link href={L('/about/')}>{t.aboutUs}</Link>
            <Link href={L('/drivers/')}>{t.drive}</Link>
            <Link href={L('/contact/')}>{t.contact}</Link>
            <Link href={L('/#faq')}>{t.faq}</Link>
          </div>
          <div className="ftr__col">
            <h4>{t.services}</h4>
            <Link href={L('/#vehicles')}>{t.s1}</Link>
            <Link href={L('/#vehicles')}>{t.s2}</Link>
            <Link href={L('/#vehicles')}>{t.s3}</Link>
            <Link href={L('/#safety')}>{t.s4}</Link>
            <Link href={L('/#fare')}>{t.s5}</Link>
          </div>
          <div className="ftr__col">
            <h4>{t.reach}</h4>
            <a href={telLink()}><Phone size={16} /> {site.phone}</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> {t.wa}</a>
            <a href={`mailto:${site.email}`}><Mail size={16} /> {site.email}</a>
            <span><Clock size={16} /> {t.hours || site.hours}</span>
            <span><MapPin size={16} /> {site.address}</span>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>© {year} {site.name}. {t.rights}{site.udyam ? t.msme : ''}</span>
          <nav>
            <Link href="/privacy/">{t.privacy}</Link>
            <Link href="/terms/">{t.terms}</Link>
            <Link href="/refund/">{t.refund}</Link>
            <Link href="/delete-account/">{t.del}</Link>
            {SOCIAL.map(([k, l]) => <a key={k} href={site[k]} target="_blank" rel="noopener noreferrer">{l}</a>)}
          </nav>
        </div>
      </div>
      <div className="ftr__giant" aria-hidden="true">Drovika</div>
    </footer>
  );
}
