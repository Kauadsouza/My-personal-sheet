# kauã diniz souza — portfolio

Site pessoal de portfólio. Next.js 16, Tailwind CSS v4, Framer Motion, React Three Fiber, MDX, next-intl (PT/EN/ES), Resend. **Custo mensal: R$ 0**.

## Setup

```bash
pnpm install
cp .env.local.example .env.local
# Preencha RESEND_API_KEY no .env.local
pnpm dev
```

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `RESEND_API_KEY` | API key do Resend (obrigatória para emails) |
| `RESEND_FROM_EMAIL` | Remetente dos emails (padrão: `onboarding@resend.dev`) |
| `ADMIN_EMAIL` | Email que recebe contatos e newsletter |
| `NEXT_PUBLIC_SITE_URL` | URL do site em produção |
| `GITHUB_TOKEN` | Token opcional da GitHub API (evita rate-limit) |

## Posts do blog

Criar arquivos `.mdx` em `content/blog/[locale]/`:

```mdx
---
title: "Título do post"
date: "2026-04-28"
lead: "Frase de abertura"
tags: ["dev", "carreira"]
cover: "/images/blog/cover.jpg"
---

Conteúdo em Markdown...
```

Locales: `pt-BR`, `en`, `es`.

## Deploy (Vercel)

1. Subir repositório no GitHub
2. Importar projeto no Vercel
3. Adicionar as variáveis de ambiente no painel do Vercel
4. Deploy automático em cada push para `main`

## Stack

- **Framework:** Next.js 16 (App Router, Server Components, Server Actions)
- **Estilo:** Tailwind CSS v4 + CSS custom properties (Forest Noir palette)
- **Animações:** Framer Motion
- **3D:** React Three Fiber + drei (hero blob)
- **i18n:** next-intl — PT-BR · EN · ES
- **Blog:** MDX via next-mdx-remote + gray-matter
- **Email:** Resend free tier (3.000 emails/mês)
- **Fontes:** Geist Sans + Geist Mono
- **Deploy:** Vercel free tier