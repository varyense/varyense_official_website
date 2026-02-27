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
    <header className="sticky top-0 z-40 px-4 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between rounded-xl border border-slate-800/75 bg-slate-950/65 px-5 py-5 shadow-[0_14px_44px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
          <Link href="/" className="inline-flex items-center">
            <span className="font-varyense text-[13px] bg-linear-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent tracking-[0.26em]">
              VARYENSE
            </span>
          </Link>

          <nav className="hidden items-center gap-1.5 text-[11px] font-medium text-slate-300 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-slate-400 transition-colors hover:bg-slate-900/80 hover:text-slate-50"
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

