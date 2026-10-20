import Legal from '@/components/Legal';
import { site } from '@/config/site';

export const metadata = {
  title: 'Refund and cancellation policy',
  description: 'How cancellations, refunds, Drovika Wallet money and waiting charges work on Drovika.',
  alternates: { canonical: '/refund/' },
};

// Keep this page in line with the app rules (Admin → Cancellations → Rules, Fares & rules).
export default function Refund() {
  return (
    <Legal title="Refund and cancellation policy" current="refund">
      <p>This policy explains when a booking can be cancelled, when money is returned, and how long it takes. It applies to the Drovika app, run by {site.name}.</p>

      <h2>1. Cancelling a booking (customers)</h2>
      <ul>
        <li>You can cancel a booking from the app <b>free of charge</b> at any time before the trip starts (before the goods are loaded and the driver starts the trip). We only ask you to choose a reason.</li>
        <li>Once the trip has started, it cannot be cancelled from the app. Please contact support if something goes wrong during the trip.</li>
        <li>If a fee for late cancellation is added in future, it will be shown clearly in the app <b>before</b> you cancel. No fee is ever taken without being shown first.</li>
      </ul>

      <h2>2. When Drovika or the driver cancels</h2>
      <ul>
        <li>If the driver cancels, we look for another driver for you at the same fare. You do not pay anything extra.</li>
        <li>If no driver is found, the booking is cancelled automatically and you pay nothing.</li>
        <li>If the driver reports that you were not at the pickup, you will be asked in the app whether you were there. You can disagree and our team will check.</li>
      </ul>

      <h2>3. How you pay</h2>
      <ul>
        <li><b>Cash</b> — you pay the driver in cash or by UPI straight to the driver, after delivery. Nothing is taken in advance, so there is nothing to refund on a cancelled cash booking.</li>
        <li><b>Drovika Wallet</b> — the fare is taken from your wallet balance when you book.</li>
        <li>Money is added to the Drovika Wallet online through Razorpay (UPI, cards, net banking). Drovika never sees or stores your card details, UPI PIN or bank login.</li>
      </ul>

      <h2>4. Refunds</h2>
      <div className="legal__table">
      <table>
        <thead><tr><th>Situation</th><th>What you get back</th><th>Where and when</th></tr></thead>
        <tbody>
          <tr><td>Wallet booking cancelled before the trip starts</td><td>Full amount</td><td>Back to your Drovika Wallet, immediately</td></tr>
          <tr><td>No driver found for a wallet booking</td><td>Full amount</td><td>Back to your Drovika Wallet, immediately</td></tr>
          <tr><td>Paid twice, or money taken but payment failed</td><td>The extra amount</td><td>Back to the same bank account, card or UPI, within 5–7 working days after we confirm it</td></tr>
          <tr><td>Complaint about a trip (wrong charge, poor service) accepted by our team</td><td>As agreed with you</td><td>To your Drovika Wallet or original payment method, within 5–7 working days</td></tr>
        </tbody>
      </table>
      </div>
      <p>Bank refunds depend on your bank or card company; in rare cases they can take longer than 7 working days.</p>

      <h2>5. Drovika Wallet money</h2>
      <ul>
        <li>Wallet money can be used only for Drovika bookings. It cannot be transferred to another person.</li>
        <li>Wallet money is not paid out to a bank account in the normal course. If you are closing your account and have a balance left, write to us and we will return it to your original payment method after checking.</li>
        <li>You can see every top-up, booking and refund in the app under <b>Profile → Drovika Wallet</b>.</li>
      </ul>

      <h2>6. Waiting and other charges</h2>
      <ul>
        <li>Each vehicle includes free waiting time for loading and unloading, shown in the app before you book. After that, a per-minute waiting charge is added to the fare.</li>
        <li>For a Drovika Wallet booking, the waiting charge is taken from your wallet at delivery. If the balance is not enough, the rest is paid in cash to the driver.</li>
        <li>Tolls are included in the fare shown. Parking or other charges, if any, are shown in the trip bill.</li>
        <li>If you think a charge is wrong, tell us within 7 days of the trip and we will check the trip record.</li>
      </ul>

      <h2>7. How to ask for a refund or raise a complaint</h2>
      <ul>
        <li>In the app: open the trip and tap <b>Need help with this trip?</b></li>
        <li>Call or WhatsApp: {site.phone} ({site.hours})</li>
        <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a> with your booking code (for example DRV12345).</li>
      </ul>
      <p>We reply within 48 hours and try to resolve every complaint within 7 working days. Grievance officer: {site.grievanceOfficer}, {site.email}.</p>
    </Legal>
  );
}
