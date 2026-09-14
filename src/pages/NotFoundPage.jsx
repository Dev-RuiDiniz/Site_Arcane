import { ArrowIcon } from '../components/Icons.jsx';

export function NotFoundPage({ onNavigate }) {
  const currentPath = typeof window === 'undefined' ? '/rota-desconhecida' : window.location.pathname;

  return (
    <main className="not-found-page">
      <section className="not-found-hero band-dark">
        <div className="not-found-atmosphere" aria-hidden="true">
          <span className="not-found-orbit not-found-orbit-outer" />
          <span className="not-found-orbit not-found-orbit-inner" />
          <span className="not-found-orbit-node not-found-orbit-node-a" />
          <span className="not-found-orbit-node not-found-orbit-node-b" />
          <span className="not-found-orbit-node not-found-orbit-node-c" />
          <span className="not-found-coordinate not-found-coordinate-top">ARCANE / 404</span>
          <span className="not-found-coordinate not-found-coordinate-bottom">SIGNAL LOST / ROUTE UNKNOWN</span>
        </div>

        <div className="not-found-copy">
          <div className="section-kicker"><span className="kicker-line" /><span>ARCANE / ROTA NÃO ENCONTRADA</span></div>
          <span className="not-found-index">404 / FORA DO MAPA</span>
          <h1>O próximo movimento <em>não está aqui.</em></h1>
          <p>Essa rota saiu do ar ou nunca existiu. Mas sua próxima ideia, presença ou operação pode começar por outro caminho.</p>
          <div className="not-found-actions">
            <a className="button button-blue" href="/" onClick={(event) => onNavigate(event, '/')}>Voltar ao início <ArrowIcon /></a>
            <a className="button button-outline" href="/services" onClick={(event) => onNavigate(event, '/services')}>Explorar serviços <ArrowIcon /></a>
          </div>
        </div>

        <div className="not-found-meta">
          <span>ENDEREÇO ACESSADO</span>
          <code>{currentPath}</code>
          <span>STATUS / 404</span>
        </div>
      </section>
    </main>
  );
}
