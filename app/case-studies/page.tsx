import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/lib/content/case-studies";
import { createPageMetadata } from "@/lib/seo/metadata";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Case studies", href: "/case-studies" },
] as const;

const description =
  "Read Varyense case studies: real delivery patterns across education, operations portals, and local discovery products.";

export const metadata: Metadata = createPageMetadata({
  title: "Case studies",
  description,
  path: "/case-studies",
});

export default function CaseStudiesIndexPage() {
  return (
    <div className="space-y-12">
      <BreadcrumbSchema items={[...crumbs]} />
      <WebPageSchema name="Case studies" description={description} path="/case-studies" />

      <Breadcrumbs items={[...crumbs]} />

      <header className="space-y-4">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Case studies</p>
        <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.35rem]">Proof in shipping discipline.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Each study highlights challenges, solutions, technologies, and measurable outcomes—paired with structured metadata for search systems.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block">
            <Card className="h-full border-slate-700/80 p-7 transition-colors group-hover:border-slate-500/80">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">{c.industry}</p>
              <h2 className="mt-3 font-varyense text-lg text-slate-50">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{c.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
