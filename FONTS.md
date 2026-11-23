# Configuração de Fontes

O site está configurado para usar **Soehne** (a fonte do MIT Media Lab), mas funciona perfeitamente com alternativas gratuitas.

## Opção 1: Usar Inter (recomendado para início)

Inter é gratuita, open-source e visualmente muito próxima da Soehne.

### Passo 1: Baixar Inter

```bash
# Via npm
npm install @fontsource/inter

# Ou baixar manualmente de:
# https://github.com/rsms/inter/releases
```

### Passo 2: Atualizar MITLayout.astro

Se instalou via npm, adicione no topo do arquivo:

```astro
---
import '@fontsource/inter/100.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

// resto do código...
---
```

Ou, se baixou manualmente, coloque os arquivos `.woff2` em `public/fonts/` e adicione:

```css
@font-face {
  font-family: 'Inter';
  src: url(/fonts/Inter-Regular.woff2) format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url(/fonts/Inter-Bold.woff2) format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

Depois altere o `body`:

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

## Opção 2: Usar Soehne (licença paga)

### Passo 1: Comprar licença

Visite [Klim Type Foundry](https://klim.co.nz/retail-fonts/soehne/) e adquira a licença web.

### Passo 2: Adicionar arquivos

Coloque os arquivos `.woff2` em `public/fonts/`:

```
public/fonts/
  ├── soehne-leicht.woff2
  ├── soehne-buch.woff2
  ├── soehne-kraftig.woff2
  └── soehne-schmal-kraftig.woff2
```

As `@font-face` já estão configuradas em `MITLayout.astro` — o site carregará automaticamente.

## Opção 3: Usar System Fonts (zero download)

Para máxima performance, use apenas as fontes do sistema:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
```

Remove todas as `@font-face` do `MITLayout.astro`.

## Comparação

| Fonte | Licença | Qualidade | Performance |
|---|---|---|---|
| **Soehne** | Paga (~$500+) | ⭐⭐⭐⭐⭐ Idêntica ao MIT | ~40kb WOFF2 |
| **Inter** | Gratuita (OFL) | ⭐⭐⭐⭐ Muito próxima | ~30kb WOFF2 |
| **System fonts** | Gratuita | ⭐⭐⭐ Boa | 0kb (nativo) |

## Status atual

✅ Font-faces configuradas para Soehne  
✅ Fallback otimizado (Arial com size-adjust)  
⚠️ Arquivos `.woff2` não incluídos (adicione manualmente)

**Recomendação:** Comece com **Inter** via `@fontsource/inter` para desenvolvimento, depois migre para Soehne se quiser a aparência exata do MIT.
