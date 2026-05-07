import { Resend } from "resend";
import type { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailParams = {
  to: string | string[];
  subject: string;
  react: ReactElement;
  replyTo?: string;
};

export async function sendEmail({ to, subject, react, replyTo }: SendEmailParams) {
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const result = await resend.emails.send({
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    react,
    ...(replyTo ? { replyTo } : {}),
  });

  return result;
}
