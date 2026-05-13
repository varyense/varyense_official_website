import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ServicesSection } from "@/components/sections/services";
import { CtaSection } from "@/components/sections/cta";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import { servicePages } from "@/lib/content/services";
import { createPageMetadata } from "@/lib/seo/metadata";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
] as const;

const description =
  "Explore Varyense services: SaaS development, web development, mobile apps, UI/UX design, and AI development—built with SEO and performance discipline.";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description,
  path: "/services",
});

export default function ServicesIndexPage() {
  const services = Object.values(servicePages).map((s) => ({
    href: s.path,
    label: s.title,
    description: s.summary,
  }));

  return (
    <div className="space-y-12">
      <BreadcrumbSchema items={[...crumbs]} />
      <WebPageSchema name="Services" description={description} path="/services" />

      <Breadcrumbs items={[...crumbs]} />

      <header className="space-y-4">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Services</p>
        <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.35rem]">Innovative Software Solutions for Modern Businesses.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          We design and develop scalable web applications, SaaS platforms, mobile apps, and AI-powered solutions tailored to your business goals.
        </p>
      </header>

      <ServicesSection
        eyebrow="What we deliver"
        title="Core service offerings"
        description="Pick a service to see an overview, benefits, process, FAQs, and curated internal links."
        services={services}
      />

      <CtaSection
        title="Not sure which service fits?"
        body="Send your context—we’ll map the best starting point, whether that’s support, a product build, or a technical SEO architecture pass."
        href="/contact"
        label="Contact Varyense"
      />
    </div>
  );
}
