"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One observer for every `.reveal` on the page, rather than a wrapper component
 * per element. It adds `js-reveal` to <html> itself, so the hidden starting state
 * only ever applies when this is actually running.
 *
 * Re-runs on navigation, otherwise a client-side route change would leave the new
 * page's elements unobserved and therefore stuck hidden.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      // Fires a little before the element reaches the bottom edge, so the motion
      // finishes about when the reader gets there.
      { rootMargin: "0px 0px -12% 0px" },
    );

    for (const el of document.querySelectorAll(".reveal")) observer.observe(el);

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
      for (const el of document.querySelectorAll(".reveal")) el.classList.remove("is-in");
    };
  }, [pathname]);

  return null;
}
