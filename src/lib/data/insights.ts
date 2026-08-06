/** @deprecated Prefer `@/lib/data/blog` and `@/lib/data/podcast`. Kept for any residual imports. */
export type InsightKind = "essay" | "podcast" | "research";

export type Insight = {
  slug: string;
  kind: InsightKind;
  title: string;
  summary: string;
  meta: string;
  language?: "en" | "he";
  href: string;
};

export const insightCategories = [
  {
    id: "essay" as const,
    label: "BLOG",
    description: "Technical and strategic writing.",
    href: "/blog",
  },
  {
    id: "podcast" as const,
    label: "HAMIFAL PODCAST",
    description: "Conversations with founders and builders.",
    href: "/podcast",
  },
];

export const insights: Insight[] = [
  {
    slug: "building-from-architecture",
    kind: "essay",
    title: "Build the architecture before you scale the team",
    summary:
      "Why early technical decisions compound faster than headcount, and how venture studios should think about systems from day one.",
    meta: "ESSAY / 2026",
    href: "/blog/building-from-architecture",
  },
  {
    slug: "operator-led-studios",
    kind: "essay",
    title: "Operator-led, not slide-led",
    summary:
      "A short note on what separates studios that ship companies from those that produce decks.",
    meta: "ESSAY / 2026",
    href: "/blog/operator-led-studios",
  },
  {
    slug: "bootstrapia-ep-01",
    kind: "podcast",
    title: "Building under constraint",
    summary:
      "A conversation with founders about building under constraint, technical judgment, and what 0→1 actually feels like.",
    meta: "PODCAST / HEBREW",
    language: "he",
    href: "/podcast/bootstrapia-ep-01",
  },
  {
    slug: "bootstrapia-ep-02",
    kind: "podcast",
    title: "Product taste and security instincts",
    summary:
      "On product taste, security instincts, and knowing when an idea is ready to become a company.",
    meta: "PODCAST / HEBREW",
    language: "he",
    href: "/podcast/bootstrapia-ep-02",
  },
];
