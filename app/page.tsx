import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Coffee, Handshake, Sparkles, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PricingCard } from "@/components/ui/pricing-card";
import { siteConfig } from "@/lib/site-config";
import { benefits, calendar, members, tiers } from "@/mock/products";
import { testimonials } from "@/mock/testimonials";
import { faqs } from "@/mock/faqs";
import { ApplyCta } from "./apply-cta";

const iconMap = {
  sparkles: Sparkles, users: Users, coffee: Coffee, book: BookOpen, handshake: Handshake, calendar: Calendar,
} as const;

export default function HomePage() {
  return (
    <>
      {/* Dark, cinematic hero */}
      <section className="relative bg-ink text-white overflow-hidden -mt-[70px] pt-[70px]">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-gold pointer-events-none" />
        <div className="container-x pt-16 md:pt-24 pb-20 md:pb-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 chip chip-gold-outline"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />{siteConfig.hero.tag}</div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-[80px] lg:text-[104px] font-semibold tracking-tighter leading-[0.98] mt-6">
              A quiet room<br />for <span className="text-[color:var(--accent)] italic">serious</span> builders.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mt-8 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.brand.name} is a private members&apos; club for African creators, founders and operators
              who take their work — and each other — seriously.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href={siteConfig.hero.primaryCta.href} className="btn btn-accent btn-lg">{siteConfig.hero.primaryCta.label} <ArrowRight className="w-4 h-4" /></Link>
              <Link href={siteConfig.hero.secondaryCta.href} className="btn btn-outline-light btn-lg">{siteConfig.hero.secondaryCta.label}</Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {siteConfig.stats.map((s) => (
              <div key={s.label} className="border-t border-line pt-4">
                <div className="font-display text-3xl md:text-4xl font-semibold tabular-nums text-[color:var(--accent)]">{s.value}</div>
                <div className="text-[12px] text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — inside the club */}
      <Section pad="lg" id="benefits">
        <SectionHeader eyebrow="Inside the club" title="What membership actually is." lede="Six things — done deliberately, on a small scale. Nothing is bolted on. Everything works because the room is small." align="center" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <div key={b.title} className="card p-7">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)]"><Icon className="w-5 h-5" /></span>
                  <span className="text-[12px] muted tabular-nums font-medium">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mt-5">{b.title}</h3>
                <p className="text-[14.5px] text-[color:var(--charcoal)] leading-relaxed mt-2">{b.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Calendar */}
      <Section tone="graphite" pad="lg" id="calendar">
        <SectionHeader eyebrow="What's happening" title="The next 60 days in the room." lede="Two live workshops every month, plus office hours, salons, and one or two IRL gatherings a year." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {calendar.map((c) => (
            <div key={c.title} className="card-dark p-5 flex items-start gap-4">
              <div className="text-center border-r border-line pr-4">
                <div className="text-[11px] uppercase tracking-[.18em] text-white/50">{c.date.split(" ")[0]}</div>
                <div className="font-display text-3xl font-semibold text-[color:var(--accent)] tabular-nums leading-none mt-1">{c.date.split(" ")[1]}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-[.14em] text-white/50">{c.type.replace("-", " ")}</div>
                <div className="font-display text-lg font-semibold mt-1">{c.title}</div>
                {c.presenter && <div className="text-[12px] text-white/50 mt-1">with {c.presenter}</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/pricing" className="btn btn-accent">See all upcoming events <ArrowRight className="w-4 h-4" /></Link></div>
      </Section>

      {/* Members */}
      <Section pad="lg" id="members">
        <SectionHeader eyebrow="Who's in the room" title="A small cross-section of members." lede="Full member directory is only visible inside the club. Here's a public glimpse." />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {members.map((m) => (
            <div key={m.id} className="card p-5 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[color:var(--ink)] text-[color:var(--accent)] flex items-center justify-center font-display font-semibold text-lg">
                {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
              </div>
              <div className="mt-3 font-medium text-[14px]">{m.name}</div>
              <div className="text-[12px] muted mt-0.5 leading-snug">{m.role}</div>
              <div className="text-[11px] text-[color:var(--accent-ink)] mt-1">{m.company}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder / why */}
      <Section tone="canvas" pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md rounded-3xl overflow-hidden bg-canvas border border-line-soft">
              <Image src={siteConfig.founder.portrait} alt={siteConfig.founder.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">Founder&apos;s note</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mt-4">Why I built the room I wanted.</h2>
            <p className="prose-lede mt-5 max-w-xl">{siteConfig.founder.shortBio}</p>
            <p className="mt-6 text-[14px] muted flex items-center gap-2"><Users className="w-4 h-4" /> {siteConfig.founder.metric}</p>
            <div className="mt-6"><Link href="/about" className="btn btn-outline">Read more about the club</Link></div>
          </div>
        </div>
      </Section>

      {/* Member stories */}
      <Section pad="lg">
        <SectionHeader eyebrow="Member notes" title="What members say — mostly quietly." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.slice(0, 6).map((t) => <TestimonialCard key={t.id} t={t} />)}
        </div>
      </Section>

      {/* Pricing */}
      <Section tone="graphite" pad="lg" id="pricing">
        <SectionHeader eyebrow="Membership" title="Three ways in." lede="Everyone applies — even monthly members. We come back within 5 business days." align="center" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <PricingCard key={t.id} name={t.name} price={t.price} interval={t.interval} tagline={t.tagline} features={t.features} cta={t.cta} featured={t.featured} href="/pricing" />
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] text-white/50">{siteConfig.commerce.trust.join(" · ")}</p>
      </Section>

      {/* Apply CTA form */}
      <Section pad="lg" id="apply">
        <ApplyCta />
      </Section>

      {/* FAQ */}
      <Section tone="canvas" pad="lg">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Frequently asked" title="Application, billing, and life in the club." />
            <Link href="/faq" className="btn btn-outline">Full FAQ</Link>
          </div>
          <div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 6)} /></div>
        </div>
      </Section>
    </>
  );
}
