import { siteContent } from '../app/content.js';
import { PageFrame } from '../components/PageFrame.jsx';
import { ProjectGrid } from '../components/ProjectGrid.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function ProjectsPage({ onNavigate }) {
  return <><PageFrame eyebrow="CASES / PORTFÓLIO" title="Projetos que organizam o presente e abrem espaço para o próximo movimento." intro="Uma seleção inicial de frentes em que arquitetura, operação e contexto de negócio precisam caminhar juntos."><section className="page-section band-paper"><ProjectGrid projects={siteContent.projects} /></section></PageFrame><ClosingCta onNavigate={onNavigate} /></>;
}
