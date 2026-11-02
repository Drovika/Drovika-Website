// Light page header used on Services, Areas, About, Contact and Guides.
// With `art`, a picture sits on the right on wide screens (hidden on phones), so the hero never looks empty.
export default function PageHero({ eyebrow, title, lead, children, art }) {
  return (
    <section className={`phero${art ? ' phero--art' : ''}`}>
      <div className="phero__bg" aria-hidden="true" />
      <div className="wrap phero__in">
        <div className="phero__copy">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="h-display phero__title">{title}</h1>
          {lead ? <p className="lead phero__lead">{lead}</p> : null}
          {children}
        </div>
        {art ? <div className="phero__art">{art}</div> : null}
      </div>
    </section>
  );
}
