import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

/**
 * LocalBusiness-style node without a street address (omit if you publish a real address later).
 * Uses ProfessionalService as a closer semantic fit for B2B software delivery.
 */
export function LocalBusinessSchema() {
  const node = {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${absoluteUrl("/")}#localbusiness`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    areaServed: siteConfig.areaServed,
    priceRange: "$$",
  };

  return <JsonLd data={node} />;
}
