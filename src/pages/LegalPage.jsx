import { siteContent } from '../app/content.js';
import { PageFrame } from '../components/PageFrame.jsx';
import { ArrowIcon } from '../components/Icons.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function LegalPage({ kind, onNavigate }) {
  const page = siteContent.legal[kind];
  return <><PageFrame eyebrow="ARCANE / LEGAL" title={page.title} intro={page.intro}><section className="legal-section band-paper">
    <div className="legal-layout">
      <article className="legal-content">
        <div className="legal-notice">
          <span className="eyebrow eyebrow-blue">ATUALIZAÇÃO</span>
          <strong>{page.updatedAt}</strong>
          <p>{page.notice}</p>
        </div>
        {page.sections.map((section) => <section className="legal-content-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul className="legal-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>)}
      </article>
      <aside className="legal-aside">
        <div className="legal-aside-card">
          <span className="eyebrow eyebrow-blue">{page.contact.label}</span>
          <h2>Precisa esclarecer alguma coisa?</h2>
          <p>Envie sua solicitação com contexto suficiente para que a equipe Arcane possa orientar o próximo passo.</p>
          <a className="button button-blue" href={`mailto:${page.contact.email}`}>Enviar e-mail <ArrowIcon /></a>
        </div>
        <div className="legal-aside-sources">
          <span className="eyebrow">REFERÊNCIAS</span>
          {page.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a>)}
        </div>
        <a className="legal-back-link" href="/contact" onClick={(event) => onNavigate(event, '/contact')}>Falar com a Arcane <ArrowIcon /></a>
      </aside>
    </div>
  </section></PageFrame><ClosingCta onNavigate={onNavigate} /></>;
}
