import { describe, expect, it } from 'vitest';
import { getRouteMetadata } from './metadata.js';

describe('route metadata', () => {
  it('provides specific metadata for paid-traffic service pages', () => {
    expect(getRouteMetadata({ path: '/services/arcane-labs' })).toEqual({
      title: 'Arcane Labs | Sistemas, aplicativos e produtos digitais',
      description: 'Desenvolvimento de sistemas web, aplicativos, plataformas SaaS e produtos digitais sob medida para empresas que precisam construir tecnologia própria.',
    });
    expect(getRouteMetadata({ path: '/services/arcane-growth' }).title).toBe('Arcane Growth | IA, automações e integrações');
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
    expect(getRouteMetadata({ path: '/unknown' }).title).toBe('Arcane Tecnologia — Negócios digitais que funcionam');
  });
});
