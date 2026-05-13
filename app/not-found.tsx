import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page not found",
  description: `The requested page could not be found on ${siteConfig.name}.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 text-center">
      <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">404</p>
      <h1 className="font-varyense text-3xl text-slate-50 sm:text-4xl">This page could not be found.</h1>
      <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
        If you followed a link from search results, it may be outdated. Try the homepage or contact us for help finding
        what you need.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
