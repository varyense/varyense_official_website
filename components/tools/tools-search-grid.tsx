"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import type { Tool, ToolCategory } from "@/lib/tools";

const ALL = "All categories" as const;

type ToolsSearchGridProps = {
  tools: Tool[];
  categories: ToolCategory[];
  featured: Tool[];
};

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export function ToolsSearchGrid({ tools, categories, featured }: ToolsSearchGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return tools.filter((t) => {
      const catOk = category === ALL || t.category === category;
      if (!catOk) return false;
      if (!q) return true;
      const blob = [t.title, t.shortDescription, t.category, ...t.keywords].map(normalize).join(" ");
      return blob.includes(q);
    });
  }, [tools, query, category]);

  return (
    <div className="space-y-10 pt-6">
      <section className="space-y-4" aria-labelledby="featured-tools-heading">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Featured</p>
          <h2 id="featured-tools-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
            Popular starting points
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            These calculators cover common finance, energy, AI budgeting, and everyday math workflows—each opens on a dedicated subdomain in a new tab.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((t) => (
            <li key={t.slug}>
              <Card className="flex h-full flex-col border-slate-700/80 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{t.category}</p>
                <p className="mt-3 font-varyense text-[0.95rem] text-slate-50">{t.title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{t.shortDescription}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={t.path}
                    className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-4 py-2 text-xs font-medium text-slate-100 transition-colors hover:border-accent/80 hover:bg-slate-900/60"
                  >
                    Read hub
                  </Link>
                  <a
                    href={t.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-medium text-slate-950 transition-colors hover:bg-accent/90"
                  >
                    Open app
                  </a>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6" aria-labelledby="tools-directory-heading">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Directory</p>
          <h2 id="tools-directory-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
            Searchable calculator library
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            Filter by category or search by keyword. Every card links to an on-site hub page for context and structured data, plus the external calculator where the interaction lives.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <label className="block max-w-md flex-1 text-sm text-slate-300">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Search</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “mortgage”, “token”, or “concrete”"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none ring-accent/40 placeholder:text-slate-600 focus-visible:ring-2"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          <button
            type="button"
            role="tab"
            aria-selected={category === ALL}
            onClick={() => setCategory(ALL)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              category === ALL
                ? "border-accent/80 bg-accent/15 text-slate-50"
                : "border-slate-700/80 text-slate-300 hover:border-slate-500/80"
            }`}
          >
            {ALL}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                category === c
                  ? "border-accent/80 bg-accent/15 text-slate-50"
                  : "border-slate-700/80 text-slate-300 hover:border-slate-500/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((t) => (
            <li key={t.slug}>
              <Card className="flex h-full flex-col border-slate-700/80 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{t.category}</p>
                <p className="mt-3 font-varyense text-[0.95rem] text-slate-50">
                  <Link href={t.path} className="hover:text-white">
                    {t.title}
                  </Link>
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{t.shortDescription}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={t.path}
                    className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-4 py-2 text-xs font-medium text-slate-100 transition-colors hover:border-accent/80 hover:bg-slate-900/60"
                  >
                    Hub page
                  </Link>
                  <a
                    href={t.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-medium text-slate-950 transition-colors hover:bg-accent/90"
                  >
                    Open calculator
                  </a>
                </div>
              </Card>
            </li>
          ))}
        </ul>

        {filtered.length === 0 ? (
          <p className="text-sm text-slate-400">No calculators match that search—try a shorter keyword or reset the category filter.</p>
        ) : null}
      </section>
    </div>
  );
}
