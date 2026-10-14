import Link from 'next/link';
import Legal from '@/components/Legal';
import { site } from '@/config/site';

export const metadata = { title: 'Privacy policy', description: 'How Drovika collects, uses and protects your data.', alternates: { canonical: '/privacy/' } };

export default function Privacy() {
  return (
    <Legal title="Privacy policy" current="privacy">
      <p>{site.name} (&ldquo;Drovika&rdquo;, &ldquo;we&rdquo;) runs the <b>Drovika</b> app for customers who book goods transport and the <b>Drovika Partner</b> app for drivers. This policy explains what we collect, why, and the choices you have.</p>

      <h2>What we collect</h2>
      <div className="legal__table">
        <table>
          <thead><tr><th>Data</th><th>From</th><th>Why</th></tr></thead>
          <tbody>
            <tr><td>Mobile number, name, email (optional)</td><td>Customers, drivers</td><td>Login with OTP, your profile, contacting you about a trip</td></tr>
            <tr><td>Pickup and drop addresses, saved addresses, contact name and number at pickup/drop</td><td>Customers</td><td>To run the booking and let the driver reach the right person</td></tr>
            <tr><td>Location while you pick a place on the map</td><td>Customers</td><td>To fill in your pickup address. Only when you use the map or &ldquo;use my location&rdquo;.</td></tr>
            <tr><td><b>Precise location, including in the background</b>, while you are online or on a trip</td><td>Drivers</td><td>To send you nearby trip requests and show the customer where their goods are. Location is not collected when you are offline.</td></tr>
            <tr><td>Driving licence, vehicle RC, Aadhaar, PAN, vehicle photo, bank details</td><td>Drivers</td><td>To verify drivers before they can take trips, and to pay drivers</td></tr>
            <tr><td>Trip details, fares, ratings and reviews</td><td>Both</td><td>To run trips, calculate fares and earnings, handle support and disputes</td></tr>
            <tr><td>Payment status and payment ids</td><td>Both</td><td>Online payments are handled by Razorpay. We never see or store your card, UPI PIN or bank login.</td></tr>
            <tr><td>Push notification token</td><td>Both</td><td>To send trip alerts and updates</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Who we share it with</h2>
      <ul>
        <li><b>The other side of your trip:</b> the customer sees the driver&apos;s name, phone, photo, vehicle number and live location during the trip; the driver sees the customer&apos;s name, phone and the pickup/drop details.</li>
        <li><b>Service providers</b> that help us run Drovika: Razorpay (payments), Meta WhatsApp and MSG91 (OTP messages), map providers such as Ola Maps, Google Maps and OpenStreetMap (address search and maps), Expo and Google Firebase (push notifications), and our cloud hosting provider. They may only use the data to provide their service to us.</li>
        <li><b>Authorities</b> when the law requires it, or to protect the safety of our users.</li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2>How long we keep it</h2>
      <p>We keep your account data while your account is active. Trip and payment records are kept as long as Indian tax and other laws require, even after you delete your account, without your name and contact details. Driver documents are deleted when the driver deletes their account.</p>

      <h2>Your choices</h2>
      <ul>
        <li>Update your name and email in the app&apos;s Profile.</li>
        <li>Turn off location permission in your phone settings (drivers cannot receive trips without it).</li>
        <li><b>Delete your account</b> any time from the app (Profile → Delete account) or as described on the <Link href="/delete-account/">account deletion page</Link>.</li>
      </ul>

      <h2>Security</h2>
      <p>Data is sent over encrypted connections. Driver documents are kept private and are only seen by our verification team.</p>

      <h2>Children</h2>
      <p>Drovika is for people aged 18 and above.</p>

      <h2>Contact and grievance officer</h2>
      <div className="legal__card">
        <b>Grievance officer:</b> {site.grievanceOfficer}<br />
        <b>Email:</b> <a href={`mailto:${site.email}`}>{site.email}</a><br />
        <b>Phone:</b> {site.phone}<br />
        <b>Address:</b> {site.address}
      </div>
      <p>We will reply within 30 days. We may update this policy; the date at the top shows the latest version.</p>
    </Legal>
  );
}
