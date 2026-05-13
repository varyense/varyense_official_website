import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { allPublicPaths } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = allPublicPaths();
  const now = new Date();

  return paths.map((path) => {
    const isHome = path === "/";
    const isBlog = path.startsWith("/blog/");
    const isCaseStudy = path.startsWith("/case-studies/") && path !== "/case-studies";
    const isToolsIndex = path === "/tools";
    const isToolPage = path.startsWith("/tools/");

    return {
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: isHome ? "weekly" : isBlog ? "monthly" : isCaseStudy ? "monthly" : "monthly",
      priority: isHome
        ? 1
        : isToolsIndex
          ? 0.85
          : isToolPage
            ? 0.72
            : isBlog
              ? 0.65
              : isCaseStudy
                ? 0.7
                : 0.75,
    };
  });
}
