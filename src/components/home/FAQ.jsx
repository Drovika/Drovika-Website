import { Plus } from 'lucide-react';
import { site } from '@/config/site';

const QA = [
  ['How is the fare decided?', 'Your fare depends on the vehicle, the road distance, any stops on the way and the tolls on your route. The app shows the complete price before you confirm — no bargaining and no hidden charges.'],
  ['Is the price fixed or can it change?', 'The price you confirm is final. Tolls on your route are already included in it. Only parking fees, if any, are extra.'],
  ['Are tolls charged on every trip?', 'No. A toll is added only when your route actually passes a toll naka or toll bridge — like the Sea Link or Atal Setu. Small goods vehicles pay no toll at Mumbai\u2019s entry points, so most city trips have no toll at all.'],
  ['How do I pay?', 'Pay the driver in cash after delivery, or pay online in the app using UPI, cards or netbanking. Online payments are processed securely by Razorpay.'],
  ['Can I deliver to more than one place in one trip?', 'Yes. Add up to 3 stops between your pickup and final drop. The driver goes to each stop in order, and a small charge for each extra stop is included in the price you see before booking.'],
  ['Can I book for later?', 'Yes. Choose "Schedule" while booking and pick a day and time up to 7 days ahead. We start finding your driver 15 minutes before your pickup time and notify you. You can cancel a scheduled booking for free before it starts.'],
  ['Do you have offers?', `Yes. Offers and coupons appear on the booking screen in the app, and the discount is shown before you confirm.${site.firstTripOffer ? ` New customers get ${site.firstTripOffer.charAt(0).toLowerCase()}${site.firstTripOffer.slice(1)}.` : ''}`],
  ['Which areas do you cover?', 'Mumbai (Colaba to Dahisar and Mulund), Thane district (Thane, Mira-Bhayandar, Bhiwandi, Kalyan, Dombivli, Ulhasnagar, Ambernath, Badlapur, Titwala), Navi Mumbai (Vashi to Panvel, Taloja and Uran) and Vasai to Palghar. Your pickup, drop and any stops all need to be inside this zone. Places like Karjat, Alibag, Shahapur and Pune are not covered yet.'],
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
          <h2 className="h-section">Questions? Answers.</h2>
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
