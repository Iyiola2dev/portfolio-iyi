export const PORTFOLIO = {
  name: "Afuye Iyiola",
  firstName: "Afuye",
  title: "Full-Stack & Mobile Developer",
  positioning:
    "Full-stack engineer building scalable web and mobile products with TypeScript, Next.js, NestJS, and React Native from real-time systems to payment integrations.",
  location: "Lagos, Nigeria · remote-friendly",
  availability: "Open to roles & freelance",
  email: "iyioladan11@gmail.com",

  about: [
    "I'm a full-stack software engineer based in Lagos, building production web and mobile applications with TypeScript, Next.js, NestJS, and React Native. I've shipped four live products spanning AI, marketplaces, e-commerce, and tourism.",
    "TypeScript is my default across the entire stack. I'm comfortable with real-time systems via Socket.io and WebSockets, payment integrations with Paystack, GraphQL APIs, and AI product features using the OpenAI and Claude APIs.",
    "Most recently I engineered the frontend and backend at Boomscore admin dashboard, RBAC auth, subscription billing, and real-time live scores and at Simul Management Solutions where I architected SimServiceHub end-to-end, from database schema to App Store release.",
  ],

  skills: [
    { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Redux", "Tailwind CSS", "NativeWind"] },
    { group: "Mobile", items: ["React Native", "Expo", "Push Notifications", "App Store releases"] },
    { group: "Backend", items: ["Node.js", "NestJS", "GraphQL", "REST APIs", "WebSockets", "Socket.io", "Flask"] },
    { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Drizzle"] },
    { group: "Payments", items: ["Paystack", "Webhooks", "Invoice generation"] },
    { group: "Tools & AI", items: ["Docker", "AWS", "Vercel", "Firebase", "GitHub Actions", "OpenAI API", "Claude API"] },
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
      blurb: "AI-powered sports prediction platform  chat with the AI, predict match outcomes, and follow live scores in real time.",
      outcome: "Live at boomscore.ai",
    },
    {
      num: "02",
      name: "SimServiceHub",
      year: "2025",
      kind: "Mobile · Marketplace",
      role: "Full-Stack Mobile Developer",
      url: "https://www.simservicehub.com",
      stack: ["React Native", "Expo", "NativeWind"],
      blurb: "Marketplace app that connects artisans with customers browse, book, and manage services end-to-end.",
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
      blurb: "Online presence for a Germany-based bespoke shoemaker service catalogue, repair booking, and admin dashboard.",
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
      blurb: "Tour guide and taxi booking site for a Zanzibar operator clean landing page with an integrated contact form.",
      outcome: "Live at blueberryzanzibar.com",
    },
  ],

  experience: [
    {
      org: "Boomscore",
      role: "Mid-Level Full-Stack Engineer",
      period: "Contract · Lagos, Nigeria",
      note: "Built the admin dashboard, three-tier RBAC with JWT auth, subscription and billing module with Paystack, betting slip system, and Socket.io real-time live scores. Contributed GraphQL resolvers and NestJS services across the API.",
    },
    {
      org: "Simul Management Solutions",
      role: "Full-Stack & Mobile Engineer",
      period: "Remote · United Kingdom",
      note: "Architected SimServiceHub from scratch dual-role artisan marketplace with 20+ screens, real-time WebSocket messaging, Expo push notifications, AI chatbot (SIMI) with RAG-based Q&A, and a job-posting wizard with AI-assisted descriptions.",
    },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/Iyiola2dev", short: "github.com/Iyiola2dev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/iyiola-afuye-b1a772296/", short: "in/afuyeiyiola" },
    // { label: "X / Twitter", href: "https://x.com/afuyebuilds", short: "@afuyebuilds" },
  ],
} as const;
