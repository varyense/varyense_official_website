import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/refund-policy", label: "Refunds" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="group inline-flex flex-col leading-tight text-left"
        >
          <span className="font-varyense text-[16px] bg-linear-to-r from-slate-100 via-slate-400 to-slate-500 bg-clip-text text-transparent tracking-[0.20em] font-bold">
            VARYENSE
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-1 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-400 transition-colors hover:text-slate-50"
            >
              <span>{link.label}</span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-slate-200/0 via-slate-300/80 to-slate-200/0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

