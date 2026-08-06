export type PodcastEpisode = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  date: string;
  duration: string;
  guests: string[];
  topics: string[];
  notes: string[];
};

export const podcastShow = {
  name: "Bootstrapia",
  description:
    "Conversations with founders and builders about starting from zero, technical judgment, and the reality of building companies.",
  host: "Si Tadmor",
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    slug: "bootstrapia-ep-01",
    number: "01",
    title: "Building under constraint",
    summary:
      "A conversation about starting with limited resources, technical judgment under pressure, and what 0→1 actually feels like when the slides end.",
    date: "2026-01-20",
    duration: "48 MIN",
    guests: ["Founder guest"],
    topics: ["0→1", "CONSTRAINT", "JUDGMENT"],
    notes: [
      "Why scarcity sharpens product taste instead of only slowing progress.",
      "The difference between a prototype that impresses and a system that can be operated.",
      "Signals that an idea is ready to become a company, and signals that it is not.",
    ],
  },
  {
    slug: "bootstrapia-ep-02",
    number: "02",
    title: "Product taste and security instincts",
    summary:
      "On product taste, security instincts, and knowing when an ambitious idea is ready to leave the whiteboard.",
    date: "2026-02-17",
    duration: "52 MIN",
    guests: ["Builder guest"],
    topics: ["PRODUCT", "SECURITY", "TASTE"],
    notes: [
      "How security background changes the way you evaluate product risk.",
      "Taste as a practical filter, not aesthetics for their own sake.",
      "When to keep researching and when to put the product in front of users.",
    ],
  },
  {
    slug: "bootstrapia-ep-03",
    number: "03",
    title: "From research to company",
    summary:
      "Moving from deep technical research into a company: what transfers, what breaks, and what has to be rebuilt for the market.",
    date: "2026-03-24",
    duration: "55 MIN",
    guests: ["Researcher-founder"],
    topics: ["RESEARCH", "COMPANY", "TRANSLATION"],
    notes: [
      "The gap between a research artifact and a product workflow.",
      "How operators decide which technical depth customers will actually pay for.",
      "Building a company around hard technology without hiding behind it.",
    ],
  },
  {
    slug: "bootstrapia-ep-04",
    number: "04",
    title: "Selling before the brand exists",
    summary:
      "Early customers, awkward demos, and the difference between a polished pitch and a product someone will pay for.",
    date: "2026-04-14",
    duration: "51 MIN",
    guests: ["Operator guest"],
    topics: ["SALES", "EARLY", "CUSTOMERS"],
    notes: [
      "What founders learn the first time a buyer says no for a real reason.",
      "When distribution should shape the product, and when it should not.",
    ],
  },
  {
    slug: "bootstrapia-ep-05",
    number: "05",
    title: "Small teams, hard problems",
    summary:
      "Why staying small is a strategy, not a phase, and what breaks when you hire ahead of clarity.",
    date: "2026-05-12",
    duration: "49 MIN",
    guests: ["Founder guest"],
    topics: ["TEAMS", "FOCUS", "SPEED"],
    notes: [
      "Hiring as a last resort, not a milestone.",
      "Keeping decisions close to the people who understand the problem.",
    ],
  },
];

export function getEpisode(slug: string): PodcastEpisode | undefined {
  return podcastEpisodes.find((episode) => episode.slug === slug);
}

export function getRelatedEpisodes(
  slug: string,
  count = 2,
): PodcastEpisode[] {
  return podcastEpisodes.filter((episode) => episode.slug !== slug).slice(0, count);
}

export function formatEpisodeDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
