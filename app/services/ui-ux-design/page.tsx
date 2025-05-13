import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Paintbrush,
  Layers,
  Users,
  MousePointer,
  LayoutGrid,
  LineChart,
  Eye,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UI/UX Design Services | UQIDEV",
  description:
    "User-centered UI/UX design services that create intuitive, engaging interfaces and experiences at competitive rates.",
  alternates: {
    canonical: "/services/ui-ux-design",
  },
}

export default function UiUxDesignPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Background Pattern */}
      <ModernGridBackground />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                UI/UX Design
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                User-Centered <span className="text-primary">UI/UX Design</span> Services
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                We design intuitive, engaging interfaces and experiences that delight users and drive business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?service=design">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="#contact-form">Request a Quote</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Starting at just $40/hour</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">User-Centered</h3>
                  <p className="text-sm text-muted-foreground">Focused on user needs</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Paintbrush className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Beautiful UI</h3>
                  <p className="text-sm text-muted-foreground">Stunning visual design</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <MousePointer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Intuitive UX</h3>
                  <p className="text-sm text-muted-foreground">Easy to use interfaces</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Data-Driven</h3>
                  <p className="text-sm text-muted-foreground">Based on real insights</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our UI/UX Design Services */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Comprehensive <span className="text-primary">UI/UX Design</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From user research to interactive prototypes, we provide end-to-end design services that transform ideas into exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>User Research & Strategy</CardTitle>
                <CardDescription>
                  Deep understanding of user needs, behaviors, and motivations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We conduct user interviews, create personas, and map user journeys to ensure your digital product truly addresses user needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <LayoutGrid className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>UI Design</CardTitle>
                <CardDescription>
                  Visually stunning interfaces that reflect your brand identity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our designers create beautiful, cohesive visual systems with attention to typography, color, layout, and micro-interactions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>UX Design & Testing</CardTitle>
                <CardDescription>
                  User-friendly experiences that maximize engagement and conversion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We design intuitive user flows, information architecture, and interactive prototypes, validated through usability testing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Design Process */}
        <section className="container py-12 md:py-24 lg:py-32 border-b ">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              How We <span className="text-primary">Design</span> Your Digital Product
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven design process ensures we create interfaces that look beautiful and work seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Discover</h3>
              <p className="text-muted-foreground">We conduct user research, competitive analysis, and stakeholder interviews to understand project goals and user needs.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Define</h3>
              <p className="text-muted-foreground">We create user personas, journey maps, and information architecture to define the optimal user experience.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-muted-foreground">We create wireframes, visual designs, and interactive prototypes that bring your product vision to life.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-bold mb-3">Deliver</h3>
              <p className="text-muted-foreground">We conduct usability testing, refine designs, and deliver final assets and design systems for implementation.</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="container py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to <span className="text-primary">Transform</span> Your User Experience?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact our design team today to discuss your UI/UX design requirements and get a custom quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Free initial consultation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Detailed project proposal</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Transparent pricing</p>
                </div>
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-4 sm:p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mb-12 rounded-2xl py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Start Your <span className="text-primary">Design Project</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join businesses that have transformed their digital products with our UI/UX design services.
            </p>
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="/get-started?service=design">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
} 