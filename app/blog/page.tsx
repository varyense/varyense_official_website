import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/lib/content/blog";
import { createPageMetadata } from "@/lib/seo/metadata";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
] as const;

const description =
  "Articles on Next.js SaaS architecture, technical SEO, performance, and pragmatic AI product patterns, written for builders and buyers.";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description,
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <div className="space-y-12">
      <BreadcrumbSchema items={[...crumbs]} />
      <WebPageSchema name="Blog" description={description} path="/blog" />

      <Breadcrumbs items={[...crumbs]} />

      <header className="space-y-4">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Blog</p>
        <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.35rem]">Insights, Ideas & Technology Trends.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        Explore expert articles on software development, SaaS, AI, product engineering, and modern technologies shaping digital businesses.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
            <Card className="h-full border-slate-700/80 p-7 transition-colors group-hover:border-slate-500/80">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                {new Date(p.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} ·{" "}
                {p.readingTimeMinutes} min read
              </p>
              <h2 className="mt-3 font-varyense text-lg text-slate-50">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
