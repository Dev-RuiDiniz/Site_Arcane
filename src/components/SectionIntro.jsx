export function SectionIntro({ eyebrow, title, dark = false, children }) {
  return (
    <div className={`section-intro${dark ? ' on-dark' : ''}`}>
      <div className="section-kicker"><span className="kicker-line" /> <span>{eyebrow}</span></div>
      <div className="section-intro-row">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
