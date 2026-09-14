export const routeTable = [
  { path: '/', key: 'home' },
  { path: '/services', key: 'services' },
  { path: '/services/arcane-digital', key: 'service', serviceSlug: 'arcane-digital' },
  { path: '/services/arcane-growth', key: 'service', serviceSlug: 'arcane-growth' },
  { path: '/services/arcane-rise', key: 'service', serviceSlug: 'arcane-rise' },
  { path: '/projects', key: 'projects' },
  { path: '/blog', key: 'blog' },
  { path: '/blog/a-atencao-certa-comeca-antes-do-clique', key: 'article', articleSlug: 'a-atencao-certa-comeca-antes-do-clique' },
  { path: '/blog/quando-uma-ideia-pede-um-produto-proprio', key: 'article', articleSlug: 'quando-uma-ideia-pede-um-produto-proprio' },
  { path: '/blog/automacao-boa-devolve-tempo-para-o-negocio', key: 'article', articleSlug: 'automacao-boa-devolve-tempo-para-o-negocio' },
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' },
  { path: '/privacy', key: 'privacy' },
  { path: '/terms', key: 'terms' },
  { path: '/cookies', key: 'cookies' },
];

export const legacyRedirects = {
  '/services/arcane-labs': '/services/arcane-rise',
};

export function normalizePath(pathname = '/') {
  const path = pathname.split('?')[0].split('#')[0] || '/';
  if (path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

export function getRoute(pathname = '/') {
  const normalized = normalizePath(pathname);
  if (legacyRedirects[normalized]) {
    return { path: normalized, key: 'redirect', redirectTo: legacyRedirects[normalized] };
  }
  return routeTable.find((route) => route.path === normalized) ?? { path: normalized, key: 'not-found' };
}
