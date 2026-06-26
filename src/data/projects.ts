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
    slug: "stockbreakers",
    name: "StockBreakers",
    rank: 2,
    featured: true,
    category: "Full Stack",
    tagline: "Paper Trading and Risk Analytics Platform",
    problem:
      "Most beginner trading apps separate portfolio action from risk understanding. I wanted the trading flow, live prices, and analytics to live together.",
    outcome:
      "A multi-service paper trading platform with real-time updates, portfolio tracking, forecasting, and risk signals.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "Python",
      "NumPy",
      "Socket.IO",
      "Docker",
      "Nginx",
    ],
    features: [
      "JWT authentication",
      "Live price streaming",
      "Buy/sell paper trading",
      "Watchlist and transaction history",
      "Portfolio allocation and P&L tracking",
      "Monte Carlo forecasting",
      "Volatility and drawdown risk scoring",
      "Sentiment signals",
      "Dockerized multi-service deployment",
    ],
    highlights: [
      "Real-time socket flow for price updates",
      "Separate FastAPI ML service for analytics",
      "Portfolio math built around explainable risk signals",
      "Deployment-ready service separation with Docker and Nginx",
    ],
    architecture: [
      "React dashboard handles trading, watchlists, charts, and portfolio views.",
      "Node/Express API owns auth, transactions, and user state in MongoDB.",
      "Socket.IO streams price updates into the client experience.",
      "FastAPI service runs forecasting and risk analytics behind a clean API boundary.",
    ],
    challenges: [
      "Real-time UI state can drift from transaction state.",
      "Forecasting can feel authoritative even when it should be treated as probabilistic.",
      "Multi-service local development adds deployment friction.",
    ],
    solutions: [
      "Kept portfolio writes behind API-owned transaction history.",
      "Displayed risk as ranges and scores instead of single magic numbers.",
      "Dockerized services so the platform can be started consistently.",
    ],
    learnings: [
      "The boundary between product UX and analytics ethics matters.",
      "Real-time systems need boring, predictable state ownership.",
      "Good dashboards make uncertainty visible.",
    ],
    future: [
      "Add strategy replay mode.",
      "Improve market data provider abstraction.",
      "Add richer explainability for risk score components.",
    ],
    links: {
      github: "https://github.com/drawmebaaz/STOCK_BREAKERS",
    },
    blogSlug: "building-stockbreakers",
    screenshots: [
      {
        src: "/assets/projects/stockbreakers/dashboard.png",
        alt: "StockBreakers dashboard showing market watch, virtual cash, and portfolio overview",
        title: "Trading workspace overview",
      },
      {
        src: "/assets/projects/stockbreakers/trade-desk.png",
        alt: "StockBreakers trade desk with buy order ticket and virtual cash breakdown",
        title: "Trade desk",
      },
      {
        src: "/assets/projects/stockbreakers/portfolio.png",
        alt: "StockBreakers portfolio page showing allocation map and holdings ledger",
        title: "Portfolio holdings",
      },
      {
        src: "/assets/projects/stockbreakers/insights.png",
        alt: "StockBreakers research lab with forecast controls and quant screeners",
        title: "Forecast and risk analytics",
      },
      {
        src: "/assets/projects/stockbreakers/insights-forecast.png",
        alt: "StockBreakers Monte Carlo forecast chart with simulated price bands",
        title: "Monte Carlo forecast",
      },
      {
        src: "/assets/projects/stockbreakers/transactions.png",
        alt: "StockBreakers ledger showing paper trading order history",
        title: "Transaction ledger",
      },
    ],
  },
  {
    slug: "smart-hostel",
    name: "Smart Hostel",
    rank: 3,
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
