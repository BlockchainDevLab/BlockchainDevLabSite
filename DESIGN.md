# Design System — Inspirado no MIT Media Lab

## Visão Geral

O layout foi redesenhado seguindo os princípios visuais do [MIT Media Lab](https://www.media.mit.edu/):

- **Minimalismo**: paleta preto/branco/cinza com acentos sutis
- **Tipografia bold**: headlines grandes com letter-spacing ajustado
- **Grid modular**: cards uniformes com hover effects
- **Whitespace generoso**: respiração entre seções
- **Monospace para metadados**: timestamps e categorias em fonte monoespaçada

## Componentes Principais

### Layout Base (`MITLayout.astro`)

```
Header (sticky)
  └─ Logo + Nav (uppercase, spaced)
Main
  └─ Slots (hero, sections, etc)
```

### Hero Section
- Altura mínima 60vh
- Título grande (clamp 2rem → 4rem)
- Subtítulo cinza (1.25rem)
- Border-bottom para separação

### Grid System
```css
.grid            → auto-fill, min 320px
.grid-2          → auto-fit, min 400px
gap: 4rem        → espaçamento generoso
```

### Card Component
- **Imagem**: aspect-ratio 16:10, hover scale(1.05)
- **Meta**: monospace, uppercase, cinza
- **Título**: 1.5rem, bold, line-height 1.3
- **Descrição**: cinza, 1rem

## Tipografia

| Elemento | Tamanho | Peso | Spacing |
|---|---|---|---|
| h1 | clamp(2rem → 4rem) | 800 | -0.02em |
| h2 | clamp(1.5rem → 2.5rem) | 700 | -0.01em |
| h3 | clamp(1.25rem → 1.75rem) | 700 | normal |
| Body | 16px | 400 | normal |
| Nav | 0.95rem | 500 | 0.05em |
| Meta | 0.85rem | mono | 0.05em |

## Cores

```css
--black: #000000
--white: #ffffff
--gray-100 a 900: escala neutra
--accent: #ff006e (reservado para CTA)
```

## Espaçamento

Escala consistente baseada em `rem`:

```css
--spacing-xs:   0.5rem
--spacing-sm:   1rem
--spacing-md:   1.5rem
--spacing-lg:   2rem
--spacing-xl:   3rem
--spacing-2xl:  4rem
--spacing-3xl:  6rem
```

## Páginas

### Index (`/`)
- Hero com statement principal
- Grid de últimos artigos (3)
- Grid de cursos (2 colunas)
- Grid de mentoria (2 colunas)
- Grid de materiais (3 colunas)
- CTA final centrado

### Blog (`/blog`)
- Hero com título da seção
- Grid de todos os posts
- Card com meta (data), título, descrição

### Post (`/blog/[slug]`)
- Article layout (max-width 720px)
- Meta → Título → Tags → Conteúdo

### Curso (`/cursos/[slug]`)
- Hero com meta, título, subtítulo, preço, CTA
- Lista de highlights (sem bullets, border-bottom)
- Conteúdo markdown
- CTA final

### Mentoria (`/mentoria/[slug]`)
- Similar ao curso
- Meta mostra formato (ex: "4 encontros ao vivo")

### Material (`/materiais/[slug]`)
- Hero com meta, título, descrição
- Conteúdo markdown
- Lead box (fundo cinza) com formulário

## Responsive

```css
@media (max-width: 768px)
  .grid → 1 coluna
  .grid-2 → 1 coluna
  nav → gap reduzido
  hero → padding reduzido
```

## Gradientes (placeholders de imagem)

Enquanto não há imagens reais:

```css
Blog      → linear-gradient(135deg, #667eea → #764ba2)
Cursos    → linear-gradient(135deg, #f093fb → #f5576c)
Mentoria  → linear-gradient(135deg, #4facfe → #00f2fe)
Materiais → linear-gradient(135deg, #fa709a → #fee140)
```

## Próximos Passos

- [ ] Substituir gradientes por imagens reais (OG images)
- [ ] Adicionar transições de página (view transitions API)
- [ ] Implementar dark mode toggle
- [ ] Adicionar animações sutis no scroll (intersection observer)
- [ ] Criar componente de video player para "Ideas in Progress"
