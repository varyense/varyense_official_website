import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export function ArticleSchema(props: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  modifiedAt?: string;
  authorName?: string;
}) {
  const url = absoluteUrl(props.path);
  const node = {
    "@type": "Article",
    headline: props.title,
    description: props.description,
    datePublished: props.publishedAt,
    dateModified: props.modifiedAt ?? props.publishedAt,
    author: {
      "@type": "Organization",
      name: props.authorName ?? siteConfig.name,
    },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-US",
  };

  return <JsonLd data={node} />;
}
