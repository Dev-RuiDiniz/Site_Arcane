# Operação do Admin e Leads

## Editor de páginas

As páginas editáveis usam o endpoint `GET/PUT/POST /api/admin/page-settings`.

Persistência:

- com `DATABASE_URL`: modelo Prisma `PageContent`
- sem `DATABASE_URL` em desenvolvimento local: fallback em `data/admin-page-settings.json`

Comportamento:

- `PUT` salva rascunho
- `POST` com `action=publish` promove o rascunho para publicação
- o site público consome sempre o estado `published`, com fallback para defaults em código quando não houver conteúdo publicado

Rotas principais do editor:

- `/admin/pages/home`
- `/admin/pages/services`
- `/admin/pages/projects`
- `/admin/pages/about`
- `/admin/pages/privacy`
- `/admin/pages/terms`
- `/admin/pages/cookies`
- `/admin/pages/ctas`

Permissões:

- `ADMIN`
  - acesso total
- `EDITOR`
  - acesso ao editor de páginas e uploads

## Leads

Os formulários públicos usam `POST /api/leads`.

Origens atuais:

- `contact`
- `solicitar-orcamento`
- `agendar-reuniao`

Campos adicionais por contexto:

- contato geral:
  - `subject`
- orçamento:
  - `company`
  - `projectType`
  - `budgetRange`
  - `intent=orcamento`
- reunião técnica:
  - `company`
  - `projectType`
  - `intent=reuniao-tecnica`

## Persistência dos leads

Prioridade de armazenamento:

1. Prisma `Contact`, quando `DATABASE_URL` estiver configurada
2. arquivo local `data/leads.json`, apenas em desenvolvimento local sem banco configurado

Isso permite desenvolvimento local e verificação sem depender de banco ativo.

## Leitura no painel

`/admin/contacts` consome `GET /api/leads` e mostra:

- total de leads
- novos leads
- pedidos de orçamento
- pedidos de reunião técnica
- detalhes completos por lead
- atualização operacional de status via `PATCH /api/leads/:id`

Proteção:

- `POST /api/leads`
  - público
- `GET /api/leads`
  - restrito a `ADMIN`
- `PATCH /api/leads/:id`
  - restrito a `ADMIN`

## Autenticação admin

O login admin usa usuários persistidos no banco via Prisma e senha com hash `bcrypt`.

Bootstrap do primeiro usuário:

```bash
pnpm create:admin -- --email admin@empresa.com --password "senha-forte" --name "Admin"
```

## Banco no Supabase

Migration inicial do projeto:

- `prisma/migrations/20260317170000_init_supabase/migration.sql`

Aplicação recomendada:

```bash
pnpm prisma:migrate:deploy
pnpm prisma:migrate:status
```

Alternativa:

- aplicar o SQL da migration diretamente no SQL Editor do Supabase


## Segurança operacional e LGPD

- Não versionar `.env`, dumps de banco, logs locais ou arquivos gerados com dados reais.
- Manter `NEXTAUTH_SECRET` forte e exclusivo por ambiente em staging e produção.
- Tratar leads como dados pessoais: nome, email, telefone, empresa, mensagem e intenção de contato devem ser acessados somente por usuários autorizados.
- Evitar registrar payloads completos de leads, sessões, tokens ou dados pessoais em logs.
- Revisar periodicamente usuários administrativos e remover acessos que não forem mais necessários.
- O endpoint público `POST /api/leads` deve ser monitorado contra abuso. Para produção com tráfego real, priorize rate limit, honeypot ou proteção equivalente.
- Em incidentes ou suspeita de exposição de dados, preservar logs operacionais necessários sem incluir informações sensíveis no repositório.

## Uploads e armazenamento

O endpoint `POST /api/admin/upload` aceita imagens do admin e grava arquivos em `public/uploads/admin`.

Esse armazenamento local depende de filesystem persistente. Em ambientes serverless ou deploys na Vercel, arquivos gravados em disco local podem não persistir entre execuções, builds ou redeploys.

Para produção, recomenda-se migrar uploads para armazenamento persistente externo, como Supabase Storage, Vercel Blob ou S3. Ao implementar essa migração, mantenha as validações atuais de tipo, extensão e tamanho, e salve apenas URLs públicas/assinadas necessárias para exibição no site.

## Observações operacionais

- Em produção, aplique migration compatível com os novos campos de `Contact`.
- Em produção, aplique migration compatível com o modelo `PageContent`.
- Em desenvolvimento sem banco, o conteúdo de `data/leads.json` e `data/admin-page-settings.json` pode ser removido manualmente quando necessário.
- O painel de leads agora suporta mudança de status, mas a operação continua centrada em captura, leitura e resposta manual.

## Validação do envio público de leads

O schema de `POST /api/leads` aceita o campo opcional `website` como honeypot. Esse campo deve permanecer vazio nos formulários reais.

### Cenários esperados

1. Envio válido:
   - `name`, `email`, `message` e `source` preenchidos.
  - `website` ausente ou vazio.
  - resposta esperada: `201` com `success: true`.

2. Envio bloqueado por honeypot:
   - mesmo payload válido, mas com `website` preenchido.
   - resposta esperada: `400` com mensagem genérica de falha no registro.

3. Operação administrativa:
   - `GET /api/leads` continua restrito a `ADMIN`.
   - `PATCH /api/leads/:id` continua restrito a `ADMIN`.

### Exemplo de payload bloqueado

```json
{
  "name": "Pessoa Teste",
  "email": "teste@example.com",
  "message": "Mensagem de teste com detalhes suficientes.",
  "source": "contact",
  "website": "https://spam.example"
}
```
