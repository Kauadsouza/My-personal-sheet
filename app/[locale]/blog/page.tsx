"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { Post } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts?locale=${locale}`)
      .then((r) => r.json())
      .then((data) => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [locale]);

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags ?? [])));
  const filtered = filter === "all" ? posts : posts.filter((p) => p.tags?.includes(filter));

  return (
    <div className="min-h-dvh page-top">
      <div className="container">

        <FadeIn>
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t("title")}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-fg tracking-[-0.04em]">{t("title")}</h1>
          </div>
        </FadeIn>

        {/* Tag filter */}
        {allTags.length > 0 && (
          <FadeIn delay={0.08}>
            <div className="flex flex-wrap gap-2 mb-10">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200",
                  filter === "all" ? "bg-accent text-bg" : "bg-bg-elevated border border-border text-fg-muted hover:text-fg"
                )}
              >
                {t("filterByTag")}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(tag)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200",
                    filter === tag ? "bg-accent text-bg" : "bg-bg-elevated border border-border text-fg-muted hover:text-fg"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {loading ? (
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 rounded-[var(--radius-md)] bg-bg-elevated animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-border">
            {filtered.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.04}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group py-6 md:py-7 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 hover:bg-accent-soft/20 -mx-3 px-3 rounded-[var(--radius-md)] transition-colors duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <time className="text-xs text-fg-muted">{formatDate(post.date, locale)}</time>
                      <span className="text-fg-muted/40">·</span>
                      <span className="text-xs text-fg-muted">{post.readingTime} {t("readingTime")}</span>
                    </div>
                    <h2 className="text-xl font-bold text-fg group-hover:text-accent transition-colors duration-200 mb-2 tracking-[-0.02em] leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-fg-muted line-clamp-2 mb-3">{post.lead}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags?.map((tag) => <Badge key={tag} variant="accent">{tag}</Badge>)}
                    </div>
                  </div>
                  <span className="hidden md:flex text-sm font-medium text-accent items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shrink-0 mt-1">
                    {t("readMore")} →
                  </span>
                </Link>
              </FadeIn>
            ))}

            {!loading && filtered.length === 0 && (
              <p className="py-16 text-center text-fg-muted text-sm">—</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}