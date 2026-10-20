import Link from 'next/link';

export const UPDATED = '20 October 2026';

export default function Legal({ title, children, current }) {
  return (
    <section className="legal">
      <div className="wrap legal__row">
        <aside className="legal__nav">
          <span>Legal</span>
          <Link href="/privacy/" className={current === 'privacy' ? 'is-on' : ''}>Privacy policy</Link>
          <Link href="/terms/" className={current === 'terms' ? 'is-on' : ''}>Terms of use</Link>
          <Link href="/refund/" className={current === 'refund' ? 'is-on' : ''}>Refund &amp; cancellation</Link>
          <Link href="/delete-account/" className={current === 'delete' ? 'is-on' : ''}>Delete account</Link>
        </aside>
        <article className="legal__doc">
          <h1>{title}</h1>
          <p className="legal__date">Last updated: {UPDATED}</p>
          {children}
        </article>
      </div>
    </section>
  );
}
