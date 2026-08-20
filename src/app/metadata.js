const defaultMetadata = {
  title: 'Arcane Tecnologia — Negócios digitais que funcionam',
  description: 'Estratégia e tecnologia para transformar ideias em negócios digitais que funcionam: experiências digitais, produtos próprios e automações para crescer melhor.',
};

const metadataByPath = {
  '/': defaultMetadata,
  '/services': {
    title: 'Serviços digitais, software e automação | Arcane Tecnologia',
    description: 'Conheça as frentes Arcane Digital, Arcane Labs e Arcane Growth para fortalecer sua presença digital, construir produtos próprios e automatizar operações.',
  },
  '/services/arcane-digital': {
    title: 'Arcane Digital | Landing pages, campanhas e conteúdo',
    description: 'Landing pages, campanhas, conteúdo e materiais comerciais para transformar atenção qualificada em oportunidades de negócio.',
  },
  '/services/arcane-labs': {
    title: 'Arcane Labs | Sistemas, aplicativos e produtos digitais',
    description: 'Desenvolvimento de sistemas web, aplicativos, plataformas SaaS e produtos digitais sob medida para empresas que precisam construir tecnologia própria.',
  },
  '/services/arcane-growth': {
    title: 'Arcane Growth | IA, automações e integrações',
    description: 'Automação de processos, integrações entre CRM, WhatsApp e APIs e aplicação de IA para reduzir retrabalho e dar escala à operação.',
  },
  '/projects': {
    title: 'Cases e projetos digitais | Arcane Tecnologia',
    description: 'Conheça frentes de projeto em que arquitetura, operação e contexto de negócio caminham juntos.',
  },
  '/blog': {
    title: 'Blog | Estratégia, produto e automação | Arcane',
    description: 'Perspectivas da Arcane sobre presença digital, produtos próprios, automação e escolhas para empresas crescerem melhor.',
  },
  '/about': {
    title: 'Sobre a Arcane | Engenharia orientada por contexto',
    description: 'A Arcane conecta tecnologia e operação para substituir improvisos por uma base mais sólida, rastreável e preparada para evolução.',
  },
  '/contact': {
    title: 'Agende uma conversa | Arcane Tecnologia',
    description: 'Conte o contexto do seu projeto, produto ou operação e agende uma conversa objetiva com a equipe Arcane.',
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
};

export function getRouteMetadata(route = { path: '/' }) {
  return metadataByPath[route.path] ?? defaultMetadata;
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
  element.href = `${window.location.origin}${path}`;
}

export function applyRouteMetadata(route) {
  if (typeof document === 'undefined') return;
  const metadata = getRouteMetadata(route);
  document.title = metadata.title;
  setMetaDescription(metadata.description);
  setCanonical(route.path);
}
