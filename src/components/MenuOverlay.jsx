import { siteContent } from '../app/content.js';
import { ArrowIcon } from './Icons.jsx';

export function MenuOverlay({ open, onClose, onNavigate }) {
  return (
    <aside id="site-menu" className={`menu-overlay${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="menu-inner">
        <div className="menu-lede">
          <span className="eyebrow eyebrow-blue">NAVEGAÇÃO</span>
          <p>Transformamos ideias, experiências e processos em soluções digitais que funcionam.</p>
        </div>
        <nav aria-label="Menu expandido">
          {siteContent.navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={(event) => { onNavigate(event, item.href); onClose(); }}>
              <span className="menu-number">0{index + 1}</span>
              <span>{item.label}</span>
              <ArrowIcon />
            </a>
          ))}
        </nav>
        <div className="menu-foot">
          <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          <span>{siteContent.contact.location}</span>
        </div>
      </div>
    </aside>
  );
}
