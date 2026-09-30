"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./icons";
import type { ServiceKey } from "@/lib/portfolio";

/** Already resolved for the current locale on the server, so nothing here needs the dictionaries. */
export type GridItem = {
  slug: string;
  href: string;
  service: ServiceKey;
  serviceLabel: string;
  title: string;
  year?: string;
  image: string;
  fit: "cover" | "contain";
  alt: string;
  summary: string;
  placeholder?: string;
};

export function PortfolioGrid({
  items,
  filterLabel,
  filterAll,
  viewLabel,
  initialService = "all",
}: {
  items: GridItem[];
  filterLabel: string;
  filterAll: string;
  viewLabel: string;
  /** From ?service= in the URL, so the header dropdown can deep-link a filtered view. */
  initialService?: ServiceKey | "all";
}) {
  const [active, setActive] = useState<ServiceKey | "all">(initialService);

  // Only offer filters for services that actually have a project, and only if there is a choice.
  const filters = items
    .map((i) => ({ key: i.service, label: i.serviceLabel }))
    .filter((f, i, all) => all.findIndex((x) => x.key === f.key) === i);

  const shown =
    active === "all" ? items : items.filter((i) => i.service === active);

  return (
    <>
      {filters.length > 1 && (
        <div
          role="group"
          aria-label={filterLabel}
          className="flex flex-wrap gap-2"
        >
          {[{ key: "all" as const, label: filterAll }, ...filters].map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
              className={`min-h-[44px] rounded-full border px-4 text-[13px] transition ${
                active === f.key
                  ? "border-ink bg-ink text-white"
                  : "border-line text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <ul className="reveal-stagger mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <li key={item.slug} className="reveal">
            <Link
              href={item.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 368px, (min-width: 640px) 45vw, 100vw"
                className={`${
                  item.fit === "contain" ? "object-contain p-8" : "object-cover"
                } transition duration-700 group-hover:scale-105`}
              />

              {/*
                A flat 65% ink wash rather than a gradient: it is the only value that
                holds white text above 4.5:1 even where the photo underneath is white.
              */}
              <span
                aria-hidden
                className="absolute inset-0 bg-ink/65 transition duration-500 group-hover:bg-ink/55"
              />

              <div className="relative flex h-full flex-col justify-between p-7 text-white">
                <div>
                  <p className="text-[11px] tracking-[0.1em] text-white/90 uppercase">
                    {item.serviceLabel}
                    {item.year ? ` · ${item.year}` : ""}
                  </p>
                  <h3 className="mt-3 max-w-[14ch] text-[22px] leading-[1.15] font-medium uppercase">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-[34ch] text-[13px] leading-relaxed text-white/90">
                    {item.summary}
                  </p>
                  <span className="mt-6 grid size-12 place-items-center rounded-full border border-white/50 transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                    <span className="sr-only">{viewLabel}</span>
                    <ArrowRight aria-hidden className="size-5 -rotate-45" />
                  </span>
                </div>
              </div>

              {item.placeholder && (
                <span className="absolute top-5 end-5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {item.placeholder}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
