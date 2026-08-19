import { siteContent } from '../app/content.js';
import { PageFrame } from '../components/PageFrame.jsx';
import { ArticleGrid } from '../components/ArticleGrid.jsx';
import { ClosingCta } from '../components/ClosingCta.jsx';

export function BlogPage({ onNavigate }) {
  return <><PageFrame eyebrow="BLOG" title="Ideias para atrair, construir e escalar." intro="Perspectivas da Arcane sobre presença digital, produtos próprios, automação e as escolhas que ajudam empresas a crescer melhor."><section className="page-section band-paper"><ArticleGrid articles={siteContent.articles} onNavigate={onNavigate} /></section></PageFrame><ClosingCta onNavigate={onNavigate} /></>;
}
