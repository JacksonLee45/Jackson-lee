// data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  slug: string;
  type: "hosted" | "github";
  githubUrl?: string;
  liveUrl?: string;
  client?: string;
  challenge?: string;
  solution?: string;
  gallery?: string[];
  year?: string;
  role?: string;
  
  // New fields to support enhanced project pages
  technicalDetails?: {
    infrastructure?: string[];
    frontend?: string[];
    caching?: string[];
    performance?: string[];
  };
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  lessonsLearned?: string[];
  
  nextProject?: {
    title?: string;
    slug?: string;
  }
}
  
  // Featured projects are the ones displayed on the homepage
  export const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Stride Sync",
      description:
        "An AI running coach and training platform for runners. Fully deployed, with authentication and personalized training plans.",
      technologies: ["TypeScript", "Next.js", "PostgresSQL", "Tailwind CSS",  "Anthropic API"],
      image: "/images/StrideSyncDark.png",
      slug: "stride-sync",
      type: "hosted",
      client: "Personal Project",
      year: "2024",
      role: "Full Stack Developer",
      challenge: "Building an AI-powered platform that can analyze running data and provide personalized training plans with limited training data.",
      solution: "Implemented advanced prompt engineering techniques with Anthropic's Claude API to create a solution that adapts training plans based on user feedback and performance data.",  
      gallery: [
        "/images/StrideSyncLight.png",
        "/placeholder.svg?height=600&width=800"
      ],
      liveUrl: "https://stride-sync.vercel.app/",
      githubUrl: "https://github.com/JacksonLee45/stride-sync",
      nextProject: {
        title: "Crypto Dashboard",
        slug: "crypto-dashboard"
      }
    },
    {
      id: 2,
      title: "Crypto Dashboard",
      description:
        "A comprehensive cryptocurrency dashboard featuring real-time market data, interactive visualizations, and a robust API layer with advanced caching strategies.",
      technologies: ["React", "Next.js", "TypeScript", "Redis", "Upstash", "Tailwind CSS", "Recharts"],
      image: "/images/cryptoCompressed.png",
      slug: "crypto-dashboard",
      type: "hosted",
      year: "2023",
      role: "Full Stack Developer",
      challenge: "Building a high-performance cryptocurrency dashboard that could handle frequent API calls while providing a responsive user experience presented multiple challenges. The primary concerns were efficient data fetching, caching strategies to avoid rate limits, and creating an architecture that would scale with additional features.",
      solution: "I implemented a multi-layered API architecture with Redis-powered caching and comprehensive middleware to optimize performance. This approach focused on both developer experience and end-user satisfaction through intelligent caching, detailed request tracing, and robust error handling.",
      gallery: [
        "/images/cryptoCompressed.png",
        "/placeholder.svg?height=600&width=800"
      ],
      liveUrl: "https://crypto-dashboard-eta-woad.vercel.app",
      githubUrl: "https://github.com/JacksonLee45/crypto-dashboard-1",
      technicalDetails: {
        infrastructure: [
          "Implemented TTL-based cache invalidation with Redis",
          "Created IP-based rate limiting to prevent API abuse",
          "Built request tracing with unique IDs for debugging",
          "Set up comprehensive security headers (CSP, HSTS)"
        ],
        frontend: [
          "React 19 with TypeScript for type safety",
          "React Query for data fetching and state management",
          "Interactive charts powered by Recharts",
          "Responsive design optimized for all device sizes"
        ],
        caching: [
          "Short-lived cache (60s) for volatile data like current prices",
          "Medium-lived cache (5min) for market overviews",
          "Long-lived cache (30min) for historical data",
          "Multi-tiered caching (Redis + React Query) to minimize API calls"
        ],
        performance: [
          "Server-side rendering for initial page load performance",
          "Incremental Static Regeneration for static content",
          "Optimized image loading with Next.js Image component",
          "Efficient re-renders with React optimization techniques"
        ]
      },
      keyFeatures: [
        {
          title: "Real-time Market Data",
          description: "Comprehensive cryptocurrency market data with current prices, market caps, and trading volumes"
        },
        {
          title: "Interactive Visualizations",
          description: "Dynamic and responsive charts for price history, market dominance, and trading patterns"
        },
        {
          title: "Robust API Layer",
          description: "Advanced caching, rate limiting, and security features powering all data operations"
        }
      ],
      lessonsLearned: [
        "The critical importance of multi-layered caching strategies for both performance and reliability",
        "How to implement effective request tracing for debugging distributed systems",
        "Techniques for balancing fresh data requirements with API rate limits",
        "The value of structured error handling in improving developer experience"
      ],
      nextProject: {
        title: "Paragliding Weather Checker",
        slug: "paragliding-weather-checker"
      }
    },
    {
      id: 3,
      title: "Paragliding Weather Checker",
      description: "A fully deployed website for checking paragliding weather conditions.",
      technologies: ["React", "Javascript", "PostgreSQL", "AWS Lamdba", "AWS API Gateway"],
      image: "/images/WeatherChecker.png",
      slug: "paragliding-weather-checker",
      type: "hosted",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
    },
  ];
  
  // All projects including GitHub-only projects
  export const allProjects: Project[] = [
    ...featuredProjects,
    {
        id: 4,
        title: "Emergency Room Scheduler",
        description: "A custom scheduler that automatically triages patients as they enter an Emergency Room.",
        technologies: ["C#", "ASP .NET", "MSSQL Server"],
        image: "/placeholder.svg?height=600&width=800",
        slug: "er-scheduler",
        type: "hosted",
        gallery: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800"
        ],
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This website you're currently on!",
      technologies: ["Next.js", "Typescript", "Tailwind CSS"],
      image: "/placeholder.svg?height=600&width=800",
      slug: "portfolio",
      type: "hosted",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
  },
    {
      id: 6,
      title: "Algorithm Visualizer",
      description: "TEMP A tool for visualizing common algorithms like sorting, pathfinding, and graph traversal algorithms.",
      technologies: ["JavaScript", "Canvas API", "Data Structures"],
      githubUrl: "https://github.com/JacksonLee45/algorithm-visualizer",
      image: "/placeholder.svg?height=600&width=800",
      slug: "temp1",
      type: "github",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
    },
    {
      id: 7,
      title: "Compiler Design Project",
      description: "TEMP A simple compiler implementation that demonstrates lexical analysis, parsing, and code generation.",
      technologies: ["C++", "LLVM", "Automata Theory"],
      githubUrl: "https://github.com/JacksonLee45/mini-compiler",
      image: "/placeholder.svg?height=600&width=800",
      slug: "temp2",
      type: "github",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
    },
    {
      id: 8,
      title: "Operating System Kernel",
      description:
        "TEMP A minimal operating system kernel implementing basic process scheduling, memory management, and file systems.",
      technologies: ["C", "Assembly", "OS Theory"],
      githubUrl: "https://github.com/JacksonLee45/mini-os",
      image: "/placeholder.svg?height=600&width=800",
      slug: "temp3",
      type: "github",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ]
    },
    {
      id: 9,
      title: "Typography Portfolio",
      client: "Personal Project",
      year: "2025",
      role: "Full Stack Developer",
      description:
      "A minimalist portfolio website for a typography designer, featuring a clean layout and beautiful typography.",
      challenge:
      "The main challenge was to create a website that showcased the designer's work while also demonstrating typography principles in action. The design needed to be minimal yet impactful, with a focus on readability and visual hierarchy.",
      solution:
      "I developed a custom Next.js application with a focus on typography and whitespace. The site features carefully selected font pairings, a responsive layout, and subtle animations that enhance the user experience without distracting from the content.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "/placeholder.svg?height=800&width=1600",
      slug: "typography-portfolio",
      type: "github",
      gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/JacksonLee45/typography-portfolio",
      nextProject: {
        title: "E-commerce Platform",
        slug: "ecommerce-platform",
      },
    }
  ];
  
  // Helper function to get a project by slug
  export function getProjectBySlug(slug: string): Project | undefined {
    return allProjects.find(project => project.slug === slug);
  }