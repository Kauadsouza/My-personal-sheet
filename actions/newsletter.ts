"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rate-limit";

const schema = z.object({
  email: z.email("invalid"),
  honeypot: z.string().max(0).optional(),
  locale: z.string().default("pt-BR"),
});

export async function submitNewsletter(formData: unknown) {
  const parsed = schema.safeParse(formData);
  if (!parsed.success) return { success: false, error: "validation" };

  const { honeypot } = parsed.data;
  if (honeypot && honeypot.length > 0) return { success: true };

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(`newsletter:${ip}`, 5, 60 * 60 * 1000)) {
    return { success: false, error: "rate-limited" };
  }

  // Email sending is optional — only runs when RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    const { createElement } = await import("react");
    const { sendEmail } = await import("@/lib/email/resend");
    const { NewsletterAdminEmail } = await import("@/lib/email/templates/newsletter-admin");
    const { NewsletterWelcomeEmail } = await import("@/lib/email/templates/newsletter-welcome");

    const { email, locale } = parsed.data;
    const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const adminEmail = process.env.ADMIN_EMAIL ?? "kauadsouza@gmail.com";
    const subject = locale === "en"
      ? "Welcome to the journey — Kauã"
      : locale === "es"
      ? "Bienvenido(a) al camino — Kauã"
      : "Bem-vindo(a) ao caminho — Kauã";

    await Promise.all([
      sendEmail({
        to: adminEmail,
        subject: `[Site] Novo inscrito newsletter: ${email}`,
        react: createElement(NewsletterAdminEmail, { email, date, ip }),
      }),
      sendEmail({
        to: email,
        subject,
        react: createElement(NewsletterWelcomeEmail, { locale }),
      }),
    ]);
  }

  return { success: true };
}