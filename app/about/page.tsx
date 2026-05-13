import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getRelatedLinks } from "@/lib/seo/internal-linking";
import { siteConfig } from "@/lib/site-config";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
] as const;

const description =
  "Learn how Varyense approaches IT support, SaaS delivery, and technical SEO, clear communication, maintainable architecture, and pragmatic shipping.";

export const metadata: Metadata = createPageMetadata({
  title: "About Varyense",
  description,
  path: "/about",
});

const principles = [
  {
    title: "Support as part of the product",
    body: "Uptime, incident communication, and follow-up documentation are not afterthoughts, they shape how your customers experience you.",
  },
  {
    title: "Scope you can execute",
    body: "We break work into milestones with explicit tradeoffs, acceptance checks, and rollback thinking so releases stay boring in the best way.",
  },
  {
    title: "SEO-aware engineering",
    body: "Canonical URLs, metadata, structured data, sitemaps, and internal linking are treated as route-level concerns, not a late content patch.",
  },
] as const;

const focusLinks = [
  {
    href: "/services",
    label: "Services",
    description: "SaaS, web, mobile, UI/UX, and AI engagements with the same delivery patterns we use on our own properties.",
  },
  {
    href: "/case-studies",
    label: "Case studies",
    description: "Product-shaped work: portals, operations tools, and discovery experiences shipped for real operators.",
  },
  {
    href: "/tools",
    label: "Calculators & tools",
    description: "Public utilities and hub pages that pair interactive apps with structured, crawlable documentation.",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Architecture, SEO, and AI implementation notes written for builders, not keyword filler.",
  },
] as const;

const glanceItems = [
  { label: "Focus", value: `${siteConfig.name} — ${siteConfig.tagline}` },
  { label: "Delivery", value: "Next.js App Router, TypeScript, pragmatic cloud hosting" },
  { label: "Reach", value: siteConfig.areaServed },
] as const;

export default function AboutPage() {
  const explore = getRelatedLinks({
    serviceSlugs: ["saas-development", "web-development", "ai-development", "mobile-app-development"],
    technologySlugs: ["nextjs-development"],
    blogSlugs: ["technical-seo-checklist-2026", "building-scalable-saas-with-nextjs"],
    limit: 6,
  });

  return (
    <div className="space-y-10 sm:space-y-12">
      <BreadcrumbSchema items={[...crumbs]} />
      <WebPageSchema name="About Varyense" description={description} path="/about" />

      <Breadcrumbs items={[...crumbs]} />

      <HeroSection
        eyebrow="About"
        title={
          <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            Clear engineering for teams that outgrow ad hoc IT.
          </span>
        }
        subtitle={`${siteConfig.name} combines hands-on IT support with product delivery: SaaS, web apps, and technical SEO patterns that stay maintainable as your surface area grows.`}
        primaryCta={{ href: "/contact", label: "Discuss your roadmap" }}
      />


      <section className="grid gap-8 pt-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-12" aria-labelledby="about-story-heading">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Who we are</p>
            <h2 id="about-story-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
              A small partner model, built for reliability.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              Most teams do not need a slide deck, they need someone who can read logs, trace a regression, propose a schema change, and explain the
              tradeoffs in plain language. That is the shape of work we optimize for: tight feedback loops, written decisions, and shipping paths that do
              not paint you into a corner.
            </p>
            <p>
              Whether you are stabilizing an existing product, launching a new SaaS line, or tightening technical SEO on a growing App Router codebase, we
              bias toward boring operations and predictable releases, so your roadmap stays credible with stakeholders.
            </p>
          </div>
        </div>

        <Card className="relative overflow-hidden border-slate-700/80 p-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(148,163,184,0.12),transparent_50%),radial-gradient(ellipse_at_100%_100%,rgba(15,23,42,0.9),transparent_55%)]" aria-hidden />
          <div className="relative space-y-6 p-7 sm:p-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">At a glance</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                How we describe engagements on day one, so expectations match delivery.
              </p>
            </div>
            <dl className="space-y-5 border-t border-slate-800/90 pt-6">
              {glanceItems.map((row) => (
                <div key={row.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{row.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium leading-snug text-slate-100">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-slate-800/90 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">Direct line</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-sm text-slate-100 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-white hover:decoration-slate-400"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-6 pt-4" aria-labelledby="about-principles-heading">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Principles</p>
          <h2 id="about-principles-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
            What stays constant across projects
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            These are not buzzwords, they are constraints we use to keep velocity high without quietly increasing risk.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((x) => (
            <Card key={x.title} className="border-slate-700/80 p-7">
              <p className="font-varyense text-[0.95rem] text-slate-50">{x.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{x.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <ProcessSection
        title="How engagements usually run"
        steps={[
          {
            step: "Align on outcomes",
            detail: "We clarify users, constraints, success metrics, and what “done” means for the first milestone, before picking frameworks.",
          },
          {
            step: "Make risks visible early",
            detail: "Unknowns become a short list: data migration, auth, performance, SEO, or third-party APIs. We validate the riskiest items first.",
          },
          {
            step: "Ship in slices",
            detail: "Each increment is deployable, observable, and easy to roll back. Documentation follows the code, not the calendar.",
          },
          {
            step: "Operate and improve",
            detail: "Support handoffs, monitoring hooks, and SEO checks are part of delivery so the system stays understandable after launch.",
          },
        ]}
      />

      <section className="space-y-6 pt-2" aria-labelledby="about-explore-heading">
        <div className="space-y-2">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Explore</p>
          <h2 id="about-explore-heading" className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
            Where to go next on this site
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {focusLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-slate-800/95 bg-slate-950/80 p-6 shadow-[0_18px_56px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_24px_72px_rgba(15,23,42,0.95)]"
              >
                <p className="font-varyense text-[0.95rem] text-slate-50 group-hover:text-white">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 group-hover:text-slate-400">Open section →</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <InternalLinksSection title="Services, tech stack, and selected writing" links={explore} />

      <CtaSection
        title="Tell us what you need next"
        body="Whether it is support, a SaaS build, a mobile release, or a technical SEO pass on an existing App Router codebase, we will respond with a practical plan and honest fit."
        href="/contact"
        label="Contact Varyense"
      />
    </div>
  );
}
