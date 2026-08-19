import { describe, expect, it } from 'vitest';
import { getRoute, normalizePath } from './routes.js';
import { siteContent } from './content.js';

describe('Arcane site routes', () => {
  it('normalizes trailing slashes and unknown paths to the home route', () => {
    expect(normalizePath('/services/')).toBe('/services');
    expect(normalizePath('')).toBe('/');
    expect(getRoute('/not-found')).toEqual({ path: '/', key: 'home' });
  });

  it('exposes every approved route with a page key', () => {
    const expected = ['/', '/services', '/projects', '/blog', '/about', '/contact', '/privacy', '/terms', '/cookies'];
    expected.forEach((path) => expect(getRoute(path).path).toBe(path));
    expect(siteContent.navigation.map((item) => item.href)).toEqual([
      '/',
      '/services',
      '/projects',
      '/blog',
      '/about',
      '/contact',
    ]);
  });

  it('keeps the commercial contact contract centralized', () => {
    expect(siteContent.contact.email).toBe('comercial@arcanetecnologia.com.br');
    expect(siteContent.contact.phone).toBe('(12) 99133-2258');
    expect(siteContent.contact.location).toBe('São Paulo, Brasil');
    expect(siteContent.primaryCta.href).toContain('https://wa.me/5512991332258');
  });

  it('exposes the approved commercial positioning and service architecture', () => {
    expect(siteContent.primaryCta.label).toBe('Agendar uma conversa');
    expect(siteContent.secondaryCta).toEqual({ label: 'Conhecer nossos projetos', href: '/projects' });
    expect(siteContent.hero.title).toBe('Estratégia e tecnologia para transformar ideias em negócios digitais que funcionam.');
    expect(siteContent.hero.text).toBe('Criamos experiências digitais, desenvolvemos produtos e conectamos processos para empresas que querem vender mais, operar melhor e construir tecnologia própria.');
    expect(siteContent.hero.proof).toEqual(['Atraia', 'Construa', 'Escale']);
    expect(siteContent.services.map((service) => service.title)).toEqual(['Arcane Digital', 'Arcane Labs', 'Arcane Growth']);
    siteContent.services.forEach((service) => {
      expect(service.subtitle).toBeTruthy();
      expect(service.cta).toBeTruthy();
      expect(service.href).toContain('https://wa.me/5512991332258');
    });
    expect(siteContent.contactPage).toEqual({
      title: 'Agende uma conversa com a Arcane',
      text: 'Conte brevemente o que você precisa. Nossa equipe analisa o contexto antes da reunião para que a conversa já comece de forma objetiva.',
    });
    expect(siteContent.articles.map((article) => article.category)).toEqual(['Digital', 'Labs', 'Growth']);
  });

  it('uses the supplied Arcane brand assets in the hero and site chrome', () => {
    expect(siteContent.brandAssets).toEqual({
      logo: '/assets/arcane-logo-horizontal.png',
      heroVideo: '/assets/video-fundo.mp4',
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
      '/services/arcane-labs',
      '/services/arcane-growth',
    ]);
    siteContent.services.forEach((service) => {
      expect(getRoute(service.detailHref)).toMatchObject({ key: 'service', serviceSlug: service.slug });
      expect(service.detail.lead).toBeTruthy();
      expect(service.detail.sections.length).toBeGreaterThanOrEqual(3);
      expect(service.detail.cta.href).toContain('https://wa.me/5512991332258');
    });
  });
});
