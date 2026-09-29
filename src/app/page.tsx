import {
  Collaboration,
  Cta,
  Footer,
  Hero,
  Marquee,
  Navbar,
  Process,
  Services,
  WorkBanner,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <Collaboration />
        <Services />
        <WorkBanner />
        <Process />
        <Marquee />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
