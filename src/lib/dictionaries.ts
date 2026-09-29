export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function dir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

const en = {
  localeName: "English",
  otherLocaleName: "العربية",
  brand: "La Vora Digital",

  meta: {
    title: "La Vora Digital — Digital Advertising Agency",
    description:
      "La Vora Digital plans, buys and optimises digital advertising — paid social, search, programmatic and creative.",
  },

  nav: {
    home: "Home",
    work: "Work",
    service: "Service",
    about: "About",
    cta: "Get a Proposal",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    servicesLabel: "Services",
    switchTo: "العربية",
  },

  hero: {
    // One emphasised noun per line keeps the light/semibold motif of the old headline.
    headline: [
      { lead: "Build your", strong: "brand" },
      { lead: "Grow your", strong: "business" },
      { lead: "Shape your", strong: "future" },
    ],
    lead:
      "Lavora Digital is a full-service digital agency specializing in advertising, digital marketing, and web development, helping brands connect with their audience, grow their business, and build meaningful digital experiences.",
    imageAlt: "A camera operator on a lit studio set, signalling to the crew",
    badge: "see how we work",
    stats: [
      { n: "100+", l: "Impressions served" },
      { n: "500+", l: "Campaigns launched" },
    ],
  },

  collaboration: {
    titleLead: "Media buying built on",
    titleStrong: "evidence",
    body:
      "We start with your data, not a template. Audience research, creative testing and clean measurement run on a fixed cadence, so budget always moves toward what is working.",
    features: [
      "Audiences built from first-party data, never guesswork",
      "Every impression tracked through to revenue",
      "One message, tuned per channel and placement",
      "Weekly optimisation cycles that compound results",
    ],
  },

  services: {
    titleLead: "Every channel your",
    titleStrong: "buyers",
    titleTail: "are on",
    adsAlt: "A man leaping with a bass guitar above a phone, hands reaching out of its screen among floating hearts and emoji",
    webAlt: "Website designs shown on a laptop and two floating browser screens",
    items: [
      {
        title: "Advertising Agency",
        desc:
          "Campaign strategy, ad creative and media buying across Meta, Google and TikTok",
      },
      {
        title: "Web Development",
        desc:
          "Landing pages and company sites built to load fast and turn visits into enquiries",
      },
      {
        title: "Digital Marketing",
        desc: "Search, content and email that keep bringing traffic after the ad budget stops",
      },
    ],
  },

  banner: {
    titleLead: "Always-on media,",
    titleStrong: "always improving",
    body: "Optimised daily, reported weekly, reviewed with you every month.",
    badge: "see our results",
  },

  process: {
    titleLead: "How we turn",
    titleStrong: "budget",
    titleTail: "into growth",
    body:
      "A clear four-step structure, so you always know what your spend is doing and what happens next.",
    cta: "Get a Proposal",
    steps: [
      {
        title: "Audit",
        desc: "We map your funnel, tracking and past spend before touching a budget",
      },
      {
        title: "Strategy",
        desc: "Channel mix, audiences and budget split agreed with you up front",
      },
      {
        title: "Launch",
        desc: "Creative, tracking and campaigns go live with clean measurement",
      },
      {
        title: "Scale",
        desc: "Weekly optimisation until the cost per result stops falling",
      },
    ],
  },

  marquee: {
    label: "Reach the right audience",
    word1: "Reach",
    word2: "the right",
    word3: "audience",
    note:
      "Great targeting only pays off when the creative earns the click and the landing page earns the sale",
  },

  cta: {
    titleLead: "Let's plan your",
    titleStrong: "next",
    titleTail: "campaign",
    body: "Send us your current numbers and we'll come back with where the waste is.",
  },

  form: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "What are you running now, and what is not working?",
    submit: "Send enquiry",
    sending: "Sending",
    successTitle: "Your enquiry is in.",
    successBody:
      "We read every one and reply within two working days, from the address you gave us.",
    errorRequired: "Name, email and message are required.",
    errorEmail: "That email address does not look valid.",
    errorSend: "We could not send that. Email us directly instead.",
  },

  newsletter: {
    label: "Email address",
    placeholder: "Email Address..",
    subscribe: "Subscribe",
    subscribed: "Subscribed",
  },

  footer: {
    columns: [
      {
        title: "Services",
        items: ["Advertising Agency", "Web Development", "Digital Marketing"],
      },
      { title: "Company", items: ["About", "Case Studies", "Careers", "Contact"] },
      { title: "Connect", items: ["Instagram", "LinkedIn", "YouTube"] },
    ],
    stayUpdated: "Stay updated",
    newsletterNote:
      "Occasional emails from La Vora Digital on ad platform changes and what is working in our accounts. Unsubscribe from any one of them.",
    rights: "©2026 La Vora Digital All rights reserved.",
    blurb:
      "La Vora Digital is a digital advertising agency that plans, buys and optimises media for brands that care what every impression returns.",
    terms: "Terms",
    privacy: "Privacy",
  },
};

/**
 * Arabic copy. Written to be read as Arabic rather than transliterated English,
 * so a few lines are shorter than their English counterparts by design.
 */
const ar: Dictionary = {
  localeName: "العربية",
  otherLocaleName: "English",
  brand: "لا فورا ديجيتال",

  meta: {
    title: "لا فورا ديجيتال — وكالة إعلانات رقمية",
    description:
      "لا فورا ديجيتال تخطط وتشتري وتحسّن الإعلانات الرقمية: السوشيال المدفوع والبحث والبرمجي والمحتوى الإبداعي.",
  },

  nav: {
    home: "الرئيسية",
    work: "أعمالنا",
    service: "الخدمات",
    about: "من نحن",
    cta: "اطلب عرض سعر",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    servicesLabel: "الخدمات",
    switchTo: "English",
  },

  hero: {
    // Arabic carries "your" as a suffix, so the possessed noun is the emphasised word.
    headline: [
      { lead: "ابنِ", strong: "علامتك" },
      { lead: "نمِّ", strong: "أعمالك" },
      { lead: "اصنع", strong: "مستقبلك" },
    ],
    lead:
      "لا فورا ديجيتال وكالة رقمية متكاملة الخدمات متخصصة في الإعلانات والتسويق الرقمي وتطوير المواقع، تساعد العلامات على الوصول إلى جمهورها، وتنمية أعمالها، وبناء تجارب رقمية ذات أثر.",
    imageAlt: "مصوّر في استوديو مضاء يشير إلى فريق العمل",
    badge: "كيف نعمل",
    stats: [
      { n: "١٠٠+", l: "ظهور إعلاني" },
      { n: "٥٠٠+", l: "حملة أُطلقت" },
    ],
  },

  collaboration: {
    titleLead: "شراء وسائط مبني على",
    titleStrong: "الأدلة",
    body:
      "نبدأ من بياناتك أنت، لا من قالب جاهز. بحث الجمهور واختبار المحتوى الإبداعي والقياس الدقيق تجري على وتيرة ثابتة، لتتحرك الميزانية دائمًا نحو ما ينجح.",
    features: [
      "جماهير مبنية على بياناتك الخاصة، لا على التخمين",
      "كل ظهور إعلاني متتبَّع حتى الإيراد",
      "رسالة واحدة، مضبوطة لكل قناة وموضع",
      "دورات تحسين أسبوعية تتراكم نتائجها",
    ],
  },

  services: {
    titleLead: "كل قناة يتواجد فيها",
    titleStrong: "عملاؤك",
    titleTail: "",
    adsAlt: "رجل يقفز حاملًا غيتارًا فوق هاتف تمتد من شاشته أيدٍ كثيرة وتحيط به قلوب وإيموجي عائمة",
    webAlt: "تصاميم مواقع معروضة على حاسوب محمول وشاشتَي متصفح عائمتين",
    items: [
      {
        title: "وكالة إعلانات",
        desc: "استراتيجية الحملات والمحتوى الإعلاني وشراء الوسائط عبر ميتا وجوجل وتيك توك",
      },
      {
        title: "تطوير المواقع",
        desc: "صفحات هبوط ومواقع شركات سريعة التحميل تحوّل الزيارات إلى استفسارات",
      },
      {
        title: "تسويق رقمي",
        desc: "بحث ومحتوى وبريد إلكتروني تواصل جلب الزيارات بعد توقف ميزانية الإعلانات",
      },
    ],
  },

  banner: {
    titleLead: "وسائط لا تتوقف،",
    titleStrong: "وتتحسن باستمرار",
    body: "تحسين يومي، تقرير أسبوعي، ومراجعة معك كل شهر.",
    badge: "شاهد نتائجنا",
  },

  process: {
    titleLead: "كيف نحوّل",
    titleStrong: "الميزانية",
    titleTail: "إلى نمو",
    body: "أربع خطوات واضحة، لتعرف دائمًا ما الذي تفعله ميزانيتك وما الخطوة التالية.",
    cta: "اطلب عرض سعر",
    steps: [
      {
        title: "التدقيق",
        desc: "نرسم مسار الشراء والتتبع والإنفاق السابق قبل أن نلمس أي ميزانية",
      },
      {
        title: "الاستراتيجية",
        desc: "مزيج القنوات والجماهير وتقسيم الميزانية متفق عليه معك مسبقًا",
      },
      {
        title: "الإطلاق",
        desc: "المحتوى الإبداعي والتتبع والحملات تنطلق مع قياس نظيف",
      },
      {
        title: "التوسع",
        desc: "تحسين أسبوعي حتى تتوقف تكلفة النتيجة عن الانخفاض",
      },
    ],
  },

  marquee: {
    label: "أوصل رسالتك إلى الجمهور الصحيح",
    word1: "أوصل",
    word2: "إلى الجمهور",
    word3: "الصحيح",
    note:
      "الاستهداف الجيد لا يؤتي ثماره إلا حين يستحق المحتوى الإبداعي النقرة وتستحق صفحة الهبوط البيع",
  },

  cta: {
    titleLead: "لنخطط",
    titleStrong: "لحملتك",
    titleTail: "القادمة",
    body: "أرسل لنا أرقامك الحالية وسنعود إليك بموضع الهدر فيها.",
  },

  form: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    company: "الشركة",
    message: "ما الذي تشغّله الآن، وما الذي لا ينجح؟",
    submit: "إرسال الاستفسار",
    sending: "جارٍ الإرسال",
    successTitle: "وصلنا استفسارك.",
    successBody:
      "نقرأ كل استفسار ونرد خلال يومي عمل، على العنوان الذي أعطيتنا إياه.",
    errorRequired: "الاسم والبريد الإلكتروني والرسالة حقول مطلوبة.",
    errorEmail: "البريد الإلكتروني لا يبدو صحيحًا.",
    errorSend: "تعذّر الإرسال. راسلنا على البريد الإلكتروني مباشرة.",
  },

  newsletter: {
    label: "البريد الإلكتروني",
    placeholder: "البريد الإلكتروني..",
    subscribe: "اشترك",
    subscribed: "تم الاشتراك",
  },

  footer: {
    columns: [
      {
        title: "الخدمات",
        items: ["وكالة إعلانات", "تطوير المواقع", "تسويق رقمي"],
      },
      { title: "الشركة", items: ["من نحن", "دراسات حالة", "وظائف", "تواصل معنا"] },
      { title: "تابعنا", items: ["إنستغرام", "لينكدإن", "يوتيوب"] },
    ],
    stayUpdated: "ابقَ على اطلاع",
    newsletterNote:
      "رسائل متفرقة من لا فورا ديجيتال عن تغييرات منصات الإعلانات وما ينجح في الحسابات التي ندير. يمكنك إلغاء الاشتراك من أي رسالة.",
    rights: "©2026 لا فورا ديجيتال. جميع الحقوق محفوظة.",
    blurb:
      "لا فورا ديجيتال وكالة إعلانات رقمية تخطط وتشتري وتحسّن الوسائط للعلامات التي يهمها عائد كل ظهور إعلاني.",
    terms: "الشروط",
    privacy: "الخصوصية",
  },
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
