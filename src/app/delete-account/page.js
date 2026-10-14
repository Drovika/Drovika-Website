import Legal from '@/components/Legal';
import { site } from '@/config/site';

export const metadata = { title: 'Delete your account', description: 'How to delete your Drovika or Drovika Partner account.', alternates: { canonical: '/delete-account/' } };

export default function DeleteAccount() {
  return (
    <Legal title="Delete your Drovika account" current="delete">
      <p>You can delete your account yourself from the app. It takes effect immediately.</p>
      <div className="legal__card"><b>Drovika (customers):</b> open the app → <b>Profile</b> → <b>Delete account</b> → confirm.</div>
      <div className="legal__card"><b>Drovika Partner (drivers):</b> open the app → <b>Profile</b> → <b>Delete account</b> → confirm. Before deleting, finish any ongoing trip and pay any commission dues. If Drovika owes you money, contact support for your payout first.</div>
      <h2>Can&apos;t open the app?</h2>
      <p>Email <b><a href={`mailto:${site.email}?subject=Delete%20my%20account`}>{site.email}</a></b> from any address with the subject <b>&ldquo;Delete my account&rdquo;</b> and your registered mobile number. We will confirm with an OTP on that number and delete the account within 7 days.</p>
      <h2>What is deleted</h2>
      <ul><li>Your name, email, profile photo and saved addresses</li><li>Your mobile number is removed from the account</li><li>Drivers: all uploaded documents and vehicle details</li></ul>
      <h2>What we keep</h2>
      <p>Trip and payment records (amounts, dates, places) are kept without your name or number, because tax and accounting laws require it.</p>
    </Legal>
  );
}
