import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, PrimaryButton } from "@/components/ui";
import { Footer, Navbar } from "@/components/sections";
import { ArrowRight } from "@/components/icons";
import { DEFAULT_LOCALE, LOCALES, getDictionary, isLocale } from "@/lib/dictionaries";
import { PROJECTS, getProject, pick } from "@/lib/portfolio";

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => PROJECTS.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/portfolio/[slug]">,
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${getDictionary(locale).brand}`,
    description: pick(project.summary, locale),
  };
}

export default async function ProjectPage(
  props: PageProps<"/[lang]/portfolio/[slug]">,
) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const t = getDictionary(lang);
  const body = project.body ? pick(project.body, lang) : [];

  return (
    <div className="bg-background">
      <Navbar lang={lang} t={t} />
      <main>
        <Container className="py-12 lg:py-20">
          <Link
            href={`/${lang}/portfolio`}
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[13px] text-muted transition hover:text-ink"
          >
            <ArrowRight className="size-3.5 rotate-180 rtl:rotate-0" />
            {t.portfolio.back}
          </Link>

          <h1 className="mt-6 max-w-2xl text-[34px] leading-[1.1] font-light tracking-tight sm:text-[46px]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {pick(project.summary, lang)}
          </p>

          {/* The gradient shows through transparent cut-outs, the same as the service cards. */}
          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-soft to-secondary-soft">
            <Image
              src={project.image}
              alt={pick(project.imageAlt, lang)}
              fill
              priority
              sizes="(min-width: 1200px) 1040px, 100vw"
              className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
            />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            <dl className="space-y-6 text-[13px]">
              <div>
                <dt className="text-muted">{t.portfolio.metaService}</dt>
                <dd className="mt-1 font-medium">{t.portfolio.services[project.service]}</dd>
              </div>
              {project.year && (
                <div>
                  <dt className="text-muted">{t.portfolio.metaYear}</dt>
                  {/* bdi keeps the digits intact without forcing the block to align left in RTL. */}
                  <dd className="mt-1 font-medium">
                    <bdi>{project.year}</bdi>
                  </dd>
                </div>
              )}
              {project.url && (
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-primary underline underline-offset-4"
                  >
                    {t.portfolio.visit}
                    <ArrowRight className="size-3.5 -rotate-45" />
                  </a>
                </div>
              )}
            </dl>

            {body.length > 0 && (
              <div className="max-w-[62ch] space-y-5 text-[15px] leading-relaxed text-muted">
                {body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            )}
          </div>
        </Container>

        <section className="border-t border-line">
          <Container className="py-16 text-center lg:py-24">
            <h2 className="text-[28px] leading-tight font-light tracking-tight sm:text-[36px]">
              {t.portfolio.ctaTitle}
            </h2>
            <PrimaryButton href={`/${lang}#contact`} className="mt-8">
              {t.portfolio.cta}
            </PrimaryButton>
          </Container>
        </section>
      </main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
