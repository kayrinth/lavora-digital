"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chevron } from "./icons";

export type NavItem = {
  key: string;
  label: string;
  href: string;
  /** Path this item owns. Exact for the home page, a prefix for the rest. */
  match: string;
  exact?: boolean;
};

export type NavService = { label: string; href: string; match?: string };

/**
 * Marks the item whose section you are actually in. Home only wins on the home
 * page itself, so it stops looking permanently selected.
 */
export function isActive(pathname: string, match: string, exact = false) {
  return exact ? pathname === match : pathname === match || pathname.startsWith(`${match}/`);
}

const LINK = "text-[13px] transition";
const ON = "font-semibold text-ink";
const OFF = "text-muted hover:text-ink";

export function DesktopNav({
  items,
  serviceLabel,
  services,
  servicesMatch,
}: {
  items: NavItem[];
  serviceLabel: string;
  services: NavService[];
  servicesMatch: string;
}) {
  const pathname = usePathname();
  const servicesActive = isActive(pathname, servicesMatch);

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {items.map((item, i) => (
        <span key={item.key} className="contents">
          <Link
            href={item.href}
            aria-current={isActive(pathname, item.match, item.exact) ? "page" : undefined}
            className={`${LINK} ${isActive(pathname, item.match, item.exact) ? ON : OFF}`}
          >
            {item.label}
          </Link>

          {/* The dropdown sits after the first item, where it did before. */}
          {i === 0 && (
            <div className="group relative">
              <button
                aria-current={servicesActive ? "page" : undefined}
                className={`flex items-center gap-1 ${LINK} ${
                  servicesActive ? ON : "text-muted group-hover:text-ink"
                }`}
              >
                {serviceLabel}
                <Chevron className="size-3.5 transition group-hover:rotate-180" />
              </button>

              <div className="invisible absolute top-full left-1/2 w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="rounded-xl border border-line bg-background p-2 shadow-xl shadow-ink/5">
                  {services.map((s) => {
                    const on = s.match ? isActive(pathname, s.match, true) : false;
                    return (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          aria-current={on ? "page" : undefined}
                          className={`block rounded-lg px-3 py-2 text-start text-[13px] transition ${
                            on
                              ? "bg-primary-soft font-medium text-ink"
                              : "text-muted hover:bg-primary-soft hover:text-ink"
                          }`}
                        >
                          {s.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </span>
      ))}
    </nav>
  );
}
