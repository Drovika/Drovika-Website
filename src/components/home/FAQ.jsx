import { Plus } from 'lucide-react';
import { site, vehicles, fmtMin } from '@/config/site';

const QA = [
  ['How is the fare decided?', 'Your fare depends on the vehicle, the road distance, any stops on the way and the tolls on your route. The app shows the complete price before you confirm — no bargaining and no hidden charges.'],
  ['Is the price fixed or can it change?', 'The price you confirm is final. Tolls on your route are already included in it. Only waiting beyond the free time and parking fees, if any, are extra.'],
  ['Are tolls charged on every trip?', 'No. A toll is added only when your route actually passes a toll naka or toll bridge — like the Sea Link or Atal Setu. Small goods vehicles pay no toll at Mumbai\u2019s entry points, so most city trips have no toll at all.'],
  ...(site.freeCancel ? [['Is there a cancellation charge?', 'No. You can cancel without a fee; the app only asks for a reason. If the driver has already reached you, they get the next nearby trip first, so please cancel as early as you can if your plans change.']] : []),
  ['How much time is included for loading and unloading?', `Every booking includes one free time for loading and unloading together: ${vehicles.map((v) => `${v.name} ${fmtMin(v.freeMin)}`).join(', ')}. It starts when the driver reaches the pickup, pauses while driving, and goes on at the drop until delivery. After it, a small per-minute waiting charge is added, shown live in the app. The customer and the driver see the same timer.`],
  ['What if the driver marks "arrived" before reaching?', 'The app checks the driver\u2019s location. A driver can mark "arrived" only within 1 km of the pickup, so the free time never starts early. The same check happens at the drop.'],
  ['What if my driver can’t make it?', 'If a driver can’t come, or is not moving towards the pickup, we find another driver at the same fare. You can also tap "Get another driver" in the app.'],
  ['What if I am not at the pickup?', 'The driver waits 10 minutes after reaching. If you still can\u2019t be found, the driver can cancel, and the app asks you whether you were there. If you were, tap "No, I was there" and our team checks it.'],
  ['Can the fare change during the trip?', 'No. The customer pays the fare shown in the app, plus a waiting charge only if loading and unloading take longer than the free time. If anyone asks for a different amount, report it in the app or call us.'],
  ['How do I pay?', 'Two ways: Cash (cash or UPI paid straight to the driver after delivery), or Drovika Wallet (the fare is taken from your wallet balance when you book).'],
  ['What is Drovika Wallet?', 'A prepaid balance in the app, made for shops and businesses that book often. Add money once with UPI, card or netbanking (secured by Razorpay) and pay every booking from it. If a wallet booking is cancelled, the money comes back to your wallet straight away. Wallet money can be used only for Drovika bookings.'],
  ['What if something goes wrong during a trip?', 'Open the trip in the app and tap "Need help with this trip?". Ask Drovika to call you, or call or WhatsApp us directly. Our team sees your trip details and helps right away.'],
  ['Can I deliver to more than one place in one trip?', 'Yes. Add up to 3 stops between your pickup and final drop. The driver goes to each stop in order, and a small charge for each extra stop is included in the price you see before booking.'],
  ['Can I book for later?', 'Yes. Choose "Schedule" while booking and pick a day and time up to 7 days ahead. We start finding your driver 15 minutes before your pickup time and notify you. You can cancel a scheduled booking for free before it starts.'],
  ['Do you have offers?', `Yes. Offers and coupons appear on the booking screen in the app, and the discount is shown before you confirm.${site.firstTripOffer ? ` New customers get ${site.firstTripOffer.charAt(0).toLowerCase()}${site.firstTripOffer.slice(1)}.` : ''}`],
  ['Which areas do you cover?', 'All of Mumbai, the Thane district (Thane, Mira-Bhayandar, Bhiwandi, Kalyan, Dombivli, Ulhasnagar, Ambernath, Badlapur and Titwala), Navi Mumbai (Vashi to Panvel, Taloja and Uran) and the Vasai to Palghar belt. Your pickup, drop and every stop need to be inside this zone.'],
  ['What can I not send?', 'Illegal items, explosives, weapons, drugs, flammable chemicals and anything banned by law. Please describe your goods honestly while booking.'],
  ['How are drivers verified?', 'Every driver uploads their driving licence, vehicle RC, Aadhaar, PAN and a vehicle photo. Our team checks them before the driver can go online.'],
  ['I own a vehicle. How do I join as a driver?', 'Download the Drovika Partner app, sign up with your mobile number, upload your documents and vehicle details, and start taking trips once you are verified.'],
];

export default function FAQ() {
  return (
    <section className="sec faq" id="faq">
      <div className="wrap faq__row">
        <div className="faq__head rv">
          <span className="eyebrow">FAQs</span>
          <h2 className="h-section">Questions<span className="pn">?</span> Answers<span className="pn">.</span></h2>
          <p className="lead">Can&apos;t find what you&apos;re looking for? Call us at <a className="nowrap" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>.</p>
        </div>
        <div className="faq__list">
          {QA.map(([q, a], i) => (
            <details key={q} className="qa rv" style={{ '--d': `${i * 0.04}s` }} open={i === 0}>
              <summary>{q}<span className="qa__ic"><Plus size={20} /></span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: QA.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
    </section>
  );
}
