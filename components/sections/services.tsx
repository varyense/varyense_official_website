import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { InternalLink } from "@/lib/seo/internal-linking";

export function ServicesSection(props: {
  eyebrow?: string;
  title: string;
  description?: string;
  services: InternalLink[];
}) {
  return (
    <section className="space-y-8 pt-10" aria-labelledby="services-section-title">
      <div className="space-y-3">
        {props.eyebrow ? (
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">{props.eyebrow}</p>
        ) : null}
        <h2 id="services-section-title" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
          {props.title}
        </h2>
        {props.description ? <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">{props.description}</p> : null}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {props.services.map((s) => (
          <Link key={s.href} href={s.href} className="group block">
            <Card className="h-full border-slate-700/80 p-7 transition-colors group-hover:border-slate-500/80">
              <p className="font-varyense text-[0.95rem] text-slate-50">{s.label}</p>
              {s.description ? <p className="mt-3 text-[14px] leading-relaxed text-slate-300">{s.description}</p> : null}
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
