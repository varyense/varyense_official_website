import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContentBlocksSection } from "@/components/sections/content-blocks";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { ProcessSection } from "@/components/sections/process";
import { TechnologiesSection } from "@/components/sections/technologies";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import type { ServicePageContent } from "@/lib/content/services";
import { getRelatedLinks } from "@/lib/seo/internal-linking";
import { Card } from "@/components/ui/card";

export function ServicePageView({ content }: { content: ServicePageContent }) {
  const related = getRelatedLinks({
    industrySlugs: content.relatedIndustrySlugs,
    technologySlugs: content.relatedTechnologySlugs,
    blogSlugs: content.relatedBlogSlugs,
    caseStudySlugs: content.relatedCaseStudySlugs,
    limit: 8,
  });

  return (
    <div className="space-y-10">
      <BreadcrumbSchema items={content.breadcrumbs} />
      <ServiceSchema name={content.title} description={content.summary} path={content.path} />
      <FaqSchema faqs={content.faq} />

      <Breadcrumbs items={content.breadcrumbs} />

      <HeroSection
        eyebrow={content.heroEyebrow}
        title={<span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">{content.heroTitle}</span>}
        subtitle={content.heroSubtitle}
        primaryCta={{ href: "/contact", label: "Discuss this service" }}
        secondaryNote="Looking for a different stack or timeline? Tell us your constraints—we’ll propose a phased plan."
      />

      <section className="space-y-4 pt-4">
        <h2 className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">Overview</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{content.overview}</p>
      </section>

      <section className="space-y-6 pt-6">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Benefits</p>
          <h2 className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">Why teams choose this engagement model</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.benefits.map((b) => (
            <Card key={b.title} className="border-slate-700/80 p-7">
              <p className="font-varyense text-[0.95rem] text-slate-50">{b.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{b.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <TechnologiesSection items={content.technologies} />
      <ProcessSection steps={content.process} />
      <ContentBlocksSection blocks={content.blocks} />
      <TestimonialsSection />
      <FaqSection title={`${content.title}: common questions`} items={content.faq} />
      <InternalLinksSection title="Related services, industries, and articles" links={related} />
      <CtaSection
        title="Tell us what you’re building"
        body="Email your goals, timeline, and constraints. We’ll respond with next steps and a clear proposal outline."
        href="/contact"
        label="Contact Varyense"
      />
    </div>
  );
}
