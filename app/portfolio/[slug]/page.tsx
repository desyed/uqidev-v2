import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

// Define the case study data structure
type CaseStudy = {
  slug: string
  title: string
  description: string
  category: string
  image: string
  client: string
  duration: string
  year: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
    company: string
  }
  nextProject: string
}

// Mock case study data
const caseStudies: CaseStudy[] = [
  {
    slug: "modern-ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "A full-featured online store with custom product filtering and checkout",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=1200",
    client: "TechStart Inc.",
    duration: "12 weeks",
    year: "2023",
    challenge:
      "TechStart Inc. needed a modern e-commerce platform that could handle their growing product catalog and provide a seamless shopping experience for their customers. Their existing solution was outdated, slow, and difficult to manage, resulting in lost sales and frustrated customers.",
    solution:
      "We built a custom e-commerce solution using Next.js for the frontend and a headless CMS for content management. The platform features advanced product filtering, user accounts, wishlist functionality, and a streamlined checkout process. We integrated with Stripe for payment processing and implemented a robust inventory management system.",
    results: [
      "40% increase in online sales within the first 3 months",
      "65% improvement in page load speed",
      "25% reduction in cart abandonment rate",
      "Simplified product management for the client's team",
    ],
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "Headless CMS", "PostgreSQL"],
    testimonial: {
      quote:
        "UQIDEV delivered our e-commerce platform on time and within budget. Their attention to detail and technical expertise exceeded our expectations. We've seen a 40% increase in online sales since launch.",
      author: "John Doe",
      position: "CEO",
      company: "TechStart Inc.",
    },
    nextProject: "fitness-tracking-app",
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for tracking workouts and nutrition",
    category: "App Development",
    image: "/placeholder.svg?height=600&width=1200",
    client: "FitLife",
    duration: "16 weeks",
    year: "2023",
    challenge:
      "FitLife wanted to create a mobile app that would help users track their workouts, nutrition, and progress toward fitness goals. They needed a solution that would work across both iOS and Android platforms, sync data across devices, and integrate with popular fitness wearables.",
    solution:
      "We developed a cross-platform mobile app using React Native with a clean, intuitive interface. The app includes features like workout tracking, nutrition logging, progress photos, and social sharing. We implemented real-time data synchronization across devices and integrated with Apple HealthKit and Google Fit for seamless data sharing with wearable devices.",
    results: [
      "100,000+ downloads within the first 6 months",
      "4.8/5 average rating on app stores",
      "65% increase in user engagement compared to industry average",
      "Featured in several fitness publications",
    ],
    technologies: ["React Native", "Firebase", "Redux", "HealthKit", "Google Fit", "Cloud Functions"],
    testimonial: {
      quote:
        "The mobile app UQIDEV built for us has transformed our business. User engagement is up 65%, and we've received fantastic feedback from our customers. Their team was responsive and a pleasure to work with.",
      author: "Amanda Smith",
      position: "Marketing Director",
      company: "FitLife",
    },
    nextProject: "analytics-dashboard",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization interface for a SaaS platform",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=1200",
    client: "DataViz Solutions",
    duration: "8 weeks",
    year: "2023",
    challenge:
      "DataViz Solutions needed a comprehensive analytics dashboard for their SaaS platform that would make complex data accessible and actionable for their business users. The existing solution was cluttered, difficult to navigate, and failed to highlight key insights effectively.",
    solution:
      "We designed an intuitive analytics dashboard with a focus on clarity and usability. The interface features customizable widgets, interactive charts, and data filtering options. We conducted extensive user testing to refine the design and ensure it met the needs of different user personas. The final design was delivered as a comprehensive design system with component specifications for the development team.",
    results: [
      "92% user satisfaction rating in post-implementation survey",
      "Reduced time to insight by 60% compared to previous solution",
      "Increased feature adoption across the platform",
      "Design system now used across all company products for consistency",
    ],
    technologies: ["Figma", "UI Design", "Data Visualization", "User Testing", "Design Systems"],
    testimonial: {
      quote:
        "The dashboard design UQIDEV created has completely transformed how our customers interact with their data. The intuitive interface makes complex analytics accessible to everyone, and we've received overwhelmingly positive feedback.",
      author: "Michael Chen",
      position: "Product Manager",
      company: "DataViz Solutions",
    },
    nextProject: "real-estate-platform",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    description: "Property listing and management system",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=1200",
    client: "PropertyPro",
    duration: "20 weeks",
    year: "2022",
    challenge:
      "PropertyPro needed a comprehensive real estate platform that would allow property managers to list properties and potential buyers or renters to search and filter listings based on their preferences. They required features like virtual tours, neighborhood information, and agent profiles.",
    solution:
      "We built a full-featured real estate platform using Vue.js for the frontend and Node.js for the backend. The platform includes advanced search and filtering options, interactive maps with neighborhood data, virtual property tours, and a secure messaging system for agent-client communication. We integrated with Google Maps API for location-based features and implemented a robust admin dashboard for property management.",
    results: [
      "50% increase in property inquiries",
      "Reduced listing time by 35%",
      "Improved user engagement with average session duration up by 45%",
      "Streamlined workflow for property managers",
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB", "Google Maps API", "AWS S3", "Elasticsearch"],
    testimonial: {
      quote:
        "Working with UQIDEV was a game-changer for our real estate platform. Their technical solutions and design expertise helped us stand out in a competitive market. Highly recommended!",
      author: "Robert Johnson",
      position: "Founder",
      company: "PropertyPro",
    },
    nextProject: "food-delivery-app",
  },
  {
    slug: "food-delivery-app",
    title: "Food Delivery App",
    description: "On-demand food delivery service for local restaurants",
    category: "App Development",
    image: "/placeholder.svg?height=600&width=1200",
    client: "LocalEats",
    duration: "24 weeks",
    year: "2022",
    challenge:
      "LocalEats wanted to create a food delivery app that would connect local restaurants with hungry customers in their area. They needed a solution that would handle the entire delivery process, from browsing menus and placing orders to tracking deliveries and processing payments.",
    solution:
      "We developed a comprehensive food delivery app using Flutter for cross-platform compatibility. The app includes features like restaurant discovery, menu browsing, order placement, real-time delivery tracking, and secure payment processing. We built a separate app for delivery drivers and a web dashboard for restaurant owners to manage their menus and orders.",
    results: [
      "Onboarded 150+ local restaurants within the first year",
      "Processed over 50,000 orders in the first six months",
      "Achieved 30% month-over-month growth in active users",
      "95% on-time delivery rate",
    ],
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe", "Push Notifications", "Analytics"],
    testimonial: {
      quote:
        "The food delivery app UQIDEV built has revolutionized how we connect with local customers. The platform is reliable, fast, and easy to use for both restaurants and customers. Their team went above and beyond to ensure our success.",
      author: "Sarah Williams",
      position: "COO",
      company: "LocalEats",
    },
    nextProject: "brand-identity-system",
  },
  {
    slug: "brand-identity-system",
    title: "Brand Identity System",
    description: "Complete visual identity for a tech startup",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=1200",
    client: "NexTech Innovations",
    duration: "10 weeks",
    year: "2022",
    challenge:
      "NexTech Innovations, a new tech startup, needed a comprehensive brand identity system that would help them stand out in a crowded market. They required a cohesive visual language that could be applied across digital and print materials, from their website and app to marketing collateral and business cards.",
    solution:
      "We created a complete brand identity system starting with a distinctive logo that captured the company's innovative spirit. We developed a comprehensive color palette, typography system, and custom iconography. The deliverables included a detailed brand guidelines document, digital assets in various formats, and templates for common applications like presentations, social media, and marketing materials.",
    results: [
      "Increased brand recognition in target market",
      "Consistent brand presentation across all touchpoints",
      "Positive feedback from investors and early customers",
      "Streamlined creation of new marketing materials",
    ],
    technologies: ["Branding", "Logo Design", "Style Guide", "Typography", "Color Theory", "Adobe Creative Suite"],
    testimonial: {
      quote:
        "UQIDEV delivered a brand identity that perfectly captures our company's vision and values. The comprehensive system they created has made it easy to maintain consistency across all our materials, and we've received countless compliments on our professional appearance.",
      author: "David Park",
      position: "Founder & CEO",
      company: "NexTech Innovations",
    },
    nextProject: "modern-ecommerce-platform",
  },
]

// Get case study by slug
const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.slug === slug)
}

// Get next case study
const getNextCaseStudy = (slug: string): CaseStudy | undefined => {
  const nextSlug = caseStudies.find((study) => study.slug === slug)?.nextProject
  return caseStudies.find((study) => study.slug === nextSlug)
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)
  const nextCaseStudy = getNextCaseStudy(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="flex flex-col items-center text-center mb-12">
            <Link href="/portfolio" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              {caseStudy.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">{caseStudy.title}</h1>
            <p className="text-muted-foreground max-w-[800px] mb-8">{caseStudy.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {caseStudy.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-muted/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-lg border border-primary/20">
            <Image
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              width={1200}
              height={600}
              className="object-cover"
            />
          </div>
        </section>

        {/* Project Details */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                  The <span className="text-primary">Challenge</span>
                </h2>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                  Our <span className="text-primary">Solution</span>
                </h2>
                <p className="text-muted-foreground">{caseStudy.solution}</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                  The <span className="text-primary">Results</span>
                </h2>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border border-primary/20 rounded-lg p-6 bg-background/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Client</h4>
                    <p className="font-medium">{caseStudy.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Duration</h4>
                    <p className="font-medium">{caseStudy.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Year</h4>
                    <p className="font-medium">{caseStudy.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                    <p className="font-medium">{caseStudy.category}</p>
                  </div>
                </div>
              </div>

              {caseStudy.testimonial && (
                <div className="border border-primary/20 rounded-lg p-6 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-medium">{caseStudy.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project Images */}
        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-center">
            Project <span className="text-primary">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg border border-primary/20 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project screenshot 1"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg border border-primary/20 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project screenshot 2"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg border border-primary/20 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project screenshot 3"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg border border-primary/20 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project screenshot 4"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Next Project */}
        {nextCaseStudy && (
          <section className="container py-12 md:py-24 lg:py-32 border-t">
            <div className="flex flex-col items-center text-center">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Next Project
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">{nextCaseStudy.title}</h2>
              <p className="text-muted-foreground max-w-[600px] mb-8">{nextCaseStudy.description}</p>
              <Button asChild>
                <Link href={`/portfolio/${nextCaseStudy.slug}`}>
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready for a <span className="text-primary">Similar Project</span>?
            </h2>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Let's discuss how we can help bring your vision to life with our affordable development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

