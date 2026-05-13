export function TechnologiesSection(props: { title?: string; items: string[] }) {
  if (!props.items.length) return null;

  return (
    <section className="space-y-4 pt-10" aria-labelledby="technologies-title">
      <div className="space-y-2">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Technologies</p>
        <h2 id="technologies-title" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
          {props.title ?? "Tools and platforms we commonly use"}
        </h2>
      </div>
      <ul className="flex flex-wrap gap-2">
        {props.items.map((t) => (
          <li
            key={t}
            className="rounded-full border border-slate-700/80 bg-slate-950/50 px-3 py-1 text-xs text-slate-200"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
