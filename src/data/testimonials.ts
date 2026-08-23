export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  projectType: string;
  quote: string;
  highlightMetric: string;
  date: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Marcus Vance",
    company: "Apex Global Capital",
    role: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    projectType: "FinTech Platform",
    quote: "ZoneThinks IT operates on another plane of digital craftsmanship. They didn't just redesign our trading terminal; they transformed our latency down to 40ms and boosted user onboarding by 140%. They are our permanent engineering partners.",
    highlightMetric: "+140% Client Onboarding",
    date: "January 2025"
  },
  {
    id: "test-2",
    clientName: "Elena Rostova",
    company: "Luminary AI",
    role: "Co-Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    projectType: "AI Product Launch",
    quote: "Working with ZoneThinks was the highest-leverage decision of our Series B year. Their ability to turn complex deep-tech concepts into breathtaking, interactive web experiences is unmatched anywhere in Silicon Valley.",
    highlightMetric: "320+ Enterprise Leads",
    date: "February 2025"
  },
  {
    id: "test-3",
    clientName: "Matteo Bianchi",
    company: "Veloce Atelier",
    role: "Managing Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    projectType: "Headless E-Commerce",
    quote: "Our online store now rivals the exclusivity of our Milan boutique. Mobile conversions skyrocketed by 148%, and customer feedback on the 3D customization tool has been extraordinary.",
    highlightMetric: "+148% Mobile Conversions",
    date: "December 2024"
  },
  {
    id: "test-4",
    clientName: "Dr. Sarah Jenkins",
    company: "Kinetix Health",
    role: "Chief Medical Officer",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    projectType: "Telehealth Portal",
    quote: "ZoneThinks IT achieved full HIPAA compliance clearance on the first audit while making the UI so intuitive that clinical charting time was cut in half. Outstanding engineering rigor.",
    highlightMetric: "-52% Clinician Charting Time",
    date: "November 2024"
  },
  {
    id: "test-5",
    clientName: "Harrison Croft",
    company: "Onyx Real Estate",
    role: "Head of Digital Operations",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    projectType: "Commercial PropTech",
    quote: "The interactive floor plans and leasing portal shortened our commercial leasing cycle by 35%. The team is proactive, transparent, and delivers ahead of deadlines.",
    highlightMetric: "-35% Leasing Cycle Time",
    date: "October 2024"
  },
  {
    id: "test-6",
    clientName: "Priya Sharma",
    company: "Synthetix Protocol",
    role: "VP of Developer Relations",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    projectType: "Developer Portal",
    quote: "Our developer signups more than doubled within 30 days of the new landing page launch. The interactive terminal they built was a masterstroke.",
    highlightMetric: "+210% Developer Signups",
    date: "September 2024"
  }
];
