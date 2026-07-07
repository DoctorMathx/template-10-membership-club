import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { calendar } from "@/mock/products";
import { CheckCircle2, MessageCircle, Calendar, BookOpen, ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = { title: "Welcome to the room" };

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-ink text-white -mt-[70px] pt-[70px] border-b border-line relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-gold pointer-events-none" />
        <div className="container-x py-16 md:py-24 max-w-3xl relative">
          <div className="chip chip-gold-outline"><CheckCircle2 className="w-3.5 h-3.5" /> You&apos;re in</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[80px] font-semibold tracking-tight leading-[1.02] mt-6">
            Welcome to <span className="text-[color:var(--accent)] italic">the room.</span>
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-xl">
            Your membership is active. Below is everything you need to settle in. It&apos;s also on its way to your inbox.
          </p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <Step icon={MessageCircle} title="Join the community" body="Your private invite link is in your welcome email. Say hello in #new-members." cta="Open community" href="#" />
            <Step icon={Calendar} title="Add the calendar" body="Two workshops a month, office hours, salons, and IRL events." cta="Add to calendar" href="#" />
            <Step icon={BookOpen} title="Open the vault" body="Every template and playbook we've built for members. Bookmark it." cta="Open the vault" href="#" />
            <Step icon={Users} title="Introduce yourself" body="A one-paragraph intro in #new-members works better than any bio. Members remember it." />
          </div>

          <aside className="lg:col-span-5">
            <div className="p-6 md:p-8 rounded-2xl border border-line-soft bg-canvas">
              <div className="eyebrow mb-3">Your first month</div>
              <div className="font-display text-2xl font-semibold">What&apos;s coming up.</div>
              <ul className="mt-5 space-y-3">
                {calendar.slice(0, 5).map((c) => (
                  <li key={c.title} className="flex items-start gap-4 pb-3 border-b border-line-soft last:border-0">
                    <div className="text-center border-r border-line-soft pr-3">
                      <div className="text-[11px] uppercase tracking-[.18em] muted">{c.date.split(" ")[0]}</div>
                      <div className="font-display text-2xl font-semibold text-[color:var(--accent-ink)] tabular-nums leading-none mt-0.5">{c.date.split(" ")[1]}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-[.14em] muted">{c.type.replace("-", " ")}</div>
                      <div className="text-[14.5px] font-medium mt-0.5 leading-snug">{c.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="canvas" pad="md">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">One last thing.</h2>
          <p className="prose-lede mt-4">The room only works because we all show up carefully. Read the members&apos; agreement in your inbox — it&apos;s short and it matters.</p>
          <Link href="/" className="btn btn-accent btn-lg mt-6">Explore the club <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Section>
    </>
  );
}

function Step({ icon: Icon, title, body, href, cta }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string; href?: string; cta?: string }) {
  return (
    <div className="card p-6 flex items-start gap-5">
      <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)] shrink-0"><Icon className="w-5 h-5" /></div>
      <div className="flex-1">
        <div className="font-display text-lg font-semibold">{title}</div>
        <p className="text-[14px] text-[color:var(--charcoal)] leading-relaxed mt-1">{body}</p>
        {href && cta && <Link href={href} className="btn btn-outline btn-sm mt-4">{cta}</Link>}
      </div>
    </div>
  );
}
