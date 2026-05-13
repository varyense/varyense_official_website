import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export function WebSiteSchema() {
  const node = {
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    inLanguage: "en-US",
  };

  return <JsonLd data={node} />;
}
