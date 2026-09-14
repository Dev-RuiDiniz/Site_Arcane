import { siteContent } from './content.js';

const externalPrefixes = ['https://wa.me/', 'mailto:'];

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function isExternalLink(href) {
  return externalPrefixes.some((prefix) => href.startsWith(prefix));
}

function arrow() {
  return '<span class="static-arrow" aria-hidden="true">→</span>';
}

function link(href, label, className = '', attributes = '') {
  const external = isExternalLink(href);
  const externalAttributes = external ? ' target="_blank" rel="noreferrer"' : '';
  const classAttribute = className ? ` class="${escapeHtml(className)}"` : '';
  return `<a href="${escapeHtml(href)}"${classAttribute}${externalAttributes}${attributes}>${escapeHtml(label)}</a>`;
}

function button(href, label, className = 'button button-blue') {
  return link(href, `${label} →`, className);
}

function sectionIntro(title, eyebrow, dark = false) {
  return `<div class="section-intro${dark ? ' section-intro-dark' : ''}">${eyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ''}<h2>${escapeHtml(title)}</h2></div>`;
}

function renderHeader(route) {
  const primary = siteContent.primaryNavigation.map((item) => (
    link(item.href, item.label, route.path === item.href ? 'is-active' : '')
  )).join('');
  const expanded = siteContent.navigation.map((item, index) => (
    `<a href="${escapeHtml(item.href)}"><span class="menu-number">0${index + 1}</span><span>${escapeHtml(item.label)}</span>${arrow()}</a>`
  )).join('');

  return `<header class="site-header is-visible">
    <a class="wordmark" href="/" aria-label="Arcane Tecnologia — início"><img class="brand-logo" src="${escapeHtml(siteContent.brandAssets.logo)}" alt="Arcane Tecnologia" /></a>
    <nav class="desktop-nav" aria-label="Navegação principal">${primary}</nav>
    <div class="header-actions">${link(siteContent.primaryCta.href, siteContent.primaryCta.label, 'header-cta')}<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span class="sr-only">Abrir menu</span><span class="menu-icon"><span></span><span></span></span></button></div>
  </header>
  <aside id="site-menu" class="menu-overlay" aria-hidden="true" inert>
    <div class="menu-inner"><div class="menu-lede"><span class="eyebrow eyebrow-blue">NAVEGAÇÃO</span><p>Presença, comunidade e tecnologia para empresas que querem crescer no digital.</p></div><nav aria-label="Menu expandido">${expanded}</nav><div class="menu-foot">${link(`mailto:${siteContent.contact.email}`, siteContent.contact.email)}<span>${escapeHtml(siteContent.contact.location)}</span></div></div>
  </aside>`;
}

function renderFooter() {
  const navigation = siteContent.navigation.map((item) => link(item.href, item.label)).join('');
  const services = siteContent.services.map((service) => link(service.detailHref, service.title)).join('');
  const legal = ['privacy', 'terms', 'cookies'].map((key) => link(`/${key}`, siteContent.legal[key].title)).join('');

  return `<footer class="site-footer band-paper"><div class="footer-main">
    <div class="footer-brand-block"><a class="wordmark wordmark-dark" href="/"><img class="brand-logo brand-logo-footer" src="${escapeHtml(siteContent.brandAssets.logo)}" alt="Arcane Tecnologia" /></a><p>${escapeHtml(siteContent.descriptor)}</p><small>© 2026 Arcane Tecnologia. Todos os direitos reservados.</small></div>
    <div class="footer-column"><span class="eyebrow">NAVEGAÇÃO</span><div class="footer-links">${navigation}</div></div>
    <div class="footer-column"><span class="eyebrow">DIVISÕES</span><div class="footer-links">${services}</div></div>
    <div class="footer-column footer-contact"><span class="eyebrow">CONTATO</span>${link(`mailto:${siteContent.contact.email}`, siteContent.contact.email)}${link(siteContent.contact.phoneHref, siteContent.contact.phone)}<span>${escapeHtml(siteContent.contact.location)}</span></div>
  </div><div class="footer-legal"><span>Arcane / ${escapeHtml(siteContent.brandStatement)}</span><div>${legal}</div></div></footer>`;
}

function renderWhatsApp() {
  return `<a class="whatsapp-float" href="${escapeHtml(siteContent.whatsapp.href)}" target="_blank" rel="noreferrer" aria-label="Fale no WhatsApp"><img src="${escapeHtml(siteContent.brandAssets.whatsappLogo)}" alt="" aria-hidden="true" /><span>Fale no WhatsApp</span></a>`;
}

function renderClosingCta() {
  return `<section class="closing-cta band-dark"><div class="closing-copy"><span class="eyebrow eyebrow-blue">PRÓXIMO MOVIMENTO</span><h2>Tem uma presença, experiência ou operação pronta para evoluir?</h2><p>Conte o contexto para nossa equipe e vamos identificar o melhor caminho entre presença, comunidade e tecnologia.</p></div>${button(siteContent.primaryCta.href, siteContent.primaryCta.label)}</section>`;
}

function renderHeroVideo() {
  return `<div class="hero-visual" role="img" aria-label="Vídeo institucional da Arcane Tecnologia"><video class="hero-video" autoPlay loop muted playsInline preload="none" poster="/assets/video-fundo-poster.jpg" aria-hidden="true"><source media="(max-width: 760px)" src="/assets/video-fundo-mobile.mp4" type="video/mp4" /><source src="/assets/video-fundo-optimized.mp4" type="video/mp4" /></video><div class="hero-visual-overlay" aria-hidden="true"></div></div>`;
}

function renderServiceRows(services = siteContent.services) {
  return `<div class="service-list service-list-has-video">${services.map((service) => `<article class="service-row service-row-video"><video class="service-background" autoPlay muted loop playsInline preload="none" aria-hidden="true"></video><div class="service-index"><span class="service-number">${escapeHtml(service.number)}</span><span class="service-concept">${escapeHtml(service.concept)}</span></div><div class="service-content"><h3>${link(service.detailHref, service.title, 'service-title-link')}</h3><span class="service-subtitle">${escapeHtml(service.subtitle)}</span><p>${escapeHtml(service.text)}</p><div class="service-tags" aria-label="Serviços de ${escapeHtml(service.title)}">${service.microservices.map((item) => `<span class="service-tag">${escapeHtml(item)}</span>`).join('')}</div><a class="service-cta text-link" href="${escapeHtml(service.href)}" target="_blank" rel="noreferrer">${escapeHtml(service.cta)} ${arrow()}</a></div><a class="row-link" href="${escapeHtml(service.detailHref)}" aria-label="Conhecer ${escapeHtml(service.title)}">${arrow()}</a></article>`).join('')}</div>`;
}

function renderProjects(projects = siteContent.projects) {
  return `<div class="project-grid">${projects.map((project) => `<article class="project-card project-${escapeHtml(project.tone)}"><div class="project-card-top"><span>${escapeHtml(project.code)}</span><span class="project-status">${escapeHtml(project.division ? `${project.division} / CASE` : 'CASE')}</span></div><div class="project-signal" aria-hidden="true"><span></span><span></span><span></span><span></span></div><div class="project-card-copy"><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.text)}</p><span class="project-result">${escapeHtml(project.result)}</span></div>${link('/contact', 'Conhecer o case', 'project-arrow', ' aria-label="Conhecer este case"')}</article>`).join('')}</div>`;
}

function renderArticles(articles = siteContent.articles) {
  return `<div class="article-grid">${articles.map((article) => `<article class="article-card"><div class="article-meta"><span>${escapeHtml(article.number)}</span><span>${escapeHtml(article.category)}</span></div><h3>${escapeHtml(article.title)}</h3><p>${escapeHtml(article.text)}</p>${link(article.href, 'Ler artigo ↗')}</article>`).join('')}</div>`;
}

function renderHome() {
  const heroLines = siteContent.hero.titleLines.map((line) => `<span>${escapeHtml(line)}</span>`).join('');
  const journey = siteContent.journey.map((item) => `<div class="principle"><span>${escapeHtml(item.number)}</span><p><strong>${escapeHtml(item.division)} / ${escapeHtml(item.concept)}</strong>${escapeHtml(item.text)}</p></div>`).join('');
  const steps = siteContent.differenceSteps.map((step, index) => `<div class="journey-step"><span>0${index + 1}</span><strong>${escapeHtml(step)}</strong></div>`).join('');

  return `<main><section class="hero band-dark"><div class="hero-copy"><span class="eyebrow hero-eyebrow">${escapeHtml(siteContent.hero.eyebrow)}</span><h1>${heroLines}</h1><p>${escapeHtml(siteContent.hero.text)}</p><div class="hero-actions">${button(siteContent.hero.primaryCta.href, siteContent.hero.primaryCta.label, 'button button-blue hero-primary-cta')}${button(siteContent.hero.secondaryCta.href, siteContent.hero.secondaryCta.label, 'button button-outline')}</div></div>${renderHeroVideo()}</section>
    <section class="statement band-paper">${sectionIntro('Sua empresa pode ser excelente e ainda parecer pequena no digital.')}<div class="statement-grid"><p class="statement-lead">Percepção digital influencia confiança.</p><div class="statement-copy"><p>Uma presença fragmentada reduz autoridade. Site, marca, comunicação e experiência precisam trabalhar juntos para que o mercado entenda o valor da sua empresa.</p><p>Presença digital não é apenas publicar. É tornar mais simples para a pessoa certa encontrar, lembrar e escolher sua marca.</p>${link('/about', 'Conhecer a Arcane →', 'text-link')}</div></div></section>
    <section class="services-section band-dark">${sectionIntro('Da presença à tecnologia que sustenta o próximo passo.', 'UM ECOSSISTEMA DIGITAL COMPLETO', true)}${renderServiceRows()}${button('/services', 'Conhecer as três frentes')}</section>
    <section class="principles-section band-blue"><div class="principles-intro"><span class="eyebrow">A LINHA ARCANE</span><h2>${escapeHtml(siteContent.brandStatement)}</h2></div><div class="principles-list">${journey}</div></section>
    <section class="difference-section band-paper">${sectionIntro('Não paramos na comunicação.', 'O DIFERENCIAL')}<div class="difference-grid"><p class="difference-lead">Criamos a presença da sua empresa, construímos experiências para seus clientes e desenvolvemos a tecnologia necessária quando o negócio precisa ir além.</p><div class="journey-track" aria-label="Evolução digital do negócio">${steps}</div></div></section>
    <section class="projects-section band-paper">${sectionIntro('Capacidade aplicada ao contexto do negócio.', 'CASES / PORTFÓLIO')}${renderProjects()}${button('/projects', 'Ver projetos', 'button button-dark')}</section>
    <section class="articles-section band-paper">${sectionIntro('Ideias para atrair, conectar e escalar.', 'PENSAMENTOS / BLOG')}${renderArticles()}${link('/blog', 'Ver todos os artigos →', 'text-link')}</section>${renderClosingCta()}</main>`;
}

function renderPageFrame(eyebrow, title, intro, children) {
  return `<main class="inner-page"><section class="inner-hero band-dark"><div class="section-kicker"><span class="kicker-line"></span><span>${escapeHtml(eyebrow)}</span></div><h1>${escapeHtml(title)}</h1>${intro ? `<p>${escapeHtml(intro)}</p>` : ''}</section>${children}</main>`;
}

function renderServices() {
  return `${renderPageFrame('SERVIÇOS', 'Atraia. Conecte. Escale.', 'Da presença digital à comunidade e à tecnologia própria, a Arcane reúne três frentes para ajudar empresas a crescer com mais clareza e capacidade.', `<section class="page-section band-paper">${renderServiceRows()}</section>`)}${renderClosingCta()}`;
}

function renderServiceDetail(service) {
  const detail = service.detail;
  const sections = detail.sections.map((section) => `<section class="article-content-section"><h2>${escapeHtml(section.heading)}</h2>${(section.paragraphs ?? []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.points ? `<div class="article-points">${section.points.map((point, index) => `<div class="article-point"><span>0${index + 1}</span><div><h3>${escapeHtml(point.title)}</h3><p>${escapeHtml(point.text)}</p></div></div>`).join('')}</div>` : ''}${section.highlight ? `<blockquote>${escapeHtml(section.highlight)}</blockquote>` : ''}</section>`).join('');
  const aside = `<aside class="article-aside"><div class="article-aside-card"><span class="eyebrow eyebrow-blue">ARCANE / ${escapeHtml(service.concept)}</span><h2>Pronto para dar o próximo passo?</h2><p>Conte o que você quer construir, melhorar ou automatizar. A Arcane ajuda a transformar o contexto em uma solução clara e possível.</p>${button(detail.cta.href, detail.cta.label)}</div><div class="article-aside-foot"><span>ARCANE / SERVIÇOS</span>${link('/services', 'Ver todas as frentes →')}</div></aside>`;
  return `<main class="inner-page service-detail-page"><section class="service-detail-hero band-dark">${link('/services', '← Voltar para serviços', 'article-back-link')}<div class="service-detail-label"><span>${escapeHtml(service.title)}</span><span>${escapeHtml(service.concept)}</span></div><h1>${escapeHtml(detail.heroTitle ?? service.title)}</h1><p class="service-detail-subtitle">${escapeHtml(service.subtitle)}</p><p>${escapeHtml(detail.heroText ?? detail.lead)}</p><div class="hero-actions service-detail-actions">${button(detail.cta.href, detail.cta.label)}${button('/services', 'Conhecer outras frentes', 'button button-dark')}</div></section><section class="service-detail-body band-paper"><div class="article-detail-layout"><article class="article-content"><p class="article-opening">${escapeHtml(detail.intro)}</p>${sections}</article>${aside}</div></section>${renderClosingCta()}</main>`;
}

function renderProjectsPage() {
  return `${renderPageFrame('CASES / PORTFÓLIO', 'Projetos que organizam o presente e abrem espaço para o próximo movimento.', 'Uma seleção inicial de frentes em que arquitetura, operação e contexto de negócio precisam caminhar juntos.', `<section class="page-section band-paper">${renderProjects()}</section>`)}${renderClosingCta()}`;
}

function renderBlog() {
  return `${renderPageFrame('BLOG', 'Ideias para atrair, conectar e escalar.', 'Perspectivas da Arcane sobre presença digital, experiências, comunidades, produtos e tecnologia aplicada às escolhas que ajudam empresas a crescer melhor.', `<section class="page-section band-paper">${renderArticles()}</section>`)}${renderClosingCta()}`;
}

function renderArticle(article) {
  const sections = article.sections.map((section) => `<section class="article-content-section"><h2>${escapeHtml(section.heading)}</h2>${(section.paragraphs ?? []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.points ? `<div class="article-points">${section.points.map((point, index) => `<div class="article-point"><span>0${index + 1}</span><div><h3>${escapeHtml(point.title)}</h3><p>${escapeHtml(point.text)}</p></div></div>`).join('')}</div>` : ''}${section.highlight ? `<blockquote>${escapeHtml(section.highlight)}</blockquote>` : ''}</section>`).join('');
  const sources = article.sources.map((source) => link(source.href, `${source.label} ↗`)).join('');
  return `<main class="inner-page article-detail-page"><section class="article-detail-hero band-dark">${link('/blog', '← Voltar ao blog', 'article-back-link')}<div class="article-detail-meta"><span>${escapeHtml(article.number)}</span><span>${escapeHtml(article.category)}</span><span>${escapeHtml(article.readTime)}</span></div><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.intro)}</p></section><section class="article-detail-body band-paper"><div class="article-detail-layout"><article class="article-content"><p class="article-opening">${escapeHtml(article.text)}</p>${sections}<div class="article-sources"><span class="eyebrow">PARA APROFUNDAR</span>${sources}</div></article><aside class="article-aside"><div class="article-aside-card"><span class="eyebrow eyebrow-blue">ARCANE / ${escapeHtml(article.category.toUpperCase())}</span><h2>Quer levar essa ideia para o seu negócio?</h2><p>Conte o contexto. A Arcane ajuda a transformar o próximo passo em uma solução digital clara e possível.</p>${button(article.cta.href, article.cta.label)}</div><div class="article-aside-foot"><span>ARCANE / BLOG</span>${link('/blog', 'Ver outros artigos →')}</div></aside></div></section>${renderClosingCta()}</main>`;
}

function renderAbout() {
  const divisions = siteContent.services.map((service) => `<article class="about-division"><div class="about-division-top"><span>${escapeHtml(service.number)}</span><span>${escapeHtml(service.concept)}</span></div><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.promise)}</p>${link(service.detailHref, `Conhecer ${service.title} →`, 'text-link')}</article>`).join('');
  return `${renderPageFrame('SOBRE A ARCANE', 'Presença. Comunidade. Tecnologia.', 'A Arcane conecta estratégia, criatividade e tecnologia para construir empresas mais fortes no ambiente digital.', `<section class="about-section band-paper"><div class="about-grid"><div><span class="eyebrow eyebrow-blue">NOSSA FORMA DE TRABALHAR</span><h2>O negócio vem antes da ferramenta.</h2></div><div class="about-copy"><p>O código, o conteúdo e o design são partes da entrega. Antes deles, existe uma empresa para entender, uma percepção para construir e um próximo passo para tornar possível.</p><p>É por isso que conectamos estratégia, criatividade e tecnologia em três níveis: presença, relacionamento e operação.</p></div></div><div class="about-divisions">${divisions}</div></section><section class="band-blue about-manifesto"><span class="eyebrow">${escapeHtml(siteContent.brandStatement)}</span><h2>Engenharia de software continua sendo uma competência central. Mas a Arcane existe para conectar o que a empresa precisa comunicar, construir e sustentar.</h2></section>`)}${renderClosingCta()}`;
}

function renderContact() {
  return `${renderPageFrame('CONTATO / PRIMEIRO PASSO', siteContent.contactPage.title, siteContent.contactPage.text, `<section class="contact-section band-paper"><div class="contact-grid"><div class="contact-details"><span class="eyebrow eyebrow-blue">FALE COM A ARCANE</span>${link(`mailto:${siteContent.contact.email}`, siteContent.contact.email, 'contact-email')}${link(siteContent.contact.phoneHref, siteContent.contact.phone)}<span>${escapeHtml(siteContent.contact.location)}</span></div><form class="contact-form"><label for="static-name">Nome<input id="static-name" name="name" type="text" /></label><label for="static-email">E-mail<input id="static-email" name="email" type="email" /></label><label for="static-company">Empresa<input id="static-company" name="company" type="text" /></label><label for="static-message">Contexto<textarea id="static-message" name="message" rows="5"></textarea></label><button class="button button-blue" type="submit">Enviar contexto ${arrow()}</button></form></div></section>`)}`;
}

function renderLegal(kind) {
  const page = siteContent.legal[kind];
  const sections = page.sections.map((section) => `<section class="legal-content-section"><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.items ? `<ul class="legal-list">${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}</section>`).join('');
  const sources = page.sources.map((source) => link(source.href, `${source.label} ↗`)).join('');
  return `${renderPageFrame('ARCANE / LEGAL', page.title, page.intro, `<section class="legal-section band-paper"><div class="legal-layout"><article class="legal-content"><div class="legal-notice"><span class="eyebrow eyebrow-blue">ATUALIZAÇÃO</span><strong>${escapeHtml(page.updatedAt)}</strong><p>${escapeHtml(page.notice)}</p></div>${sections}</article><aside class="legal-aside"><div class="legal-aside-card"><span class="eyebrow eyebrow-blue">${escapeHtml(page.contact.label)}</span><h2>Precisa esclarecer alguma coisa?</h2><p>Envie sua solicitação com contexto suficiente para que a equipe Arcane possa orientar o próximo passo.</p>${button(`mailto:${page.contact.email}`, 'Enviar e-mail')}</div><div class="legal-aside-sources"><span class="eyebrow">REFERÊNCIAS</span>${sources}</div>${link('/contact', 'Falar com a Arcane →', 'legal-back-link')}</aside></div></section>`)}`;
}

function renderNotFound() {
  return `<main class="not-found-page"><section class="not-found-hero band-dark"><div class="not-found-atmosphere" aria-hidden="true"><span class="not-found-orbit not-found-orbit-outer"></span><span class="not-found-orbit not-found-orbit-inner"></span></div><div class="not-found-copy"><div class="section-kicker"><span class="kicker-line"></span><span>ARCANE / ROTA NÃO ENCONTRADA</span></div><span class="not-found-index">404 / FORA DO MAPA</span><h1>O próximo movimento <em>não está aqui.</em></h1><p>Essa rota saiu do ar ou nunca existiu. Mas sua próxima ideia, presença ou operação pode começar por outro caminho.</p><div class="not-found-actions">${button('/', 'Voltar ao início')}${button('/services', 'Explorar serviços', 'button button-outline')}</div></div><div class="not-found-meta"><span>ENDEREÇO ACESSADO</span><code>/rota-desconhecida</code><span>STATUS / 404</span></div></section></main>`;
}

export function renderStaticPage(route) {
  let page = renderNotFound();
  if (route.key === 'home') page = renderHome();
  if (route.key === 'services') page = renderServices();
  if (route.key === 'service') {
    const service = siteContent.services.find((item) => item.slug === route.serviceSlug);
    if (service) page = renderServiceDetail(service);
  }
  if (route.key === 'projects') page = renderProjectsPage();
  if (route.key === 'blog') page = renderBlog();
  if (route.key === 'article') {
    const article = siteContent.articles.find((item) => item.slug === route.articleSlug);
    if (article) page = renderArticle(article);
  }
  if (route.key === 'about') page = renderAbout();
  if (route.key === 'contact') page = renderContact();
  if (['privacy', 'terms', 'cookies'].includes(route.key)) page = renderLegal(route.key);
  return `${renderHeader(route)}${page}${renderFooter()}${renderWhatsApp()}`;
}
