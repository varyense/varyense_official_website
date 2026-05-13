import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 45%, #020617 100%)",
          color: "#e2e8f0",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.35em", textTransform: "uppercase", color: "#94a3b8" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 18, fontSize: 56, fontWeight: 650, lineHeight: 1.05, maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 22, fontSize: 26, lineHeight: 1.35, maxWidth: 900, color: "#cbd5e1" }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
