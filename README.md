# Arcane Tecnologia

Site institucional da Arcane Tecnologia, construído com Next.js App Router e React.

O projeto foi consolidado para o domínio de tecnologia B2B. O escopo atual cobre:

- site público institucional
- catálogo de serviços
- cases de projetos
- páginas institucionais (sobre, contato, políticas)

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Prisma (client gerado, usado em fallback)

## Estrutura funcional

- `/` — Home
- `/about` — Sobre a empresa
- `/services` — Lista de serviços
- `/services/[slug]` — Detalhe de um serviço
- `/projects` — Cases / Portfólio
- `/projects/[slug]` — Detalhe de um case
- `/contact` — Contato
- `/solicitar-orcamento` — Solicitar orçamento
- `/agendar-reuniao` — Agendar reunião
- `/privacy` — Política de Privacidade
- `/terms` — Termos de Uso
- `/cookies` — Política de Cookies

## Setup local

Pré-requisitos:

- Node.js `22.12+`
- pnpm `10+`

Instalação:

```bash
pnpm install
```

Desenvolvimento:

```bash
pnpm dev
```

Checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Variáveis de ambiente

Use `.env.example` como base.

Campos relevantes:

- `NEXTAUTH_URL` — URL base do site
- `NEXTAUTH_SECRET` — secret para autenticação (se necessário no futuro)
- `FRONTEND_ONLY` — quando `true`, desativa rotas de API

## Scripts

- `pnpm dev` — servidor de desenvolvimento
- `pnpm build` — build de produção
- `pnpm build:frontend-only` — build apenas frontend
- `pnpm start` — servidor de produção
- `pnpm lint` — linting
- `pnpm typecheck` — checagem de tipos

## Deploy Vercel

Deploy padrão:

- Build command: `pnpm build`
- Output directory: `.next`

## Checklist de validação

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- validar rotas públicas principais
- validar formulários de contato e orçamento
- confirmar responsividade em mobile e desktop
