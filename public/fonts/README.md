# Fontes Soehne

O layout usa a família **Soehne** do MIT Media Lab.

## Arquivos necessários:

Coloque os seguintes arquivos `.woff2` nesta pasta:

```
public/fonts/
  ├── soehne-leicht.woff2        (weight: 100)
  ├── soehne-buch.woff2          (weight: 400) 
  ├── soehne-kraftig.woff2       (weight: 700)
  └── soehne-schmal-kraftig.woff2 (condensed weight: 100)
```

## Onde obter:

1. **Opção A — Comprar licença:** [Klim Type Foundry](https://klim.co.nz/retail-fonts/soehne/)
2. **Opção B — Self-host alternativa:** Usar Inter, Public Sans ou system fonts até obter licença
3. **Opção C — Extrair do MIT (apenas para estudo):**
   - Abra https://www.media.mit.edu/ no Chrome
   - DevTools → Network → Filter: `woff2`
   - Recarregue a página
   - Baixe os arquivos `.woff2`
   - **Atenção:** isso é apenas para fins de estudo/desenvolvimento. Para produção, compre a licença.

## Fallback atual:

Se os arquivos não estiverem presentes, o site usa:
1. `soehne fallback` (Arial com métricas ajustadas)
2. System fonts (-apple-system, BlinkMacSystemFont, etc)

O layout permanece funcional e visualmente consistente sem as fontes originais.

## Alternativas gratuitas similares:

Se não puder licenciar Soehne, estas fontes têm estética similar:

- **Inter** — https://rsms.me/inter/ (gratuita, open-source)
- **Public Sans** — https://public-sans.digital.gov/ (gratuita, US Gov)
- **IBM Plex Sans** — https://github.com/IBM/plex (gratuita, open-source)

Para usar uma alternativa, substitua `soehne` por `'Inter'` (ou outra) no `font-family` do `body` em `MITLayout.astro`.
