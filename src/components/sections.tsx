import Image from "next/image";
import Link from "next/link";
import { Container, Glow, PrimaryButton, SpinBadge } from "./ui";
import { ContactForm } from "./contact-form";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { PROJECTS } from "@/lib/portfolio";
import { SERVICE_SLUGS } from "@/lib/services";
import {
  ArrowDown,
  ArrowRight,
  Instagram,
  Linkedin,
  Play,
  Youtube,
} from "./icons";

type P = { lang: Locale; t: Dictionary };

/**
 * The footer's social row. These still point at the contact section: swap each
 * href for the real profile URL once the accounts exist.
 */
const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
];

/** Every in-app link carries the locale, so /ar never falls back to /en. */
const href = (lang: Locale, path: string) => `/${lang}${path}`;

/* ------------------------------------------------------------------ Navbar */

export function Navbar({ lang, t }: P) {
  const services = t.services.items.map((s, i) => {
    const slug = SERVICE_SLUGS[i];
    const path = slug ? `/services/${slug}` : "#services";
    return {
      label: s.title,
      href: href(lang, path),
      match: slug ? `/${lang}${path}` : undefined,
    };
  });

  // Only the categories that actually have projects reach the Project dropdown.
  const projectCategories = PROJECTS.map((p) => p.service)
    .filter((s, i, all) => all.indexOf(s) === i)
    .map((key) => ({
      label: t.portfolio.services[key],
      href: href(lang, `/portfolio?service=${key}`),
    }));

  const menu = [
    { key: "home", label: t.nav.home, href: href(lang, "#top"), match: `/${lang}`, exact: true },
    { key: "service", label: t.nav.service, match: `/${lang}/services`, children: services },
    {
      key: "work",
      label: t.nav.work,
      href: href(lang, "/portfolio"),
      match: `/${lang}/portfolio`,
      children: projectCategories,
    },
    { key: "about", label: t.nav.about, href: href(lang, "/about"), match: `/${lang}/about` },
  ];

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

        <DesktopNav items={menu} />

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
          <span className="hidden md:inline-flex">
            <PrimaryButton href={href(lang, "#contact")} className="px-3.5 py-2 text-[12px]">
              {t.nav.cta}
            </PrimaryButton>
          </span>
          <MobileMenu
            items={menu}
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
            {t.hero.headline.map((line, i) => (
              <span
                key={line.strong}
                className="rise block"
                style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              >
                {line.lead} <span className="font-semibold">{line.strong}</span>
              </span>
            ))}
          </h1>

          <p
            className="rise mt-7 max-w-xl text-[14px] leading-relaxed text-muted"
            style={{ "--d": "270ms" } as React.CSSProperties}
          >
            {t.hero.lead}
          </p>

          <div
            className="rise mt-8 grid max-w-md grid-cols-2 divide-x divide-line rounded-xl border border-line bg-surface/80 backdrop-blur"
            style={{ "--d": "360ms" } as React.CSSProperties}
          >
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

        <div className="rise relative" style={{ "--d": "180ms" } as React.CSSProperties}>
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

export function Collaboration({ t }: { t: Dictionary }) {
  return (
    <section id="collaboration" className="scroll-mt-16 pt-16 pb-24 lg:pt-20 lg:pb-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="reveal max-w-md text-[32px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            {t.collaboration.titleLead}{" "}
            <span className="font-semibold">{t.collaboration.titleStrong}</span>
          </h2>
          <p className="reveal max-w-md text-[14px] leading-relaxed text-muted lg:justify-self-end lg:text-end">
            {t.collaboration.body}
          </p>
        </div>

        <ul className="reveal-stagger mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.collaboration.features.map((f, i) => (
            <li
              key={f.title}
              className="reveal group bg-surface px-7 py-8 transition hover:bg-primary-soft/60"
            >
              <span dir="ltr" className="block text-[12px] text-primary tabular-nums">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[15px] font-semibold">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{f.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Services */

/**
 * One transparent illustration per service, in the order of t.services.items.
 * The gradient behind each one stays visible through the cut-out.
 */
const SERVICE_ART = [
  { src: "/services/ads.webp", bg: "from-primary-soft to-secondary-soft" },
  { src: "/services/web.webp", bg: "from-secondary-soft to-primary-soft" },
  { src: "/services/digital-marketing.webp", bg: "from-primary-soft via-background to-secondary-soft" },
];

function ServiceArt({ index, alt }: { index: number; alt: string }) {
  const art = SERVICE_ART[index];
  return (
    <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${art.bg}`}>
      <Image
        src={art.src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 544px, (min-width: 1024px) 38vw, (min-width: 640px) 52vw, 78vw"
        className="object-contain p-6"
      />
    </div>
  );
}

export function Services({ lang, t }: P) {
  return (
    <section id="services" className="scroll-mt-16 pb-24 lg:pb-32">
      <Container>
        <h2 className="reveal text-center text-[32px] leading-tight font-light tracking-tight sm:text-[38px]">
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
            {/* The whole card is the link, so the image and the copy share one target. */}
            <Link href={href(lang, `/services/${SERVICE_SLUGS[i]}`)} className="block">
              <div className="overflow-hidden">
                <div className="transition duration-500 group-hover:scale-[1.03]">
                  <ServiceArt
                    index={i}
                    alt={[t.services.adsAlt, t.services.webAlt, t.services.marketingAlt][i]}
                  />
                </div>
              </div>
              <div className="border-t border-line px-6 py-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[19px] font-medium transition group-hover:text-primary">
                    {s.title}
                  </h3>
                  <span dir="ltr" className="text-[19px] text-muted">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-muted">
                  {s.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium">
                  {t.services.learnMore}
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <Container className="mt-10 text-center">
        <PrimaryButton href={href(lang, "/portfolio")} withArrow>
          {t.services.seeMore}
        </PrimaryButton>
      </Container>
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
          <h2 className="reveal max-w-sm text-[30px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            {t.banner.titleLead}
            <br />
            <span className="font-semibold">{t.banner.titleStrong}</span>
          </h2>
          <p className="mt-5 text-[14px] text-muted">{t.banner.body}</p>
        </div>

        <div className="relative">
          {/* Transparent WebP: the section's wash stays visible behind the screenshot. */}
          <div className="relative aspect-[16/9]">
            <Image
              src="/report.webp"
              alt={t.banner.imageAlt}
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-contain"
            />
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
          <h2 className="reveal max-w-xs text-[32px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
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

        <ul className="reveal-stagger border-t border-line">
          {t.process.steps.map((s, i) => (
            <li
              key={s.title}
              className="reveal group relative border-b border-line transition hover:bg-secondary-soft"
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

/* ----------------------------------------------------------------- Clients */

/**
 * In the order of public/client. Four of these logos ship on a solid white
 * background, so every one sits on a white tile rather than straight on the page.
 */
const CLIENTS = [
  { file: "01. Unilever.png", name: "Unilever" },
  { file: "02. LOGO VASELINE.png", name: "Vaseline" },
  { file: "03. LOGO DOVE.png", name: "Dove" },
  { file: "04. LOGO PEPSODENT.webp", name: "Pepsodent" },
  { file: "05. LOGO RINSO.webp", name: "Rinso" },
  { file: "06. LOGO ADIDAS.png", name: "Adidas" },
  { file: "07. LOGO KALBE.webp", name: "Kalbe" },
  { file: "08. LOGO PROMAG.png", name: "Promag" },
  { file: "09. LOGO WAROENG STEAK.jpg", name: "Waroeng Steak" },
  { file: "10. LOGO SPRINGHILL.jpeg", name: "Springhill" },
  { file: "11. LOGO NATA SOLUSI.jpg", name: "Nata Solusi" },
  { file: "12. LOGO CHINESERD.png", name: "Chinese RD" },
  { file: "13. LOGO BARBURGER.png", name: "Barburger" },
  { file: "14. LOGO SENSWELL.webp", name: "Senswell" },
];

/** Grey by default so the row stays quiet; colour returns on hover. */
function LogoTile({ file }: { file: string }) {
  return (
    <li className="relative h-20 w-36 shrink-0 rounded-2xl bg-white shadow-sm shadow-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 sm:h-24 sm:w-44">
      <Image
        src={`/client/${encodeURIComponent(file)}`}
        alt=""
        fill
        sizes="176px"
        className="object-contain p-4 grayscale transition duration-500 group-hover/clients:grayscale-0 sm:p-5"
      />
    </li>
  );
}

/**
 * Four copies of the group: the keyframes shift the track by -50%, so each half
 * has to be identical and wider than the viewport for the loop to be seamless.
 */
function ClientTrack({
  items,
  reverse = false,
  duration,
}: {
  items: typeof CLIENTS;
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div
      className={`flex w-max animate-marquee ${reverse ? "[animation-direction:reverse]" : ""}`}
      style={{ animationDuration: duration }}
    >
      {[0, 1, 2, 3].map((copy) => (
        <ul key={copy} aria-hidden className="flex shrink-0 items-center gap-4 pe-4">
          {items.map((c) => (
            <LogoTile key={c.file} file={c.file} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export function Clients({ t }: { t: Dictionary }) {
  const half = Math.ceil(CLIENTS.length / 2);

  return (
    <section
      aria-label={`${t.clients.titleLead} ${t.clients.titleStrong}`.trim()}
      className="clients group/clients overflow-hidden bg-gradient-to-b from-background via-surface to-background py-16 lg:py-24"
    >
      <Container>
        <h2 className="reveal text-center text-[28px] leading-tight font-light tracking-tight sm:text-[34px]">
          {t.clients.titleLead}{" "}
          <span className="font-semibold">{t.clients.titleStrong}</span>
        </h2>
      </Container>

      {/* Two rows at different speeds and directions, so the strip has some depth. */}
      <div className="marquee-fade mt-12 space-y-4 motion-reduce:hidden">
        <ClientTrack items={CLIENTS.slice(0, half)} duration="42s" />
        <ClientTrack items={CLIENTS.slice(half)} reverse duration="56s" />
      </div>

      {/* Nothing moves when reduced motion is asked for, so the logos sit still. */}
      <Container className="mt-12 hidden motion-reduce:block">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {CLIENTS.map((c) => (
            <LogoTile key={c.file} file={c.file} />
          ))}
        </ul>
      </Container>

      {/* The rows above are decorative; this keeps the names available to a screen reader. */}
      <p className="sr-only">{CLIENTS.map((c) => c.name).join(", ")}</p>
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
        <h2 className="reveal text-[32px] leading-tight font-light tracking-tight sm:text-[40px]">
          {t.cta.titleLead} <span className="font-semibold">{t.cta.titleStrong}</span>{" "}
          {t.cta.titleTail}
        </h2>
        <p className="reveal mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-muted">
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
  const columns = [
    {
      title: t.footer.servicesTitle,
      items: t.services.items.map((s, i) => {
        const slug = SERVICE_SLUGS[i];
        return {
          label: s.title,
          href: slug ? href(lang, `/services/${slug}`) : href(lang, "#services"),
        };
      }),
    },
    {
      title: t.footer.companyTitle,
      items: [
        { label: t.nav.about, href: href(lang, "/about") },
        { label: t.nav.work, href: href(lang, "/portfolio") },
        { label: t.nav.contact, href: href(lang, "#contact") },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-background">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Image
              src="/lavora-logo.webp"
              alt=""
              width={32}
              height={32}
              className="size-8 object-contain"
            />
            <span className="text-[16px] font-semibold tracking-tight">{t.brand}</span>
          </div>

          <p className="mt-5 text-[13px] leading-relaxed text-muted">{t.footer.blurb}</p>

          <ul className="mt-6 flex items-center gap-2">
            {SOCIALS.map(({ Icon, label }) => (
              <li key={label}>
                <Link
                  href={href(lang, "#contact")}
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-lg text-ink transition hover:text-primary"
                >
                  <Icon className="size-[18px]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:justify-self-end">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[14px] font-semibold">{col.title}</h3>
              <ul className="mt-4">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-[38px] items-center text-[13px] text-muted transition hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-4 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-muted">{t.footer.rights}</p>
          <div className="flex gap-6">
            <Link
              href={href(lang, "/terms")}
              className="text-[12.5px] text-muted underline underline-offset-4 transition hover:text-ink"
            >
              {t.footer.terms}
            </Link>
            <Link
              href={href(lang, "/privacy")}
              className="text-[12.5px] text-muted underline underline-offset-4 transition hover:text-ink"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
