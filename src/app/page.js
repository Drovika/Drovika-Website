import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
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

export default function Home() {
  return (
    <>
      <Hero />
      
      <Vehicles />
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
