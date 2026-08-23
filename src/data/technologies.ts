export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'Databases & CMS' | 'Design & Tooling';
  icon: string;
  description: string;
  badge: string;
}

export const techStackData: TechItem[] = [
  { name: "React 19", category: "Frontend", icon: "Code2", description: "Modern component architectures with concurrent rendering and hooks.", badge: "Core" },
  { name: "Next.js 15", category: "Frontend", icon: "Globe", description: "Hybrid SSR, Server Actions, streaming, and edge network routing.", badge: "Core" },
  { name: "TypeScript", category: "Frontend", icon: "FileCode", description: "End-to-end type safety preventing runtime bugs across the entire stack.", badge: "Standard" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Palette", description: "Utility-first rapid styling and precision responsive design systems.", badge: "Standard" },
  { name: "Framer Motion", category: "Frontend", icon: "Sparkles", description: "Physics-based 60fps micro-animations, gestures, and layout morphing.", badge: "UI / Motion" },
  { name: "Node.js & Express", category: "Backend & Cloud", icon: "Server", description: "Event-driven asynchronous backend services and REST microservices.", badge: "Core" },
  { name: "GraphQL & REST", category: "Backend & Cloud", icon: "Share2", description: "Type-safe APIs with optimal payload querying and real-time subscriptions.", badge: "Standard" },
  { name: "PostgreSQL", category: "Databases & CMS", icon: "Database", description: "ACID-compliant relational database with JSONB and advanced indexing.", badge: "Database" },
  { name: "Redis", category: "Databases & CMS", icon: "Zap", description: "In-memory caching, rate-limiting, and high-speed pub/sub messaging.", badge: "Cache" },
  { name: "MongoDB", category: "Databases & CMS", icon: "FolderGit2", description: "Flexible document store for rapid prototyping and schema adaptability.", badge: "Database" },
  { name: "Sanity / Strapi", category: "Databases & CMS", icon: "FileText", description: "Headless CMS platforms providing effortless editing for non-technical teams.", badge: "CMS" },
  { name: "Docker & AWS", category: "Backend & Cloud", icon: "Cloud", description: "Containerized reproducible cloud architectures and automated ECS pipelines.", badge: "DevOps" },
  { name: "Figma", category: "Design & Tooling", icon: "Figma", description: "Design systems, auto-layout prototypes, and interactive motion specs.", badge: "Design" },
  { name: "Git & GitHub CI", category: "Design & Tooling", icon: "GitBranch", description: "Automated regression testing, linting, and seamless preview deployments.", badge: "DevOps" }
];
