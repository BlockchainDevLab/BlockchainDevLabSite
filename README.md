# BlockchainDevLab Site

Site estático de conteúdo técnico, cursos e mentoria, construído com [Astro](https://astro.build) e hospedado gratuitamente no [Digital Ocean Static Sites](https://docs.digitalocean.com/products/app-platform/concepts/static-site/).

## Conteúdo

| Seção | Rota | Descrição |
|---|---|---|
| Início | `/` | Índice geral com links para todas as seções |
| Artigos | `/blog/[slug]` | Posts técnicos em Markdown |
| Cursos | `/cursos/[slug]` | Páginas de venda com link para checkout |
| Mentoria | `/mentoria/[slug]` | Página de aplicação para mentoria individual |
| Materiais | `/materiais/[slug]` | Lead gate com entrega de PDF via formulário |

## Stack

- **Astro 5** com `output: static` — zero JavaScript no servidor
- **Web3Forms** — recebe os dados do formulário de lead sem backend
- **Digital Ocean Static Sites** — hospedagem gratuita com deploy automático a cada push

## Estrutura do projeto

```
src/
  components/
    LeadCaptureForm.astro   # Formulário de lead + reveal do link de download
  content/
    blog/                   # Artigos (.md)
    cursos/                 # Páginas de curso (.md)
    mentoria/               # Páginas de mentoria (.md)
    materiais/              # Materiais gratuitos (.md)
    config.ts               # Schema das coleções (Zod)
  layouts/
    BaseLayout.astro        # Layout HTML base com nav e estilos globais
  pages/
    index.astro
    blog/[slug].astro
    cursos/[slug].astro
    mentoria/[slug].astro
    materiais/[slug].astro
public/
  downloads/                # PDFs servidos estaticamente
.do/
  app.yaml                  # Spec de deploy para o Digital Ocean App Platform
```

## Desenvolvimento local

```bash
npm install
npm run dev
```

O site sobe em `http://localhost:4321`.

## Build

```bash
npm run build
```

Gera os arquivos estáticos em `dist/`. Pré-visualize com `npm run preview`.

## Deploy (Digital Ocean)

O deploy é automático a cada push na branch `main` via `.do/app.yaml`.

**Primeira vez:**

1. Acesse [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps) → **Create App**
2. Conecte o repositório `BlockchainDevLab/BlockchainDevLabSite`, branch `main`
3. Confirme as configurações detectadas automaticamente pelo `app.yaml`:
   - Build command: `npm ci && npm run build`
   - Output dir: `dist`
4. Adicione a variável de ambiente `WEB3FORMS_KEY` (veja abaixo)
5. Clique em **Deploy**

## Variáveis de ambiente

| Variável | Escopo | Descrição |
|---|---|---|
| `WEB3FORMS_KEY` | Build time | Access Key do [Web3Forms](https://web3forms.com). Obtenha gratuitamente em web3forms.com e configure no painel do Digital Ocean. Nunca commite este valor. |

## Adicionando conteúdo

**Novo artigo:**
```bash
# Crie src/content/blog/meu-artigo.md com o frontmatter:
---
title: "Título do artigo"
description: "Descrição curta"
pubDate: 2025-01-15
tags: ["solidity", "segurança"]
---
Conteúdo em Markdown aqui.
```

**Novo material gratuito:**
1. Adicione o PDF em `public/downloads/nome-do-arquivo.pdf`
2. Crie `src/content/materiais/nome-do-material.md`:
```markdown
---
title: "Título do material"
description: "Descrição curta"
fileName: "nome-do-arquivo.pdf"
ctaLabel: "Baixar agora"
---
```

O formulário de lead aparece automaticamente. Após o envio, o link de download é revelado na página.

## Notas

- O PDF fica em `/downloads/` como URL pública. O formulário de lead é uma barreira comportamental, não técnica — adequado para materiais gratuitos.
- Os links de checkout (`checkoutUrl`) e calendário (`applicationUrl`) nos arquivos `.md` de cursos e mentoria precisam ser atualizados com seus links reais antes do deploy.
