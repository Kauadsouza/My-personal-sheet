import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/motion/FadeIn";
import { GitHubCalendarClient } from "./GitHubCalendarClient";

type Repo = {
  name: string;
  html_url: string;
  language: string | null;
};

async function getGitHubData() {
  try {
    const hdrs: Record<string, string> = { Accept: "application/vnd.github.v3+json" };
    if (process.env.GITHUB_TOKEN) hdrs["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;

    const [reposRes, userRes] = await Promise.all([
      fetch("https://api.github.com/users/Kauadsouza/repos?per_page=100&sort=updated", { headers: hdrs, next: { revalidate: 3600 } }),
      fetch("https://api.github.com/users/Kauadsouza", { headers: hdrs, next: { revalidate: 3600 } }),
    ]);

    if (!reposRes.ok || !userRes.ok) return null;

    const repos: Repo[] = await reposRes.json();
    const user = await userRes.json();

    const langCount: Record<string, number> = {};
    for (const r of repos) {
      if (r.language) langCount[r.language] = (langCount[r.language] ?? 0) + 1;
    }
    const topLang = Object.entries(langCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

    return { publicRepos: user.public_repos as number, topLang, recentRepos: repos.slice(0, 3) };
  } catch {
    return null;
  }
}

export async function GitHubSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "github" });
  const data = await getGitHubData();

  return (
    <section className="section border-t border-border" aria-labelledby="github-heading">
      <div className="container">
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">GitHub</p>
            <h2 id="github-heading" className="text-4xl md:text-5xl font-bold text-fg tracking-[-0.03em]">
              {t("title")}
            </h2>
          </div>
        </FadeIn>

        {data && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
            <FadeIn delay={0.05}>
              <div className="p-5 md:p-6 rounded-[var(--radius-md)] border border-border bg-bg-elevated">
                <p className="text-3xl md:text-4xl font-bold text-fg tracking-[-0.03em]">{data.publicRepos}</p>
                <p className="text-xs md:text-sm text-fg-muted mt-1">{t("repos")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-5 md:p-6 rounded-[var(--radius-md)] border border-border bg-bg-elevated">
                <p className="text-3xl md:text-4xl font-bold text-accent tracking-[-0.03em]">{data.topLang}</p>
                <p className="text-xs md:text-sm text-fg-muted mt-1">{t("topLanguage")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="col-span-2 md:col-span-1">
              <div className="p-5 md:p-6 rounded-[var(--radius-md)] border border-border bg-bg-elevated h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted mb-3">{t("recentRepos")}</p>
                <div className="flex flex-col gap-2">
                  {data.recentRepos.map((repo) => (
                    <a key={repo.name} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-fg hover:text-accent transition-colors truncate">
                      {repo.name}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        <FadeIn delay={0.2}>
          <div className="p-6 md:p-8 rounded-[var(--radius-lg)] border border-border bg-bg-elevated">
            <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted mb-6">{t("contributions")}</p>
            <GitHubCalendarClient />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}