export const PORTFOLIO = {
  name: "Afuye Iyiola",
  firstName: "Afuye",
  title: "Full-Stack & Mobile Developer",
  positioning:
    "I build web and mobile products end-to-end — from the database schema to the last sixteen pixels.",
  location: "Lagos, Nigeria · remote-friendly",
  availability: "Open to roles & freelance",
  email: "hello@afuye.dev",

  about: [
    "I'm a developer who treats shipping as a craft. In two years I've taken six products from first commit to production — fintech dashboards, offline-first field apps, and the unglamorous APIs that keep them honest.",
    "My home turf is the JavaScript ecosystem: React and React Native on the front, Node and Postgres behind. I care about the parts users never see — sync engines, error budgets, release pipelines — because that's where products quietly win or lose.",
    "Right now I'm at Truss Finance, where I own the merchant dashboard and the payouts API that moves money for 4,000+ businesses.",
  ],

  skills: [
    { group: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { group: "Mobile", items: ["React Native", "Expo", "WatermelonDB", "App Store & Play releases"] },
    { group: "Backend", items: ["Node.js", "Fastify", "PostgreSQL", "Redis", "REST & WebSockets"] },
    { group: "Tooling", items: ["Docker", "AWS", "GitHub Actions", "Sentry", "Vitest"] },
  ],

  projects: [
    {
      num: "01",
      name: "Fieldnote",
      year: "2026",
      kind: "Mobile · Agritech",
      role: "Lead Mobile Developer",
      stack: ["React Native", "Expo", "WatermelonDB", "Node.js", "PostgreSQL"],
      blurb: "Offline-first inspection app for agricultural field agents working in low-connectivity regions.",
      outcome: "11,000 reports synced monthly across three regions, with a conflict rate under 0.4%.",
    },
    {
      num: "02",
      name: "Halver",
      year: "2025",
      kind: "Mobile · Fintech",
      role: "Full-Stack Developer",
      stack: ["React Native", "Node.js", "Fastify", "Paystack", "Redis"],
      blurb: "Group payments app that splits bills, rent, and trips without the awkward math.",
      outcome: "₦46M split across 9,800 groups in the first six months.",
    },
    {
      num: "03",
      name: "Dispatchr",
      year: "2025",
      kind: "Web · Logistics",
      role: "Frontend Lead",
      stack: ["React", "TypeScript", "WebSockets", "PostgreSQL"],
      blurb: "Live operations dashboard coordinating a 200-rider delivery fleet in real time.",
      outcome: "Cut average dispatch-assignment time from 84 seconds to 31.",
    },
    {
      num: "04",
      name: "Tably",
      year: "2024",
      kind: "Web · Hospitality",
      role: "Full-Stack Developer",
      stack: ["React", "Node.js", "PostgreSQL", "Paystack"],
      blurb: "QR-code ordering PWA that lets restaurant guests browse, order, and pay from the table.",
      outcome: "Adopted by 60+ restaurants; table-to-kitchen time down 40%.",
    },
    {
      num: "05",
      name: "statekit",
      year: "2024 —",
      kind: "Open source",
      role: "Author & Maintainer",
      stack: ["TypeScript", "React Native"],
      blurb: "A 2.1 kB offline-sync state library for React Native. Built for Fieldnote, released for everyone.",
      outcome: "740★ on GitHub; powers 30+ community apps.",
    },
  ],

  experience: [
    {
      org: "Truss Finance",
      role: "Full-Stack Developer",
      period: "May 2025 — Present",
      note: "Own the merchant dashboard and payouts API serving 4,000+ businesses. Led the migration to event-driven payouts, cutting settlement failures by two-thirds.",
    },
    {
      org: "Bluetag Studio",
      role: "Frontend & Mobile Developer",
      period: "Jun 2024 — May 2025",
      note: "Shipped six client products across web and mobile, including two App Store launches. Introduced a shared component library that halved build time on new projects.",
    },
    {
      org: "Freelance",
      role: "Web Developer",
      period: "2023 — 2024",
      note: "Cut my teeth building sites and small tools for local businesses while finishing school.",
    },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/afuyeiyiola", short: "github.com/afuyeiyiola" },
    { label: "LinkedIn", href: "https://linkedin.com/in/afuyeiyiola", short: "in/afuyeiyiola" },
    { label: "X / Twitter", href: "https://x.com/afuyebuilds", short: "@afuyebuilds" },
  ],
} as const;
