export interface AgencyInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  foundedYear: number;
  completedProjects: number;
  happyClients: number;
  clientSatisfaction: number;
  averageRoi: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
  socials: {
    github: string;
    twitter: string;
    linkedin: string;
    dribbble: string;
    instagram: string;
  };
}

export const agencyData: AgencyInfo = {
  name: "ZoneThinks IT",
  tagline: "High-Performance Digital Engineering & Product Design",
  heroHeadline: "WE BUILD DIGITAL EXPERIENCES THAT GROW BUSINESSES.",
  heroSubheadline: "ZoneThinks IT is a premier digital agency engineering high-speed web platforms, enterprise SaaS ecosystems, and conversion-optimized web applications for world-class brands.",
  description: "We are an elite team of software engineers, product designers, and digital architects dedicated to shipping transformative digital products with pixel-perfect design and ultra-scalable architecture.",
  foundedYear: 2020,
  completedProjects: 85,
  happyClients: 50,
  clientSatisfaction: 99,
  averageRoi: "3.8x",
  email: "hello@zonethinks.it",
  phone: "+1 (888) 790-ZONE",
  address: {
    street: "500 Howard Street, Suite 400",
    city: "San Francisco",
    state: "CA",
    country: "United States",
    zip: "94105"
  },
  socials: {
    github: "https://github.com/zonethinks-it",
    twitter: "https://twitter.com/zonethinks_it",
    linkedin: "https://linkedin.com/company/zonethinks-it",
    dribbble: "https://dribbble.com/zonethinks-it",
    instagram: "https://instagram.com/zonethinks.it"
  }
};

export const trustLogos = [
  { name: "Apex Global", logo: "APEX", industry: "FinTech" },
  { name: "Vortex Labs", logo: "VORTEX", industry: "AI & Data" },
  { name: "NovaCloud", logo: "NOVACLOUD", industry: "Cloud Tech" },
  { name: "Kinetix Health", logo: "KINETIX", industry: "HealthTech" },
  { name: "Synthetix Pay", logo: "SYNTHETIX", industry: "Payments" },
  { name: "Aetheria Media", logo: "AETHERIA", industry: "SaaS Media" },
  { name: "Luminary AI", logo: "LUMINARY", industry: "Enterprise AI" },
  { name: "Onyx Real Estate", logo: "ONYX", industry: "PropTech" }
];
