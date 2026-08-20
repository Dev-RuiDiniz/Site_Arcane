import { PageFrame } from '../components/PageFrame.jsx';
import { ArrowIcon } from '../components/Icons.jsx';

export function NotFoundPage({ onNavigate }) {
  return (
    <PageFrame
      eyebrow="ARCANE / 404"
      title="Essa página não existe."
      intro="O endereço pode estar incorreto ou a página pode ter sido movida."
    >
      <section className="not-found-section band-paper">
        <div className="not-found-content">
          <p>Volte para a página inicial e encontre a frente Arcane mais adequada para o seu próximo movimento.</p>
          <a className="button button-blue" href="/" onClick={(event) => onNavigate(event, '/')}>Voltar ao início <ArrowIcon /></a>
        </div>
      </section>
    </PageFrame>
  );
}
