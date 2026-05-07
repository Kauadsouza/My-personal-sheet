import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { getAllPosts } from "@/lib/mdx";
import { FadeIn } from "@/components/motion/FadeIn";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export async function BlogSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getAllPosts(locale).slice(0, 3);

  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="section border-t border-border" aria-labelledby="blog-heading">
      <div className="container">
        <FadeIn>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t("title")}</p>
              <h2 id="blog-heading" className="text-4xl md:text-5xl font-bold text-fg tracking-[-0.03em]">
                {t("latestPosts")}
              </h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-medium text-fg-muted hover:text-fg transition-colors group">
              {t("viewAll")}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {/* Featured post — takes 2 columns */}
          <FadeIn delay={0.05} className="md:col-span-2">
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col h-full rounded-[var(--radius-lg)] border border-border bg-bg-elevated p-6 md:p-8 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <time className="text-xs text-fg-muted">{formatDate(featured.date, locale)}</time>
                <span className="text-fg-muted/40">·</span>
                <span className="text-xs text-fg-muted">{featured.readingTime} {t("readingTime")}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-fg group-hover:text-accent transition-colors duration-200 mb-3 tracking-[-0.02em] leading-snug flex-1">
                {featured.title}
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-5 line-clamp-3">{featured.lead}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags?.map((tag) => <Badge key={tag} variant="accent">{tag}</Badge>)}
              </div>
            </Link>
          </FadeIn>

          {/* Side posts */}
          <div className="flex flex-col gap-4 md:gap-5">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={0.1 + i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-[var(--radius-md)] border border-border bg-bg-elevated p-5 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <time className="text-xs text-fg-muted">{formatDate(post.date, locale)}</time>
                    <span className="text-fg-muted/40">·</span>
                    <span className="text-xs text-fg-muted">{post.readingTime} {t("readingTime")}</span>
                  </div>
                  <h3 className="text-base font-bold text-fg group-hover:text-accent transition-colors duration-200 leading-snug tracking-[-0.01em]">
                    {post.title}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link href="/blog" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors flex items-center gap-2 group">
            {t("viewAll")}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}