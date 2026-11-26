# 🚀 Guia de Implementação — 6 Pilares

Este documento detalha como implementar o conteúdo do site seguindo a arquitetura dos 6 pilares.

---

## 📋 Status Atual

✅ **Arquitetura implementada** — Navegação, services, disciplines  
✅ **Tema Lucenta integrado** — Design system pronto  
✅ **Build funcionando** — Sem erros  
⚠️ **Conteúdo demo** — Precisa ser substituído por conteúdo real  

---

## 🎯 Próximos Passos

### FASE 1 — Conteúdo Essencial (Semana 1-2)

#### 1.1. Criar Primeiro Curso
```bash
mkdir -p src/content/work/arquitetura-smart-contracts
cd src/content/work/arquitetura-smart-contracts
```

Criar `index.md`:
```yaml
---
title: "Arquitetura de Smart Contracts"
headline: "Do zero ao deploy em produção"
summary: "Aprenda a projetar protocolos modulares, seguros e upgradeable. 12 semanas de prática intensiva com projetos reais."
disciplines: [identity]  # Educação & Mentoria
sector: "Educação"
year: 2027
color: "#FF6B00"
ink: "light"
cover: ./cover.jpg
coverAlt: "Diagrama de arquitetura modular"
stills:
  - { src: ./still-1.jpg, alt: "Aula sobre proxy patterns" }
  - { src: ./still-2.jpg, alt: "Live coding session" }
results:
  - { value: "95%", label: "Taxa de aprovação" }
  - { value: "10x", label: "Salário médio pós-curso" }
  - { value: "120h", label: "Conteúdo prático" }
testimonial:
  quote: "O curso mais completo que já fiz. Aprendi padrões que nenhum tutorial ensina."
  name: "Carlos Silva"
  role: "Blockchain Engineer, DeFi Protocol"
credits:
  - { role: "Instrutor", name: "Seu Nome" }
  - { role: "Assistente", name: "Nome do Assistente" }
website: "https://curso.blockchaindevlab.dev"
featured: true
order: 1
---

## Sobre o Curso

Este curso transforma desenvolvedores em arquitetos de smart contracts através de...

## Módulos

### Módulo 1 — Fundamentos
- Solidity avançado
- EVM internals
- Gas optimization

### Módulo 2 — Padrões
- Proxy patterns (Transparent, UUPS, Beacon)
- Diamond pattern
- Storage layouts

(continuar com conteúdo completo do curso)
```

**Adicionar imagens:**
- `cover.jpg` (landscape, 2000x1200px mínimo)
- `still-1.jpg` (screenshot de aula)
- `still-2.jpg` (diagrama técnico)

#### 1.2. Criar Material Gratuito (Lead Magnet)
```bash
mkdir -p src/content/work/checklist-seguranca
```

Criar `index.md`:
```yaml
---
title: "Checklist de Segurança — 25 Pontos Críticos"
headline: "Antes de fazer deploy"
summary: "Guia prático em PDF com 25 verificações essenciais antes de publicar seu smart contract em produção."
disciplines: [packaging]  # Materiais Gratuitos
sector: "Segurança"
year: 2027
color: "#FF0000"
ink: "light"
cover: ./cover.jpg
coverAlt: "Preview do checklist"
featured: true
order: 10
---

## O que está incluído

PDF de 15 páginas com:
- 25 verificações essenciais
- Exemplos de código vulnerável
- Links para ferramentas (Slither, Mythril)
- Template de relatório de auditoria

[Formulário de lead capture aqui — será adicionado pelo componente]
```

#### 1.3. Criar Primeiro Artigo do Blog
```bash
mkdir -p src/content/journal/padroes-upgradability-2027
```

Criar `index.mdx`:
```yaml
---
title: "Padrões de Upgradability em 2027"
description: "Comparação técnica: Transparent Proxy vs UUPS vs Diamond. Quando usar cada um e por quê."
date: 2027-01-15
category: arquitetura
authors: [seu-slug]
cover: ./cover.jpg
coverAlt: "Diagrama comparativo de proxies"
work: [arquitetura-smart-contracts]  # Linkado ao curso
featured: true
---

## Introdução

Upgradability é essencial em protocolos DeFi modernos...

(conteúdo técnico completo)
```

#### 1.4. Criar Perfil de Mentor/Instrutor
```bash
mkdir -p src/content/people/seu-nome
```

Criar `index.md`:
```yaml
---
name: "Seu Nome Completo"
role: "Blockchain Architect & Security Auditor"
location: "São Paulo, Brasil"
linkedin: "https://linkedin.com/in/..."
github: "https://github.com/..."
order: 1
---

Blockchain architect com 5+ anos de experiência em protocolos DeFi. Já auditou 30+ projetos com TVL total de $500M+. Instrutor de cursos de arquitetura e segurança com 150+ alunos formados.

Especialidades: Solidity, Foundry, auditoria de segurança, padrões de upgradability.
```

**Adicionar:**
- `portrait.jpg` (portrait 2:3, 800x1200px mínimo)

---

### FASE 2 — Páginas Estáticas (Semana 3)

#### 2.1. Atualizar Homepage Copy

Editar `src/config/home.ts` (já configurado, mas pode personalizar):
```typescript
export const hero = {
  lines: ["Aprenda", "Desenvolva", "Conquiste"],  // Pode alterar
  capsuleLine: 2,
  intro: "Sua intro personalizada aqui..."
};
```

#### 2.2. Criar Página "Sobre"

Editar `src/config/studio.ts`:
```typescript
export const studio = {
  lead: "Transformamos desenvolvedores em especialistas blockchain",
  story: [
    "O Blockchain Dev Lab nasceu em 2022...",
    "Hoje somos o maior ecossistema...",
  ],
  // ... resto da config
};
```

#### 2.3. Criar Página de Contato

Configurar Web3Forms em `src/config/site.ts`:
```typescript
contact: {
  enabled: true,
  action: "https://api.web3forms.com/submit",
  method: "post",
}
```

Adicionar hidden input no form com seu access key.

---

### FASE 3 — Escalar Conteúdo (Semana 4-6)

#### 3.1. Criar Mais Cursos
Replicar estrutura para:
1. Auditoria de Segurança (Pilar 01)
2. DeFi Avançado (Pilar 01)
3. Foundry Mastery (Pilar 01)

#### 3.2. Criar Materiais Gratuitos
1. Guia de Setup (Foundry + Hardhat)
2. Glossário Blockchain (200 termos)
3. Templates de Contratos (GitHub)

#### 3.3. Criar E-books Premium (Biblioteca)
Usar mesma estrutura de `work/`, mas com `disciplines: [campaign]`

#### 3.4. Criar Laboratórios Open-Source
```yaml
---
title: "DeFi Vault Template"
disciplines: [spatial]  # Laboratórios
sector: "DeFi"
# ... resto do schema
---
```

#### 3.5. Criar Eventos (Ecossistema)
```yaml
---
title: "Hackathon DeFi Q1 2027"
disciplines: [ecosystem]  # Ecossistema Web3
sector: "Eventos"
# ... resto do schema
---
```

---

### FASE 4 — Otimização (Semana 7-8)

#### 4.1. SEO
- [ ] Atualizar meta descriptions
- [ ] Adicionar alt text em todas as imagens
- [ ] Criar sitemap.xml (já automático)
- [ ] Configurar Google Analytics
- [ ] Adicionar Schema.org markup

#### 4.2. Performance
- [ ] Otimizar imagens (Sharp já faz isso automaticamente)
- [ ] Lazy load de imagens below the fold
- [ ] Preload de fonts críticas
- [ ] Code splitting

#### 4.3. Conversão
- [ ] A/B test de CTAs
- [ ] Heatmaps (Hotjar)
- [ ] Lead magnets em pontos estratégicos
- [ ] Exit-intent popups

---

## 📂 Estrutura de Pastas (Exemplo Completo)

```
src/content/

├── work/
│   ├── arquitetura-smart-contracts/      # Curso (Pilar 01)
│   │   ├── index.md
│   │   ├── cover.jpg
│   │   ├── still-1.jpg
│   │   └── still-2.jpg
│   │
│   ├── auditoria-seguranca/              # Curso (Pilar 01)
│   ├── defi-avancado/                     # Curso (Pilar 01)
│   │
│   ├── checklist-seguranca/              # Material (Pilar 03)
│   ├── guia-setup/                        # Material (Pilar 03)
│   │
│   ├── evm-internals-ebook/              # E-book (Pilar 04)
│   ├── upgradability-patterns-ebook/     # E-book (Pilar 04)
│   │
│   ├── defi-vault-template/              # Lab (Pilar 05)
│   ├── nft-marketplace-starter/          # Lab (Pilar 05)
│   │
│   ├── hackathon-defi-q1/                # Evento (Pilar 06)
│   └── meetup-sp-janeiro/                # Evento (Pilar 06)
│
├── journal/
│   ├── padroes-upgradability-2027/
│   ├── auditoria-compound-fork/
│   ├── otimizacao-gas-dicas/
│   └── introducao-foundry/
│
└── people/
    ├── seu-nome/
    ├── instrutor-2/
    └── mentor-3/
```

---

## 🎨 Customização Visual

### Paleta de Cores (já configurada)
```css
/* src/styles/global.css */
:root {
  --paper: #FFFFFF;
  --ink: #000000;
  --signal: #FF6B00;  /* Laranja principal */
}
```

### Ajustar Cores por Projeto
No frontmatter de cada projeto:
```yaml
color: "#FF6B00"  # Laranja (cursos)
color: "#FF0000"  # Vermelho (materiais de segurança)
color: "#00FF00"  # Verde (laboratórios)
```

### Trocar Fonts (opcional)
Editar `src/styles/global.css`:
```css
--font-display: "Sua Font Display";
--font-sans: "Sua Font Body";
```

---

## 🔧 Comandos Úteis

```bash
# Dev server
npm run dev

# Build para produção
npm run build

# Type checking
npm run check

# Format code
npm run format

# Preview build
npm run preview
```

---

## 📊 Métricas de Sucesso

### Conversão
- [ ] Lead capture rate > 15%
- [ ] Curso enrollment rate > 5%
- [ ] Mentoria booking rate > 2%

### Engajamento
- [ ] Tempo médio na página > 3min
- [ ] Bounce rate < 40%
- [ ] Pages per session > 3

### SEO
- [ ] Ranking Top 10 para "curso blockchain Brasil"
- [ ] Ranking Top 10 para "auditoria smart contracts"
- [ ] Domain Authority > 30 em 6 meses

---

## 🚀 Deploy Checklist

Antes do deploy em produção:

- [ ] Remover todo o conteúdo demo (Halden, Lucenta, etc)
- [ ] Adicionar mínimo 3 cursos reais
- [ ] Adicionar mínimo 2 materiais gratuitos
- [ ] Adicionar mínimo 5 artigos de blog
- [ ] Configurar Web3Forms (contact form)
- [ ] Adicionar Google Analytics
- [ ] Testar todos os links
- [ ] Verificar imagens (alt text, otimização)
- [ ] Atualizar `siteUrl` em `src/config/site.ts`
- [ ] Adicionar favicon.svg customizado
- [ ] Criar og-image.png customizado
- [ ] Testar em mobile
- [ ] Testar performance (Lighthouse > 90)
- [ ] Configurar domínio personalizado
- [ ] Configurar SSL
- [ ] Submeter sitemap ao Google Search Console

---

## 🆘 Troubleshooting

### Build falha com erro de discipline
```bash
# Certifique-se de que todas as disciplines em work/* são válidas
# Válidas: identity, digital, packaging, campaign, spatial, ecosystem
```

### Imagens não aparecem
```bash
# Verifique que as imagens estão nas pastas corretas
# Formato: ./cover.jpg (relativo ao index.md)
```

### Form de contato não funciona
```bash
# Configure Web3Forms em src/config/site.ts
contact: {
  enabled: true,
  action: "https://api.web3forms.com/submit",
}
```

---

## 📚 Recursos

- [Lucenta Theme Docs](https://github.com/xocothemes/lucenta)
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Web3Forms](https://web3forms.com)
- [Sharp Image Optimization](https://sharp.pixelplumbing.com/)

---

**Versão:** 1.0  
**Última atualização:** 2027-01-15  
**Status:** 🟢 Pronto para implementação
