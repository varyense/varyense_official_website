import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { Tool } from "@/lib/tools";

/**
 * WebPage + WebApplication graph for calculator hub pages.
 * Pairs visible on-page copy with truthful structured data for Google and semantic retrieval.
 */
export function ToolApplicationSchema({ tool }: { tool: Tool }) {
  const pageUrl = absoluteUrl(tool.path);
  const site = absoluteUrl("/");

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: tool.title,
      description: tool.seo.metaDescription,
      url: pageUrl,
      inLanguage: "en-US",
      isPartOf: { "@id": `${site}#website` },
      about: { "@id": `${pageUrl}#application` },
    },
    {
      "@type": "WebApplication",
      "@id": `${pageUrl}#application`,
      name: tool.title,
      description: tool.shortDescription,
      url: tool.externalUrl,
      applicationCategory: tool.schemaApplicationCategory,
      browserRequirements: "Requires JavaScript in a modern evergreen browser.",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: site,
      },
    },
  ];

  return <JsonLd data={graph} />;
}
