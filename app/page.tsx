import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Github, Linkedin, Mail, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedProjectsSection } from "@/components/featured-projects"
import { OutsideOfficeSection } from "@/components/outside-office"

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
            I turn complex technical solutions into customer wins. By translating business challenges into scalable implementations, I ensure clients not only adopt new systems but thrive with them. For me, success isn't just delivering code, it's empowering customers to achieve their goals through thoughtful technical guidance.
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
                src="/images/headshot-new-bw.png"
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
            As a customer-focused software engineer with over three years of experience delivering enterprise
            SaaS solutions, I specialize in turning technical complexity into customer success. 
            Since earning my Computer Science degree with a minor in Business from the University of Colorado 
            Boulder, I've honed my expertise in full-stack development at Cognizant, working with C#, .NET, SQL, 
            and JavaScript to solve real business challenges.
            </p>
            <p className="body-lg mb-6">
            My greatest strength is translating customer needs into scalable technical solutions. I excel at 
            guiding clients through complex implementations, leading technical discussions that bridge the gap
            between business objectives and system capabilities. Through coordinating multiple software 
            deployments and managing customer relationships from onboarding through ongoing support, I've learned 
            that the best solutions aren't just technically sound, they're adopted, embraced, and drive measurable 
            business outcomes.
            </p>
            <p className="body-lg mb-6">
            What sets me apart is my commitment to customer advocacy within the engineering process. I've 
            represented engineering teams in client interactions, ensuring technical decisions align with 
            customer success while championing client needs during development cycles. This dual perspective 
            has taught me that sustainable solutions require both technical excellence and deep customer understanding.
            </p>
            <p className="body-lg mb-10">
            Away from the keyboard, I find energy and balance in outdoor pursuits. Marathon running became an
            unexpected passion that pushes my endurance and grit with each race. 
            Alpine skiing has been a lifelong adventure from the icy slopes of Vermont to the powder of
            the Rockies. And after discovering paragliding, I dedicated myself to the sport, spending months learning to 
            fly and never looking back. These activities provide the perfect counterbalance to my 
            technical work, offering both challenge and thrill in the natural world.
            </p>
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
                    <span>Developed enterprise SaaS web applications using C#, .NET, SQL, and JavaScript. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Wrote SQL queries and stored procedures to extract, manipulate and manage data in SQL Server and Oracle databases. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Built RESTful APIs integrating frontend and backend systems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Wrote Javascript to employ jQuery and AJAX techniques to enable asynchronous data retrieval reducing loading times. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Contributed to the architecture design of a scalable, reliable, service-oriented, message brokered system. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span> Acted as the primary engineering team representative in client interactions, coordinating seven software deployments. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Managed client relationships during onboarding and provided technical solutions to meet business goals.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Advocated for client needs, leading technical calls with clients to address bugs, feature requests, and technical challenges.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Collaborated with product owners to prioritize and implement new features across three client products.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Collaborated and communicated with remote scrum team members in the U.S. and India while following agile best practices.</span>
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
              {["C#", "React", "TypeScript", "Next.js",  "SQL", "Angular", "AWS", "Azure", "Tailwind CSS", "Python", "Prompt Engineering", "API Development"].map(
                (skill, index) => (
                  <div key={skill} className="border-b border-border pb-2 group">
                    <div className="flex items-baseline">
                      <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                        -
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
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/90 -top-20 left-1/2 -translate-x-1/2 opacity-80">
            06
          </span>
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl leading-relaxed mb-10">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col gap-6 items-center">
            <a href="#contact" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="link-underline">JacksonHLee1@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/jackson-leeee" target="_blank" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="link-underline">linkedin.com/in/Jackson-Leeee</span>
            </a>
            <a href="https://github.com/JacksonLee45" target="_blank" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="link-underline">github.com/JacksonLee45</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

