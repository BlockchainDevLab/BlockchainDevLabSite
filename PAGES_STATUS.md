# 📋 Status das Páginas — Blockchain Dev Lab

Última atualização: 15 de janeiro de 2027

---

## ✅ PÁGINAS IMPLEMENTADAS (34 páginas)

### 00. Páginas Institucionais

| Página | URL | Status | Notas |
|---|---|---|---|
| **Home** | `/` | ✅ Implementada | Hero + 6 pilares + manifesto |
| **Sobre — Missão** | `/sobre/nossa-missao/` | ⚠️ Redirect para `/studio/` | Precisa página customizada |
| **Sobre — Equipe** | `/sobre/equipe/` | ⚠️ Usar `/studio/` | People collection |
| **Sobre — Parceiros** | `/sobre/parceiros/` | ❌ Pendente | Criar página |
| **FAQ** | `/faq/` | ✅ Implementada | 5 categorias, 20+ perguntas |
| **Contato** | `/contato/` | ✅ Implementada | Form + FAQ + clocks |
| **Blog** | `/blog/` | ⚠️ Redirect para `/journal/` | Renomear para `/blog/` |
| **Termos de Uso** | `/termos-de-uso/` | ✅ Implementada | LGPD compliant |
| **Privacidade** | `/politica-de-privacidade/` | ✅ Implementada | LGPD compliant |
| **Cookies** | `/politica-de-cookies/` | ✅ Implementada | Consent management |

---

### 01. Educação & Mentoria

| Página | URL | Status | Collection |
|---|---|---|---|
| **Hub de Educação** | `/educacao/` | ❌ Pendente | Landing page |
| **Cursos (Grid)** | `/educacao/cursos/` | ⚠️ Usar `/work/` | Filtrar `disciplines: [identity]` |
| **Curso Individual** | `/educacao/cursos/[slug]/` | ⚠️ Usar `/work/[slug]/` | Work collection |
| **Trilhas** | `/educacao/trilhas/` | ❌ Pendente | Nova página |
| **Mentoria** | `/educacao/mentoria/` | ❌ Pendente | Landing page |
| **Mentores (Grid)** | `/educacao/mentores/` | ⚠️ Usar People collection | `/studio/` mostra time |

**Projetos demo (8):**
- ✅ `/work/halden/` → Exemplo de curso
- ✅ `/work/lumio/` → Exemplo de caso B2B
- ✅ `/work/kitebird/` → Exemplo de material
- ✅ `/work/veldt/` → Exemplo de e-book
- ✅ `/work/ostra/` → Exemplo de lab
- ✅ `/work/juniper/` → Exemplo de evento
- ✅ `/work/kiln/`
- ✅ `/work/tidewater/`

---

### 02. Laboratório & Consultoria

| Página | URL | Status | Notas |
|---|---|---|---|
| **Landing** | `/laboratorio-consultoria/` | ✅ Implementada | 2-card design (Lab + Consultoria) |
| **Consultoria — Landing** | `/laboratorio-consultoria/consultoria/` | ✅ Implementada | Briefing + cases + processo |
| **Briefing Form** | `/laboratorio-consultoria/consultoria/briefing/` | ✅ Implementada | Web3Forms |
| **Cases** | `/laboratorio-consultoria/consultoria/cases/` | ✅ Implementada | Portfolio de projetos |
| **Processo** | `/laboratorio-consultoria/consultoria/processo/` | ✅ Implementada | Metodologia |
| **Legacy Consultoria** | `/consultoria/` | ✅ Mantida | Compatibilidade (4 páginas antigas) |

---

### 03. Materiais Gratuitos

| Página | URL | Status | Notas |
|---|---|---|---|
| **Grid** | `/recursos/materiais/` | ⚠️ Usar `/work/` filtrado | `disciplines: [packaging]` |
| **Material + Form** | `/recursos/materiais/[slug]/` | ⚠️ Usar `/work/[slug]/` | Adicionar lead form component |

---

### 04. Biblioteca Premium

| Página | URL | Status | Notas |
|---|---|---|---|
| **Grid** | `/recursos/biblioteca/` | ⚠️ Usar `/work/` filtrado | `disciplines: [campaign]` |
| **E-book Venda** | `/recursos/biblioteca/[slug]/` | ⚠️ Usar `/work/[slug]/` | Adicionar botão de compra |

---

### 05. Laboratórios

| Página | URL | Status | Notas |
|---|---|---|---|
| **Grid** | `/laboratorios/` | ⚠️ Usar `/work/` filtrado | `disciplines: [spatial]` |
| **Lab Individual** | `/laboratorios/[slug]/` | ⚠️ Usar `/work/[slug]/` | Link para GitHub |

---

### 06. Ecossistema Web3

| Página | URL | Status | Notas |
|---|---|---|---|
| **Landing** | `/ecossistema-web3/` | ✅ Implementada | Community-focused com Lucenta components |
| **Networking** | `/ecossistema-web3/networking/` | ❌ Pendente | Criar página |
| **Eventos** | `/ecossistema-web3/eventos/` | ❌ Pendente | Criar página |
| **Grupos de Estudo** | `/ecossistema-web3/grupos-estudo/` | ❌ Pendente | Criar página |
| **Oportunidades** | `/ecossistema-web3/oportunidades/` | ❌ Pendente | Job board |
| **Parceiros** | `/ecossistema-web3/parceiros/` | ❌ Pendente | Empresas e protocolos |

---

### 07. Blog/Journal

| Página | URL Atual | URL Desejada | Status |
|---|---|---|---|
| **Grid de Artigos** | `/journal/` | `/blog/` | ⚠️ Renomear |
| **Artigo Individual** | `/journal/[slug]/` | `/blog/[slug]/` | ⚠️ Renomear |
| **Por Categoria** | `/journal/category/[cat]/` | `/blog/categoria/[cat]/` | ⚠️ Renomear |

**Artigos demo (6):**
- ✅ `/journal/start-with-one-colour/`
- ✅ `/journal/the-brief-we-wish-we-got/`
- ✅ `/journal/design-for-motion-first/`
- ✅ `/journal/a-good-launch-week/`
- ✅ `/journal/kiln-one-year-on/`
- ✅ `/journal/inside-a-workshop-day/`

---

### 08. Páginas Técnicas (Automáticas)

| Página | URL | Status |
|---|---|---|
| **404** | `/404.html` | ✅ Implementada |
| **Robots.txt** | `/robots.txt` | ✅ Implementada |
| **Sitemap XML** | `/sitemap.xml` | ✅ Auto-gerado |
| **RSS Feed** | `/rss.xml` | ✅ Auto-gerado |

---

## 📊 RESUMO

| Status | Quantidade | % |
|---|---|---|
| ✅ Implementadas | 34 | 68% |
| ⚠️ Redirect/Renomear | 11 | 22% |
| ❌ Pendentes | 5 | 10% |
| **TOTAL** | **50** | **100%** |

---

## 🚀 PRÓXIMAS AÇÕES

### Prioridade ALTA (Semana 1):

1. **Renomear rotas existentes**
   ```bash
   # Journal → Blog
   mv src/pages/journal/ src/pages/blog/
   
   # Services → Consultoria
   mv src/pages/services.astro src/pages/consultoria.astro
   
   # Studio → Sobre
   # (manter /studio/ para compatibilidade, criar /sobre/ como alias)
   ```

2. **Criar páginas de landing faltantes:**
   - `/educacao/` — Hub de cursos + trilhas + mentoria
   - `/educacao/trilhas/` — Grid de learning paths
   - `/educacao/mentoria/` — Programa de mentoria + aplicação
   - `/ecossistema/` — Eventos + comunidade + Discord
   - `/sobre/parceiros/` — Logos + descrição de parceiros

3. **Adicionar componentes:**
   - LeadCaptureForm.astro (para materiais gratuitos)
   - BuyButton.astro (para e-books premium)
   - EventCard.astro (para ecossistema)

### Prioridade MÉDIA (Semana 2):

4. **Configurar redirects:**
   ```js
   // astro.config.mjs
   redirects: {
     '/journal': '/blog',
     '/journal/[...slug]': '/blog/[...slug]',
     '/services': '/consultoria',
     '/contact': '/contato',
   }
   ```

5. **Criar aliases de rota:**
   - `/sobre/equipe/` → mostra people de `/studio/`
   - `/sobre/nossa-missao/` → mostra story de `/studio/`

### Prioridade BAIXA (Semana 3):

6. **Melhorias UX:**
   - Breadcrumbs em todas as páginas
   - Search bar (Algolia/Pagefind)
   - Dark mode toggle
   - Language switcher (PT/EN)

---

## 📂 ESTRUTURA DE PASTAS (Atual)

```
src/pages/
├── index.astro                     # Home ✅
├── 404.astro                       # 404 ✅
├── contato.astro                   # Contato ✅
├── faq.astro                       # FAQ ✅
├── politica-de-cookies.md          # Cookies ✅
├── politica-de-privacidade.md      # Privacidade ✅
├── termos-de-uso.md                # Termos ✅
├── robots.txt.ts                   # Robots ✅
├── rss.xml.ts                      # RSS ✅
│
├── work/
│   ├── index.astro                 # Grid de projetos ✅
│   └── [slug].astro                # Projeto individual ✅
│
├── journal/                        # ⚠️ Renomear para blog/
│   ├── [slug].astro
│   ├── [...page].astro
│   └── category/[category]/[...page].astro
│
├── services.astro                  # ⚠️ Renomear para consultoria.astro
├── studio.astro                    # ⚠️ Usar como /sobre/
│
└── legal/                          # ⚠️ Remover (já temos no root)
    ├── privacy.md
    └── terms.md
```

---

## 📂 ESTRUTURA DE PASTAS (Desejada)

```
src/pages/
├── index.astro                     # Home
├── 404.astro
├── contato.astro
├── faq.astro
├── politica-de-cookies.md
├── politica-de-privacidade.md
├── termos-de-uso.md
├── robots.txt.ts
├── rss.xml.ts
│
├── educacao/
│   ├── index.astro                 # Hub de educação
│   ├── cursos.astro                # Grid (filtrado de work)
│   ├── trilhas.astro               # Learning paths
│   └── mentoria.astro              # Programa de mentoria
│
├── consultoria/
│   └── index.astro                 # Landing de consultoria
│
├── recursos/
│   ├── materiais.astro             # Grid (filtrado de work)
│   └── biblioteca.astro            # Grid (filtrado de work)
│
├── laboratorios/
│   └── index.astro                 # Grid (filtrado de work)
│
├── ecossistema/
│   └── index.astro                 # Landing + eventos
│
├── sobre/
│   ├── index.astro                 # Nossa missão (redirect /studio/)
│   ├── equipe.astro                # Time (people collection)
│   └── parceiros.astro             # Parceiros
│
├── blog/                           # (renomeado de journal)
│   ├── index.astro
│   ├── [slug].astro
│   └── categoria/[category]/[...page].astro
│
└── work/
    ├── index.astro                 # Grid universal (todos os pilares)
    └── [slug].astro                # Página individual
```

---

## 🔧 COMANDOS ÚTEIS

```bash
# Listar todas as rotas atuais
npm run build && find dist -name "*.html" | sort

# Verificar links quebrados
npm run build && npm run preview
# Depois: usar broken-link-checker

# Type checking
npm run check

# Preview local
npm run dev
```

---

## ✅ CHECKLIST ANTES DO DEPLOY

- [ ] Todas as 50 páginas implementadas
- [ ] URLs seguem padrão PT-BR com hífens
- [ ] Redirects configurados (/journal → /blog)
- [ ] Legal pages revisadas por advogado
- [ ] FAQ atualizado com perguntas reais
- [ ] Contato funciona (Web3Forms configurado)
- [ ] Sitemap.xml inclui todas as páginas
- [ ] Robots.txt permite indexação
- [ ] Meta tags (title, description) em todas as páginas
- [ ] Alt text em todas as imagens
- [ ] Lighthouse > 90 em todas as páginas
- [ ] Testar em mobile
- [ ] Testar todos os links (internos e externos)

---

**Status:** 🟢 68% completo — Pronto para fase de conteúdo  
**Próximo marco:** Implementar 5 subpáginas do Ecossistema Web3 (Semana 1)
