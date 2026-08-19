import { ArrowIcon } from '../components/Icons.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function ArticleDetailPage({ article, onNavigate }) {
  return (
    <main className="inner-page article-detail-page">
      <section className="article-detail-hero band-dark">
        <a className="article-back-link" href="/blog" onClick={(event) => onNavigate(event, '/blog')}>
          <ArrowIcon direction="left" /> Voltar ao blog
        </a>
        <div className="article-detail-meta">
          <span>{article.number}</span>
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>
        <h1>{article.title}</h1>
        <p>{article.intro}</p>
      </section>

      <section className="article-detail-body band-paper">
        <div className="article-detail-layout">
          <article className="article-content">
            <p className="article-opening">{article.text}</p>
            {article.sections.map((section) => (
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
            <div className="article-sources">
              <span className="eyebrow">PARA APROFUNDAR</span>
              {article.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a>)}
            </div>
          </article>

          <aside className="article-aside">
            <div className="article-aside-card">
              <span className="eyebrow eyebrow-blue">ARCANE / {article.category.toUpperCase()}</span>
              <h2>Quer levar essa ideia para o seu negócio?</h2>
              <p>Conte o contexto. A Arcane ajuda a transformar o próximo passo em uma solução digital clara e possível.</p>
              <a className="button button-blue" href={article.cta.href} target="_blank" rel="noreferrer">{article.cta.label} <ArrowIcon /></a>
            </div>
            <div className="article-aside-foot">
              <span>ARCANE / BLOG</span>
              <a href="/blog" onClick={(event) => onNavigate(event, '/blog')}>Ver outros artigos <ArrowIcon /></a>
            </div>
          </aside>
        </div>
      </section>
      <ClosingCta onNavigate={onNavigate} />
    </main>
  );
}
