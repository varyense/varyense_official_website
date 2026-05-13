import { JsonLd } from "@/components/seo/json-ld";
import type { FaqItem } from "@/lib/content/types";

export function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) return null;

  const node = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return <JsonLd data={node} />;
}
