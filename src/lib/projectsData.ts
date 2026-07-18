export type ProjectCategory =
  | "todos"
  | "ecommerce"
  | "sistema"
  | "web"
  | "movil"
  | "portfolio"
  | "restaurante"
  | "escuela"
  | "turismo";

export type ProjectData = {
  slug:          string;
  titleEs:       string;
  titleEn:       string;
  descriptionEs: string;
  descriptionEn: string;
  longDescEs:    string;
  longDescEn:    string;
  tags:          string[];
  images:        string[];
  demoUrl:       string;
  codeUrl:       string;
  year:          string;   // display: "Junio 2026"
  yearSort:      number;   // sort key: YYYYMM — mayor = más reciente
  client:        string;
  category:      ProjectCategory;
};

export const CATEGORY_LABELS: Record<ProjectCategory, { es: string; en: string }> = {
  todos:       { es: "Todos",       en: "All"        },
  ecommerce:   { es: "E-commerce",  en: "E-commerce" },
  sistema:     { es: "Sistema",     en: "System"     },
  web:         { es: "Web",         en: "Web"        },
  movil:       { es: "Móvil",       en: "Mobile"     },
  portfolio:   { es: "Portafolio",  en: "Portfolio"  },
  restaurante: { es: "Restaurante", en: "Restaurant" },
  escuela:     { es: "Escuela",     en: "School"     },
  turismo:     { es: "Turismo",     en: "Tourism"    },
};

export const projectsData: ProjectData[] = [
  // ── SYSRRHH — Agosto 2026 ─────────────────────────────────────────────────
  {
    slug: "sysrrhh-mideplan",
    titleEs: "SYSRRHH — Institución Gubernamental",
    titleEn: "SYSRRHH — Government Institution",
    descriptionEs:
      "Sistema institucional de Gestión de Recursos Humanos para una institución gubernamental de Costa Rica, desarrollado con Laravel 12, PHP 8.5 y MySQL.",
    descriptionEn:
      "Institutional Human Resources Management System for a Costa Rican government institution, built with Laravel 12, PHP 8.5 and MySQL.",
    longDescEs:
      "Desarrollo del Sistema de Gestión de Recursos Humanos (SYSRRHH) para una institución gubernamental de Costa Rica, en el marco de la Práctica Universitaria Supervisada de la Universidad Fidelitas. El sistema fue construido con Laravel 12, PHP 8.5, MySQL y Bootstrap AdminLTE, siguiendo una arquitectura estricta de procedimientos almacenados sin Eloquent, control de versiones con SVN y autenticación mediante Active Directory LDAP institucional. Comprende módulos de Marcas y Asistencia con justificaciones individuales y masivas, Gestión de Períodos y Saldos de Vacaciones con bitácora de ajustes y anexos, Vacaciones Colectivas con descuento masivo mediante cursor SQL, Reportes institucionales incluyendo un reporte PIVOT dinámico de Art. 51 con detección de columnas en runtime, panel de Estadísticas, Bitácora de Ingresos al Sistema y dashboards diferenciados por rol.",
    longDescEn:
      "Development of the Human Resources Management System (SYSRRHH) for a Costa Rican government institution, as part of the Universidad Fidelitas Supervised University Internship. Built with Laravel 12, PHP 8.5, MySQL and Bootstrap AdminLTE, following a strict stored procedure architecture without Eloquent, SVN version control and institutional LDAP Active Directory authentication.",
    tags: [
      "Laravel 12", "PHP 8.5", "MySQL", "Bootstrap", "AdminLTE", "jQuery",
      "DataTables", "Select2", "Blade", "SVN", "LDAP", "Active Directory",
      "Stored Procedures", "SweetAlert2", "Bootstrap Icons",
    ],
    images: [
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-1.png",
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-2.png",
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-3.png",
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-4.png",
    ],
    demoUrl:  "#",
    codeUrl:  "#",
    year:     "Agosto 2026",
    yearSort: 202608,
    client:   "Government Institution — Costa Rica",
    category: "sistema",
  },

  // ── ConstruxionArq Next.js — Julio 2026 ───────────────────────────────────
  {
    slug: "construxion-arq-nextjs",
    titleEs: "ConstruxionArq – Next.js",
    titleEn: "ConstruxionArq – Next.js",
    descriptionEs:
      "Migración completa de WordPress a Next.js 14 con deploy automático vía GitHub Actions y soporte bilingüe ES/EN.",
    descriptionEn:
      "Full migration from WordPress to Next.js 14 with automated CI/CD via GitHub Actions and bilingual ES/EN support.",
    longDescEs:
      "Migración completa del sitio corporativo de una firma de arquitectura costarricense desde WordPress/Elementor hacia un stack moderno en Next.js 14 con TypeScript y Tailwind CSS. El sitio se exporta como HTML estático y se despliega automáticamente en SiteGround mediante GitHub Actions + FTP Deploy cada vez que se hace un push a main. Se implementó un sistema de internacionalización propio (sin librerías externas) con React Context que permite cambiar entre español e inglés en tiempo real y persiste la preferencia en localStorage. La galería de proyectos incluye 19 proyectos con imágenes reales rescatadas del WordPress original, lightbox, búsqueda con filtros y paginación.",
    longDescEn:
      "Full migration of a Costa Rican architecture firm's corporate website from WordPress/Elementor to a modern stack using Next.js 14, TypeScript and Tailwind CSS. The site exports as static HTML and deploys automatically to SiteGround via GitHub Actions + FTP Deploy on every push to main. A custom internationalization system was built using React Context (no external libraries) allowing real-time switching between Spanish and English with localStorage persistence.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "GitHub Actions", "SiteGround", "i18n", "CI/CD"],
    images: [
      "/Images/Projects/ConstruxionARQ-New/image-1.png",
      "/Images/Projects/ConstruxionARQ-New/image-2.png",
      "/Images/Projects/ConstruxionARQ-New/image-3.png",
      "/Images/Projects/ConstruxionARQ-New/image-4.png",
    ],
    demoUrl:  "https://construxionarq.com",
    codeUrl:  "#",
    year:     "Julio 2026",
    yearSort: 202607,
    client:   "ConstruxionArq",
    category: "web",
  },

  // ── MedalloTour — Julio 2026 ──────────────────────────────────────────────
  {
    slug: "medallotour",
    titleEs: "Medallo Tour – Agencia de Tours",
    titleEn: "Medallo Tour – Tour Agency",
    descriptionEs:
      "Sitio web bilingüe ES/EN para agencia de tours en Medellín, Colombia. +3 años, +5.000 tours vendidos, +30k seguidores en TikTok. Reservas por WhatsApp.",
    descriptionEn:
      "Bilingual ES/EN website for a tour agency in Medellín, Colombia. +3 years, +5,000 tours sold, +30k TikTok followers. WhatsApp booking system.",
    longDescEs:
      "Diseño y desarrollo del sitio web oficial de Medallo Tour, agencia de turismo en Medellín con más de 3 años de operación y 5.000 tours vendidos. El sitio presenta catálogo completo de tours (Comuna 13, Guatapé, parapente, Hacienda Nápoles, Chiva Rumbera y más) con precios por persona en COP, sistema de reserva directo por WhatsApp y sección de comunidad con +30k seguidores en TikTok. Implementa soporte bilingüe ES/EN, diseño oscuro premium con paleta dorada, animaciones de texto en movimiento tipo marquee con los destinos disponibles y tarjetas de tours con detalle expandible.",
    longDescEn:
      "Design and development of the official Medallo Tour website, a Medellín tourism agency with over 3 years of operation and 5,000 tours sold. The site features a full tour catalog (Comuna 13, Guatapé, paragliding, Hacienda Nápoles, Chiva Rumbera and more) with per-person prices in COP, a direct WhatsApp booking system and a community section highlighting +30k TikTok followers.",
    tags: ["HTML", "CSS", "JavaScript", "i18n", "WhatsApp API", "Responsive", "SEO"],
    images: [
      "https://medallotour.com/assets/img/guatape.jpg",
      "https://medallotour.com/assets/img/city-tour.jpg",
      "https://medallotour.com/assets/img/chiva-rumbera.jpg",
      "https://medallotour.com/assets/img/parapente.jpg",
    ],
    demoUrl:  "https://medallotour.com",
    codeUrl:  "#",
    year:     "Julio 2026",
    yearSort: 202607,
    client:   "Medallo Tour",
    category: "turismo",
  },

  // ── Repuestos JMD — Junio 2026 ────────────────────────────────────────────
  {
    slug: "repuestos-jmd",
    titleEs: "Repuestos JMD",
    titleEn: "JMD Spare Parts",
    descriptionEs:
      "E-commerce full-stack para repuestos de vehículos chinos en Costa Rica, con panel admin, catálogo dinámico y sistema de órdenes con emails automáticos.",
    descriptionEn:
      "Full-stack e-commerce for Chinese vehicle spare parts in Costa Rica, featuring an admin panel, dynamic catalog and order system with automated emails.",
    longDescEs:
      "Diseño y desarrollo completo de Repuestos JMD, una tienda en línea especializada en repuestos para vehículos de marcas chinas (BYD, Geely, Chery, Changan, GWM, Wuling, Jetour) en Costa Rica. Construida con Next.js 14 App Router, TypeScript y Tailwind CSS, con despliegue continuo en Vercel desde GitHub. El frontend presenta un diseño oscuro profesional con hero carousel animado, mega menú de navegación con categorías, carrusel infinito tipo cinta con CSS keyframes, cards con efecto glow reactivo al mouse y sistema de paginación con selector 10/25/50/100 por página. El catálogo cuenta con filtros independientes por marca, modelo, categoría y rango de precio. Las órdenes se guardan en Supabase y disparan emails automáticos tanto al cliente como al administrador mediante Resend.",
    longDescEn:
      "Full design and development of Repuestos JMD, an online store specialized in spare parts for Chinese brand vehicles in Costa Rica. Built with Next.js 14 App Router, TypeScript and Tailwind CSS. The catalog includes independent filters by brand, model, category and price range. Orders are saved to Supabase and trigger automatic emails via Resend.",
    tags: [
      "Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL",
      "Supabase Auth", "Supabase Storage", "Resend", "Vercel", "React Context",
      "E-commerce", "CRUD", "i18n", "App Router",
    ],
    images: [
      "/Images/Projects/Repuestos-JMD/image-1.png",
      "/Images/Projects/Repuestos-JMD/image-2.png",
      "/Images/Projects/Repuestos-JMD/image-3.png",
      "/Images/Projects/Repuestos-JMD/image-4.png",
    ],
    demoUrl:  "https://repuestos-jmd.vercel.app",
    codeUrl:  "#",
    year:     "Junio 2026",
    yearSort: 202606,
    client:   "JMD Repuestos",
    category: "ecommerce",
  },

  // ── Ruta218 — Junio 2026 ──────────────────────────────────────────────────
  {
    slug: "ruta218",
    titleEs: "Ruta 218 – Escuela de Manejo",
    titleEn: "Ruta 218 – Driving School",
    descriptionEs:
      "Landing page moderna para escuela de manejo en Costa Rica con +90k seguidores en redes. Diseño oscuro, secciones de paquetes, app móvil próximamente y reservas por WhatsApp.",
    descriptionEn:
      "Modern landing page for a driving school in Costa Rica with +90k social media followers. Dark design, service packages, upcoming mobile app and WhatsApp booking.",
    longDescEs:
      "Diseño y desarrollo de la landing page oficial de Ruta 218, escuela de manejo en Costa Rica con más de 90 mil seguidores en Facebook. El sitio fue construido con Next.js y desplegado en Vercel, con almacenamiento de assets en Vercel Blob. La página incluye secciones de hero con llamado a acción directo a WhatsApp, estadísticas de experiencia y licencias aprobadas, secciones de paquetes de manejo (B1, A2/A3, trámites), comunidad en redes sociales y una sección de próxima app móvil con gamificación para la prueba teórica.",
    longDescEn:
      "Design and development of the official landing page for Ruta 218, a Costa Rican driving school with over 90 thousand Facebook followers. The site was built with Next.js and deployed on Vercel, with assets stored in Vercel Blob. Includes WhatsApp booking, driving package sections and an upcoming mobile app section.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Vercel Blob", "WhatsApp API"],
    images: [
      "https://bhe6bpldrtwbtraw.public.blob.vercel-storage.com/assetshero-driving-class.jpg",
      "https://bhe6bpldrtwbtraw.public.blob.vercel-storage.com/assetsinstructor-driving.jpg",
      "https://bhe6bpldrtwbtraw.public.blob.vercel-storage.com/assetsstudent-driving.jpg",
      "https://bhe6bpldrtwbtraw.public.blob.vercel-storage.com/assetshero-driving-class.jpg",
    ],
    demoUrl:  "https://ruta218.com",
    codeUrl:  "#",
    year:     "Junio 2026",
    yearSort: 202606,
    client:   "Ruta 218",
    category: "escuela",
  },

  // ── PROWEB Beta — Enero 2026 ──────────────────────────────────────────────
  {
    slug: "proweb-solutions-next.js",
    titleEs: "PROWEB Solutions Beta",
    titleEn: "PROWEB Solutions Beta",
    descriptionEs:
      "Versión actual del portafolio, construida desde cero con Next.js, TypeScript, Tailwind CSS y Framer Motion.",
    descriptionEn:
      "Current portfolio version, built from scratch with Next.js, TypeScript, Tailwind CSS and Framer Motion.",
    longDescEs:
      "La versión Beta de PROWEB Solutions es la versión actual, construida completamente desde cero en Visual Studio Code. Implementa Next.js con App Router, TypeScript, Tailwind CSS y Framer Motion. Incluye animaciones avanzadas con partículas interactivas en canvas, efectos 3D en tarjetas al pasar el mouse, sistema de traducción ES/EN, typewriter animado en el hero, navbar responsiva con menú mobile y páginas de detalle por proyecto con carrusel de imágenes.",
    longDescEn:
      "The Beta version of PROWEB Solutions is built entirely from scratch using Next.js with App Router, TypeScript, Tailwind CSS and Framer Motion. It includes canvas particle animations, 3D card tilt effects, ES/EN translation, animated typewriter hero and per-project detail pages.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Vercel", "VS Code"],
    images: [
      "/Images/Projects/PROWEB-Solutions/image-1.png",
      "/Images/Projects/PROWEB-Solutions/image-2.png",
      "/Images/Projects/PROWEB-Solutions/image-3.png",
      "/Images/Projects/PROWEB-Solutions/image-4.png",
    ],
    demoUrl:  "https://prowebsolutionscr.netlify.app",
    codeUrl:  "#",
    year:     "Enero 2026",
    yearSort: 202601,
    client:   "PROWEB Solutions",
    category: "portfolio",
  },

  // ── GRAC App — Diciembre 2025 ─────────────────────────────────────────────
  {
    slug: "grac-app",
    titleEs: "GRAC App",
    titleEn: "GRAC App",
    descriptionEs:
      "Aplicación móvil APK desarrollada para una institución municipal, creada con FlutterFlow, Flutter y Firebase.",
    descriptionEn:
      "APK mobile application developed for a municipal institution, built with FlutterFlow, Flutter and Firebase.",
    longDescEs:
      "Desarrollo de la GRAC App (Gestión de Reportes y Actividades Comunitarias), una aplicación móvil en formato APK para una institución municipal, creada con FlutterFlow utilizando Flutter y Dart, e integrada con Firebase y Cloud Firestore de Google. La aplicación fue diseñada para centralizar información y mejorar la comunicación institucional, con una arquitectura orientada a escalabilidad y despliegue funcional en dispositivos Android.",
    longDescEn:
      "Development of the GRAC App (Community Reports and Activities Management), an APK mobile application for a municipal institution, built with FlutterFlow using Flutter and Dart, integrated with Google Firebase and Cloud Firestore.",
    tags: ["FlutterFlow", "Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth", "Android"],
    images: [
      "/Images/Projects/GRAC-App/image-1.png",
      "/Images/Projects/GRAC-App/image-2.png",
      "/Images/Projects/GRAC-App/image-3.png",
      "/Images/Projects/GRAC-App/image-4.png",
    ],
    demoUrl:  "https://app.flutterflow.io/share/app-movil-gestion-reportes-actividades-comunitarias-distrito-zapote-r5irg2",
    codeUrl:  "#",
    year:     "Diciembre 2025",
    yearSort: 202512,
    client:   "Municipal Institution",
    category: "movil",
  },

  // ── PROWEB Alpha — Octubre 2025 ───────────────────────────────────────────
  {
    slug: "proweb-solutions-squarespace",
    titleEs: "PROWEB Solutions Alpha",
    titleEn: "PROWEB Solutions Alpha",
    descriptionEs:
      "Primera versión del portafolio corporativo, desarrollada en Squarespace con dominio .com propio.",
    descriptionEn:
      "First version of the corporate portfolio, built on Squarespace with a custom .com domain.",
    longDescEs:
      "La versión Alpha de PROWEB Solutions fue la primera presencia digital oficial de la empresa. Fue montada en Squarespace, incluyendo la adquisición y configuración de un dominio .com. El proyecto abarcó la personalización completa del diseño, estructuración del contenido y optimización para distintos dispositivos.",
    longDescEn:
      "The Alpha version of PROWEB Solutions was the company's first official digital presence, built on Squarespace including domain acquisition and full design customization.",
    tags: ["Squarespace", "CSS", "Domain .com"],
    images: [
      "/Images/Projects/PROWEB-Solutions-Old/image-1.png",
      "/Images/Projects/PROWEB-Solutions-Old/image-2.png",
      "/Images/Projects/PROWEB-Solutions-Old/image-3.png",
      "/Images/Projects/PROWEB-Solutions-Old/image-4.png",
    ],
    demoUrl:  "https://prowebsolutionscr.com",
    codeUrl:  "#",
    year:     "Octubre 2025",
    yearSort: 202510,
    client:   "PROWEB Solutions",
    category: "portfolio",
  },

  // ── ConstruxionArq WordPress — Marzo 2025 ────────────────────────────────
  {
    slug: "construxion-arq-wordpress",
    titleEs: "ConstruxionArq – WordPress",
    titleEn: "ConstruxionArq – WordPress",
    descriptionEs:
      "Sitio corporativo para firma de arquitectura costarricense con WordPress, Elementor y SiteGround. Posteriormente migrado a Next.js 14.",
    descriptionEn:
      "Corporate site for a Costa Rican architecture firm built with WordPress, Elementor and SiteGround. Later migrated to Next.js 14.",
    longDescEs:
      "Se desarrolló un sitio web corporativo para una firma de arquitectura utilizando WordPress y SiteGround. El sitio incluye secciones de inicio, proyectos, acerca de y contacto, con integración del plugin GTranslate para contenido bilingüe. El diseño fue construido con Elementor sobre el tema Blocksy. Este sitio fue posteriormente migrado a Next.js 14.",
    longDescEn:
      "A corporate website developed for an architecture firm using WordPress and SiteGround, with GTranslate bilingual support and Elementor on Blocksy theme. Later migrated to Next.js 14.",
    tags: ["WordPress", "Elementor", "Blocksy", "SiteGround", "PHP", "CSS", "GTranslate"],
    images: [
      "/Images/Projects/ConstruxionARQ-Old/image-1.png",
      "/Images/Projects/ConstruxionARQ-Old/image-2.png",
      "/Images/Projects/ConstruxionARQ-Old/image-3.png",
      "/Images/Projects/ConstruxionARQ-Old/image-4.png",
    ],
    demoUrl:  "#",
    codeUrl:  "#",
    year:     "Marzo 2025",
    yearSort: 202503,
    client:   "ConstruxionArq",
    category: "web",
  },

  // ── El Varón — Noviembre 2024 ─────────────────────────────────────────────
  {
    slug: "restaurante-el-varon",
    titleEs: 'Restaurante "El Varón"',
    titleEn: '"El Varón" Restaurant',
    descriptionEs:
      "Sistema integral para restaurante con .NET Framework, ASP.NET MVC, SQL Server y despliegue en Azure Web Apps.",
    descriptionEn:
      "Full restaurant management system with .NET Framework, ASP.NET MVC, SQL Server and Azure Web Apps deployment.",
    longDescEs:
      "Desarrollo de un sistema integral para El Varón Restaurante utilizando .NET Framework y .NET Core en Visual Studio 2022, orientado al manejo completo de las operaciones del restaurante. El proyecto implementó una arquitectura Model–View–Controller (MVC) para el desarrollo de páginas web dinámicas, lógica de negocio y gestión de datos, con conexión ASP.NET a una base de datos SQL Server administrada desde MySQL Workbench y phpMyAdmin. La aplicación fue publicada en Azure Web Apps, abarcando configuración de entorno, despliegue en la nube y comunicación segura con la base de datos.",
    longDescEn:
      "Development of a full management system for El Varón Restaurant using .NET Framework and .NET Core in Visual Studio 2022. Implemented MVC architecture, SQL Server database managed through MySQL Workbench and phpMyAdmin, and published on Azure Web Apps.",
    tags: [".NET Framework", ".NET Core", "ASP.NET MVC", "C#", "SQL Server", "MySQL Workbench", "phpMyAdmin", "Bootstrap", "Azure Web Apps", "Visual Studio 2022"],
    images: [
      "/Images/Projects/El-Varon/image-1.png",
      "/Images/Projects/El-Varon/image-2.png",
      "/Images/Projects/El-Varon/image-3.png",
      "/Images/Projects/El-Varon/image-4.png",
    ],
    demoUrl:  "#",
    codeUrl:  "https://github.com/WakoSD/ElVaron_Proyecto",
    year:     "Noviembre 2024",
    yearSort: 202411,
    client:   "Restaurante El Varón",
    category: "restaurante",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug);
}
