import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/lib/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getAllPosts("pt-BR").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};
  return { title: post.title, description: post.lead };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const post = getPostBySlug(slug, locale);

  if (!post) notFound();

  const allPosts = getAllPosts(locale);
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[currentIndex + 1];
  const prevPost = allPosts[currentIndex - 1];

  return (
    <article className="page-top">
      {/* Header */}
      <header className="container max-w-3xl mb-16">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags?.map((tag) => <Badge key={tag} variant="accent">{tag}</Badge>)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 tracking-[-0.03em] leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-fg-muted border-t border-border pt-6">
            <time>{formatDate(post.date, locale)}</time>
            <span>·</span>
            <span>{post.readingTime} {t("readingTime")}</span>
          </div>
        </FadeIn>
      </header>

      {/* Content */}
      <FadeIn delay={0.2}>
        <div className="container max-w-3xl prose">
          <MDXRemote source={post.content} />
        </div>
      </FadeIn>

      {/* Post navigation */}
      <div className="container max-w-3xl mt-20 pt-10 border-t border-border">
        <div className="grid md:grid-cols-2 gap-6">
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className="group p-6 rounded-[var(--radius-md)] border border-border hover:border-accent/40 transition-colors">
              <p className="text-xs text-fg-muted mb-2">← {t("prevPost")}</p>
              <p className="font-medium text-fg group-hover:text-accent transition-colors">{prevPost.title}</p>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group p-6 rounded-[var(--radius-md)] border border-border hover:border-accent/40 transition-colors md:text-right">
              <p className="text-xs text-fg-muted mb-2">{t("nextPost")} →</p>
              <p className="font-medium text-fg group-hover:text-accent transition-colors">{nextPost.title}</p>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}