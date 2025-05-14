import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Building2,
  ShieldCheck,
  Server,
  Network,
  Users,
  FileCode,
  Layers,
  Settings,
  Database,
  LineChart
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernGridBackground from "@/components/modern-grid-background"
import PricingTable from "@/components/pricing-table"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise Solutions | UQIDEV",
  description:
    "Enterprise-grade development solutions focused on security, scalability, and system integration for established businesses.",
  alternates: {
    canonical: "/solutions/enterprise",
  },
}

export default function EnterpriseSolutionsPage() {
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
                For Enterprise
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                <span className="text-primary">Enterprise</span> Development Solutions
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                Robust, secure, and scalable custom development solutions designed to meet the complex needs of 
                established businesses and large organizations.
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
                <span>Custom enterprise solutions built to your specific requirements</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Security</h3>
                  <p className="text-sm text-muted-foreground">Enterprise-grade protection</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Scalability</h3>
                  <p className="text-sm text-muted-foreground">Built for massive scale</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Integration</h3>
                  <p className="text-sm text-muted-foreground">Seamless system connectivity</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Enterprise Teams</h3>
                  <p className="text-sm text-muted-foreground">Specialists & architects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Enterprise Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Why Enterprises <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our enterprise solutions are built to handle the complexity, scale, and security requirements that large organizations demand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enhanced Security</CardTitle>
                <CardDescription>
                  Robust security measures that protect your critical business data and systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our enterprise solutions incorporate industry-leading security practices, regular security audits, and compliance 
                  with relevant regulations to keep your data safe.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>System Integration</CardTitle>
                <CardDescription>
                  Seamless connection with your existing infrastructure and third-party services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop solutions that integrate with your existing enterprise systems, databases, and APIs, ensuring smooth 
                  data flow and process automation across your organization.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Scalable Architecture</CardTitle>
                <CardDescription>
                  Systems designed to handle massive scale with consistent performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our enterprise-grade architecture ensures your systems can handle high volume, maintain performance during peak loads, 
                  and scale efficiently as your business grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Our Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                <span className="text-primary">Comprehensive</span> Enterprise Services
              </h2>
              <p className="text-muted-foreground mb-8">
                We offer end-to-end development services tailored to enterprise requirements, with a focus on security, 
                scalability, and seamless integration with your existing systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Settings className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Legacy System Modernization</h3>
                    <p className="text-sm text-muted-foreground">
                      Update legacy systems with modern architecture, improved user experience, and enhanced security features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Custom Enterprise Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Bespoke software solutions designed to address your specific business challenges and processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <FileCode className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">API Development & Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect disparate systems with secure, well-documented APIs that facilitate seamless data exchange.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Database Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Improve database performance, security, and scalability to handle enterprise-level data requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Building2 className="h-5 w-5 text-primary mr-2" />
                  Enterprise Development Approach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Discovery & Requirements Analysis</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Architecture Design & Planning</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Development & System Integration</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Testing & Quality Assurance</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">5</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Deployment & Ongoing Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <LineChart className="h-5 w-5 text-primary mr-2" />
                  Key Technology Stack
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">Microservices</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">Kubernetes</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">AWS/Azure/GCP</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">CI/CD Pipelines</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">Serverless</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 text-center">
                    <span className="font-medium text-primary">Enterprise APIs</span>
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
              Enterprise Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Flexible <span className="text-primary">Engagement Models</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer various engagement models to accommodate different enterprise needs and project requirements.
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
              Enterprises That <span className="text-primary">Trust Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from enterprise clients who transformed their digital infrastructure with our solutions.
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
                Ready to <span className="text-primary">Transform</span> Your Enterprise?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact our team today to discuss your enterprise development needs and get a custom solution proposal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Free enterprise consultation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Custom solution proposal</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Enterprise-grade architecture planning</p>
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
              Elevate Your <span className="text-primary">Enterprise</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join enterprises that have transformed their digital infrastructure with our secure, scalable development solutions.
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