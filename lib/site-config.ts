/**
 * Single source of truth for brand + URLs used in metadata, JSON-LD, and sitemap.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://varyense.com).
 */
export const siteConfig = {
  name: "Varyense",
  tagline: "IT Support & SaaS Solutions",
  description:
    "Varyense provides IT support and builds products and SaaS solutions for businesses. Reliable, clear, and built to grow with you.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://varyense.com",
  email: "varyense@gmail.com",
  locale: "en_US",
  twitterHandle: "@varyense",
  /** Used in Organization / LocalBusiness schema when no dedicated address is published */
  areaServed: "Worldwide",
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
