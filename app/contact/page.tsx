import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqs } from "@/mock/faqs";
import { siteConfig } from "@/lib/site-config";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white -mt-[70px] pt-[70px] border-b border-line">
        <div className="container-x py-16 md:py-20 max-w-4xl">
          <div className="chip chip-gold-outline">Contact</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02] mt-6">Get in touch.</h1>
          <p className="text-lg text-white/70 mt-5 max-w-2xl">Membership questions, press, or a note about the club. We reply within one business day.</p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <Row icon={Mail} label="Email" value={siteConfig.brand.email} href={`mailto:${siteConfig.brand.email}`} />
            <Row icon={MessageCircle} label="WhatsApp" value={siteConfig.brand.whatsapp} href={`https://wa.me/${siteConfig.brand.whatsapp.replace(/\D/g, "")}`} />
            <Row icon={MapPin} label="Cities" value={siteConfig.brand.city} />
            <Row icon={Clock} label="Response time" value="Within one business day" />
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </Section>

      <Section tone="canvas" pad="lg">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="eyebrow">Quick answers</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-3">These might help first.</h2>
          </div>
          <div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 5)} /></div>
        </div>
      </Section>
    </>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const c = (<><div className="w-11 h-11 rounded-xl bg-canvas flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></div><div><div className="text-[12px] muted">{label}</div><div className="text-[15.5px] font-medium">{value}</div></div></>);
  if (href) return <a href={href} className="flex items-center gap-4 hover:opacity-90">{c}</a>;
  return <div className="flex items-center gap-4">{c}</div>;
}
