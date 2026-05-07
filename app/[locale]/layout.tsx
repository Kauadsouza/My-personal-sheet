import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kauadsouza.vercel.app";

  return {
    title: {
      default: "Kauã Diniz Souza — Developer & Founder",
      template: "%s | Kauã Diniz Souza",
    },
    description: t("sub"),
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: "website",
      locale: locale === "pt-BR" ? "pt_BR" : locale,
      url: siteUrl,
      siteName: "Kauã Diniz Souza",
      images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={GeistSans.className}>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <a href="#main-content" className="skip-to-content">
              Skip to content
            </a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}