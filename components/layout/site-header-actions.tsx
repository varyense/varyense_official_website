"use client";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { HeaderNavLink } from "@/components/layout/header-nav-link";
import { useHashSync } from "@/components/layout/use-hash-sync";
import { primaryNav } from "@/lib/navigation";

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/refund-policy", label: "Refunds" },
] as const;

export function SiteHeaderActions() {
  const { pathname, hash } = useHashSync();

  return (
    <>
      <nav
        className="hidden flex-wrap items-center justify-end gap-1.5 text-[11px] font-medium text-slate-300 sm:flex sm:max-w-[62%] lg:max-w-none"
        aria-label="Primary"
      >
        {primaryNav.map((link) => (
          <HeaderNavLink key={link.href} href={link.href} pathname={pathname} hash={hash}>
            {link.label}
          </HeaderNavLink>
        ))}
        {legalLinks.map((link) => (
          <HeaderNavLink key={link.href} href={link.href} pathname={pathname} hash={hash}>
            {link.label}
          </HeaderNavLink>
        ))}
      </nav>

      <div className="flex items-center gap-3 sm:hidden">
        <MobileMenu items={[...primaryNav, ...legalLinks]} pathname={pathname} hash={hash} />
      </div>
    </>
  );
}
