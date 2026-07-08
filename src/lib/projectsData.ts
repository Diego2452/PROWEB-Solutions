export type ProjectData = {
  slug: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  longDescEs: string;
  longDescEn: string;
  tags: string[];
  images: string[];
  demoUrl: string;
  codeUrl: string;
  year: string;
  client: string;
};

export const projectsData: ProjectData[] = [
  {
    slug: "repuestos-jmd",
    titleEs: "Repuestos JMD",
    titleEn: "JMD Spare Parts",
    descriptionEs: "E-commerce full-stack para repuestos de vehículos chinos en Costa Rica, con panel admin, catálogo dinámico y sistema de órdenes con emails automáticos.",
    descriptionEn: "Full-stack e-commerce for Chinese vehicle spare parts in Costa Rica, featuring an admin panel, dynamic catalog and order system with automated emails.",
    longDescEs:
      "Diseño y desarrollo completo de Repuestos JMD, una tienda en línea especializada en repuestos para vehículos de marcas chinas (BYD, Geely, Chery, Changan, GWM, Wuling, Jetour) en Costa Rica. Construida con Next.js 14 App Router, TypeScript y Tailwind CSS, con despliegue continuo en Vercel desde GitHub. El frontend presenta un diseño oscuro profesional con hero carousel animado, mega menú de navegación con categorías, carrusel infinito tipo cinta con CSS keyframes, cards con efecto glow reactivo al mouse y sistema de paginación con selector 10/25/50/100 por página. El catálogo cuenta con filtros independientes por marca, modelo, categoría y rango de precio, donde el sidebar de filtros tiene scroll autónomo preservando sus bordes redondeados. El carrito de compras (sin login, localStorage) incluye breakdown detallado con IVA 13%, estimado de envío y campo de código promocional. Las órdenes se guardan en Supabase y disparan emails automáticos tanto al cliente como al administrador mediante Resend. El panel de administración (protegido por Supabase Auth) ofrece CRUD completo para productos, categorías, marcas y modelos, con carga de imágenes por drag-and-drop directo a Supabase Storage. El sistema i18n ES/EN y el selector de moneda CRC/USD con tipo de cambio en tiempo real completan la experiencia. La base de datos PostgreSQL en Supabase incluye compatibilidades por modelo de vehículo, permitiendo filtrar qué piezas sirven para qué auto específico.",
    longDescEn:
      "Full design and development of Repuestos JMD, an online store specialized in spare parts for Chinese brand vehicles (BYD, Geely, Chery, Changan, GWM, Wuling, Jetour) in Costa Rica. Built with Next.js 14 App Router, TypeScript and Tailwind CSS, with continuous deployment on Vercel from GitHub. The frontend features a professional dark design with animated hero carousel, category mega menu navigation, infinite CSS keyframes marquee ribbon, mouse-reactive glow cards and a pagination system with 10/25/50/100 per page selector. The catalog includes independent filters by brand, model, category and price range, with a sidebar that scrolls autonomously while preserving its rounded corners. The shopping cart (no login required, localStorage) includes a detailed breakdown with 13% VAT, shipping estimate and promo code input. Orders are saved to Supabase and trigger automatic emails to both client and admin via Resend. The admin panel (protected by Supabase Auth) provides full CRUD for products, categories, brands and models, with drag-and-drop image upload directly to Supabase Storage. ES/EN i18n and CRC/USD currency selector with real-time exchange rate complete the experience. The PostgreSQL database in Supabase includes vehicle model compatibility tables, enabling filtering of which parts fit which specific car.",
    tags: [
      "Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL",
      "Supabase Auth", "Supabase Storage", "Resend", "Vercel", "React Context",
      "E-commerce", "CRUD", "i18n", "App Router"
    ],
    images: [
      "/Images/Projects/Repuestos-JMD/image-1.png",
      "/Images/Projects/Repuestos-JMD/image-2.png",
      "/Images/Projects/Repuestos-JMD/image-3.png",
      "/Images/Projects/Repuestos-JMD/image-4.png",
    ],
    demoUrl: "https://repuestos-jmd.vercel.app",
    codeUrl: "https://github.com/Diego2452/Repuestos-JMD",
    year: "2026",
    client: "JMD Repuestos",
  },
  {
    slug: "sysrrhh-mideplan",
    titleEs: "SYSRRHH — Institución Gubernamental",
    titleEn: "SYSRRHH — Government Institution",
    descriptionEs: "Sistema institucional de Gestión de Recursos Humanos para una institución gubernamental de Costa Rica, desarrollado con Laravel 12, PHP 8.5 y MySQL.",
    descriptionEn: "Institutional Human Resources Management System for a Costa Rican government institution, built with Laravel 12, PHP 8.5 and MySQL.",
    longDescEs:
      "Desarrollo del Sistema de Gestión de Recursos Humanos (SYSRRHH) para una institución gubernamental de Costa Rica, en el marco de la Práctica Universitaria Supervisada de la Universidad Fidelitas. El sistema fue construido con Laravel 12, PHP 8.5, MySQL y Bootstrap AdminLTE, siguiendo una arquitectura estricta de procedimientos almacenados sin Eloquent, control de versiones con SVN y autenticación mediante Active Directory LDAP institucional. Comprende módulos de Marcas y Asistencia con justificaciones individuales y masivas, Gestión de Períodos y Saldos de Vacaciones con bitácora de ajustes y anexos, Vacaciones Colectivas con descuento masivo mediante cursor SQL, Reportes institucionales incluyendo un reporte PIVOT dinámico de Art. 51 con detección de columnas en runtime, panel de Estadísticas, Bitácora de Ingresos al Sistema y dashboards diferenciados por rol. La identidad visual fue estandarizada con la paleta institucional del cliente, widget de accesibilidad con alto contraste, escala de grises e inversión de colores, menú lateral con árbol CSS puro de 3 niveles, íconos Bootstrap Icons semánticamente coherentes por módulo y sistema de permisos granular por rol con soporte de jerarquía padre-hijo-nieto.",
    longDescEn:
      "Development of the Human Resources Management System (SYSRRHH) for a Costa Rican government institution, as part of the Universidad Fidelitas Supervised University Internship. Built with Laravel 12, PHP 8.5, MySQL and Bootstrap AdminLTE, following a strict stored procedure architecture without Eloquent, SVN version control and institutional LDAP Active Directory authentication. The system includes modules for Attendance Tracking with individual and bulk justifications, Vacation Period and Balance Management with adjustment logs and attachments, Collective Vacations with bulk deduction via SQL cursor, institutional Reports including a dynamic PIVOT report for Art. 51 with runtime column detection, Statistics dashboard, System Access Log and role-differentiated dashboards. The visual identity was standardized with the MIDEPLAN institutional palette, an accessibility widget with high contrast, grayscale and color inversion, a 3-level pure CSS sidebar tree, semantically coherent Bootstrap Icons per module and a granular role-based permission system with parent-child-grandchild hierarchy support.",
    tags: [
      "Laravel 12", "PHP 8.5", "MySQL", "Bootstrap", "AdminLTE", "jQuery",
      "DataTables", "Select2", "Blade", "SVN", "LDAP", "Active Directory",
      "Stored Procedures", "SweetAlert2", "Bootstrap Icons"
    ],
    images: [
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-1.png",
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-2.png",
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-3.png",
      "/Images/Projects/MIDEPLAN-Sysrrhh/image-4.png",
    ],
    demoUrl: "#",
    codeUrl: "#",
    year: "2026",
    client: "Government Institution — Costa Rica",
  },
  {
    slug: "proweb-solutions-next.js",
    titleEs: "PROWEB Solutions Beta",
    titleEn: "PROWEB Solutions Beta",
    descriptionEs: "Versión actual del portafolio, construida desde cero con Next.js, TypeScript, Tailwind CSS y Framer Motion.",
    descriptionEn: "Current portfolio version, built from scratch with Next.js, TypeScript, Tailwind CSS and Framer Motion.",
    longDescEs:
      "La versión Beta de PROWEB Solutions es la versión actual, construida completamente desde cero en Visual Studio Code. Implementa Next.js con App Router, TypeScript, Tailwind CSS y Framer Motion. Incluye animaciones avanzadas con partículas interactivas en canvas, efectos 3D en tarjetas al pasar el mouse, sistema de traducción ES/EN, typewriter animado en el hero, navbar responsiva con menú mobile, páginas de detalle por proyecto con carrusel de imágenes y un diseño oscuro profesional de alto nivel — demostrando verdadera experiencia en desarrollo web moderno desde cero.",
    longDescEn:
      "The Beta version of PROWEB Solutions is the current version, built entirely from scratch in Visual Studio Code. It uses Next.js with App Router, TypeScript, Tailwind CSS and Framer Motion. It includes advanced animations with interactive canvas particles, 3D card tilt effects on hover, an ES/EN translation system, animated typewriter in the hero, responsive navbar with mobile menu, per-project detail pages with image carousel and a high-quality professional dark design — demonstrating real expertise in modern web development from scratch.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Vercel", "VS Code"],
    images: [
      "/Images/Projects/PROWEB-Solutions/image-1.png",
      "/Images/Projects/PROWEB-Solutions/image-2.png",
      "/Images/Projects/PROWEB-Solutions/image-3.png",
      "/Images/Projects/PROWEB-Solutions/image-4.png",
    ],
    demoUrl: "https://prowebsolutionscr.netlify.app",
    codeUrl: "https://github.com/Diego2452/PROWEB-Solutions",
    year: "2025",
    client: "PROWEB Solutions",
  },
  {
    slug: "grac-app",
    titleEs: "GRAC App",
    titleEn: "GRAC App",
    descriptionEs: "Aplicación móvil APK desarrollada para una institución municipal, creada con FlutterFlow, Flutter y Firebase.",
    descriptionEn: "APK mobile application developed for a municipal institution, built with FlutterFlow, Flutter and Firebase.",
    longDescEs:
      "Desarrollo de la GRAC App (Gestión de Reportes y Actividades Comunitarias), una aplicación móvil en formato APK para una institución municipal, creada con FlutterFlow utilizando Flutter y Dart, e integrada con Firebase y Cloud Firestore de Google. La aplicación fue diseñada para centralizar información y mejorar la comunicación institucional, con una arquitectura orientada a escalabilidad, gestión de datos en la nube y despliegue funcional en dispositivos Android. Se implementó autenticación de usuarios mediante Firebase Auth y sincronización en tiempo real con Cloud Firestore.",
    longDescEn:
      "Development of the GRAC App (Community Reports and Activities Management), an APK mobile application for a municipal institution, built with FlutterFlow using Flutter and Dart, integrated with Google Firebase and Cloud Firestore. The app was designed to centralize information and improve institutional communication, with an architecture focused on scalability, cloud data management and functional deployment on Android devices. Firebase Auth was implemented for user authentication and real-time sync with Cloud Firestore.",
    tags: ["FlutterFlow", "Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth", "Android"],
    images: [
      "/Images/Projects/GRAC-App/image-1.png",
      "/Images/Projects/GRAC-App/image-2.png",
      "/Images/Projects/GRAC-App/image-3.png",
      "/Images/Projects/GRAC-App/image-4.png",
    ],
    demoUrl: "https://app.flutterflow.io/share/app-movil-gestion-reportes-actividades-comunitarias-distrito-zapote-r5irg2",
    codeUrl: "#",
    year: "2024",
    client: "Municipal Institution",
  },
  {
    slug: "restaurante-el-varon",
    titleEs: 'Restaurante "El Varón"',
    titleEn: '"El Varón" Restaurant',
    descriptionEs: "Sistema integral para restaurante con .NET Framework, ASP.NET MVC, SQL Server y despliegue en Azure Web Apps.",
    descriptionEn: "Full restaurant management system with .NET Framework, ASP.NET MVC, SQL Server and Azure Web Apps deployment.",
    longDescEs:
      "Desarrollo de un sistema integral para El Varón Restaurante utilizando .NET Framework y .NET Core en Visual Studio 2022, orientado al manejo completo de las operaciones del restaurante. El proyecto implementó una arquitectura Model–View–Controller (MVC) para el desarrollo de páginas web dinámicas, lógica de negocio y gestión de datos, con conexión ASP.NET a una base de datos SQL Server administrada desde MySQL Workbench y phpMyAdmin. La aplicación fue publicada en Azure Web Apps (azurewebsites), abarcando configuración de entorno, despliegue en la nube y comunicación segura con la base de datos. El frontend fue construido con Bootstrap para garantizar responsividad, priorizando un enfoque basado en código sin uso de constructores visuales.",
    longDescEn:
      "Development of a full management system for El Varón Restaurant using .NET Framework and .NET Core in Visual Studio 2022, covering all restaurant operations. The project implemented a Model–View–Controller (MVC) architecture for dynamic web pages, business logic and data management, with ASP.NET connected to a SQL Server database managed through MySQL Workbench and phpMyAdmin. The application was published on Azure Web Apps, covering environment setup, cloud deployment and secure database communication. The frontend was built with Bootstrap to ensure responsiveness, prioritizing a code-first approach without visual page builders.",
    tags: [".NET Framework", ".NET Core", "ASP.NET MVC", "C#", "SQL Server", "MySQL Workbench", "phpMyAdmin", "Bootstrap", "Azure Web Apps", "Visual Studio 2022"],
    images: [
      "/Images/Projects/El-Varon/image-1.png",
      "/Images/Projects/El-Varon/image-2.png",
      "/Images/Projects/El-Varon/image-3.png",
      "/Images/Projects/El-Varon/image-4.png",
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/WakoSD/ElVaron_Proyecto",
    year: "2024",
    client: "Restaurante El Varón",
  },
  {
    slug: "construxion-arq-nextjs",
    titleEs: "ConstruxionArq – Next.js",
    titleEn: "ConstruxionArq – Next.js",
    descriptionEs: "Migración completa de WordPress a Next.js 14 con deploy automático vía GitHub Actions y soporte bilingüe ES/EN.",
    descriptionEn: "Full migration from WordPress to Next.js 14 with automated CI/CD via GitHub Actions and bilingual ES/EN support.",
    longDescEs:
      "Migración completa del sitio corporativo de una firma de arquitectura costarricense desde WordPress/Elementor hacia un stack moderno en Next.js 14 con TypeScript y Tailwind CSS. El sitio se exporta como HTML estático y se despliega automáticamente en SiteGround mediante GitHub Actions + FTP Deploy cada vez que se hace un push a main. Se implementó un sistema de internacionalización propio (sin librerías externas) con React Context que permite cambiar entre español e inglés en tiempo real y persiste la preferencia en localStorage. La galería de proyectos incluye 19 proyectos con imágenes reales rescatadas del WordPress original, lightbox, búsqueda con filtros y paginación. El diseño replica fielmente la identidad corporativa del cliente con video hero, animaciones reveal por IntersectionObserver y cursor personalizado.",
    longDescEn:
      "Full migration of a Costa Rican architecture firm's corporate website from WordPress/Elementor to a modern stack using Next.js 14, TypeScript and Tailwind CSS. The site exports as static HTML and deploys automatically to SiteGround via GitHub Actions + FTP Deploy on every push to main. A custom internationalization system was built using React Context (no external libraries) allowing real-time switching between Spanish and English with localStorage persistence. The project gallery features 19 projects with real images rescued from the original WordPress, including a lightbox, search with filters and pagination. The design faithfully replicates the client's corporate identity with a hero video, IntersectionObserver reveal animations and a custom cursor.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "GitHub Actions", "SiteGround", "i18n", "CI/CD"],
    images: [
      "/Images/Projects/ConstruxionARQ-New/image-1.png",
      "/Images/Projects/ConstruxionARQ-New/image-2.png",
      "/Images/Projects/ConstruxionARQ-New/image-3.png",
      "/Images/Projects/ConstruxionARQ-New/image-4.png",
    ],
    demoUrl: "https://construxionarq.com",
    codeUrl: "https://github.com/Diego2452/ConstruxionARQ",
    year: "2025",
    client: "ConstruxionArq",
  },
  {
    slug: "construxion-arq-wordpress",
    titleEs: "ConstruxionArq – WordPress",
    titleEn: "ConstruxionArq – WordPress",
    descriptionEs: "Sitio corporativo para firma de arquitectura costarricense con WordPress, Elementor y SiteGround. Posteriormente migrado a Next.js 14.",
    descriptionEn: "Corporate site for a Costa Rican architecture firm built with WordPress, Elementor and SiteGround. Later migrated to Next.js 14.",
    longDescEs:
      "Se desarrolló un sitio web corporativo para una firma de arquitectura utilizando WordPress y SiteGround, enfocado en una estructura clara y fácil de administrar. El sitio incluye secciones de inicio, proyectos, acerca de y contacto, con integración del plugin GTranslate para contenido bilingüe español/inglés. El diseño fue construido con Elementor sobre el tema Blocksy, logrando una interfaz visual, responsiva y alineada con la identidad corporativa del cliente. El portafolio de proyectos fue gestionado mediante Custom Post Types con galerías Swiper integradas. Este sitio fue posteriormente migrado a Next.js 14 como parte de una modernización del stack.",
    longDescEn:
      "A corporate website was developed for an architecture firm using WordPress and SiteGround, focused on a clear and easy-to-manage structure. The site includes home, projects, about and contact sections, with GTranslate plugin integration for Spanish/English bilingual content. The design was built with Elementor on the Blocksy theme, delivering a visual, responsive interface aligned with the client's corporate identity. The project portfolio was managed through Custom Post Types with integrated Swiper galleries. This site was later migrated to Next.js 14 as part of a stack modernization.",
    tags: ["WordPress", "Elementor", "Blocksy", "SiteGround", "PHP", "CSS", "GTranslate"],
    images: [
      "/Images/Projects/ConstruxionARQ-Old/image-1.png",
      "/Images/Projects/ConstruxionARQ-Old/image-2.png",
      "/Images/Projects/ConstruxionARQ-Old/image-3.png",
      "/Images/Projects/ConstruxionARQ-Old/image-4.png",
    ],
    demoUrl: "#",
    codeUrl: "#",
    year: "2023",
    client: "ConstruxionArq",
  },
  {
    slug: "proweb-solutions-squarespace",
    titleEs: "PROWEB Solutions Alpha",
    titleEn: "PROWEB Solutions Alpha",
    descriptionEs: "Primera versión del portafolio corporativo, desarrollada en Squarespace con dominio .com propio.",
    descriptionEn: "First version of the corporate portfolio, built on Squarespace with a custom .com domain.",
    longDescEs:
      "La versión Alpha de PROWEB Solutions fue la primera presencia digital oficial de la empresa. Fue montada en Squarespace, incluyendo la adquisición y configuración de un dominio .com. El proyecto abarcó la personalización completa del diseño mediante las herramientas nativas de la plataforma, estructuración del contenido, adaptación visual a una identidad corporativa moderna y optimización para distintos dispositivos — demostrando capacidad para entregar soluciones web rápidas, funcionales y profesionales sin necesidad de código.",
    longDescEn:
      "The Alpha version of PROWEB Solutions was the company's first official digital presence. It was built on Squarespace, including the acquisition and configuration of a .com domain. The project covered full design customization using the platform's native tools, content structuring, visual adaptation to a modern corporate identity and optimization for different devices — demonstrating the ability to deliver fast, functional and professional web solutions without code.",
    tags: ["Squarespace", "CSS", "Domain .com"],
    images: [
      "/Images/Projects/PROWEB-Solutions-Old/image-1.png",
      "/Images/Projects/PROWEB-Solutions-Old/image-2.png",
      "/Images/Projects/PROWEB-Solutions-Old/image-3.png",
      "/Images/Projects/PROWEB-Solutions-Old/image-4.png",
    ],
    demoUrl: "https://prowebsolutionscr.com",
    codeUrl: "#",
    year: "2024",
    client: "PROWEB Solutions",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug);
}