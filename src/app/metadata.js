const defaultMetadata = {
  title: 'Arcane Tecnologia — Estratégia e tecnologia para negócios',
  description: 'Estratégia e tecnologia para transformar ideias em negócios — presença digital, experiências e tecnologia para crescer com estrutura.',
};

const siteUrl = 'https://arcanetecnologia.com.br';
const socialImage = '/assets/arcane-logo-horizontal.png';

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
  setMeta('name', 'twitter:card', 'summary');
  setMeta('name', 'twitter:title', metadata.title);
  setMeta('name', 'twitter:description', metadata.description);
  setMeta('name', 'robots', route.key === 'not-found' ? 'noindex,follow' : 'index,follow');
}
