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
    slug: "proweb-solutions-beta",
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    ],
    demoUrl: "#",
    codeUrl: "#",
    year: "2025",
    client: "PROWEB Solutions",
  },
  {
    slug: "grac-app",
    titleEs: "GRAC App",
    titleEn: "GRAC App",
    descriptionEs: "Aplicación móvil APK para el Concejo Municipal del Distrito de Zapote, desarrollada con FlutterFlow, Flutter y Firebase.",
    descriptionEn: "APK mobile application for the Municipal Council of Zapote District, built with FlutterFlow, Flutter and Firebase.",
    longDescEs:
      "Desarrollo de la GRAC App, una aplicación móvil en formato APK para el Concejo Municipal del Distrito de Zapote, creada con FlutterFlow utilizando Flutter y Dart, e integrada con Firebase y Cloud Firestore de Google. La aplicación fue diseñada para centralizar información y mejorar la comunicación institucional, con una arquitectura orientada a escalabilidad, gestión de datos en la nube y despliegue funcional en dispositivos Android. Se implementó autenticación de usuarios mediante Firebase Auth y sincronización en tiempo real con Cloud Firestore.",
    longDescEn:
      "Development of the GRAC App, an APK mobile application for the Municipal Council of Zapote District, built with FlutterFlow using Flutter and Dart, integrated with Google Firebase and Cloud Firestore. The app was designed to centralize information and improve institutional communication, with an architecture focused on scalability, cloud data management and functional deployment on Android devices. Firebase Auth was implemented for user authentication and real-time sync with Cloud Firestore.",
    tags: ["FlutterFlow", "Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth", "Android"],
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=900&q=80",
    ],
    demoUrl: "#",
    codeUrl: "#",
    year: "2024",
    client: "Concejo Municipal Distrito de Zapote",
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
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80",
    ],
    demoUrl: "#",
    codeUrl: "#",
    year: "2024",
    client: "Restaurante El Varón",
  },
  {
    slug: "construxion-arq",
    titleEs: "ConstruxionArq",
    titleEn: "ConstruxionArq",
    descriptionEs: "Sitio web corporativo para firma de arquitectura con WordPress, SiteGround y Elementor.",
    descriptionEn: "Corporate website for an architecture firm built with WordPress, SiteGround and Elementor.",
    longDescEs:
      "Se desarrolló un sitio web corporativo para una firma de arquitectura utilizando WordPress y SiteGround, enfocado en una estructura clara y fácil de administrar. El sitio incluye secciones de inicio, proyectos, acerca de y contacto, además de la integración de plugins de traducción para ofrecer el contenido en múltiples idiomas, mejorando la accesibilidad y el alcance de la firma. El diseño fue construido con Elementor, permitiendo una interfaz visual, responsiva y alineada con la identidad corporativa del cliente.",
    longDescEn:
      "A corporate website was developed for an architecture firm using WordPress and SiteGround, focused on a clear and easy-to-manage structure. The site includes home, projects, about and contact sections, along with translation plugin integration to offer content in multiple languages, improving accessibility and reach. The design was built with Elementor, delivering a visual, responsive interface aligned with the client's corporate identity.",
    tags: ["WordPress", "SiteGround", "Elementor", "PHP", "CSS"],
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=900&q=80",
    ],
    demoUrl: "#",
    codeUrl: "#",
    year: "2024",
    client: "ConstruxionArq",
  },
  {
    slug: "proweb-solutions-alpha",
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
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    ],
    demoUrl: "#",
    codeUrl: "#",
    year: "2024",
    client: "PROWEB Solutions",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug);
}