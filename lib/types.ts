export type PricingTier = {
  id: string;
  name: string;
  price: number;
  interval: "month" | "year";
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type Benefit = { icon: string; title: string; body: string };

export type Workshop = { date: string; title: string; type: "workshop" | "salon" | "office-hours" | "irl"; presenter?: string };

export type MemberSpotlight = { id: string; name: string; role: string; company: string; quote?: string; avatar?: string };

export type Testimonial = { id: string; quote: string; name: string; role?: string; rating?: number };

export type Faq = { id: string; question: string; answer: string; topic?: string };

export type NavItem = { label: string; href?: string; children?: { label: string; href: string; description?: string }[] };
