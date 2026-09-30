import { notFound } from "next/navigation";
import {
  Clients,
  Collaboration,
  Cta,
  Footer,
  Hero,
  Navbar,
  Process,
  Services,
  WorkBanner,
} from "@/components/sections";
import { getDictionary, isLocale } from "@/lib/dictionaries";

export default async function Home(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <div className="bg-background">
      <Navbar lang={lang} t={t} />
      <main>
        <Hero lang={lang} t={t} />
        <Collaboration t={t} />
        <Services lang={lang} t={t} />
        <WorkBanner lang={lang} t={t} />
        <Process lang={lang} t={t} />
        <Clients t={t} />
        <Cta t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
