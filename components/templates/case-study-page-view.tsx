import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { TechnologiesSection } from "@/components/sections/technologies";
import { ArticleSchema } from "@/components/seo/article-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { InternalLinksSection } from "@/components/seo/internal-links";
import type { CaseStudy } from "@/lib/content/case-studies";
import { breadcrumbsForCaseStudy } from "@/lib/content/case-studies";
import { getRelatedLinks } from "@/lib/seo/internal-linking";
import { Card } from "@/components/ui/card";

export function CaseStudyPageView({ study }: { study: CaseStudy }) {
  const crumbs = breadcrumbsForCaseStudy(study.slug, study.title);
  const related = getRelatedLinks({
    serviceSlugs: ["web-development", "saas-development"],
    blogSlugs: ["technical-seo-checklist-2026"],
    limit: 6,
  });

  return (
    <div className="space-y-10">
      <BreadcrumbSchema items={crumbs} />
      <ArticleSchema
        title={study.title}
        description={study.summary}
        path={`/case-studies/${study.slug}`}
        publishedAt={study.publishedAt}
      />
      <FaqSchema faqs={study.faq} />

      <Breadcrumbs items={crumbs} />

      <HeroSection
        eyebrow="Case study"
        title={<span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">{study.title}</span>}
        subtitle={study.summary}
        primaryCta={{ href: "/contact", label: "Discuss a similar build" }}
        secondaryNote={`Industry focus: ${study.industry}.`}
      />

      <section className="grid gap-6 pt-4 lg:grid-cols-3">
        <Card className="border-slate-700/80 p-6 lg:col-span-2">
          <h2 className="font-varyense text-lg text-slate-50">Challenge</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{study.challenge}</p>
        </Card>
        <Card className="border-slate-700/80 p-6">
          <h2 className="font-varyense text-lg text-slate-50">At a glance</h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-300">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-500">Industry</dt>
              <dd className="mt-1">{study.industry}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-500">Services</dt>
              <dd className="mt-1">{study.services.join(", ")}</dd>
            </div>
          </dl>
        </Card>
      </section>

      <Card className="border-slate-700/80 p-7">
        <h2 className="font-varyense text-lg text-slate-50">Solution</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{study.solution}</p>
      </Card>

      <TechnologiesSection title="Technologies and patterns involved" items={study.technologies} />

      <section className="space-y-4 pt-2">
        <h2 className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">Results</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 sm:text-base">
          {study.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <FaqSection title="Case study FAQs" items={study.faq} />
      <InternalLinksSection title="Explore related capabilities" links={related} />
      <CtaSection title={study.cta.title} body={study.cta.body} href="/contact" label="Contact Varyense" />
    </div>
  );
}
