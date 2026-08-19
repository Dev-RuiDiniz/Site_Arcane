export function ArrowIcon({ direction = 'right' }) {
  const rotation = direction === 'left' ? 'rotate(180 12 12)' : undefined;
  return (
    <svg aria-hidden="true" className="icon icon-arrow" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform={rotation} />
    </svg>
  );
}

export function MenuIcon({ open = false }) {
  return (
    <span aria-hidden="true" className={`menu-icon${open ? ' is-open' : ''}`}>
      <span />
      <span />
    </span>
  );
}

export function SignalMark() {
  return (
    <span aria-hidden="true" className="signal-mark">
      <span />
      <span />
      <span />
    </span>
  );
}

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="icon icon-whatsapp" viewBox="0 0 24 24" fill="none">
      <path d="M5.2 18.8 6.4 15A7.8 7.8 0 1 1 9 17.5l-3.8 1.3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.2 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.2.4-2 .1-1.3-.4-2.5-1.1-3.5-2.1s-1.7-2.2-2.1-3.5c-.3-.8-.1-1.6.1-2Z" fill="currentColor" />
    </svg>
  );
}
