import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Github, Linkedin, Mail, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedProjectsSection } from "@/components/featured-projects"
import { OutsideOfficeSection } from "@/components/outside-office"

// Mock workshops data
const workshops = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description: "Learn advanced React patterns and techniques to build scalable applications.",
    date: "April 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Upcoming",
    slug: "advanced-react-patterns",
  },
  {
    id: 2,
    title: "TypeScript for JavaScript Developers",
    description: "A comprehensive introduction to TypeScript for experienced JavaScript developers.",
    date: "May 10, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Tech Hub, San Francisco",
    image: "/placeholder.svg?height=300&width=500",
    status: "Upcoming",
    slug: "typescript-for-javascript-developers",
  },
  {
    id: 3,
    title: "Building with Next.js",
    description: "Explore the features of Next.js and learn how to build performant web applications.",
    date: "March 5, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Past",
    slug: "building-with-nextjs",
  },
]

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="heading-xl mb-4">Jackson Lee</h1>
              <h2 className="heading-md text-muted-foreground">Software Engineer</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
            I craft technical systems that deliver tangible value. My approach pairs technical precision with genuine collaboration. Success isn't measured in lines of code, but in the difference my work makes for clients and their users.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Jackson Lee"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              About
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
            As a software engineer with over three years of experience crafting enterprise SaaS applications, I blend technical 
            expertise with business acumen. Since earning my Computer Science degree from the University of Colorado Boulder,
            I've specialized in building full-stack web solutions at Cognizant using C#, .NET, SQL, and JavaScript.
            </p>
            <p className="body-lg mb-6">
            My professional strength lies in translating complex technical concepts into business value. 
            I thrive when leading client conversations about system enhancements, feature development, 
            and technical challenges. By successfully managing multiple software deployments, I've 
            demonstrated my ability to deliver solutions that address immediate needs while 
            establishing foundations for future growth.
            </p>
            <p className="body-lg mb-10">
            Beyond the digital realm, I seek balance through marathons, alpine skiing, and paragliding 
            adventures. These pursuits embody my philosophy of 'structured work, liberated play' that defines
             my approach to both code and life. This duality enables me to transform workplace complexity 
             into elegant solutions while embracing calculated challenges in nature.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read My Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/workshops">View Workshops</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Professional Experience
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-12">
              {/* Cognizant Position */}
              <div className="relative pl-8 border-l-2 border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">Software Engineer</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Cognizant</span>
                    <span className="bg-muted px-2 py-1 rounded-full text-xs">2022 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Developed enterprise SaaS web applications using C#, .NET, ASP.NET, and JavaScript </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Wrote SQL queries and stored procedures to extract, manipulate and manage data in SQL Server and Oracle databases </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Built RESTful APIs integrating frontend and backend systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Wrote Javascript to employ jQuery and AJAX techniques to enable asynchronous data retrieval reducing loading times </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Contributed to the architecture design of a scalable, reliable, service-oriented, message brokered system. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Acted as the primary engineering team representative in client interactions, coordinating seven software deployments </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Managed client relationships during onboarding and provided technical solutions to meet business goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Advocated for client needs, leading technical calls with clients to address bugs, feature requests, and technical challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Collaborated with product owners to prioritize and implement new features across 3 client products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Collaborated and communicated with remote scrum team members in the U.S. and India while following agile best practices</span>
                  </li>
                </ul>
              </div>

              {/* Hoopologie Position */}
              <div className="relative pl-8 border-l-2 border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Hoopologie</span>
                    <span className="bg-muted px-2 py-1 rounded-full text-xs">Summer 2020</span>
                  </div>
                </div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Developed an interactive chatbot for Hoopologie's Facebook page, enhancing user engagement by providing an intuitive
                    platform to explore the company's diverse product line. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Collaborated in an Agile development environment, leveraging GitHub for version control and Trello for project
                    management, to deliver features in iterative sprints. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Led the development and integration of PHP-based solutions with Facebook's API, ensuring seamless interaction between the
                    chatbot and the platform. </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      {/* Workshops Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Workshops
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
          <Link href="/workshops" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Workshops
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={workshop.status === "Upcoming" ? "default" : "secondary"}>{workshop.status}</Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{workshop.title}</CardTitle>
                <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{workshop.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/workshops/${workshop.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Skills
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">04</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-y-8 gap-x-16">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL", "MongoDB", "AWS", "Prompt Engineering"].map(
                (skill, index) => (
                  <div key={skill} className="border-b border-border pb-2 group">
                    <div className="flex items-baseline">
                      <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">{skill}</span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Outside of the Office Section*/}
      <OutsideOfficeSection />

      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 relative text-center">
          Get In Touch
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
            06
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl leading-relaxed mb-10">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-6">
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">Jackson.Lee@example.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin.com/in/JacksonLee</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">github.com/JacksonLee45</span>
              </a>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>
              <div>
                <Button size="lg" className="text-lg px-8 w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

