import { siteContent } from '../app/content.js';
import { ArrowIcon } from './Icons.jsx';

export function ClosingCta({ onNavigate }) {
  return (
    <section className="closing-cta band-dark">
      <div className="closing-copy">
        <span className="eyebrow eyebrow-blue">PRÓXIMO MOVIMENTO</span>
        <h2>Tem uma presença, experiência ou operação pronta para evoluir?</h2>
        <p>Conte o contexto para nossa equipe e vamos identificar o melhor caminho entre presença, comunidade e tecnologia.</p>
      </div>
      <a className="button button-blue" href={siteContent.primaryCta.href} onClick={(event) => onNavigate(event, siteContent.primaryCta.href)}>
        {siteContent.primaryCta.label} <ArrowIcon />
      </a>
    </section>
  );
}
