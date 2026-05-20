/**
 * ============================================================
 *  PORTFOLIO DATA — "base de datos" editable
 * ============================================================
 *
 *  Este archivo sirve para editar:
 *  - Agregar / quitar productos
 *  - Cambiar textos por idioma (español e inglés)
 *  - Actualizar métricas, skills, experiencia
 *  - Personalizar color theme
 *
 *  NO necesitas tocar index.html ni styles.css
 * ============================================================
 */

// ─── CONFIGURACIÓN GLOBAL ────────────────────────────────────
window.PORTFOLIO_CONFIG = {
  name: "Constanza Eltit Cruz",
  title: {
    es: "Chief Product Officer · Fintech & Medios de Pago",
    en: "Chief Product Officer · Fintech & Payments"
  },
  location: {
    es: "Santiago, Chile",
    en: "Santiago, Chile"
  },
  email: "constanza.eltit@email.com · constanza@xinncap.com",
  linkedin: "https://linkedin.com/in/constanza-eltit/",
  github: "https://github.com/conaeltit",
  defaultLang: "es",    // "es" o "en"
  defaultTheme: "light" // "light" o "dark"
};

// ─── TRADUCCIONES DE LA UI ────────────────────────────────────
window.TRANSLATIONS = {
  es: {
    nav_about:      "Sobre mí",
    nav_products:   "Productos",
    nav_skills:     "Skills",
    nav_experience: "Experiencia",
    nav_contact:    "Contacto",
    hero_badge:     "Disponible para nuevas oportunidades",
    hero_cta:       "Ver mi trabajo",
    hero_cta2:      "Contactar",
    metrics_title:  "Resultados en producción",
    products_title: "Productos que construí",
    products_sub:   "Construidos desde cero como Head of Products en un PSP con más de 5.000 clientes en Chile.",
    skills_title:   "Stack de producto",
    exp_title:      "Experiencia",
    contact_title:  "Hablemos",
    contact_sub:    "Abierto a roles de CPO, Head of Product o Product Director en fintech, pagos o industrias adyacentes.",
    contact_cta:    "Escribir por LinkedIn",
    contact_email:  "Enviar email",
    footer_copy:    "constanza.eltit@gmail.com",
    tag_online:     "Online",
    tag_presencial: "Presencial",
    tag_sva:        "SVA",
    tag_infra:      "Infra",
    metric_conv:    "Conversión Web Checkout",
    metric_sub:     "Conversión suscripciones",
    metric_products: "Productos desarrollados",
    metric_settle:  "Annual Product Revenue",
    read_more:      "Ver detalle →",
    theme_dark:     "Modo oscuro",
    theme_light:    "Modo claro",
  },
  en: {
    nav_about:      "About",
    nav_products:   "Products",
    nav_skills:     "Skills",
    nav_experience: "Experience",
    nav_contact:    "Contact",
    hero_badge:     "Open to new opportunities",
    hero_cta:       "See my work",
    hero_cta2:      "Get in touch",
    metrics_title:  "Live production results",
    products_title: "Products I built",
    products_sub:   "Built from scratch as Head of Products at a PSP with 5,000+ clients across Chile.",
    skills_title:   "Product stack",
    exp_title:      "Experience",
    contact_title:  "Let's talk",
    contact_sub:    "Open to CPO, Head of Product or Product Director roles in fintech, payments or adjacent industries.",
    contact_cta:    "Message on LinkedIn",
    contact_email:  "Send email",
    footer_copy:    "constanza.eltit@gmail.com",
    tag_online:     "Online",
    tag_presencial: "In-person",
    tag_sva:        "Value-added",
    tag_infra:      "Infra",
    metric_conv:    "Web Checkout conversion",
    metric_sub:     "Subscription conversion",
    metric_products: "Developed products",
    metric_settle:  "Annual Product Revenue",
    read_more:      "See details →",
    theme_dark:     "Dark mode",
    theme_light:    "Light mode",
  }
};

// ─── MÉTRICAS HERO ────────────────────────────────────────────
window.METRICS = [
  { value: "95%",  key: "metric_conv",    icon: "trending_up" },
  { value: "97%",  key: "metric_sub",     icon: "autorenew" },
  { value: "+10",  key: "metric_products", icon: "store" },
  { value: "+$1MM USD",  key: "metric_settle",  icon: "payments" }
];

// ─── PRODUCTOS ────────────────────────────────────────────────
//
//  Cada nuevo producto debe contener:
//  Campos:
//    id         → identificador único (slug)
//    tag        → "online" | "presencial" | "sva" | "infra"
//    icon       → nombre de Google Material Icon (https://fonts.google.com/icons)
//    name       → { es, en }
//    tagline    → { es, en } — una línea
//    description→ { es, en } — 2-3 líneas
//    metrics    → array de { label: {es,en}, value } — máximo 3
//    highlights → array de strings { es, en } — 3-4 bullets clave
//
window.PRODUCTS = [
  {
    id: "web-checkout",
    tag: "online",
    icon: "shopping_cart",
    name: { es: "Web Checkout", en: "Web Checkout" },
    tagline: {
      es: "Checkout online de alta conversión con todos los medios de pago",
      en: "High-conversion online checkout with all payment methods"
    },
    description: {
      es: "Creé el checkout principal de la PSP. Integra tarjetas, transferencias bancarias, PIX, y billeteras digitales en un solo flujo optimizado y seguro con token de red + 3DS.",
      en: "I created the PSP's main checkout. Integrates cards, Webpay, bank transfers, PIX, and digital wallets, in a single and secure optimized flow with network tokens + 3DS."
    },
    metrics: [
      { label: { es: "Conversión", en: "Conversion" }, value: "95%" },
      { label: { es: "Medios de pago", en: "Payment methods" }, value: "9+" },
      { label: { es: "Autenticación", en: "Authentication" }, value: "3DS 2.x" }
    ],
    highlights: {
      es: ["Token de red Visa Cybersource para mayor conversión", "Frictionless 3DS cuando el riesgo lo permite", "Teclado adaptativo en mobile por tipo de campo", "Manejo de error inline sin destruir el formulario", "Conexión con SII"],
      en: ["Visa Cybersource network tokens for higher conversion", "Frictionless 3DS when risk allows", "Adaptive mobile keyboard per field type", "Inline error handling without resetting the form", "SII compliant"]
    }
  },
  {
    id: "quick-checkout",
    tag: "online",
    icon: "bolt",
    name: { es: "Checkout Sin Fricción", en: "Quick Checkout" },
    tagline: {
      es: "Un checkout directamente en tu página web, sin redireccionamientos y sin auticaciones extra. Tus clientes pueden pagar sin fricción con tarjeta tokenizada",
      en: "A checkout embedded directly that bypasses multi-step cart pages, allowing customers to complete a card purchase instantly with network tokenization"
    },
    description: {
      es: "Producto de pago en un clic para comercios con base de clientes recurrentes. Permite cobrar con la tarjeta tokenizada del cliente sin requerir que vuelva a ingresarla.",
      en: "One-click payment product for merchants with recurring customer bases. Charges the tokenized card without requiring the user to re-enter card details."
    },
    metrics: [
      { label: { es: "Pasos hasta pagar", en: "Steps to pay" }, value: "1" },
      { label: { es: "Fricción", en: "Friction" }, value: "Mínima" },
      { label: { es: "Tipo", en: "Type" }, value: "Hosted" }
    ],
    highlights: {
      es: ["Tokenización de red para máxima seguridad", "Con smart-routing", "Sin PCI scope adicional para el comercio", "Experiencia one-tap en mobile", "Compatible con suscripciones y cobros bajo demanda"],
      en: ["Network tokenization for maximum security", "With smart-routing", "No additional PCI scope for the merchant", "One-tap experience on mobile", "Compatible with subscriptions and on-demand charges"]
    }
  },
  {
    id: "suscripciones",
    tag: "online",
    icon: "autorenew",
    name: { es: "Suscripciones y pagos recurrentes", en: "Subscriptions & recurring payments" },
    tagline: {
      es: "97% de conversión en pagos automáticos con PAT",
      en: "97% conversion on automatic payments with PAT"
    },
    description: {
      es: "Sistema completo de pagos recurrentes online y presenciales. Incluye arquitectura de estados, dunning logic de recuperación y PAT (direct debit automático chileno). Casos de uso: aseguradoras, educación, clubes sociales.",
      en: "Complete online and in-person recurring payment system. Includes state architecture, dunning recovery logic and PAT (Chilean direct debit). Use cases: insurers, education, social clubs."
    },
    metrics: [
      { label: { es: "Conversión 1er cobro", en: "First charge conversion" }, value: "97%" },
      { label: { es: "Recuperación dunning", en: "Dunning recovery" }, value: "+20%" },
      { label: { es: "Churn involuntario", en: "Involuntary churn" }, value: "<3%" }
    ],
    highlights: {
      es: ["PAT (débito automático) nativo en Chile", "Dunning logic de 21 días con reintentos inteligentes", "Arquitectura de 7 estados de suscripción", "Comunicaciones automáticas por estado de cobro"],
      en: ["Native PAT (automatic debit) in Chile", "21-day dunning logic with smart retries", "7-state subscription architecture", "Automated communications by billing state"]
    }
  },
  {
    id: "portal-pagos",
    tag: "online",
    icon: "web",
    name: { es: "Portal de Pagos", en: "Payment Portal" },
    tagline: {
      es: "Portal web white-label de cobro integrado a ERP, facturadores y base de deudas",
      en: "White-label payment portal integrated with ERP, billing systems and debt databases"
    },
    description: {
      es: "Producto B2B que permite a empresas con grandes carteras de deuda (aseguradoras, educación, cobranza) ofrecer un portal de pago branded con conciliación automática contra su sistema de gestión.",
      en: "B2B product enabling companies with large debt portfolios (insurers, education, collections) to offer a branded payment portal with automatic reconciliation against their management system."
    },
    metrics: [
      { label: { es: "Integración", en: "Integration" }, value: "API + webhook" },
      { label: { es: "Conciliación", en: "Reconciliation" }, value: "Automática" },
      { label: { es: "Branding", en: "Branding" }, value: "White-label" }
    ],
    highlights: {
      es: ["Integración vía API REST con cualquier ERP o facturador", "White-label: dominio y colores del cliente", "Conciliación automática vía webhooks", "Soporte para deuda variable (cuotas, mora)"],
      en: ["REST API integration with any ERP or billing system", "White-label: client's domain and colors", "Automatic reconciliation via webhooks", "Support for variable debt (installments, arrears)"]
    }
  },
  {
    id: "link-pago",
    tag: "online",
    icon: "link",
    name: { es: "Link de Pago", en: "Payment Link" },
    tagline: {
      es: "Cobra con un link único. Sin tienda ni integración técnica.",
      en: "Collect payments with a unique link. No store or integration required."
    },
    description: {
      es: "Solución de cobro sin fricción técnica para comercios que no tienen tienda online ni equipo de desarrollo. El comercio genera un link en segundos y lo comparte por WhatsApp, email o redes sociales.",
      en: "No-code payment solution for merchants without an online store or development team. Merchants generate a link in seconds and share it via WhatsApp, email or social media."
    },
    metrics: [
      { label: { es: "Setup técnico", en: "Technical setup" }, value: "0" },
      { label: { es: "Canales", en: "Channels" }, value: "WhatsApp / Email" },
      { label: { es: "Medios de pago", en: "Payment methods" }, value: "Todos" }
    ],
    highlights: {
      es: ["Sin integración técnica ni tienda online", "Link personalizable con monto y descripción", "Notificaciones de pago en tiempo real", "Panel de gestión de links activos"],
      en: ["No technical integration or online store needed", "Customizable link with amount and description", "Real-time payment notifications", "Dashboard for managing active links"]
    }
  },
  {
    id: "smartpos",
    tag: "presencial",
    icon: "mobile_friendly",
    name: { es: "SmartPOS N86 Pro", en: "SmartPOS N86 Pro" },
    tagline: {
      es: "Terminal inteligente para cobros presenciales con abono D+1",
      en: "Smart terminal for in-person payments with D+1 settlement"
    },
    description: {
      es: "Terminal POS Android con impresora integrada, conexión al SII para boletas electrónicas y abono D+1 directo a la cuenta del comercio. El único SmartPOS en Chile que une pagos únicos, pagos recurrentes oo suscripciones y pagos con PIX. Diseñé la experiencia del operador y el flujo de onboarding del dispositivo, además de liderar el desarrollo de los productos.",
      en: "Android POS terminal with integrated printer, SII connection for electronic receipts and D+1 settlement directly to the merchant's account. The only SmartPOS in Chile that integrates one-time payments, recurring paymemnts and PIX payments. Designed the operator experience and device onboarding flow, besides leading the product development."
    },
    metrics: [
      { label: { es: "Abono", en: "Settlement" }, value: "D+1" },
      { label: { es: "Boleta electrónica", en: "E-receipt" }, value: "SII" },
      { label: { es: "Conectividad", en: "Connectivity" }, value: "4G + WiFi" }
    ],
    highlights: {
      es: ["Abono D+1 directo a cuenta del comercio", "Integración SII: voucher válido como boleta electrónica", "Android OS: apps adicionales instalables", "Onboarding remoto sin visita técnica"],
      en: ["D+1 settlement directly to merchant account", "SII integration: voucher valid as electronic receipt", "Android OS: additional apps installable", "Remote onboarding without technical visit"]
    }
  },
  {
    id: "pix",
    tag: "presencial",
    icon: "qr_code_scanner",
    name: { es: "PIX", en: "PIX" },
    tagline: {
      es: "Recibe pagos de turistas brasileños con QR",
      en: "Accept payments from Brazilian tourists via QR"
    },
    description: {
      es: "Integración de PIX (sistema de pagos instantáneos del Banco Central de Brasil) para comercios chilenos en zonas turísticas. El comprador paga desde su app bancaria brasileña escaneando un QR.",
      en: "PIX integration (Brazil's instant payment system from Banco Central do Brasil) for Chilean merchants in tourist areas. Buyers pay from their Brazilian banking app by scanning a QR code."
    },
    metrics: [
      { label: { es: "Liquidación", en: "Settlement" }, value: "Instantánea" },
      { label: { es: "Fricción comprador", en: "Buyer friction" }, value: "0" },
      { label: { es: "Mercado", en: "Market" }, value: "Turismo BR" }
    ],
    highlights: {
      es: ["QR dinámico por transacción", "Liquidación instantánea en BRL convertido a CLP", "Sin cuenta brasileña para el comercio", "Integrado al mismo dashboard de VirtualPOS"],
      en: ["Dynamic QR per transaction", "Instant settlement in BRL converted to CLP", "No Brazilian account needed for merchant", "Integrated into the same PSP dashboard"]
    }
  },
  {
    id: "reportes",
    tag: "sva",
    icon: "monitoring",
    name: { es: "Reportes y Analítica", en: "Reports & Analytics" },
    tagline: {
      es: "Reportes de conversión, riesgo y comportamiento a la medida con IA y otras herramientas",
      en: "Custom conversion, risk and behavior analytics with AI and other tools"
    },
    description: {
      es: "Módulo de analítica para que los comercios entiendan su comportamiento de pagos: tasa de conversión por medio de pago, análisis de rechazos, comportamiento de suscriptores y liquidaciones históricas.",
      en: "Analytics module for merchants to understand their payment behavior: conversion rate by payment method, rejection analysis, subscriber behavior and historical settlements."
    },
    metrics: [
      { label: { es: "Actualización", en: "Data refresh" }, value: "Tiempo real" },
      { label: { es: "Exportación", en: "Export" }, value: "CSV / API" },
      { label: { es: "Retención data", en: "Data retention" }, value: "24 meses" }
    ],
    highlights: {
      es: ["Conversión por medio de pago y segmento", "Análisis de rechazos por código de error", "Comportamiento de suscriptores y churn", "Liquidaciones históricas con conciliación"],
      en: ["Conversion by payment method and segment", "Rejection analysis by error code", "Subscriber behavior and churn analysis", "Historical settlements with reconciliation"]
    }
  }
  // ──────────────────────────────────────────────────────────────
  // AGREGAR NUEVO PRODUCTO: copia el bloque de arriba y edita los campos
  // { id, tag, icon, name:{es,en}, tagline:{es,en}, description:{es,en},
  //   metrics:[{label:{es,en}, value}], highlights:{es:[],en:[]} }
  // ──────────────────────────────────────────────────────────────
];

// ─── SKILLS ───────────────────────────────────────────────────
window.SKILLS = [
  {
    category: { es: "Discovery & Diseño", en: "Discovery & Design" },
    items: ["Figma", "Maze", "Hotjar", "UserTesting", "Jobs-to-be-done", "Story mapping"]
  },
  {
    category: { es: "Delivery & Ejecución", en: "Delivery & Execution" },
    items: ["Linear", "Jira", "Notion", "Confluence", "Shape Up", "Scrum", "OKRs"]
  },
  {
    category: { es: "Dominio técnico", en: "Technical domain" },
    items: ["APIs REST", "OpenAPI / Swagger", "Webhooks", "3DS 2.x", "Tokenización de red", "PCI-DSS", "PAT / Débito automático"]
  },
  {
    category: { es: "Analítica", en: "Analytics" },
    items: ["Mixpanel", "Google Analytics", "Metabase", "SQL (básico)", "Funnels de conversión"]
  }
];

// ─── EXPERIENCIA ──────────────────────────────────────────────
window.EXPERIENCE = [
  {
    role:    { es: "Chief Product Officer / Product Manager", en: "Chief Product Officer / Product Manager" },
    company: { es: "PSP — Pasarela de pagos (Chile)", en: "PSP — Payment Gateway (Chile)" },
    period:  { es: "2023 — 2025", en: "2023 — 2025" },
    bullets: {
      es: [
        "Construí desde cero el stack completo de 9 productos: Web Checkout, Quick Checkout, SmartPOS, Suscripciones, Portal de Pagos, Link de Pago, PIX, Cuotas sin interés y Reportes.",
        "Alcancé 95% de conversión en checkout y 97% en suscripciones en producción con +5.000 clientes.",
        "Lideré las integraciones con Klap, Banco Central de Brasil (PIX) y redes Visa/Mastercard.",
        "Diseñé la arquitectura de tokenización de red y el flujo completo de 3DS 2.x frictionless.",
        "Gestioné roadmap, discovery, specs técnicas, go-to-market y métricas de todos los productos."
      ],
      en: [
        "Built from scratch the full stack of 9 products: Web Checkout, Quick Checkout, SmartPOS, Subscriptions, Payment Portal, Payment Link, PIX, Installments and Analytics.",
        "Achieved 95% checkout conversion and 97% subscription conversion in production with 5,000+ clients.",
        "Led integrations with Klap, Brazil's Central Bank (PIX) and Visa/Mastercard networks.",
        "Designed the network tokenization architecture and complete frictionless 3DS 2.x flow.",
        "Managed roadmap, discovery, technical specs, go-to-market and metrics for all products."
      ]
    }
  }
  // Agrega más roles copiando el bloque anterior
];

// ─── TEMA DE COLOR ────────────────────────────────────────────
//  Edita estos valores para cambiar completamente el look del portfolio.
//  Solo necesitas cambiar los colores aquí — el resto se adapta.
window.THEME = {
  light: {
    "--bg":           "#E6E8F5",
    "--bg-card":      "#FFFFFF",
    "--bg-subtle":    "#FBF8FF",
    "--text":         "#1D2667",
    "--text-muted":   "#938F96",
    "--border":       "#958DA5",
    "--accent":       "#535A92",   // Color de acento principal
    "--accent-text":  "#FFFFFF",
    "--tag-online":   "#EAF3DE",   // Verde suave
    "--tag-online-t": "#3B6D11",
    "--tag-pres":     "#E6F1FB",   // Azul suave
    "--tag-pres-t":   "#185FA5",
    "--tag-sva":      "#FAEEDA",   // Ámbar suave
    "--tag-sva-t":    "#854F0B",
    "--tag-infra":    "#EEEDFE",   // Púrpura suave
    "--tag-infra-t":  "#534AB7",
  },
  dark: {
    "--bg":           "#0F0F0E",
    "--bg-card":      "#1A1A18",
    "--bg-subtle":    "#222220",
    "--text":         "#F0EFEB",
    "--text-muted":   "#9A9A93",
    "--border":       "#2E2E2B",
    "--accent":       "#F0EFEB",
    "--accent-text":  "#111110",
    "--tag-online":   "#173404",
    "--tag-online-t": "#C0DD97",
    "--tag-pres":     "#042C53",
    "--tag-pres-t":   "#B5D4F4",
    "--tag-sva":      "#412402",
    "--tag-sva-t":    "#FAC775",
    "--tag-infra":    "#26215C",
    "--tag-infra-t":  "#CECBF6",
  }
};
