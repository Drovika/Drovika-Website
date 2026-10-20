import Link from 'next/link';
import Legal from '@/components/Legal';
import { site } from '@/config/site';

export const metadata = { title: 'Terms of use', description: 'The terms for using the Drovika and Drovika Partner apps.', alternates: { canonical: '/terms/' } };

export default function Terms() {
  return (
    <Legal title="Terms of use" current="terms">
      <p>These terms apply when you use the Drovika or Drovika Partner apps, run by {site.name}.</p>
      <h2>What Drovika does</h2>
      <p>Drovika connects customers who need goods moved with independent drivers who own or operate vehicles. Drivers are not employees of Drovika.</p>
      <h2>Customers</h2>
      <ul>
        <li>Give correct pickup, drop and contact details, and describe your goods honestly.</li>
        <li>Do not send illegal, dangerous, or prohibited goods (for example explosives, drugs, weapons, or anything banned by law).</li>
        <li>The fare shown before booking includes tolls. Each vehicle has free waiting time for loading and unloading; after that, a per-minute waiting charge is added.</li>
        <li>Pay in one of two ways: <b>Cash</b> (cash or UPI paid straight to the driver after delivery) or <b>Drovika Wallet</b> (money added in the app; the fare is taken from it when you book).</li>
        <li>You can cancel free of charge before the trip starts. If you are not at the pickup, the driver may cancel after waiting; you will be asked in the app whether you were there, and repeated cases are checked by our team.</li>
        <li>Refunds and Drovika Wallet rules are explained in our <Link href="/refund/">Refund and cancellation policy</Link>.</li>
      </ul>
      <h2>Drivers</h2>
      <ul>
        <li>Keep your licence, vehicle papers, permits and insurance valid, and follow traffic laws.</li>
        <li>Handle goods with care and deliver them to the drop location shown in the app.</li>
        <li>Drovika keeps a commission on each trip, shown in the app. Commission on cash trips must be paid to Drovika; accounts with large unpaid dues stop receiving trips.</li>
        <li>Cancelling trips after accepting them affects your cancellation score. Repeated cancellations without a valid reason can pause new trips for some time; the reason and time are shown in the app.</li>
        <li>Drovika may block accounts for fake documents, misbehaviour, fraud or repeated complaints.</li>
      </ul>
      <h2>Liability</h2>
      <p>Drovika is a technology platform. To the extent the law allows, Drovika is not responsible for loss or damage caused by a driver or customer, but we will help resolve complaints raised through support.</p>
      <h2>Contact</h2>
      <p><a href={`mailto:${site.email}`}>{site.email}</a> · {site.phone}</p>
    </Legal>
  );
}
