import Link from "next/link";
import type { InternalLink } from "@/lib/seo/internal-linking";

export function InternalLinksSection({
  title,
  links,
}: {
  title: string;
  links: InternalLink[];
}) {
  if (!links.length) return null;

  return (
    <section className="space-y-6 pt-6" aria-labelledby="internal-links-heading">
      <div className="space-y-2">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Explore</p>
        <h2 id="internal-links-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
          {title}
        </h2>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group block rounded-2xl border border-slate-700/80 bg-slate-950/40 p-5 transition-colors hover:border-slate-500/80 hover:bg-slate-950/70"
            >
              <p className="font-varyense text-[13px] text-slate-100 group-hover:text-white">{l.label}</p>
              {l.description ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{l.description}</p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
