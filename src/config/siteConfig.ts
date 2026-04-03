// src/config/siteConfig.ts
// Centralized configuration for Sandra Kramer's integrated health coaching site.
// ALL content sourced from client intake form — zero fabrication.

export const siteConfig = {
  // ─── Coach Identity ───────────────────────────────────────────────────────
  coach: {
    name: "Sandra Kramer",
    firstName: "Sandra",
    title: "Integrated Health and Functional Medicine Coach",
    email: "sandi.kramer@comcast.net",
    phone: "+16302004634",
    location: "",
  },

  // ─── Site Metadata ────────────────────────────────────────────────────────
  site: {
    name: "Sandra Kramer — Integrated Health & Functional Medicine Coach",
    description:
      "I am an Integrated Health and Functional Medicine Coach helping clients who have ongoing health issues that doctors have not been able to diagnose — from unexplained fatigue and persistent coughs to insomnia with no clear cause.",
    ogImage: "/images/og-default.jpg",
  },

  // ─── Brand Colors ─────────────────────────────────────────────────────────
  brand: {
    primary: "#7A9E7E",
    accent: "#E8B4B8",
    mint: "#A3C4A8",
    cream: "#FFF8F5",
  },

  // ─── Images ───────────────────────────────────────────────────────────────
  images: {
    portrait: "/images/generated/section-bg-wellness.jpg",
    hero: "/images/generated/hero-variant-1.jpg",
    ogDefault: "/images/og-default.jpg",
  },

  // ─── Social Media ─────────────────────────────────────────────────────────
  social: [] as Array<{ name: string; url: string; iconPath: string; iconSvg: string }>,

  // ─── Stats & Credentials ──────────────────────────────────────────────────
  stats: {
    yearsExperience: "",
    certifications: 1,
    processSteps: 0,
  },

  statsBar: [] as Array<{ number: string; label: string; icon: string }>,

  credentialBadges: [
    { abbr: "IHMC", full: "Integrated Health and Functional Medicine Coach" },
  ],

  // ─── Certifications (used in AboutPreview & about.astro) ─────────────────
  certifications: [
    {
      title: "Integrated Health and Functional Medicine Coach",
      label: "IHMC",
      description: "Certified Integrated Health and Functional Medicine Coach specializing in root-cause healing for undiagnosed and chronic health issues",
      variant: "default" as const,
    },
  ],

  // ─── Bio / Story ──────────────────────────────────────────────────────────
  bio: {
    pullquote:
      "I discovered functional medicine — and it changed everything. Now I help others find the answers their doctors couldn't.",
    storyPreview:
      "For several years my health declined. Like you, I went to several doctors and was prescribed different medications. However, the pharmaceuticals only treated some of the symptoms but did not resolve the underlying issues. Until I discovered functional medicine.",
    storyParagraphs: [
      "For several years my health declined. Like you, I went to several doctors and was prescribed different medications. However, the pharmaceuticals only treated some of the symptoms but did not resolve the underlying issues. Until I discovered functional medicine.",
      "That discovery changed everything for me. It's why I left working in the stock markets — so that I can also help other people find the answers that traditional medicine couldn't provide.",
    ],
    differentiator:
      "My approach is different, as I have been my first client. I understand firsthand what it's like to struggle with health issues that no one can explain, and I bring that personal experience to every client relationship.",
    holisticAspects: ["Functional Medicine", "Root-Cause Healing", "Holistic Health", "Wellness Coaching"],
    holisticQuote:
      "A pill may not be the answer — but understanding the root cause might be.",
  },

  // ─── Services ─────────────────────────────────────────────────────────────
  servicesPreview: [
    {
      title: "Free Discovery Call",
      description:
        "A complimentary conversation to discuss your health concerns, understand your situation, and determine if we're a good fit to work together.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" /></svg>`,
      price: "FREE",
      priceNote: "No commitment required",
      popular: false,
      href: "/contact",
    },
    {
      title: "A Holistic Reset Program",
      description:
        "A comprehensive 3-month coaching program with 12 weekly video calls, email support, and a workbook to help you uncover the root causes of your health issues and find lasting solutions.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
      price: "$3,000",
      priceNote: "3-month program",
      popular: true,
      href: "/contact",
    },
  ],

  servicesDetail: [
    {
      id: "discovery-call",
      title: "Free Discovery Call",
      subtitle: "Your First Step Toward Answers",
      price: "FREE",
      duration: "",
      description:
        "Not sure where to start? Book a free discovery call so we can talk about your health concerns and see if working together is the right fit. There's no pressure and no obligation — just an honest conversation about your health.",
      features: [
        "Discuss your health concerns and symptoms",
        "Understand your health history",
        "Learn about the Holistic Reset Program",
        "Determine if we're a good fit",
        "No commitment required",
      ],
      idealFor:
        "Anyone dealing with ongoing health issues that haven't been resolved by conventional medicine and who wants to explore a functional medicine approach.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
    },
    {
      id: "holistic-reset",
      title: "A Holistic Reset Program",
      subtitle: "12 Weeks to Uncover Root Causes and Reclaim Your Health",
      price: "$3,000",
      duration: "3 months (12 weekly sessions)",
      description:
        "My signature program designed for clients dealing with ongoing health issues that doctors have not been able to diagnose. Over 12 weeks, we work together to uncover root causes and build a personalized path to better health.",
      features: [
        "12 weekly video coaching calls",
        "Email support throughout the program",
        "Comprehensive workbook",
        "3-month total program duration",
        "Personalized functional medicine approach",
        "Focus on root-cause resolution, not just symptom management",
      ],
      idealFor:
        "Clients dealing with unexplained fatigue, persistent symptoms that prescriptions haven't resolved, insomnia with no clear cause, or any ongoing health issue that doctors have been unable to diagnose.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    },
  ],

  // ─── Services CTA ─────────────────────────────────────────────────────────
  servicesCta: "",

  // ─── Testimonials ─────────────────────────────────────────────────────────
  testimonials: [] as Array<{ name: string; role: string; outcome: string; content: string }>,

  // ─── Who I Work With ──────────────────────────────────────────────────────
  whoIWorkWithTraits: [
    "You're dealing with fatigue but no one can find a real reason for it",
    "You have a persistent cough that no prescription has been able to resolve",
    "You struggle with insomnia and no one can figure out why",
    "You've been to several doctors but haven't gotten real answers",
    "You're tired of medications that only treat symptoms without resolving the underlying issues",
    "You're looking for a different approach because a pill may not be the answer",
  ],

  // ─── Process Steps ────────────────────────────────────────────────────────
  processSteps: [] as Array<{ number: string; title: string; description: string; icon: string }>,

  approachItems: [] as Array<{ icon: string; title: string; description: string }>,

  // ─── FAQ ──────────────────────────────────────────────────────────────────
  faq: [
    {
      question: "I can't afford it — is it worth the investment?",
      answer:
        "I understand that $3,000 is a significant investment. Consider how much you've already spent on doctor visits, prescriptions, and treatments that haven't resolved your underlying issues. The Holistic Reset Program is designed to address root causes — not just manage symptoms — so you can stop the cycle of temporary fixes and start seeing real, lasting results.",
    },
    {
      question: "Will this really work for me?",
      answer:
        "Every client's situation is unique, and I won't make promises I can't keep. What I can tell you is that my approach is different — we focus on uncovering the root causes of your issues rather than prescribing another medication. As someone who has been my own first client, I've experienced this transformation personally. The functional medicine approach works by looking at the whole picture, not just individual symptoms.",
    },
    {
      question: "I don't have time for a 3-month program — how does it fit into my schedule?",
      answer:
        "The program consists of 12 weekly video calls, which means you can participate from anywhere without travel time. I also provide email support between sessions so you can reach out whenever questions come up. The program is designed to integrate into your life, not add more stress to it.",
    },
    {
      question: "I've tried everything already — how is this different?",
      answer:
        "If you've tried everything and nothing has worked, it's likely because the underlying root cause hasn't been identified. Traditional medicine often focuses on treating symptoms with prescriptions. My approach is different — I use functional medicine principles to look deeper at what's actually driving your health issues. A pill may not be the answer, but understanding the root cause might be.",
    },
    {
      question: "I'm not sure I'm ready — what if I need more time to decide?",
      answer:
        "That's completely okay. There's no pressure to commit right away. I'd encourage you to book a free discovery call so we can talk about your situation. There's no obligation — just an honest conversation about your health concerns and whether this program could help. When you're ready, I'll be here.",
    },
  ],

  // ─── Booking / Scheduling ─────────────────────────────────────────────────
  booking: {} as Record<string, string>,

  // ─── SchemaOrg defaults ───────────────────────────────────────────────────
  schema: {
    name: "Sandra Kramer — Integrated Health & Functional Medicine Coach",
    description:
      "Integrated Health and Functional Medicine Coach helping clients with ongoing, undiagnosed health issues find root-cause solutions through personalized functional medicine coaching.",
    jobTitle: "Integrated Health and Functional Medicine Coach",
    priceRange: "$$$",
    fallbackUrl: "https://sandra-kramer.accredipro-sites.com",
    knowsAbout: [
      "Functional Medicine",
      "Integrated Health",
      "Root-Cause Healing",
      "Chronic Health Issues",
      "Holistic Wellness",
      "Health Coaching",
    ],
  },
} as const;
