export const languages = {
  es: 'ES',
  en: 'EN',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    meta: {
      title: 'Daniel Malpica — Desarrollo Web & Automatizaciones',
      description: 'Sitios web modernos, automatizaciones con n8n y mantenimiento web. Desarrollo con metodología AI-first para negocios que quieren crecer.',
    },
    nav: {
      about: 'Acerca de',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para proyectos',
      title_line1: 'Daniel',
      title_line2: 'Malpica',
      subtitle: 'Desarrollo Web & Automatizaciones',
      tagline: 'Sitios web modernos y automatizaciones\npara hacer crecer tu negocio.',
      cta_primary: 'Ver mis servicios',
      cta_github: 'GitHub',
    },
    about: {
      label: 'Acerca de mí',
      heading: 'Desarrollador con mentalidad',
      heading_accent: 'orientada a resultados',
      p1: 'Soy Daniel, desarrollador web de 26 años especializado en crear sitios web modernos y automatizaciones para negocios que quieren crecer en el mundo digital.',
      p2: 'Utilizo las herramientas más avanzadas de IA para entregar proyectos de calidad en tiempo récord — resultados que antes tomaban meses, ahora en semanas.',
      stat1_number: 'Remoto',
      stat1_label: 'Disponible en cualquier lugar',
      stat2_number: 'AI-first',
      stat2_label: 'Metodología de trabajo',
      stat3_number: 'Freelance',
      stat3_label: 'Modalidad de trabajo',
    },
    services: {
      label: 'Servicios',
      heading: 'Lo que puedo',
      heading_accent: 'hacer por ti',
      subtitle: 'Soluciones digitales para negocios que quieren crecer.',
      items: [
        {
          title: 'Sitios Web Estáticos',
          description: 'Páginas web rápidas, modernas y optimizadas para Google. Perfectas para negocios locales, landing pages y portafolios.',
          price: 'Desde $3,500 MXN',
        },
        {
          title: 'Automatizaciones',
          description: 'Flujos de trabajo automáticos con n8n. Elimina tareas repetitivas y conecta tus herramientas digitales sin esfuerzo.',
          price: 'Desde $4,500 MXN',
        },
        {
          title: 'Mantenimiento Web',
          description: 'Actualizaciones, correcciones y soporte continuo para que tu sitio siempre funcione perfecto y seguro.',
          price: 'Desde $900 MXN/mes',
        },
      ],
    },
    process: {
      label: 'Proceso',
      heading: 'Cómo',
      heading_accent: 'trabajo',
      subtitle: 'Un proceso claro, sin sorpresas ni costos ocultos.',
      steps: [
        {
          number: '01',
          title: 'Descubrimiento',
          description: 'Hablamos sobre tu negocio y objetivos. Entiendo qué necesitas antes de escribir una línea de código.',
        },
        {
          number: '02',
          title: 'Propuesta',
          description: 'Propuesta clara con alcance, precio y tiempos de entrega. Sin letra chica.',
        },
        {
          number: '03',
          title: 'Desarrollo',
          description: 'Construyo con herramientas modernas e IA. Actualizaciones constantes para que veas el avance.',
        },
        {
          number: '04',
          title: 'Entrega',
          description: 'Sitio en producción. Te entrego accesos y una guía rápida para que tengas el control total.',
        },
        {
          number: '05',
          title: 'Soporte',
          description: 'Seguimos en contacto. Ajustes, actualizaciones y mantenimiento para que tu sitio nunca se quede atrás.',
        },
      ],
    },
    projects: {
      label: 'Proyectos',
      heading: 'Proyectos',
      heading_accent: 'Recientes',
      subtitle: 'Proyectos reales, código real.',
      status_live: 'En línea',
      status_building: 'En desarrollo',
      status_planned: 'Planeado',
      items: [
        {
          title: 'Portafolio Web',
          description: 'Este portafolio — construido con Astro y asistencia de IA. Tema oscuro, glassmorphism y animaciones modernas.',
          tags: ['Astro', 'CSS', 'IA'],
          status: 'live' as const,
          link: '/',
        },
        {
          title: 'Dani Coding',
          description: 'Taller automotriz que recibe citas por WhatsApp desde su sitio — sin llamadas perdidas, sin intermediarios. Clientes de CDMX y área metropolitana.',
          tags: ['Astro', 'CSS', 'WhatsApp'],
          status: 'live' as const,
          link: 'https://www.dani-coding.com/',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      heading: 'Trabajemos',
      heading_accent: 'juntos',
      subtitle: 'Disponible para proyectos freelance, colaboraciones y oportunidades interesantes.',
      form_name: 'Nombre',
      form_email: 'Correo electrónico',
      form_message: 'Mensaje',
      form_submit: 'Enviar mensaje',
      form_success: '¡Enviado! Te respondo en menos de 24 horas.',
      form_error: 'Algo salió mal. Escríbeme por WhatsApp.',
      or: 'o también',
      github_cta: 'GitHub',
    },
    footer: {
      built_with: 'Hecho con',
      and_ai: '& IA',
    },
  },

  en: {
    meta: {
      title: 'Daniel Malpica — AI-Powered Developer',
      description: 'AI-powered web developer building modern, fast web experiences with Astro, React, and Python.',
    },
    nav: {
      about: 'About',
      services: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for work',
      title_line1: 'Daniel',
      title_line2: 'Malpica',
      subtitle: 'AI-Powered Developer',
      tagline: "I don't just write code —\nI architect solutions with AI.",
      cta_primary: 'View My Work',
      cta_github: 'GitHub',
    },
    about: {
      label: 'About me',
      heading: 'Developer with an',
      heading_accent: 'AI-first mindset',
      p1: "I'm Daniel, a 26-year-old self-taught developer with a passion for building modern web experiences. I leverage AI to write better code, faster.",
      p2: 'Mastering HTML, CSS, JavaScript, React, and Python — using AI tools to deliver results that would normally take months in just weeks.',
      stat1_number: 'AI-first',
      stat1_label: 'Development approach',
      stat2_number: 'Full Stack',
      stat2_label: 'Learning path',
      stat3_number: 'Remote',
      stat3_label: 'Work preference',
    },
    services: {
      label: 'Tech Stack',
      heading: 'Tools I',
      heading_accent: 'work with',
      subtitle: "Technologies I'm learning and applying to build real projects.",
    },
    process: {
      label: 'Process',
      heading: 'How I',
      heading_accent: 'work',
      subtitle: 'A clear process, no surprises.',
      steps: [
        {
          number: '01',
          title: 'Discovery',
          description: 'We talk about your business and goals. I understand what you need before writing a single line of code.',
        },
        {
          number: '02',
          title: 'Proposal',
          description: 'Clear proposal with scope, price, and delivery timeline. No hidden fees.',
        },
        {
          number: '03',
          title: 'Development',
          description: 'I build with modern tools and AI. Constant updates so you see the progress.',
        },
        {
          number: '04',
          title: 'Delivery',
          description: "Site goes live. I hand over access and walk you through everything so you're in full control.",
        },
        {
          number: '05',
          title: 'Support',
          description: 'We stay in touch after launch. Adjustments, updates, and maintenance so your site never falls behind.',
        },
      ],
    },
    projects: {
      label: 'Work',
      heading: 'Selected',
      heading_accent: 'Projects',
      subtitle: 'Real projects, real code. Growing as I build.',
      status_live: 'Live',
      status_building: 'Building',
      status_planned: 'Planned',
      items: [
        {
          title: 'Portfolio Website',
          description: 'This portfolio — built with Astro and AI assistance. Dark glassmorphism theme, CSS animations, fully responsive.',
          tags: ['Astro', 'CSS', 'AI-assisted'],
          status: 'live' as const,
          link: '/en/',
        },
        {
          title: 'Dani Coding',
          description: 'Automotive shop that books appointments via WhatsApp directly from their site — no missed calls, no friction. Clients across CDMX metro area.',
          tags: ['Astro', 'CSS', 'WhatsApp'],
          status: 'live' as const,
          link: 'https://www.dani-coding.com/',
        },
      ],
    },
    contact: {
      label: 'Contact',
      heading: "Let's",
      heading_accent: 'work together',
      subtitle: 'Available for freelance projects, collaborations, and interesting opportunities.',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      form_submit: 'Send message',
      form_success: "Sent! I'll get back to you within 24 hours.",
      form_error: 'Something went wrong. Message me on WhatsApp instead.',
      or: 'or',
      github_cta: 'GitHub',
    },
    footer: {
      built_with: 'Built with',
      and_ai: '& AI',
    },
  },
} as const;

export type Lang = keyof typeof ui;
export type UI = typeof ui;
