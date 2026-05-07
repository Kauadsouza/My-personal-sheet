"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/navigation";
import { useState } from "react";
import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

type Locale = "pt-BR" | "en" | "es";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;

  const allTechs = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.stack.includes(filter));

  return (
    <div className="min-h-dvh page-top">
      <div className="container">

        {/* Page header */}
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t("title")}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-fg tracking-[-0.04em]">{t("title")}</h1>
          </div>
        </FadeIn>

        {/* Filter chips */}
        <FadeIn delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200",
                filter === "all" ? "bg-accent text-bg" : "bg-bg-elevated border border-border text-fg-muted hover:text-fg hover:border-fg-muted/40"
              )}
            >
              {t("all")}
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setFilter(tech)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200",
                  filter === tech ? "bg-accent text-bg" : "bg-bg-elevated border border-border text-fg-muted hover:text-fg hover:border-fg-muted/40"
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* List */}
        <div className="flex flex-col divide-y divide-border">
          {filtered.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.04}>
              <Link
                href={`/projetos/${project.slug}`}
                className="group py-6 md:py-7 flex flex-col md:grid md:grid-cols-[56px_1fr_auto] gap-3 md:gap-6 items-start md:items-center hover:bg-accent-soft/20 -mx-3 px-3 rounded-[var(--radius-md)] transition-colors duration-200"
              >
                <span className="text-2xl font-bold tabular-nums tracking-[-0.04em] text-fg-muted/25 hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h2 className="text-lg md:text-xl font-bold text-fg group-hover:text-accent transition-colors duration-200 tracking-[-0.02em]">
                      {project.title}
                    </h2>
                    <span className="text-xs text-fg-muted">{project.year}</span>
                  </div>
                  <p className="text-sm text-fg-muted line-clamp-1 mb-3">{project.summary[locale]}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => <Badge key={tech}>{tech}</Badge>)}
                  </div>
                </div>

                <span className="hidden md:flex text-sm font-medium text-accent items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shrink-0">
                  {t("viewProject")} →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}