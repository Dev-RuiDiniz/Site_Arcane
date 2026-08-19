# Arcane Tecnologia — Design inicial

## Objetivo

Criar a primeira versão navegável do novo site institucional da Arcane Tecnologia, posicionando a empresa como parceira de engenharia para operações críticas que precisam de arquitetura autoral, clareza operacional e evolução previsível.

## Escopo aprovado

Rotas principais:

- `/` — Home
- `/services` — Serviços
- `/projects` — Cases / Portfólio
- `/blog` — Blog
- `/about` — Sobre
- `/contact` — Contato / Agendamento
- `/privacy` — Política de Privacidade
- `/terms` — Termos de Uso
- `/cookies` — Política de Cookies

Não criar rotas individuais para serviços ou cases. O CTA comercial “Agendar reunião” aponta sempre para `/contact`.

## Direção visual

- Referência estrutural: linguagem editorial e premium observada em `REFERENCIA-LIMBRAND.md`, sem copiar texto, marca ou ativos.
- Paleta: preto profundo, off-white e azul elétrico.
- Tipografia: sans-serif contemporânea com títulos grandes, labels em caixa alta e tracking controlado.
- Ritmo: bandas alternadas claras/escuras, linhas finas, números de processo e bastante espaço negativo.
- Arcane: tom mais técnico e operacional, usando palavras de engenharia, rastreabilidade, governança, automação e escala.

## Componentes globais

- `Header`: wordmark textual Arcane, navegação desktop, botão de menu mobile/fullscreen e CTA “Agendar reunião”.
- `MenuOverlay`: navegação numerada, fechamento por botão, Escape e clique de rota.
- `SectionIntro`: label azul, linha guia e título editorial.
- `PrimaryCta` / `TextLink`: CTAs consistentes.
- `SiteFooter`: descrição institucional, navegação, contato e links legais.
- `ClosingCta`: bloco recorrente com foco em operação crítica e convite comercial.

## Conteúdo de primeira versão

Hero: “Tecnologia que transforma complexidade operacional em vantagem competitiva.”

Mensagem de apoio: “Arquitetura autoral, automação com critério e execução com contexto de negócio.”

Serviços: arquitetura e engenharia de software, automação operacional, integrações e produtos proprietários.

Cases: dados de exemplo próprios da Arcane, apresentados como portfólio inicial sem inventar clientes identificáveis.

Blog: três cards editoriais com temas de governança, rastreabilidade e escala.

Contato: `comercial@arcanetecnologia.com.br`, `(12) 99133-2258`, `São Paulo, Brasil`.

Rodapé: `© 2026 Arcane Tecnologia. Todos os direitos reservados.`

## Interações

- O menu abre e fecha com estado real e bloqueia o scroll do documento enquanto estiver aberto.
- Links de navegação atualizam a rota sem recarregar a página durante o desenvolvimento local.
- O formulário da rota `/contact` valida nome, e-mail e mensagem; ao enviar dados válidos, exibe confirmação local sem enviar dados para terceiros.
- Respeitar `prefers-reduced-motion` nas transições.

## Não escopo

- CMS, autenticação, banco de dados, envio real de formulário ou integração de CRM.
- Conteúdo editorial final, imagens proprietárias, logo vetorial oficial ou publicação em produção.
