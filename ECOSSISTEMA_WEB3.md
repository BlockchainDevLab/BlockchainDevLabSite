# 🌐 Ecossistema Web3 — Documentação

## Overview

Seção dedicada à **comunidade e networking** do Blockchain Dev Lab. O Ecossistema Web3 é o pilar que conecta desenvolvedores, empresas e especialistas através de eventos, grupos de estudo e oportunidades.

---

## 📋 Estrutura de Páginas

### Landing Page: `/ecossistema-web3/`
✅ **Status:** Implementada com Lucenta components

**Hero:**
- Headline emocional: "Você não precisa caminhar sozinho"
- Foco em comunidade e conexão
- CTA primário: "Entrar no Ecossistema"

**Seções:**
1. **Stats** — 4 métricas (5.000+ membros, 200+ eventos, 50+ empresas, 300+ vagas)
2. **Features Grid** — 5 cards clicáveis:
   - 🤝 Networking
   - 📅 Eventos
   - 📚 Grupos de Estudo
   - 💼 Oportunidades
   - 🏢 Parceiros
3. **Benefits** — 6 cards de benefícios (2 colunas)
4. **Upcoming Events** — 3 eventos próximos com mock data
5. **Final CTA** — 2 botões (Entrar na Comunidade + Ver Próximos Eventos)

**Componentes Lucenta utilizados:**
- `BaseLayout` — Layout padrão do site
- `Button` — CTAs com variants (primary/secondary)
- `SectionHead` — Títulos de seção com link opcional
- `Icon` — Ícones SVG (arrow-right)
- CSS classes: `.section`, `.shell`, `.card`, `.badge`, `.h1`, `.h2`, `.h4`, `.h5`, `.text-muted`

---

### Subpáginas (5) — ❌ Pendentes

| Página | URL | Conteúdo | Status |
|---|---|---|---|
| **Networking** | `/ecossistema-web3/networking/` | Perfis da comunidade, conexões, Discord | ❌ Criar |
| **Eventos** | `/ecossistema-web3/eventos/` | Agenda completa, inscrições, histórico | ❌ Criar |
| **Grupos de Estudo** | `/ecossistema-web3/grupos-estudo/` | Grupos ativos, criar novo grupo | ❌ Criar |
| **Oportunidades** | `/ecossistema-web3/oportunidades/` | Job board, vagas abertas, empresas | ❌ Criar |
| **Parceiros** | `/ecossistema-web3/parceiros/` | Empresas, protocolos, universidades | ❌ Criar |

---

## 🎨 Design System

### Cores e Gradientes
```css
/* Gradiente de fundo (usado em Benefits) */
background: linear-gradient(to-br, from-orange-500/10, to-orange-500/5);

/* Cards com hover */
.card:hover {
  border-color: var(--color-primary);
}
```

### Tipografia
- **H1:** `class="h1"` — Hero headline
- **H2:** `class="h2"` — Section titles
- **H4:** `class="h4"` — Card titles
- **H5:** `class="h5"` — Benefit cards
- **Text muted:** `class="text-muted"` — Descrições e labels

### Componentes Reutilizáveis

#### Button
```astro
<Button href="/path/" size="lg">Label</Button>
<Button variant="secondary" size="sm">Label</Button>
```

#### SectionHead
```astro
<SectionHead 
  title="Título da seção" 
  link={{ href: "/url/", label: "Ver todos" }}
/>
```

#### Card com Hover
```astro
<a href="/url/" class="group card">
  <div class="text-5xl mb-6">🤝</div>
  <h3 class="h4 mb-3 group-hover:text-primary transition-colors">Título</h3>
  <p class="text-muted text-pretty">Descrição...</p>
</a>
```

---

## 📊 Métricas e KPIs

### Stats Section
| Métrica | Valor | Descrição |
|---|---|---|
| Membros ativos | 5.000+ | Desenvolvedores na comunidade |
| Eventos realizados | 200+ | Meetups, workshops, hackathons |
| Empresas parceiras | 50+ | Empresas contratando do ecossistema |
| Vagas publicadas | 300+ | Oportunidades no job board |

**Nota:** Substituir por métricas reais quando disponível

---

## 🗓️ Eventos (Mock Data)

### Próximos Eventos
1. **Web3 Meetup SP** — 15 Jan
   - Formato: Presencial
   - Participantes: 120
   
2. **Workshop: DeFi Deep Dive** — 22 Jan
   - Formato: Online
   - Participantes: 85
   
3. **Hackathon: NFTs & Gaming** — 05 Fev
   - Formato: Híbrido
   - Participantes: 200

**Próximos passos:**
- Integrar com Eventbrite ou Luma API
- Criar collection `events` no Astro
- Adicionar inscrição via formulário

---

## 🔗 Navegação e Links

### Menu Principal
```
Ecossistema Web3
├── Networking (/ecossistema-web3/networking/)
├── Eventos (/ecossistema-web3/eventos/)
├── Grupos de Estudo (/ecossistema-web3/grupos-estudo/)
├── Oportunidades (/ecossistema-web3/oportunidades/)
└── Parceiros (/ecossistema-web3/parceiros/)
```

### CTAs
- **Primário:** "Entrar no Ecossistema" → `/ecossistema-web3/networking/`
- **Secundário:** "Ver Próximos Eventos" → `/ecossistema-web3/eventos/`

---

## 💰 Estratégia de Monetização

### Modelo: Assinatura de Comunidade Premium

**Gratuito:**
- Acesso ao Discord público
- Eventos online gratuitos
- Job board (visualização)

**Premium (R$ 49/mês):**
- Acesso a eventos presenciais
- Grupos de estudo privados
- Mentoria semanal com experts
- Job board (candidatura prioritária)
- Acesso antecipado a conteúdos
- Descontos em cursos e materiais

**Empresarial (R$ 499/mês):**
- Publicar vagas no job board
- Logo na seção de parceiros
- Patrocínio de eventos
- Acesso ao talent pool
- Recrutamento ativo

---

## 📝 Copywriting

### Princípios
1. **Tom emocional** — "Você não precisa caminhar sozinho"
2. **Foco em benefícios** — Conexões reais, oportunidades, aprendizado
3. **Inclusivo** — "Junte-se a milhares de desenvolvedores"
4. **Call to connection** — Verbos de ação social (conectar, participar, construir)

### Frases-chave
- "Você não precisa caminhar sozinho"
- "Conexões reais com pessoas construindo o futuro descentralizado"
- "Faça parte do ecossistema"
- "Junte-se a milhares de desenvolvedores"

---

## 🚀 Próximas Implementações

### Prioridade ALTA
1. **Criar página de Networking** (`/ecossistema-web3/networking/`)
   - Grid de membros da comunidade
   - Perfis públicos
   - Botão "Conectar no Discord"
   
2. **Criar página de Eventos** (`/ecossistema-web3/eventos/`)
   - Agenda completa
   - Filtros (online/presencial, categoria)
   - Sistema de inscrição

### Prioridade MÉDIA
3. **Integração Discord**
   - Embed do widget do Discord
   - Login OAuth
   - Sincronização de roles (free/premium)

4. **Job Board** (`/ecossistema-web3/oportunidades/`)
   - Listagem de vagas
   - Filtros (remoto, senioridade, tecnologia)
   - Sistema de candidatura

### Prioridade BAIXA
5. **Grupos de Estudo** — Plataforma de criação e gestão de grupos
6. **Parceiros** — Logos e descrição de empresas parceiras
7. **Gamificação** — Badges, XP, leaderboard

---

## 🧪 Testes

### Checklist de QA
- [x] Build succeeded (40 pages)
- [x] Lucenta components funcionando
- [x] Layout responsivo
- [x] Links internos corretos
- [ ] Testar em mobile
- [ ] Testar hover states
- [ ] Validar acessibilidade (WCAG)
- [ ] Lighthouse > 90

---

## 📂 Arquivos

```
src/pages/ecossistema-web3/
├── index.astro                     # ✅ Landing page
├── networking/
│   └── index.astro                 # ❌ Pendente
├── eventos/
│   └── index.astro                 # ❌ Pendente
├── grupos-estudo/
│   └── index.astro                 # ❌ Pendente
├── oportunidades/
│   └── index.astro                 # ❌ Pendente
└── parceiros/
    └── index.astro                 # ❌ Pendente
```

---

## 📚 Referências

### Inspiração de Design
- [Figma Community](https://www.figma.com/community)
- [Luma Events](https://lu.ma/)
- [Eventbrite](https://www.eventbrite.com/)
- [Discord Server Templates](https://discord.com/template/)

### Lucenta Theme
- Docs: [Lucenta GitHub](https://github.com/xocothemes/lucenta)
- Components: `src/components/ui/`
- CSS utilities: `src/styles/utilities.css`

---

**Última atualização:** 15 de janeiro de 2027  
**Status:** 1 página implementada (landing), 5 pendentes (subpáginas)  
**Build:** 40 páginas geradas com sucesso
