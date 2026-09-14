import { siteContent } from '../app/content.js';
import { ArrowIcon } from '../components/Icons.jsx';
import { PageFrame } from '../components/PageFrame.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function AboutPage({ onNavigate }) {
  return (
    <>
      <PageFrame
        eyebrow="SOBRE A ARCANE"
        title="Presença. Comunidade. Tecnologia."
        intro="A Arcane conecta estratégia, criatividade e tecnologia para construir empresas mais fortes no ambiente digital."
      >
        <section className="about-section band-paper">
          <div className="about-grid">
            <div>
              <span className="eyebrow eyebrow-blue">NOSSA FORMA DE TRABALHAR</span>
              <h2>O negócio vem antes da ferramenta.</h2>
            </div>
            <div className="about-copy">
              <p>O código, o conteúdo e o design são partes da entrega. Antes deles, existe uma empresa para entender, uma percepção para construir e um próximo passo para tornar possível.</p>
              <p>É por isso que conectamos estratégia, criatividade e tecnologia em três níveis: presença, relacionamento e operação.</p>
            </div>
          </div>
          <div className="about-divisions">
            {siteContent.services.map((service) => (
              <article className="about-division" key={service.slug}>
                <div className="about-division-top"><span>{service.number}</span><span>{service.concept}</span></div>
                <h3>{service.title}</h3>
                <p>{service.promise}</p>
                <a className="text-link" href={service.detailHref} onClick={(event) => onNavigate(event, service.detailHref)}>Conhecer {service.title} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>
        <section className="band-blue about-manifesto">
          <span className="eyebrow">{siteContent.brandStatement}</span>
          <h2>Engenharia de software continua sendo uma competência central. Mas a Arcane existe para conectar o que a empresa precisa comunicar, construir e sustentar.</h2>
        </section>
      </PageFrame>
      <ClosingCta onNavigate={onNavigate} />
    </>
  );
}
