import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { sameAsForSchema } from "@/lib/seo/internal-linking";

export function OrganizationSchema() {
  const node = {
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    email: siteConfig.email,
    areaServed: siteConfig.areaServed,
    sameAs: sameAsForSchema(),
  };

  return <JsonLd data={node} />;
}
