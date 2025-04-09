import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Building,
  ShieldCheck,
  Database,
  Globe,
  Server,
  Users,
  LineChart,
  Layers,
  Zap,
  Clock,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise Solutions - Scalable Development Resources | UQIDEV",
  description:
    "Enterprise-grade development solutions for large organizations with superior quality at 40% below market rates.",
  alternates: {
    canonical: "/solutions/enterprise",
  },
}

export default function EnterprisePage() {
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
                Enterprise Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                <span className="text-primary">Enterprise-Grade</span> Development at SMB Prices
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                Achieve your digital transformation goals with our enterprise-level development resources at rates 40% below market average.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?solution=enterprise">
                    Request a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="#contact-form">Get Custom Pricing</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Enterprise SLAs available</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Scalable</h3>
                  <p className="text-sm text-muted-foreground">Built for enterprise needs</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Secure</h3>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Cost-Effective</h3>
                  <p className="text-sm text-muted-foreground">40% below market rates</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Dedicated Team</h3>
                  <p className="text-sm text-muted-foreground">Expert resources</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Advantages */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Enterprise Advantages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Why Enterprises <span className="text-primary">Choose</span> UQIDEV
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver enterprise-quality solutions at a fraction of the cost, without compromising on security, scalability, or support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cost Optimization</CardTitle>
                <CardDescription>
                  40% cost savings compared to traditional enterprise service providers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our efficient delivery model allows us to provide enterprise-grade development at significantly lower costs, helping you optimize your IT budget.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Robust security practices aligned with industry standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement comprehensive security measures throughout the development lifecycle, ensuring your data and applications remain protected.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Scalability</CardTitle>
                <CardDescription>
                  Architecture designed to support high loads and enterprise-scale operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our solutions are built to scale with your business, handling millions of users and vast amounts of data without performance degradation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enterprise Services */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Enterprise Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Comprehensive <span className="text-primary">Enterprise</span> Solutions
              </h2>
              <p className="text-muted-foreground mb-6">
                We offer a full suite of enterprise development services to support your digital transformation initiatives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Enterprise Web Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Scalable, secure web applications designed for mission-critical business operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Legacy System Modernization</h3>
                    <p className="text-sm text-muted-foreground">
                      Transform outdated systems into modern, cloud-based applications without disrupting operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Server className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Custom Enterprise Software</h3>
                    <p className="text-sm text-muted-foreground">
                      Bespoke software solutions tailored to your specific business processes and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Enterprise Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly connect your applications, data, and systems for improved efficiency and visibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?solution=enterprise">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Enterprise Engagement Models</h3>
              <p className="text-muted-foreground mb-6">Choose the engagement model that works best for your organization:</p>
              <div className="space-y-6">
                <div className="p-4 border border-border/40 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Dedicated Teams</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    A full-time team of developers exclusively assigned to your projects, working as an extension of your in-house team.
                  </p>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Most Popular for Enterprise
                  </Badge>
                </div>
                <div className="p-4 border border-border/40 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Project-Based</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fixed-scope, fixed-price projects with clearly defined deliverables and timelines.
                  </p>
                </div>
                <div className="p-4 border border-border/40 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Staff Augmentation</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supplement your existing team with our skilled developers on an hourly basis.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full gap-2 rounded-full" asChild>
                  <Link href="/contact?type=enterprise">
                    Discuss Your Requirements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Technology Stack */}
        <section className="container py-12 md:py-24 lg:py-32 border-b bg-muted/30">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Enterprise-Grade <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We utilize proven, scalable technologies that meet the rigorous demands of enterprise applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-sm text-muted-foreground">AWS, Azure, Google Cloud</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className="text-sm text-muted-foreground">React, Angular, Vue.js</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Backend</h3>
              <p className="text-sm text-muted-foreground">Java, .NET, Node.js, Python</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Databases</h3>
              <p className="text-sm text-muted-foreground">SQL, NoSQL, Data Warehousing</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">DevOps</h3>
              <p className="text-sm text-muted-foreground">CI/CD, Docker, Kubernetes</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Security</h3>
              <p className="text-sm text-muted-foreground">Identity Management, OAuth, HTTPS</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Integration</h3>
              <p className="text-sm text-muted-foreground">REST APIs, GraphQL, Microservices</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
              <h3 className="font-bold mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">BI Tools, Data Visualization</p>
            </div>
          </div>
        </section>

        {/* Enterprise Success Stories */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Trusted by <span className="text-primary">Leading</span> Organizations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how other enterprises have transformed their digital landscape while reducing development costs.
            </p>
          </div>
          <TestimonialCarousel />
        </section>

        {/* Enterprise SLAs */}
        <section className="container py-12 md:py-24 lg:py-32 border-b bg-muted/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Service Level Agreements
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Enterprise-Grade <span className="text-primary">SLAs</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We offer robust Service Level Agreements tailored to enterprise needs, ensuring reliability and accountability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">99.9% Uptime Guarantee</p>
                    <p className="text-sm text-muted-foreground">For hosted applications and services</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Rapid Response Times</p>
                    <p className="text-sm text-muted-foreground">4-hour response for critical issues</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">24/7 Support Available</p>
                    <p className="text-sm text-muted-foreground">Round-the-clock monitoring and support</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Regular Reporting</p>
                    <p className="text-sm text-muted-foreground">Detailed performance and progress reports</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="gap-2 rounded-full px-8" asChild>
                  <Link href="/contact?inquiry=enterprise-sla">
                    Request SLA Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <CardTitle>Enterprise Pricing Highlights</CardTitle>
                <CardDescription>
                  Quality enterprise development at a fraction of the cost
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border/40">
                  <span>Standard Enterprise Rate</span>
                  <span className="font-bold">$60/hour</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/40">
                  <span>Long-term Contracts</span>
                  <span className="font-bold text-primary">15% Discount</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/40">
                  <span>Dedicated Team Model</span>
                  <span className="font-bold text-primary">20% Discount</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/40">
                  <span>Volume Pricing</span>
                  <span className="font-bold">Custom</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Our enterprise pricing is transparent and flexible, designed to adapt to your specific needs and budget constraints.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2 rounded-full" asChild>
                  <Link href="/contact?type=enterprise-pricing">
                    Get Custom Pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="container py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to <span className="text-primary">Transform</span> Your Enterprise?
              </h2>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our enterprise solutions team to discuss your requirements and how we can help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Detailed needs assessment</p>
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
                  <p>Transparent pricing breakdown</p>
                </div>
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Enterprise Solutions at <span className="text-primary">Unbeatable Value</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join industry leaders who have optimized their development costs while maintaining enterprise-grade quality.
            </p>
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="/get-started?solution=enterprise">
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
} 