import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  FileCode,
  Globe,
  Layers,
  Layout,
  Lightbulb,
  Rocket,
  Server,
  ShoppingCart,
  Smartphone,
  Users,
  Zap,
  Clock,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ServiceStructuredData } from "@/components/structured-data"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Web, App Development & UI/UX Design | UQIDEV",
  description:
    "Explore our professional development services including web development, app development, and UI/UX design with rates starting at $35 USD.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ServiceStructuredData />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Starting at just $35/hour
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Expert <span className="text-primary">Development</span> Services
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                Professional development resources tailored to your needs at prices 40% below market rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started">
                    Get Started Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="#contact-form">Request a Quote</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No contracts, cancel anytime</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Projects delivered on time, every time</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">100% satisfaction or your money back</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">40% Cost Savings</h3>
                  <p className="text-sm text-muted-foreground">Compared to market rates</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Skilled developers at your service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Comprehensive <span className="text-primary">Development</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From web and mobile app development to UI/UX design, we offer end-to-end solutions to bring your vision to
              life.
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full max-w-3xl mx-auto mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="app">App Development</TabsTrigger>
              <TabsTrigger value="design">UI/UX Design</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Web Development
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Full-Stack <span className="text-primary">Web Development</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We build responsive, high-performance websites and web applications that deliver exceptional user
                experiences across all devices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Responsive Website Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Mobile-first designs that look great on any device, from smartphones to desktops.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">E-commerce Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom online stores with secure payment processing, inventory management, and order tracking.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <FileCode className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">CMS Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      WordPress, Shopify, and custom CMS solutions that make content management easy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Server className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">API Development</h3>
                    <p className="text-sm text-muted-foreground">
                      RESTful and GraphQL APIs that connect your web applications to third-party services and databases.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?service=web">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
              <Tabs defaultValue="frontend">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="space-y-4">
                  <h3 className="font-bold">Frontend Technologies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>React.js</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>Vue.js</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>Angular</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="backend" className="space-y-4">
                  <h3 className="font-bold">Backend Technologies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Server className="h-5 w-5 text-primary" />
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Server className="h-5 w-5 text-primary" />
                      <span>Express</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Server className="h-5 w-5 text-primary" />
                      <span>Python/Django</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Server className="h-5 w-5 text-primary" />
                      <span>PHP/Laravel</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Database className="h-5 w-5 text-primary" />
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Database className="h-5 w-5 text-primary" />
                      <span>PostgreSQL</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-8 p-4 bg-muted/30 rounded-md border border-primary/10">
                <h4 className="font-bold mb-2">Starting at</h4>
                <div className="text-4xl font-bold text-primary">
                  $35<span className="text-sm font-normal text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  For basic web development tasks. Complex projects are quoted based on requirements.
                </p>
                <div className="mt-4 text-sm text-primary">15% discount for long-term contracts</div>
                <Button className="w-full mt-4 gap-2" asChild>
                  <Link href="/get-started?service=web">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="aspect-square rounded-md bg-muted/50 flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-primary" />
                </div>
                <div className="aspect-square rounded-md bg-muted/50 flex items-center justify-center">
                  <Layout className="h-12 w-12 text-primary" />
                </div>
                <div className="aspect-square rounded-md bg-muted/50 flex items-center justify-center">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <div className="aspect-square rounded-md bg-muted/50 flex items-center justify-center">
                  <Database className="h-12 w-12 text-primary" />
                </div>
              </div>
              <Tabs defaultValue="native">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="native">Native Apps</TabsTrigger>
                  <TabsTrigger value="cross">Cross-Platform</TabsTrigger>
                </TabsList>
                <TabsContent value="native" className="space-y-4">
                  <h3 className="font-bold">Native App Development</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span>iOS (Swift/SwiftUI)</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span>Android (Kotlin/Java)</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="cross" className="space-y-4">
                  <h3 className="font-bold">Cross-Platform Development</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>React Native</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <Code className="h-5 w-5 text-primary" />
                      <span>Flutter</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-8 p-4 bg-muted/30 rounded-md border border-primary/10">
                <h4 className="font-bold mb-2">Starting at</h4>
                <div className="text-4xl font-bold text-primary">
                  $50<span className="text-sm font-normal text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  For app development tasks. Complete app projects are quoted based on complexity.
                </p>
                <div className="mt-4 text-sm text-primary">15% discount for long-term contracts</div>
                <Button className="w-full mt-4 gap-2" asChild>
                  <Link href="/get-started?service=app">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                App Development
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Native & Cross-Platform <span className="text-primary">Mobile Apps</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We develop high-performance mobile applications for iOS and Android that engage users and drive business
                growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Smartphone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">iOS & Android Apps</h3>
                    <p className="text-sm text-muted-foreground">
                      Native mobile applications built with Swift, SwiftUI, Kotlin, and Java for optimal performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Cross-Platform Development</h3>
                    <p className="text-sm text-muted-foreground">
                      React Native and Flutter apps that work seamlessly across multiple platforms from a single
                      codebase.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">App Maintenance & Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Ongoing support, bug fixes, and feature updates to keep your app running smoothly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Server className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Backend Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Connecting your mobile apps to APIs, databases, and third-party services for a complete solution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?service=app">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                UI/UX Design
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                User-Centered <span className="text-primary">Design</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We create intuitive, engaging user interfaces and experiences that delight users and achieve business
                goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Layout className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">User Interface Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Visually appealing interfaces that align with your brand and enhance user engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">User Experience Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Research-driven design that improves usability, accessibility, and user satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Wireframing & Prototyping</h3>
                    <p className="text-sm text-muted-foreground">
                      Low and high-fidelity prototypes that visualize your product before development begins.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Rocket className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Design Systems</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive design systems that ensure consistency across all your digital products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?service=design">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
              <div className="space-y-6 mb-8">
                <div className="space-y-2">
                  <h3 className="font-bold">Our Design Process</h3>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Research & Discovery</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Wireframing</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Visual Design</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">Prototyping</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">5</span>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50 w-full">
                      <span className="font-medium">User Testing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-muted/30 rounded-md border border-primary/10">
                <h4 className="font-bold mb-2">Starting at</h4>
                <div className="text-4xl font-bold text-primary">
                  $45<span className="text-sm font-normal text-muted-foreground">/hour</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  For UI/UX design tasks. Complete design projects are quoted based on scope.
                </p>
                <div className="mt-4 text-sm text-primary">15% discount for long-term contracts</div>
                <Button className="w-full mt-4 gap-2" asChild>
                  <Link href="/get-started?service=design">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project-Based Pricing */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Project-Based Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Fixed-Price <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prefer a predictable budget? Our project-based pricing gives you clarity and peace of mind with no
              surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Micro Project</CardTitle>
                <CardDescription>Small tasks and quick fixes</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">$500 - $1,500</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Timeframe: 1-2 weeks</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Landing Page</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Simple Form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Basic Styling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Mobile Responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Content Updates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" asChild>
                  <Link href="/get-started?project=micro">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary shadow-lg bg-background/50 backdrop-blur-sm relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle>Basic Website</CardTitle>
                <CardDescription>Simple informational website</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">$1,500 - $5,000</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Timeframe: 2-4 weeks</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>5-10 Pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Basic SEO Setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Contact Form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Content Management System</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" asChild>
                  <Link href="/get-started?project=basic-website">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>E-commerce Store</CardTitle>
                <CardDescription>Full-featured online store</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">$5,000 - $15,000</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Timeframe: 6-12 weeks</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Product Catalog</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Shopping Cart & Checkout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Payment Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Customer Accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Order Management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" asChild>
                  <Link href="/get-started?project=ecommerce">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
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
        </section>

        {/* Testimonials */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <TestimonialCarousel />
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="container py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Get in Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to <span className="text-primary">Get Started</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fill out the form and we'll get back to you within 24 hours with a free consultation and quote.
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
              <div className="mt-8 p-6 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm">
                <h3 className="font-bold mb-2">Our Guarantee</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with a 100% satisfaction guarantee. If you're not happy with our work, we'll
                  make it right or refund your money.
                </p>
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
              <ContactForm />
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
      </main>
    </div>
  )
}

