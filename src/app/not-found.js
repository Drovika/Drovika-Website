import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import VehicleArt from '@/components/VehicleArt';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap nf__in">
        <div className="nf__code">4<span>0</span>4</div>
        <div className="nf__truck"><VehicleArt slug="tata_ace" /></div>
        <h1>This road doesn&apos;t go anywhere.</h1>
        <p className="lead">The page you&apos;re looking for has moved or never existed. Let&apos;s get you back on route.</p>
        <Link href="/" className="btn btn--lime">Back to home <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
