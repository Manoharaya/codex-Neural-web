import { ImageResponse } from "next/og";
import { getCaseStudyBySlug } from "@/sanity/lib/client";

export const runtime = "edge";

export const alt = "Codex Neural Case Studies";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug);

  // Take the first metric if available, or default
  const primaryMetric = study?.metrics?.[0] || { value: "100%", label: "Durable Execution" };
  const secondaryMetric = study?.metrics?.[1] || { value: "Secure", label: "Systems Architecture" };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              color: "#14B8A6",
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            CODEX NEURAL // CASE STUDIES
          </div>
          <div style={{ display: "flex", color: "#94A3B8", fontSize: "18px", fontFamily: "monospace" }}>
            {study?.industry || "Enterprise Systems"}
          </div>
        </div>

        {/* Title, Client & Metrics Container */}
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "flex-start", marginTop: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
            <div style={{ display: "flex", color: "#64748B", fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
              CLIENT: {study?.client?.toUpperCase() || "CN LABS"}
            </div>
            <div
              style={{
                display: "flex",
                color: "#ffffff",
                fontSize: "52px",
                fontWeight: "black",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              {study?.title || "Digital Transformation Project"}
            </div>
            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {study?.tech?.slice(0, 5).map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "#1e293b",
                    color: "#94A3B8",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metric Badges */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "35%" }}>
            <div
              style={{
                backgroundColor: "rgba(20, 184, 166, 0.05)",
                border: "1px solid rgba(20, 184, 166, 0.2)",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "200px",
                marginBottom: "15px",
              }}
            >
              <span style={{ color: "#14B8A6", fontSize: "38px", fontWeight: "bold", lineHeight: 1 }}>
                {primaryMetric.value}
              </span>
              <span style={{ color: "#94A3B8", fontSize: "14px", textAlign: "center", marginTop: "4px" }}>
                {primaryMetric.label}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "rgba(20, 184, 166, 0.05)",
                border: "1px solid rgba(20, 184, 166, 0.2)",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "200px",
              }}
            >
              <span style={{ color: "#14B8A6", fontSize: "38px", fontWeight: "bold", lineHeight: 1 }}>
                {secondaryMetric.value}
              </span>
              <span style={{ color: "#94A3B8", fontSize: "14px", textAlign: "center", marginTop: "4px" }}>
                {secondaryMetric.label}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            borderTop: "1px solid #1e293b",
            paddingTop: "35px",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex", color: "#64748B", fontSize: "16px" }}>
            ROLE: {study?.role || "Systems Architect"}
          </div>
          <div style={{ display: "flex", color: "#14B8A6", fontSize: "24px", fontWeight: "bold" }}>
            codexneural.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
