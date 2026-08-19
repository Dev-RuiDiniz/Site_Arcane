# Referência visual — Limbrand

Fonte analisada em 19/08/2026: https://limbrand.com.br/

> Esta análise registra a linguagem visual e a arquitetura percebida do site público para orientar um novo projeto. O conteúdo, a marca e os ativos originais devem ser substituídos ou usados somente com autorização.

## Estado atual do projeto

- O workspace contém apenas `README.md`.
- Nenhum tema WordPress, starter HTML5 ou framework foi iniciado.
- A captura foi feita localmente com Playwright/Chromium em desktop (1440×900) e mobile (390×844).

## Leitura visual

- Direção: estúdio de branding/estratégia com estética editorial, premium e contemporânea.
- Contraste dominante: preto quase absoluto (`#0A0A0A`), branco/off-white (`#F4F5F3` / `#F1F2EF`) e azul elétrico (`#00A9E8`).
- Tipografia principal observada: Plus Jakarta Sans; pesos leves/médios, títulos muito grandes e tracking negativo.
- Elementos recorrentes: linhas finas, micro-rótulos em caixa alta, números azuis, botões pill, divisores horizontais e muito espaço negativo.
- Imagens: fotografia documental/editorial de pessoas, cidade, campanhas e ambientes de trabalho; cases em mosaico assimétrico.

## Estrutura de página identificada

1. Cabeçalho claro com logo à esquerda e botão de menu hambúrguer à direita.
2. Hero de altura mínima de viewport com vídeo de fundo, overlay escuro e headline central em duas cores.
3. Cases em destaque: título editorial + grid de cinco imagens com CTA central.
4. Nosso método: seção preta com três etapas — Pesquisa, Estratégia e Comunicação — em linhas separadas.
5. Faixa de logos/clientes em fundo claro, com movimento horizontal.
6. Presença e movimento: dois cards para Instagram e LinkedIn dentro de uma moldura.
7. Insights/blog: título grande, cards de artigos com imagem, título e link.
8. Contato: bloco preto em duas colunas no desktop; texto e formulário empilhados no mobile.
9. Rodapé claro dividido verticalmente: logo/mensagem à esquerda e cidade/contato à direita.

## Interações e responsividade

- Menu abre em tela cheia, fundo preto, navegação numerada 01–04 e bloqueio do scroll do body.
- No mobile, o menu mantém a mesma lógica e escala tipográfica menor.
- Cases e cards de conteúdo ocupam a largura e podem exigir navegação horizontal/carrossel no mobile.
- Formulário com Nome, E-mail, Empresa e desafio; CTA azul arredondado.
- Cabeçalho permanece visível durante a rolagem.
- Breakpoint principal observado no CSS: até 767px para a composição mobile.

## Base técnica observada na referência

- WordPress com tema Hello Elementor.
- Elementor + Pro Elements.
- Página montada com seções/containers do Elementor e CSS local gerado por página.
- Hero com vídeo Pexels: `https://videos.pexels.com/video-files/5475320/5475320-uhd_2560_1080_30fps.mp4`.
- Fontes carregadas: Plus Jakarta Sans, Roboto Slab e Roboto; a interface visível usa principalmente Plus Jakarta Sans.

## Capturas locais

Todas as capturas estão em `output/playwright/limbrand-reference/`.

- `desktop-top.png` — cabeçalho + hero + início dos cases.
- `desktop-menu-open.png` — menu aberto no desktop.
- `desktop-y800.png` até `desktop-bottom.png` — rolagem das seções intermediárias e rodapé.
- `mobile-top.png` — cabeçalho + hero no mobile.
- `mobile-menu-open.png` — menu aberto no mobile.
- `mobile-y700.png` até `mobile-y7000.png` — rolagem das seções mobile.

## Decisão inicial sugerida

Para um site institucional com edição frequente de cases, artigos e formulário, WordPress com um tema próprio leve é o caminho mais próximo da referência. Para uma landing page estática, HTML5/CSS/JS oferece menos manutenção e melhor controle do código.

Próximo passo recomendado: escolher entre `WordPress com tema próprio` e `HTML5 estático`, depois transformar esta referência em um wireframe/base visual do novo site com conteúdo e identidade próprios.
