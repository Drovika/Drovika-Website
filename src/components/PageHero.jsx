// Light page header used on About, Contact and the legal pages.
export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="phero">
      <div className="phero__bg" aria-hidden="true" />
      <div className="wrap phero__in">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="h-display phero__title">{title}</h1>
        {lead ? <p className="lead phero__lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
