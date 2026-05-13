import Link from "next/link";
import { SiteHeaderActions } from "@/components/layout/site-header-actions";

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

          <SiteHeaderActions />
        </div>
      </div>
    </header>
  );
}
