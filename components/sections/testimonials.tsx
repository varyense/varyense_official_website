import { Card } from "@/components/ui/card";

const quotes = [
  {
    quote: "Clear communication and pragmatic engineering. We shipped faster without sacrificing stability.",
    name: "Operations lead",
    org: "Facilities company",
  },
  {
    quote: "They treated SEO and performance as product requirements—not a checklist at the end.",
    name: "Product manager",
    org: "SaaS team",
  },
];

export function TestimonialsSection() {
  return (
    <section className="space-y-6 pt-10" aria-labelledby="testimonials-title">
      <div className="space-y-2">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Testimonials</p>
        <h2 id="testimonials-title" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
          Teams value clarity, reliability, and shipping discipline.
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Representative feedback patterns from engagements (anonymized mock quotes for launch content).
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((q) => (
          <Card key={q.quote} className="border-slate-700/80 p-7">
            <p className="text-sm leading-relaxed text-slate-200">&ldquo;{q.quote}&rdquo;</p>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-slate-500">
              {q.name} · {q.org}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
