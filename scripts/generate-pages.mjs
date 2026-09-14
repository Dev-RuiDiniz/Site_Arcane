import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { routeTable } from '../src/app/routes.js';
import {
  getRouteMetadata,
  getStructuredData,
  siteUrl,
  socialImage,
} from '../src/app/metadata.js';
import { renderStaticPage } from '../src/app/prerender.js';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const templatePath = path.join(distDirectory, 'index.html');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceTitle(html, title) {
  return html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
}

function replaceMeta(html, attribute, name, content) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapeRegExp(name)}"\\s+content="[^"]*"\\s*/?>`,
    'i',
  );
  const tag = `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function replaceCanonical(html, url) {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;
  const pattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>(?=\s|<)/i;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function removeCanonical(html) {
  return html.replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>(?=\s|<)/i, '');
}

function replaceStructuredData(html, data) {
  const withoutStructuredData = html.replace(
    /\s*<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
    '',
  );
  if (!data) return withoutStructuredData;

  const json = JSON.stringify(data).replaceAll('<', '\\u003c');
  const tag = `<script type="application/ld+json" data-arcane-structured-data="true">${json}</script>`;
  return withoutStructuredData.replace('</head>', `    ${tag}\n  </head>`);
}

function replaceRoot(html, route) {
  const staticPage = renderStaticPage(route);
  const pattern = /<div\s+id="root"><\/div>/i;
  const replacement = `<div id="root">${staticPage}</div>`;
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

function renderRoute(template, route) {
  const metadata = getRouteMetadata(route);
  const pageUrl = `${siteUrl}${route.path}`;
  const type = route.key === 'article' ? 'article' : 'website';
  let html = template;

  html = replaceTitle(html, metadata.title);
  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'name', 'robots', 'index,follow');
  html = replaceMeta(html, 'property', 'og:type', type);
  html = replaceMeta(html, 'property', 'og:title', metadata.title);
  html = replaceMeta(html, 'property', 'og:description', metadata.description);
  html = replaceMeta(html, 'property', 'og:url', pageUrl);
  html = replaceMeta(html, 'property', 'og:image', `${siteUrl}${socialImage}`);
  html = replaceMeta(html, 'property', 'og:image:alt', 'Arcane Tecnologia');
  html = replaceMeta(html, 'name', 'twitter:card', 'summary');
  html = replaceMeta(html, 'name', 'twitter:title', metadata.title);
  html = replaceMeta(html, 'name', 'twitter:description', metadata.description);
  html = replaceMeta(html, 'name', 'twitter:image', `${siteUrl}${socialImage}`);
  html = replaceMeta(html, 'name', 'twitter:image:alt', 'Arcane Tecnologia');
  html = replaceMeta(html, 'property', 'og:image:type', 'image/png');
  html = replaceMeta(html, 'property', 'og:image:width', '1254');
  html = replaceMeta(html, 'property', 'og:image:height', '1254');
  html = replaceCanonical(html, pageUrl);
  html = replaceStructuredData(html, getStructuredData(route));
  return replaceRoot(html, route);
}

function renderNotFound(template) {
  const metadata = getRouteMetadata({ path: '/404', key: 'not-found' });
  let html = template;

  html = replaceTitle(html, metadata.title);
  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'name', 'robots', 'noindex,follow');
  html = replaceMeta(html, 'property', 'og:type', 'website');
  html = replaceMeta(html, 'property', 'og:title', metadata.title);
  html = replaceMeta(html, 'property', 'og:description', metadata.description);
  html = replaceMeta(html, 'property', 'og:url', `${siteUrl}/404`);
  html = replaceMeta(html, 'name', 'twitter:title', metadata.title);
  html = replaceMeta(html, 'name', 'twitter:description', metadata.description);
  html = removeCanonical(html);
  html = replaceStructuredData(html, null);
  return replaceRoot(html, { path: '/404', key: 'not-found' });
}

const template = await fs.readFile(templatePath, 'utf8');
await fs.writeFile(templatePath, renderRoute(template, routeTable[0]), 'utf8');
await fs.writeFile(path.join(distDirectory, '404.html'), renderNotFound(template), 'utf8');

for (const route of routeTable.slice(1)) {
  const outputDirectory = path.join(distDirectory, route.path.slice(1));
  await fs.mkdir(outputDirectory, { recursive: true });
  await fs.writeFile(path.join(outputDirectory, 'index.html'), renderRoute(template, route), 'utf8');
}

console.log(`Generated static SEO documents for ${routeTable.length} routes.`);
