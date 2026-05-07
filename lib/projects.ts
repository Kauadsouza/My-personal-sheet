export type Project = {
  slug: string;
  title: string;
  year: number;
  role: { "pt-BR": string; en: string; es: string };
  stack: string[];
  summary: { "pt-BR": string; en: string; es: string };
  challenge: { "pt-BR": string; en: string; es: string };
  solution: { "pt-BR": string; en: string; es: string };
  results: { label: { "pt-BR": string; en: string; es: string }; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  coverImage?: string;
};

export const projects: Project[] = [
  {
    slug: "null-forge",
    title: "Null Forge",
    year: 2025,
    role: {
      "pt-BR": "Fundador & Desenvolvedor",
      en: "Founder & Developer",
      es: "Fundador y Desarrollador",
    },
    stack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    summary: {
      "pt-BR": "Ecossistema educacional de tecnologia criado para democratizar o ensino de programação no Brasil.",
      en: "Educational technology ecosystem created to democratize programming education in Brazil.",
      es: "Ecosistema educativo de tecnología creado para democratizar la enseñanza de programación en Brasil.",
    },
    challenge: {
      "pt-BR": "O ensino de programação no Brasil ainda é fragmentado, caro e desconectado da realidade do mercado. A maioria dos cursos ensina teoria sem aplicação prática real.",
      en: "Programming education in Brazil is still fragmented, expensive, and disconnected from market reality. Most courses teach theory without real practical application.",
      es: "La enseñanza de programación en Brasil sigue siendo fragmentada, costosa y desconectada de la realidad del mercado. La mayoría de los cursos enseñan teoría sin aplicación práctica real.",
    },
    solution: {
      "pt-BR": "A Null Forge foi criada como uma plataforma que conecta aprendizado prático, comunidade e projetos reais. Conteúdo produzido por desenvolvedores ativos, não por professores distantes do mercado.",
      en: "Null Forge was created as a platform connecting practical learning, community, and real projects. Content produced by active developers, not professors distant from the market.",
      es: "Null Forge fue creada como una plataforma que conecta el aprendizaje práctico, la comunidad y los proyectos reales. Contenido producido por desarrolladores activos, no por profesores alejados del mercado.",
    },
    results: [
      {
        label: { "pt-BR": "Fundação", en: "Founded", es: "Fundación" },
        value: "2025",
      },
      {
        label: { "pt-BR": "Stack moderna", en: "Modern stack", es: "Stack moderna" },
        value: "100%",
      },
    ],
    featured: true,
    coverImage: "/images/projects/null-forge.jpg",
  },
  {
    slug: "the-kaden",
    title: "The Kaden",
    year: 2025,
    role: {
      "pt-BR": "Cofundador & Desenvolvedor (50%)",
      en: "Co-founder & Developer (50%)",
      es: "Cofundador y Desarrollador (50%)",
    },
    stack: ["Node.js", "TypeScript", "WhatsApp API", "React", "PostgreSQL"],
    summary: {
      "pt-BR": "SaaS de automação WhatsApp para negócios locais. Atendimento automatizado, campanhas de mensagens e CRM integrado.",
      en: "WhatsApp automation SaaS for local businesses. Automated service, message campaigns, and integrated CRM.",
      es: "SaaS de automatización de WhatsApp para negocios locales. Atención automatizada, campañas de mensajes y CRM integrado.",
    },
    challenge: {
      "pt-BR": "Negócios locais perdem clientes por demora no atendimento ou falta de follow-up. As soluções existentes são caras ou complexas demais para pequenas empresas.",
      en: "Local businesses lose customers due to slow responses or lack of follow-up. Existing solutions are too expensive or complex for small businesses.",
      es: "Los negocios locales pierden clientes por la lentitud en la atención o la falta de seguimiento. Las soluciones existentes son demasiado costosas o complejas para las pequeñas empresas.",
    },
    solution: {
      "pt-BR": "Uma plataforma SaaS acessível que automatiza o atendimento no WhatsApp com fluxos personalizáveis, respostas automáticas e gestão de contatos integrada.",
      en: "An accessible SaaS platform that automates WhatsApp service with customizable flows, automatic responses, and integrated contact management.",
      es: "Una plataforma SaaS accesible que automatiza la atención en WhatsApp con flujos personalizables, respuestas automáticas y gestión de contactos integrada.",
    },
    results: [
      {
        label: { "pt-BR": "Cofundador", en: "Co-founder", es: "Cofundador" },
        value: "50%",
      },
      {
        label: { "pt-BR": "Lançamento", en: "Launch", es: "Lanzamiento" },
        value: "2025",
      },
    ],
    featured: true,
    coverImage: "/images/projects/the-kaden.jpg",
  },
  {
    slug: "finance-card",
    title: "Finance Card",
    year: 2024,
    role: {
      "pt-BR": "Desenvolvedor Full Stack",
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    stack: ["React", "TypeScript", "Node.js", "CSS Modules"],
    summary: {
      "pt-BR": "Banco digital educacional com interface moderna, gestão de saldo, histórico de transações e cartões virtuais.",
      en: "Educational digital bank with a modern interface, balance management, transaction history, and virtual cards.",
      es: "Banco digital educativo con interfaz moderna, gestión de saldo, historial de transacciones y tarjetas virtuales.",
    },
    challenge: {
      "pt-BR": "Criar uma interface bancária completa e realista para fins educacionais, com UX de produto profissional.",
      en: "Create a complete and realistic banking interface for educational purposes, with professional product UX.",
      es: "Crear una interfaz bancaria completa y realista con fines educativos, con UX de producto profesional.",
    },
    solution: {
      "pt-BR": "Aplicação React com design system próprio, animações fluidas, gestão de estado local e uma experiência de usuário que se aproxima de fintech real.",
      en: "React application with its own design system, fluid animations, local state management, and a user experience close to a real fintech.",
      es: "Aplicación React con sistema de diseño propio, animaciones fluidas, gestión de estado local y una experiencia de usuario próxima a una fintech real.",
    },
    results: [
      {
        label: { "pt-BR": "Interface completa", en: "Full interface", es: "Interfaz completa" },
        value: "100%",
      },
    ],
    githubUrl: "https://github.com/Kauadsouza/Finance-Card",
    featured: true,
    coverImage: "/images/projects/finance-card.jpg",
  },
  {
    slug: "hlts-landing-pages",
    title: "HLTS — Landing Pages",
    year: 2024,
    role: {
      "pt-BR": "Desenvolvedor Front-end",
      en: "Front-end Developer",
      es: "Desarrollador Front-end",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    summary: {
      "pt-BR": "Landing pages com captação de leads para a HLTS Incorporadora. Foco em conversão e carregamento rápido.",
      en: "Lead generation landing pages for HLTS Incorporadora. Focused on conversion and fast loading.",
      es: "Landing pages de captación de leads para HLTS Incorporadora. Enfocadas en conversión y carga rápida.",
    },
    challenge: {
      "pt-BR": "A incorporadora precisava de páginas de alta conversão para campanhas de captação de leads imobiliários.",
      en: "The developer needed high-conversion pages for real estate lead generation campaigns.",
      es: "La empresa inmobiliaria necesitaba páginas de alta conversión para campañas de captación de leads inmobiliarios.",
    },
    solution: {
      "pt-BR": "Landing pages otimizadas com copy persuasivo, CTAs estratégicos e carregamento ultra-rápido.",
      en: "Optimized landing pages with persuasive copy, strategic CTAs, and ultra-fast loading.",
      es: "Landing pages optimizadas con copy persuasivo, CTAs estratégicos y carga ultrarrápida.",
    },
    results: [
      {
        label: { "pt-BR": "Páginas entregues", en: "Pages delivered", es: "Páginas entregadas" },
        value: "4+",
      },
    ],
    githubUrl: "https://github.com/Kauadsouza/Projetos-de-Desenvolvimento-Web-na-HLTS-Incorporadora",
    featured: false,
    coverImage: "/images/projects/hlts.jpg",
  },
  {
    slug: "corretores-pacaembu",
    title: "Corretores Pacaembu",
    year: 2024,
    role: {
      "pt-BR": "Desenvolvedor Full Stack",
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    summary: {
      "pt-BR": "Sistema interno para corretores de imóveis do Pacaembu, com gestão de propriedades e leads.",
      en: "Internal system for Pacaembu real estate agents, with property and lead management.",
      es: "Sistema interno para agentes inmobiliarios de Pacaembu, con gestión de propiedades y leads.",
    },
    challenge: {
      "pt-BR": "Os corretores usavam planilhas e anotações para gerir propriedades. Precisavam de um sistema centralizado.",
      en: "Agents used spreadsheets and notes to manage properties. They needed a centralized system.",
      es: "Los agentes usaban hojas de cálculo y notas para gestionar propiedades. Necesitaban un sistema centralizado.",
    },
    solution: {
      "pt-BR": "Sistema web com CRUD completo de propriedades, gestão de clientes e geração de relatórios simples.",
      en: "Web system with complete property CRUD, client management, and simple report generation.",
      es: "Sistema web con CRUD completo de propiedades, gestión de clientes y generación de informes simples.",
    },
    results: [
      {
        label: { "pt-BR": "Sistema entregue", en: "System delivered", es: "Sistema entregado" },
        value: "2024",
      },
    ],
    githubUrl: "https://github.com/Kauadsouza/SITES-CORRETORES-PACAEMBU",
    featured: false,
    coverImage: "/images/projects/pacaembu.jpg",
  },
  {
    slug: "simulador-banco-java",
    title: "Simulador Banco Java",
    year: 2024,
    role: {
      "pt-BR": "Desenvolvedor",
      en: "Developer",
      es: "Desarrollador",
    },
    stack: ["Java", "POO"],
    summary: {
      "pt-BR": "Simulador bancário completo em Java puro com orientação a objetos avançada. Herança, polimorfismo, interfaces e encapsulamento.",
      en: "Complete banking simulator in pure Java with advanced object-oriented design. Inheritance, polymorphism, interfaces, and encapsulation.",
      es: "Simulador bancario completo en Java puro con orientación a objetos avanzada. Herencia, polimorfismo, interfaces y encapsulamiento.",
    },
    challenge: {
      "pt-BR": "Demonstrar domínio completo de Programação Orientada a Objetos com Java através de um projeto prático real.",
      en: "Demonstrate complete mastery of Object-Oriented Programming with Java through a real practical project.",
      es: "Demostrar dominio completo de la Programación Orientada a Objetos con Java a través de un proyecto práctico real.",
    },
    solution: {
      "pt-BR": "Simulador com contas correntes, poupança e investimento, transações, extratos e hierarquia de classes completa.",
      en: "Simulator with checking, savings, and investment accounts, transactions, statements, and complete class hierarchy.",
      es: "Simulador con cuentas corrientes, de ahorro e inversión, transacciones, estados de cuenta y jerarquía de clases completa.",
    },
    results: [
      {
        label: { "pt-BR": "Cobertura POO", en: "OOP coverage", es: "Cobertura POO" },
        value: "100%",
      },
    ],
    githubUrl: "https://github.com/Kauadsouza/simulador-banco-java",
    featured: false,
    coverImage: "/images/projects/java-bank.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
