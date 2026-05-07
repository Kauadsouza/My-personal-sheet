import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-bold text-fg-muted/20 mb-6" style={{ letterSpacing: "-0.05em" }}>404</p>
      <h1 className="text-3xl font-bold text-fg mb-3" style={{ letterSpacing: "-0.03em" }}>
        {t("title")}
      </h1>
      <p className="text-fg-muted mb-8">{t("sub")}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[var(--radius-sm)] bg-accent text-bg hover:bg-accent-hover font-medium transition-colors"
      >
        ← {t("back")}
      </Link>
    </div>
  );
}