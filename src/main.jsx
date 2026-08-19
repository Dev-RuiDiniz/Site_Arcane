import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getRoute } from './app/routes.js';
import { Header } from './components/Header.jsx';
import { MenuOverlay } from './components/MenuOverlay.jsx';
import { SiteFooter } from './components/SiteFooter.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { BlogPage } from './pages/BlogPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { LegalPage } from './pages/LegalPage.jsx';
import { WhatsAppFloat } from './components/WhatsAppFloat.jsx';
import { ArticleDetailPage } from './pages/ArticleDetailPage.jsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.jsx';
import { siteContent } from './app/content.js';
import './styles/tokens.css';
import './styles/global.css';
import './styles/site.css';

function App() {
  const [route, setRoute] = useState(() => getRoute(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const handleKeyDown = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKeyDown);
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', handleKeyDown); };
  }, [menuOpen]);

  function handleNavigate(event, path) {
    if (!path.startsWith('/')) return;
    event?.preventDefault();
    const nextRoute = getRoute(path);
    window.history.pushState({}, '', nextRoute.path);
    setRoute(nextRoute);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const pageProps = { onNavigate: handleNavigate };
  let page;
  if (route.key === 'home') page = <HomePage {...pageProps} />;
  if (route.key === 'services') page = <ServicesPage {...pageProps} />;
  if (route.key === 'projects') page = <ProjectsPage {...pageProps} />;
  if (route.key === 'blog') page = <BlogPage {...pageProps} />;
  if (route.key === 'about') page = <AboutPage {...pageProps} />;
  if (route.key === 'contact') page = <ContactPage {...pageProps} />;
  if (route.key === 'article') {
    const article = siteContent.articles.find((item) => item.slug === route.articleSlug);
    page = article ? <ArticleDetailPage article={article} {...pageProps} /> : <BlogPage {...pageProps} />;
  }
  if (route.key === 'service') {
    const service = siteContent.services.find((item) => item.slug === route.serviceSlug);
    page = service ? <ServiceDetailPage service={service} {...pageProps} /> : <ServicesPage {...pageProps} />;
  }
  if (['privacy', 'terms', 'cookies'].includes(route.key)) page = <LegalPage kind={route.key} {...pageProps} />;

  return <><Header currentPath={route.path} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} onNavigate={handleNavigate} /><MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={handleNavigate} />{page}<SiteFooter onNavigate={handleNavigate} /><WhatsAppFloat /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
