export function SectionIntro({ eyebrow, title, dark = false, children }) {
  const className = ['section-intro', dark && 'on-dark', !eyebrow && 'section-intro-no-eyebrow'].filter(Boolean).join(' ');

  return (
    <div className={className}>
      {eyebrow ? <div className="section-kicker"><span className="kicker-line" /> <span>{eyebrow}</span></div> : null}
      <div className="section-intro-row">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
