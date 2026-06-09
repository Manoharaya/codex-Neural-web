import { MetadataRoute } from "next";
import { getCaseStudies, getBlogPosts, MockCaseStudy, MockBlogPost } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://codexneural.com";

  // Dynamic route slugs
  let cases: MockCaseStudy[] = [];
  let blogs: MockBlogPost[] = [];

  try {
    cases = await getCaseStudies();
  } catch (e) {
    console.error("Sitemap generation failed to retrieve case studies", e);
  }

  try {
    blogs = await getBlogPosts();
  } catch (e) {
    console.error("Sitemap generation failed to retrieve blog posts", e);
  }

  // Core static capability links
  const staticPaths = [
    "",
    "/about",
    "/team",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
    "/services/ai-ml",
    "/services/web-app-development",
    "/services/system-software",
    "/services/ui-ux",
    "/services/web3-blockchain",
    "/services/digital-growth",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic case study entries
  const caseEntries: MetadataRoute.Sitemap = cases.map((study) => ({
    url: `${baseUrl}/portfolio/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Dynamic blog post entries
  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...caseEntries, ...blogEntries];
}
