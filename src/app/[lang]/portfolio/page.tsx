import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { Footer, Navbar } from "@/components/sections";
import { PortfolioGrid, type GridItem } from "@/components/portfolio-grid";
import { DEFAULT_LOCALE, getDictionary, isLocale } from "@/lib/dictionaries";
import { PROJECTS, pick, type ServiceKey } from "@/lib/portfolio";

export async function generateMetadata(
  props: PageProps<"/[lang]/portfolio">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const t = getDictionary(isLocale(lang) ? lang : DEFAULT_LOCALE);
  return {
    title: `${t.portfolio.titleLead} ${t.portfolio.titleStrong} | ${t.brand}`,
    description: t.portfolio.intro,
  };
}

export default async function Portfolio(props: PageProps<"/[lang]/portfolio">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  // An unknown or missing ?service= falls back to showing everything.
  const { service } = await props.searchParams;
  const requested = Array.isArray(service) ? service[0] : service;
  const initialService =
    requested && requested in t.portfolio.services ? (requested as ServiceKey) : "all";

  const items: GridItem[] = PROJECTS.map((p) => ({
    slug: p.slug,
    href: `/${lang}/portfolio/${p.slug}`,
    service: p.service,
    serviceLabel: t.portfolio.services[p.service],
    title: p.title,
    year: p.year,
    image: p.image,
    fit: p.imageFit ?? "cover",
    alt: pick(p.imageAlt, lang),
    summary: pick(p.summary, lang),
    placeholder: p.placeholder ? t.portfolio.placeholder : undefined,
  }));

  return (
    <div className="bg-background">
      <Navbar lang={lang} t={t} />
      <main>
        <Container className="py-16 lg:py-24">
          <h1 className="max-w-md text-[34px] leading-[1.1] font-light tracking-tight sm:text-[46px]">
            {t.portfolio.titleLead}{" "}
            <span className="font-semibold">{t.portfolio.titleStrong}</span>
          </h1>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">
            {t.portfolio.intro}
          </p>

          <div className="mt-12">
            {items.length > 0 ? (
              <PortfolioGrid
                items={items}
                filterLabel={t.portfolio.filterLabel}
                filterAll={t.portfolio.filterAll}
                viewLabel={t.portfolio.view}
                initialService={initialService}
              />
            ) : (
              <p
                role="status"
                className="rounded-xl border border-line bg-surface px-6 py-12 text-center text-[14px] text-muted"
              >
                {t.portfolio.empty}
              </p>
            )}
          </div>
        </Container>
      </main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
