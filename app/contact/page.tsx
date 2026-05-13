import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { WebPageSchema } from "@/components/seo/webpage-schema";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
] as const;

const description = `Contact ${siteConfig.name} for IT support, SaaS development, and technical SEO engagements. Email ${siteConfig.email}.`;

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <BreadcrumbSchema items={[...crumbs]} />
      <WebPageSchema name="Contact Varyense" description={description} path="/contact" />

      <Breadcrumbs items={[...crumbs]} />

      <header className="space-y-4">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-300 mb-6">Contact</p>
        <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.35rem]">Let’s talk about your roadmap.</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Send requirements, timelines, links, and constraints. We respond with clear next steps—what we’d validate first,
          what we’d build in phase one, and what information we still need.
        </p>
      </header>

      <Card className="border-slate-700/80 p-8 sm:p-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">Email</p>
            <a className="text-lg text-slate-50 underline underline-offset-4 decoration-slate-600 hover:text-white" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Include your goal, timeline, budget range (optional), and any relevant URLs or repositories (if shareable).
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">What we typically reply with</p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed">
              <li>A short assessment of fit and risk areas</li>
              <li>Recommended discovery steps (if needed)</li>
              <li>A proposed milestone outline</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
