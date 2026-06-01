export const siteConfig = {
  brandName: "FENRIR",
  descriptor: "Soluciones Digitales",
  fullName: "FENRIR Soluciones Digitales",
  tagline: "Paginas web profesionales que impulsan negocios.",
  siteUrl: "https://fenrir.cr",
  whatsappNumber: "50662932234",
  whatsappMessage:
    "Hola, quiero información sobre una página web para mi negocio.",
  whatsappMessages: {
    header:
      "Hola, quiero información sobre una página web para mi negocio.",
    hero:
      "Hola, quiero información sobre una página web para mi negocio.",
    demo:
      "Hola, vi una demo y quiero una recomendación para la página web de mi negocio.",
    recommendation:
      "Hola, quiero una recomendación para la página web de mi negocio.",
    final:
      "Hola, quiero información sobre una página web para mi negocio.",
    footer:
      "Hola, quiero información sobre una página web para mi negocio.",
  },
  email: "hola@fenrir.cr",
  location: "Costa Rica",
  navItems: [
    { label: "Inicio", href: "/#inicio" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Ejemplos", href: "/#ejemplos" },
    { label: "Propuesta", href: "/#precios" },
    { label: "Proceso", href: "/#proceso" },
    { label: "Preguntas", href: "/#preguntas" },
  ],
  assets: {
    headerLogo: "/brand/fenrir-logo-horizontal-clean.png",
    footerLogo: "/brand/fenrir-logo-horizontal-white-blue-clean.png",
    fullLogo: "/brand/fenrir-logo-full-clean.png",
    fullLogoDark: "/brand/fenrir-logo-full-white-blue-clean.png",
    isotipo: "/brand/fenrir-isotipo-color-clean.png",
    isotipoDark: "/brand/fenrir-isotipo-white-blue-clean.png",
    ogImage: "/brand/fenrir-og-image-clean-1200x630.png",
  },
};

export const getWhatsappUrl = (message = siteConfig.whatsappMessage) => {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
};
