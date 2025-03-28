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
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgresSQL", "Anthropic API"],
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
        "Analytics dashboard integrated with CoinGeckoAPI for Cryptocurrencies.",
      technologies: ["React", "Next.js", "Redis", "Upstash", "Security Headers", "API Rate Limiting", "Request Logging and Tracing"],
      image: "/images/cryptoCompressed.png",
      slug: "crypto-dashboard",
      type: "hosted",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
      liveUrl: "https://crypto-dashboard-eta-woad.vercel.app",
      githubUrl: "https://github.com/JacksonLee45/crypto-dashboard-1",
    },
    {
      id: 3,
      title: "Paragliding Weather Checker",
      description: "A fully deployed website for checking Paragliding weather conditions",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
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
        description: "A custom scheduler that automatically triages patients as they enter an Emergency Room",
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
      id: 6,
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
      id: 7,
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
      id: 8,
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