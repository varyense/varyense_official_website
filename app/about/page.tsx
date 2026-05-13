import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
] as const;

const description =
  "Learn how Varyense approaches IT support, SaaS delivery, and technical SEO—clear communication, maintainable architecture, and pragmatic shipping.";

export const metadata: Metadata = createPageMetadata({
  title: "About Varyense",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <BreadcrumbSchema items={[...crumbs]} />
      <WebPageSchema name="About Varyense" description={description} path="/about" />

      <Breadcrumbs items={[...crumbs]} />

      <header className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-5">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">About</p>
          <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.35rem]">
            A Technology Partner Focused on Innovation.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Our team designs and develops high-performance digital solutions that help startups and enterprises grow faster and smarter.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild>
              <Link href="/contact">Work with us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </div>

        <Card className="relative overflow-hidden border-slate-700/80 p-0">
          <Image
            src="/window.svg"
            alt="Abstract window motif representing interfaces and systems"
            width={640}
            height={420}
            className="h-auto w-full opacity-90"
            sizes="(min-width: 1024px) 420px, 100vw"
            priority={false}
          />
          <div className="space-y-2 border-t border-slate-800/80 p-6 text-sm text-slate-300">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">How we work</p>
            <p className="leading-relaxed">
              Small teams, tight feedback loops, and documentation that helps your future self—not just launch day.
            </p>
          </div>
        </Card>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Support mindset",
            body: "We treat uptime, clarity, and incident communication as part of the product—not a separate lane.",
          },
          {
            title: "Product discipline",
            body: "We scope milestones so you can ship safely: measurable increments, explicit tradeoffs, and testable acceptance criteria.",
          },
          {
            title: "SEO-aware delivery",
            body: "Metadata, structured data, sitemaps, and internal linking patterns are built in as routes multiply.",
          },
        ].map((x) => (
          <Card key={x.title} className="border-slate-700/80 p-7">
            <p className="font-varyense text-[0.95rem] text-slate-50">{x.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{x.body}</p>
          </Card>
        ))}
      </section>

      <CtaSection
        title="Tell us what you need next"
        body="Whether it’s support, a SaaS build, or a technical SEO pass on an existing app router codebase—we’ll respond with a practical plan."
        href="/contact"
        label="Contact Varyense"
      />
    </div>
  );
}
