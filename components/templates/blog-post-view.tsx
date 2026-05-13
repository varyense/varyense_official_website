import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { ArticleSchema } from "@/components/seo/article-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { InternalLinksSection } from "@/components/seo/internal-links";
import type { BlogPost } from "@/lib/content/blog";
import { breadcrumbsForPost, getBlogPost } from "@/lib/content/blog";
import { getRelatedLinks } from "@/lib/seo/internal-linking";
import type { InternalLink } from "@/lib/seo/internal-linking";

function relatedPosts(post: BlogPost): InternalLink[] {
  return post.relatedSlugs
    .map((slug) => {
      const p = getBlogPost(slug);
      return p ? { href: `/blog/${p.slug}`, label: p.title, description: p.summary } satisfies InternalLink : null;
    })
    .filter(Boolean) as InternalLink[];
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const crumbs = breadcrumbsForPost(post.slug, post.title);
  const tocItems = post.sections.map((s) => ({ id: s.id, heading: s.heading }));
  const related = relatedPosts(post);
  const extra = getRelatedLinks({ serviceSlugs: ["web-development", "saas-development"], limit: 4 });
  const merged = [...related, ...extra.filter((l) => !related.some((r) => r.href === l.href))].slice(0, 8);

  return (
    <div className="space-y-10">
      <BreadcrumbSchema items={crumbs} />
      <ArticleSchema
        title={post.title}
        description={post.summary}
        path={`/blog/${post.slug}`}
        publishedAt={post.publishedAt}
        modifiedAt={post.updatedAt}
        authorName={post.author}
      />
      <FaqSchema faqs={post.faq} />

      <Breadcrumbs items={crumbs} />

      <header className="space-y-4">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Blog</p>
        <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.2rem]">{post.title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{post.summary}</p>
        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
          <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} min read</span>
          <span aria-hidden>·</span>
          <span>{post.author}</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full border border-slate-700/80 px-3 py-1 text-[11px] text-slate-200">
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <article className="prose prose-invert prose-slate max-w-none">
          {post.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2>{s.heading}</h2>
              <p>{s.content}</p>
            </section>
          ))}
        </article>
        <div className="space-y-8 lg:sticky lg:top-28">
          <TableOfContents items={tocItems} />
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/50 p-6 text-sm text-slate-300">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">AI / search note</p>
            <p className="mt-3 leading-relaxed">
              This article uses explicit headings, neutral definitions, and an FAQ section to improve extractability for AI overviews and semantic search—without changing the underlying technical claims.
            </p>
          </div>
        </div>
      </div>

      <FaqSection title="Article FAQ" items={post.faq} />
      <InternalLinksSection title="Continue reading" links={merged} />
      <CtaSection
        title="Want help implementing this on your stack?"
        body="Send your constraints and links to your current site or repo overview. We’ll reply with practical next steps."
        href="/contact"
        label="Contact Varyense"
      />
    </div>
  );
}
