import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContentBlocksSection } from "@/components/sections/content-blocks";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import type { TechnologyPageContent } from "@/lib/content/technologies";
import { getRelatedLinks } from "@/lib/seo/internal-linking";
import { Card } from "@/components/ui/card";

export function TechnologyPageView({ content }: { content: TechnologyPageContent }) {
  const related = getRelatedLinks({
    serviceSlugs: content.relatedServiceSlugs,
    industrySlugs: content.relatedIndustrySlugs,
    blogSlugs: content.relatedBlogSlugs,
    limit: 8,
  });

  return (
    <div className="space-y-10">
      <BreadcrumbSchema items={content.breadcrumbs} />
      <WebPageSchema name={content.title} description={content.summary} path={content.path} />
      <FaqSchema faqs={content.faq} />

      <Breadcrumbs items={content.breadcrumbs} />

      <HeroSection
        eyebrow={content.heroEyebrow}
        title={<span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">{content.heroTitle}</span>}
        subtitle={content.heroSubtitle}
        primaryCta={{ href: "/contact", label: "Discuss implementation details" }}
      />

      <section className="space-y-4 pt-4">
        <h2 className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">Technology overview</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{content.overview}</p>
      </section>

      <section className="grid gap-6 pt-6 lg:grid-cols-2">
        <Card className="border-slate-700/80 p-7">
          <h2 className="font-varyense text-lg text-slate-50">Why teams choose it</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            {content.whyChoose.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Card>
        <Card className="border-slate-700/80 p-7">
          <h2 className="font-varyense text-lg text-slate-50">Typical projects</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            {content.typicalProjects.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Card>
      </section>

      <ContentBlocksSection blocks={content.blocks} />
      <TestimonialsSection />
      <FaqSection title={`${content.title}: FAQs`} items={content.faq} />
      <InternalLinksSection title="Where this technology shows up in our work" links={related} />
      <CtaSection
        title="Need engineers who ship with conventions?"
        body="Tell us about your codebase, release cadence, and quality bar, we’ll match you with a pragmatic plan."
        href="/contact"
        label="Contact Varyense"
      />
    </div>
  );
}
