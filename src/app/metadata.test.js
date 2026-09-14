import { describe, expect, it } from 'vitest';
import { getRouteMetadata, getStructuredData } from './metadata.js';

describe('route metadata', () => {
  it('provides specific metadata for the three service divisions', () => {
    expect(getRouteMetadata({ path: '/services/arcane-rise' })).toEqual({
      title: 'Arcane Rise | Tecnologia para operações prontas para escalar',
      description: 'Sistemas, SaaS, APIs, IA, agentes, automações e integrações para transformar processos em tecnologia.',
    });
    expect(getRouteMetadata({ path: '/services/arcane-growth' }).title).toBe('Arcane Growth | Transforme audiência em comunidade');
    expect(getRouteMetadata({ path: '/services/arcane-labs', key: 'redirect', redirectTo: '/services/arcane-rise' }).title).toBe('Arcane Rise | Tecnologia para operações prontas para escalar');
  });

  it('provides unique metadata for editorial detail pages', () => {
    expect(getRouteMetadata({ path: '/blog/a-atencao-certa-comeca-antes-do-clique' }).title).toBe('A atenção certa começa antes do clique | Blog Arcane');
    expect(getRouteMetadata({ path: '/blog/automacao-boa-devolve-tempo-para-o-negocio' }).description).toContain('Conectar ferramentas');
  });

  it('marks unknown pages with noindex metadata', () => {
    expect(getRouteMetadata({ path: '/missing', key: 'not-found' })).toEqual({
      title: 'Página não encontrada | Arcane Tecnologia',
      description: 'O endereço acessado não corresponde a uma página publicada pela Arcane Tecnologia.',
    });
  });

  it('falls back safely for unlisted route objects', () => {
    expect(getRouteMetadata({ path: '/unknown' })).toEqual({
      title: 'Arcane Tecnologia — Estratégia e tecnologia para negócios',
      description: 'Estratégia e tecnologia para transformar ideias em negócios — presença digital, experiências e tecnologia para crescer com estrutura.',
    });
  });

  it('provides structured data for the home, services and articles', () => {
    const homeGraph = getStructuredData({ path: '/', key: 'home' })['@graph'];
    expect(homeGraph.map((item) => item['@type'])).toEqual(['Organization', 'WebSite']);

    const serviceGraph = getStructuredData({ path: '/services/arcane-rise', key: 'service' })['@graph'];
    expect(serviceGraph.find((item) => item['@type'] === 'Service')).toMatchObject({
      name: 'Arcane Rise',
      url: 'https://arcanetecnologia.com.br/services/arcane-rise',
    });
    expect(serviceGraph.some((item) => item['@type'] === 'BreadcrumbList')).toBe(true);

    const articleGraph = getStructuredData({ path: '/blog/automacao-boa-devolve-tempo-para-o-negocio', key: 'article' })['@graph'];
    expect(articleGraph.find((item) => item['@type'] === 'Article')).toMatchObject({
      headline: 'Automação boa devolve tempo para o negócio',
    });
  });
});
