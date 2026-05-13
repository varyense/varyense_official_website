import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Pacifico } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { WebSiteSchema } from "@/components/seo/website-schema";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const script = Pacifico({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${script.variable} antialiased`}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
