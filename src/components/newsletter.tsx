"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

export function Newsletter() {
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
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="Email Address.."
        className="h-11 w-full rounded-full border border-line bg-background pr-32 pl-5 text-[13px] text-ink outline-none placeholder:text-muted focus:border-primary"
      />
      <button
        type="submit"
        className="absolute top-1.5 right-1.5 inline-flex h-8 items-center gap-1.5 rounded-full bg-ink px-4 text-[12px] font-medium text-white transition hover:bg-ink/85"
      >
        {done ? "Subscribed" : "Subscribe"}
        {!done && <ArrowRight className="size-3.5" />}
      </button>
    </form>
  );
}
