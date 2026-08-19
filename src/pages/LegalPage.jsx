import { siteContent } from '../app/content.js';
import { PageFrame } from '../components/PageFrame.jsx';

export function LegalPage({ kind }) {
  const page = siteContent.legal[kind];
  return <PageFrame eyebrow="ARCANE / LEGAL" title={page.title} intro="Transparência e clareza também fazem parte da engenharia de uma operação responsável."><section className="legal-section band-paper">{page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></PageFrame>;
}
