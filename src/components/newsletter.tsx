"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";
import type { Dictionary } from "@/lib/dictionaries";

export function Newsletter({ t }: { t: Dictionary["newsletter"] }) {
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="relative"
    >
      <label htmlFor="email" className="sr-only">
        {t.label}
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder={t.placeholder}
        className="h-11 w-full rounded-sm border border-line bg-background pe-28 ps-4 text-[13px] text-ink outline-none placeholder:text-muted focus:border-primary"
      />
      <button
        type="submit"
        className="absolute top-1.5 end-1.5 inline-flex h-8 items-center gap-1.5 rounded-sm bg-ink px-4 text-[12px] font-medium text-white transition hover:bg-primary"
      >
        {done ? t.subscribed : t.subscribe}
        {!done && <ArrowRight className="size-3.5 rtl:rotate-180" />}
      </button>
    </form>
  );
}
