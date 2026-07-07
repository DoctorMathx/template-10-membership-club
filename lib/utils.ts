import { siteConfig } from "./site-config";
export function formatPrice(v: number, currency = siteConfig.commerce.currency) {
  return v === 0 ? "Free" : `${currency}${v.toLocaleString("en-NG")}`;
}
export function cn(...c: (string | false | null | undefined)[]) { return c.filter(Boolean).join(" "); }
