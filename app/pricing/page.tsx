import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { PricingCard } from "@/components/ui/pricing-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { tiers } from "@/mock/products";
import { faqs } from "@/mock/faqs";
import { ApplyForm } from "./apply-form";
import { Check, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = { title: "Membership & pricing" };

const COMPARE = [
  { label: "Live workshops (2/month)", monthly: true, annual: true, founders: true },
  { label: "Members-only community", monthly: true, annual: true, founders: true },
  { label: "Monthly office hours", monthly: true, annual: true, founders: true },
  { label: "Resource vault access", monthly: true, annual: true, founders: true },
  { label: "1:1 with a founder mentor", monthly: false, annual: "1 / year", founders: "8 / year" },
  { label: "Members' welcome dinner", monthly: false, annual: true, founders: true },
  { label: "Priority replies", monthly: false, annual: true, founders: true },
  { label: "Founder circle (small group)", monthly: false, annual: false, founders: true },
  { label: "Warm intros (investors/operators)", monthly: false, annual: false, founders: true },
  { label: "Invite a co-founder", monthly: false, annual: false, founders: true },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-ink text-white -mt-[70px] pt-[70px] border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="chip chip-gold-outline">Pricing & application</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[76px] font-semibold tracking-tight leading-[1.02] mt-6">
            Three ways to join the room.
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-2xl leading-relaxed">
            Everyone applies. We read every application and come back within 5 business days.
            About 40% of applications are accepted.
          </p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <PricingCard key={t.id} name={t.name} price={t.price} interval={t.interval} tagline={t.tagline} features={t.features} cta={t.cta} featured={t.featured} href="#apply" />
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section tone="canvas" pad="lg">
        <SectionHeader eyebrow="Compare" title="What's in each tier." />
        <div className="overflow-x-auto -mx-4 md:mx-0 rounded-2xl border border-line-soft bg-white">
          <table className="min-w-[720px] w-full text-left">
            <thead>
              <tr className="border-b border-line-soft">
                <th className="p-5 text-[13px] muted font-medium">Feature</th>
                <th className="p-5 text-[13px] font-semibold text-center">Monthly</th>
                <th className="p-5 text-[13px] font-semibold text-center bg-accent-soft">Annual</th>
                <th className="p-5 text-[13px] font-semibold text-center">Founders</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((r) => (
                <tr key={r.label} className="border-b border-line-soft last:border-0">
                  <td className="p-5 text-[14px]">{r.label}</td>
                  <Cell v={r.monthly} />
                  <Cell v={r.annual} accent />
                  <Cell v={r.founders} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Apply form */}
      <Section pad="lg" id="apply">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow">The application</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mt-3">Tell us a little.</h2>
            <p className="prose-lede mt-5">A short application — takes about five minutes. We&apos;ll come back within 5 business days.</p>
            <ul className="mt-6 space-y-3 text-[15px] text-[color:var(--charcoal)]">
              <li className="flex items-start gap-3"><Users className="w-4 h-4 text-[color:var(--accent-ink)] mt-1" />You need to be actively building or doing serious work.</li>
              <li className="flex items-start gap-3"><Sparkles className="w-4 h-4 text-[color:var(--accent-ink)] mt-1" />We read every word. Real thought &gt; polish.</li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[color:var(--accent-ink)] mt-1" />No fee to apply. You only pay if accepted.</li>
            </ul>
          </div>
          <div className="lg:col-span-7"><ApplyForm /></div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="graphite" pad="lg">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow-light">FAQ</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mt-3 text-white">Application & billing.</h2>
            <Link href="/faq" className="btn btn-outline-light btn-sm mt-6">Full FAQ</Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white/[.03] border border-line divide-y divide-[color:var(--line)]">
              {faqs.slice(0, 6).map((f) => (
                <details key={f.id} className="group px-5 md:px-6 py-4">
                  <summary className="cursor-pointer flex items-center justify-between gap-4 text-white text-[15px] font-medium">{f.question}<span className="text-white/60 group-open:rotate-45 transition-transform text-xl">+</span></summary>
                  <p className="mt-3 text-[14px] text-white/70 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section pad="sm">
        <CtaSection eyebrow="Questions first?" title="We're happy to answer." primary={{ label: "Contact us", href: "/contact" }} secondary={{ label: "Read the FAQ", href: "/faq" }} tone="light" />
      </Section>
    </>
  );
}

function Cell({ v, accent }: { v: boolean | string; accent?: boolean }) {
  return (
    <td className={`p-5 text-center text-[13.5px] ${accent ? "bg-accent-soft/40" : ""}`}>
      {v === true ? <Check className="w-4 h-4 mx-auto text-[color:var(--accent-ink)]" /> : v === false ? <span className="text-[color:var(--slate)]">—</span> : <span className="font-medium">{v}</span>}
    </td>
  );
}
