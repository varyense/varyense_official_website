import { Card } from "@/components/ui/card";

export function ProcessSection(props: { title?: string; steps: { step: string; detail: string }[] }) {
  if (!props.steps.length) return null;

  return (
    <section className="space-y-6 pt-10" aria-labelledby="process-title">
      <div className="space-y-2">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Process</p>
        <h2 id="process-title" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
          {props.title ?? "How we deliver"}
        </h2>
      </div>
      <ol className="grid gap-4 md:grid-cols-2">
        {props.steps.map((s, idx) => (
          <li key={s.step}>
            <Card className="h-full border-slate-700/80 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                Step {String(idx + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-varyense text-[0.95rem] text-slate-50">{s.step}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.detail}</p>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
