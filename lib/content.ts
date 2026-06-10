export const PORTFOLIO = {
  name: "Afuye Iyiola",
  firstName: "Afuye",
  title: "Full-Stack & Mobile Developer",
  positioning:
    "I build web and mobile products end-to-end from the database schema to the last sixteen pixels.",
  location: "Lagos, Nigeria · remote-friendly",
  availability: "Open to roles & freelance",
  email: "iyioladan11@gmail.com",

  about: [
    "I'm a full-stack and mobile developer based in Lagos. In two years I've taken four products from first commit to production an AI sports platform, a live marketplace app, and client sites serving users across three continents.",
    "TypeScript is my default. On the web I reach for Next.js and React; on mobile, React Native with Expo. Behind the scenes I wire up Node.js or NestJS APIs, PostgreSQL or MongoDB for the data layer, and Docker and Render to ship it.",
    "Right now I'm at Simul Management Solutions where I built SimServiceHub — a marketplace that connects artisans with customers — end-to-end, from schema design to App Store release.",
  ],

  skills: [
    { group: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { group: "Mobile", items: ["React Native", "Expo", "App Store & Play releases"] },
    { group: "Backend", items: ["Node.js", "Fastify", "PostgreSQL", "MongoDB","Redis", "REST & WebSockets"] },
    { group: "Tooling", items: ["Docker", "Render", "GitHub Actions", "Vitest"] },
  ],

  projects: [
    {
      num: "01",
      name: "Boomscore AI",
      year: "2025",
      kind: "Web · Sports AI",
      role: "Full-Stack Developer",
      url: "https://www.boomscore.ai/",
      stack: ["Next.js", "NestJS", "PostgreSQL", "GraphQL", "Docker", "Render"],
      blurb: "AI-powered sports prediction platform — chat with the AI, predict match outcomes, and follow live scores in real time.",
      outcome: "Live at boomscore.ai",
    },
    {
      num: "02",
      name: "SimServiceHub",
      year: "2025",
      kind: "Mobile · Marketplace",
      role: "Full-Stack Mobile Developer",
      url: "https://apps.apple.com/us/app/simservicehub/id6762186286",
      stack: ["React Native", "Expo", "NativeWind"],
      blurb: "Marketplace app that connects artisans with customers — browse, book, and manage services end-to-end.",
      outcome: "Available on the App Store",
    },
    {
      num: "03",
      name: "Altan Infinity",
      year: "2024",
      kind: "Web · E-commerce",
      role: "Full-Stack Developer",
      url: "https://www.altaninfinity.de/",
      stack: ["React", "Express", "MongoDB", "REST API", "Render"],
      blurb: "Online presence for a Germany-based bespoke shoemaker — service catalogue, repair booking, and admin dashboard.",
      outcome: "Live at altaninfinity.de",
    },
    {
      num: "04",
      name: "Blueberry Zanzibar",
      year: "2024",
      kind: "Web · Tourism",
      role: "Full-Stack Developer",
      url: "https://www.blueberryzanzibar.com/",
      stack: ["Next.js", "Tailwind CSS", "Google SMTP"],
      blurb: "Tour guide and taxi booking site for a Zanzibar operator — clean landing page with an integrated contact form.",
      outcome: "Live at blueberryzanzibar.com",
    },
  ],

  experience: [
    {
      org: "Simul Management Soloutions ",
      role: "Full-Stack Developer - Mobile Developer",
      period: "May 2025 — Present",
      note: "Built SimServiceHub — a mobile marketplace connecting artisans with customers, from architecture to App Store launch.",
    },
    {
      org: "Freelance",
      role: "Web Developer",
      period: "2023 — 2024",
      note: "Build an e-commerce website for a local business.",
    },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/Iyiola2dev", short: "github.com/Iyiola2dev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/iyiola-afuye-b1a772296/", short: "in/afuyeiyiola" },
    // { label: "X / Twitter", href: "https://x.com/afuyebuilds", short: "@afuyebuilds" },
  ],
} as const;
