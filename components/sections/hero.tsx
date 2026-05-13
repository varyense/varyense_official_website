import Link from "next/link";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export function HeroSection(props: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  /** Use `external: true` (or an `https?://` href) to open in a new tab with safe rel attributes. */
  primaryCta?: { href: string; label: string; external?: boolean };
  secondaryNote?: string;
}) {
  const cta = props.primaryCta;
  const isExternal =
    !!cta && (Boolean(cta.external) || cta.href.startsWith("http://") || cta.href.startsWith("https://"));

  return (
    <section className="space-y-8">
      <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">{props.eyebrow}</p>
      <div className="space-y-5">
        <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.35rem] sm:leading-[1.12] lg:text-[2.65rem]">
          {props.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{props.subtitle}</p>
      </div>
      {props.primaryCta ? (
        <div className="pt-2">
          {isExternal ? (
            <a
              href={props.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_20px_rgba(148,163,184,0.35)] transition-colors hover:bg-accent/90"
            >
              {props.primaryCta.label}
            </a>
          ) : (
            <Link
              href={props.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_20px_rgba(148,163,184,0.35)] transition-colors hover:bg-accent/90"
            >
              {props.primaryCta.label}
            </Link>
          )}
        </div>
      ) : null}
      {props.secondaryNote ? (
        <Card className="border-slate-700/80 bg-slate-950/60 p-5 text-sm text-slate-300">{props.secondaryNote}</Card>
      ) : null}
    </section>
  );
}
