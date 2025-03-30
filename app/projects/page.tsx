import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { allProjects } from "../data/projects"

// Mock projects data

export default function ProjectsPage() {
  // Separate hosted and GitHub-only projects
  const hostedProjects = allProjects.filter((project) => project.type === "hosted")
  const githubProjects = allProjects.filter((project) => project.type === "github")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase of my personal work
          </p>
        </div>

        {/* Hosted Projects */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Web Projects
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-16 md:gap-24">
            {hostedProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={`/projects/${project.slug}`}>View Project</Link>
                    </Button>
                    
                  </div>
                  <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}

