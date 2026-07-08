export const siteConfig = {
  brand: {
    name: "The Kola Room",
    tagline: "A private members' club for African builders.",
    domain: "kolaroom.club",
    email: "hello@kolaroom.club",
    whatsapp: "+234 700 000 0000",
    city: "Lagos · Nairobi · Accra",
    social: {
      instagram: "https://instagram.com/kolaroom",
      twitter: "https://twitter.com/kolaroom",
      linkedin: "https://linkedin.com/company/kolaroom",
    },
  },
  founder: {
    name: "Nkechi Adebayo",
    role: "Founder, The Kola Room",
    portrait: "/img/hero-portrait.jpg",
    shortBio:
      "I started The Kola Room because I couldn't find the room I wanted to be in. It's a quiet space for African creators, founders and operators who take their work — and each other — seriously.",
    metric: "412 members · 34 cities",
  },
  hero: {
    tag: "Membership open · Q3 intake",
    primaryCta: { label: "Apply for membership", href: "/pricing" },
    secondaryCta: { label: "Inside the club", href: "#benefits" },
  },
  stats: [
    { value: "412", label: "Active members" },
    { value: "34", label: "Cities represented" },
    { value: "2x/mo", label: "Live workshops" },
    { value: "4.9", label: "Member rating" },
  ],
  commerce: {
    currency: "₦",
    trust: [
      "Cancel any time · no lock-in",
      "Members-only community",
      "Handpicked applications, only",
    ],
  },
} as const;
