export type Lang = "es" | "en";

export const translations = {

  /* ── Navbar ── */
  nav: {
    projects: { es: "Proyectos",   en: "Projects"   },
    about:    { es: "Acerca de",   en: "About"      },
    services: { es: "Servicios",   en: "Services"   },
    contact:  { es: "Contáctenos", en: "Contact us" },
  },

  /* ── Hero ── */
  hero: {
    badge:    { es: "Disponibles para Nuevos Proyectos", en: "Available for New Projects" },
    line1:    { es: "Soluciones Web y",                  en: "Web and Mobile"             },
    line2:    { es: "Móviles",                           en: "Solutions"                  },
    subtitle: { es: "Convertimos ideas en sitios web y aplicaciones móviles de alta calidad.", en: "We turn ideas into high-quality websites and mobile applications." },
    cta1:     { es: "Descubre más",  en: "Discover more" },
    cta2:     { es: "Contáctenos",   en: "Contact us"    },
  },

  /* ── Home page ── */
  home: {
    whoLabel:  { es: "Quiénes somos",         en: "Who we are"           },
    whoTitle1: { es: "Construimos el futuro", en: "We build the digital" },
    whoTitle2: { es: "digital",               en: "future"               },
    whoBody:   { es: "PROWEB Solutions nació con la misión de brindar soluciones de desarrollo de software confiables y de alta calidad, a precios accesibles y enfocados en el crecimiento conjunto.", en: "PROWEB Solutions was born with the mission of providing reliable, high-quality software development solutions at accessible prices, focused on mutual growth." },
    whoLink:   { es: "Conoce más sobre nosotros", en: "Learn more about us" },
    servLabel: { es: "Servicios",      en: "Services"   },
    servTitle: { es: "Lo que hacemos", en: "What we do" },
    servBody:  { es: "Explore los servicios que ofrecemos. Creamos sitios web y aplicaciones móviles, siempre priorizando la calidad y la comunicación para cada proyecto.", en: "Explore the services we offer. We build websites and mobile apps, always prioritizing quality and communication for each project." },
    servBtn:   { es: "SERVICIOS",  en: "SERVICES" },
    portLabel: { es: "Portafolio",                  en: "Portfolio"               },
    portTitle: { es: "Proyectos",                   en: "Projects"                },
    portSub:   { es: "Descubra nuestros proyectos", en: "Discover our projects"   },
    portLink:  { es: "Ver todos",                   en: "View all"                },
    ctaLabel:  { es: "Contáctenos",                 en: "Contact us"              },
    ctaTitle1: { es: "¿Listo para construir algo",  en: "Ready to build something" },
    ctaTitle2: { es: "increíble",                   en: "incredible"              },
    ctaBody:   { es: "¿Te interesa lo que hacemos? Envíanos un mensaje: estaremos encantados de ayudarte a hacer realidad tus ideas.", en: "Interested in what we do? Send us a message — we'd love to help you bring your ideas to life." },
    ctaBtn:    { es: "Envíanos un mensaje", en: "Send us a message" },
  },

  /* ── Projects page ── */
  projects: {
    sectionLabel: { es: "Portafolio",    en: "Portfolio"  },
    title:        { es: "Proyectos",     en: "Projects"   },
    subtitle:     { es: "Estos son algunos de nuestros proyectos destacados y ejemplos del trabajo que hemos realizado.", en: "Here are some of our featured projects and examples of the work we have done." },
    demoBtn:      { es: "Ver demo",      en: "View demo"  },
    codeBtn:      { es: "Ver código",    en: "View code"  },
    items: [
      {
        title:       { es: "ConstruxionArq", en: "ConstruxionArq" },
        description: { es: "Sitio web corporativo para firma de arquitectura con WordPress, SiteGround y Elementor.", en: "Corporate website for an architecture firm built with WordPress, SiteGround and Elementor." },
      },
      {
        title:       { es: "GRAC App", en: "GRAC App" },
        description: { es: "Aplicación móvil APK para el Concejo Municipal del Distrito de Zapote, desarrollada con FlutterFlow, Flutter y Firebase.", en: "APK mobile application for the Municipal Council of Zapote District, built with FlutterFlow, Flutter and Firebase." },
      },
      {
        title:       { es: 'Restaurante "El Varón"', en: '"El Varón" Restaurant' },
        description: { es: "Sistema integral para restaurante con .NET Framework, ASP.NET MVC, SQL Server y despliegue en Azure Web Apps.", en: "Full restaurant management system with .NET Framework, ASP.NET MVC, SQL Server and Azure Web Apps deployment." },
      },
      {
        title:       { es: "PROWEB Solutions", en: "PROWEB Solutions" },
        description: { es: "Portafolio corporativo en dos etapas: Alpha en Squarespace y Beta construida desde cero con Next.js, TypeScript y Framer Motion.", en: "Corporate portfolio in two stages: Alpha on Squarespace and Beta built from scratch with Next.js, TypeScript and Framer Motion." },
      },
    ],
  },

  /* ── About page ── */
  about: {
    sectionLabel:  { es: "Sobre nosotros",  en: "About us"       },
    title:         { es: "Acerca de",       en: "About"          },
    whoTitle:      { es: "¿Quiénes somos?", en: "Who are we?"    },
    whoBody1:      { es: "PROWEB Solutions está liderado por Diego Vargas Salas, un desarrollador de software apasionado con experiencia en la creación de soluciones digitales modernas y eficientes para empresas y emprendedores.", en: "PROWEB Solutions is led by Diego Vargas Salas, a passionate software developer with experience building modern, efficient digital solutions for businesses and entrepreneurs." },
    whoBody2:      { es: "Nacimos con la misión de brindar soluciones de desarrollo de software confiables y de alta calidad, a precios accesibles y enfocados en el crecimiento conjunto con nuestros clientes.", en: "We were born with the mission of providing reliable, high-quality software development solutions at accessible prices, focused on mutual growth with our clients." },
    missionLabel:  { es: "Misión",  en: "Mission"  },
    visionLabel:   { es: "Visión",  en: "Vision"   },
    valuesLabel:   { es: "Valores", en: "Values"   },
    missionText:   { es: "Brindar soluciones tecnológicas de alta calidad que impulsen el crecimiento de nuestros clientes, mediante el desarrollo de sitios web y aplicaciones móviles innovadoras, accesibles y confiables.", en: "To deliver high-quality technology solutions that drive our clients' growth through the development of innovative, accessible and reliable websites and mobile applications." },
    visionText:    { es: "Ser la empresa de desarrollo de software de referencia en Costa Rica y Latinoamérica, reconocida por nuestra excelencia técnica, atención personalizada y compromiso con la innovación.", en: "To be the reference software development company in Costa Rica and Latin America, recognized for our technical excellence, personalized service and commitment to innovation." },
    valuesText:    { es: "Calidad, transparencia, comunicación efectiva, innovación continua, responsabilidad con cada proyecto y compromiso real con el éxito de nuestros clientes.", en: "Quality, transparency, effective communication, continuous innovation, accountability for every project and a genuine commitment to our clients' success." },
    specLabel:     { es: "Especialidades",  en: "Specialties"    },
    specTitle:     { es: "Lo que dominamos", en: "What we master" },
    imageAlt:      { es: "Equipo PROWEB Solutions", en: "PROWEB Solutions team" },
    specialties: [
      { title: { es: "Desarrollo Web",   en: "Web Development"   }, description: { es: "Sitios web modernos, responsivos y optimizados con las últimas tecnologías.", en: "Modern, responsive, optimized websites built with the latest technologies." } },
      { title: { es: "Programación",     en: "Programming"       }, description: { es: "Desarrollo de software a medida con código limpio, escalable y mantenible.", en: "Custom software development with clean, scalable and maintainable code." } },
      { title: { es: "Bases de Datos",   en: "Databases"         }, description: { es: "Diseño, implementación y optimización de bases de datos relacionales y NoSQL.", en: "Design, implementation and optimization of relational and NoSQL databases." } },
      { title: { es: "Soporte Técnico",  en: "Technical Support" }, description: { es: "Soporte continuo, mantenimiento y resolución de problemas técnicos.", en: "Ongoing support, maintenance and technical troubleshooting." } },
      { title: { es: "Redes",            en: "Networks"          }, description: { es: "Configuración, administración y seguridad de redes empresariales.", en: "Configuration, administration and security of enterprise networks." } },
      { title: { es: "Herramientas",     en: "Tools"             }, description: { es: "Integración de herramientas y automatización de procesos empresariales.", en: "Tool integration and business process automation." } },
    ],
  },

  /* ── Services page ── */
  services: {
    sectionLabel:  { es: "Lo que ofrecemos",  en: "What we offer"   },
    title:         { es: "Servicios",         en: "Services"        },
    subtitle:      { es: "Planes y servicios diseñados para adaptarse a las necesidades de cada proyecto, desde startups hasta empresas consolidadas.", en: "Plans and services designed to adapt to the needs of every project, from startups to established companies." },
    webLabel:      { es: "Web",               en: "Web"             },
    webTitle:      { es: "Desarrollo Web",    en: "Web Development" },
    mobileLabel:   { es: "Mobile",            en: "Mobile"          },
    mobileTitle:   { es: "Aplicaciones Móviles", en: "Mobile Apps"  },
    otherLabel:    { es: "Adicionales",       en: "Add-ons"         },
    otherTitle:    { es: "Otros Servicios",   en: "Other Services"  },
    includesLabel: { es: "¿Qué incluye?",     en: "What's included?" },
    priceLabel:    { es: "Precio",            en: "Price"           },
    popularBadge:  { es: "Popular",           en: "Popular"         },
    ctaBtn:        { es: "Cotice esta opción", en: "Get a quote"    },
    plans: {
      web: [
        {
          title: { es: "Plan Básico Web", en: "Basic Web Plan" },
          price: { es: "$249.50", en: "$249.50" },
          includes: [
            { es: "Panel de administración básico", en: "Basic admin panel" },
            { es: "Agregar, editar y eliminar información (CRUD básico)", en: "Add, edit and delete content (basic CRUD)" },
            { es: "De 1 a 6 páginas", en: "1 to 6 pages" },
            { es: "Diseño adaptable para computadora, tablet y celular", en: "Responsive design for desktop, tablet and mobile" },
            { es: "Dominio .com por 1 año", en: ".com domain for 1 year" },
            { es: "Publicación del sitio en internet", en: "Website publishing" },
            { es: "Implementación básica de SEO", en: "Basic SEO implementation" },
            { es: "Soporte durante la entrega del proyecto", en: "Support during project delivery" },
          ],
        },
        {
          title: { es: "Plan Intermedio Web", en: "Intermediate Web Plan" },
          price: { es: "$499.50", en: "$499.50" },
          featured: true,
          includes: [
            { es: "Panel de administración mejorado", en: "Enhanced admin panel" },
            { es: "Agregar, editar y eliminar información (CRUD completo)", en: "Add, edit and delete content (full CRUD)" },
            { es: "De 6 a 12 páginas", en: "6 to 12 pages" },
            { es: "Diseño adaptable para computadora, tablet y celular", en: "Responsive design for desktop, tablet and mobile" },
            { es: "Dominio .com por 1 año", en: ".com domain for 1 year" },
            { es: "Publicación del sitio en internet", en: "Website publishing" },
            { es: "Implementación de SEO básico", en: "Basic SEO implementation" },
            { es: "Investigación básica de palabras clave", en: "Basic keyword research" },
            { es: "Reporte mensual básico de tráfico", en: "Basic monthly traffic report" },
            { es: "Soporte posterior a la entrega", en: "Post-delivery support" },
          ],
        },
        {
          title: { es: "Plan Pro Web", en: "Pro Web Plan" },
          price: { es: "$849.50", en: "$849.50" },
          includes: [
            { es: "Panel de administración avanzado", en: "Advanced admin panel" },
            { es: "Gestión completa de información", en: "Full content management" },
            { es: "Páginas ilimitadas", en: "Unlimited pages" },
            { es: "Diseño adaptable y optimizado", en: "Responsive and optimized design" },
            { es: "Dominio .com por 1 año", en: ".com domain for 1 year" },
            { es: "Publicación del sitio en internet", en: "Website publishing" },
            { es: "Implementación avanzada de SEO", en: "Advanced SEO implementation" },
            { es: "Investigación de palabras clave y optimización de contenido", en: "Keyword research and content optimization" },
            { es: "Reportes mensuales de tráfico", en: "Monthly traffic reports" },
            { es: "Soporte prioritario después de la entrega", en: "Priority post-delivery support" },
            { es: "Reuniones mensuales de seguimiento", en: "Monthly follow-up meetings" },
            { es: "Revisiones periódicas del sistema", en: "Periodic system reviews" },
          ],
        },
      ],
      mobile: [
        {
          title: { es: "Plan Básico App", en: "Basic App Plan" },
          price: { es: "$249.50", en: "$249.50" },
          includes: [
            { es: "Aplicación móvil personalizada", en: "Custom mobile application" },
            { es: "Compatible con Android (Solo APK)", en: "Android compatible (APK only)" },
            { es: "Pantallas básicas (inicio, contenido, contacto u otras)", en: "Basic screens (home, content, contact, etc.)" },
            { es: "Agregar, editar y eliminar información (CRUD básico)", en: "Add, edit and delete content (basic CRUD)" },
            { es: "Autenticación básica de usuarios", en: "Basic user authentication" },
            { es: "Diseño adaptable y fácil de usar", en: "Responsive and user-friendly design" },
            { es: "Conexión a base de datos en la nube", en: "Cloud database connection" },
            { es: "Publicación de versión de prueba", en: "Test version publishing" },
            { es: "Soporte durante la entrega del proyecto", en: "Support during project delivery" },
          ],
        },
        {
          title: { es: "Plan Intermedio App", en: "Intermediate App Plan" },
          price: { es: "$499.50", en: "$499.50" },
          featured: true,
          includes: [
            { es: "Aplicación móvil personalizada", en: "Custom mobile application" },
            { es: "Compatible con Google Play Store y App Store (únicamente uno)", en: "Google Play Store or App Store (one platform)" },
            { es: "Múltiples pantallas y navegación completa", en: "Multiple screens and full navigation" },
            { es: "Gestión completa de información (CRUD completo)", en: "Full content management (full CRUD)" },
            { es: "Sistema de usuarios con inicio de sesión", en: "User system with login" },
            { es: "Diseño optimizado para experiencia móvil", en: "Design optimized for mobile experience" },
            { es: "Base de datos en la nube con sincronización", en: "Cloud database with sync" },
            { es: "Notificaciones básicas (si aplica)", en: "Basic notifications (if applicable)" },
            { es: "Publicación de versión funcional", en: "Functional version publishing" },
            { es: "Soporte posterior a la entrega", en: "Post-delivery support" },
          ],
        },
        {
          title: { es: "Plan Pro App", en: "Pro App Plan" },
          price: { es: "$849.50", en: "$849.50" },
          includes: [
            { es: "Aplicación móvil avanzada y personalizada", en: "Advanced custom mobile application" },
            { es: "Compatible con Google Play Store y App Store", en: "Google Play Store and App Store compatible" },
            { es: "Pantallas y funcionalidades sin límite definido", en: "Unlimited screens and features" },
            { es: "Gestión avanzada de información", en: "Advanced content management" },
            { es: "Sistema de usuarios completo y seguro", en: "Complete and secure user system" },
            { es: "Diseño optimizado para rendimiento y usabilidad", en: "Design optimized for performance and usability" },
            { es: "Base de datos en la nube optimizada", en: "Optimized cloud database" },
            { es: "Notificaciones y funciones avanzadas (según necesidad)", en: "Advanced notifications and features (as needed)" },
            { es: "Publicación de versión final lista para escalar", en: "Final scalable version publishing" },
            { es: "Soporte prioritario después de la entrega", en: "Priority post-delivery support" },
            { es: "Reuniones mensuales de seguimiento", en: "Monthly follow-up meetings" },
            { es: "Revisiones periódicas de la aplicación", en: "Periodic app reviews" },
          ],
        },
      ],
      other: [
        {
          title: { es: "Plan de Mantenimiento Mensual Web & App", en: "Monthly Web & App Maintenance Plan" },
          price: { es: "$29.99 — Mensual", en: "$29.99 — Monthly" },
          includes: [
            { es: "Soporte técnico para sitio web o aplicación móvil", en: "Technical support for website or mobile app" },
            { es: "Revisión general de funcionamiento mensual", en: "Monthly general performance review" },
            { es: "Corrección de errores menores (si es necesario)", en: "Minor bug fixes (if needed)" },
            { es: "Ajustes pequeños de contenido y configuración (si es necesario)", en: "Small content and config adjustments (if needed)" },
            { es: "Verificación de base de datos y servicios en la nube", en: "Database and cloud services verification" },
            { es: "Respaldo básico de información", en: "Basic data backup" },
            { es: "Asistencia técnica y acompañamiento continuo", en: "Ongoing technical assistance and guidance" },
          ],
        },
        {
          title: { es: "Plan Básico Google Ads", en: "Basic Google Ads Plan" },
          price: { es: "$79.99", en: "$79.99" },
          includes: [
            { es: "Configuración inicial de campaña en Google Ads", en: "Initial Google Ads campaign setup" },
            { es: "Segmentación básica (ubicación y tipo de búsqueda)", en: "Basic targeting (location and search type)" },
            { es: "Creación y gestión de anuncios durante 1 mes", en: "Ad creation and management for 1 month" },
            { es: "Optimización básica durante el período activo", en: "Basic optimization during active period" },
            { es: "1 reporte final de resultados", en: "1 final results report" },
            { es: "Soporte durante el mes de la campaña", en: "Support during campaign month" },
          ],
        },
        {
          title: { es: "Plan Pro Google Ads", en: "Pro Google Ads Plan" },
          price: { es: "$199.99", en: "$199.99" },
          featured: true,
          includes: [
            { es: "Configuración inicial de campañas en Google Ads", en: "Initial Google Ads campaigns setup" },
            { es: "Segmentación avanzada (ubicación, horarios, intención de búsqueda)", en: "Advanced targeting (location, schedules, search intent)" },
            { es: "Creación y gestión de anuncios durante 3 meses", en: "Ad creation and management for 3 months" },
            { es: "Optimización continua durante toda la campaña", en: "Continuous optimization throughout the campaign" },
            { es: "Reportes mensuales de resultados (3 reportes)", en: "Monthly results reports (3 reports)" },
            { es: "Ajustes estratégicos según rendimiento", en: "Strategic adjustments based on performance" },
            { es: "Soporte prioritario durante el período contratado", en: "Priority support during contracted period" },
          ],
        },
      ],
    },
  },

  /* ── Contact page ── */
  contact: {
    sectionLabel:   { es: "Hablemos",          en: "Let's talk"          },
    title:          { es: "Contáctenos",        en: "Contact us"          },
    subtitle:       { es: "¿Te interesa lo que hacemos? Envíanos un mensaje: estaremos encantados de ayudarte a hacer realidad tus ideas.", en: "Interested in what we do? Send us a message — we'd love to help you bring your ideas to life." },
    emailLabel:     { es: "Correo",             en: "Email"               },
    phoneLabel:     { es: "Teléfono",           en: "Phone"               },
    locationLabel:  { es: "Ubicación",          en: "Location"            },
    scheduleLabel:  { es: "Horario",            en: "Schedule"            },
    scheduleValue:  { es: "Lun – Vie, 8am – 6pm", en: "Mon – Fri, 8am – 6pm" },
    nameLabel:      { es: "Nombre",             en: "First name"          },
    namePlaceholder:{ es: "Juan",               en: "John"                },
    lastNameLabel:  { es: "Apellido",           en: "Last name"           },
    lastNamePlaceholder: { es: "Pérez",         en: "Doe"                 },
    emailFieldLabel:{ es: "Correo Electrónico", en: "Email address"       },
    emailPlaceholder:{ es: "juan@ejemplo.com",  en: "john@example.com"    },
    phoneFieldLabel:{ es: "Teléfono",           en: "Phone"               },
    countryLabel:   { es: "País",               en: "Country"             },
    methodLabel:    { es: "Método de contacto preferido", en: "Preferred contact method" },
    servicesLabel:  { es: "Servicios de interés", en: "Services of interest" },
    descLabel:      { es: "Descripción del proyecto", en: "Project description" },
    descPlaceholder:{ es: "Cuéntanos sobre tu idea o proyecto...", en: "Tell us about your idea or project..." },
    submitBtn:      { es: "Enviar",             en: "Send"                },
    successTitle:   { es: "¡Mensaje enviado!",  en: "Message sent!"       },
    successBody:    { es: "Gracias por contactarnos. Te responderemos en menos de 24 horas hábiles.", en: "Thanks for reaching out. We'll get back to you within 24 business hours." },
    successBtn:     { es: "Enviar otro mensaje", en: "Send another message" },
    required:       { es: "*", en: "*" },
    methods: [
      { es: "Correo electrónico",   en: "Email"         },
      { es: "WhatsApp",             en: "WhatsApp"      },
      { es: "Llamada telefónica",   en: "Phone call"    },
      { es: "Videollamada",         en: "Video call"    },
    ],
    services: [
      { es: "Desarrollo Web",    en: "Web Development"  },
      { es: "Aplicación Móvil",  en: "Mobile App"       },
      { es: "Mantenimiento",     en: "Maintenance"      },
      { es: "Google Ads",        en: "Google Ads"       },
      { es: "Soporte Técnico",   en: "Tech Support"     },
      { es: "Consultoría",       en: "Consulting"       },
      { es: "Otro",              en: "Other"            },
    ],
  },

  /* ── Footer ── */
  footer: {
    tagline: { es: "Soluciones Web y Móviles a la Medida. Convertimos ideas en productos digitales de alta calidad.", en: "Custom Web and Mobile Solutions. We turn ideas into high-quality digital products." },
    nav:     { es: "Navegación", en: "Navigation" },
    contact: { es: "Contacto",   en: "Contact"    },
    rights:  { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },

};

export function t(key: { es: string; en: string }, lang: Lang): string {
  return key[lang];
}
