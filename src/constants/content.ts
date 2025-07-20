export interface PersonalInfo {
  name: string
  role: string
  experience: string
  contact: {
    email: string
    phone: string
    linkedin: string
    github: string
  }
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
  technologies: string[]
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
  years?: number
  category: "frontend" | "backend" | "database" | "tools" | "soft"
}

export const personalInfo: PersonalInfo = {
  name: "Luis Farfan",
  role: "Tech Lead & Full-Stack Software Engineer",
  experience: "5+ years",
  contact: {
    email: "luisefarfan.dev@gmail.com",
    phone: "+50242980332",
    linkedin: "https://www.linkedin.com/in/luisefarfan/",
    github: "https://github.com/luisefarfan",
  },
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
      "Using React.js, Express.js and Next.js. Maintaining TELUS Support page, leading projects and bug fixes. Major project: complete migration from React v12 to NextJS with React v18.",
    technologies: ["React.js", "Express.js", "Next.js", "React 18"],
  },
  {
    company: "Homeland S.A.",
    period: "2019 - 2021",
    role: "Fullstack Web Developer",
    description:
      "Using Symfony, HTML, Javascript, CSS, React, Docker and SQL. Worked on 2 large projects from requirements gathering to deployment.",
    technologies: ["Symfony", "React", "Docker", "SQL", "HTML", "CSS", "JavaScript"],
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
    technologies: ["React", "Stripe", "Node.js"],
    url: "https://www.priscillabianchi.net",
  },
  {
    name: "Carolina Mendez",
    description: "Wedding planner landing page",
    technologies: ["Next.js", "TailwindCSS"],
    url: "https://www.carolinamendez.com.gt",
  },
  {
    name: "Servpresa",
    description: "Industrial security company site",
    technologies: ["React", "Node.js"],
    url: "https://www.servpresa.com.gt",
  },
  {
    name: "Squadra",
    description: "HR company landing page",
    technologies: ["Next.js", "TailwindCSS"],
    url: "https://www.squadra.com.gt",
  },
]

export const skills: Skill[] = [
  { name: "JavaScript", years: 5, category: "frontend" },
  { name: "React", years: 3, category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Redux", years: 1, category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Symfony", years: 3, category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "SQL", category: "database" },
  { name: "Docker", category: "tools" },
  { name: "Team Work", category: "soft" },
  { name: "Leadership", category: "soft" },
  { name: "Responsibility", category: "soft" },
  { name: "Excellence", category: "soft" },
]

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello",
      intro: "I'm Luis",
      cta1: "Get a Project",
      cta2: "My Resume",
    },
    about: {
      title: "About me",
      stats: {
        projects: "Completed Projects",
        satisfaction: "Client Satisfaction",
        experience: "Years of Experience",
      },
    },
    experience: {
      title: "Experience",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      viewGithub: "View GitHub",
    },
    skills: {
      title: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools",
        soft: "Soft Skills",
      },
    },
    contact: {
      title: "Have a project?",
      subtitle: "Let's talk!",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola",
      intro: "Soy Luis",
      cta1: "Obtener Proyecto",
      cta2: "Mi CV",
    },
    about: {
      title: "Acerca de mí",
      stats: {
        projects: "Proyectos Completados",
        satisfaction: "Satisfacción del Cliente",
        experience: "Años de Experiencia",
      },
    },
    experience: {
      title: "Experiencia",
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver Proyecto",
      viewGithub: "Ver GitHub",
    },
    skills: {
      title: "Habilidades",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Base de Datos",
        tools: "Herramientas",
        soft: "Habilidades Blandas",
      },
    },
    contact: {
      title: "¿Tienes un proyecto?",
      subtitle: "¡Hablemos!",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar",
      },
    },
  },
}
