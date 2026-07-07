# The Kola Room — Template 10

A premium FinStore template for **private membership clubs, communities and paid groups**. Dark, quiet, and deliberately small — designed to feel exclusive without shouting.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**.
Design: **Space Grotesk** (display) + **Inter** (body). Midnight ink + champagne gold accent.

## Pages

`/` Home (dark cinematic hero + benefits + calendar + members + pricing + apply) · `/pricing` Tiers, comparison table & application form · `/about` · `/contact` · `/faq` · `/checkout` (recurring, tier-select) · `/thank-you` (welcome to the room)

## Customise

- **Brand, founder & tagline** → `lib/site-config.ts`
- **Pricing tiers, benefits, calendar, members** → `mock/products.ts`
- **Testimonials** → `mock/testimonials.ts`
- **FAQs** → `mock/faqs.ts`
- **Nav** → `mock/navigation.ts`
- **Design tokens** → `app/globals.css`

## Run

```bash
npm install
npm run dev
```
