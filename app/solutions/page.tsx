import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Building,
  Users,
  LineChart,
  ShieldCheck,
  Clock,
  Zap,
  Briefcase,
  Lightbulb,
  Target,
  Layers,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Solutions - Tailored Development for Your Industry | UQIDEV",
  description:
    "Discover our tailored development solutions for startups, enterprises, and specific industries with rates starting at $35 USD.",
  alternates: {
    canonical: "/solutions",
  },
}

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-mono">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Tailored Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Custom <span className="text-primary">Solutions</span> for Your Business
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                We deliver tailored development solutions designed specifically for your industry and business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="#business-solutions">
                    Explore Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="#contact-form">Request a Consultation</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Solutions starting at just $35/hour</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Enterprise</h3>
                  <p className="text-sm text-muted-foreground">Scalable solutions for large organizations</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Startups</h3>
                  <p className="text-sm text-muted-foreground">Affordable solutions for growing businesses</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Security</h3>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security for all solutions</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Scalability</h3>
                  <p className="text-sm text-muted-foreground">Solutions that grow with your business</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Solutions */}
        <section id="business-solutions" className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Business Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Solutions for <span className="text-primary">Every Business</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a startup or an enterprise, we have tailored solutions to meet your specific needs.
            </p>
          </div>

          <Tabs defaultValue="startup" className="w-full max-w-3xl mx-auto mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="startup">For Startups</TabsTrigger>
              <TabsTrigger value="enterprise">For Enterprise</TabsTrigger>
            </TabsList>
            <TabsContent value="startup" className="mt-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Startup Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Cost-effective development solutions designed specifically for early-stage companies and startups.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <Rocket className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">MVP Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Quickly build and launch your minimum viable product to validate your idea and attract
                          investors.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Rapid Prototyping</h4>
                        <p className="text-sm text-muted-foreground">
                          Transform your ideas into interactive prototypes to test with users and refine your product.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <LineChart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Scalable Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Build on a foundation that can grow with your business, from first users to millions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Flexible Engagement</h4>
                        <p className="text-sm text-muted-foreground">
                          Work with us on an hourly basis or fixed-price projects to match your budget constraints.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="gap-2 rounded-full px-8" asChild>
                      <Link href="/get-started?solution=startup">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-6">Startup Success Package</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>MVP Development</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Included
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>User Authentication</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Included
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Basic Admin Dashboard</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Included
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Integration</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Included
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Responsive Design</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Included
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-muted/30 rounded-md border border-primary/10">
                    <h4 className="font-bold mb-2">Starting at</h4>
                    <div className="text-4xl font-bold text-primary">$5,000</div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Complete MVP development with all essential features to launch your startup.
                    </p>
                    <Button className="w-full mt-4 gap-2" asChild>
                      <Link href="/get-started?solution=startup-package">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="enterprise" className="mt-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Scalable, secure, and robust development solutions for large organizations and enterprises.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <Building className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Custom Enterprise Applications</h4>
                        <p className="text-sm text-muted-foreground">
                          Tailor-made solutions designed to address your specific business challenges and workflows.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Enterprise-Grade Security</h4>
                        <p className="text-sm text-muted-foreground">
                          Robust security measures to protect your data and comply with industry regulations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <Layers className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">System Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Seamlessly connect your new solutions with existing systems and third-party services.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Dedicated Team</h4>
                        <p className="text-sm text-muted-foreground">
                          A dedicated development team that understands your business and works as an extension of your
                          staff.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="gap-2 rounded-full px-8" asChild>
                      <Link href="/get-started?solution=enterprise">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-6">Enterprise Advantages</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Cost Efficiency</h4>
                        <p className="text-sm text-muted-foreground">
                          Save up to 40% compared to traditional development agencies while maintaining enterprise
                          quality.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Flexible Scaling</h4>
                        <p className="text-sm text-muted-foreground">
                          Quickly scale your development team up or down based on project needs and timelines.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Dedicated Project Manager</h4>
                        <p className="text-sm text-muted-foreground">
                          A single point of contact to ensure smooth communication and project delivery.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Custom SLAs</h4>
                        <p className="text-sm text-muted-foreground">
                          Service level agreements tailored to your specific business requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="w-full gap-2" asChild>
                      <Link href="/contact?solution=enterprise">
                        Request Enterprise Consultation
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Industry Solutions */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Industry Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Specialized for <span className="text-primary">Your Industry</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of different industries and offer tailored solutions to address them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>Solutions for online retailers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Custom shopping experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Customer analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" asChild>
                  <Link href="/get-started?industry=ecommerce">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary shadow-lg bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SaaS Platforms</CardTitle>
                <CardDescription>Solutions for software companies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Scalable architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Multi-tenant systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Subscription management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>User analytics & reporting</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" asChild>
                  <Link href="/get-started?industry=saas">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Healthcare</CardTitle>
                <CardDescription>Solutions for healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>HIPAA-compliant systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Patient portals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Electronic health records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Telemedicine platforms</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" asChild>
                  <Link href="/get-started?industry=healthcare">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Don't see your industry? We work with many more.</p>
            <Button variant="outline" className="gap-2 rounded-full px-8" asChild>
              <Link href="/contact">
                Contact us for custom industry solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Case Studies */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Real <span className="text-primary">Results</span> for Real Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our solutions have helped businesses like yours achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce Platform Case Study"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">E-commerce</Badge>
              </div>
              <CardHeader>
                <CardTitle>Modern E-commerce Platform</CardTitle>
                <CardDescription>40% increase in online sales within 3 months</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We built a custom e-commerce solution for TechStart Inc. that transformed their online presence and
                  dramatically improved their sales performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-muted/50">
                    React
                  </Badge>
                  <Badge variant="outline" className="bg-muted/50">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="bg-muted/50">
                    Stripe
                  </Badge>
                  <Badge variant="outline" className="bg-muted/50">
                    Tailwind CSS
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <Link href="/portfolio/modern-ecommerce-platform">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="SaaS Dashboard Case Study"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">SaaS</Badge>
              </div>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>92% user satisfaction rating post-implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We designed an intuitive analytics dashboard for DataViz Solutions that made complex data accessible
                  and actionable for their business users.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-muted/50">
                    UI Design
                  </Badge>
                  <Badge variant="outline" className="bg-muted/50">
                    Data Visualization
                  </Badge>
                  <Badge variant="outline" className="bg-muted/50">
                    User Testing
                  </Badge>
                  <Badge variant="outline" className="bg-muted/50">
                    Design Systems
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <Link href="/portfolio/analytics-dashboard">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="gap-2 rounded-full px-8" asChild>
              <Link href="/portfolio">
                View All Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Client Testimonials
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
                Ready for a <span className="text-primary">Custom Solution</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Let's discuss how we can create a tailored solution for your specific business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Free consultation and needs assessment</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Detailed proposal with timeline and cost estimate</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>No obligation to proceed after consultation</p>
                </div>
              </div>
              <div className="mt-8 p-6 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm">
                <h3 className="font-bold mb-2">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering high-quality solutions that meet your specific needs and exceed your
                  expectations, all at rates 40% below market average.
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Transform your business with UQIDEV</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Join hundreds of satisfied clients who have accelerated their growth with our affordable, high-quality
              development solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                <Link href="/get-started">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

