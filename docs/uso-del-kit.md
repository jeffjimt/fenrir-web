# Cómo usar este kit con Codex

1. Crea un proyecto nuevo o pídele a Codex que lo cree con Astro + TypeScript + Tailwind.
2. Copia preferiblemente los PNG con sufijo `clean` de la carpeta `png/` dentro del proyecto en `public/brand/`. También puedes copiar el board como referencia.
3. Abre `prompts/codex-main-brief.md` y pégalo como primer prompt grande en Codex.
4. Cuando Codex termine, usa los prompts de `codex-followups.md` uno por uno.
5. Revisa tú mismo QA visual, responsive, WhatsApp, SEO y build antes de publicar.

Comando típico para Astro:

```bash
npm create astro@latest fenrir-web
cd fenrir-web
npm install
npm run dev
```

Para Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro
