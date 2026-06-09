import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/sanity/lib/client";

export const runtime = "edge";

export const alt = "Codex Neural Insights";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

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
            CODEX NEURAL // INSIGHTS
          </div>
          <div style={{ display: "flex", color: "#94A3B8", fontSize: "18px", fontFamily: "monospace" }}>
            {post?.readTime || "5 min read"}
          </div>
        </div>

        {/* Title & Excerpt */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: "black",
              lineHeight: 1.25,
              marginBottom: "20px",
            }}
          >
            {post?.title || "Technological Disruption & Systems Engineering"}
          </div>
          <div
            style={{
              display: "flex",
              color: "#94A3B8",
              fontSize: "22px",
              lineHeight: 1.5,
              maxHeight: "100px",
              overflow: "hidden",
            }}
          >
            {post?.excerpt || "Read our technical reviews regarding microservices scaling, database locks, and applied machine learning models."}
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#14B8A6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                marginRight: "12px",
                fontSize: "16px",
              }}
            >
              {post?.author?.avatarText || "CN"}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#ffffff", fontSize: "18px", fontWeight: "bold" }}>
                {post?.author?.name || "Systems Lab"}
              </span>
              <span style={{ color: "#64748B", fontSize: "14px" }}>
                {post?.author?.role || "Staff Architect"}
              </span>
            </div>
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
