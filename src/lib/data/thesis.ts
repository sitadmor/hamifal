export type ThesisBlock =
  | { type: "p"; text: string; strong?: boolean }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "heading"; text: string };

export type ThesisSection = {
  number: string;
  title: string;
  blocks: ThesisBlock[];
};

export const thesisIntro = {
  label: "Our Thesis",
  title: "The economics of building companies changed.",
  blocks: [
    {
      type: "p",
      text: "Software and AI make it possible for small, experienced teams to build and operate far more than before.",
    },
    {
      type: "p",
      text: "HAMIFAL is built around a few simple principles.",
    },
  ] satisfies ThesisBlock[],
};

export const thesisSections: ThesisSection[] = [
  {
    number: "01",
    title: "Start with the problem",
    blocks: [
      {
        type: "p",
        text: "Get close to customers and operators before deciding what to build.",
      },
      {
        type: "p",
        text: "Understand the problem, the workflow, and the economics behind it.",
      },
      {
        type: "p",
        text: "Product and go-to-market should develop together.",
      },
    ],
  },
  {
    number: "02",
    title: "Focus is the advantage",
    blocks: [
      {
        type: "p",
        text: "Building more is easy. Choosing what matters is hard.",
      },
      {
        type: "p",
        text: "Work on fewer problems. Understand them deeply. Ignore the rest.",
      },
    ],
  },
  {
    number: "03",
    title: "Domain expertise matters",
    blocks: [
      {
        type: "p",
        text: "As building gets easier, knowing what to build matters more.",
      },
      {
        type: "p",
        text: "Work with people who understand the customer, the industry, and how the work actually gets done.",
      },
    ],
  },
  {
    number: "04",
    title: "Stay small",
    blocks: [
      {
        type: "p",
        text: "Keep teams small for as long as possible.",
      },
      {
        type: "p",
        text: "Add people when they increase output, not because the company is growing.",
      },
    ],
  },
  {
    number: "05",
    title: "Use technology everywhere",
    blocks: [
      {
        type: "p",
        text: "Technology should improve the whole company, not only the product.",
      },
      {
        type: "p",
        text: "Use software and AI wherever they reduce work, improve decisions, or increase output.",
      },
    ],
  },
  {
    number: "06",
    title: "Earn complexity",
    blocks: [
      {
        type: "p",
        text: "Do not add structure before it is needed.",
      },
      {
        type: "p",
        text: "Process, management, roles, and systems should solve real constraints.",
      },
      {
        type: "p",
        text: "Complexity should follow the business.",
      },
    ],
  },
];
