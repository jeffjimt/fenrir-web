Estoy trabajando en el proyecto local:

F:\FenrirDS

La landing ya está creada. No quiero rehacerla ni cambiar secciones posteriores.
Quiero reemplazar el video HLS del hero por un background más suave, estable y profesional.

Motivo:
El video actual no se ve suficientemente smooth y empeora la percepción visual. Quiero mantener la estética dark/blue premium, pero con mejor rendimiento, menos distracción y más control visual.

Tarea:
Modificar únicamente:
1. Fondo del hero
2. Overlay del hero
3. Ajustes menores de contraste/legibilidad en el hero

No modificar:
- Secciones posteriores
- Copy comercial general
- Estructura de rutas
- Footer
- Paquetes
- Demos
- Preguntas frecuentes

Assets nuevos disponibles:
Copiaré estos archivos a:

public/brand/backgrounds/

Usar como primera opción:
/brand/backgrounds/fenrir-hero-blue-ribbons.png

Alternativas disponibles:
/brand/backgrounds/fenrir-hero-aurora-grid.png
/brand/backgrounds/fenrir-hero-neural-soft.png
/brand/backgrounds/fenrir-hero-blue-ribbons.svg
/brand/backgrounds/fenrir-hero-aurora-grid.svg
/brand/backgrounds/fenrir-hero-neural-soft.svg

Preferencia visual:
Usa `fenrir-hero-blue-ribbons.png` para el hero principal porque se parece más a la referencia azul con paneles verticales.

Implementación:
- El fondo debe ser una imagen absoluta detrás del contenido.
- Usar object-cover o background-size: cover.
- background-position: center.
- Debe ocupar todo el hero.
- Quitar el componente HLS/video si ya no se usa.
- Quitar imports de hls.js si quedan sin uso.
- No dejar dependencias o código muerto.

Overlay:
El video ya no existe, así que el overlay puede ser más sutil:
- bg-black/25 o bg-black/30
- gradiente inferior más oscuro para profundidad
- vignette lateral suave

El fondo debe verse claramente azul, no casi negro.
El texto debe seguir siendo totalmente legible.

Hero text:
Mantener:
Preheadline: Diseño web para negocios locales
Headline: Páginas que impulsan negocios
Subheadline: Creamos sitios web modernos, rápidos y optimizados para que sus clientes encuentren sus servicios, ubicación y le escriban directo por WhatsApp.

Headline desktop:
Debe quedar en máximo 2 líneas:
Páginas que
impulsan negocios

Ajustes deseados:
- Reducir oscuridad del fondo respecto al estado actual.
- Mejorar impacto visual del headline.
- Mantener estética premium y profesional.
- No hacerlo gamer.
- No hacerlo recargado.

Responsive:
Revisar 375px, 768px y 1440px.

Después:
1. Ejecuta npm run build.
2. Corrige errores.
3. Devuélveme archivos modificados.
4. Indica si eliminaste el video/HLS o solo lo dejaste sin usar.
