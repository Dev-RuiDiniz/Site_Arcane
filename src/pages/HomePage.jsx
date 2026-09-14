import { siteContent } from '../app/content.js';
import { ArrowIcon } from '../components/Icons.jsx';
import { SectionIntro } from '../components/SectionIntro.jsx';
import { ServiceList } from '../components/ServiceList.jsx';
import { ProjectGrid } from '../components/ProjectGrid.jsx';
import { ArticleGrid } from '../components/ArticleGrid.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function HomePage({ onNavigate }) {
  return (
    <main>
      <section className="hero band-dark">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">{siteContent.hero.eyebrow}</span>
          <h1>
            {siteContent.hero.titleLines.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <p>{siteContent.hero.text}</p>
          <div className="hero-actions">
            <a className="button button-blue hero-primary-cta" href={siteContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
              {siteContent.hero.primaryCta.label} <ArrowIcon />
            </a>
            <a className="button button-outline" href={siteContent.hero.secondaryCta.href} onClick={(event) => onNavigate(event, siteContent.hero.secondaryCta.href)}>
              {siteContent.hero.secondaryCta.label} <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Vídeo institucional da Arcane Tecnologia">
          <video className="hero-video" autoPlay loop muted playsInline preload="none" aria-hidden="true">
            <source src={siteContent.brandAssets.heroVideo} type="video/mp4" />
          </video>
          <div className="hero-visual-overlay" aria-hidden="true" />
        </div>
      </section>

      <section className="statement band-paper">
        <SectionIntro title="Sua empresa pode ser excelente e ainda parecer pequena no digital." />
        <div className="statement-grid">
          <p className="statement-lead">Percepção digital influencia confiança.</p>
          <div className="statement-copy">
            <p>Uma presença fragmentada reduz autoridade. Site, marca, comunicação e experiência precisam trabalhar juntos para que o mercado entenda o valor da sua empresa.</p>
            <p>Presença digital não é apenas publicar. É tornar mais simples para a pessoa certa encontrar, lembrar e escolher sua marca.</p>
            <a className="text-link" href="/about" onClick={(event) => onNavigate(event, '/about')}>Conhecer a Arcane <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="services-section band-dark">
        <SectionIntro dark eyebrow="UM ECOSSISTEMA DIGITAL COMPLETO" title="Da presença à tecnologia que sustenta o próximo passo." />
        <ServiceList services={siteContent.services} onNavigate={onNavigate} />
        <a className="button button-blue services-section-cta" href="/services" onClick={(event) => onNavigate(event, '/services')}>Conhecer as três frentes <ArrowIcon /></a>
      </section>

      <section className="principles-section band-blue">
        <div className="principles-intro">
          <span className="eyebrow">A LINHA ARCANE</span>
          <h2>{siteContent.brandStatement}</h2>
        </div>
        <div className="principles-list">
          {siteContent.journey.map((item) => (
            <div className="principle" key={item.number}>
              <span>{item.number}</span>
              <p><strong>{item.division} / {item.concept}</strong> {item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="difference-section band-paper">
        <SectionIntro eyebrow="O DIFERENCIAL" title="Não paramos na comunicação." />
        <div className="difference-grid">
          <p className="difference-lead">Criamos a presença da sua empresa, construímos experiências para seus clientes e desenvolvemos a tecnologia necessária quando o negócio precisa ir além.</p>
          <div className="journey-track" aria-label="Evolução digital do negócio">
            {siteContent.differenceSteps.map((step, index) => (
              <div className="journey-step" key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section band-paper">
        <SectionIntro eyebrow="CASES / PORTFÓLIO" title="Capacidade aplicada ao contexto do negócio." />
        <ProjectGrid projects={siteContent.projects} onNavigate={onNavigate} />
        <a className="button button-dark" href="/projects" onClick={(event) => onNavigate(event, '/projects')}>Ver projetos <ArrowIcon /></a>
      </section>

      <section className="articles-section band-paper">
        <SectionIntro eyebrow="PENSAMENTOS / BLOG" title="Ideias para atrair, conectar e escalar." />
        <ArticleGrid articles={siteContent.articles} onNavigate={onNavigate} />
        <a className="text-link" href="/blog" onClick={(event) => onNavigate(event, '/blog')}>Ver todos os artigos <ArrowIcon /></a>
      </section>

      <ClosingCta onNavigate={onNavigate} />
    </main>
  );
}
