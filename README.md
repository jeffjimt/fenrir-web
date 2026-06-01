# FENRIR Soluciones Digitales

Landing estática para FENRIR Soluciones Digitales, creada con Astro, TypeScript y Tailwind CSS.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Sitio 100% estático
- Sin backend, base de datos ni login

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La salida de producción se genera en `dist/`.

## Configuración editable

Los datos principales del sitio están en:

```text
src/config/site.ts
```

Ahí se pueden ajustar marca, correo, número de WhatsApp, mensaje inicial, precios, enlaces y rutas de assets.

## Despliegue

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro

Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
