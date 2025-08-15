import { CDN_URL } from "@constants/index";

export interface PersonalInfo {
  name: string
  role: {
    en: string
    es: string
  }
  heroContent: {
    en: string
    es: string
  }
  experience: string
  contact: {
    email: string
    phone: string
    linkedin: string
    github: string
    whatsapp: {
      es: string
      en: string
    }
  }
  resume: string
}

export interface AboutContent {
  en: string
  es: string
}

export interface Experience {
  company: string
  period: string
  role: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  technologies?: string[]
}

export interface Project {
  name: string
  description: {
    en: string
    es: string
  }
  technologies: string[]
  url?: string
  github?: string
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "database" | "devops" | "tools" | "soft"
  level: number
  years?: number
}

export const personalInfo: PersonalInfo = {
  name: "Luis Farfan",
  role: {
    en: "Tech Lead & Software Engineer",
    es: "Líder Técnico & Ingeniero de Software"
  },
  heroContent: {
    en: "Leading the delivery of high-impact, scalable software solutions through technical excellence, clean architecture, and a dedicated focus on solving real business challenges with measurable results.",
    es: "Liderando el desarrollo de soluciones tecnológicas escalables y de alto impacto, mediante excelencia técnica, arquitectura limpia y un enfoque centrado en resolver desafíos empresariales reales con resultados medibles."
  },
  experience: "6+",
  contact: {
    email: "luisefarfan.dev@gmail.com",
    phone: "+50242980332",
    linkedin: "https://www.linkedin.com/in/luisefarfan/",
    github: "https://github.com/luisefarfan",
    whatsapp: {
      en: 'https://wa.link/ohwjr9',
      es: 'https://wa.link/b3lr25'
    }
  },
  resume: `${CDN_URL}/cv-en.pdf`
}

export const aboutContent: AboutContent = {
  en: `I’m a Software Engineer and Technical Lead from Guatemala with over 6 years of experience delivering full-stack web and mobile solutions that scale. I began my career building a startup from the ground up, and later joined TELUS Digital, where I progressed into a leadership role—currently managing cross-functional teams of developers, QA, and content managers. I thrive in fast-paced environments, driving projects forward with clear communication, technical direction, and a strong focus on user impact.

My core stack includes React, Node.js, Astro, and Next.js, and I’ve led the development of AI- powered tools, SEO-optimized platforms, and revenue - driving B2B apps.I understand how to balance business goals with user needs, ensuring that every feature built adds measurable value.Beyond my full - time role, I also work as a freelancer, helping companies turn concepts into polished, production - ready software.If you're looking for someone who combines strong engineering fundamentals with product thinking—I can help you build what’s next.`,
  es: `Soy Ingeniero de Software y Líder Técnico de Guatemala con más de 6 años de experiencia desarrollando soluciones web y móviles de alto impacto. Inicié creando una startup desde cero, y luego me integré a TELUS Digital, donde crecí hasta liderar equipos multidisciplinarios. Actualmente gestiono múltiples proyectos simultáneos, asegurando una comunicación clara, liderazgo técnico sólido y un enfoque constante en el valor para el usuario.

Trabajo con tecnologías como React, Node.js, Astro y Next.js, y he liderado el desarrollo de herramientas con IA, sitios web optimizados para SEO y plataformas B2B que generan ingresos reales. Combino visión de negocio con pensamiento técnico, asegurando que cada desarrollo tenga un propósito claro. Además, como freelance, he ayudado a transformar ideas en productos listos para producción. Si buscas a alguien que mezcle excelencia técnica con mentalidad de producto, estoy listo para construir lo que sigue.`,
}

export const experiences: Experience[] = [
  {
    company: "TELUS Digital",
    period: "2024 - Today",
    role: {
      en: "Technical Lead",
      es: "Líder Técnico"
    },
    description:
    {
      en: "Leading a cross-functional team responsible for the TELUS Support web platform (Next.js/TypeScript), a B2B ticketing system, and the TELUS Support React Native app. Own software & cloud architecture (GCP), review pull requests, drive code quality (SOLID, Clean Code), pair program, optimize performance, and oversee CI/CD (GitHub Actions), infrastructure & DevOps (Docker, Redis). Coordinate with Content Managers using Contentful to deliver scalable, content-driven features.",
      es: "Liderando un equipo multidisciplinario encargado de la plataforma web TELUS Support (Next.js/TypeScript), el sistema de tickets B2B y la app móvil TELUS Support en React Native. Responsable de arquitectura de software y nube (GCP), revisión de pull requests, calidad de código (SOLID, Clean Code), pair programming, optimización de rendimiento y administración de CI/CD (GitHub Actions), infraestructura y DevOps (Docker, Redis). Coordinación con Content Managers usando Contentful para entregar funcionalidades escalables orientadas a contenido."
    },
    technologies: ["Next.js", "TypeScript", "GCP", "Software Architecture", "GitHub Actions", "Redis", "Docker", "Contentful", "Leadership", "Product Management"],
  },
  {
    company: "TELUS Digital",
    period: "2023 - 2024",
    role: {
      en: "Senior Fullstack Developer",
      es: "Desarrollador Fullstack Senior"
    },
    description:
    {
      en: "Led feature delivery across TELUS Support platform, B2B ticketing system and early stages of the React Native Support app. Mentored junior developers, led medium-sized projects end-to-end, enforced engineering standards (SOLID, DRY, Clean Code).",
      es: "Lideré la entrega de funcionalidades para la plataforma TELUS Support, el sistema de tickets B2B y las primeras etapas de la app de React Native. Apoyé a desarrolladores junior, dirigí proyectos medianos por completo, promoví estándares de ingeniería (SOLID, DRY, Clean Code)."
    },
    technologies: ["Next.js", "TypeScript", "React Native", "Express.js", "Redis", "Docker", "Contentful", "Mentorship", "GitHub Actions"],
  },
  {
    company: "TELUS Digital",
    period: "2022 - 2023",
    role: {
      en: "Fullstack Developer",
      es: "Desarrollador Fullstack"
    },
    description: {
      en: "Implemented new user-facing features and backend APIs for the TELUS Support site. Fixed bugs, wrote tests, improved performance, integrated Contentful content models, and introduced incremental quality improvements.",
      es: "Implementé nuevas funcionalidades de cara al usuario y APIs para el sitio de TELUS Support. Corregí bugs, escribí pruebas, mejoré rendimiento, integré modelos de contenido de Contentful, e introduje mejoras para mejorar la calidad del código."
    },
    technologies: ["Next.js", "TypeScript", "React", "Express.js", "Redis", "Contentful", "Docker", "Redux"],
  },
  {
    company: "Homeland S.A.",
    period: "2019 - 2021",
    role: {
      en: "Fullstack Web Developer",
      es: "Desarrollador Web Fullstack"
    },
    description: {
      en: "Fullstack Web Developer using Symfony, HTML, Javascript, CSS, React, Docker and SQL. Worked on 2 large projects from requirements gathering, database design, to deployment.",
      es: "Desarrollador Web Fullstack utilizando Symfony, HTML, Javascript, CSS, React, Docker y SQL. Trabajé en 2 grandes proyectos desde la recopilación de requerimientos, diseño de base de datos, hasta la implementación."
    },
    technologies: ["Symfony", "HTML", "JavaScript", "CSS", "React", "Docker", "SQL"],
  },
  {
    company: "Freelance",
    period: "2019 - Present",
    role: {
      en: "Full-Stack Developer",
      es: "Desarrollador Full-Stack"
    },
    description: {
      en: "I have worked on multiple web application projects for private companies and small businesses, handling the complete development lifecycle.",
      es: "He trabajado en múltiples proyectos de aplicaciones web para empresas privadas y pequeñas empresas, gestionando todo el ciclo de vida del desarrollo."
    },
    technologies: ["Various"],
  },
]

export const projects: Project[] = [
  {
    name: "Proquimia Industrial",
    description: {
      en: "Website and marketing campaign for pest control company in Guatemala",
      es: "Sitio web y campaña de marketing para empresa de fumigación en Guatemala"
    },
    technologies: ["Astro", "TailwindCSS", "No-SQL", "Marketing", "Google Ads", "Vercel", "SEO"],
    url: "https://www.proquimiaindustrial.com",
  },
  {
    name: "Mayacert S.A.",
    description: {
      en: "Website with custom content management system for guatemalan certification company",
      es: "Sitio web con sistema de gestión de contenido personalizado para empresa de certificación guatemalteca"
    },
    technologies: ["PHP", "Symfony", "TailwindCSS", "PostgreSQL", "Linux"],
    url: "https://www.mayacert.com",
  },
  {
    name: "TELUS Support AI Tool",
    description: {
      en: "AI-powered support tool for TELUS customer service",
      es: "Herramienta de soporte impulsada por IA para el servicio al cliente de TELUS"
    },
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Contentful", "AI"],
    url: "https://www.telus.com/support/ai",
  },
  {
    name: "TELUS Support",
    description: {
      en: "Customer support platform for TELUS",
      es: "Plataforma de soporte al cliente para TELUS"
    },
    technologies: ["Next.js", "React", "Redux", "TypeScript", "Node.js", "Contentful", "GCP"],
    url: "https://www.telus.com/support",
  },
  {
    name: "TELUS Business Requests",
    description: {
      en: "TELUS B2B Customer platform to create requests and complaints",
      es: "Plataforma B2B de TELUS para crear solicitudes y quejas"
    },
    technologies: ["Next.js", "React", "Redux", "TypeScript", "Node.js", "Contentful", "GCP"],
    url: "https://www.telus.com/business/my-telus/support-requests",
  },
  {
    name: "MyTELUS App - Support",
    description: {
      en: "App version of the TELUS Support website",
      es: "Versión móvil del sitio web de soporte de TELUS"
    },
    technologies: ["Expo", "React Native", "Tanstack Query", "TypeScript", "Node.js", "Contentful", "Firebase"]
  },
  {
    name: "Koleyo",
    description: {
      en: "Educational management system",
      es: "Sistema de gestión educativa"
    },
    technologies: ["React", "Node.js", "PostgreSQL", "Symfony", "PHP"],
    url: "https://www.koleyo.com",
  },
  {
    name: "Priscilla Bianchi",
    description: {
      en: "Guatemalan artist e-commerce site",
      es: "Sitio de comercio electrónico para una artista guatemalteca"
    },
    technologies: ["PostgreSQL", "Symfony", "PHP"],
    url: "https://www.priscillabianchi.net",
  },
  {
    name: "Carolina Mendez",
    description: {
      en: "Wedding planner landing page",
      es: "Página web para planificadora de bodas"
    },
    technologies: ["PostgreSQL", "Symfony", "PHP"],
    url: "https://www.carolinamendez.com.gt",
  },
  {
    name: "Servpresa",
    description: {
      en: "Industrial security company site",
      es: "Sitio web de empresa de seguridad industrial"
    },
    technologies: ["PostgreSQL", "Symfony", "PHP"],
    url: "https://www.servpresa.com.gt",
  },
  {
    name: "Squadra",
    description: {
      en: "HR company landing page",
      es: "Página web para empresa de recursos humanos"
    },
    technologies: ["HTML", "CSS"],
    url: "https://www.squadra.com.gt",
  },
]

export const skills: Skill[] = [
  { name: "JavaScript", category: "frontend", level: 95, years: 5 },
  { name: "TypeScript", category: "frontend", level: 80, years: 2 },
  { name: "React", category: "frontend", level: 90, years: 3 },
  { name: "TailwindCSS", category: "frontend", level: 90, years: 2 },
  { name: "Next.js", category: "frontend", level: 85, years: 2 },
  { name: "Redux", category: "frontend", level: 75, years: 1 },
  { name: "Node.js", category: "backend", level: 85, years: 3 },
  { name: "PostgreSQL", category: "database", level: 80, years: 3 },
  { name: "MySQL", category: "database", level: 75, years: 3 },
  { name: "SQLite", category: "database", level: 75, years: 3 },
  { name: "MongoDB", category: "database", level: 75, years: 3 },
  { name: "Google Cloud Platform", category: "devops", level: 75, years: 3 },
  { name: "AWS", category: "devops", level: 75, years: 3 },
  { name: "GitHub Actions", category: "devops", level: 75, years: 3 },
  { name: "Docker", category: "tools", level: 70, years: 2 },
  { name: "Git", category: "tools", level: 95, years: 10 },
  { name: "Figma", category: "tools", level: 95, years: 3 },
  { name: "Symfony", category: "backend", level: 80, years: 3 },
  { name: "PHP", category: "backend", level: 75, years: 3 },
  { name: "Team Work", category: "soft", level: 95 },
  { name: "Leadership", category: "soft", level: 90 },
  { name: "Responsibility", category: "soft", level: 95 },
  { name: "Excellence", category: "soft", level: 90 },
]

export const techStack = [
  "WEB",
  "PROGRAMMING",
  "DEVELOPMENT",
  "JAVASCRIPT",
  "CSS",
  "FIGMA",
  "GIT",
  "HTML",
  "REACT",
  "NODE.JS",
  "TYPESCRIPT",
  "NEXT.JS",
  "SYMFONY",
  "POSTGRESQL",
  "DOCKER",
  "TAILWINDCSS",
]
