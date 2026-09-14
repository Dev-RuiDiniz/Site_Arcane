import { siteContent } from '../app/content.js';
import { PageFrame } from '../components/PageFrame.jsx';
import { ServiceList } from '../components/ServiceList.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function ServicesPage({ onNavigate }) {
  return <><PageFrame eyebrow="SERVIÇOS" title="Atraia. Conecte. Escale." intro="Da presença digital à comunidade e à tecnologia própria, a Arcane reúne três frentes para ajudar empresas a crescer com mais clareza e capacidade."><section className="page-section band-paper"><ServiceList services={siteContent.services} onNavigate={onNavigate} /></section></PageFrame><ClosingCta onNavigate={onNavigate} /></>;
}
