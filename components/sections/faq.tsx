import type { FaqItem } from "@/lib/content/types";

export function FaqSection({ title, items }: { title: string; items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <section className="space-y-6 pt-10" aria-labelledby="faq-section-title">
      <div className="space-y-2">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">FAQ</p>
        <h2 id="faq-section-title" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
          {title}
        </h2>
      </div>
      <div className="divide-y divide-slate-800 rounded-2xl border border-slate-700/80 bg-slate-950/40">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="cursor-pointer list-none font-medium text-slate-100 outline-none [&::-webkit-details-marker]:hidden">
              <span className="mr-2 inline-block text-slate-500 transition-transform group-open:rotate-90">›</span>
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
