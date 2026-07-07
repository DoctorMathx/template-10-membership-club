import type { PricingTier, Benefit, Workshop, MemberSpotlight } from "@/lib/types";

export const tiers: PricingTier[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 24000,
    interval: "month",
    tagline: "Come and go as your calendar allows.",
    features: [
      "Two live workshops every month",
      "Full members-only community",
      "Monthly office hours",
      "Access to the resource vault",
      "Cancel any time",
    ],
    cta: "Apply monthly",
  },
  {
    id: "annual",
    name: "Annual",
    price: 240000,
    interval: "year",
    tagline: "Two months free — the most popular way in.",
    features: [
      "Everything in monthly",
      "One 1:1 with a founder mentor",
      "Free ticket to Kola in Person (yearly IRL)",
      "Priority replies in the community",
      "Members' welcome dinner in your city",
    ],
    cta: "Apply annual",
    featured: true,
  },
  {
    id: "founders",
    name: "Founders",
    price: 520000,
    interval: "year",
    tagline: "For founders raising or scaling in the next 12 months.",
    features: [
      "Everything in annual",
      "Monthly small-group founder circle",
      "Warm intros to investors & operators",
      "Two 1:1s per quarter",
      "Invite +1 partner or co-founder",
    ],
    cta: "Apply for Founders",
  },
];

export const benefits: Benefit[] = [
  { icon: "sparkles", title: "Two workshops every month", body: "90-minute working sessions on pricing, launches, positioning, hiring, and running a serious business." },
  { icon: "users", title: "A quiet, moderated community", body: "Under 500 members. No self-promotion, no cold pitching, no crypto — just real conversation." },
  { icon: "coffee", title: "Monthly office hours", body: "Bring your work and questions to a live 90-minute session with the founder + a rotating guest." },
  { icon: "book", title: "The resource vault", body: "Every template, playbook, and swipe file we've ever built for members — always up to date." },
  { icon: "handshake", title: "Warm intros, done well", body: "The kind of introductions that only happen when there's real trust in the room." },
  { icon: "calendar", title: "Two IRL gatherings a year", body: "One salon in Lagos and one in Nairobi. Small, curated, and quietly excellent." },
];

export const calendar: Workshop[] = [
  { date: "Jul 12", title: "Pricing without guilt", type: "workshop", presenter: "Adaeze N." },
  { date: "Jul 18", title: "Members' salon · Lagos", type: "irl", presenter: "Members-only" },
  { date: "Jul 25", title: "Office hours with Nkechi", type: "office-hours" },
  { date: "Aug 02", title: "Hiring your first five", type: "workshop", presenter: "Femi A." },
  { date: "Aug 15", title: "Fireside: leaving big tech", type: "salon", presenter: "Guest" },
  { date: "Aug 22", title: "The Q4 launch playbook", type: "workshop", presenter: "Nkechi A." },
];

export const members: MemberSpotlight[] = [
  { id: "m1", name: "Adaeze N.", role: "Author & essayist", company: "Independent" },
  { id: "m2", name: "Femi A.", role: "Engineering manager", company: "Paystack" },
  { id: "m3", name: "Aisha B.", role: "Founder", company: "Studio Kola" },
  { id: "m4", name: "Kunle Y.", role: "Product lead", company: "Flutterwave" },
  { id: "m5", name: "Grace O.", role: "Staff engineer", company: "Cowrywise" },
  { id: "m6", name: "David N.", role: "Product designer", company: "Kuda" },
  { id: "m7", name: "Tolu B.", role: "Founder", company: "Small studio" },
  { id: "m8", name: "Chika O.", role: "Fractional CFO", company: "Independent" },
  { id: "m9", name: "Ope L.", role: "Head of design", company: "Piggyvest" },
  { id: "m10", name: "Ada E.", role: "Product marketer", company: "Andela" },
];
