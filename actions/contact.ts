"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().min(1, "required"),
  email: z.email("invalid"),
  company: z.string().optional(),
  type: z.enum(["proposal", "partnership", "chat", "other"]),
  budget: z.string().optional(),
  message: z.string().min(20, "too-short"),
  website: z.string().max(0).optional(),
});

export async function submitContact(formData: unknown) {
  const parsed = schema.safeParse(formData);
  if (!parsed.success) return { success: false, error: "validation" };

  const { website } = parsed.data;
  if (website && website.length > 0) return { success: true };

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(`contact:${ip}`, 3, 60 * 60 * 1000)) {
    return { success: false, error: "rate-limited" };
  }

  // Email sending is optional — only runs when RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    const { createElement } = await import("react");
    const { sendEmail } = await import("@/lib/email/resend");
    const { ContactEmail } = await import("@/lib/email/templates/contact");

    const { name, email, company, type, budget, message } = parsed.data;
    const typeLabels: Record<string, string> = {
      proposal: "Proposta", partnership: "Parceria", chat: "Conversa", other: "Outro",
    };

    await sendEmail({
      to: process.env.ADMIN_EMAIL ?? "kauadsouza@gmail.com",
      subject: `[Site] Novo contato: ${typeLabels[type] ?? type} — ${name}`,
      react: createElement(ContactEmail, {
        name, email, company, type: typeLabels[type] ?? type, budget, message,
      }),
      replyTo: email,
    });
  }

  return { success: true };
}