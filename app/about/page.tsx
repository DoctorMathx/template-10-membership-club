import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "About the club" };

const VALUES = [
  { title: "Small on purpose", body: "Under 500 members. Ever. When we're full, the door closes until a member leaves." },
  { title: "Read every application", body: "A real human reads every word. No forms disappear into a void." },
  { title: "Quiet by default", body: "No self-promotion, no cold pitching, no threads longer than they need to be." },
  { title: "Africa-first, world-open", body: "Rooted in Lagos, Nairobi and Accra. Members from 34 cities around the world." },
];

const STORY = [
  { year: "2021", title: "The first WhatsApp group", body: "42 people. An accidental beginning." },
  { year: "2022", title: "The first workshops", body: "Two live sessions a month. Started charging a small fee." },
  { year: "2024", title: "The first IRL salon", body: "60 members at a boutique hotel in Lagos. Sold out in 4 days." },
  { year: "2026", title: "412 members", body: "34 cities. A quiet, thriving room." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white -mt-[70px] pt-[70px] border-b border-line relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="container-x py-16 md:py-24 max-w-4xl relative">
          <div className="chip chip-gold-outline">About the club</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[80px] font-semibold tracking-tight leading-[1.02] mt-6">
            A room, built <span className="italic text-[color:var(--accent)]">carefully.</span>
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-2xl leading-relaxed">
            {siteConfig.brand.name} is a small, moderated, invitation-audited private membership for
            African creators, founders and operators.
          </p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line-soft">
              <Image src={siteConfig.founder.portrait} alt={siteConfig.founder.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">Founder</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mt-3">{siteConfig.founder.name}</h2>
            <p className="text-[15px] muted mt-2">{siteConfig.founder.role}</p>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-[color:var(--charcoal)] max-w-xl">
              <p>{siteConfig.founder.shortBio}</p>
              <p>The room began as an accidental WhatsApp group of 42 people. It grew, slowly, only because we said no more often than we said yes. Today, we&apos;re still under 500 members. That is the plan.</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="container-x">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-canvas border border-line-soft">
          <Image src="/img/hero-scene.jpg" alt="Members at a salon" fill sizes="1200px" className="object-cover" />
        </div>
      </div>

      <Section tone="canvas" pad="lg">
        <SectionHeader eyebrow="What we hold" title="Four things we don't compromise on." />
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {VALUES.map((v, i) => (
            <div key={v.title} className="card p-7">
              <div className="font-display text-[26px] font-semibold tabular-nums text-[color:var(--accent-ink)]">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-xl font-semibold mt-3">{v.title}</h3>
              <p className="text-[15px] text-[color:var(--charcoal)] leading-relaxed mt-2">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section pad="lg">
        <SectionHeader eyebrow="Milestones" title="A short timeline." />
        <div className="grid md:grid-cols-4 gap-6">
          {STORY.map((s) => (
            <div key={s.year} className="pt-6 border-t-2 border-[color:var(--ink)]">
              <div className="font-display text-2xl font-semibold tabular-nums text-[color:var(--accent-ink)]">{s.year}</div>
              <div className="mt-2 font-medium">{s.title}</div>
              <p className="text-[14px] text-[color:var(--charcoal)] leading-relaxed mt-2">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section pad="sm">
        <CtaSection eyebrow="Ready?" title="Apply for the room." primary={{ label: "Apply now", href: "/pricing" }} secondary={{ label: "Talk first", href: "/contact" }} tone="light" />
      </Section>
    </>
  );
}
