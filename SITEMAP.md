# 📄 BLOCKCHAIN DEV LAB — Mapa do Site

---

## 1. VISÃO GERAL DO PROJETO

**Marca:** BLOCKCHAIN DEV LAB  
**Posicionamento:** Ecossistema de educação, desenvolvimento e inovação Web3  
**Slogan:** Aprenda • Desenvolva • Conquiste  
**Modelo:** Portal institucional de alta conversão (sem área logada nativa)  
**Estilo visual:** Minimalista, paleta laranja e preto, design vetorial flat

---

## 2. ARQUITETURA — 6 PILARES ESTRATÉGICOS

```
BLOCKCHAIN DEV LAB — ECOSSISTEMA WEB3

01. Educação & Mentoria     → Formação técnica + acompanhamento especializado
02. Consultoria              → Soluções B2B para empresas e startups
03. Materiais Gratuitos      → Iscas digitais e e-books simplificados (aquisição)
04. Biblioteca Premium       → E-books e publicações técnicas aprofundadas
05. Laboratórios             → Projetos práticos e desenvolvimento open-source
06. Ecossistema Web3         → Networking, eventos e colaboração
```

---

## 3. NAVEGAÇÃO PRINCIPAL (Header)

```
INÍCIO | EDUCAÇÃO & MENTORIA ▾ | CONSULTORIA | RECURSOS ▾ | LABORATÓRIOS | ECOSSISTEMA WEB3 | SOBRE ▾ | CONTATO
```

### Submenus:

**EDUCAÇÃO & MENTORIA ▾**
- Cursos → `/educacao/cursos/`
- Trilhas de Aprendizado → `/educacao/trilhas/`
- Mentoria Individual → `/educacao/mentoria/`
- Nossos Mentores → `/educacao/mentores/`

**RECURSOS ▾**
- Materiais Gratuitos → `/recursos/materiais/`
- Biblioteca Premium → `/recursos/biblioteca/`
- Blog Técnico → `/recursos/blog/`

**SOBRE ▾**
- Nossa Missão → `/sobre/missao/`
- Equipe → `/sobre/equipe/`
- Parceiros → `/sobre/parceiros/`
- FAQ → `/sobre/faq/`

---

## 4. ESTRUTURA DE PÁGINAS (URLs)

### 4.1. Homepage (`/`)
- **Hero** — Aprenda • Desenvolva • Conquiste
- **Projetos em Destaque** — Grid de 6 projetos (cursos, labs, materiais)
- **Manifesto** — Parágrafo animado palavra por palavra
- **6 Pilares** — Cards com hover de imagens
- **Depoimento** — Quote de aluno
- **Números** — 150+ alunos, 30+ projetos, 95% aprovação, 24h suporte
- **Blog** — Últimos 3 artigos técnicos
- **CTA** — Botão "Começar Agora" → `/contact/`

---

### 4.2. PILAR 01 — Educação & Mentoria

#### 4.2.1. Landing Principal: `/educacao/`
- Headline: "Transforme-se em especialista blockchain"
- Grid de todos os cursos e trilhas
- Depoimentos de alunos
- CTA: Agendar call com mentor

#### 4.2.2. Cursos: `/educacao/cursos/`
- Grid filtrado por nível (Iniciante, Intermediário, Avançado)
- Cada card: título, duração, preço, nível
- Clique → página individual do curso

#### 4.2.3. Curso Individual: `/educacao/cursos/[slug]/`
Exemplo: `/educacao/cursos/arquitetura-smart-contracts/`

**Conteúdo:**
- Cover parallax com cor do curso
- Título + tagline
- Resumo executivo
- **O que você vai aprender** (highlights)
- **Resultados esperados** (figures: 10x ROI, 95% aprovação)
- **Depoimento** de aluno
- **Stills** (screenshots de aulas, diagramas)
- **Instrutor** (foto, bio, LinkedIn)
- **Próximos passos** (CTA: Matricular-se)

#### 4.2.4. Trilhas: `/educacao/trilhas/`
- Sequências curatoradas de cursos
- Exemplos: "Do Zero ao Deploy", "Auditoria Pro", "DeFi Advanced"

#### 4.2.5. Mentoria: `/educacao/mentoria/`
- Descrição do programa (4-12 sessões)
- Formato (1:1, revisão de código, Slack)
- Investimento
- Formulário de aplicação

#### 4.2.6. Mentores: `/educacao/mentores/`
- Grid de portraits (2:3)
- Nome, role, localização
- Bio curta
- LinkedIn, Instagram

---

### 4.3. PILAR 02 — Consultoria

#### 4.3.1. Landing: `/consultoria/`
- Headline: "Soluções técnicas sob demanda para startups Web3"
- **Serviços:**
  1. Auditoria de Segurança
  2. Arquitetura de Protocolos
  3. Otimização de Gas
  4. Integração de Oracles
  5. Upgradability Patterns
  6. Suporte Pós-Deploy (3-12 meses)
- **Cases:** Projetos B2B realizados (DeFi, NFT, DAO)
- **Processo:** Discovery → Proposta → Execução → Handoff
- **Depoimento** de cliente
- **CTA:** Agendar consultoria (Calendly)

#### 4.3.2. Case Study Individual: `/consultoria/cases/[slug]/`
Exemplo: `/consultoria/cases/defi-protocol-audit/`

**Conteúdo:**
- Nome do cliente (ou anônimo: "DeFi Protocol")
- Desafio, solução, resultados
- Stills técnicos (diagramas, código)
- Métricas (10x TVL, 0 exploits em 2 anos)

---

### 4.4. PILAR 03 — Materiais Gratuitos

#### 4.4.1. Landing: `/recursos/materiais/`
- Grid de e-books gratuitos
- Cada card: título, descrição, preview da capa
- Clique → página individual com lead form

#### 4.4.2. Material Individual: `/recursos/materiais/[slug]/`
Exemplo: `/recursos/materiais/checklist-seguranca/`

**Conteúdo:**
- Título + descrição
- Preview da primeira página (imagem)
- **Lead Form:**
  - Nome
  - Email
  - Interesse (dropdown: Cursos, Mentoria, Consultoria)
  - Submit → Download imediato + adiciona à newsletter

#### 4.4.3. Materiais Disponíveis (exemplos):
1. Checklist de Segurança (25 pontos críticos)
2. Guia de Setup (Foundry + Hardhat)
3. Glossário Blockchain (200 termos)
4. Templates de Contratos (GitHub)
5. Introdução a Solidity (e-book 50 páginas)

---

### 4.5. PILAR 04 — Biblioteca Premium

#### 4.5.1. Landing: `/recursos/biblioteca/`
- Grid de e-books pagos
- Cada card: título, preço, páginas, nível
- Badge: "Acesso vitalício"
- Clique → página de venda

#### 4.5.2. E-book Individual: `/recursos/biblioteca/[slug]/`
Exemplo: `/recursos/biblioteca/evm-internals-deep-dive/`

**Conteúdo:**
- Cover + preview de capítulos
- Descrição técnica completa
- **O que está incluído:**
  - E-book (PDF + ePub)
  - Código-fonte completo (GitHub privado)
  - Diagramas editáveis (Excalidraw)
  - Atualizações vitalícias
- **Preço:** R$ 497 ou $97
- **CTA:** Comprar agora (Stripe/Hotmart)

#### 4.5.3. E-books Disponíveis (exemplos):
1. EVM Internals — Deep Dive (300 páginas)
2. Upgradability Patterns (200 páginas)
3. MEV Protection Strategies (150 páginas)
4. Cross-Chain Architecture (250 páginas)
5. Real-World Audit Case Studies (10 auditorias completas)

---

### 4.6. PILAR 05 — Laboratórios

#### 4.6.1. Landing: `/laboratorios/`
- Grid de projetos open-source
- Cada card: nome, descrição, stack, GitHub stars
- Badge: "Open Source"
- Clique → página do projeto

#### 4.6.2. Laboratório Individual: `/laboratorios/[slug]/`
Exemplo: `/laboratorios/defi-vault-template/`

**Conteúdo:**
- Nome do projeto
- Descrição técnica
- **Stack:** Foundry, Solidity 0.8.23, OpenZeppelin
- **Features:**
  - ERC-4626 compliant
  - Upgradeable (UUPS)
  - Gas optimized
  - 100% test coverage
- **GitHub:** Link para repo público
- **Docs:** Link para documentação técnica
- **Contributors:** Grid de avatares
- **CTA:** Contribute on GitHub

#### 4.6.3. Laboratórios Disponíveis (exemplos):
1. DeFi Vault Template (ERC-4626)
2. NFT Marketplace Starter
3. DAO Governance Kit
4. Foundry Test Helpers
5. Gas Optimization Library
6. Audit Checklist CLI

---

### 4.7. PILAR 06 — Ecossistema Web3

#### 4.7.1. Landing: `/ecossistema/`
- Headline: "Conecte-se com a comunidade Web3 do Brasil"
- **Eventos:**
  - Hackathons (trimestrais)
  - Meetups (mensais — SP, RJ, BH)
  - Workshops práticos
- **Comunidade:**
  - Discord (1000+ membros)
  - Job board exclusivo
  - Introduções a VCs
- **Próximos eventos:** Calendário
- **CTA:** Entrar no Discord

#### 4.7.2. Evento Individual: `/ecossistema/eventos/[slug]/`
Exemplo: `/ecossistema/eventos/hackathon-defi-q1-2027/`

**Conteúdo:**
- Nome do evento
- Data, horário, local (ou online)
- Descrição
- Palestrantes / Jurados
- Prêmios
- **CTA:** Inscrever-se (Eventbrite/Sympla)

---

### 4.8. Sobre

#### 4.8.1. Nossa Missão: `/sobre/missao/`
- História do Blockchain Dev Lab
- Manifesto (versão longa)
- Valores: Prática > Teoria, Open Source, Comunidade

#### 4.8.2. Equipe: `/sobre/equipe/`
- Grid de portraits (2:3)
- Nome, role, bio
- LinkedIn, GitHub

#### 4.8.3. Parceiros: `/sobre/parceiros/`
- Logos de empresas parceiras
- Protocolos DeFi apoiadores
- Instituições de ensino

#### 4.8.4. FAQ: `/sobre/faq/`
- Accordion com perguntas frequentes
- Categorias: Cursos, Mentoria, Consultoria, Pagamentos

---

### 4.9. Blog Técnico

#### 4.9.1. Landing: `/recursos/blog/`
- Grid de artigos
- Filtros: Categorias (Arquitetura, Segurança, DeFi, Tooling)
- Paginação

#### 4.9.2. Artigo Individual: `/recursos/blog/[slug]/`
Exemplo: `/recursos/blog/padroes-upgradability-2027/`

**Conteúdo:**
- Título
- Autor(es) + data
- Cover (opcional)
- Conteúdo MDX (Markdown + componentes)
- **Projetos relacionados:** Cards de cursos/labs citados
- **Compartilhar:** Twitter, LinkedIn
- **Newsletter:** CTA para assinar

#### 4.9.3. Categorias: `/recursos/blog/category/[category]/`
- Arquitetura
- Segurança
- DeFi
- Tooling
- Estudos de Caso

---

### 4.10. Contato

#### 4.10.1. Landing: `/contact/`
- Headline: "Vamos construir juntos"
- **Formulário:**
  - Nome
  - Email
  - Empresa (opcional)
  - Interesse (dropdown: Curso, Mentoria, Consultoria, Parceria)
  - Timing (dropdown: Imediato, 1-3 meses, 3-6 meses)
  - Budget (opcional, dropdown)
  - Mensagem
- **FAQ** (3-5 perguntas curtas)
- **Clocks:** Horário atual (São Paulo)
- **Status:** "Vagas abertas para mentoria e consultoria 2027"

---

## 5. CONTENT COLLECTIONS (Astro)

### 5.1. Work (`src/content/work/`)
**Tipos de projetos:**
- Cursos (Pilar 01)
- Cases de consultoria (Pilar 02)
- Laboratórios (Pilar 05)

**Schema:**
```yaml
title: Nome do Projeto
headline: Tagline
disciplines: [identity, digital, packaging, campaign, spatial, ecosystem]
sector: "DeFi" | "NFT" | "DAO" | "Infrastructure"
year: 2027
color: "#FF6B00"  # Laranja Blockchain Dev Lab
ink: "light" | "dark"
cover: ./cover.jpg
stills: [{ src: ./still-1.jpg, alt: "..." }]
results: [{ value: "10x", label: "ROI" }]
testimonial: { quote: "...", name: "...", role: "..." }
credits: [{ role: "Instrutor", name: "..." }]
featured: true
order: 1
```

### 5.2. Journal (`src/content/journal/`)
**Artigos técnicos (Pilar 03 — Blog)**

**Schema:**
```yaml
title: Título do Artigo
description: Resumo
date: 2027-01-15
category: "arquitetura" | "seguranca" | "defi" | "tooling" | "case-study"
authors: [autor-slug]
cover: ./cover.jpg
work: [projeto-relacionado-slug]
featured: false
```

### 5.3. People (`src/content/people/`)
**Mentores, instrutores, equipe**

**Schema:**
```yaml
name: Nome Completo
role: Blockchain Architect | Security Auditor | DeFi Engineer
location: São Paulo, Brasil
linkedin: https://...
instagram: https://... (opcional)
github: https://... (opcional)
order: 1
---
Bio de 1-2 parágrafos...
```

---

## 6. DISCIPLINAS (Filtros no Work Grid)

Mapeamento de `disciplines` para os 6 pilares:

| Key | Label | Usado em |
|---|---|---|
| `identity` | Educação & Mentoria | Cursos, trilhas |
| `digital` | Consultoria | Cases B2B |
| `packaging` | Materiais Gratuitos | E-books grátis |
| `campaign` | Biblioteca Premium | E-books pagos |
| `spatial` | Laboratórios | Projetos open-source |
| `ecosystem` | Ecossistema Web3 | Eventos, hackathons |

---

## 7. FOOTER

### Colunas:

**Educação**
- Cursos
- Trilhas
- Mentoria
- Mentores

**Empresa**
- Consultoria B2B
- Laboratórios
- Ecossistema Web3
- Sobre Nós

**Recursos**
- Materiais Gratuitos
- Biblioteca Premium
- Blog Técnico

**Suporte**
- Contato
- FAQ
- Parceiros

### Rodapé:
- Logo + tagline
- Socials: LinkedIn, X (Twitter), Instagram, RSS
- Legal: Privacidade | Termos de Uso
- © 2027 Blockchain Dev Lab

---

## 8. PALETA DE CORES

**Principal:**
- Laranja: `#FF6B00`
- Preto: `#000000`
- Branco: `#FFFFFF`

**Gradiente (opcional):**
- Laranja → Vermelho: `linear-gradient(135deg, #FF6B00, #FF0000)`

**Secundárias:**
- Cinza escuro: `#1A1A1A`
- Cinza médio: `#666666`
- Cinza claro: `#E5E5E5`

---

## 9. TIPOGRAFIA

**Display:** Epilogue Bold (800)  
**Body:** Mona Sans Regular (400)  
**Mono (código):** SF Mono / Fira Code

---

## 10. PÁGINAS ESPECIAIS

### 10.1. 404 (`/404.html`)
- Mensagem: "Esta página não existe no ecossistema"
- Links rápidos: Cursos, Materiais, Blog
- CTA: Voltar ao início

### 10.2. Robots.txt (`/robots.txt`)
- Allow: `/`
- Sitemap: `https://blockchaindevlab.dev/sitemap.xml`

### 10.3. RSS (`/rss.xml`)
- Feed de artigos do blog

### 10.4. Sitemap (`/sitemap.xml`)
- Todas as páginas públicas

---

## 11. DEPLOY

**Host:** Digital Ocean Static Sites (ou Vercel/Cloudflare Pages)  
**Build:** `npm run build`  
**Output:** `dist/`  
**Env vars:** Nenhuma (site 100% estático)

---

## 12. MÉTRICAS DE SUCESSO

**Conversão:**
- Leads capturados (materiais gratuitos)
- Matrículas em cursos
- Agendamentos de mentoria/consultoria

**Engajamento:**
- Tempo médio na página
- Taxa de retorno
- Inscrições na newsletter

**SEO:**
- Ranking para "curso blockchain Brasil"
- Ranking para "auditoria smart contracts"

---

**Versão:** 1.0  
**Data:** 2027-01-15  
**Status:** Em implementação
