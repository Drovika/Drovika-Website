import '@fontsource/baloo-2/800.css';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/instrument-serif/400-italic.css';
import '@/styles/base.css';
import '@/styles/home.css';
import '@/styles/pages.css';
import '@/styles/refine.css';
import '@/styles/premium.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { HtmlLang } from '@/components/LangSwitch';
import { fromPrice, site } from '@/config/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Drovika — Mini truck & tempo booking in Mumbai | Goods transport',
    template: '%s · Drovika',
  },
  description:
    `Book a 3 wheeler, Tata Ace, pickup, tempo or truck in Mumbai, Thane, Navi Mumbai and up to Palghar in under a minute. Fixed price before you book, free cancellation, free loading and unloading time, live tracking and verified drivers. Starting ₹${fromPrice}.`,
  keywords: ['mini truck booking Mumbai', 'tempo on rent Mumbai', 'goods transport Mumbai', 'house shifting Mumbai', 'Tata Ace booking', 'Porter alternative', 'Drovika'],
  applicationName: 'Drovika',
  openGraph: {
    type: 'website',
    siteName: 'Drovika',
    locale: 'en_IN',
    url: '/',
    title: 'Drovika — Goods transport across Mumbai',
    description: 'Mini trucks, tempos and trucks in minutes. Fixed fares, free cancellation, free loading time and verified drivers.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Drovika' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  alternates: { canonical: '/' },
};

export const viewport = {
  themeColor: '#072A17',
  width: 'device-width',
  initialScale: 1,
};

// What Google reads about Drovika (company card, site name and logo in search results)
const sameAs = [site.instagram, site.facebook, site.linkedin, site.x].filter(Boolean);
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      alternateName: ['Drovika Mumbai', 'drovika.in'],
      url: `${site.url}/`,
      inLanguage: 'en-IN',
      publisher: { '@id': `${site.url}/#company` },
    },
    {
      '@type': ['Organization', 'MovingCompany'],
      '@id': `${site.url}/#company`,
      name: site.name,
      url: `${site.url}/`,
      logo: { '@type': 'ImageObject', url: `${site.url}/logo.png`, width: 512, height: 512 },
      image: `${site.url}/og.png`,
      description: `Book a 3 wheeler, Tata Ace, pickup, tempo or truck in Mumbai, Thane and Navi Mumbai. Fixed price before you book, live tracking and verified drivers. Starting ₹${fromPrice}.`,
      slogan: site.tagline,
      telephone: site.phone,
      email: site.email,
      areaServed: ['Mumbai', 'Thane', 'Navi Mumbai', 'Mira-Bhayandar', 'Vasai-Virar', 'Palghar', 'Bhiwandi', 'Kalyan', 'Dombivli', 'Ulhasnagar', 'Ambernath', 'Badlapur', 'Panvel', 'Uran'].map((n) => ({ '@type': 'City', name: n })),
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
      openingHours: 'Mo-Su 08:00-22:00',
      priceRange: `From ₹${fromPrice}`,
      contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', telephone: site.phone, email: site.email, areaServed: 'IN', availableLanguage: ['English', 'Hindi', 'Marathi'] }],
      ...(sameAs.length ? { sameAs } : {}),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Opened from the Drovika app (?app=1): the app shows its own header, so the site header and footer hide */}
        <script dangerouslySetInnerHTML={{ __html: "if(/[?&]app=1/.test(location.search))document.documentElement.classList.add('in-app')" }} />
        {/* Hindi and Marathi pages live under /hi/ and /mr/: tell the browser (and screen readers) which language the page is in */}
        {/* and start loading the Hindi/Marathi font straight away, so the page never shows the wrong font first */}
        <script dangerouslySetInnerHTML={{ __html: "var m=location.pathname.match(/^\\/(hi|mr)(\\/|$)/);if(m){document.documentElement.lang=m[1]+'-IN';[400,600,700].forEach(function(w){var l=document.createElement('link');l.rel='preload';l.as='font';l.type='font/woff2';l.crossOrigin='anonymous';l.href='/fonts/noto-deva-'+w+'.woff2';document.head.appendChild(l)})}" }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <HtmlLang />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
