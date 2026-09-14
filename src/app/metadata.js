const defaultMetadata = {
  title: 'Arcane Tecnologia — Estratégia e tecnologia para negócios',
  description: 'Estratégia e tecnologia para transformar ideias em negócios — presença digital, experiências e tecnologia para crescer com estrutura.',
};

export const siteUrl = 'https://arcanetecnologia.com.br';
export const socialImage = '/assets/logo-arcane.png';

const metadataByPath = {
  '/': defaultMetadata,
  '/services': {
    title: 'Serviços digitais, comunidades e tecnologia | Arcane',
    description: 'Conheça Arcane Digital, Arcane Growth e Arcane Rise: presença digital, experiências de comunidade, sistemas, IA e automação.',
  },
  '/services/arcane-digital': {
    title: 'Arcane Digital | Presença digital que posiciona e atrai',
    description: 'Branding, sites, landing pages, conteúdo, campanhas, SEO e experiências digitais para sua empresa ser percebida e escolhida.',
  },
  '/services/arcane-growth': {
    title: 'Arcane Growth | Transforme audiência em comunidade',
    description: 'Aplicativos, comunidades, membership, fidelidade e experiências digitais recorrentes para aproximar marcas e pessoas.',
  },
  '/services/arcane-rise': {
    title: 'Arcane Rise | Tecnologia para operações prontas para escalar',
    description: 'Sistemas, SaaS, APIs, IA, agentes, automações e integrações para transformar processos em tecnologia.',
  },
  '/projects': {
    title: 'Cases e projetos digitais | Arcane Tecnologia',
    description: 'Conheça frentes de projeto em que arquitetura, operação e contexto de negócio caminham juntos.',
  },
  '/blog': {
    title: 'Blog | Presença, comunidade e tecnologia | Arcane',
    description: 'Perspectivas da Arcane sobre presença digital, experiências, comunidades, produtos, automação e tecnologia aplicada ao negócio.',
  },
  '/about': {
    title: 'Sobre a Arcane | Presença, comunidade e tecnologia',
    description: 'A Arcane conecta estratégia, criatividade e tecnologia para construir empresas mais fortes no ambiente digital.',
  },
  '/contact': {
    title: 'Inicie um projeto | Arcane Tecnologia',
    description: 'Conte o contexto da sua empresa e encontre o melhor caminho entre presença, comunidade e tecnologia com a Arcane.',
  },
  '/privacy': {
    title: 'Política de Privacidade | Arcane Tecnologia',
    description: 'Saiba como a Arcane trata dados pessoais e solicitações realizadas pelo site.',
  },
  '/terms': {
    title: 'Termos de Uso | Arcane Tecnologia',
    description: 'Consulte os termos de uso do site da Arcane Tecnologia.',
  },
  '/cookies': {
    title: 'Política de Cookies | Arcane Tecnologia',
    description: 'Entenda as categorias e finalidades dos cookies utilizados no site da Arcane.',
  },
  '/blog/a-atencao-certa-comeca-antes-do-clique': {
    title: 'A atenção certa começa antes do clique | Blog Arcane',
    description: 'Uma presença digital consistente conecta posicionamento, conteúdo e conversão para transformar interesse em oportunidade.',
  },
  '/blog/quando-uma-ideia-pede-um-produto-proprio': {
    title: 'Quando uma ideia pede um produto próprio | Blog Arcane',
    description: 'O caminho entre uma boa ideia e um produto que funciona passa por contexto, experiência bem desenhada e tecnologia preparada para crescer.',
  },
  '/blog/automacao-boa-devolve-tempo-para-o-negocio': {
    title: 'Automação boa devolve tempo para o negócio | Blog Arcane',
    description: 'Conectar ferramentas, dados e inteligência libera o time do trabalho repetitivo e abre espaço para decisões melhores.',
  },
};

const notFoundMetadata = {
  title: 'Página não encontrada | Arcane Tecnologia',
  description: 'O endereço acessado não corresponde a uma página publicada pela Arcane Tecnologia.',
};

export function getRouteMetadata(route = { path: '/' }) {
  if (route.key === 'not-found') return notFoundMetadata;
  if (route.key === 'redirect') return metadataByPath[route.redirectTo] ?? defaultMetadata;
  return metadataByPath[route.path] ?? defaultMetadata;
}

const organizationId = `${siteUrl}/#organization`;

const organizationData = {
  '@type': 'Organization',
  '@id': organizationId,
  name: 'Arcane Tecnologia',
  url: `${siteUrl}/`,
  logo: `${siteUrl}${socialImage}`,
  email: 'comercial@arcanetecnologia.com.br',
  telephone: '+55 12 99133-2258',
  contactPoint: [{
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'comercial@arcanetecnologia.com.br',
    telephone: '+55 12 99133-2258',
    availableLanguage: ['pt-BR'],
  }],
};

const serviceDataByPath = {
  '/services/arcane-digital': {
    name: 'Arcane Digital',
    serviceType: 'Presença digital, branding, web, conteúdo, campanhas e SEO',
  },
  '/services/arcane-growth': {
    name: 'Arcane Growth',
    serviceType: 'Aplicativos, comunidades, membership, fidelidade e experiências digitais',
  },
  '/services/arcane-rise': {
    name: 'Arcane Rise',
    serviceType: 'Sistemas, SaaS, APIs, IA, agentes, automações e integrações',
  },
};

const routeLabelByPath = {
  '/services': 'Serviços',
  '/services/arcane-digital': 'Arcane Digital',
  '/services/arcane-growth': 'Arcane Growth',
  '/services/arcane-rise': 'Arcane Rise',
  '/projects': 'Cases',
  '/blog': 'Blog',
  '/about': 'Sobre',
  '/contact': 'Contato',
  '/privacy': 'Política de Privacidade',
  '/terms': 'Termos de Uso',
  '/cookies': 'Política de Cookies',
};

function getBreadcrumbData(path, currentLabel) {
  if (!path || path === '/') return null;

  const items = [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteUrl}/` },
  ];

  if (path.startsWith('/services/')) {
    items.push({ '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteUrl}/services` });
  } else if (path.startsWith('/blog/')) {
    items.push({ '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` });
  }

  items.push({
    '@type': 'ListItem',
    position: items.length + 1,
    name: currentLabel,
    item: `${siteUrl}${path}`,
  });

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function getStructuredData(route = { path: '/' }) {
  if (route.key === 'not-found') return null;

  const path = route.key === 'redirect' ? route.redirectTo : route.path;
  const metadata = getRouteMetadata(route);
  const pageUrl = `${siteUrl}${path}`;
  const currentLabel = routeLabelByPath[path] ?? metadata.title.replace(/ \| (?:Blog Arcane|Arcane)$/, '');
  const graph = [];

  if (path === '/') {
    graph.push(organizationData, {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Arcane Tecnologia',
      url: `${siteUrl}/`,
      inLanguage: 'pt-BR',
      publisher: { '@id': organizationId },
    });
  } else if (serviceDataByPath[path]) {
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: serviceDataByPath[path].name,
      serviceType: serviceDataByPath[path].serviceType,
      description: metadata.description,
      url: pageUrl,
      provider: { '@id': organizationId },
      inLanguage: 'pt-BR',
    });
  } else if (route.key === 'article') {
    graph.push({
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: metadata.title.replace(/ \| Blog Arcane$/, ''),
      description: metadata.description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      publisher: { '@id': organizationId },
      inLanguage: 'pt-BR',
    });
  } else {
    const pageType = route.key === 'about' ? 'AboutPage' : route.key === 'contact' ? 'ContactPage' : 'WebPage';
    graph.push({
      '@type': pageType,
      '@id': `${pageUrl}#webpage`,
      name: metadata.title,
      description: metadata.description,
      url: pageUrl,
      isPartOf: { '@id': `${siteUrl}/#website` },
      inLanguage: 'pt-BR',
    });
  }

  const breadcrumbs = getBreadcrumbData(path, currentLabel);
  if (breadcrumbs) graph.push(breadcrumbs);

  return { '@context': 'https://schema.org', '@graph': graph };
}

function setMetaDescription(description) {
  let element = document.querySelector('meta[name="description"]');
  if (!element) {
    element = document.createElement('meta');
    element.name = 'description';
    document.head.appendChild(element);
  }
  element.content = description;
}

function setCanonical(path) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = `${siteUrl}${path}`;
}

function removeCanonical() {
  document.querySelector('link[rel="canonical"]')?.remove();
}

function setStructuredData(data) {
  let element = document.querySelector('script[data-arcane-structured-data="true"]');
  if (!data) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.arcaneStructuredData = 'true';
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

function setMeta(attribute, name, content) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function applyRouteMetadata(route) {
  if (typeof document === 'undefined') return;
  const metadata = getRouteMetadata(route);
  document.title = metadata.title;
  setMetaDescription(metadata.description);
  if (route.key === 'not-found') removeCanonical();
  else setCanonical(route.path);
  setMeta('property', 'og:title', metadata.title);
  setMeta('property', 'og:description', metadata.description);
  setMeta('property', 'og:url', `${siteUrl}${route.path}`);
  setMeta('property', 'og:type', route.key === 'article' ? 'article' : 'website');
  setMeta('property', 'og:image', `${siteUrl}${socialImage}`);
  setMeta('property', 'og:image:alt', 'Arcane Tecnologia');
  setMeta('property', 'og:image:type', 'image/png');
  setMeta('property', 'og:image:width', '1254');
  setMeta('property', 'og:image:height', '1254');
  setMeta('name', 'twitter:card', 'summary');
  setMeta('name', 'twitter:title', metadata.title);
  setMeta('name', 'twitter:description', metadata.description);
  setMeta('name', 'twitter:image', `${siteUrl}${socialImage}`);
  setMeta('name', 'twitter:image:alt', 'Arcane Tecnologia');
  setMeta('name', 'robots', route.key === 'not-found' ? 'noindex,follow' : 'index,follow');
  setStructuredData(getStructuredData(route));
}
