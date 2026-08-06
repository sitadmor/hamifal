export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readingTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "small-teams-competitive-advantage",
    title: "Small teams are becoming a competitive advantage",
    summary: "Software used to be the expensive part. Now coordination often is.",
    date: "2026-03-12",
    category: "ESSAY",
    readingTime: "5 MIN",
    body: [
      "Software used to be the expensive part. Now coordination often is.",
      "AI changes the economics of company building. One strong engineer can do work that previously required a team. A founder can prototype before hiring product. Research that took weeks can happen in hours.",
      "This does not mean companies run themselves. It means the best companies can stay smaller, more technical, and more focused for much longer.",
      "That changes how we design the company itself, and who we hire, when.",
    ],
  },
  {
    slug: "you-probably-do-not-need-another-saas",
    title: "You probably do not need another SaaS tool",
    summary:
      "Sometimes the best internal product is 400 lines of code your company owns.",
    date: "2026-02-18",
    category: "ESSAY",
    readingTime: "4 MIN",
    body: [
      "Sometimes the best internal product is 400 lines of code your company owns.",
      "Buying another SaaS tool feels like progress. Often it is just another system to integrate, another permission model to learn, and another monthly bill for a workflow you could have owned.",
      "Internal systems can be built instead of purchased, especially when the process is yours and the leverage is in fitting the work, not in someone else’s feature list.",
      "And yes, sometimes the correct architecture is a Python script and a cron job.",
    ],
  },
  {
    slug: "ai-agents-are-systems-engineering",
    title: "AI agents are mostly systems engineering",
    summary:
      "The model is the interesting demo. Everything around the model is the product.",
    date: "2026-01-28",
    category: "ESSAY",
    readingTime: "6 MIN",
    body: [
      "The model is the interesting demo. Everything around the model is the product.",
      "We do not start with “Where can we use AI?” We start with “What should this system do?” Then we decide which parts belong to models, which belong to software, which belong to humans, and which should not exist at all.",
      "The interesting part was never adding AI. It was designing a system where models, deterministic software, data pipelines, and human judgment could actually work together in production.",
      "Capability without boundaries is not a product.",
    ],
  },
  {
    slug: "building-from-architecture",
    title: "Build the architecture before you scale the team",
    summary:
      "Why early technical decisions compound faster than headcount, and how venture studios should think about systems from day one.",
    date: "2025-11-12",
    category: "ESSAY",
    readingTime: "6 MIN",
    body: [
      "Early-stage teams often treat architecture as something that can wait until after product-market fit. In practice, the opposite is closer to the truth: the first structural decisions determine how fast you can learn, how safely you can ship, and whether the company can absorb the next ten hires without rewriting itself.",
      "Architecture is not a diagram exercise. It is the set of boundaries that decide what can change quickly and what must remain stable. Data ownership, trust surfaces, integration points, and evaluation loops. These are the rails the product will run on long after the first release notes are forgotten.",
      "At HAMIFAL, we treat architecture as part of the product. If the system cannot hold the complexity the market will demand, no amount of design polish or go-to-market energy will save it. The goal is not perfection. The goal is a foundation that can survive contact with real users and still leave room to evolve.",
      "Scale the team after the rails are down. Hire into a system that already knows what it is.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count);
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
