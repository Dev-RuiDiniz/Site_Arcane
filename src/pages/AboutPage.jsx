import { PageFrame } from '../components/PageFrame.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function AboutPage({ onNavigate }) {
  return <><PageFrame eyebrow="SOBRE A ARCANE" title="Engenharia que começa entendendo o contexto." intro="Somos uma parceira de tecnologia para empresas que precisam substituir improvisos por uma base mais sólida, rastreável e preparada para evolução."><section className="about-section band-paper"><div className="about-grid"><div><span className="eyebrow eyebrow-blue">NOSSA FORMA DE TRABALHAR</span><h2>Menos ferramenta genérica. Mais arquitetura autoral.</h2></div><div className="about-copy"><p>O código é parte da entrega. Antes dele, existe uma operação para entender, decisões para organizar e riscos para tornar visíveis.</p><p>Por isso, conectamos tecnologia e operação em cada etapa: da investigação do problema à evolução do produto proprietário.</p></div></div></section><section className="band-blue about-manifesto"><span className="eyebrow">MANIFESTO</span><h2>Previsibilidade não nasce de fazer menos. Nasce de enxergar melhor.</h2></section></PageFrame><ClosingCta onNavigate={onNavigate} /></>;
}
