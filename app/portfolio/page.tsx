import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, ArrowUpRight, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Portfolio - Web & App Development Projects | UQIDEV",
  description:
    "Explore our latest web, mobile app, and UI/UX design projects and see how we've helped businesses achieve their digital goals with affordable development services.",
  alternates: {
    canonical: "/portfolio",
  },
}

// Define the project data structure
type Project = {
  slug: string
  title: string
  description: string
  category: string
  image: string
  technologies: string[]
  summary: string
  featured?: boolean
  gallery?: string[]
}

// Real project data based on available assets
const projects: Project[] = [
  {
    slug: "videogift",
    title: "VideoGift",
    description: "Interactive video messaging platform for personalized greetings",
    category: "Web Development",
    image: "/projects/videogift/video-gift-1.webp",
    technologies: ["React", "Next.js", "WebRTC", "AWS", "Tailwind CSS"],
    summary: "A modern platform that allows users to create, customize and share personalized video messages for special occasions.",
    featured: true,
    gallery: [
      "/projects/videogift/video-gift-1.webp",
      "/projects/videogift/video-gift-3.webp",
      "/projects/videogift/video-gift-4.webp"
    ]
  },
  {
    slug: "interviewer",
    title: "Interviewer AI",
    description: "AI-powered interview preparation platform",
    category: "App Development",
    image: "/projects/interviewer/interviewer-1.webp",
    technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB", "Express"],
    summary: "An intelligent interview preparation tool that uses AI to simulate real interview scenarios and provide personalized feedback.",
    featured: true,
    gallery: [
      "/projects/interviewer/interviewer-1.webp",
      "/projects/interviewer/interviewer-2.webp",
      "/projects/interviewer/interviewer-3.webp",
      "/projects/interviewer/interviewer-4.webp",
      "/projects/interviewer/interviewer-5.webp"
    ]
  },
  {
    slug: "softwarein",
    title: "Software Inno",
    description: "Collaborative platform for software development teams",
    category: "Web Development",
    image: "/projects/softwarein/software-inno-1.webp",
    technologies: ["Vue.js", "GraphQL", "Firebase", "Vuetify", "Jest"],
    summary: "A comprehensive platform that streamlines collaboration between software development teams with integrated project management tools.",
    gallery: [
      "/projects/softwarein/software-inno-1.webp",
      "/projects/softwarein/software-inno-2.webp",
      "/projects/softwarein/software-inno-4.webp",
      "/projects/softwarein/software-inno-5.webp",
      "/projects/softwarein/software-inno-6.webp",
      "/projects/softwarein/software-inno-7.webp",
      "/projects/softwarein/software-inno-8.webp",
      "/projects/softwarein/software-inno-9.webp"
    ]
  },
  {
    slug: "securitycam",
    title: "Home Security Camera",
    description: "AI-enhanced security camera monitoring system",
    category: "App Development",
    image: "/projects/securitycam/project-2-1-scaled-1-950x534.gif",
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "WebSockets"],
    summary: "An advanced security system that uses AI to detect unusual activities and provide real-time alerts to users.",
    gallery: [
      "/projects/securitycam/project-2-1-scaled-1-950x534.gif",
      "/projects/securitycam/project-2-2-950x535.jpg",
      "/projects/securitycam/project-2-3-950x535.jpg",
      "/projects/securitycam/project-2-4-950x535.jpg"
    ]
  },
  {
    slug: "designstudio",
    title: "Interior Design Studio",
    description: "Professional design toolkit for creative professionals",
    category: "UI/UX Design",
    image: "/projects/designstudio/project-1-1.jpg",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems"],
    summary: "A comprehensive design system and toolkit that helps creative professionals streamline their workflow and maintain consistency.",
    featured: false,
    gallery: [
      "/projects/designstudio/project-1-1.jpg",
      "/projects/designstudio/project-1-2-950x950.jpg",
      "/projects/designstudio/project-1-4-950x633.jpg",
      "/projects/designstudio/project-1-5-950x950.jpg",
      "/projects/designstudio/project-1-6-950x950.jpg",
      "/projects/designstudio/project-1-7-950x950.jpg"
    ]
  },
  {
    slug: "causer",
    title: "Causer",
    description: "Social platform connecting volunteers with charitable causes",
    category: "Web Development",
    image: "/projects/causer/causer-1.webp",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO"],
    summary: "A purpose-driven platform that connects passionate volunteers with charitable organizations to create meaningful impact.",
    gallery: [
      "/projects/causer/causer-1.webp",
      "/projects/causer/causer-2.webp",
      "/projects/causer/causer-3.webp",
      "/projects/causer/causer-4.webp"
    ]
  }
]

export default function PortfolioPage() {
  // Filter projects by category
  const webProjects = projects.filter(project => project.category === "Web Development");
  const appProjects = projects.filter(project => project.category === "App Development");
  const designProjects = projects.filter(project => project.category === "UI/UX Design");
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Background Pattern */}
      <ModernGridBackground />
      
      <main className="flex-1 relative z-10">

        {/* Featured Projects Carousel */}
        <section className="container py-12 md:py-24 lg:py-24 border-b ">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Featured Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our <span className="text-primary">Best</span> Projects
            </h2>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Selected examples of our most impactful and innovative work across different industries.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.slug} className="border-primary/20 bg-background/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                    <Badge className="bg-yellow-500/80 text-white">
                      <Star className="h-3 w-3 mr-1" /> Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground">{project.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full gap-2 rounded-full"
                    asChild
                  >
                    <Link href={`/portfolio/${project.slug}`}>
                      View Case Study <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Tabs */}
        <section className="container py-12 md:py-24 lg:py-32">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col items-center">
              <TabsList className="grid grid-cols-4 mb-12 w-full max-w-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="app">App</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="app" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Our Process */}
        <section className="container py-12 md:py-24 lg:py-32 border-t border-b ">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              How We <span className="text-primary">Deliver</span> Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven development methodology ensures we consistently deliver high-quality solutions that meet your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground">We start by understanding your business goals, target audience, and project requirements in detail.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-muted-foreground">We create a comprehensive project plan with timelines, milestones, and resource allocation.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-muted-foreground">Our team designs and develops your solution using agile methodologies with regular client check-ins.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-muted-foreground">After thorough testing and your approval, we deploy the solution and provide ongoing support.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-[800px]">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">FA</span>
                  </div>
                  <div>
                    <CardTitle>Frantz Arty</CardTitle>
                    <CardDescription>Founder, VideoGift</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-muted-foreground">
                  "UQIDEV delivered our video messaging platform on time and within budget. Their attention to detail and
                  technical expertise exceeded our expectations. We've seen a 40% increase in user engagement since
                  launch."
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">JS</span>
                  </div>
                  <div>
                    <CardTitle>Jenny Stanley</CardTitle>
                    <CardDescription>Founder, Design Studio Pro</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-muted-foreground">
                  "Working with UQIDEV was a game-changer for our design platform. User engagement is up 65%, and we've
                  received fantastic feedback from our customers. Their team was responsive and a pleasure to work
                  with."
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center">
                    <span className="font-bold">MK</span>
                  </div>
                  <div>
                    <CardTitle>Michael Kors</CardTitle>
                    <CardDescription>CTO, SecureCam Analytics</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-muted-foreground">
                  "Working with UQIDEV was a game-changer for our security platform. Their technical solutions and
                  design expertise helped us stand out in a competitive market. Highly recommended!"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t border-b ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to <span className="text-primary">Start</span> Your Project?
            </h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto mb-8 text-lg">
              Let's work together to bring your vision to life with our affordable, high-quality development services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No-obligation consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Custom quote within 48 hours</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-primary/20 bg-background/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/30 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
          {project.category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-muted/50">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full gap-1 hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <Link href={`/portfolio/${project.slug}`}>
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

