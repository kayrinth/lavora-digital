import Image from "next/image";
import Link from "next/link";
import { Container, Glow, PrimaryButton, SpinBadge } from "./ui";
import { ContactForm } from "./contact-form";
import { MobileMenu } from "./mobile-menu";
import { Newsletter } from "./newsletter";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import {
  ArrowDown,
  Chevron,
  Cursor,
  Gauge,
  Megaphone,
  Play,
  Target,
  TrendUp,
} from "./icons";

type P = { lang: Locale; t: Dictionary };

/** Every in-app link carries the locale, so /ar never falls back to /en. */
const href = (lang: Locale, path: string) => `/${lang}${path}`;

/* ------------------------------------------------------------------ Navbar */

export function Navbar({ lang, t }: P) {
  const menu = [
    { key: "home", label: t.nav.home, href: href(lang, "#top") },
    { key: "work", label: t.nav.work, href: href(lang, "#services") },
    { key: "about", label: t.nav.about, href: href(lang, "#process") },
  ];
  const services = t.services.items.map((s) => s.title);
  const other: Locale = lang === "en" ? "ar" : "en";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href={href(lang, "#top")} className="flex items-center gap-2.5">
          <Image
            src="/lavora-logo.webp"
            alt={t.brand}
            width={36}
            height={36}
            priority
            className="size-9 object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight">{t.brand}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href={menu[0].href} className="text-[13px] font-semibold text-ink">
            {menu[0].label}
          </Link>
          <Link
            href={menu[1].href}
            className="text-[13px] text-muted transition hover:text-ink"
          >
            {menu[1].label}
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-[13px] text-muted transition group-hover:text-ink">
              {t.nav.service}
              <Chevron className="size-3.5 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute top-full left-1/2 w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="rounded-xl border border-line bg-background p-2 shadow-xl shadow-ink/5">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      href={href(lang, "#services")}
                      className="block rounded-lg px-3 py-2 text-start text-[13px] text-muted transition hover:bg-primary-soft hover:text-ink"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href={menu[2].href}
            className="text-[13px] text-muted transition hover:text-ink"
          >
            {menu[2].label}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          {/* Same page, other language. hreflang lets crawlers pair the two. */}
          <Link
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            className="hidden rounded-lg px-2.5 py-2 text-[12px] text-muted transition hover:text-ink sm:inline-block"
          >
            {t.nav.switchTo}
          </Link>
          <PrimaryButton href={href(lang, "#contact")} className="px-3.5 py-2 text-[12px]">
            {t.nav.cta}
          </PrimaryButton>
          <MobileMenu
            items={menu}
            services={services}
            servicesHref={href(lang, "#services")}
            servicesLabel={t.nav.servicesLabel}
            otherLocale={other}
            otherLocaleLabel={t.nav.switchTo}
            openLabel={t.nav.openMenu}
            closeLabel={t.nav.closeMenu}
          />
        </div>
      </Container>
    </header>
  );
}

/* -------------------------------------------------------------------- Hero */

export function Hero({ lang, t }: P) {
  return (
    <section id="top" className="relative overflow-hidden">
      <Glow className="top-[-8rem] left-[38%] size-[520px] opacity-65" />

      <Container className="relative grid items-center gap-12 pt-20 pb-24 lg:grid-cols-2 lg:gap-12 lg:pt-24">
        <div>
          <h1 className="max-w-2xl text-[36px] leading-[1.1] font-light tracking-tight sm:text-[52px] lg:text-[42px] xl:text-[52px]">
            {t.hero.headline.map((line) => (
              <span key={line.strong} className="block">
                {line.lead} <span className="font-semibold">{line.strong}</span>
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-xl text-[14px] leading-relaxed text-muted">
            {t.hero.lead}
          </p>

          <div className="mt-8 grid max-w-md grid-cols-2 divide-x divide-line rounded-xl border border-line bg-surface/80 backdrop-blur">
            {t.hero.stats.map((s) => (
              <div key={s.l} className="px-6 py-6">
                <p dir="ltr" className="text-[28px] leading-none font-normal">
                  {s.n}
                </p>
                <p className="mt-2 text-[12px] text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* The source is a wide panorama, so the frame crops it rather than letterboxing. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/hero1.webp"
              alt={t.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover object-[55%_50%]"
            />
          </div>

          {/* The disc carries the page background so the ring text stays legible off the photo. */}
          <div className="group absolute -bottom-7 -start-7 rounded-full bg-background p-2">
            <SpinBadge
              id="hero-ring"
              href={href(lang, "#collaboration")}
              label={t.hero.badge}
              size={104}
            >
              <ArrowDown className="size-5" />
            </SpinBadge>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- How we operate */

const FEATURE_ICONS = [Target, TrendUp, Megaphone, Gauge];

export function Collaboration({ t }: { t: Dictionary }) {
  return (
    <section id="collaboration" className="scroll-mt-16 pt-16 pb-24 lg:pt-20 lg:pb-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-md text-[32px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            {t.collaboration.titleLead}{" "}
            <span className="font-semibold">{t.collaboration.titleStrong}</span>
          </h2>
          <p className="max-w-md text-[14px] leading-relaxed text-muted lg:justify-self-end lg:text-end">
            {t.collaboration.body}
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.collaboration.features.map((text, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <li
                key={text}
                className="group flex items-center gap-4 bg-surface px-6 py-5 text-start transition hover:bg-primary-soft/60 sm:flex-col sm:gap-5 sm:px-7 sm:py-10 sm:text-center"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-[10px] bg-background text-primary shadow-sm shadow-ink/5 transition group-hover:-translate-y-0.5">
                  <Icon className="size-5" />
                </span>
                <p className="text-[13px] leading-relaxed text-muted sm:max-w-[18ch] sm:text-[12.5px]">
                  {text}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Services */

const ART = ["ads", "web", "search"] as const;

function ServiceArt({ kind, alt }: { kind: (typeof ART)[number]; alt?: string }) {
  const common = "absolute inset-0";
  return (
    <div className="relative aspect-square overflow-hidden bg-surface">
      {kind === "ads" && (
        <div className={`${common} bg-gradient-to-br from-primary-soft to-secondary-soft`}>
          {/* Transparent WebP: the gradient stays visible behind the cut-out. The artwork sits
              left of centre in its canvas, so it is nudged right and enlarged a touch. */}
          <Image
            src="/ads.webp"
            alt={alt ?? ""}
            fill
            sizes="(min-width: 1280px) 544px, (min-width: 1024px) 38vw, (min-width: 640px) 52vw, 78vw"
            className="translate-x-[8%] scale-[1.15] object-contain"
          />
        </div>
      )}

      {kind === "web" && (
        <div className={`${common} bg-gradient-to-b from-secondary-soft to-primary-soft`}>
          {/* Transparent WebP: the gradient above stays visible behind the mockup. */}
          <Image
            src="/web-development.webp"
            alt={alt ?? ""}
            fill
            sizes="(min-width: 1280px) 544px, (min-width: 1024px) 38vw, (min-width: 640px) 52vw, 78vw"
            className="object-contain"
          />
        </div>
      )}

      {kind === "search" && (
        <div className={`${common} grid place-items-center bg-gradient-to-tr from-secondary-soft via-background to-primary-soft p-10`}>
          {/* Search result with an ad slot on top */}
          <div className="w-full space-y-3">
            <div className="flex h-8 items-center gap-2 rounded-full border border-line bg-background px-3">
              <span className="size-2.5 rounded-full border border-muted" />
              <div className="h-1.5 w-2/3 rounded bg-line" />
            </div>
            <div className="rounded-lg border border-primary/40 bg-background p-3">
              <span className="block h-1.5 w-4 rounded bg-primary" />
              <div className="mt-2 h-1.5 w-3/4 rounded bg-ink/70" />
              <div className="mt-1.5 h-1 w-full rounded bg-line" />
              <div className="mt-1 h-1 w-1/2 rounded bg-line" />
            </div>
            <div className="space-y-1.5 px-1 opacity-60">
              <div className="h-1.5 w-2/3 rounded bg-line" />
              <div className="h-1 w-full rounded bg-line" />
              <div className="h-1.5 w-1/2 rounded bg-line" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Services({ t }: { t: Dictionary }) {
  return (
    <section id="services" className="scroll-mt-16 pb-24 lg:pb-32">
      <Container>
        <h2 className="text-center text-[32px] leading-tight font-light tracking-tight sm:text-[38px]">
          {t.services.titleLead}{" "}
          <span className="font-semibold">{t.services.titleStrong}</span>
          {t.services.titleTail ? ` ${t.services.titleTail}` : null}
        </h2>
      </Container>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-px overflow-x-auto border-y border-line bg-line">
        {t.services.items.map((s, i) => (
          <article
            key={s.title}
            className="group w-[78vw] shrink-0 snap-start bg-background sm:w-[52vw] lg:w-[38vw] xl:w-[34rem]"
          >
            <div className="overflow-hidden">
              <div className="transition duration-500 group-hover:scale-[1.03]">
                <ServiceArt kind={ART[i]} alt={[t.services.adsAlt, t.services.webAlt, undefined][i]} />
              </div>
            </div>
            <div className="border-t border-line px-6 py-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[19px] font-medium">{s.title}</h3>
                <span dir="ltr" className="text-[19px] text-muted">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Work banner */

export function WorkBanner({ lang, t }: P) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface">
      <Glow className="top-[-10rem] left-[-12rem] size-[480px] opacity-80" />
      <Glow className="right-[-13rem] bottom-[-13rem] size-[520px] opacity-70" />

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div>
          <h2 className="max-w-sm text-[30px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            {t.banner.titleLead}{" "}
            <span className="font-semibold">{t.banner.titleStrong}</span>
          </h2>
          <p className="mt-5 text-[14px] text-muted">{t.banner.body}</p>
        </div>

        <div className="relative flex items-end justify-center gap-4">
          {/* Live campaign dashboard */}
          <div aria-hidden className="w-[58%]">
            <div className="rounded-lg border border-line bg-background p-2 shadow-xl shadow-ink/10">
              <div className="aspect-[16/10] overflow-hidden rounded bg-gradient-to-br from-primary-soft via-background to-secondary-soft p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="h-1.5 w-1/4 rounded bg-primary/70" />
                  <div className="h-1.5 w-8 rounded bg-secondary" />
                </div>
                <div className="flex h-12 items-end gap-1.5">
                  {[35, 55, 45, 70, 60, 85, 100].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t bg-primary/45"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 h-4 rounded bg-background/80" />
              </div>
            </div>
            <div className="mx-auto h-5 w-10 bg-line" />
            <div className="mx-auto h-1.5 w-28 rounded-full bg-line" />
          </div>

          {/* Mobile placement preview */}
          <div aria-hidden className="w-[38%] pb-1">
            <div className="rounded-t-md border border-b-0 border-line bg-background p-1.5">
              <div className="aspect-[16/10] overflow-hidden rounded-sm bg-ink p-2">
                <div className="space-y-1.5">
                  <div className="h-1 w-2/3 rounded bg-primary/70" />
                  <div className="h-1 w-1/2 rounded bg-white/25" />
                  <div className="h-6 rounded bg-white/10" />
                  <div className="h-1 w-3/5 rounded bg-secondary/70" />
                </div>
              </div>
            </div>
            <div className="h-1.5 rounded-b-md bg-line" />
          </div>

          <div className="group absolute -top-4 end-0 origin-top scale-[0.72] sm:scale-100 lg:-top-10">
            <SpinBadge
              id="video-ring"
              href={href(lang, "#contact")}
              label={t.banner.badge}
              size={104}
            >
              <Play className="size-5 rtl:rotate-180" />
            </SpinBadge>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Work process */

export function Process({ lang, t }: P) {
  return (
    <section id="process" className="scroll-mt-16 py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="max-w-xs text-[32px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            {t.process.titleLead}{" "}
            <span className="font-semibold">{t.process.titleStrong}</span>{" "}
            {t.process.titleTail}
          </h2>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-muted">
            {t.process.body}
          </p>
          <PrimaryButton href={href(lang, "#contact")} className="mt-8">
            {t.process.cta}
          </PrimaryButton>
        </div>

        <ul className="border-t border-line">
          {t.process.steps.map((s, i) => (
            <li
              key={s.title}
              className="group relative border-b border-line transition hover:bg-secondary-soft"
            >
              <div className="flex items-start gap-6 px-4 py-6">
                <span dir="ltr" className="w-6 pt-0.5 text-[13px] text-muted">
                  {i + 1}
                </span>
                <span aria-hidden className="mt-1 h-10 w-px bg-line" />
                <div>
                  <h3 className="text-[18px] font-medium transition group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-muted">{s.desc}</p>
                </div>
              </div>

              {/* Report preview, revealed on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 end-6 hidden w-44 -translate-y-1/2 rotate-[-8deg] rounded-lg border border-line bg-background p-2 opacity-0 shadow-xl shadow-ink/10 transition duration-300 group-hover:rotate-[-3deg] group-hover:opacity-100 lg:block"
              >
                <div className="space-y-1.5">
                  <div className="h-1.5 w-1/3 rounded bg-primary" />
                  <div className="flex h-10 items-end gap-1">
                    {[40, 60, 50, 75, 95].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-t bg-primary-soft"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-6 rounded bg-surface" />
                    <div className="h-6 rounded bg-secondary/40" />
                    <div className="h-6 rounded bg-surface" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- Marquee */

function Circle({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-16 shrink-0 place-items-center rounded-full border border-line text-primary sm:size-20">
      {children}
    </span>
  );
}

function RowOne({ t }: { t: Dictionary }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pe-10 text-[44px] font-light tracking-tight sm:text-[58px]">
      <span>{t.marquee.word1}</span>
      <Circle>
        <Megaphone className="size-7 rtl:-scale-x-100" />
      </Circle>
      <span>{t.marquee.word2}</span>
    </div>
  );
}

function RowTwo({ t }: { t: Dictionary }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pe-10 text-[44px] font-light tracking-tight sm:text-[58px]">
      <Circle>
        <Target className="size-7" />
      </Circle>
      <span>{t.marquee.word3}</span>
      <span className="max-w-[22rem] rounded-full border border-line px-7 py-4 text-[12px] leading-relaxed text-muted">
        {t.marquee.note}
      </span>
      <Circle>
        <Cursor className="size-7 text-secondary rtl:-scale-x-100" />
      </Circle>
    </div>
  );
}

export function Marquee({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.marquee.label} className="border-y border-line py-4">
      <div className="flex overflow-hidden border-b border-line py-6">
        <div className="flex animate-marquee">
          <RowOne t={t} />
          <RowOne t={t} />
          <RowOne t={t} />
          <RowOne t={t} />
        </div>
      </div>
      <div className="flex overflow-hidden py-6">
        <div className="flex animate-marquee [animation-direction:reverse]">
          <RowTwo t={t} />
          <RowTwo t={t} />
          <RowTwo t={t} />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- CTA */

export function Cta({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden">
      <Glow className="top-1/2 left-[-10rem] size-[420px] -translate-y-1/2 opacity-80" />
      <Glow className="top-1/2 right-[-10rem] size-[420px] -translate-y-1/2 opacity-70" />

      <Container className="relative py-24 text-center lg:py-32">
        <h2 className="text-[32px] leading-tight font-light tracking-tight sm:text-[40px]">
          {t.cta.titleLead} <span className="font-semibold">{t.cta.titleStrong}</span>{" "}
          {t.cta.titleTail}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-muted">
          {t.cta.body}
        </p>
        <div className="mt-10">
          <ContactForm t={t.form} />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ Footer */

export function Footer({ lang, t }: P) {
  return (
    <footer className="border-t border-line bg-background">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-16 lg:grid-cols-[repeat(3,auto)_1fr] lg:gap-16">
        {t.footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.items.map((i) => (
                <li key={i}>
                  <Link
                    href={href(lang, "#contact")}
                    className="inline-flex min-h-[36px] items-center text-[13px] text-muted transition hover:text-ink"
                  >
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-1 lg:max-w-sm lg:justify-self-end">
          <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase">
            {t.footer.stayUpdated}
          </h3>
          <div className="mt-5">
            <Newsletter t={t.newsletter} />
          </div>
          <p className="mt-4 text-[11.5px] leading-relaxed text-muted">
            {t.footer.newsletterNote}
          </p>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-6 border-t border-line py-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-lg">
            <p className="text-[13px] font-semibold">{t.footer.rights}</p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-muted">
              {t.footer.blurb}
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href={href(lang, "/terms")}
              className="text-[12px] text-muted transition hover:text-ink"
            >
              {t.footer.terms}
            </Link>
            <Link
              href={href(lang, "/privacy")}
              className="text-[12px] text-muted transition hover:text-ink"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
