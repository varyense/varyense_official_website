"use client";

import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground">
      <div className="flare-layer" aria-hidden="true" />
      {/* Preloader overlay */}
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-preloader/95 backdrop-blur-3xl transition-opacity duration-700",
          isReady ? "opacity-0" : "opacity-100",
        )}
        aria-hidden={isReady}
      >
        <div className="relative flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <p className="font-varyense text-[15px] bg-linear-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent">
              VARYENSE
            </p>
            <p className="max-w-xs text-center text-[11px] text-slate-400">
              Loading…
            </p>
          </div>
          <div className="mt-2 h-px w-32 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-1/2 animate-slide-right bg-linear-to-r from-slate-300/0 via-slate-100/90 to-slate-300/0" />
          </div>
        </div>
      </div>

      {/* Scene chrome */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-y-0 left-[-10%] w-[40%] bg-[radial-gradient(circle_at_left,rgba(15,23,42,0.8),transparent_55%)]" />
        <div className="absolute inset-y-0 right-[-18%] w-[46%] bg-[radial-gradient(circle_at_right,rgba(15,23,42,0.8),transparent_55%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:py-20 lg:py-24">
            {children}
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

