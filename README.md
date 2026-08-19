# Arcane Tecnologia

Primeira versão local do novo site institucional da Arcane Tecnologia.

Posicionamento atual: **Atraia. Construa. Escale.** — Arcane Digital, Arcane Labs e Arcane Growth, com “Agendar uma conversa” como CTA principal.

## Visão comercial

A Arcane ajuda empresas a transformar atenção, ideias e processos em crescimento digital com mais clareza e capacidade de execução.

Não somos uma software house genérica nem uma agência isolada de comunicação. Atuamos como parceira de estratégia e tecnologia para conectar presença digital, produto próprio e automação em uma evolução contínua:

- **Arcane Digital — Atraia.** Landing pages, campanhas, identidade para lançamentos, materiais comerciais, media kits e conteúdo para redes sociais. Criamos a presença digital que transforma atenção em oportunidade.
- **Arcane Labs — Construa.** Sistemas web, plataformas SaaS, aplicativos e produtos digitais sob medida. Tiramos ideias e operações do papel com experiência bem desenhada e tecnologia preparada para crescer.
- **Arcane Growth — Escale.** IA, automações e integrações entre CRM, WhatsApp, APIs, dados e sistemas internos. Eliminamos trabalho manual e liberamos o time para decisões melhores.

### Para quem é

Para empresas que precisam vender melhor, validar uma nova frente, criar tecnologia própria ou organizar uma operação que cresceu além das ferramentas genéricas, planilhas e processos desconectados.

### Como a Arcane gera valor

Começamos pelo contexto do negócio e pelo resultado esperado. A partir daí, combinamos posicionamento, design, engenharia e automação na medida certa para reduzir fricção, aumentar previsibilidade e criar uma base capaz de acompanhar a próxima fase da empresa.

O resultado é uma presença mais consistente, produtos mais úteis e operações com menos retrabalho — tecnologia aplicada para fazer o negócio funcionar melhor.

### Próximo passo

Tem uma campanha, ideia, produto ou processo que precisa evoluir? [Agende uma conversa pelo WhatsApp](https://wa.me/5512991332258) e conte o contexto para a equipe Arcane. A conversa começa pelo problema e pelo objetivo, para encontrarmos o caminho mais adequado.

Ativos oficiais utilizados:

- `public/assets/arcane-logo-horizontal.png`
- `public/assets/video-fundo.mp4` — vídeo institucional do hero, 1280×720, 55 segundos.
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

## Blog inicial

O índice `/blog` apresenta três artigos editoriais completos, com leitura estimada, seções práticas, pontos de aplicação, referências externas e CTA comercial contextualizado para o WhatsApp:

- Digital — “A atenção certa começa antes do clique.”
- Labs — “Quando uma ideia pede um produto próprio.”
- Growth — “Automação boa devolve tempo para o negócio.”
