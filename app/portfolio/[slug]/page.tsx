import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

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
    featured: true,
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

// Generate metadata for each project
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found | UQIDEV",
      description: "The requested project could not be found.",
    }
  }
  
  return {
    title: `${project.title} - Case Study | UQIDEV`,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Background Pattern */}
      <ModernGridBackground />
      
      <main className="flex-1 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="container pt-8">
          <Button variant="ghost" size="sm" className="gap-1 mb-8" asChild>
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
        
        {/* Hero Section */}
        <section className="container py-12 md:py-16">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <Badge className="w-fit" variant="outline">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>
        </section>
        
        {/* Featured Image */}
        <section className="container py-8">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border/40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
        
        {/* Project Overview */}
        <section className="container py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {project.summary}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="container py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/40 transition-all duration-300 hover:shadow-md hover:border-primary/30">
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready for a <span className="text-primary">Similar</span> Project?
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto mb-8 text-lg">
              Let's discuss how we can create a custom solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                <Link href="/get-started">
                  Start Your Project
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Related Projects */}
        <section className="container py-12 md:py-16 border-t">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.slug !== project.slug)
              .slice(0, 3)
              .map((relatedProject) => (
                <div key={relatedProject.slug} className="group relative aspect-video overflow-hidden rounded-lg border border-border/40 transition-all duration-300 hover:shadow-md hover:border-primary/30">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold">{relatedProject.title}</h3>
                    <p className="text-white/80 text-sm">{relatedProject.category}</p>
                    <Link href={`/portfolio/${relatedProject.slug}`} className="absolute inset-0" aria-label={`View ${relatedProject.title} project`}>
                      <span className="sr-only">View project</span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  )
} 