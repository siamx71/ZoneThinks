export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Websites' | 'SaaS' | 'E-commerce' | 'Dashboard' | 'Landing Pages';
  industry: string;
  shortDesc: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  designProcess: string[];
  devProcess: string[];
  features: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  heroImage: string;
  galleryImages: string[];
  timeline: string;
  year: number;
  liveUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "fintech-wealth-platform",
    title: "Apex Wealth - Next-Gen Asset Management",
    client: "Apex Global Capital",
    category: "SaaS",
    industry: "FinTech & WealthTech",
    shortDesc: "Ultra-low latency portfolio dashboard and real-time algorithmic trading interface.",
    fullOverview: "Apex Global needed a state-of-the-art wealth management platform to empower high-net-worth investors with real-time portfolio analytics, automated tax-loss harvesting, and institutional-grade security. We architected a Next.js 15 front-end backed by WebSockets for instant data synchronization.",
    challenge: "The existing legacy software suffered from 4-second latency on data refreshes, cumbersome mobile usability, and a cluttered user interface that led to high client abandonment during onboarding.",
    solution: "We engineered a ground-up reactive web platform with instantaneous sub-50ms data streaming, biometric multi-factor authentication, an adaptive dark mode UI, and interactive financial charting.",
    designProcess: [
      "Conducted 24 in-depth interviews with portfolio managers and retail wealth clients.",
      "Designed high-density data visualizations with custom accessible color palettes.",
      "Created 40+ interactive motion prototypes in Figma for rapid stakeholder validation."
    ],
    devProcess: [
      "Built a modular micro-frontend architecture using React 19, TypeScript, and Tailwind CSS.",
      "Implemented real-time WebSocket feeds with custom delta-compression for live market tickers.",
      "Conducted automated end-to-end testing and load testing simulating 50,000 concurrent traders."
    ],
    features: [
      "Real-time WebSocket market feeds with zero UI lag",
      "One-click automated portfolio rebalancing engine",
      "Enterprise audit logs and SOC2 compliant biometric security",
      "Interactive SVG performance forecasting tool"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "PostgreSQL", "Framer Motion", "Chart.js"],
    metrics: [
      { label: "Data Refresh Speed", value: "<40ms", description: "from 4.2s legacy speed" },
      { label: "AUM Growth", value: "$1.4B", description: "managed across the platform" },
      { label: "User Retention", value: "+84%", description: "increase in daily active sessions" }
    ],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
    ],
    timeline: "12 Weeks",
    year: 2025,
    liveUrl: "https://apex-wealth-demo.example.com",
    testimonial: {
      quote: "ZoneThinks IT delivered what three previous agencies deemed technically unfeasible. The platform is blindingly fast, visually arresting, and drove a 140% surge in enterprise onboarding within the first quarter.",
      author: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Apex Global Capital",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
    }
  },
  {
    id: "proj-2",
    slug: "luminary-ai-workspace",
    title: "Luminary AI - Neural Content Studio",
    client: "Luminary Technologies",
    category: "Websites",
    industry: "Artificial Intelligence",
    shortDesc: "High-impact brand launch website with 3D canvas visuals and interactive generative AI demos.",
    fullOverview: "Luminary AI required an unforgettable digital presence for their Series-B announcement. We engineered an interactive web showcase highlighting their generative neural models with real-time prompt playground previews and silky smooth scroll narratives.",
    challenge: "AI websites frequently feel generic or overly academic. Luminary needed to captivate enterprise buyers while clearly explaining deep-tech multimodal inference without overwhelming the visitor.",
    solution: "We designed an immersive dark-aesthetic website featuring scroll-tied shader transitions, a live interactive sandbox, and crystal-clear pricing calculators tailored for Fortune 500 decision makers.",
    designProcess: [
      "Defined a futuristic cyber-minimalism design language with neon cyan and deep obsidian.",
      "Engineered bespoke 3D vector canvas animations representing neural token streams.",
      "Iterated on copy hierarchy to highlight enterprise ROI over technical jargon."
    ],
    devProcess: [
      "Optimized WebGL canvas shaders to run at a solid 60 FPS on low-power mobile GPUs.",
      "Built dynamic server-side rendering for instant global CDN edge delivery.",
      "Implemented seamless Framer Motion staggered transitions across all viewports."
    ],
    features: [
      "Interactive in-browser AI prompt benchmark simulator",
      "Dynamic ROI & compute cost comparison calculator",
      "Zero-latency global CDN edge caching",
      "Comprehensive interactive API documentation hub"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / Canvas", "Vite"],
    metrics: [
      { label: "Conversion Rate", value: "8.4%", description: "visitor-to-waitlist conversion" },
      { label: "Page Load Time", value: "0.65s", description: "global median load time" },
      { label: "Series B Inquiries", value: "320+", description: "enterprise leads in 30 days" }
    ],
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
    ],
    timeline: "6 Weeks",
    year: 2025,
    liveUrl: "https://luminary-ai-demo.example.com",
    testimonial: {
      quote: "The website designed and built by ZoneThinks IT positioned our company as an undisputed category leader. We closed our Series B round with investors citing the digital experience as a major trust builder.",
      author: "Elena Rostova",
      role: "Co-Founder & CEO",
      company: "Luminary Technologies",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
    }
  },
  {
    id: "proj-3",
    slug: "veloce-luxury-ecommerce",
    title: "Veloce Atelier - Headless Luxury Commerce",
    client: "Veloce Italian Luxury Goods",
    category: "E-commerce",
    industry: "Luxury Fashion & Retail",
    shortDesc: "Bespoke headless e-commerce store with 3D product customization and 1-click global checkout.",
    fullOverview: "Veloce Atelier is a Milan-based luxury leather goods house. They needed an editorial-grade digital boutique that preserved their 60-year heritage while delivering modern conveniences like custom monogramming previews and instant multi-currency settlement.",
    challenge: "Their previous monolithic Magento store was sluggish (5s load times) and lacked mobile luxury aesthetics, causing a 68% cart abandonment rate among mobile luxury shoppers.",
    solution: "We built a headless Shopify Plus architecture with Next.js Commerce, dynamic SVG monogram customization, and instant Stripe payment flows with automatic tax and duties calculation.",
    designProcess: [
      "Crafted an haute-couture digital aesthetic featuring editorial typography and subtle hover zooms.",
      "Designed a real-time leather texture and typography monogramming configurator.",
      "Optimized mobile tap targets for effortless one-thumb luxury purchasing."
    ],
    devProcess: [
      "Integrated Shopify Storefront GraphQL API with Next.js edge caching.",
      "Implemented Algolia instant search with predictive visual merchandise suggestions.",
      "Configured automated multi-currency switching across 42 countries."
    ],
    features: [
      "Real-time 3D and high-resolution texture product customizer",
      "Global localized currency and prepaid duties calculation",
      "Apple Pay & Google Pay express 1-click checkout",
      "Editorial storytelling integrated directly into product pages"
    ],
    technologies: ["Next.js", "Shopify GraphQL", "Tailwind CSS", "Stripe API", "Algolia", "Framer Motion"],
    metrics: [
      { label: "Mobile Conversions", value: "+148%", description: "increase in mobile purchases" },
      { label: "Cart Abandonment", value: "-42%", description: "reduction in checkout drop-offs" },
      { label: "Average Order Value", value: "$620", description: "up from $380 before launch" }
    ],
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
    ],
    timeline: "8 Weeks",
    year: 2025,
    testimonial: {
      quote: "Our online store now matches the prestige and elegance of our flagship boutique in Milan. Online revenue surpassed our physical stores within two months of launch.",
      author: "Matteo Bianchi",
      role: "Managing Director",
      company: "Veloce Atelier",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    }
  },
  {
    id: "proj-4",
    slug: "kinetix-telehealth-dashboard",
    title: "Kinetix Care - Telehealth Provider Suite",
    client: "Kinetix Health Systems",
    category: "Dashboard",
    industry: "HealthTech & Telemedicine",
    shortDesc: "HIPAA-compliant doctor and patient clinical portal with real-time video consultations.",
    fullOverview: "Kinetix Care connects over 2,000 certified clinicians with patients across North America. We engineered a HIPAA-compliant medical portal featuring encrypted WebRTC video rooms, automated electronic health record (EHR) synchronization, and smart scheduling.",
    challenge: "Navigating fragmented medical software often leads to clinician burnout. Kinetix needed an interface so clean that doctors could conduct visits and complete charting in half the normal time.",
    solution: "We engineered an intuitive split-screen consultation interface with automated transcription, quick-order prescription workflows, and role-based access for multi-specialty clinics.",
    designProcess: [
      "Conducted on-site ethnographic workflow studies with practicing physicians.",
      "Designed high-contrast, low-fatigue dark and light interfaces for long clinical shifts.",
      "Built rigorous accessibility standards for patients with visual or physical impairments."
    ],
    devProcess: [
      "Engineered end-to-end encrypted WebRTC video streaming with automatic bitrate fallback.",
      "Constructed FHIR-compliant API connectors for seamless EHR integrations.",
      "Implemented strict zero-knowledge encryption architecture for all patient data."
    ],
    features: [
      "End-to-end encrypted HD video consultations with screen sharing",
      "Instant e-Prescriptions integrated with major national pharmacy networks",
      "AI-assisted clinical note generation and FHIR export",
      "Automated insurance eligibility verification in real time"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "WebRTC", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Clinician Charting Time", value: "-52%", description: "time saved per consultation" },
      { label: "Active Consultations", value: "250K+", description: "completed securely without incident" },
      { label: "HIPAA Compliance", value: "100%", description: "audit clearance with zero defects" }
    ],
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop"
    ],
    timeline: "14 Weeks",
    year: 2024,
    testimonial: {
      quote: "ZoneThinks IT took a complex, heavily-regulated medical application and made it feel as frictionless as consumer software. Our doctor satisfaction scores jumped from 62% to 98%.",
      author: "Dr. Sarah Jenkins",
      role: "Chief Medical Officer",
      company: "Kinetix Health",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop"
    }
  },
  {
    id: "proj-5",
    slug: "synthetix-pay-landing",
    title: "Synthetix Pay - Global Settlement API",
    client: "Synthetix Protocol",
    category: "Landing Pages",
    industry: "FinTech & Developer Tools",
    shortDesc: "High-converting developer landing page with interactive API code playgrounds and live sandbox.",
    fullOverview: "Synthetix needed a high-conversion developer portal to drive adoption of their global settlement API among web developers and engineering leaders.",
    challenge: "Developer audiences are notoriously cynical toward standard marketing claims; they demand interactive code examples, transparent latency benchmarks, and direct documentation access.",
    solution: "We designed an interactive code execution terminal right in the hero section, with syntax highlighting, language toggles (cURL, Node, Python, Go), and real-time sandbox response verification.",
    designProcess: [
      "Designed a sleek code-first developer aesthetic with JetBrains Mono and syntax highlighting.",
      "Organized information architecture to reduce clicks-to-first-API-call from 6 to 1."
    ],
    devProcess: [
      "Implemented a simulated client-side code runner with copy-to-clipboard functionality.",
      "Optimized bundle size for 99+ Lighthouse performance scores."
    ],
    features: [
      "Interactive multi-language code snippets with 1-click sandbox testing",
      "Live API uptime and latency telemetry visualizer",
      "Interactive webhook event tester and payload builder"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "PrismJS"],
    metrics: [
      { label: "API Key Signups", value: "+210%", description: "increase in developer onboarding" },
      { label: "Time to First Call", value: "<90s", description: "down from 8 minutes" },
      { label: "Lighthouse Score", value: "99/100", description: "across all mobile & desktop audits" }
    ],
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
    ],
    timeline: "4 Weeks",
    year: 2025
  },
  {
    id: "proj-6",
    slug: "onyx-commercial-proptech",
    title: "Onyx Spaces - Commercial Real Estate Platform",
    client: "Onyx Real Estate Partners",
    category: "Websites",
    industry: "PropTech & Commercial Real Estate",
    shortDesc: "Virtual building tours, interactive leasing floor plans, and tenant experience portal.",
    fullOverview: "Onyx manages $3B+ in premium commercial real estate. We built a digital leasing experience allowing enterprise tenants to explore floorplates in 3D, calculate space requirements, and initiate digital lease proposals.",
    challenge: "High-value commercial leasing traditionally relied on printed brochures and in-person walkthroughs, slowing down the transaction cycle by months.",
    solution: "We engineered an interactive SVG floor plan visualizer, automated lease yield calculators, and video tour integrations that accelerated tenant decision-making.",
    designProcess: [
      "Created an architectural luxury design language with clean lines and subtle gold accents.",
      "Designed an intuitive filter system for square footage, zoning, and building amenities."
    ],
    devProcess: [
      "Integrated dynamic SVG floor plan maps with custom hover states and lease status markers.",
      "Connected CRM automation for immediate leasing broker notifications."
    ],
    features: [
      "Interactive SVG floor plan explorer with dimension scaling",
      "Custom space density and lease cost calculator",
      "Automated broker tour scheduling engine"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Mapbox GL"],
    metrics: [
      { label: "Leasing Cycle", value: "-35%", description: "faster from inquiry to signed lease" },
      { label: "Digital Inquiries", value: "3.2x", description: "growth in verified corporate prospects" },
      { label: "Portfolio Occupancy", value: "96.4%", description: "all-time high across properties" }
    ],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
    ],
    timeline: "8 Weeks",
    year: 2024
  }
];
