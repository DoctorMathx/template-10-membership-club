"use client";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ApplyForm() {
  const [sent, setSent] = useState(false);
  const [tier, setTier] = useState("annual");
  if (sent) return (
    <div className="p-8 md:p-10 rounded-3xl border border-line-soft bg-canvas">
      <CheckCircle2 className="w-8 h-8 text-[color:var(--accent-ink)]" />
      <h3 className="font-display text-2xl font-semibold mt-4">Application received.</h3>
      <p className="prose-lede mt-3 max-w-md">Thank you. We&apos;ll come back within 5 business days.</p>
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="p-6 md:p-8 rounded-3xl border border-line-soft bg-white space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="name" label="Full name" required />
        <Field id="email" label="Email" type="email" required />
      </div>
      <div>
        <label className="label">Which membership?</label>
        <div className="mt-2 flex gap-2 flex-wrap">
          {[{ id: "monthly", label: "Monthly · ₦24k/mo" }, { id: "annual", label: "Annual · ₦240k/yr" }, { id: "founders", label: "Founders · ₦520k/yr" }].map((t) => (
            <button key={t.id} type="button" onClick={() => setTier(t.id)} className={`chip ${tier === t.id ? "chip-dark" : "hover:border-[color:var(--ink)]"}`}>{t.label}</button>
          ))}
        </div>
      </div>
      <Field id="what" label="What do you do?" placeholder="A short line — role, company, or project" required />
      <Field id="city" label="Where are you based?" placeholder="Lagos, Nairobi, Accra, London…" />
      <div>
        <label className="label" htmlFor="why">Why this room, and why now?</label>
        <textarea id="why" required rows={5} className="input mt-1.5 resize-y" placeholder="A paragraph is enough. Real thought over polish." />
      </div>
      <Field id="referral" label="Anyone in the club refer you? (optional)" placeholder="Name or email" />
      <div className="flex items-center justify-between pt-2">
        <p className="text-[12px] muted">We reply within 5 business days.</p>
        <button className="btn btn-primary btn-lg">Submit application <ArrowRight className="w-4 h-4" /></button>
      </div>
    </form>
  );
}

function Field({ id, label, type = "text", placeholder, required }: { id: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div><label className="label" htmlFor={id}>{label}</label><input id={id} type={type} required={required} placeholder={placeholder} className="input mt-1.5" /></div>;
}
