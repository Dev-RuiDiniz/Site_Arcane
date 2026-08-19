# Arcane Site Initial Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir e subir localmente a primeira versão responsiva do site institucional da Arcane Tecnologia nas nove rotas aprovadas.

**Architecture:** Aplicação React + Vite com roteamento leve baseado em `history.pushState`, conteúdo estruturado em módulos e shell global composto por cabeçalho, menu, CTA, seções e rodapé. A primeira versão é frontend-only; formulário e navegação funcionam localmente sem backend.

**Tech Stack:** React, Vite, CSS customizado, Vitest, Playwright CLI para verificação visual e de interação.

**Spec:** `docs/superpowers/specs/2026-08-19-arcane-site-design.md`

## Global Constraints

- Manter somente as rotas `/`, `/services`, `/projects`, `/blog`, `/about`, `/contact`, `/privacy`, `/terms` e `/cookies`.
- Usar conteúdo e identidade próprios da Arcane; não reutilizar textos, logo ou imagens da Limbrand.
- CTA comercial principal: “Agendar reunião” com destino `/contact`.
- Contatos: `comercial@arcanetecnologia.com.br`, `(12) 99133-2258`, `São Paulo, Brasil`.
- Copyright: `© 2026 Arcane Tecnologia. Todos os direitos reservados.`
- Verificar desktop e mobile antes do handoff.

---

### Task 1: Scaffold e contrato de conteúdo

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/app/content.js`
- Create: `src/app/routes.js`
- Create: `src/app/routes.test.js`

**Interfaces:**
- `routes.js` exporta `normalizePath(pathname)` e `getRoute(pathname)`.
- `content.js` exporta `siteContent`, com navegação, contato, serviços, cases, artigos e páginas legais.

- [x] **Step 1: Write the failing route/content tests**
- [x] **Step 2: Run `npm test -- --run src/app/routes.test.js` and confirm failure because the app modules do not exist**
- [x] **Step 3: Add the Vite/React scaffold and implement route/content modules**
- [x] **Step 4: Run the focused test and confirm it passes**

### Task 2: Shell global e navegação

**Files:**
- Create: `src/components/Header.jsx`
- Create: `src/components/MenuOverlay.jsx`
- Create: `src/components/SiteFooter.jsx`
- Create: `src/components/ClosingCta.jsx`
- Create: `src/components/SectionIntro.jsx`
- Modify: `src/main.jsx`

**Interfaces:**
- `Header` recebe `{ currentPath, onNavigate }`.
- `MenuOverlay` recebe `{ open, onClose, onNavigate }`.
- `ClosingCta` recebe `{ title, text }` e sempre navega para `/contact`.

- [x] **Step 1: Add shell component tests for the navigation contract**
- [x] **Step 2: Run the tests and confirm the new component assertions fail**
- [x] **Step 3: Implement shell components with semantic landmarks and keyboard behavior**
- [x] **Step 4: Run the tests and confirm the shell behavior passes**

### Task 3: Páginas e conteúdo das rotas

**Files:**
- Create: `src/components/PageFrame.jsx`
- Create: `src/components/ServiceList.jsx`
- Create: `src/components/ProjectGrid.jsx`
- Create: `src/components/ArticleGrid.jsx`
- Create: `src/components/ContactForm.jsx`
- Create: `src/pages/HomePage.jsx`
- Create: `src/pages/ServicesPage.jsx`
- Create: `src/pages/ProjectsPage.jsx`
- Create: `src/pages/BlogPage.jsx`
- Create: `src/pages/AboutPage.jsx`
- Create: `src/pages/ContactPage.jsx`
- Create: `src/pages/LegalPage.jsx`
- Modify: `src/main.jsx`

- [x] **Step 1: Add tests for route rendering and contact validation**
- [x] **Step 2: Run focused tests and confirm failure**
- [x] **Step 3: Implement the pages and reusable content sections**
- [x] **Step 4: Run focused tests and confirm pass**

### Task 4: Linguagem visual responsiva

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/styles/site.css`
- Modify: `src/main.jsx`

- [x] **Step 1: Add visual smoke assertions for required route copy and CTA labels**
- [x] **Step 2: Run tests and confirm failure**
- [x] **Step 3: Implement palette, typography, spacing, bands, responsive breakpoints, focus states and reduced motion**
- [x] **Step 4: Run tests, build and confirm pass**

### Task 5: Verificação local e handoff

**Files:**
- Create: `docs/verification/arcane-site-local.md`
- Modify: `README.md`

- [x] **Step 1: Run `npm test -- --run`**
- [x] **Step 2: Run `npm run build`**
- [x] **Step 3: Start `npm run dev -- --host 0.0.0.0 --port 4173`**
- [x] **Step 4: Use Playwright to verify `/`, `/services`, `/projects`, `/blog`, `/about` and `/contact` on desktop and mobile**
- [x] **Step 5: Verify menu open/close, CTA navigation and contact success state**
- [x] **Step 6: Save screenshots and record the exact verification evidence**
