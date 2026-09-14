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
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { siteContent } from './app/content.js';
import { applyRouteMetadata } from './app/metadata.js';
import { initializeAnalytics, trackPageView, trackWhatsAppClick } from './app/analytics.js';
import './styles/tokens.css';
import './styles/global.css';
import './styles/site.css';

function App() {
  const [route, setRoute] = useState(() => getRoute(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let finished = false;
    let finishTimeout;
    const startedAt = performance.now();
    const minimumDuration = 560;

    const finishLoading = () => {
      if (finished) return;
      finished = true;
      window.removeEventListener('load', finishLoading);
      const remaining = Math.max(0, minimumDuration - (performance.now() - startedAt));
      finishTimeout = window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === 'complete') finishLoading();
    else window.addEventListener('load', finishLoading, { once: true });
    const fallbackTimeout = window.setTimeout(finishLoading, 1600);

    return () => {
      finished = true;
      window.removeEventListener('load', finishLoading);
      window.clearTimeout(fallbackTimeout);
      window.clearTimeout(finishTimeout);
    };
  }, []);

  useEffect(() => {
    const updateHeaderVisibility = () => setHeaderVisible(window.scrollY > 24);
    updateHeaderVisibility();
    window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateHeaderVisibility);
  }, []);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (route.key !== 'redirect') return;
    window.history.replaceState({}, '', route.redirectTo);
    setRoute(getRoute(route.redirectTo));
  }, [route]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const handleKeyDown = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKeyDown);
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', handleKeyDown); };
  }, [menuOpen]);

  useEffect(() => {
    if (route.key === 'redirect') return;
    applyRouteMetadata(route);
    initializeAnalytics();
    trackPageView(route.path);
  }, [route]);

  useEffect(() => {
    function handleWhatsAppClick(event) {
      const target = event.target instanceof Element ? event.target.closest('a[href*="wa.me/"]') : null;
      if (!target) return;
      trackWhatsAppClick({
        source: 'link',
        label: target.textContent.trim().replace(/\s+/g, ' ').slice(0, 100),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener('click', handleWhatsAppClick);
    return () => document.removeEventListener('click', handleWhatsAppClick);
  }, []);

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
  if (route.key === 'not-found') page = <NotFoundPage {...pageProps} />;

  if (route.key === 'redirect') return <LoadingScreen />;

  return <>
    <div aria-hidden={isLoading}>
      <Header currentPath={route.path} isVisible={route.key !== 'home' || headerVisible || menuOpen} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} onNavigate={handleNavigate} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={handleNavigate} />
      {page}
      <SiteFooter onNavigate={handleNavigate} />
      <WhatsAppFloat />
    </div>
    {isLoading ? <LoadingScreen /> : null}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
