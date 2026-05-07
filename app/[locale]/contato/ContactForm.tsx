"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { submitContact } from "@/actions/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(1),
  email: z.email(),
  company: z.string().optional(),
  type: z.enum(["proposal", "partnership", "chat", "other"]),
  budget: z.string().optional(),
  message: z.string().min(20),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({ locale: _locale }: { locale: string }) {
  const t = useTranslations("contact.form");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error" | "rate-limited">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: "proposal" },
  });

  async function onSubmit(data: FormData) {
    setState("loading");
    const result = await submitContact(data);
    if (result.success) {
      setState("success");
    } else if (result.error === "rate-limited") {
      setState("rate-limited");
    } else {
      setState("error");
    }
  }

  const typeOptions = (["proposal", "partnership", "chat", "other"] as const).map((v) => ({
    value: v,
    label: t(`types.${v}`),
  }));

  const budgetOptions = (["none", "under5k", "5to15k", "15to50k", "over50k"] as const).map((v) => ({
    value: v,
    label: t(`budgets.${v}`),
  }));

  return (
    <AnimatePresence mode="wait">
      {state === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 flex flex-col items-center gap-4 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13L9 17L19 7" stroke="hsl(140 45% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-xl font-bold text-fg tracking-[-0.02em]">{t("success")}</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          {/* Honeypot */}
          <input
            {...register("website")}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              {...register("name")}
              id="name"
              label={t("name")}
              placeholder={t("namePlaceholder")}
              error={errors.name && t("errors.nameRequired")}
              autoComplete="name"
            />
            <Input
              {...register("email")}
              id="email"
              type="email"
              label={t("email")}
              placeholder={t("emailPlaceholder")}
              error={errors.email && t("errors.emailInvalid")}
              autoComplete="email"
            />
          </div>

          <Input
            {...register("company")}
            id="company"
            label={t("company")}
            placeholder={t("companyPlaceholder")}
            autoComplete="organization"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <Select
              {...register("type")}
              id="type"
              label={t("type")}
              options={typeOptions}
              error={errors.type && t("errors.typeRequired")}
            />
            <Select
              {...register("budget")}
              id="budget"
              label={t("budget")}
              options={budgetOptions}
            />
          </div>

          <Textarea
            {...register("message")}
            id="message"
            label={t("message")}
            placeholder={t("messagePlaceholder")}
            error={errors.message && t("errors.messageMin")}
            rows={6}
          />

          {(state === "error" || state === "rate-limited") && (
            <p className="text-sm text-danger">
              {state === "rate-limited" ? t("rateLimited") : t("error")}
            </p>
          )}

          <button
            type="submit"
            disabled={state === "loading"}
            className="self-start h-12 px-8 font-medium rounded-[var(--radius-sm)] bg-accent text-bg hover:bg-accent-hover disabled:opacity-50 transition-all duration-300 flex items-center gap-2"
          >
            {state === "loading" && (
              <span className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
            )}
            {state === "loading" ? t("sending") : t("send")}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}