import '@fontsource/baloo-2/800.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@/styles/base.css';
import '@/styles/home.css';
import '@/styles/pages.css';
import '@/styles/refine.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { fromPrice, site } from '@/config/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Drovika — Mini truck & tempo booking in Mumbai | Goods transport',
    template: '%s · Drovika',
  },
  description:
    `Book a 3 wheeler, Tata Ace, pickup, tempo or truck in Mumbai, Thane and Navi Mumbai in under a minute. Fixed price before you book, live tracking, verified drivers. Starting ₹${fromPrice}.`,
  keywords: ['mini truck booking Mumbai', 'tempo on rent Mumbai', 'goods transport Mumbai', 'house shifting Mumbai', 'Tata Ace booking', 'Porter alternative', 'Drovika'],
  applicationName: 'Drovika',
  openGraph: {
    type: 'website',
    siteName: 'Drovika',
    locale: 'en_IN',
    url: '/',
    title: 'Drovika — Goods transport across Mumbai',
    description: 'Mini trucks, tempos and trucks in minutes. Fixed fares, live tracking, verified drivers.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Drovika' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  alternates: { canonical: '/' },
};

export const viewport = {
  themeColor: '#0A3620',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  telephone: site.phone,
  email: site.email,
  areaServed: ['Mumbai', 'Thane', 'Navi Mumbai'],
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  priceRange: '₹₹',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
