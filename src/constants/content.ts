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
  role: string
  description: string
  technologies?: string[]
}

export interface Project {
  name: string
  description: string
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
    company: "TELUS International",
    period: "2022 - Today",
    role: "Fullstack Developer",
    description:
      "Fullstack Developer using React.js, Express.js and Next.js. Maintaining TELUS Support page, leading projects and bug fixes. Major project: complete migration from React v12 to NextJS with React v18.",
    technologies: ["React.js", "Express.js", "Next.js", "React 18"],
  },
  {
    company: "Homeland S.A.",
    period: "2019 - 2021",
    role: "Fullstack Web Developer",
    description:
      "Fullstack Web Developer using Symfony, HTML, Javascript, CSS, React, Docker and SQL. Worked on 2 large projects from requirements gathering to deployment.",
    technologies: ["Symfony", "HTML", "JavaScript", "CSS", "React", "Docker", "SQL"],
  },
  {
    company: "Freelance",
    period: "2019 - Present",
    role: "Full-Stack Developer",
    description:
      "Multiple web application projects for private companies and small businesses, handling the complete development lifecycle.",
    technologies: ["Various"],
  },
]

export const projects: Project[] = [
  {
    name: "Mayacert S.A.",
    description: "Corporate website for certification company",
    technologies: ["Symfony", "TailwindCSS", "PostgreSQL"],
    url: "https://www.mayacert.com",
  },
  {
    name: "TELUS Support",
    description: "Customer support platform for TELUS",
    technologies: ["Next.js", "React 18", "Redux"],
    url: "https://www.telus.com/support",
  },
  {
    name: "Koleyo",
    description: "Educational management system",
    technologies: ["React", "Node.js", "PostgreSQL"],
    url: "https://www.koleyo.com",
  },
  {
    name: "Priscilla Bianchi",
    description: "Artist e-commerce site",
    technologies: ["Next.js", "Stripe", "TailwindCSS"],
    url: "https://www.priscillabianchi.net",
  },
  {
    name: "Carolina Mendez",
    description: "Wedding planner landing page",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    url: "https://www.carolinamendez.com.gt",
  },
  {
    name: "Servpresa",
    description: "Industrial security company site",
    technologies: ["Next.js", "TailwindCSS", "PostgreSQL"],
    url: "https://www.servpresa.com.gt",
  },
  {
    name: "Squadra",
    description: "HR company landing page",
    technologies: ["React", "TailwindCSS", "Node.js"],
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
