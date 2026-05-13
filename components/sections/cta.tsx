import Link from "next/link";
import { Card } from "@/components/ui/card";

export function CtaSection(props: { title: string; body: string; href: string; label: string }) {
  return (
    <section className="pt-10">
      <Card className="border-slate-700/80 bg-slate-950/80 p-8 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">Next step</p>
            <h2 className="font-varyense text-lg text-slate-50 sm:text-xl">{props.title}</h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">{props.body}</p>
          </div>
          <Link
            href={props.href}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-accent/90"
          >
            {props.label}
          </Link>
        </div>
      </Card>
    </section>
  );
}
