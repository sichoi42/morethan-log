const CONFIG = {
  // profile setting (required)
  profile: {
    name: "최시원",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer",
    bio: "DevOps와 서버, 자동화에 관심이 많은 개발자입니다.",
    email: "42.4.sichoi@gmail.com",
    linkedin: "",
    github: "sichoi42",
    instagram: "",
  },
  projects: [
    {
      name: "Cabi",
      href: "https://github.com/innovationacademy-kr/42cabi",
    },
  ],
  // blog setting (required)
  blog: {
    title: "bit가 모여 page가 된다",
    description: "내가 궁금했던 모든 것을 기록하는 공간",
  },

  // CONFIG configration (required)
  link: "https://blog.sichoi.dev",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "/avatar.jpg", // The link to generate OG image, don't end with a slash

  about: {
    url: process.env.NEXT_PUBLIC_ABOUT_URL || "/about",
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleAdSense: {
    enable: true,
    config: {
      dataAdClient: process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "sichoi42/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: Number(process.env.PROPS_REVALIDATION_TIME) || 60 * 5, // revalidate time for [slug], index
}

module.exports = { CONFIG }
