import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Inside the club", href: "/#benefits" },
  { label: "What's happening", href: "/#calendar" },
  { label: "Members", href: "/#members" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerLinks = {
  club: [
    { label: "Membership", href: "/pricing" },
    { label: "Inside the club", href: "/#benefits" },
    { label: "Members", href: "/#members" },
    { label: "About", href: "/about" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Membership terms", href: "/faq" },
    { label: "Privacy", href: "/faq" },
  ],
};
