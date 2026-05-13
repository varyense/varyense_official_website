import type { ContentBlock } from "@/lib/content/types";

/** Semantic sections for AI retrieval / featured snippets (clear H2 + short paragraphs). */
export function ContentBlocksSection({ blocks }: { blocks: ContentBlock[] }) {
  if (!blocks.length) return null;

  return (
    <section className="space-y-8 pt-10" aria-label="Key topics">
      {blocks.map((b) => (
        <article key={b.id} className="space-y-3">
          <h2 className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">{b.title}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{b.body}</p>
        </article>
      ))}
    </section>
  );
}
