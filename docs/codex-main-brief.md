Actúa como un senior frontend engineer, diseñador UI y especialista en landing pages de servicios locales.

Vamos a construir la página comercial de **FENRIR Soluciones Digitales**, una marca que ofrece creación de páginas web profesionales para negocios en Costa Rica.

## Objetivo principal
Crear una landing page moderna y confiable cuyo objetivo sea convertir visitantes en contactos por WhatsApp.

La página debe vender el resultado de negocio, no la tecnología. No mencionar que se usan herramientas de IA o Codex. La comunicación debe enfocarse en:
- Presencia digital profesional.
- Clientes que encuentran rápido servicios, horarios, ubicación y contacto.
- Botón directo a WhatsApp.
- Confianza para negocios locales.
- Sitios rápidos, modernos y adaptados a celular.

## Stack obligatorio
- Astro
- TypeScript
- Tailwind CSS
- Sitio 100% estático
- Sin backend
- Sin base de datos
- Sin login
- Preparado para desplegar en Cloudflare Pages y Netlify

## Identidad visual
Usar como referencia los assets en `/public/brand/`:
- `fenrir-logo-horizontal-clean.png` para header en fondo claro
- `fenrir-logo-horizontal-white-blue-clean.png` para header/footer en fondo oscuro
- `fenrir-logo-full-clean.png` para secciones grandes
- `fenrir-logo-full-white-blue-clean.png` para fondos navy
- `fenrir-isotipo-color-clean.png` para iconos
- `fenrir-isotipo-white-blue-clean.png` para fondos oscuros
- `fenrir-og-image-clean-1200x630.png` para Open Graph
- favicons `fenrir-favicon-clean-*`

Estética:
- Formal, profesional, moderna, limpia y tecnológica.
- Inspirada en el board de marca de FENRIR: layout amplio, fondos claros, bloques navy, azul intenso, tarjetas limpias, bordes suaves y elementos geométricos discretos.
- No usar estética gamer, de fantasía, agresiva o de lobo. Aunque el nombre sea Fenrir, la marca debe sentirse corporativa y aceptable para cualquier negocio local.

Paleta:
- Navy oscuro: `#0B1020`
- Navy secundario: `#1E293B`
- Azul principal: `#2563EB`
- Verde WhatsApp/acento funcional: `#10B981`
- Fondo claro: `#F8FAFC`
- Fondo alterno: `#F2F4F7`
- Texto principal: `#0B1020`
- Texto secundario: `#334155`

Tipografía:
- Usar Poppins para títulos/marca si se puede cargar con Google Fonts.
- Usar `font-display: swap`.
- Fallback: Inter, system-ui, sans-serif.

## Contenido y estructura de la landing
Crear una sola página `/` con estas secciones:

### 1. Header
- Logo FENRIR.
- Navegación: Inicio, Servicios, Ejemplos, Precios, Proceso, Preguntas.
- Botón destacado: WhatsApp.
- Header responsive con menú móvil simple.

### 2. Hero
Título sugerido:
“Páginas web profesionales para negocios en Costa Rica”

Subtítulo sugerido:
“Creamos sitios modernos, rápidos y enfocados en que sus clientes encuentren su información y le escriban directo por WhatsApp.”

CTAs:
- Principal: “Solicitar demo” con enlace a WhatsApp.
- Secundario: “Ver ejemplos”.

Debe incluir una composición visual tipo mockup/card, no una imagen pesada: puede ser una tarjeta simulando una web con métricas/beneficios.

### 3. Beneficios rápidos
Cuatro tarjetas:
- Diseño moderno adaptado a celulares.
- WhatsApp directo para recibir consultas.
- Ubicación y mapas para que lo encuentren.
- Rápido, seguro y optimizado.

### 4. Problema
Explicar que muchos negocios dependen solo de redes sociales o WhatsApp y sus clientes no encuentran fácilmente servicios, ubicación, horarios, fotos o formas de contacto.

### 5. Solución
Explicar que una página web clara ordena esa información, mejora la percepción profesional y facilita que los clientes escriban o llamen.

### 6. Qué incluye
Lista visual:
- Diseño responsive.
- Botón WhatsApp.
- Google Maps.
- Servicios y precios desde.
- Galería de fotos.
- Horarios.
- SEO básico.
- Dominio y publicación.
- Revisión técnica antes de entregar.

### 7. Ejemplos / demos
Crear tres cards de demos ficticias:
- Soda / restaurante.
- Barbería / salón.
- Servicio técnico / profesional.

Cada card debe tener nombre ficticio, breve descripción, beneficios y botón “Ver demo”.
Crear rutas placeholder para:
- `/demos/soda/`
- `/demos/barberia/`
- `/demos/servicio-tecnico/`

Cada demo puede ser una página simple pero realista, reutilizando componentes.

### 8. Paquetes
Mostrar precios “desde”:
- Página básica — desde ₡120,000.
- Sitio profesional — desde ₡250,000.
- Mantenimiento mensual — desde ₡25,000/mes.

Aclarar que el precio final depende del contenido, cantidad de secciones y funcionalidades.
Incluir CTA a WhatsApp en cada paquete.

### 9. Proceso
Cinco pasos:
1. Revisamos su negocio.
2. Definimos qué página necesita.
3. Creamos una primera versión.
4. Ajustamos detalles.
5. Publicamos la página.

### 10. FAQ
Incluir preguntas:
- ¿Necesito tener logo?
- ¿Necesito comprar dominio?
- ¿Cuánto tarda una página?
- ¿Puedo pedir cambios?
- ¿La página aparece en Google?
- ¿Puedo pagar por partes?
- ¿Qué pasa si no tengo fotos?
- ¿Quién mantiene la página?

### 11. CTA final
Texto:
“¿Quiere ver cómo podría verse la página de su negocio?”
Botón:
“Escribirme por WhatsApp”

### 12. Footer
- Logo.
- Fenrir Soluciones Digitales.
- Costa Rica.
- Links internos.
- Email placeholder.
- WhatsApp placeholder.

## Requisitos técnicos
- Componentes reutilizables.
- Archivo de configuración central para marca, WhatsApp, email, precios y enlaces.
- SEO completo: title, meta description, Open Graph, Twitter card.
- JSON-LD para servicio profesional/local.
- Favicons usando assets de `/public/brand/`.
- Imágenes optimizadas o assets livianos.
- Sin librerías innecesarias.
- Buen HTML semántico.
- Accesibilidad: contraste, focus states, aria-labels donde aplique.
- Lighthouse objetivo: 90+ en performance, accessibility, best practices y SEO.
- README con instalación, desarrollo y despliegue.

## Datos configurables
Crear un archivo tipo `src/config/site.ts` con:
- brandName: “FENRIR”
- descriptor: “Soluciones Digitales”
- whatsappNumber: “506XXXXXXXX”
- whatsappMessage: “Hola, quiero información sobre una página web para mi negocio.”
- email: “hola@fenrir.cr” o placeholder editable
- location: “Costa Rica”
- prices desde

## Importante
Antes de terminar, ejecuta build/lint si está configurado. Corrige errores. Deja el proyecto listo para subir a GitHub y desplegar en Cloudflare Pages.
