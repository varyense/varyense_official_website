import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { HeroSection } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { ToolApplicationSchema } from "@/components/seo/tool-application-schema";
import { Card } from "@/components/ui/card";
import { getInternalLinksForToolPage } from "@/lib/seo/internal-linking";
import type { Tool } from "@/lib/tools";
import { breadcrumbsForTool, getRelatedTools } from "@/lib/tools";

export function ToolPageView({ tool }: { tool: Tool }) {
  const crumbs = breadcrumbsForTool(tool);
  const related = getRelatedTools(tool.slug, 6);
  const internalLinks = getInternalLinksForToolPage(tool, 10);

  return (
    <div className="space-y-10">
      <BreadcrumbSchema items={crumbs} />
      <ToolApplicationSchema tool={tool} />
      <FaqSchema faqs={tool.faqs} />

      <Breadcrumbs items={crumbs} />

      <HeroSection
        eyebrow={tool.heroEyebrow}
        title={<span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">{tool.heroTitle}</span>}
        subtitle={tool.heroSubtitle}
        primaryCta={{ href: tool.externalUrl, label: "Open Calculator", external: true }}
      />

      <section className="space-y-4 pt-2" aria-labelledby="tool-intro-heading">
        <h2 id="tool-intro-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
          What this calculator is for
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{tool.introduction}</p>
        <p className="text-xs text-slate-500">
          Hosted application:{" "}
          <a href={tool.externalUrl} className="text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline" target="_blank" rel="noopener noreferrer">
            {tool.externalUrl.replace(/^https?:\/\//, "")}
          </a>
        </p>
      </section>

      <section className="space-y-6 pt-6" aria-labelledby="tool-benefits-heading">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Benefits</p>
          <h2 id="tool-benefits-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
            Why people use this tool
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tool.benefits.map((b) => (
            <Card key={b.title} className="border-slate-700/80 p-7">
              <p className="font-varyense text-[0.95rem] text-slate-50">{b.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{b.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 pt-6" aria-labelledby="tool-usecases-heading">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Use cases</p>
          <h2 id="tool-usecases-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
            Practical workflows
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {tool.useCases.map((u) => (
            <li key={u.title}>
              <Card className="h-full border-slate-700/80 p-6">
                <p className="font-varyense text-[0.95rem] text-slate-50">{u.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{u.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 pt-6" aria-labelledby="related-tools-heading">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Related calculators</p>
          <h2 id="related-tools-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
            Continue exploring the tools library
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            Internal links reinforce topical clusters and help visitors discover adjacent calculators without leaving your informational context on{" "}
            <Link href="/tools" className="text-slate-200 underline-offset-4 hover:underline">
              /tools
            </Link>
            .
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((t) => (
            <li key={t.slug}>
              <Link href={t.path} className="group block h-full">
                <Card className="h-full border-slate-700/80 p-6 transition-colors group-hover:border-accent/60">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{t.category}</p>
                  <p className="mt-2 font-varyense text-[0.95rem] text-slate-50 group-hover:text-white">{t.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.shortDescription}</p>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FaqSection title={`${tool.title}: questions & answers`} items={tool.faqs} />

      <InternalLinksSection title="Related services, industries, and articles" links={internalLinks} />

      <CtaSection
        title="Want calculators inside your product?"
        body="Varyense designs and ships SaaS, marketing sites, and internal tools. If you need authenticated estimators, CRM integrations, or SEO-first content hubs, tell us what you are building."
        href="/contact"
        label="Contact Varyense"
      />
    </div>
  );
}
