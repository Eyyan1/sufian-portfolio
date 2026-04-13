export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  architecture: string;
  socValue: string;
  techStack: string[];
  highlights: string[];
  metrics: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  note: string;
  image: string;
  featured?: boolean;
};

export const profile = {
  name: "Muhammad Sufian Bin Che Saad",
  role: "SOC Analyst | Security+ Certified | Cybersecurity-Focused Software Engineering Graduate",
  badge: "Currently targeting SOC Analyst roles",
  value:
    "I build security-oriented systems and hands-on technical projects focused on alert triage, incident workflows, monitoring, and reliable deployment.",
  email: "muhammadsufian002@gmail.com",
  location: "Kuala Lumpur, Malaysia",
  linkedin: "https://www.linkedin.com/in/muhammad-sufian-che-saad-76b731362",
  github: "https://github.com/Eyyan1",
  resumeUrl: "./SOC_muhd_sufian_resume.pdf",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const aboutSummary = [
  "Fresh Software Engineering graduate focused on SOC operations, threat detection, incident response, and the reliable systems that support security teams.",
  "Hands-on exposure spans server monitoring, log checks, DNS, SSL/TLS, Nginx deployments, cloud environments, rollback documentation, and operational troubleshooting.",
  "I combine software engineering fundamentals with a security mindset: building structured workflows, reading system signals, documenting changes, and designing tools that help analysts move from alert to action.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Security Operations",
    skills: [
      "SOC workflow",
      "Alert triage",
      "Incident response basics",
      "Log analysis",
      "RBAC",
      "SSL/TLS",
      "DNS",
      "System monitoring",
      "Wazuh",
      "Microsoft Sentinel",
      "Splunk",
      "Wireshark",
    ],
  },
  {
    title: "Programming",
    skills: ["Java", "Python", "PHP", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "FastAPI", "React", "Next.js"],
  },
  {
    title: "Cloud / Infra / Tools",
    skills: [
      "Linux",
      "Nginx",
      "Alibaba Cloud",
      "Vercel",
      "Render",
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "Selenium",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "AI / Data / Systems",
    skills: [
      "Prompt engineering",
      "Semantic search",
      "Personalization",
      "Recommendation systems",
    ],
  },
];

export const skillIconMap: Record<string, string> = {
  "System monitoring": "/icons/system.png",
  "Microsoft Sentinel": "/icons/microsoft-sentinel.png",
  Java: "/icons/java.png",
  Python: "/icons/python.png",
  PHP: "/icons/php.png",
  TypeScript: "/icons/typescript.png",
  JavaScript: "/icons/javascript.png",
  SQL: "/icons/database.png",
  Django: "/icons/django.png",
  React: "/icons/react.png",
  Linux: "/icons/linux.svg",
  PostgreSQL: "/icons/postgresql.png",
  MySQL: "/icons/database.png",
  Selenium: "/icons/selenium.png",
  GitHub: "/icons/github.png",
};

export const recruiterSnapshot = [
  { label: "Primary Target", value: "SOC Analyst" },
  { label: "Certification", value: "Security+ valid to 2029" },
  { label: "Flagship Build", value: "Agentic SOC Console" },
  { label: "Ops Exposure", value: "DNS, TLS, logs, Nginx, ECS" },
];

export const socStatus = [
  { label: "Alert Queue", value: "54", tone: "cyan" },
  { label: "Open Cases", value: "12", tone: "amber" },
  { label: "Playbooks", value: "24", tone: "green" },
  { label: "Response Jobs", value: "42", tone: "slate" },
];

export const skillHighlights = [
  {
    title: "SOC Workflow",
    summary: "Alert triage, case handling, playbook steps, and response tracking from the Agentic SOC Console.",
    skills: ["Alert triage", "SOC workflow", "Log analysis", "Incident response basics"],
  },
  {
    title: "Infrastructure Operations",
    summary: "Hands-on exposure to Linux, Nginx, DNS, TLS, cloud deployment, monitoring, and rollback documentation.",
    skills: ["Linux", "Nginx", "DNS", "SSL/TLS", "System monitoring"],
  },
  {
    title: "Software Engineering",
    summary: "Full-stack project delivery with typed frontend code, APIs, databases, and maintainable system structure.",
    skills: ["Python", "TypeScript", "React", "Django", "FastAPI", "SQL"],
  },
];

export const skillMetrics = [
  { value: "5", label: "Skill groups" },
  { value: "35+", label: "Tools and concepts" },
  { value: "3", label: "SOC-relevant projects" },
];

export const experience = {
  role: "IT Engineer Intern / IT Operations & Deployment",
  company: "Hispeedcity",
  period: "Internship",
  summary:
    "Supported networked systems, deployment operations, and monitoring tasks with direct relevance to SOC analyst workflows: configuration accuracy, system visibility, logs, and operational readiness.",
  achievements: [
    "Integrated network devices and supported LPR camera operations through IP configuration, connectivity checks, and deployment validation.",
    "Performed server monitoring, log checks, disk health reviews, and system health checks to identify operational issues early.",
    "Handled SSL/TLS certificate tasks and DNS record management, including A, MX, and TXT records for production services.",
    "Supported web deployments using Nginx and Alibaba Cloud ECS with backup, rollback, and configuration documentation.",
    "Redesigned a landing page that increased traffic from 50 to 126 views, a 152% improvement.",
  ],
};

export const projects: Project[] = [
  {
    title: "Agentic SOC Console",
    subtitle: "Flagship SOC workflow simulation platform",
    description:
      "A full-stack SOC platform that simulates real analyst movement from alerts to cases, playbooks, investigation notes, and response tracking.",
    problem:
      "Entry-level analysts need structured practice with alert context, escalation paths, evidence capture, and repeatable investigation workflows.",
    architecture:
      "Django powers the workflow layer and API logic while React renders an analyst console for queue review, case updates, playbook steps, and response status.",
    socValue:
      "Demonstrates practical understanding of alert triage, case management, playbook-driven investigation, response tracking, and the operational rhythm of a SOC.",
    techStack: ["Django", "React", "Python", "JavaScript", "RBAC", "REST API"],
    highlights: [
      "Alert queue with severity, source, ownership, and triage state",
      "Case management flow for analyst notes and escalation tracking",
      "Playbook-style investigation steps for consistent response",
      "Response history designed around auditability and analyst handoff",
    ],
    metrics: ["SOC workflow", "Triage-to-case", "Playbook driven"],
    image: "/project-agentic-soc-dashboard.png",
    githubUrl: "https://github.com/Eyyan1/agentic-soc-console",
    demoUrl: "https://agentic-soc-console-18q6sv45z-eyyan1s-projects.vercel.app/",
  },
  {
    title: "AI Movie Recommendation System",
    subtitle: "AI-assisted retrieval and personalization system",
    description:
      "A recommendation platform that accepts natural-language prompts, parses intent, reranks candidates semantically, and returns structured personalized results.",
    problem:
      "Recommendation quality depends on clean intent extraction, data retrieval, ranking logic, and user-aware refinement rather than simple keyword matching.",
    architecture:
      "FastAPI exposes the recommendation pipeline, Next.js delivers the user experience, and PostgreSQL stores structured metadata for filtering and personalization.",
    socValue:
      "Shows engineering depth in prompt parsing, structured retrieval, production deployment thinking, and explainable decision pipelines.",
    techStack: ["FastAPI", "Next.js", "PostgreSQL", "Python", "TypeScript", "SQLAlchemy"],
    highlights: [
      "Natural-language prompt parsing for recommendation intent",
      "Semantic reranking and personalization logic",
      "Structured retrieval pipeline with predictable API boundaries",
      "Deployment-oriented architecture across frontend, API, and database",
    ],
    metrics: ["Semantic rerank", "Structured API", "Production mindset"],
    image: "/project-movie-reco-ai.png",
    githubUrl: "https://github.com/Eyyan1/movie-reco-ai",
    demoUrl: "https://movie-reco-n55lwag5a-eyyan1s-projects.vercel.app/",
  },
  {
    title: "Happiness Index System",
    subtitle: "Final year well-being monitoring platform",
    description:
      "A structured staff well-being system with survey workflows, reporting dashboards, and role-based access for controlled data visibility.",
    problem:
      "Organizations need a simple way to collect staff sentiment, protect role access, and turn survey data into usable reporting.",
    architecture:
      "PHP MVC structure with MySQL persistence, role-aware views, survey modules, and dashboards for administrators and staff users.",
    socValue:
      "Reinforces disciplined system design: RBAC, reporting, workflow clarity, data handling, and maintainable application structure.",
    techStack: ["PHP", "MySQL", "MVC", "RBAC", "SQL", "Reporting"],
    highlights: [
      "Role-based access control for separate user responsibilities",
      "Survey workflow from submission to reporting",
      "Dashboard views for monitoring trends and operational status",
      "MVC structure for maintainable feature separation",
    ],
    metrics: ["RBAC", "Survey workflow", "Reporting dashboard"],
    image: "/project-happiness-index.png",
    githubUrl: "https://github.com/Eyyan1/Happiness-Index-System",
  },
];

export const certifications: Certification[] = [
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    note: "Valid until 2029",
    image: "/cert-security-plus.svg",
    featured: true,
  },
  {
    title: "Administer Active Directory Domain Services",
    issuer: "Microsoft Applied Skills",
    note: "Identity and directory administration",
    image: "/cert-active-directory.svg",
  },
  {
    title: "Pre Security Learning Path",
    issuer: "TryHackMe",
    note: "Networking, web, Linux, and security foundations",
    image: "/cert-tryhackme.svg",
  },
  {
    title: "Associate Fellow",
    issuer: "OIPD-UK",
    note: "Professional development recognition",
    image: "/cert-oipd.svg",
  },
];

export const education = {
  degree: "Bachelor of Computer Science (Software Engineering) (Hons)",
  institution: "Universiti Malaysia Terengganu (UMT)",
  cgpa: "3.24",
  honors: "Dean's List: Semester 3 and 7",
};

export const careerGoal = {
  immediate: "SOC Analyst",
  longTerm: "Security Engineer",
  interests: [
    "Detection engineering",
    "Investigation workflows",
    "Incident response",
    "AI-assisted security operations",
  ],
};
