"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { isNavLinkActive } from "@/lib/nav-active";

const base =
  "relative rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const inactive = "text-slate-400 hover:bg-slate-900/80 hover:text-slate-50";

const active =
  "bg-slate-100/[0.08] text-slate-50 ring-1 ring-slate-400/35 shadow-[0_0_22px_rgba(148,163,184,0.18)]";

export function HeaderNavLink(props: { href: string; children: ReactNode; pathname: string; hash: string }) {
  const current = isNavLinkActive(props.href, props.pathname, props.hash);

  return (
    <Link href={props.href} className={cn(base, current ? active : inactive)} aria-current={current ? "page" : undefined}>
      <span>{props.children}</span>
    </Link>
  );
}
