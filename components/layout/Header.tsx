"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "about",   href: "/sobre" },
  { key: "projects", href: "/projetos" },
  { key: "blog",    href: "/blog" },
  { key: "contact", href: "/contato" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.includes(href.replace("/", ""));
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg/85 backdrop-blur-2xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">

          {/* Logo */}
          <Link
            href="/"
            className="text-fg font-bold text-lg hover:text-accent transition-colors duration-200"
            style={{ letterSpacing: "-0.03em" }}
          >
            Kauã<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    isActive(href) ? "text-fg" : "text-fg-muted hover:text-fg"
                  )}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-1">
            <LocaleSwitcher />
            <div className="w-px h-4 bg-border mx-2" />
            <ThemeToggle label="Toggle theme" />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-[var(--radius-sm)] hover:bg-accent-soft transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className={cn("block w-5 h-[1.5px] bg-fg transition-all duration-300", menuOpen && "rotate-45 translate-y-[5px]")} />
            <span className={cn("block w-5 h-[1.5px] bg-fg transition-all duration-300", menuOpen && "opacity-0 scale-x-0")} />
            <span className={cn("block w-5 h-[1.5px] bg-fg transition-all duration-300", menuOpen && "-rotate-45 -translate-y-[5px]")} />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden border-t border-border/60 bg-bg/95 backdrop-blur-xl overflow-hidden transition-all duration-350",
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-5 flex flex-col gap-1">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={cn(
                "py-2.5 text-base font-medium transition-colors duration-200 border-b border-border/40 last:border-0",
                isActive(href) ? "text-accent" : "text-fg-muted"
              )}
            >
              {t(key)}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}