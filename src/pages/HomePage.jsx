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
          <h1>{siteContent.hero.title}</h1>
          <p>{siteContent.hero.text}</p>
          <div className="hero-actions">
            <a className="button button-blue" href={siteContent.primaryCta.href} onClick={(event) => onNavigate(event, siteContent.primaryCta.href)}>{siteContent.primaryCta.label} <ArrowIcon /></a>
            <a className="button button-outline" href={siteContent.secondaryCta.href} onClick={(event) => onNavigate(event, siteContent.secondaryCta.href)}>{siteContent.secondaryCta.label} <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Vídeo institucional da Arcane Tecnologia">
          <video className="hero-video" autoPlay loop muted playsInline preload="metadata" aria-hidden="true">
            <source src={siteContent.brandAssets.heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-proof">{siteContent.hero.proof.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
      </section>

      <section className="statement band-paper">
        <SectionIntro eyebrow="POSICIONAMENTO" title="Atraia. Construa. Escale." />
        <div className="statement-grid">
          <p className="statement-lead">Da primeira impressão à tecnologia própria, cada etapa do crescimento precisa conversar com a próxima.</p>
          <div className="statement-copy">
            <p>Criamos experiências digitais, desenvolvemos produtos e conectamos processos para empresas que querem vender mais, operar melhor e construir tecnologia própria.</p>
            <a className="text-link" href="/about" onClick={(event) => onNavigate(event, '/about')}>Conhecer a Arcane <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="services-section band-dark">
        <SectionIntro dark eyebrow="NOSSAS FRENTES" title="Da presença digital à tecnologia própria." />
        <ServiceList services={siteContent.services} onNavigate={onNavigate} />
        <a className="button button-outline" href="/services" onClick={(event) => onNavigate(event, '/services')}>Ver serviços <ArrowIcon /></a>
      </section>

      <section className="projects-section band-paper">
        <SectionIntro eyebrow="CASES / PORTFÓLIO" title="Complexidade organizada em capacidade de escala." />
        <ProjectGrid projects={siteContent.projects} />
        <a className="button button-dark" href="/projects" onClick={(event) => onNavigate(event, '/projects')}>Ver projetos <ArrowIcon /></a>
      </section>

      <section className="principles-section band-blue">
        <div className="principles-intro"><span className="eyebrow">A LINHA ARCANE</span><h2>Uma jornada conectada para crescer melhor.</h2></div>
        <div className="principles-list">
          {['Digital / Atraia atenção e oportunidade.', 'Labs / Construa produtos digitais próprios.', 'Growth / Escale processos, dados e conversões.'].map((item, index) => <div className="principle" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="articles-section band-paper">
        <SectionIntro eyebrow="PENSAMENTOS / BLOG" title="Ideias para atrair, construir e escalar." />
        <ArticleGrid articles={siteContent.articles} onNavigate={onNavigate} />
        <a className="text-link" href="/blog" onClick={(event) => onNavigate(event, '/blog')}>Ver todos os artigos <ArrowIcon /></a>
      </section>

      <ClosingCta onNavigate={onNavigate} />
    </main>
  );
}
