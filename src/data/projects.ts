export type ProjectCategory =
  | "AI/ML"
  | "Full Stack";

export type Project = {
  slug: string;
  name: string;
  rank: number;
  // Set to true to show this project on the homepage featured section.
  featured: boolean;
  category: ProjectCategory;
  tagline: string;
  problem: string;
  outcome: string;
  stack: string[];
  features: string[];
  highlights: string[];
  architecture: string[];
  challenges: string[];
  solutions: string[];
  learnings: string[];
  future: string[];
  links: {
    github?: string;
    live?: string;
  };
  blogSlug: string;
  screenshots?: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "AI/ML",
  "Full Stack",
];

export const projects: Project[] = [
  {
    slug: "algoradar",
    name: "AlgoRadar",
    rank: 1,
    featured: true,
    category: "AI/ML",
    tagline: "Competitive Programming Weakness Analyzer and Recommender",
    problem:
      "Competitive programmers can see solved counts, but they rarely see a clear diagnosis of why they fail: tags, difficulty bands, verdict patterns, and contest behavior across platforms.",
    outcome:
      "A CP intelligence dashboard that converts submissions into weakness clusters, solve probability estimates, and practical recommendations.",
    stack: [
      "Python",
      "Streamlit",
      "pandas",
      "scikit-learn",
      "Plotly",
      "TF-IDF",
      "Codeforces API",
      "LeetCode GraphQL",
      "CodeChef public data",
    ],
    features: [
      "Codeforces, CodeChef, and LeetCode integration",
      "Rating-wise and tag-wise accuracy analysis",
      "WA/TLE/RE distribution",
      "Difficulty distribution and contest trend analysis",
      "Weak, stable, and strong tag classifier",
      "Solve probability estimator",
      "Recommendation engine for focused practice",
    ],
    highlights: [
      "Cross-platform CP profile normalization",
      "Feature engineering from verdict history",
      "Readable visual diagnostics for practice planning",
      "Recommendation logic tied to actual weakness signals",
    ],
    architecture: [
      "Platform fetchers normalize raw submission data into a common schema.",
      "Analysis modules compute tag, rating, verdict, and contest trend features.",
      "ML heuristics estimate weak areas and likelihood of solving future problems.",
      "Streamlit surfaces interactive charts and next-action recommendations.",
    ],
    challenges: [
      "Different platforms expose different fields and reliability levels.",
      "Raw solved counts can hide repeated failure patterns.",
      "Recommendations can become noisy if every weak tag is treated equally.",
    ],
    solutions: [
      "Designed a normalized submission schema before feature extraction.",
      "Separated verdict distribution from accepted-solution counts.",
      "Used tag strength buckets to turn analysis into a compact action plan.",
    ],
    learnings: [
      "A useful ML project starts with a good problem framing, not the model.",
      "Dashboards need prioritization, otherwise they become data dumps.",
      "CP analytics is more helpful when it explains behavior over time.",
    ],
    future: [
      "Add personalized ladders per tag and rating band.",
      "Track recommendation acceptance and improvement loops.",
      "Build richer contest upsolve planning.",
    ],
    links: {
      github: "https://github.com/drawmebaaz/AlgoRadar",
    },
    blogSlug: "how-i-built-algoradar",
    screenshots: [
      {
        src: "/assets/projects/algoradar/combined-analysis.png",
        alt: "AlgoRadar combined competitive programming profile dashboard",
        title: "Combined analysis dashboard",
      },
      {
        src: "/assets/projects/algoradar/recommendations-overview.png",
        alt: "AlgoRadar platform practice queues and recommendation buckets",
        title: "Recommendations overview",
      },
      {
        src: "/assets/projects/algoradar/recommendations-table.png",
        alt: "AlgoRadar recommendation table for confidence builder problems",
        title: "Recommendation table",
      },
      {
        src: "/assets/projects/algoradar/solve-probability.png",
        alt: "AlgoRadar solve probability estimator for a competitive programming problem",
        title: "Solve probability estimator",
      },
    ],
  },
  {
    slug: "smart-hostel",
    name: "Smart Hostel",
    rank: 2,
    featured: true,
    category: "AI/ML",
    tagline: "Hostel Grievance Workflow Platform",
    problem:
      "Hostel complaints often arrive as messy English/Hinglish text, duplicate issues, and unclear urgency. Admins need a triage layer before workflow speed can improve.",
    outcome:
      "A student/admin grievance system that classifies, groups, prioritizes, and explains complaints with an AI-assisted workflow.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "pgvector",
      "SQLite",
      "Alembic",
      "Docker Compose",
      "Tailwind CSS",
    ],
    features: [
      "Student and admin portals",
      "Complaint intake",
      "English + Hinglish normalization",
      "AI triage and category classification",
      "Urgency scoring",
      "Complaint grouping into issues",
      "SLA-aware prioritization",
      "Admin resolution workflow",
      "Risk scoring and recommended actions",
      "Evidence panel",
      "JWT HttpOnly auth and role-based access",
    ],
    highlights: [
      "Designed around operational workflow, not only model output",
      "Uses grouping to reduce duplicate admin effort",
      "Role-aware portal architecture",
      "Evidence-first admin view for trust",
    ],
    architecture: [
      "React portals split student intake from admin resolution.",
      "FastAPI backend handles auth, complaint lifecycle, and triage endpoints.",
      "SQLAlchemy models support PostgreSQL production and SQLite fallback.",
      "Vector similarity and scoring layers group related complaints and surface evidence.",
    ],
    challenges: [
      "Hinglish complaint text needs normalization without losing intent.",
      "Urgency scoring must not override human judgment.",
      "Duplicate grouping needs explainability for admins.",
    ],
    solutions: [
      "Built a normalization layer before classification.",
      "Separated AI suggestions from workflow authority.",
      "Added an evidence panel so admins can inspect why issues were grouped.",
    ],
    learnings: [
      "AI products need trust surfaces, not just predictions.",
      "Operational tools should prioritize scanning and action.",
      "Fallback infrastructure matters during fast prototyping.",
    ],
    future: [
      "Add notification routing by hostel block and issue category.",
      "Measure SLA improvements from grouping.",
      "Add admin feedback loops for triage quality.",
    ],
    links: {
      github: "https://github.com/drawmebaaz/SMART_HOSTEL",
    },
    blogSlug: "smart-hostel-ai-triage",
    screenshots: [
      {
        src: "/assets/projects/smart-hostel/admin-dashboard.png",
        alt: "Smart Hostel admin dashboard showing grouped operational issues and risk filters",
        title: "Admin issue desk",
      },
      {
        src: "/assets/projects/smart-hostel/student-complaint-flow.png",
        alt: "Smart Hostel student intake screen for submitting hostel grievances",
        title: "Student complaint intake",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.rank - b.rank);
