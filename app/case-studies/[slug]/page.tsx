import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPageView } from "@/components/templates/case-study-page-view";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/content/case-studies";
import { createPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return createPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyPageView study={study} />;
}
