import { describe, expect, it } from 'vitest';
import { getRoute, normalizePath } from './routes.js';
import { siteContent } from './content.js';

describe('Arcane site routes', () => {
  it('normalizes trailing slashes and exposes unknown paths as not found', () => {
    expect(normalizePath('/services/')).toBe('/services');
    expect(normalizePath('')).toBe('/');
    expect(getRoute('/not-found')).toEqual({ path: '/not-found', key: 'not-found' });
    expect(getRoute('/services/arcane-labs')).toEqual({
      path: '/services/arcane-labs',
      key: 'redirect',
      redirectTo: '/services/arcane-rise',
    });
    expect(getRoute('/solicitar-orcamento')).toEqual({
      path: '/solicitar-orcamento',
      key: 'redirect',
      redirectTo: '/contact',
    });
    expect(getRoute('/services/sites-premium')).toEqual({
      path: '/services/sites-premium',
      key: 'redirect',
      redirectTo: '/services/arcane-digital',
    });
  });

  it('exposes every approved route with a page key', () => {
    const expected = ['/', '/services', '/projects', '/blog', '/about', '/contact', '/privacy', '/terms', '/cookies'];
    expected.forEach((path) => expect(getRoute(path).path).toBe(path));
    expect(siteContent.navigation.map((item) => item.href)).toEqual([
      '/',
      '/services',
      '/projects',
      '/about',
      '/contact',
      '/blog',
    ]);
  });

  it('keeps the commercial contact contract centralized', () => {
    expect(siteContent.contact.email).toBe('comercial@arcanetecnologia.com.br');
    expect(siteContent.contact.phone).toBe('(12) 99133-2258');
    expect(siteContent.contact.location).toBe('São Paulo, Brasil');
    expect(siteContent.primaryCta.href).toContain('https://wa.me/5512991332258');
  });

  it('exposes the approved commercial positioning and service architecture', () => {
    expect(siteContent.primaryCta.label).toBe('Iniciar um projeto');
    expect(siteContent.hero.title).toBe('Estratégia e tecnologia para transformar ideias em negócios.');
    expect(siteContent.hero.text).toBe('Criamos presenças digitais, desenvolvemos experiências e conectamos tecnologia para empresas que querem atrair mais, criar relacionamento e escalar com estrutura.');
    expect(siteContent.services.map((service) => service.title)).toEqual(['Arcane Digital', 'Arcane Growth', 'Arcane Rise']);
    expect(siteContent.services.map((service) => service.concept)).toEqual(['ATRAIA', 'CONECTE', 'ESCALE']);
    siteContent.services.forEach((service) => {
      expect(service.subtitle).toBeTruthy();
      expect(service.cta).toBeTruthy();
      expect(service.href).toContain('https://wa.me/5512991332258');
    });
    expect(siteContent.contactPage).toEqual({
      title: 'Inicie um projeto com a Arcane',
      text: 'Conte o contexto da sua empresa. Nossa equipe analisa o desafio antes da conversa para identificar o melhor caminho entre presença, comunidade e tecnologia.',
    });
    expect(siteContent.articles.map((article) => article.category)).toEqual(['Digital', 'Rise', 'Rise']);
  });

  it('uses the supplied Arcane brand assets in the hero and site chrome', () => {
    expect(siteContent.brandAssets).toEqual({
      logo: '/assets/arcane-logo-horizontal-small.png',
      heroVideo: '/assets/video-fundo-optimized.mp4',
      heroVideoMobile: '/assets/video-fundo-mobile.mp4',
      heroPoster: '/assets/video-fundo-poster.jpg',
      whatsappLogo: '/assets/whatsapp-logo-green.svg',
    });
    expect(siteContent.whatsapp.href).toBe('https://wa.me/5512991332258');
  });

  it('exposes detail routes for the three initial editorial articles', () => {
    expect(siteContent.articles.map((article) => article.href)).toEqual([
      '/blog/a-atencao-certa-comeca-antes-do-clique',
      '/blog/quando-uma-ideia-pede-um-produto-proprio',
      '/blog/automacao-boa-devolve-tempo-para-o-negocio',
    ]);
    siteContent.articles.forEach((article) => {
      expect(getRoute(article.href)).toMatchObject({ key: 'article', articleSlug: article.slug });
      expect(article.sections.length).toBeGreaterThanOrEqual(3);
      expect(article.cta.href).toContain('https://wa.me/5512991332258');
    });
  });

  it('exposes commercial detail pages for the three service fronts', () => {
    expect(siteContent.services.map((service) => service.detailHref)).toEqual([
      '/services/arcane-digital',
      '/services/arcane-growth',
      '/services/arcane-rise',
    ]);
    siteContent.services.forEach((service) => {
      expect(getRoute(service.detailHref)).toMatchObject({ key: 'service', serviceSlug: service.slug });
      expect(service.detail.lead).toBeTruthy();
      expect(service.detail.sections.length).toBeGreaterThanOrEqual(3);
      expect(service.detail.cta.href).toContain('https://wa.me/5512991332258');
    });
  });

  it('provides complete legal page structures for privacy, terms and cookies', () => {
    ['privacy', 'terms', 'cookies'].forEach((kind) => {
      const page = siteContent.legal[kind];
      expect(page.title).toBeTruthy();
      expect(page.updatedAt).toBeTruthy();
      expect(page.intro).toBeTruthy();
      expect(page.sections.length).toBeGreaterThanOrEqual(5);
      page.sections.forEach((section) => {
        expect(section.heading).toBeTruthy();
        expect(section.paragraphs.length).toBeGreaterThanOrEqual(1);
      });
      expect(page.contact.email).toBe(siteContent.contact.email);
    });
  });
});
