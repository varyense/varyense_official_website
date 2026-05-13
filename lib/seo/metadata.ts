import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export type PageMetaInput = {
  /** Shown as `%s` when root layout uses `title.template` */
  title: string;
  description: string;
  /** Path starting with / (e.g. /services/web-development) */
  path: string;
  /** Optional OG image path under site root */
  ogImagePath?: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImagePath = "/opengraph-image",
  robots,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImages = [{ url: ogImagePath.startsWith("http") ? ogImagePath : absoluteUrl(ogImagePath), width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    alternates: { canonical },
    robots: robots ?? { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ogImages.map((i) => i.url),
      creator: siteConfig.twitterHandle,
    },
  };
}
