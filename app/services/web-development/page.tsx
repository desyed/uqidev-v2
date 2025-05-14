import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Code,
  Server,
  ShoppingCart,
  Database,
  LineChart,
  Layout,
  FileCode,
  Settings,
  Layers,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services | UQIDEV",
  description:
    "Full-stack web development services, including responsive websites, web applications, and e-commerce solutions at competitive rates.",
  alternates: {
    canonical: "/services/web-development",
  },
}

export default function WebDevelopmentPage() {
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
                Web Development
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Full-Stack <span className="text-primary">Web Development</span> Services
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                We build responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?service=web">
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
                <span>Starting at just $35/hour</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Responsive</h3>
                  <p className="text-sm text-muted-foreground">Adapts to all devices</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Full-Stack</h3>
                  <p className="text-sm text-muted-foreground">Front & back-end expertise</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Optimized</h3>
                  <p className="text-sm text-muted-foreground">Fast-loading performance</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Scalable</h3>
                  <p className="text-sm text-muted-foreground">Built to grow with you</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Web Development Services */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Comprehensive <span className="text-primary">Web Development</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple landing pages to complex web applications, we deliver custom web solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Responsive Websites</CardTitle>
                <CardDescription>
                  Mobile-first designs that look great on all devices and screen sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build responsive websites that adapt seamlessly to any device, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Web Applications</CardTitle>
                <CardDescription>
                  Custom web applications with robust functionality and intuitive interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From dashboards to productivity tools, we develop feature-rich web applications tailored to your specific business requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>E-commerce Solutions</CardTitle>
                <CardDescription>
                  Full-featured online stores with secure payment processing and inventory management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop custom e-commerce solutions that help you sell products online with features like secure checkout, product catalogs, and inventory tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies & Tools */}
        <section className="container py-12 md:py-24 lg:py-32 border-b ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Technologies & Tools
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Modern <span className="text-primary">Technology Stack</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We utilize the latest web technologies and frameworks to build fast, scalable, and maintainable web solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Layout className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Frontend Technologies</h3>
                    <p className="text-sm text-muted-foreground">
                      React, Next.js, Vue.js, Angular, HTML5, CSS3/SASS, Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Server className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Backend Technologies</h3>
                    <p className="text-sm text-muted-foreground">
                      Node.js, Express, Django, Laravel, Ruby on Rails, .NET
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Database Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      MongoDB, MySQL, PostgreSQL, Firebase, Redis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <FileCode className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">CMS Platforms</h3>
                    <p className="text-sm text-muted-foreground">
                      WordPress, Shopify, WooCommerce, Contentful, Strapi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
                <h3 className="font-bold mb-2">React</h3>
                <p className="text-sm text-muted-foreground">Modern UI development</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
                <h3 className="font-bold mb-2">Node.js</h3>
                <p className="text-sm text-muted-foreground">Scalable backends</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
                <h3 className="font-bold mb-2">Next.js</h3>
                <p className="text-sm text-muted-foreground">SEO-friendly React</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
                <h3 className="font-bold mb-2">MongoDB</h3>
                <p className="text-sm text-muted-foreground">Flexible data storage</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
                <h3 className="font-bold mb-2">TypeScript</h3>
                <p className="text-sm text-muted-foreground">Type-safe JavaScript</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center">
                <h3 className="font-bold mb-2">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground">Utility-first styling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Development Process */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              How We <span className="text-primary">Build</span> Your Web Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured development process ensures on-time delivery of high-quality web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground">We analyze your requirements, target audience, and project goals to create a detailed project plan.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-muted-foreground">We create wireframes and visual designs that align with your brand and meet user experience best practices.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-muted-foreground">Our developers build your solution using clean, efficient code and the most appropriate technologies.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-bold mb-3">Launch</h3>
              <p className="text-muted-foreground">After thorough testing, we deploy your web solution and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </section>

        {/* Pricing Options */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Web Development <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing options that accommodate different project needs and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Hourly Rate Model</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$35-60</span>
                <span className="text-muted-foreground">/hour</span>
              </div>
              <p className="text-muted-foreground mb-6">Ideal for ongoing development work or projects with evolving requirements.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Frontend Development: $35-45/hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Backend Development: $40-50/hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Full-Stack Development: $45-60/hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>15% discount for long-term contracts</span>
                </li>
              </ul>
              <Button className="w-full rounded-full gap-2" asChild>
                <Link href="/get-started?service=web&model=hourly">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Project-Based Pricing</h3>
              <p className="text-muted-foreground mb-6">Fixed price for web projects with clearly defined requirements and deliverables.</p>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-border/40">
                  <h4 className="font-bold mb-1">Landing Page</h4>
                  <p className="text-sm text-muted-foreground mb-2">Single page website for product or service promotion</p>
                  <p className="font-bold">Starting at $1,000</p>
                </div>
                <div className="pb-4 border-b border-border/40">
                  <h4 className="font-bold mb-1">Business Website</h4>
                  <p className="text-sm text-muted-foreground mb-2">5-10 page website with content management system</p>
                  <p className="font-bold">Starting at $3,000</p>
                </div>
                <div className="pb-4 border-b border-border/40">
                  <h4 className="font-bold mb-1">E-commerce Store</h4>
                  <p className="text-sm text-muted-foreground mb-2">Online store with product catalog and payment processing</p>
                  <p className="font-bold">Starting at $5,000</p>
                </div>
                <div className="pb-4 border-b border-border/40">
                  <h4 className="font-bold mb-1">Custom Web Application</h4>
                  <p className="text-sm text-muted-foreground mb-2">Bespoke web application with complex functionality</p>
                  <p className="font-bold">Starting at $8,000</p>
                </div>
              </div>
              <Button className="w-full rounded-full gap-2" asChild>
                <Link href="/get-started?service=web&model=project">
                  Get Custom Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Recent <span className="text-primary">Web Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent web development projects delivered for clients across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-primary/40" />
                </div>
                <CardTitle>E-commerce Platform for Fashion Retailer</CardTitle>
                <CardDescription>
                  Custom Shopify development with unique product filtering system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built a custom e-commerce solution with advanced filtering, product recommendations, and seamless checkout experience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/portfolio/fashion-ecommerce">
                    View Case Study
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Layers className="h-12 w-12 text-primary/40" />
                </div>
                <CardTitle>SaaS Dashboard for Healthcare Provider</CardTitle>
                <CardDescription>
                  React-based analytics dashboard with real-time data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed a comprehensive dashboard for healthcare providers to monitor patient data, appointments, and financial metrics.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/portfolio/healthcare-dashboard">
                    View Case Study
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Settings className="h-12 w-12 text-primary/40" />
                </div>
                <CardTitle>Fintech API Integration System</CardTitle>
                <CardDescription>
                  Node.js backend with multiple financial service integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Created a secure backend system to integrate with multiple financial APIs, enabling real-time transaction processing.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/portfolio/fintech-integration">
                    View Case Study
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
              <Link href="/portfolio?category=web">
                View All Web Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-12 md:py-24 lg:py-32 border-b ">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Client Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed their online presence with our web development services.
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
                Ready to <span className="text-primary">Build</span> Your Web Project?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact our team today to discuss your web development requirements and get a custom quote.
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
              Start Your <span className="text-primary">Web Project</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied clients who have transformed their digital presence with our web development services.
            </p>
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="/get-started?service=web">
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