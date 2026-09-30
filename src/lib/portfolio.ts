import type { Locale } from "./dictionaries";

export type ServiceKey = "ads" | "web" | "marketing";

/** English is required; a missing Arabic string falls back to it rather than showing a gap. */
type Localized<T> = { en: T; ar?: T };

export type Project = {
  /** URL segment: /en/portfolio/<slug>. Lowercase, hyphens, no spaces. */
  slug: string;
  service: ServiceKey;
  /** A proper name, so it is not translated. */
  title: string;
  year?: string;
  /** File under /public, e.g. "/portfolio/borch.webp". */
  image: string;
  /** "cover" for photos and screenshots, "contain" for transparent cut-outs. */
  imageFit?: "cover" | "contain";
  imageAlt: Localized<string>;
  /** One or two sentences, shown on the card and under the title. */
  summary: Localized<string>;
  /** Detail-page paragraphs. Optional: the summary is shown alone without it. */
  body?: Localized<string[]>;
  /** The live site, only if the client is happy for it to be linked. */
  url?: string;
  /**
   * Sample entry, not real work. Renders a visible "Placeholder" badge so it can never
   * be mistaken for a case study. Delete these before launch.
   */
  placeholder?: boolean;
};

/**
 * Every project on the portfolio pages comes from this list and nothing else, so an
 * empty list renders an honest empty state instead of invented work. Add real
 * projects only, with the client's permission to show the name and the images.
 *
 * Example entry:
 *
 * {
 *   slug: "example-store",
 *   service: "web",
 *   title: "Example Store",
 *   year: "2026",
 *   image: "/portfolio/example-store.webp",
 *   imageAlt: { en: "The Example Store homepage on a laptop", ar: "..." },
 *   summary: { en: "One or two plain sentences about what was done and the result." },
 *   body: { en: ["First paragraph.", "Second paragraph."] },
 *   url: "https://example.com",
 * }
 */
export const PROJECTS: Project[] = [
  // --- PLACEHOLDERS -------------------------------------------------------
  // Sample entries so the layout can be reviewed. Every one is flagged
  // `placeholder`, which shows a badge on the card and the detail page.
  // Replace them with real projects, or delete them, before launch.
  {
    slug: "sample-retail-campaign",
    service: "ads",
    title: "Sample retail campaign",
    year: "2026",
    image: "/services/ads.webp",
    imageFit: "contain",
    imageAlt: {
      en: "Placeholder artwork: a man leaping with a guitar above a phone surrounded by hearts and emoji",
      ar: "صورة توضيحية: رجل يقفز حاملًا غيتارًا فوق هاتف تحيط به قلوب وإيموجي",
    },
    summary: {
      en: "Placeholder text standing in for a paid social case study. Replace with the real brief and the result it produced.",
      ar: "نص توضيحي مكان دراسة حالة لحملة سوشيال مدفوعة. استبدله بالمهمة الحقيقية والنتيجة التي حققتها.",
    },
    body: {
      en: [
        "Placeholder paragraph. Describe the situation the client came in with: what they were spending, on which channels, and what was not working.",
        "Placeholder paragraph. Describe what was changed and what happened afterwards, using figures you can stand behind.",
      ],
      ar: [
        "فقرة توضيحية. اشرح الوضع الذي جاء به العميل: كم كان ينفق، وعلى أي قنوات، وما الذي لم يكن ينجح.",
        "فقرة توضيحية. اشرح ما الذي تغيّر وما الذي حدث بعده، بأرقام يمكنك إثباتها.",
      ],
    },
    placeholder: true,
  },
  {
    slug: "sample-ecommerce-site",
    service: "web",
    title: "Sample ecommerce site",
    year: "2026",
    image: "/services/web.webp",
    imageFit: "contain",
    imageAlt: {
      en: "Placeholder artwork: an ecommerce site shown on a laptop and two floating browser screens",
      ar: "صورة توضيحية: متجر إلكتروني معروض على حاسوب محمول وشاشتَي متصفح عائمتين",
    },
    summary: {
      en: "Placeholder text standing in for a web build case study. Replace with the real scope and what shipping it changed.",
      ar: "نص توضيحي مكان دراسة حالة لبناء موقع. استبدله بنطاق العمل الحقيقي وما الذي تغيّر بعد إطلاقه.",
    },
    body: {
      en: [
        "Placeholder paragraph. Describe what was built, on what stack, and which parts of the old site were the bottleneck.",
        "Placeholder paragraph. Describe load times, conversion, or whatever measure the client actually cared about.",
      ],
      ar: [
        "فقرة توضيحية. اشرح ما الذي بُني، وعلى أي تقنيات، وأي أجزاء الموقع القديم كانت تمثل العائق.",
        "فقرة توضيحية. اشرح زمن التحميل أو التحويل أو أي مقياس كان يهم العميل فعلًا.",
      ],
    },
    placeholder: true,
  },
  {
    slug: "sample-content-programme",
    service: "marketing",
    title: "Sample content programme",
    year: "2026",
    image: "/hero1.webp",
    imageAlt: {
      en: "Placeholder artwork: a camera operator on a lit studio set, signalling to the crew",
      ar: "صورة توضيحية: مصوّر في استوديو مضاء يشير إلى فريق العمل",
    },
    summary: {
      en: "Placeholder text standing in for a search and content case study. Replace with the real programme and its results.",
      ar: "نص توضيحي مكان دراسة حالة للبحث والمحتوى. استبدله بالبرنامج الحقيقي ونتائجه.",
    },
    placeholder: true,
  },
];

export function pick<T>(value: Localized<T>, lang: Locale): T {
  return value[lang] ?? value.en;
}

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
