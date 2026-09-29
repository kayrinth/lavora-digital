"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "@/app/actions";
import { ArrowRight } from "./icons";
import type { Dictionary } from "@/lib/dictionaries";

const FIELD =
  "h-11 w-full rounded-md border border-ink/50 bg-background/45 px-4 text-[13px] text-ink outline-none placeholder:text-ink/70 focus:border-primary focus:bg-background/70";

export function ContactForm({ t }: { t: Dictionary["form"] }) {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(
    sendEnquiry,
    { ok: false },
  );

  // The action returns a code, not a sentence, so the wording stays with the locale.
  const errors = {
    required: t.errorRequired,
    email: t.errorEmail,
    send: t.errorSend,
  };

  if (state.ok) {
    return (
      <div
        role="status"
        className="mx-auto max-w-lg rounded-xl border border-line bg-surface px-6 py-10 text-center"
      >
        <p className="text-[15px] font-semibold">{t.successTitle}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-muted">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form action={action} className="mx-auto max-w-lg text-start">
      {/* Honeypot: hidden from people, irresistible to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[12px] text-ink/70">{t.name}</span>
          <input name="name" required maxLength={120} className={FIELD} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[12px] text-ink/70">{t.email}</span>
          <input
            name="email"
            type="email"
            dir="ltr"
            required
            maxLength={200}
            className={`${FIELD} text-start`}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-[12px] text-ink/70">{t.company}</span>
          <input name="company" maxLength={160} className={FIELD} />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-[12px] text-ink/70">{t.message}</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={4000}
          className={`${FIELD} h-auto py-3 leading-relaxed`}
        />
      </label>

      {state.error && (
        <p role="alert" className="mt-4 text-[12.5px] text-red-600">
          {errors[state.error]}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-ink/85 disabled:opacity-60"
      >
        {pending ? t.sending : t.submit}
        {!pending && <ArrowRight className="size-4 rtl:rotate-180" />}
      </button>
    </form>
  );
}
