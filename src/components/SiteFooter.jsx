import { siteContent } from '../app/content.js';

export function SiteFooter({ onNavigate }) {
  return (
    <footer className="site-footer band-paper">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="wordmark wordmark-dark" href="/" onClick={(event) => onNavigate(event, '/') }>
            <img className="brand-logo brand-logo-footer" src={siteContent.brandAssets.logo} alt="Arcane Tecnologia" />
          </a>
          <p>{siteContent.descriptor}</p>
          <small>© 2026 Arcane Tecnologia. Todos os direitos reservados.</small>
        </div>
        <div className="footer-column">
          <span className="eyebrow">NAVEGAÇÃO</span>
          <div className="footer-links">
            {siteContent.navigation.map((item) => <a key={item.href} href={item.href} onClick={(event) => onNavigate(event, item.href)}>{item.label}</a>)}
          </div>
        </div>
        <div className="footer-column footer-contact">
          <span className="eyebrow">CONTATO</span>
          <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          <a href={siteContent.contact.phoneHref}>{siteContent.contact.phone}</a>
          <span>{siteContent.contact.location}</span>
        </div>
      </div>
      <div className="footer-legal">
        <span>Arcane / Atraia. Construa. Escale.</span>
        <div>
          {['privacy', 'terms', 'cookies'].map((key) => <a key={key} href={`/${key}`} onClick={(event) => onNavigate(event, `/${key}`)}>{siteContent.legal[key].title}</a>)}
        </div>
      </div>
    </footer>
  );
}
