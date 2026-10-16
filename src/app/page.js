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

export default function Home() {
  return (
    <>
      <Hero />
      <DrovikaPromise />
      <Vehicles />
      <FreeTime />
      <HowItWorks />
      <Pricing />
      <Features />
      <Safety />
      <ForWho />
      <DriverBand />
      <Areas />
      <FAQ />
      <Download />
    </>
  );
}
