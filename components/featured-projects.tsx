// app/page.tsx - Featured Projects Section (Partial)

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/app/data/projects";

// This is just the Featured Projects section for the homepage
export function FeaturedProjectsSection() {
  return (
    <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
            <h2 className="heading-lg relative">
                Featured Projects
                <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
            </h2>
            <Link href="/projects" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
                View All Projects
            </Link>
        </div>

      <div className="grid gap-24">
        {featuredProjects.map((project, index) => (
          <div key={project.id} className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-8xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                  {project.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/projects/${project.slug}`}>View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={480}
                    height={270}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}