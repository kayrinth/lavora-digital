import Link from "next/link";
import { ArrowRight } from "./icons";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  withArrow = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-[13px] font-medium text-white transition hover:bg-ink/85 ${className}`}
    >
      {children}
      {withArrow && <ArrowRight className="size-4" />}
    </Link>
  );
}

/** Black circle with an icon, ringed by slowly rotating text. */
export function SpinBadge({
  id,
  href,
  label,
  size = 116,
  children,
}: {
  id: string;
  href: string;
  label: string;
  size?: number;
  children: React.ReactNode;
}) {
  const ring = `${label} • `.repeat(3);
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative inline-grid shrink-0 place-items-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path id={id} d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
        </defs>
        <text className="fill-muted text-[7.5px] uppercase tracking-[0.22em]">
          <textPath href={`#${id}`}>{ring}</textPath>
        </text>
      </svg>
      <span className="grid place-items-center rounded-full bg-ink text-white shadow-lg shadow-ink/15 transition group-hover:scale-105"
            style={{ width: size * 0.6, height: size * 0.6 }}>
        {children}
      </span>
    </Link>
  );
}

/** Soft blue→yellow glow with grain, used behind the hero and the banners. */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grain pointer-events-none absolute rounded-full blur-2xl ${className}`}
      style={{
        background:
          "radial-gradient(closest-side, rgba(91,192,235,.85), rgba(160,206,225,.55) 42%, rgba(255,210,63,.6) 72%, rgba(255,210,63,0) 100%)",
      }}
    />
  );
}
