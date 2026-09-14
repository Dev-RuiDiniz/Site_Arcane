# Arcane Tecnologia

Primeira versão local do novo site institucional da Arcane Tecnologia.

Posicionamento atual: **Estratégia e tecnologia para transformar ideias em negócios.** A arquitetura **Atraia. Conecte. Escale.** organiza Arcane Digital, Arcane Growth e Arcane Rise, com “Iniciar um projeto” como CTA principal.

## Visão comercial

A Arcane combina estratégia e tecnologia para transformar ideias em negócios. Ajudamos empresas a entrar no mercado digital e negócios que já estão nele a atrair mais, criar relacionamento e escalar com estrutura.

Não somos uma agência tradicional nem uma software house genérica. Atuamos como parceira de estratégia, criatividade e tecnologia para conectar presença, comunidade e operação em uma evolução contínua:

- **Arcane Digital — Atraia.** Branding, sites, landing pages, conteúdo, campanhas, SEO e materiais comerciais para fazer a empresa ser encontrada, percebida e escolhida.
- **Arcane Growth — Conecte.** Aplicativos, comunidades, membership, fidelidade, portais e experiências recorrentes para transformar audiência em relacionamento.
- **Arcane Rise — Escale.** Sistemas, SaaS, APIs, IA, agentes, automações e integrações para transformar processos em tecnologia.

### Para quem é

Para empresas que precisam vender melhor, validar uma nova frente, criar tecnologia própria ou organizar uma operação que cresceu além das ferramentas genéricas, planilhas e processos desconectados.

### Como a Arcane gera valor

Começamos pelo contexto do negócio e pelo resultado esperado. A partir daí, combinamos posicionamento, design, engenharia e automação na medida certa para reduzir fricção, aumentar previsibilidade e criar uma base capaz de acompanhar a próxima fase da empresa.

O resultado é uma presença mais consistente, produtos mais úteis e operações com menos retrabalho — tecnologia aplicada para fazer o negócio funcionar melhor.

### Próximo passo

Tem uma campanha, ideia, produto ou processo que precisa evoluir? [Agende uma conversa pelo WhatsApp](https://wa.me/5512991332258) e conte o contexto para a equipe Arcane. A conversa começa pelo problema e pelo objetivo, para encontrarmos o caminho mais adequado.

Ativos oficiais utilizados:

- `public/assets/logo-arcane.png` — logo oficial enviado pela Arcane, usado em Open Graph, Twitter Cards e dados estruturados.
- `public/assets/logo-arcane-small.webp` — versão otimizada para navegação e rodapé.
- `public/assets/video-fundo.mp4` — fonte original do vídeo institucional do hero, mantida como ativo-fonte.
- `public/assets/video-fundo-optimized.mp4` — versão desktop do hero, 720×406, sem áudio e com carregamento otimizado.
- `public/assets/video-fundo-mobile.mp4` — versão mobile do hero, 480×270, sem áudio e com bitrate reduzido.
- `public/assets/video-fundo-poster.jpg` — poster imediato do hero para a primeira pintura da página.
- `public/assets/whatsapp-logo-green.svg` — símbolo oficial do WhatsApp, obtido a partir do ativo publicado com fonte Meta.

Contato comercial: CTAs e botão flutuante direcionam para o WhatsApp `https://wa.me/5512991332258`, com mensagens contextuais por serviço.

## Executar localmente

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4173 --strictPort
```

Abra `http://localhost:4173/`.

## Rotas

- `/`
- `/services`
- `/services/arcane-digital`
- `/services/arcane-growth`
- `/services/arcane-rise`
- `/projects`
- `/blog`
- `/blog/a-atencao-certa-comeca-antes-do-clique`
- `/blog/quando-uma-ideia-pede-um-produto-proprio`
- `/blog/automacao-boa-devolve-tempo-para-o-negocio`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/cookies`

## Verificações

- Testes: `npm test -- --run`
- Build: `npm run build`
- Evidências visuais: `output/playwright/arcane-local/`
- Referência visual: `REFERENCIA-LIMBRAND.md`

## Rastreamento para campanhas

O site registra eventos no `window.dataLayer` mesmo sem credenciais externas configuradas. Para conectar Google Analytics 4 e conversões do Google Ads na publicação, copie `.env.example` para `.env` e preencha, quando disponíveis:

- `VITE_GA_MEASUREMENT_ID`
- `VITE_GOOGLE_ADS_CONVERSION_ID`
- `VITE_GOOGLE_ADS_CONVERSION_LABEL`

Eventos preparados:

- `page_view` em cada mudança de rota;
- `whatsapp_click` em links para o WhatsApp;
- `generate_lead` após o formulário válido abrir o WhatsApp.

Validação recomendada: abrir o site com o Tag Assistant ou as ferramentas de desenvolvedor, confirmar os eventos no `dataLayer` e verificar se o WhatsApp recebe nome, e-mail, empresa e contexto do projeto.

## SEO e descoberta orgânica

O build gera um documento HTML com conteúdo institucional completo e metadados específicos para cada rota publicada, além do fallback SPA. Isso mantém títulos, textos, links internos, CTAs, title, description, canonical, Open Graph, Twitter Card e JSON-LD disponíveis antes da execução do React:

- `/robots.txt` permite rastreamento e aponta para o sitemap oficial.
- `/sitemap.xml` lista somente as rotas públicas atuais, com URLs canônicas em HTTPS.
- `404.html` é gerado com `noindex,follow` e usado como página de erro autoral tanto no Apache/Hostinger quanto no Vercel.
- A home publica `Organization` e `WebSite`; serviços publicam `Service`; artigos publicam `Article` e breadcrumbs.
- O domínio `www` é consolidado no domínio canônico sem `www` por redirect permanente.
- URLs antigas conhecidas redirecionam para `/contact` ou para a divisão atual correspondente.
- O hero usa poster imediato, vídeo desktop otimizado e uma fonte mobile específica; o vídeo original não é carregado pelo site publicado.
- O vídeo do hero é ativado depois da primeira pintura para priorizar o conteúdo e mantém poster, versão desktop e versão mobile.
- O prerender é validado em cada build para que os conteúdos de serviços, artigos, cases, contato e páginas legais existam no HTML inicial.
- A página inicial mantém a metatag pública de verificação do Google Search Console para a propriedade HTTPS canônica.
- A propriedade HTTPS canônica foi verificada no Search Console; o sitemap foi enviado e processado com 15 URLs encontradas.
- A medição pública final foi executada com Lighthouse mobile em rede simulada; o ambiente não disponibiliza um aparelho físico nem dados de campo suficientes no PageSpeed.

Uma propriedade de domínio DNS no Search Console continua opcional e exige um registro TXT no provedor DNS. O Search Console e o Google Ads dependem de credenciais da conta; os IDs opcionais ficam em `.env` e não são inventados no código.

## Blog inicial

O índice `/blog` apresenta três artigos editoriais completos, com leitura estimada, seções práticas, pontos de aplicação, referências externas e CTA comercial contextualizado para o WhatsApp:

- Digital — “A atenção certa começa antes do clique.”
- Rise — “Quando uma ideia pede um produto próprio.”
- Rise — “Automação boa devolve tempo para o negócio.”

## Páginas legais

As páginas legais foram estruturadas com data de atualização, escopo, seções explicativas, orientações práticas, canal de contato e referências institucionais:

- `/privacy` — tratamento de dados pessoais, finalidades, segurança e direitos do titular.
- `/terms` — regras de uso do site, propriedade intelectual, contato comercial e limitações.
- `/cookies` — categorias, finalidades, preferências, terceiros e gerenciamento de cookies.

## Páginas comerciais de serviços

Além da visão geral em `/services`, cada frente possui uma página própria com uma narrativa comercial completa, escopo de atuação, forma de entrega, resultados esperados e CTA contextualizado para o WhatsApp:

- **Arcane Digital** — [Landing Pages, Campanhas, Conteúdo e Redes Sociais](http://localhost:4173/services/arcane-digital)
- **Arcane Growth** — [Apps, Comunidades e Experiências](http://localhost:4173/services/arcane-growth)
- **Arcane Rise** — [Sistemas, IA, Automações e Integrações](http://localhost:4173/services/arcane-rise)
