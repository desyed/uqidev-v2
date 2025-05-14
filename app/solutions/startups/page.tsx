import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Clock,
  DollarSign,
  Scale,
  Users,
  CheckCheck,
  LineChart,
  BarChart,
  Zap,
  FlaskConical
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernGridBackground from "@/components/modern-grid-background"
import PricingTable from "@/components/pricing-table"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Startup Development Solutions | UQIDEV",
  description:
    "Accelerate your startup's growth with our rapid MVP development, cost-effective solutions, and scalable architecture.",
  alternates: {
    canonical: "/solutions/startups",
  },
}

export default function StartupSolutionsPage() {
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
                For Startups
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                <span className="text-primary">Startup</span> Development Solutions
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                Launch faster, iterate smarter, and scale confidently with our tailored development 
                solutions for startups and early-stage companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="#contact-form">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/portfolio">View Case Studies</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>MVP development in as little as 4 weeks</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Rapid MVP</h3>
                  <p className="text-sm text-muted-foreground">Launch quickly</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Cost-Effective</h3>
                  <p className="text-sm text-muted-foreground">Startup-friendly</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Scalable</h3>
                  <p className="text-sm text-muted-foreground">Grow with confidence</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Lean Team</h3>
                  <p className="text-sm text-muted-foreground">Dedicated experts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Startup Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Why Startups <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our development solutions are designed to help startups launch faster, optimize costs, and build for future growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Rapid MVP Development</CardTitle>
                <CardDescription>
                  Get to market quickly with a streamlined development process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We focus on building your core features first, helping you validate your idea and start gathering 
                  user feedback as quickly as possible.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cost-Effective Solutions</CardTitle>
                <CardDescription>
                  Maximize your runway with efficient development practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our phased approach and resource optimization helps you build what you need without unnecessary expenses, 
                  making your funding go further.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Scalable Architecture</CardTitle>
                <CardDescription>
                  Build today with tomorrow's growth in mind.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We design systems that can handle your current needs while being ready to scale as your user base grows, 
                  avoiding costly rewrites down the road.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Approach */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                <span className="text-primary">Lean & Agile</span> Development Methodology
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine lean startup principles with agile development practices to help you build, measure, and learn
                with minimal waste and maximum impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">2-Week Sprint Cycles</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular delivery of working software with clear milestones to track progress and maintain momentum.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <CheckCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Continuous Validation</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular check-ins and demos to ensure we're building the right features and making smart adjustments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <BarChart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Flexible Scope Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Adaptable prioritization to focus on features that deliver maximum value and user engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Transparent Communication</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear, frequent updates on progress, challenges, and decisions to keep everyone aligned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FlaskConical className="h-5 w-5 text-primary mr-2" />
                  Startup Development Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Discovery Workshop</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">MVP Scope Definition</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Rapid Development</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Launch & Feedback</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">5</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Iterate & Scale</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <LineChart className="h-5 w-5 text-primary mr-2" />
                  Startup Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">4-8 Week MVP</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">30%+ Cost Savings</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">70+ Startups</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">90% On-time</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">$20M+ Raised</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">15+ Acquisitions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Models */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Startup Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Flexible <span className="text-primary">Engagement Options</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer various engagement models to fit your startup's needs, timeline, and budget.
            </p>
          </div>

          <PricingTable />
        </section>

        {/* Testimonials */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Startups That <span className="text-primary">Trust Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from founders who launched their startups with our development solutions.
            </p>
          </div>
          <TestimonialCarousel />
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="container py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-8 md:gap-12 items-start">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to <span className="text-primary">Launch</span> Your Startup?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact our team today to discuss your startup idea and get a free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Free startup consultation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Project scope estimation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Technology stack recommendation</p>
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
              Launch Your <span className="text-primary">Startup</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join startups that have successfully launched and scaled with our rapid development solutions.
            </p>
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="#contact-form">
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