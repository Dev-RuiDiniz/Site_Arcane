# Verificação local — Arcane Tecnologia

Data: 19/08/2026

## Método

- Browser/IAB não estava disponível de forma utilizável nesta sessão.
- Foi usado Playwright CLI com Chromium local como fallback, em modo visual.
- Viewports verificados: desktop `1440×900` e mobile `390×844`.

## Evidências

- Referência desktop: `output/playwright/limbrand-reference/desktop-top.png`
- Implementação desktop atualizada: `output/playwright/arcane-local/home-copy-1440-final.png`
- Implementação mobile atualizada: `output/playwright/arcane-local/home-copy-mobile.png`
- Hero com ativos oficiais desktop: `output/playwright/arcane-local/home-assets-1440.png`
- Hero com ativos oficiais mobile: `output/playwright/arcane-local/home-assets-mobile.png`
- Serviços mobile atualizados: `output/playwright/arcane-local/services-copy-mobile.png`
- Contato mobile atualizado: `output/playwright/arcane-local/contact-copy-mobile.png`
- WhatsApp desktop: `output/playwright/arcane-local/whatsapp-home-912.png`
- WhatsApp mobile: `output/playwright/arcane-local/whatsapp-home-mobile.png`
- WhatsApp com logomarca oficial: `output/playwright/arcane-local/whatsapp-official-logo-visible.png`
- Menu desktop: `output/playwright/arcane-local/desktop-menu-open-v2.png`
- Menu mobile: `output/playwright/arcane-local/mobile-menu-open.png`
- Contato desktop: `output/playwright/arcane-local/desktop-contact.png`
- Contato mobile: `output/playwright/arcane-local/mobile-contact.png`
- Artigo Digital desktop: `output/playwright/arcane-local/article-digital-desktop.png`
- Artigo Digital mobile: `output/playwright/arcane-local/article-digital-mobile.png`

## Fidelity ledger

| Ponto | Referência observada | Implementação | Resultado |
|---|---|---|---|
| Ritmo visual | Bandas claras/escuras, linhas finas, muito espaço negativo | Bandas `band-paper`, `band-dark` e `band-blue` com divisores compartilhados | Mantido |
| Tipografia | Sans-serif editorial, títulos grandes, labels em caixa alta | Plus Jakarta Sans, escala fluida e labels com tracking | Mantido |
| Navegação | Cabeçalho claro e menu expandido em fundo preto | Header fixo, menu fullscreen, Escape e bloqueio de scroll | Mantido |
| CTA | Botões arredondados com seta e ação comercial evidente | “Agendar uma conversa” e CTAs de serviço apontam para o WhatsApp; “Conhecer nossos projetos” aponta para `/projects` | Atualizado |
| WhatsApp comercial | — | CTAs comerciais, telefone, formulário válido e botão flutuante encaminham para `wa.me/5512991332258` | Atualizado |
| Linha editorial | Entrada comercial, humana e orientada a resultado | “Atraia. Construa. Escale.” organiza Digital, Labs e Growth | Mantido |
| Responsividade | Conteúdo empilhado e menu reduzido no mobile | Layout single-column em `max-width: 760px`, sem overflow horizontal | Mantido |
| Identidade | A referência usa marca e assets próprios | Logo horizontal oficial da Arcane aplicado no header e no rodapé; nenhum asset da Limbrand foi reutilizado | Atualizado |
| Hero | A referência usa vídeo/fotografia | `video_fundo.mp4` aplicado no hero com autoplay silencioso, loop e `playsInline` | Atualizado |
| Blog editorial | Cards de entrada com títulos e resumos comerciais | Três rotas de artigo com hero, leitura estruturada, pontos práticos, fontes e CTA contextualizado para WhatsApp | Atualizado |

## Interações verificadas

- Navegação do CTA do header para `/contact`.
- Abertura e fechamento do menu desktop/mobile.
- Rotas principais e os três detalhes editoriais do blog renderizados.
- Formulário vazio exibe erros de nome, e-mail e mensagem.
- Formulário válido exibe “Mensagem recebida.” sem enviar dados externamente.
- Vídeo do hero inicia em autoplay silencioso, com loop e `playsInline`.
- Logo do header carrega o arquivo oficial com largura natural de 1200px.
- Header, hero, serviços, fechamento e botão flutuante exibem destino WhatsApp.
- Botão flutuante usa o símbolo verde oficial do WhatsApp em base branca para contraste.
- Formulário válido constrói uma mensagem contextual e solicita o WhatsApp diretamente.
- Cards do blog abrem os três artigos iniciais em rotas próprias, com retorno para `/blog`.
- As páginas de artigo foram revisadas em desktop e mobile, sem overflow horizontal.
- Pesquisa editorial usada como base: conteúdo útil e people-first, experiência da página de destino, validação de produto e redesenho de workflows antes da automação.
- Console do navegador: 0 erros e 0 warnings na última leitura.

## Comandos executados

- `npm test -- --run` — 2 arquivos, 9 testes aprovados.
- `npm run build` — build Vite concluído sem erros.
