import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { HeroSection } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { ToolsIndexSchema } from "@/components/seo/tools-index-schema";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import { getRelatedLinks } from "@/lib/seo/internal-linking";
import { getAllTools, getFeaturedTools, getToolCategories, toolsIndexFaqs } from "@/lib/tools";
import { ToolsSearchGrid } from "@/components/tools/tools-search-grid";

const toolsBreadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
];

export function ToolsLandingView() {
  const all = getAllTools();
  const featured = getFeaturedTools();
  const categories = getToolCategories();
  const explore = getRelatedLinks({
    serviceSlugs: ["web-development", "saas-development", "ai-development"],
    blogSlugs: ["technical-seo-checklist-2026", "building-scalable-saas-with-nextjs"],
    limit: 8,
  });

  return (
    <div className="space-y-10">
      <BreadcrumbSchema items={toolsBreadcrumbs} />
      <ToolsIndexSchema />
      <WebPageSchema
        name="Calculators & tools"
        description="Free calculators hosted by Varyense, energy, finance, health, construction, AI token costs, and more, each with SEO hub pages on varyense.com."
        path="/tools"
      />
      <FaqSchema faqs={toolsIndexFaqs} />

      <Breadcrumbs items={toolsBreadcrumbs} />

      <HeroSection
        eyebrow="Tools"
        title={<span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">Smart Calculators for Everyday & Business Needs.</span>}
        subtitle="Explore our collection of fast, accurate, and easy-to-use calculators designed for finance, health, engineering, productivity, and more."
        primaryCta={{ href: "#tools-directory-heading", label: "Jump to directory" }}
      />

      <ToolsSearchGrid tools={all} categories={categories} featured={featured} />

      <FaqSection title="Tools, SEO, and how Varyense ships interactive products" items={toolsIndexFaqs} />

      <InternalLinksSection title="From calculators to client work" links={explore} />

      <CtaSection
        title="Ship calculators your customers trust"
        body="Whether you need a public SEO library, authenticated estimators, or embeddable widgets, we can help, from UX to deployment and analytics."
        href="/contact"
        label="Discuss a project"
      />
    </div>
  );
}
