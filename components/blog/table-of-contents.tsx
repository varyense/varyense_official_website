import Link from "next/link";

export function TableOfContents({ items }: { items: { id: string; heading: string }[] }) {
  if (!items.length) return null;

  return (
    <aside className="rounded-2xl border border-slate-700/80 bg-slate-950/50 p-6" aria-label="Table of contents">
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">On this page</p>
      <ol className="mt-4 space-y-2 text-sm text-slate-200">
        {items.map((item, idx) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} className="hover:text-white underline-offset-4 hover:underline">
              <span className="mr-2 font-mono text-[10px] text-slate-500">{String(idx + 1).padStart(2, "0")}</span>
              {item.heading}
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
