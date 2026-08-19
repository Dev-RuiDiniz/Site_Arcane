import { siteContent } from '../app/content.js';
import { MenuIcon } from './Icons.jsx';

export function Header({ currentPath, menuOpen, onMenuToggle, onNavigate }) {
  return (
    <header className={`site-header${menuOpen ? ' menu-is-open' : ''}`}>
      <a className="wordmark" href="/" onClick={(event) => onNavigate(event, '/') } aria-label="Arcane Tecnologia — início">
        <img className="brand-logo" src={siteContent.brandAssets.logo} alt="Arcane Tecnologia" />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {siteContent.navigation.slice(0, 5).map((item) => (
          <a key={item.href} className={currentPath === item.href ? 'is-active' : ''} href={item.href} onClick={(event) => onNavigate(event, item.href)}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-cta" href={siteContent.primaryCta.href} onClick={(event) => onNavigate(event, siteContent.primaryCta.href)}>
          {siteContent.primaryCta.label}
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-menu" onClick={onMenuToggle}>
          <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          <MenuIcon open={menuOpen} />
        </button>
      </div>
    </header>
  );
}
