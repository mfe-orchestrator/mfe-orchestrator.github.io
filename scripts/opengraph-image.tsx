import { ImageResponse } from "next/og";
import { PRODUCT, SITE_NAME } from "@/lib/seo";

/**
 * Source for the site-wide social preview card at src/app/opengraph-image.png.
 *
 * This file is NOT a route: it lives in scripts/ on purpose. Under
 * `output: export` a generated opengraph-image route is written to
 * out/opengraph-image with no file extension, and GitHub Pages then serves it
 * as application/octet-stream, which social crawlers reject. The committed PNG
 * uses Next's static opengraph-image convention instead, so it is served as
 * image/png.
 *
 * To regenerate the card after changing the copy:
 *   1. cp scripts/opengraph-image.tsx src/app/opengraph-image.tsx
 *   2. rm src/app/opengraph-image.png && pnpm run build
 *   3. cp out/opengraph-image src/app/opengraph-image.png
 *   4. rm src/app/opengraph-image.tsx   (and rebuild to verify)
 */
export const dynamic = "force-static";

export const alt = `${SITE_NAME} — ${PRODUCT.oneLiner}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1020",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
            }}
          />
          <div style={{ fontSize: 34, color: "#ffffff", fontWeight: 700 }}>
            {SITE_NAME}
          </div>
        </div>

        {/* The promise */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.08,
              color: "#ffffff",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Ship micro frontends without rebuilding the host
          </div>
          <div style={{ fontSize: 34, color: "#a5b0c9", lineHeight: 1.35 }}>
            Open-source control plane for micro frontend deployment —
            versioning, canary releases and instant rollback.
          </div>
        </div>

        {/* Proof row */}
        <div style={{ display: "flex", alignItems: "center", gap: 40, fontSize: 26, color: "#8b5cf6" }}>
          <div style={{ display: "flex" }}>Module Federation</div>
          <div style={{ display: "flex", color: "#3b4463" }}>·</div>
          <div style={{ display: "flex" }}>Multi-cloud &amp; on-premise</div>
          <div style={{ display: "flex", color: "#3b4463" }}>·</div>
          <div style={{ display: "flex" }}>Open source</div>
        </div>
      </div>
    ),
    size,
  );
}
