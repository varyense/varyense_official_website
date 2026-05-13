"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/navigation";
import { isNavLinkActive } from "@/lib/nav-active";

export function MobileMenu({ items, pathname, hash }: { items: NavItem[]; pathname: string; hash: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-200"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      <div
        id="mobile-menu-panel"
        className={cn(
          "fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl transition-opacity",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">Navigate</p>
          <button
            type="button"
            className="rounded-full border border-slate-700/80 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-200"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <nav className="mx-auto flex max-w-screen-2xl flex-col gap-2 px-5 pb-10" aria-label="Mobile">
          {items.map((item) => {
            const current = isNavLinkActive(item.href, pathname, hash);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-sm transition-colors",
                  current
                    ? "border-slate-400/40 bg-slate-100/[0.08] text-white shadow-[0_0_24px_rgba(148,163,184,0.14)] ring-1 ring-slate-400/25"
                    : "border-slate-800/80 bg-slate-950/40 text-slate-100 hover:border-slate-600/80 hover:bg-slate-900/50",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
