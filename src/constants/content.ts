export interface PersonalInfo {
  name: string
  role: string
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
  role: "Tech Lead & Full-Stack Software Engineer",
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
  resume: 'https://portfolio.luisefarfan.com/cv-en.pdf'
}

export const aboutContent: AboutContent = {
  en: "I'm a tech lead and full-stack software engineer with over 5 years of experience building scalable, high-impact web applications. I specialize in JavaScript frameworks like React, Node.js, and Next.js, and I have a strong track record of delivering clean, efficient, and secure solutions across complex systems. In my current role, I lead development teams, oversee architecture decisions, conduct code reviews, and mentor developers to ensure both technical excellence and team growth. I collaborate closely with stakeholders to align technology with business goals, driving measurable value through smart, scalable solutions. Whether building high-performance APIs, optimizing user experiences for large-scale platforms, or leading cross-functional teams, I bring a balance of hands-on technical expertise and a strong product mindset. I'm always looking for opportunities to help teams innovate and turn ideas into reliable, maintainable software.",
  es: "Soy líder técnico y desarrollador full-stack con más de 5 años de experiencia creando aplicaciones web escalables y de alto impacto. Me especializo en frameworks de JavaScript como React, Node.js y Next.js, con un historial comprobado en entregar soluciones limpias, eficientes y seguras en sistemas complejos. En mi rol actual, lidero equipos de desarrollo, tomo decisiones de arquitectura, reviso código y doy mentoría a otros desarrolladores para garantizar calidad técnica y crecimiento del equipo. Estoy en constante comunicación con las partes interesadas para alinear la tecnología con los objetivos del negocio, generando valor real a través de soluciones escalables e inteligentes. Ya sea construyendo APIs de alto rendimiento, mejorando la experiencia de usuario en plataformas de gran escala o liderando equipos multidisciplinarios, combino mi experiencia técnica con una fuerte visión de producto. Siempre busco oportunidades para innovar y convertir ideas en software confiable y mantenible.",
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
