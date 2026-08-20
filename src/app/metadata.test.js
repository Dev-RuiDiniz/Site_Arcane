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

  it('falls back safely for unlisted route objects', () => {
    expect(getRouteMetadata({ path: '/unknown' }).title).toBe('Arcane Tecnologia — Negócios digitais que funcionam');
  });
});
