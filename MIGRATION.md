# Migração para Lucenta Theme

## O que mudou

O site foi migrado para o tema **Lucenta** — um tema Astro premium para agências e portfólios com:

- ✨ Transições de página com view transitions
- 🎨 Design bold com tipografia Epilogue e Mona Sans
- 📱 Totalmente responsivo e acessível
- 🎬 Animações scroll-driven CSS nativas
- 📦 Tailwind CSS 4
- 🚀 100% estático (sem JavaScript islands)

## Estrutura Nova

### Configurações centralizadas

Tudo em `src/config/`:

| Arquivo | Conteúdo |
|---|---|
| `site.ts` | Nome, tagline, email, navegação, socials |
| `services.ts` | Lista de serviços (Arquitetura, Auditoria, etc) |
| `work.ts` | Disciplines (filtros para projetos) |
| `home.ts` | Copy da homepage (hero, manifesto, etc) |
| `studio.ts` | Sobre a empresa |
| `contact.ts` | Form, FAQ, budget options |
| `clients.ts` | Logos dos clientes |
| `journal.ts` | Categorias do blog |

### Content Collections

```
src/content/
  ├── work/          # Projetos / Case studies
  ├── people/        # Time / Autores
  └── journal/       # Blog / Artigos
```

Cada projeto é uma pasta com:
- `index.md` — frontmatter + case study
- `cover.jpg` — imagem principal
- `still-*.jpg` — imagens adicionais

### Componentes

```
src/components/
  ├── chrome/        # Header, Footer, Menu
  ├── home/          # Hero, ClientMarquee, etc
  ├── work/          # ProjectCard, WorkGrid
  ├── journal/       # ArticleCard, Categories
  └── ui/            # Button, Logo, Badge
```

### Layouts

- `BaseLayout.astro` — HTML base, meta tags, fonts
- `WorkLayout.astro` — Para case studies
- `JournalLayout.astro` — Para artigos

## Adaptações Blockchain

### Disciplines (filtros)

- **Arquitetura** (`identity`) — Design de protocolos
- **Auditoria** (`digital`) — Security reviews
- **Testes** (`packaging`) — Fuzzing e invariants
- **Mentoria** (`campaign`) — 1:1 guidance
- **Consultoria** (`spatial`) — Advisory

### Services

Mapeados para serviços blockchain:
1. Arquitetura de Smart Contracts
2. Auditoria de Segurança
3. Testes e Fuzzing
4. Mentoria Individual

### Navegação

- **Cursos** → `/work/` (projects)
- **Mentoria** → `/services/`
- **Artigos** → `/journal/`
- **Contato** → `/contact/`

## Próximos Passos

### 1. Adicionar Conteúdo Real

**Projects** (`src/content/work/`):
```bash
# Criar pasta para cada curso/projeto
mkdir src/content/work/curso-smart-contracts
# Adicionar index.md com frontmatter
# Adicionar cover.jpg e stills
```

**People** (`src/content/people/`):
```bash
# Criar pasta para cada instrutor/autor
mkdir src/content/people/seu-nome
# Adicionar index.md + portrait.jpg
```

**Journal** (`src/content/journal/`):
```bash
# Criar pasta para cada artigo
mkdir src/content/journal/primeiro-artigo
# Adicionar index.mdx + cover.jpg (opcional)
```

### 2. Atualizar Copy

Editar:
- `src/config/home.ts` — Hero headline, manifesto
- `src/config/studio.ts` — História da empresa
- `src/config/contact.ts` — FAQ, budget options
- `src/config/clients.ts` — Logos parceiros

### 3. Web3Forms Integration

Em `src/config/site.ts`:

```typescript
contact: {
  enabled: true,
  action: "https://api.web3forms.com/submit",
  method: "post",
}
```

Adicionar hidden input no form com access key.

### 4. Assets

**Logos**: SVGs em `src/assets/clients/` com `currentColor`  
**Studio photos**: `src/assets/studio/`  
**Favicons**: `public/favicon.svg` + `public/og-image.png`

### 5. Customizar Design

Tokens CSS em `src/styles/global.css`:

```css
--paper: #ffffff;        /* Fundo */
--ink: #000000;          /* Texto */
--signal: #ff006e;       /* Accent color */
--font-display: Epilogue;
--font-sans: Mona Sans;
```

## Breaking Changes

### URLs antigas → novas

| Antes | Depois |
|---|---|
| `/blog` | `/journal` |
| `/cursos/[slug]` | `/work/[slug]` |
| `/mentoria/[slug]` | `/services/` |
| `/materiais` | Remover ou mapear |

### Content schema

Projetos agora usam:
```yaml
---
title: Nome do Cliente
headline: Tagline
disciplines: [identity, digital]
color: "#ff006e"  # Cor do projeto
year: 2027
featured: true
order: 1
---
```

### Web3Forms em vez de API routes

Formulários submetem direto para Web3Forms — sem backend.

## Deploy

Funciona em qualquer host estático:

```bash
npm run build
# Output em dist/
```

Digital Ocean, Vercel, Netlify, Cloudflare Pages — todos funcionam sem config adicional.

## Rollback

Se precisar voltar ao layout anterior, o backup está em:

```
../backup-original/src/
../backup-original/public/
```

E o último commit antes da migração:
```bash
git checkout main
```

## Demo

Servidor rodando em: **http://localhost:4321/**

Explore:
- `/` — Homepage com hero, manifesto, client marquee
- `/work/` — Grid filtrado de projetos
- `/work/halden/` — Case study com parallax
- `/journal/` — Blog com categorias
- `/services/` — Serviços com hover images
- `/studio/` — Sobre nós
- `/contact/` — Formulário + FAQ
