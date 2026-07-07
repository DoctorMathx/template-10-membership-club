import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { footerLinks } from "@/mock/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-white border-t border-line">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[color:var(--accent)] flex items-center justify-center text-[color:var(--ink)] font-bold text-[13px]">K</span>
              <span className="font-display font-semibold text-[19px] tracking-tight">{siteConfig.brand.name}</span>
            </div>
            <p className="mt-4 text-[14.5px] text-white/60 max-w-sm leading-relaxed">{siteConfig.brand.tagline}</p>
            <div className="mt-6 flex items-center gap-2 text-[12px] text-white/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
              412 members · applications open
            </div>
          </div>
          <div>
            <h4 className="eyebrow-light mb-4">The club</h4>
            <ul className="space-y-2.5">{footerLinks.club.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] text-white/60 hover:text-white">{i.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="eyebrow-light mb-4">Help</h4>
            <ul className="space-y-2.5">{footerLinks.help.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] text-white/60 hover:text-white">{i.label}</Link></li>))}</ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-2">
          <p className="text-[12px] text-white/40">© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
          <p className="text-[12px] text-white/40">{siteConfig.brand.city} · Built on FinStore</p>
        </div>
      </div>
    </footer>
  );
}
