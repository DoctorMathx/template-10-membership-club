"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ApplyCta() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-10 md:p-16 border border-line">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-gold pointer-events-none" />
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="eyebrow-light">Apply now</div>
        <h3 className="font-display text-4xl md:text-5xl lg:text-[60px] font-semibold tracking-tight mt-4 leading-[1.05]">
          Ready to join <span className="text-[color:var(--accent)] italic">the room?</span>
        </h3>
        <p className="text-lg text-white/70 leading-relaxed mt-5 max-w-lg mx-auto">
          Applications open in Q3. Leave your email and we&apos;ll send the application form the moment it opens.
        </p>

        {sent ? (
          <div className="mt-8 max-w-md mx-auto p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-[color:var(--accent)] mt-0.5" />
            <div>
              <div className="text-white font-medium">You&apos;re on the list.</div>
              <p className="text-white/60 text-sm mt-1">We&apos;ll email {email} the moment applications open.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setSent(true); }} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@work.com" className="input input-dark flex-1" />
            <button className="btn btn-accent btn-lg">Notify me <ArrowRight className="w-4 h-4" /></button>
          </form>
        )}
        <p className="mt-4 text-[12px] text-white/40">Or <Link href="/pricing" className="underline underline-offset-4 hover:text-white">skip ahead and apply now</Link></p>
      </div>
    </div>
  );
}
