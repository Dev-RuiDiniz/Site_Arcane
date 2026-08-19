import { ArrowIcon } from '../components/Icons.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function ServiceDetailPage({ service, onNavigate }) {
  const detail = service.detail;

  return (
    <main className="inner-page service-detail-page">
      <section className="service-detail-hero band-dark">
        <a className="article-back-link" href="/services" onClick={(event) => onNavigate(event, '/services')}>
          <ArrowIcon direction="left" /> Voltar para serviços
        </a>
        <h1>{service.title}</h1>
        <p className="service-detail-subtitle">{service.subtitle}</p>
        <p>{detail.lead}</p>
        <div className="hero-actions service-detail-actions">
          <a className="button button-blue" href={detail.cta.href} target="_blank" rel="noreferrer">{detail.cta.label} <ArrowIcon /></a>
          <a className="button button-dark" href="/services" onClick={(event) => onNavigate(event, '/services')}>Conhecer outras frentes <ArrowIcon /></a>
        </div>
      </section>

      <section className="service-detail-body band-paper">
        <div className="article-detail-layout">
          <article className="article-content">
            <p className="article-opening">{detail.intro}</p>
            {detail.sections.map((section) => (
              <section className="article-content-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && (
                  <div className="article-points">
                    {section.points.map((point, index) => (
                      <div className="article-point" key={point.title}>
                        <span>0{index + 1}</span>
                        <div><h3>{point.title}</h3><p>{point.text}</p></div>
                      </div>
                    ))}
                  </div>
                )}
                {section.highlight && <blockquote>{section.highlight}</blockquote>}
              </section>
            ))}
          </article>

          <aside className="article-aside">
            <div className="article-aside-card">
              <span className="eyebrow eyebrow-blue">ARCANE / {service.title.replace('Arcane ', '').toUpperCase()}</span>
              <h2>Pronto para dar o próximo passo?</h2>
              <p>Conte o que você quer construir, melhorar ou automatizar. A Arcane ajuda a transformar o contexto em uma solução clara e possível.</p>
              <a className="button button-blue" href={detail.cta.href} target="_blank" rel="noreferrer">{detail.cta.label} <ArrowIcon /></a>
            </div>
            <div className="article-aside-foot">
              <span>ARCANE / SERVIÇOS</span>
              <a href="/services" onClick={(event) => onNavigate(event, '/services')}>Ver todas as frentes <ArrowIcon /></a>
            </div>
          </aside>
        </div>
      </section>
      <ClosingCta onNavigate={onNavigate} />
    </main>
  );
}
