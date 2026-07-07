"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { tiers } from "@/mock/products";
import { siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, ShieldCheck, Check, Sparkles } from "lucide-react";

export function CheckoutClient() {
  const router = useRouter();
  const [tierId, setTierId] = useState("annual");
  const [submitting, setSubmitting] = useState(false);
  const active = tiers.find((t) => t.id === tierId) ?? tiers[1];
  const total = active.price;
  const interval = active.interval === "month" ? "monthly" : "yearly";

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitting(true); setTimeout(() => router.push("/thank-you"), 700); };

  return (
    <div className="bg-paper min-h-screen">
      <div className="container-x py-10 md:py-14">
        <Link href="/pricing" className="inline-flex items-center gap-2 text-[13.5px] muted hover:text-[color:var(--ink)]"><ArrowLeft className="w-4 h-4" /> Back to pricing</Link>

        <div className="mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <form onSubmit={submit} className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl border border-line-soft bg-white">
              <h1 className="font-display text-3xl md:text-[34px] font-semibold tracking-tight">Join The Kola Room</h1>
              <p className="text-[14px] muted mt-1">This is the final step. You&apos;ll get access within an hour.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field id="name" label="Full name" required />
                <Field id="email" label="Email" type="email" required />
                <Field id="city" label="City" placeholder="Lagos, Nairobi…" />
                <Field id="company" label="Company / role" />
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-line-soft bg-white">
              <h2 className="font-display text-xl font-semibold">Choose your tier</h2>
              <div className="mt-4 space-y-2">
                {tiers.map((t) => {
                  const isSel = tierId === t.id;
                  return (
                    <label key={t.id} className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${isSel ? "border-[color:var(--ink)] bg-canvas" : "border-line-soft hover:border-[color:var(--ink)]"}`}>
                      <input type="radio" name="tier" checked={isSel} onChange={() => setTierId(t.id)} className="mt-1 accent-black" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <div className="font-medium">{t.name} <span className="text-[12px] muted font-normal">· billed {t.interval}ly</span></div>
                          <div className="font-display font-semibold tabular-nums">{formatPrice(t.price)}<span className="text-[12px] muted font-normal">/{t.interval}</span></div>
                        </div>
                        <p className="text-[13px] muted mt-1">{t.tagline}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-line-soft bg-white">
              <h2 className="font-display text-xl font-semibold">Payment</h2>
              <div className="mt-5 grid sm:grid-cols-3 gap-2">
                {["Card", "Bank transfer", "USSD"].map((m, i) => (
                  <label key={m} className={`flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer ${i === 0 ? "border-[color:var(--ink)] bg-canvas" : "border-line-soft hover:border-[color:var(--ink)]"}`}>
                    <input type="radio" name="method" defaultChecked={i === 0} className="accent-black" />
                    <span className="text-[14px] font-medium">{m}</span>
                  </label>
                ))}
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field id="card" label="Card number" placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-4"><Field id="exp" label="Expiry" placeholder="MM / YY" /><Field id="cvc" label="CVC" placeholder="123" /></div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-line-soft bg-white">
              <label htmlFor="agree" className="text-[13.5px] muted leading-relaxed"><input id="agree" type="checkbox" required defaultChecked className="accent-black mr-2" />I agree to the <Link href="/faq" className="underline underline-offset-4 text-[color:var(--ink)]">membership terms</Link>. I understand this is a recurring {interval} charge and I can cancel any time.</label>
              <button disabled={submitting} className="btn btn-accent btn-lg w-full mt-6">{submitting ? "Processing…" : `Join for ${formatPrice(total)}/${active.interval}`}</button>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {siteConfig.commerce.trust.map((t) => (<div key={t} className="flex items-start gap-2 text-[12.5px] muted"><ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{t}</span></div>))}
              </div>
            </div>
          </form>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="p-6 md:p-8 rounded-2xl border border-line-soft bg-white">
                <h2 className="font-display text-lg font-semibold">Membership summary</h2>
                <div className="mt-5 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-ink text-[color:var(--accent)] flex items-center justify-center font-display font-bold text-xl shrink-0">K</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-medium leading-snug">The Kola Room · {active.name}</div>
                    <div className="text-[12px] muted mt-0.5">{active.tagline}</div>
                  </div>
                  <div className="text-[14px] font-medium tabular-nums">{formatPrice(active.price)}</div>
                </div>

                <div className="mt-5 pt-5 border-t border-line-soft space-y-2 text-[14px]">
                  <div className="flex items-center justify-between"><span className="muted">Billed</span><span className="capitalize">{interval}</span></div>
                  <div className="flex items-center justify-between"><span className="muted">Renews</span><span>Automatic (cancel any time)</span></div>
                  <div className="flex items-center justify-between font-medium"><span>Total today</span><span className="font-display text-xl font-semibold tabular-nums">{formatPrice(total)}</span></div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-ink text-white border border-line">
                <div className="eyebrow-light mb-2">Included in your tier</div>
                <ul className="mt-2 space-y-2">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13.5px] text-white/80"><Check className="w-3.5 h-3.5 text-[color:var(--accent)] mt-1 shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-line-soft flex items-start gap-3"><Sparkles className="w-4 h-4 mt-1 text-[color:var(--accent-ink)]" /><div><div className="text-[14px] font-medium">Access within an hour</div><div className="text-[12.5px] muted mt-0.5">Community invite, calendar, and vault all delivered to your inbox.</div></div></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", placeholder, required }: { id: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div><label className="label" htmlFor={id}>{label}</label><input id={id} type={type} required={required} placeholder={placeholder} className="input mt-1.5" /></div>;
}
