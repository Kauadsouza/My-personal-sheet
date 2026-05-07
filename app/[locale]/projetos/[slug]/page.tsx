import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const loc = locale as "pt-BR" | "en" | "es";
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[projectIndex + 1] ?? projects[0];

  const labelClass = "text-xs font-semibold uppercase tracking-widest text-accent mb-4";
  const metaLabelClass = "text-xs text-fg-muted uppercase tracking-widest mb-1";

  return (
    <article className="page-top">
      {/* Hero */}
      <div className="container mb-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            {project.year}
          </p>
          <h1 className="text-display leading-[0.95] mb-8">
            {project.title}
          </h1>
        </FadeIn>

        {/* Metadata bar */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-8 py-6 border-y border-border">
            <div>
              <p className={metaLabelClass}>Role</p>
              <p className="text-sm font-medium text-fg">{project.role[loc]}</p>
            </div>
            {project.liveUrl && (
              <div>
                <p className={metaLabelClass}>{t("liveLink")}</p>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                  {project.liveUrl.replace(/^https?:\/\//, "")} →
                </a>
              </div>
            )}
            {project.githubUrl && (
              <div>
                <p className={metaLabelClass}>{t("githubLink")}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                  GitHub →
                </a>
              </div>
            )}
          </div>
        </FadeIn>
      </div>

      <div className="container max-w-3xl">
        <FadeIn delay={0.1}>
          <section className="mb-14">
            <h2 className={labelClass}>{t("challenge")}</h2>
            <p className="text-lg text-fg leading-relaxed">{project.challenge[loc]}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <section className="mb-14">
            <h2 className={labelClass}>{t("solution")}</h2>
            <p className="text-lg text-fg leading-relaxed">{project.solution[loc]}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="mb-14">
            <h2 className={labelClass}>{t("results")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((r, i) => (
                <div key={i} className="p-5 rounded-[var(--radius-md)] border border-border bg-bg-elevated">
                  <p className="text-3xl font-bold text-accent mb-1 tracking-[-0.03em]">{r.value}</p>
                  <p className="text-xs text-fg-muted">{r.label[loc]}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.25}>
          <section className="mb-14">
            <h2 className={labelClass}>{t("stack")}</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Next project */}
      <div className="container mt-20 pt-10 border-t border-border">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted mb-4">
            {t("nextProject")}
          </p>
          <Link href={`/projetos/${nextProject.slug}`} className="group flex items-center justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-fg group-hover:text-accent transition-colors duration-200 tracking-[-0.03em]">
              {nextProject.title}
            </h2>
            <span className="text-3xl text-fg-muted group-hover:text-accent group-hover:translate-x-3 transition-all duration-300 shrink-0">→</span>
          </Link>
        </FadeIn>
      </div>
    </article>
  );
}
