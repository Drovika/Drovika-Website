import Hero from '@/components/home/Hero';
import Vehicles from '@/components/home/Vehicles';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import Safety from '@/components/home/Safety';
import Features from '@/components/home/Features';
import ForWho from '@/components/home/ForWho';
import DriverBand from '@/components/home/DriverBand';
import Areas from '@/components/home/Areas';
import FAQ from '@/components/home/FAQ';
import Download from '@/components/home/Download';
import DrovikaPromise from '@/components/home/Promise';
import FreeTime from '@/components/home/FreeTime';

// The home page, in any language (/, /hi/, /mr/)
export default function HomeView({ lang = 'en' }) {
  return (
    <>
      <Hero lang={lang} />
      <DrovikaPromise lang={lang} />
      <Vehicles lang={lang} />
      <FreeTime lang={lang} />
      <HowItWorks lang={lang} />
      <Pricing lang={lang} />
      <Features lang={lang} />
      <Safety lang={lang} />
      <ForWho lang={lang} />
      <DriverBand lang={lang} />
      <Areas lang={lang} />
      <FAQ lang={lang} />
      <Download lang={lang} />
    </>
  );
}
