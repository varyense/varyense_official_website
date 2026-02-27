import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500">
          © {year} Varyense. Crafted with care.
        </p>
        <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em]">
          <Link href="/#projects" className="hover:text-slate-200">
            Projects
          </Link>
          <Link href="/terms" className="hover:text-slate-200">
            Terms
          </Link>
          <Link href="/privacy-policy" className="hover:text-slate-200">
            Privacy
          </Link>
          <Link href="/refund-policy" className="hover:text-slate-200">
            Refunds
          </Link>
        </div>
      </div>
    </footer>
  );
}

