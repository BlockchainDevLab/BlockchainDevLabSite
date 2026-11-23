# BlockchainDevLab Site

Site de conteúdo técnico, cursos e mentoria sobre blockchain, construído com [Astro](https://astro.build) usando o tema [Lucenta](https://github.com/xocothemes/lucenta).

## Stack

- **Astro 7** — Framework estático moderno
- **Tailwind CSS 4** — Styling via Vite plugin
- **Lucenta Theme** — Design bold para portfólios e agências
- **MDX** — Markdown com componentes
- **View Transitions** — Transições nativas entre páginas
- **RSS & Sitemap** — SEO e feeds automáticos

## Características

✨ **Design Premium**
- Tipografia bold (Epilogue + Mona Sans)
- Cores específicas por projeto
- Parallax covers em case studies
- Animações scroll-driven CSS nativas
- Grid filtrado de projetos

🎨 **Content Collections**
- **Work** — Cursos e projetos (case studies)
- **Journal** — Artigos técnicos com categorias
- **People** — Time e autores

📱 **100% Responsivo**
- Mobile menu full-screen
- Grid adaptativo
- Touch-friendly

♿ **Acessível**
- Skip links
- Landmarks semânticos
- Suporte a teclado
- Visible focus states
- `prefers-reduced-motion` desliga animações

## Estrutura

```
src/
  ├── config/            # Configurações centralizadas
  │   ├── site.ts        # Nome, email, nav, socials
  │   ├── services.ts    # Serviços oferecidos
  │   ├── work.ts        # Disciplines (filtros)
  │   ├── home.ts        # Copy da homepage
  │   ├── studio.ts      # Sobre nós
  │   └── contact.ts     # Form + FAQ
  ├── content/           # Content collections
  │   ├── work/          # Projetos / Case studies
  │   ├── people/        # Time / Autores
  │   └── journal/       # Blog / Artigos
  ├── components/        # Componentes reutilizáveis
  ├── layouts/           # Layouts de página
  ├── pages/             # Rotas do site
  ├── scripts/           # Motion effects
  └── styles/            # CSS global
public/
  ├── fonts/             # Epilogue + Mona Sans
  ├── favicon.svg
  └── og-image.png
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Dev server (http://localhost:4321)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Type checking
npm run check

# Format code
npm run format
```

## Customização

### 1. Site Settings

Edite `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "BlockchainDevLab",
  tagline: "Blockchain Architecture & Security",
  siteUrl: "https://blockchaindevlab.dev",
  email: "contato@blockchaindevlab.dev",
  // ...
};
```

### 2. Adicionar Projeto

Crie uma pasta em `src/content/work/`:

```bash
mkdir src/content/work/meu-projeto
```

Adicione `index.md`:

```yaml
---
title: Nome do Projeto
headline: Tagline curto
summary: Descrição de 40-240 caracteres
disciplines: [identity, digital]
sector: "DeFi"
year: 2027
color: "#ff006e"
ink: "light"
cover: ./cover.jpg
coverAlt: "Descrição da imagem"
stills:
  - { src: ./still-1.jpg, alt: "Descrição" }
results:
  - { value: "10x", label: "ROI" }
  - { value: "99.9%", label: "Uptime" }
testimonial:
  quote: "Texto do depoimento"
  name: "Nome do Cliente"
  role: "CEO, Empresa"
credits:
  - { role: "Arquitetura", name: "Seu Nome" }
featured: true
order: 1
---

Conteúdo do case study em Markdown...
```

### 3. Adicionar Artigo

Crie pasta em `src/content/journal/`:

```bash
mkdir src/content/journal/meu-artigo
```

Adicione `index.mdx`:

```yaml
---
title: Título do Artigo
description: Resumo do artigo
date: 2027-01-15
category: craft
authors: [seu-slug]
cover: ./cover.jpg
coverAlt: "Descrição"
work: [projeto-relacionado]
featured: false
---

Conteúdo em MDX (Markdown + JSX)...
```

### 4. Adicionar Autor

Crie pasta em `src/content/people/`:

```bash
mkdir src/content/people/seu-nome
```

Adicione `index.md` + `portrait.jpg`:

```yaml
---
name: Seu Nome
role: Blockchain Architect
location: São Paulo, Brasil
linkedin: https://linkedin.com/in/...
order: 1
---

Bio curta (1-2 parágrafos)...
```

## Design Tokens

Customizar cores em `src/styles/global.css`:

```css
:root {
  --paper: #ffffff;      /* Background */
  --ink: #000000;        /* Text */
  --signal: #ff006e;     /* Accent */
  --font-display: Epilogue;
  --font-sans: Mona Sans;
}
```

## Deploy

### Digital Ocean

`.do/app.yaml` já configurado:

```yaml
static_sites:
  - name: blockchaindevlab-site
    build_command: npm ci && npm run build
    output_dir: dist
```

### Vercel / Netlify

```bash
npm run build
# Output: dist/
```

Configuração automática (sem `vercel.json` necessário).

### Cloudflare Pages

```bash
Build command: npm run build
Build output: dist
```

## Migração

Se você está vindo do layout anterior, veja `MIGRATION.md` para:
- Mapeamento de URLs antigas → novas
- Como migrar conteúdo
- Breaking changes
- Rollback para versão anterior

## Conteúdo Demo

O tema inclui projetos e artigos de exemplo. **Substitua-os antes do deploy:**

- `src/content/work/*` — Projetos fictícios
- `src/content/people/*` — Pessoas fictícias
- `src/content/journal/*` — Artigos demo
- `src/assets/clients/*` — Logos fictícios

## Licença

- **Código do projeto**: MIT
- **Lucenta Theme**: MIT ([repositório original](https://github.com/xocothemes/lucenta))
- **Fontes**: Epilogue e Mona Sans (SIL Open Font License)

## Suporte

Veja a [documentação do Lucenta](https://github.com/xocothemes/lucenta) para:
- Customização avançada
- Atributos de motion
- Content schema detalhado
- Troubleshooting

---

**Demo**: http://localhost:4321/ (após `npm run dev`)  
**Live site**: https://blockchaindevlab.dev (quando deploiado)
