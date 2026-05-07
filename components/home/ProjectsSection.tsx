"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

type Locale = "pt-BR" | "en" | "es";

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const projects = getFeaturedProjects();

  return (
    <section className="section border-t border-border" aria-labelledby="projects-heading">
      <div className="container">

        {/* Header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                {t("featured")}
              </p>
              <h2
                id="projects-heading"
                className="text-4xl md:text-5xl font-bold text-fg tracking-[-0.03em]"
              >
                {t("title")}
              </h2>
            </div>
            <Link
              href="/projetos"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-fg-muted hover:text-fg transition-colors group"
            >
              {t("viewAll")}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeIn>

        {/* Project cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <Link
                href={`/projetos/${project.slug}`}
                className={cn(
                  "group flex flex-col md:flex-row gap-0 rounded-[var(--radius-lg)] overflow-hidden",
                  "border border-border bg-bg-elevated",
                  "hover:border-accent/50 transition-all duration-400",
                  "hover:shadow-[0_0_32px_-8px_hsl(140_45%_55%_/_0.12)]"
                )}
              >
                {/* Accent left bar */}
                <div className="hidden md:block w-1 bg-border group-hover:bg-accent transition-colors duration-300 shrink-0" />

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                  {/* Number + title */}
                  <div className="flex items-center gap-4 md:gap-6 min-w-0 flex-1">
                    <span className="text-2xl font-bold text-fg-muted/25 tabular-nums shrink-0 tracking-[-0.04em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-fg group-hover:text-accent transition-colors duration-200 tracking-[-0.02em]">
                          {project.title}
                        </h3>
                        <span className="text-xs text-fg-muted">{project.year}</span>
                      </div>
                      <p className="text-sm text-fg-muted line-clamp-1">{project.summary[locale]}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 md:max-w-[240px]">
                    {project.stack.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {/* Arrow */}
                  <span className="text-sm font-medium text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0">
                    {t("viewProject")} →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link href="/projetos" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors flex items-center gap-2 group">
            {t("viewAll")}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}