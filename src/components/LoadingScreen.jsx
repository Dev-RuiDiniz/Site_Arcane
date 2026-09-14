export function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-label="Carregando Arcane Tecnologia">
      <div className="loading-screen-grid" aria-hidden="true" />
      <div className="loading-screen-top">
        <span>ARCANE / DIGITAL ECOSYSTEM</span>
        <span>INITIALIZING</span>
      </div>

      <div className="loading-screen-center">
        <div className="loading-signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="loading-wordmark">ARCANE</p>
        <p className="loading-message">Presença. Comunidade. Tecnologia.</p>
      </div>

      <div className="loading-screen-bottom">
        <div className="loading-progress" aria-hidden="true"><span /></div>
        <div className="loading-screen-status">
          <span>PREPARANDO O PRÓXIMO MOVIMENTO</span>
          <span>00 / 03</span>
        </div>
      </div>
    </div>
  );
}
