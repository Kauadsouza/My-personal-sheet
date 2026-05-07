import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { projects } from "@/lib/projects";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kauadsouza.vercel.app";

  const staticPages = ["/", "/sobre", "/projetos", "/blog", "/contato"];
  const locales = routing.locales;

  const staticRoutes: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}${locale === routing.defaultLocale ? "" : `/${locale}`}${page === "/" ? "" : page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "/" ? 1 : 0.8,
    }))
  );

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projetos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts("pt-BR").map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}