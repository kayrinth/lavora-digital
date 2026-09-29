"use client";

import { useState } from "react";
import Link from "next/link";
import { Close, Menu } from "./icons";

type Item = { key: string; label: string; href: string };

export function MobileMenu({
  items,
  services,
  servicesHref,
  servicesLabel,
  otherLocale,
  otherLocaleLabel,
  openLabel,
  closeLabel,
}: {
  items: Item[];
  services: string[];
  servicesHref: string;
  servicesLabel: string;
  otherLocale: string;
  otherLocaleLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        className="-me-2 grid size-11 place-items-center rounded-lg text-ink md:hidden"
      >
        {open ? <Close className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-background md:hidden"
        >
          <ul className="mx-auto w-full max-w-[1200px] px-6 py-2">
            {items.map((item) => (
              <li key={item.key} className="border-b border-line">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center text-[14px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* The desktop dropdown has nowhere to hang on a phone, so its items sit inline. */}
            <li className="border-b border-line pt-3 pb-2">
              <p className="text-[11px] tracking-[0.12em] text-muted uppercase">
                {servicesLabel}
              </p>
              <ul className="mt-1">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      href={servicesHref}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[44px] items-center text-[13.5px] text-muted"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                href={`/${otherLocale}`}
                hrefLang={otherLocale}
                lang={otherLocale}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center text-[14px]"
              >
                {otherLocaleLabel}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
