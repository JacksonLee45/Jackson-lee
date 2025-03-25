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
  }
  
  // Featured projects are the ones displayed on the homepage
  export const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Stride Sync",
      description:
        "An AI running coach and training platform for runners. Fully deployed, authentication, po",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgresSQL", "Anthropic API"],
      image: "/placeholder.svg?height=600&width=800",
      slug: "typography-portfolio",
      type: "hosted",
    },
    {
      id: 2,
      title: "Crypto Dashboard",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=600&width=800",
      slug: "ecommerce-platform",
      type: "hosted",
    },
    {
      id: 3,
      title: "Paragliding Weather Checker",
      description: "A custom CMS built for a publishing company, allowing easy content creation and management.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      image: "/placeholder.svg?height=600&width=800",
      slug: "paragliding-weather-checker",
      type: "hosted",
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
    },
    {
      id: 5,
      title: "Algorithm Visualizer",
      description: "TEMP A tool for visualizing common algorithms like sorting, pathfinding, and graph traversal algorithms.",
      technologies: ["JavaScript", "Canvas API", "Data Structures"],
      githubUrl: "https://github.com/JacksonLee/algorithm-visualizer",
      image: "/placeholder.svg?height=600&width=800",
      slug: "temp1",
      type: "github",
    },
    {
      id: 6,
      title: "Compiler Design Project",
      description: "TEMP A simple compiler implementation that demonstrates lexical analysis, parsing, and code generation.",
      technologies: ["C++", "LLVM", "Automata Theory"],
      githubUrl: "https://github.com/JacksonLee/mini-compiler",
      image: "/placeholder.svg?height=600&width=800",
      slug: "temp2",
      type: "github",
    },
    {
      id: 7,
      title: "Operating System Kernel",
      description:
        "TEMP A minimal operating system kernel implementing basic process scheduling, memory management, and file systems.",
      technologies: ["C", "Assembly", "OS Theory"],
      githubUrl: "https://github.com/JacksonLee/mini-os",
      image: "/placeholder.svg?height=600&width=800",
      slug: "temp3",
      type: "github",
    },
  ];
  
  // Helper function to get a project by slug
  export function getProjectBySlug(slug: string): Project | undefined {
    return allProjects.find(project => project.slug === slug);
  }