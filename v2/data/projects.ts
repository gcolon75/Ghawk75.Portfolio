export interface Project {
  slug: string;
  title: string;
  summary: string;
  skills: string[];
  concepts: string[];
  tools: string[];
  role?: string;
  links?: {
    repo?: string;
    demo?: string;
  };
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "tower-of-greed",
    title: "Tower of Greed",
    summary:
      "A dice-driven roguelike RPG where every turn balances risk and payoff. Build your dice, manage resources, and climb using smart sequencing over raw RNG.",
    skills: ["Game Design", "Systems Design", "Balance Design"],
    concepts: [
      "Roguelike Mechanics",
      "Resource Management",
      "Progression Systems",
    ],
    tools: ["Game Design Documentation", "Balancing Tools"],
    role: "Game Designer, Systems Designer",
    links: {
      demo: "/projects/tower-of-greed",
    },
    images: ["/assets/tower-of-greed-hero.jpg"],
  },
  {
    slug: "axle",
    title: "axle: Mobile Mechanic App Design",
    summary:
      "A complete redesign concept for a mobile mechanic app with a focus on user experience. Connecting car owners with certified mechanics for on-demand vehicle repair.",
    skills: ["UX Design", "User Research", "Project Management"],
    concepts: ["Mobile-First Design", "User Flows", "Design Systems"],
    tools: ["Figma", "Google Slides"],
    role: "UX Designer, User Researcher, Project Manager",
    links: {
      demo: "/projects/axle",
    },
    images: ["/assets/axleImage.JPG"],
  },
];
