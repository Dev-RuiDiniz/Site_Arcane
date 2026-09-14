import { describe, expect, it } from 'vitest';
import { renderStaticPage } from './prerender.js';

describe('static route rendering', () => {
  it('publishes the home content and immediate hero poster before JavaScript', () => {
    const html = renderStaticPage({ path: '/', key: 'home' });

    expect(html).toContain('<h1><span>ESTRATÉGIA E</span>');
    expect(html).toContain('video-fundo-poster.jpg');
    expect(html).not.toContain('<source');
    expect(html).toContain('Arcane Rise');
  });

  it('publishes full service and article detail copy for crawlers', () => {
    const service = renderStaticPage({ path: '/services/arcane-rise', key: 'service', serviceSlug: 'arcane-rise' });
    const article = renderStaticPage({ path: '/blog/automacao-boa-devolve-tempo-para-o-negocio', key: 'article', articleSlug: 'automacao-boa-devolve-tempo-para-o-negocio' });

    expect(service).toContain('Tecnologia para operações prontas para escalar.');
    expect(service).toContain('Sistemas e plataformas');
    expect(article).toContain('Automação boa devolve tempo para o negócio.');
    expect(article).toContain('IA entra onde existe contexto.');
  });
});
