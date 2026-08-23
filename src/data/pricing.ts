export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  projectPrice: string;
  projectPriceSub: string;
  monthlyPrice: string;
  monthlyPriceSub: string;
  deliveryTimeline: string;
  revisionPolicy: string;
  recommendedFor: string;
  features: {
    title: string;
    included: boolean;
  }[];
  ctaText: string;
  popular?: boolean;
}

export const pricingPlans: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Launch",
    tagline: "Essential high-performance website for ambitious startups and product launches.",
    projectPrice: "$4,800",
    projectPriceSub: "one-time investment",
    monthlyPrice: "$2,400",
    monthlyPriceSub: "per month / 3mo min",
    deliveryTimeline: "2 - 3 Weeks",
    revisionPolicy: "3 Rounds of Structured Revisions",
    recommendedFor: "Early-stage startups, modern portfolio & product launch websites",
    features: [
      { title: "Up to 5 Custom High-Performance Pages", included: true },
      { title: "Custom Responsive Design & Tailwind CSS", included: true },
      { title: "React / Next.js Fast Static Generation", included: true },
      { title: "Basic Framer Motion Animations & Transitions", included: true },
      { title: "Contact Form with Lead Notifications", included: true },
      { title: "SEO Meta & Core Web Vitals Optimization", included: true },
      { title: "CMS Integration (Sanity / Strapi)", included: false },
      { title: "Custom Backend & Database Architecture", included: false },
      { title: "Dedicated Slack Communication Channel", included: false },
      { title: "24/7 SLA Engineering Support", included: false }
    ],
    ctaText: "Start with Starter",
    popular: false
  },
  {
    id: "business",
    name: "Business Scale",
    badge: "Most Popular",
    tagline: "Comprehensive full-stack digital experience for scaling businesses and modern brands.",
    projectPrice: "$9,500",
    projectPriceSub: "one-time investment",
    monthlyPrice: "$4,200",
    monthlyPriceSub: "per month / flexible",
    deliveryTimeline: "4 - 6 Weeks",
    revisionPolicy: "Unlimited Revisions during active sprints",
    recommendedFor: "Growing tech companies, SaaS marketing sites, high-converting stores",
    features: [
      { title: "Up to 12 Custom Pages + Dynamic Routing", included: true },
      { title: "Bespoke Figma UI/UX Design System", included: true },
      { title: "React 19 / Next.js 15 Full-Stack Setup", included: true },
      { title: "Advanced Framer Motion Micro-Interactions", included: true },
      { title: "Headless CMS Integration (Sanity / Strapi)", included: true },
      { title: "Lead Generation & CRM Automation", included: true },
      { title: "Full Technical SEO & Performance Guarantee (95+)", included: true },
      { title: "Dedicated Slack Communication Channel", included: true },
      { title: "Stripe Payment / Subscription Integration", included: true },
      { title: "24/7 SLA Engineering Support", included: false }
    ],
    ctaText: "Choose Business Scale",
    popular: true
  },
  {
    id: "professional",
    name: "Enterprise SaaS",
    badge: "Maximum Power",
    tagline: "Custom web applications, multi-tenant SaaS platforms, and high-load architectures.",
    projectPrice: "$18,500",
    projectPriceSub: "one-time investment",
    monthlyPrice: "$7,800",
    monthlyPriceSub: "per month / dedicated pod",
    deliveryTimeline: "6 - 10 Weeks",
    revisionPolicy: "Continuous Agile Iteration & Feedback",
    recommendedFor: "SaaS products, complex data dashboards, enterprise web portals",
    features: [
      { title: "Unlimited Pages & Dynamic Component Library", included: true },
      { title: "End-to-End SaaS Architecture & Multi-Tenancy", included: true },
      { title: "PostgreSQL Database & Real-Time Sync", included: true },
      { title: "Role-Based Access Control (RBAC) & Auth", included: true },
      { title: "Stripe Billing, Invoicing & Subscription Tiering", included: true },
      { title: "Interactive Dashboards & Custom Data Charts", included: true },
      { title: "Automated E2E Testing Suite (Playwright)", included: true },
      { title: "Dedicated Slack Channel & Daily Standups", included: true },
      { title: "Automated CI/CD Deployment Pipeline", included: true },
      { title: "99.9% Uptime SLA & Security Hardening", included: true }
    ],
    ctaText: "Launch Enterprise SaaS",
    popular: false
  },
  {
    id: "enterprise",
    name: "Custom Retainer",
    badge: "Dedicated Pod",
    tagline: "Your dedicated elite engineering and design department on retainer.",
    projectPrice: "Custom",
    projectPriceSub: "tailored to your scope",
    monthlyPrice: "Custom",
    monthlyPriceSub: "based on dedicated pod size",
    deliveryTimeline: "Continuous Delivery",
    revisionPolicy: "Infinite Agile Sprints",
    recommendedFor: "Enterprises needing ongoing digital evolution and senior bandwidth",
    features: [
      { title: "Dedicated Senior Engineers & Lead Designer", included: true },
      { title: "Direct Leadership Access & Product Strategy", included: true },
      { title: "Full Codebase Ownership & IP Transfer", included: true },
      { title: "Custom Microservice & Cloud Infrastructure", included: true },
      { title: "Enterprise SOC2 & HIPAA Compliance Readiness", included: true },
      { title: "Custom Integrations with ERP / Legacy Systems", included: true },
      { title: "Priority 1-Hour SLA Emergency Support", included: true },
      { title: "Dedicated Lead Solutions Architect", included: true },
      { title: "Weekly Strategy & Bi-Weekly Sprint Releases", included: true },
      { title: "Custom Contract & NDA Guarantee", included: true }
    ],
    ctaText: "Talk to Leadership",
    popular: false
  }
];
