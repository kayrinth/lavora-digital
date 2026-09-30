"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Close, Menu } from "./icons";
import { isActive, type NavItem, type NavService } from "./desktop-nav";

export function MobileMenu({
  items,
  services,
  servicesLabel,
  otherLocale,
  otherLocaleLabel,
  openLabel,
  closeLabel,
}: {
  items: NavItem[];
  services: NavService[];
  servicesLabel: string;
  otherLocale: string;
  otherLocaleLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
            {items.map((item) => {
              const on = isActive(pathname, item.match, item.exact);
              return (
                <li key={item.key} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={on ? "page" : undefined}
                    className={`flex min-h-[48px] items-center text-[14px] ${
                      on ? "font-semibold text-ink" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {/* The desktop dropdown has nowhere to hang on a phone, so its items sit inline. */}
            <li className="border-b border-line pt-3 pb-2">
              <p className="text-[11px] tracking-[0.12em] text-muted uppercase">
                {servicesLabel}
              </p>
              <ul className="mt-1">
                {services.map((s) => {
                  const on = s.match ? isActive(pathname, s.match, true) : false;
                  return (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        onClick={() => setOpen(false)}
                        aria-current={on ? "page" : undefined}
                        className={`flex min-h-[44px] items-center text-[13.5px] ${
                          on ? "font-semibold text-ink" : "text-muted"
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  );
                })}
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
