import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Code,
  Zap,
  ShieldCheck,
  LineChart,
  Layers,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development Services | UQIDEV",
  description:
    "Native and cross-platform mobile application development services for iOS and Android at competitive rates.",
  alternates: {
    canonical: "/services/app-development",
  },
}

export default function AppDevelopmentPage() {
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
                App Development
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Mobile <span className="text-primary">App Development</span> Services
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                We build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?service=app">
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
                <span>Starting at just $45/hour</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Native Apps</h3>
                  <p className="text-sm text-muted-foreground">iOS & Android expertise</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Cross-Platform</h3>
                  <p className="text-sm text-muted-foreground">Single codebase solutions</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">High Performance</h3>
                  <p className="text-sm text-muted-foreground">Fast & responsive apps</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Secure</h3>
                  <p className="text-sm text-muted-foreground">Built with best practices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our App Development Services */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Comprehensive <span className="text-primary">Mobile App</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we deliver full-cycle mobile application development for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Native App Development</CardTitle>
                <CardDescription>
                  High-performance iOS and Android apps with platform-specific features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build native applications using Swift/Objective-C for iOS and Kotlin/Java for Android that take full advantage of each platform's capabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cross-Platform Development</CardTitle>
                <CardDescription>
                  Cost-effective apps that work on both iOS and Android from a single codebase.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using React Native, Flutter, or other cross-platform frameworks, we build apps that look and feel native while maintaining development efficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>App Modernization</CardTitle>
                <CardDescription>
                  Upgrade and enhance existing mobile applications with modern features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We can transform your legacy mobile app into a modern application with improved UX, performance, and additional features.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="container py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-8 md:gap-12 items-start">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to <span className="text-primary">Build</span> Your Mobile App?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact our team today to discuss your app development requirements and get a custom quote.
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
              Start Your <span className="text-primary">Mobile App</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join businesses that have transformed their mobile presence with our app development services.
            </p>
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="/get-started?service=app">
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