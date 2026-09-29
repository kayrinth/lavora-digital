import Link from "next/link";
import { Container, Glow, PrimaryButton, SpinBadge } from "./ui";
import { Newsletter } from "./newsletter";
import {
  ArrowDown,
  Chevron,
  Cursor,
  Gauge,
  Instagram,
  Linkedin,
  Megaphone,
  Play,
  Target,
  TrendUp,
  Youtube,
} from "./icons";

/* ------------------------------------------------------------------ Navbar */

const MENU = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#services" },
  { label: "Service", href: "#services", dropdown: true },
  { label: "About", href: "#process" },
];

const SERVICE_LINKS = [
  "Paid Social",
  "Search & Shopping",
  "Programmatic Display",
  "Creative Studio",
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-full bg-primary">
            <span className="size-2.5 rounded-full bg-background" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Orangely</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {MENU.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 text-[13px] text-muted transition group-hover:text-ink">
                  {item.label}
                  <Chevron className="size-3.5 transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute top-full left-1/2 w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="rounded-xl border border-line bg-background p-2 shadow-xl shadow-ink/5">
                    {SERVICE_LINKS.map((s) => (
                      <li key={s}>
                        <Link
                          href="#services"
                          className="block rounded-lg px-3 py-2 text-[13px] text-muted transition hover:bg-primary-soft hover:text-ink"
                        >
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.label === "Home"
                    ? "text-[13px] font-semibold text-ink"
                    : "text-[13px] text-muted transition hover:text-ink"
                }
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <PrimaryButton href="#contact" className="px-3.5 py-1.5 text-[12px]">
          Get a Proposal
        </PrimaryButton>
      </Container>
    </header>
  );
}

/* -------------------------------------------------------------------- Hero */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Glow className="top-[-8rem] left-[38%] size-[520px] opacity-65" />

      <Container className="relative grid gap-16 pt-20 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pt-24 lg:pb-24">
        <div>
          <h1 className="max-w-xl text-[42px] leading-[1.08] font-light tracking-tight sm:text-[56px] lg:text-[62px]">
            <span className="font-semibold">Amplify</span> your
            <br />
            brand to every
            <br />
            <span className="inline-flex items-center gap-5">
              <span aria-hidden className="hidden h-px w-24 bg-ink/60 sm:block" />
              audience
            </span>
          </h1>

          <p className="mt-7 max-w-sm text-[14px] leading-relaxed text-muted">
            A digital advertising agency that plans, buys and optimises media — and
            reports on every impression it spends.
          </p>

          <div className="mt-12 flex items-center gap-10">
            <div className="group">
              <SpinBadge id="hero-ring" href="#collaboration" label="see how we work">
                <ArrowDown className="size-5" />
              </SpinBadge>
            </div>

            <ul className="flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <li key={label}>
                  <Link
                    href="#contact"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:pt-4">
          <div className="grid grid-cols-2 divide-x divide-line rounded-xl border border-line bg-surface/80 backdrop-blur">
            {[
              { n: "2.4B+", l: "Impressions served" },
              { n: "900+", l: "Campaigns launched" },
            ].map((s) => (
              <div key={s.n} className="px-6 py-6">
                <p className="text-[28px] leading-none font-normal">{s.n}</p>
                <p className="mt-2 text-[12px] text-muted">{s.l}</p>
              </div>
            ))}
          </div>

          <figure className="lg:text-right">
            <span aria-hidden className="mb-5 block h-px w-full bg-line" />
            <blockquote className="text-[13px] leading-relaxed text-muted">
              &ldquo;Orangely rebuilt our paid funnel from scratch. Cost per acquisition
              dropped 41% in a single quarter, and the reporting is finally something we
              can act on&rdquo;
            </blockquote>
            <figcaption className="mt-5">
              <span className="block text-[13px] font-semibold text-ink">
                Paul Yayuk Reyhan
              </span>
              <span className="block text-[12px] text-muted">CMO of Northwind</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- How we operate */

const FEATURES = [
  { Icon: Target, text: "Audiences built from first-party data, never guesswork" },
  { Icon: TrendUp, text: "Every impression tracked through to revenue" },
  { Icon: Megaphone, text: "One message, tuned per channel and placement" },
  { Icon: Gauge, text: "Weekly optimisation cycles that compound results" },
];

export function Collaboration() {
  return (
    <section id="collaboration" className="scroll-mt-16 pt-16 pb-24 lg:pt-20 lg:pb-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-md text-[32px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            Media buying built on <span className="font-semibold">evidence</span>
          </h2>
          <p className="max-w-md text-[14px] leading-relaxed text-muted lg:justify-self-end lg:text-right">
            We start with your data, not a template. Audience research, creative testing
            and clean measurement run on a fixed cadence, so budget always moves toward
            what is working.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ Icon, text }) => (
            <li
              key={text}
              className="group flex flex-col items-center gap-5 bg-surface px-7 py-10 text-center transition hover:bg-primary-soft/60"
            >
              <span className="grid size-11 place-items-center rounded-[10px] bg-background text-primary shadow-sm shadow-ink/5 transition group-hover:-translate-y-0.5">
                <Icon className="size-5" />
              </span>
              <p className="max-w-[18ch] text-[12.5px] leading-relaxed text-muted">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Services */

const SERVICES = [
  {
    no: "01",
    title: "Paid Social",
    desc: "Full-funnel campaigns on Meta, TikTok and LinkedIn that scale profitably",
    art: "social",
  },
  {
    no: "02",
    title: "Search & Shopping",
    desc: "Google and Bing campaigns engineered around buying intent and margin",
    art: "search",
  },
  {
    no: "03",
    title: "Programmatic Display",
    desc: "The right screen at the right moment across the open web and CTV",
    art: "display",
  },
  {
    no: "04",
    title: "Creative Studio",
    desc: "Ad creative produced, tested and iterated on a weekly cadence",
    art: "creative",
  },
] as const;

function ServiceArt({ kind }: { kind: (typeof SERVICES)[number]["art"] }) {
  const common = "absolute inset-0";
  return (
    <div className="relative aspect-square overflow-hidden bg-surface">
      {kind === "social" && (
        <div className={`${common} grid place-items-center bg-gradient-to-br from-primary-soft to-secondary-soft p-10`}>
          {/* Sponsored post in a feed */}
          <div className="w-full rounded-xl border border-line bg-background p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary/40" />
              <div className="flex-1">
                <div className="h-1.5 w-16 rounded bg-line" />
                <div className="mt-1 h-1 w-10 rounded bg-secondary" />
              </div>
            </div>
            <div className="mt-3 h-20 rounded-lg bg-primary/25" />
            <div className="mt-3 flex items-center justify-between">
              <div className="h-1.5 w-20 rounded bg-line" />
              <span className="rounded bg-ink px-2 py-1 text-[7px] text-white">
                Learn more
              </span>
            </div>
          </div>
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
              <span className="text-[7px] font-semibold tracking-wide text-primary uppercase">
                Ad
              </span>
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

      {kind === "display" && (
        <div className={`${common} grain grid place-items-center bg-gradient-to-b from-primary-soft to-secondary-soft p-10`}>
          {/* Banner placements across screens */}
          <div className="grid w-full grid-cols-3 gap-2">
            <div className="col-span-2 h-14 rounded-lg bg-background/90 p-2">
              <div className="h-full rounded bg-primary/30" />
            </div>
            <div className="h-14 rounded-lg bg-background/90 p-2">
              <div className="h-full rounded bg-secondary/50" />
            </div>
            <div className="h-20 rounded-lg bg-background/90 p-2">
              <div className="h-full rounded bg-secondary/40" />
            </div>
            <div className="col-span-2 h-20 rounded-lg bg-background/90 p-2">
              <div className="h-full rounded bg-primary/25" />
            </div>
          </div>
        </div>
      )}

      {kind === "creative" && (
        <div className={`${common} grid place-items-center bg-gradient-to-bl from-primary-soft via-background to-surface`}>
          <svg viewBox="0 0 120 120" className="size-2/3">
            <circle cx="45" cy="46" r="25" fill="#5BC0EB" opacity=".7" />
            <rect x="52" y="52" width="44" height="44" rx="12" fill="#FFD23F" opacity=".85" />
            <path d="M20 96c12-24 30-28 48-12" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 pb-24 lg:pb-32">
      <Container>
        <h2 className="text-center text-[32px] leading-tight font-light tracking-tight sm:text-[38px]">
          Every channel your <span className="font-semibold">buyers</span> are on
        </h2>
      </Container>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-px overflow-x-auto border-y border-line bg-line">
        {SERVICES.map((s) => (
          <article
            key={s.no}
            className="group w-[78vw] shrink-0 snap-start bg-background sm:w-[46vw] lg:w-[32vw] xl:w-[30rem]"
          >
            <div className="overflow-hidden">
              <div className="transition duration-500 group-hover:scale-[1.03]">
                <ServiceArt kind={s.art} />
              </div>
            </div>
            <div className="border-t border-line px-6 py-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[19px] font-medium">{s.title}</h3>
                <span className="text-[19px] text-muted">{s.no}</span>
              </div>
              <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Container>
        <p className="mt-5 text-right text-[12px] text-muted">Scroll to see more →</p>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Work banner */

export function WorkBanner() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface">
      <Glow className="top-[-10rem] left-[-12rem] size-[480px] opacity-80" />
      <Glow className="right-[-13rem] bottom-[-13rem] size-[520px] opacity-70" />

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div>
          <h2 className="max-w-sm text-[30px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            Always-on media, <span className="font-semibold">always improving</span>
          </h2>
          <p className="mt-5 text-[14px] text-muted">
            Optimised daily, reported weekly, reviewed with you every month.
          </p>
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

          <div className="group absolute -top-6 -right-2 lg:-top-10 lg:right-0">
            <SpinBadge id="video-ring" href="#contact" label="see our results" size={104}>
              <Play className="size-5" />
            </SpinBadge>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Work process */

const STEPS = [
  {
    no: "1",
    title: "Audit",
    desc: "We map your funnel, tracking and past spend before touching a budget",
  },
  {
    no: "2",
    title: "Strategy",
    desc: "Channel mix, audiences and budget split agreed with you up front",
  },
  {
    no: "3",
    title: "Launch",
    desc: "Creative, tracking and campaigns go live with clean measurement",
  },
  {
    no: "4",
    title: "Scale",
    desc: "Weekly optimisation until the cost per result stops falling",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="max-w-xs text-[32px] leading-[1.15] font-light tracking-tight sm:text-[38px]">
            How we turn <span className="font-semibold">budget</span> into growth
          </h2>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-muted">
            A clear four-step structure, so you always know what your spend is doing and
            what happens next.
          </p>
          <PrimaryButton href="#contact" className="mt-8">
            Get a Proposal
          </PrimaryButton>
        </div>

        <ul className="border-t border-line">
          {STEPS.map((s) => (
            <li
              key={s.no}
              className="group relative border-b border-line transition hover:bg-secondary-soft"
            >
              <div className="flex items-start gap-6 px-4 py-6">
                <span className="w-6 pt-0.5 text-[13px] text-muted">{s.no}</span>
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
                className="pointer-events-none absolute top-1/2 right-6 hidden w-44 -translate-y-1/2 rotate-[-8deg] rounded-lg border border-line bg-background p-2 opacity-0 shadow-xl shadow-ink/10 transition duration-300 group-hover:rotate-[-3deg] group-hover:opacity-100 lg:block"
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

function RowOne() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 text-[44px] font-light tracking-tight sm:text-[58px]">
      <span>Reach</span>
      <Circle>
        <Megaphone className="size-7" />
      </Circle>
      <span>the right</span>
    </div>
  );
}

function RowTwo() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 text-[44px] font-light tracking-tight sm:text-[58px]">
      <Circle>
        <Target className="size-7" />
      </Circle>
      <span>audience</span>
      <span className="max-w-[22rem] rounded-full border border-line px-7 py-4 text-[12px] leading-relaxed text-muted">
        Great targeting only pays off when the creative earns the click and the landing
        page earns the sale
      </span>
      <Circle>
        <Cursor className="size-7 text-secondary" />
      </Circle>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Reach the right audience" className="border-y border-line py-4">
      <div className="flex overflow-hidden border-b border-line py-6">
        <div className="flex animate-marquee">
          <RowOne />
          <RowOne />
          <RowOne />
          <RowOne />
        </div>
      </div>
      <div className="flex overflow-hidden py-6">
        <div className="flex animate-marquee [animation-direction:reverse]">
          <RowTwo />
          <RowTwo />
          <RowTwo />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- CTA */

export function Cta() {
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden">
      <Glow className="top-1/2 left-[-10rem] size-[420px] -translate-y-1/2 opacity-80" />
      <Glow className="top-1/2 right-[-10rem] size-[420px] -translate-y-1/2 opacity-70" />

      <Container className="relative py-24 text-center lg:py-32">
        <h2 className="text-[32px] leading-tight font-light tracking-tight sm:text-[40px]">
          Let&apos;s plan your <span className="font-semibold">next</span> campaign
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-muted">
          Send us your current numbers and we&apos;ll come back with where the waste is.
        </p>
        <PrimaryButton href="mailto:hello@orangely.studio" withArrow className="mt-8">
          Get a Proposal
        </PrimaryButton>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ Footer */

const FOOTER_LINKS = [
  {
    title: "Services",
    items: ["Paid Social", "Search & Shopping", "Programmatic", "Creative Studio"],
  },
  { title: "Company", items: ["About", "Case Studies", "Careers", "Contact"] },
  { title: "Connect", items: ["Instagram", "LinkedIn", "YouTube"] },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <Container className="grid gap-12 py-16 lg:grid-cols-[repeat(3,auto)_1fr] lg:gap-16">
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.items.map((i) => (
                <li key={i}>
                  <Link href="#contact" className="text-[13px] text-muted transition hover:text-ink">
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:max-w-sm lg:justify-self-end">
          <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase">
            Stay updated
          </h3>
          <div className="mt-5">
            <Newsletter />
          </div>
          <p className="mt-4 text-[11.5px] leading-relaxed text-muted">
            Occasional emails from Orangely on ad platform changes and what is working in
            our accounts. Unsubscribe from any one of them.
          </p>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-6 border-t border-line py-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-lg">
            <p className="text-[13px] font-semibold">
              ©2026 Orangely All rights reserved.
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-muted">
              Orangely is a digital advertising agency that plans, buys and optimises
              media for brands that care what every impression returns.
            </p>
          </div>
          <div className="flex gap-6">
            {["Terms", "Privacy"].map((l) => (
              <Link key={l} href="#contact" className="text-[12px] text-muted transition hover:text-ink">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
