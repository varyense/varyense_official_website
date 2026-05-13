import Link from "next/link";
import { footerExplore, footerLegal } from "@/lib/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-screen-2xl px-6 py-10 text-xs text-muted-foreground">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500">© {year} Varyense</p>
            <p className="max-w-sm text-[13px] leading-relaxed text-slate-400">
              IT support and software delivery—built with clear communication, strong technical SEO foundations, and maintainable architecture.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500">Explore</p>
            <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
              {footerExplore.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-slate-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500">Legal</p>
            <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <Link href="/#projects" className="hover:text-slate-200">
                Projects
              </Link>
              {footerLegal.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-slate-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
