import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Codex Neural - Future-Ready IT Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
            CODEX NEURAL // CORE
          </div>
          <div style={{ display: "flex", color: "#94A3B8", fontSize: "18px", fontFamily: "monospace" }}>
            ESTABLISHED IN NEPAL
          </div>
        </div>

        {/* Brand Headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: "black",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Future-Ready IT Solutions & Systems Architecture.
          </div>
          <div
            style={{
              display: "flex",
              color: "#94A3B8",
              fontSize: "22px",
              lineHeight: 1.5,
              maxWidth: "850px",
            }}
          >
            Decoupled API interfaces, low-latency microservices, and applied artificial intelligence engineering from our Kathmandu systems studio.
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
          }}
        >
          <div style={{ display: "flex", gap: "25px", color: "#64748B", fontSize: "16px", fontWeight: "bold" }}>
            <span>🧠 AI & ML</span>
            <span>💻 WEB & MOBILE</span>
            <span>🔌 MICROSERVICES</span>
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
