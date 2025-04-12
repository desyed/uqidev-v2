import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Code, Globe, Layers, Shield, Clock, Users, Zap, Star } from "lucide-react"
import Link from "next/link"
import AnnouncementBanner from "@/components/announcement-banner"
import ClientLogos from "@/components/client-logos"
import FeatureCard from "@/components/feature-card"
import ModernGridBackground from "@/components/modern-grid-background"
import PricingTable from "@/components/pricing-table"
import ProcessSteps from "@/components/process-steps"
import TestimonialCarousel from "@/components/testimonial-carousel"

import FloatingCTA from "@/components/floating-cta"
import FAQAccordion from "@/components/faq-accordion"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Background Pattern */}
      <ModernGridBackground />

      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Hero Section with Clear Value Proposition */}
      <section className="relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-4" variant="outline">
                Starting at just $35/hour
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Affordable Development Resources <span className="text-primary">Without Compromise</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                UQIDEV provides expert development resources at 40% less than market rates, helping businesses build,
                scale, and optimize their digital presence without breaking the bank.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started">
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No contracts, cancel anytime</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 border border-border/40 rounded-lg p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                </div>
                <blockquote className="text-lg font-medium mb-4">
                  "UQIDEV delivered our project 2 weeks ahead of schedule and saved us over $15,000 compared to other
                  quotes."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    <Image className="rounded-full" alt="frantz" src="/frantzarty.jpg" width={100} height={100} />
                  </div>
                  <div>
                    <p className="font-medium">Frantz Arty</p>
                    <p className="text-sm text-muted-foreground">Angel Investor/Founder at <a className="text-primary" href="https://www.videogift.com/">VideoGift</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t border-border/40 vercel-section py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">On-time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Dedicated Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-t border-border/40 vercel-section py-12">
        <div className="container mx-auto px-4">
          <p className="mb-8 text-center text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by innovative companies worldwide
          </p>
          <ClientLogos />
        </div>
      </section>

      {/* How It Works - Process Steps */}
      <section className="border-t border-border/40 vercel-section py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple 4-step process makes it easy to get started and ensures your project is delivered on time and
              within budget.
            </p>
          </div>
          <ProcessSteps />
          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="/get-started">
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with Social Proof */}
      <section className="border-t border-border/40 vercel-section py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                <span className="text-primary">Development costs</span> reduced by 40% with our resources.
              </h2>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-4xl font-bold">98%</p>
                  <p className="text-muted-foreground">Client satisfaction rate</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-4xl font-bold">250+</p>
                  <p className="text-muted-foreground">Projects completed</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-4xl font-bold">40%</p>
                  <p className="text-muted-foreground">Average cost savings</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-4xl font-bold">24/7</p>
                  <p className="text-muted-foreground">Support available</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-6 text-lg text-muted-foreground">
                Our clients have seen significant cost savings while maintaining high-quality development standards.
                With rates starting at just $35/hour, we provide affordable expertise without compromising on quality.
              </p>
              <div className="flex items-center gap-4 mb-6 p-4 border border-border/40 rounded-lg bg-background/80">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Average time to market reduced by 35%</p>
                  <p className="text-sm text-muted-foreground">Based on client feedback from 2023-2024</p>
                </div>
              </div>
              <Button variant="link" className="group gap-2 p-0 text-primary" asChild>
                <Link href="/services">
                  Learn about our pricing
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-t border-border/40 vercel-section py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your needs. All plans include our quality guarantee and dedicated
              support.
            </p>
          </div> */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Options</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We offer both hourly and project-based pricing to accommodate different needs and project types.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Hourly Rates</h4>
                <p className="text-muted-foreground mb-4">
                  Best for ongoing development, maintenance, and projects with evolving requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Maximum flexibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Scale up or down as needed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>15% discount for long-term contracts</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Project-Based</h4>
                <p className="text-muted-foreground mb-4">
                  Best for well-defined projects with clear requirements and deliverables.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Starting from just $500</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Fixed cost, no surprises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Clear project scope and timeline</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
                <Link href="/contact">
                  Get a custom quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need a custom solution?</p>
            <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
              <Link href="/contact">
                Contact us for custom pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/40 vercel-section py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to build digital products
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive services cover all aspects of digital product development, from design to deployment.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Web Development"
              description="Full-stack development services for responsive, high-performance websites and web applications."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="App Development"
              description="Native and cross-platform mobile applications for iOS and Android platforms."
            />
            <FeatureCard
              icon={<Layers className="h-6 w-6" />}
              title="UI/UX Design"
              description="User-centered design that creates intuitive, engaging interfaces and experiences."
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
              <Link href="/services">
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="border-t border-border/40 vercel-section py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/40 vercel-section py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and pricing.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
              <Link href="/contact">
                Contact our support team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="border-t border-border/40 vercel-section py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to start your project?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get in touch with our team to discuss your requirements and how we can help bring your vision to life.
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
                  <p>No-obligation quote</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Response within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 vercel-section py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Start building with UQIDEV today</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Join hundreds of satisfied clients who have transformed their digital presence with our affordable
            development resources.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="/get-started">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  )
}

