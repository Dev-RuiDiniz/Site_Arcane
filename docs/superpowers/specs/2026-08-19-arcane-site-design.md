# Arcane Tecnologia — Direção institucional

## Objetivo

Manter o site institucional navegável da Arcane Tecnologia e posicionar a empresa como parceira de presença, comunidade e tecnologia para negócios digitais.

## Escopo aprovado

Rotas principais:

- `/` — Home
- `/services` — Serviços
- `/services/arcane-digital` — Arcane Digital
- `/services/arcane-growth` — Arcane Growth
- `/services/arcane-rise` — Arcane Rise
- `/projects` — Cases / Portfólio
- `/blog` — Blog
- `/about` — Sobre
- `/contact` — Contato / Agendamento
- `/privacy` — Política de Privacidade
- `/terms` — Termos de Uso
- `/cookies` — Política de Cookies

As três divisões possuem páginas próprias. O CTA comercial principal abre uma conversa contextualizada no WhatsApp e a rota `/contact` mantém o formulário de entrada.

## Direção visual

- Referência estrutural: linguagem editorial e premium observada em `REFERENCIA-LIMBRAND.md`, sem copiar texto, marca ou ativos.
- Paleta: preto profundo, off-white e azul elétrico.
- Tipografia: Poppins para títulos editoriais e assinatura da marca, Manrope para leitura e interface, e IBM Plex Mono para labels, números e metadados técnicos.
- Ritmo: bandas alternadas claras/escuras, linhas finas, números de processo e bastante espaço negativo.
- Arcane: tom editorial, estratégico e tecnológico, usando presença, comunidade, experiência, engenharia, automação e escala.

## Componentes globais

- `Header`: wordmark oficial Arcane, navegação desktop, botão de menu mobile/fullscreen e CTA “Iniciar um projeto”.
- `MenuOverlay`: navegação numerada, fechamento por botão, Escape e clique de rota.
- `SectionIntro`: label azul, linha guia e título editorial.
- `PrimaryCta` / `TextLink`: CTAs consistentes.
- `SiteFooter`: descrição institucional, navegação, contato e links legais.
- `ClosingCta`: bloco recorrente com foco em operação crítica e convite comercial.

## Conteúdo de primeira versão

Hero: “Estratégia e tecnologia para transformar ideias em negócios.”

Mensagem de apoio: “Criamos presenças digitais, desenvolvemos experiências e conectamos tecnologia para empresas que querem atrair mais, criar relacionamento e escalar com estrutura.”

Serviços: presença digital, aplicativos e comunidades, sistemas, IA, automação e integrações.

Cases: dados de exemplo próprios da Arcane, apresentados como portfólio inicial sem inventar clientes identificáveis.

Blog: três cards editoriais com temas de governança, rastreabilidade e escala.

Contato: `comercial@arcanetecnologia.com.br`, `(12) 99133-2258`, `São Paulo, Brasil`.

Rodapé: `© 2026 Arcane Tecnologia. Todos os direitos reservados.`

## Interações

- O menu abre e fecha com estado real e bloqueia o scroll do documento enquanto estiver aberto.
- Links de navegação atualizam a rota sem recarregar a página durante o desenvolvimento local.
- O formulário da rota `/contact` valida nome, e-mail e mensagem; ao enviar dados válidos, prepara uma mensagem contextual no WhatsApp.
- Respeitar `prefers-reduced-motion` nas transições.

## Não escopo

- CMS, autenticação, banco de dados, envio real de formulário ou integração de CRM.
- Conteúdo editorial final, imagens proprietárias, logo vetorial oficial ou publicação em produção.
