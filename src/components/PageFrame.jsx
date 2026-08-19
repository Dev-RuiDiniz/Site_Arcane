export function PageFrame({ eyebrow, title, intro, children }) {
  return (
    <main className="inner-page">
      <section className="inner-hero band-dark">
        <div className="section-kicker"><span className="kicker-line" /><span>{eyebrow}</span></div>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </section>
      {children}
    </main>
  );
}
