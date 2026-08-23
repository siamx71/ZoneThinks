export interface FAQItem {
  id: string;
  category: 'General' | 'Process & Timeline' | 'Pricing & Contracts' | 'Tech Stack & Security';
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What makes ZoneThinks IT different from traditional web design agencies?",
    answer: "We are digital engineers and product designers, not generic template flippers. We build custom, bespoke web architectures from the ground up using React, Next.js, and modern cloud infrastructure. Our sites load in under 1 second, feature fluid micro-interactions, and are engineered specifically to drive measurable business revenue."
  },
  {
    id: "faq-2",
    category: "Process & Timeline",
    question: "How long does a typical web development project take?",
    answer: "A focused high-impact marketing or launch website typically takes 3 to 5 weeks from discovery to deployment. Complex SaaS platforms, multi-tenant web applications, or custom e-commerce builds generally range from 6 to 12 weeks. We operate in transparent two-week agile sprints with continuous staging access."
  },
  {
    id: "faq-3",
    category: "Process & Timeline",
    question: "What does your project delivery process look like?",
    answer: "We follow a 7-step proven methodology: 01 Discovery & Technical Strategy → 02 Interactive UI/UX Design & Prototyping → 03 High-Performance Frontend & Backend Engineering → 04 Quality Assurance & Cross-Browser Testing → 05 Speed & SEO Optimization → 06 Seamless Production Launch → 07 Ongoing Support & Retainer Iteration."
  },
  {
    id: "faq-4",
    category: "Tech Stack & Security",
    question: "What technologies and frameworks do you specialize in?",
    answer: "Our core stack is built on modern industry standards: React 19, Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for front-end; Node.js, Express, NestJS, PostgreSQL, Redis, and GraphQL for back-end; and AWS, Vercel, and Docker for automated cloud deployments."
  },
  {
    id: "faq-5",
    category: "Tech Stack & Security",
    question: "Do you build custom Content Management Systems (CMS)?",
    answer: "Yes. We integrate modern headless CMS solutions like Sanity, Strapi, Contentful, or custom PostgreSQL/Prisma backoffices. This empowers your marketing team to edit text, publish articles, and launch campaign pages with zero code, while preserving lightning-fast load speeds."
  },
  {
    id: "faq-6",
    category: "Pricing & Contracts",
    question: "How do your pricing and payment milestones work?",
    answer: "We offer both fixed-price project contracts and dedicated monthly sprint pods. For fixed-scope projects, payments are typically split into 50% upfront deposit, 25% at design sign-off, and 25% upon successful production launch. For monthly retainer pods, billing occurs at the start of each sprint cycle."
  },
  {
    id: "faq-7",
    category: "Pricing & Contracts",
    question: "Do I own 100% of the code and design intellectual property?",
    answer: "Absolutely. Upon final payment milestone completion, 100% of the codebase, Git repositories, Figma design files, and intellectual property rights are unconditionally transferred to your organization."
  },
  {
    id: "faq-8",
    category: "Tech Stack & Security",
    question: "How do you ensure our website is secure and HIPAA/GDPR compliant?",
    answer: "We implement strict security hardening including HTTPS/TLS 1.3 encryption, Content Security Policies (CSP), sanitized API endpoints, OWASP Top 10 protection, rate limiting, and zero-knowledge data storage where required."
  },
  {
    id: "faq-9",
    category: "General",
    question: "Will our website be fully optimized for mobile devices and search engines?",
    answer: "Yes, every website is built mobile-first with adaptive layouts tested across 360px to 4K displays. We also implement complete Technical SEO: dynamic Open Graph tags, canonical URLs, structured JSON-LD schemas, XML sitemaps, and sub-second Core Web Vitals performance."
  },
  {
    id: "faq-10",
    category: "Process & Timeline",
    question: "What if we need revisions or changes during development?",
    answer: "We believe in iterative collaboration. You receive access to a private staging URL where you can test live progress. We include structured revision rounds in our contracts to ensure the final product exceeds your highest expectations."
  },
  {
    id: "faq-11",
    category: "Process & Timeline",
    question: "Do you provide hosting, maintenance, and post-launch support?",
    answer: "Yes. We configure automated cloud deployments on Vercel or AWS, and offer monthly maintenance retainers covering 24/7 uptime monitoring, security updates, dependency upgrades, speed audits, and dedicated feature sprints."
  },
  {
    id: "faq-12",
    category: "General",
    question: "How do we get started with ZoneThinks IT?",
    answer: "Simply submit our project inquiry form or book a direct discovery call. We'll review your project scope, provide an initial architectural recommendation, and deliver a transparent proposal and roadmap within 24 to 48 hours."
  }
];
