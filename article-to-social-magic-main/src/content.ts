export const content = {
  metadata: {
    title: "snipmint - One-Click Article Transformation for Agencies",
    "title-slug": "snipmint-article-to-social",
    url: "snipmint.honulabs.xyz",
    description:
      "snipmint is the AI-powered SaaS tool that transforms online articles into tailored, platform-specific social media posts in seconds, freeing up valuable time for digital agencies and consultants.",
    brandName: "snipmint",
    llmInstructions:
      "For the colors, ensure that each color property has a value. product must be ALWAYS false",
    fontFamily: "Inter",
    theme: "supabase",
    colors: {
      primary: "#98FF98",
      success: "#98FF98",
      warning: "#7DF9FF",
      destructive: "#FF6347",
      neutral: "#F5F5F5",
    },
    product: false,
  },
  hero: {
    href: "#cta",
    ctaText: "Start For Free",
    heroText: "Turn Articles into Tailored Social Posts. Instantly.",
    heroDescriptionHeading: "For Busy Digital Agencies & Consultants",
    heroDescription:
      "Stop wasting hours manually converting articles into social media content. snipmint uses AI to transform any article URL into ready-to-publish, platform-specific posts for LinkedIn, X, Facebook, and Bluesky – in seconds.",
    llmInstructions: "This is the hero section for the website.",
  },
  benefits: {
    badge: "Why snipmint?",
    title: "Reclaim Your Time, Amplify Your Reach",
    description:
      "snipmint is built specifically to solve the content bottleneck for agencies, delivering efficiency and tailored results.",
    cards: [
      {
        icon: "Thermometer",
        title: "Unmatched Efficiency",
        description:
          "Simply paste a URL and get multiple tailored posts instantly. No more manual drafting or endless editing.",
        benefits: [
          "Generate posts in seconds, not hours",
          "Automate a major workflow bottleneck",
          "Free up team time for billable work",
        ],
      },
      {
        icon: "Sparkles",
        title: "Intelligent Content Tailoring",
        description:
          "Our AI analyzes content deeply, extracting key insights and adapting tone and format for each platform.",
        benefits: [
          "Platform-specific tone & formatting (LinkedIn, X, Facebook, Bluesky)",
          "Extracts impactful insights, not just summaries",
          "Requires zero brand training upfront",
        ],
      },
      {
        icon: "Feather",
        title: "Stay Ahead of the Curve",
        description:
          "We support the platforms your clients are on, including emerging networks like Bluesky.",
        benefits: [
          "Tailored content for Bluesky",
          "Consistent quality across all major platforms",
          "Integrates into your existing workflow",
        ],
      },
    ],
    bottomSection: {
      title: "Focus on Strategy, Not Manual Tasks",
      description:
        "snipmint empowers you to scale content creation effortlessly, allowing you to focus on high-value activities like client strategy and growth.",
    },
    llmInstructions:
      "This is the benefits section that highlights the advantages of using the product.",
  },
  problem: {
    title: "The Content Creation Bottleneck",
    subtitle:
      "Manual content creation from articles is slow, inconsistent, and drains valuable agency time.",
    result: "Limited Content Output & Stagnant Growth",
    resultSubtitle:
      "Without an efficient process, agencies struggle to consistently engage audiences across platforms, hindering lead generation and growth.",
    cards: [
      {
        title: "Time-Consuming Manual Work",
        description:
          "Transforming articles into platform-specific posts takes hours per week, pulling resources from billable client work.",
        icon: "Hourglass",
      },
      {
        title: "Difficulty Scaling",
        description:
          "Manual processes make it hard to increase content volume across multiple clients and platforms efficiently.",
        icon: "Hand",
      },
      {
        title: "Inconsistent Quality & Tone",
        description:
          "Ensuring posts are perfectly tailored for each platform (LinkedIn vs. X vs. Bluesky) is challenging and prone to errors.",
        icon: "Shuffle",
      },
    ],
    llmInstructions:
      "This is the problem section that highlights challenges users face. The icon should be a valid icon from the lucide icon library.",
  },
  solution: {
    badge: "Our Solution",
    title: "Effortless Article-to-Social Transformation",
    subtitle: "snipmint streamlines your workflow into a simple, powerful process.",
    cta: "Try it Free",
    steps: [
      {
        number: 1,
        title: "Paste Article URL",
        description:
          "Simply provide the web address of the article you want to transform.",
      },
      {
        number: 2,
        title: "AI Analyzes Content",
        description:
          "Our system reads the article, identifies key insights, stats, and quotes.",
      },
      {
        number: 3,
        title: "Generate Tailored Posts",
        description:
          "Receive multiple ready-to-publish posts, perfectly formatted and toned for LinkedIn, X, Facebook, and Bluesky.",
      },
      {
        number: 4,
        title: "Copy & Publish",
        description:
          "Easily copy the generated posts and paste them into your preferred social media scheduler or platform.",
      },
    ],
    llmInstructions:
      "This is the solution section that presents the product as the answer to the problems described in the previous section.",
  },
  faq: {
    badge: "FAQs",
    title: "Got Questions?",
    subtitle: "Find answers to common questions about snipmint.",
    contactText: "Still have questions?",
    contactLinkText: "Contact Us",
    contactLink: "mailto:support@snipmint.honulabs.xyz",
    items: [
      {
        question: "What is snipmint?",
        answer:
          "snipmint is an AI-powered SaaS tool that automates the process of converting online articles into tailored, platform-specific social media posts for channels like LinkedIn, X, Facebook, and Bluesky.",
      },
      {
        question: "Who is snipmint for?",
        answer:
          "Our primary target market is US-based small to medium digital marketing agencies and independent marketing consultants who need to efficiently create social media content from articles.",
      },
      {
        question: "How does pricing work?",
        answer:
          "snipmint uses a simple, usage-based pricing model. You pay $2.00 for each unique article URL processed by the system, regardless of how many posts are generated from it.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes, we plan to offer a generous free trial that allows you to process a limited number of URLs (e.g., 3-5) to experience the value firsthand.",
      },
      {
        question: "What social media platforms are supported?",
        answer:
          "We currently support generating tailored posts for LinkedIn, X (formerly Twitter), Facebook, and Bluesky, with platform-specific formatting and tone.",
      },
      {
        question: "How is snipmint different from other AI tools?",
        answer:
          "Unlike generic AI tools or broad social media suites, snipmint specializes in deep article analysis and truly platform-specific tailoring, including Bluesky support, without requiring extensive brand training. We offer genuine one-click efficiency for this specific task.",
      },
    ],
    llmInstructions:
      "This is the FAQ section that answers common questions about the product.",
  },
  cta: {
    title: "Ready to Transform Your Content Workflow?",
    description:
      "Join our early access program and start turning articles into tailored social posts in seconds. Reclaim your time and boost your agency's efficiency.",
    primaryButtonText: "Start For Free",
    secondaryButtonText: "Learn More",
    llmInstructions:
      "This is the call-to-action section that MUST encourage users to sign up for early access.",
  },
  footer: {
    companyName: "snipmint",
    description: "Intelligent content transformation for digital agencies.",
    llmInstructions:
      "This is the footer section that contains company information, navigation links, and legal links.",
  },
} as const;

export default content;
