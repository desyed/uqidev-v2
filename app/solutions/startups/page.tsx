import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Zap,
  LineChart,
  Clock,
  ShieldCheck,
  Lightbulb,
  Users,
  Target,
  CreditCard,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Startup Solutions - Affordable Development Resources | UQIDEV",
  description:
    "Cost-effective development solutions for startups and early-stage companies, starting at just $35/hour.",
  alternates: {
    canonical: "/solutions/startups",
  },
}

export default function StartupsPage() {
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
                For Startups & Early-Stage Companies
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Launch Your <span className="text-primary">Startup</span> Without Breaking the Bank
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                We help startups build, launch, and scale with affordable development resources starting at just $35/hour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/get-started?solution=startup">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="#contact-form">Book a Free Consultation</Link>
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
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">MVP Development</h3>
                  <p className="text-sm text-muted-foreground">From idea to working product</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Cost Effective</h3>
                  <p className="text-sm text-muted-foreground">40% below market rates</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Scalable</h3>
                  <p className="text-sm text-muted-foreground">Built to grow with you</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Quick Launch</h3>
                  <p className="text-sm text-muted-foreground">Faster time to market</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Built for <span className="text-primary">Startups</span> by Startup Veterans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges that startups face, and our solutions are designed to address those challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Budget-Friendly</CardTitle>
                <CardDescription>
                  Development resources starting at just $35/hour, 40% less than market rates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We understand that startups operate with limited budgets. Our pricing is designed to help you make the most of your funding.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Rapid MVP Development</CardTitle>
                <CardDescription>
                  Go from idea to working product in weeks, not months.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our streamlined process helps you validate your concept quickly so you can start getting user feedback and attracting investors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border border-border/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Scalable Architecture</CardTitle>
                <CardDescription>
                  Built to grow with your business from day one.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build with scalability in mind, ensuring your application can handle growth without requiring a complete rebuild.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Startup Services */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Our Services for Startups
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                From <span className="text-primary">Idea</span> to Market-Ready Product
              </h2>
              <p className="text-muted-foreground mb-6">
                We offer a comprehensive suite of services designed specifically for the needs and budgets of early-stage companies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">MVP Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Quickly build and launch your minimum viable product to validate your idea and attract investors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Rapid Prototyping</h3>
                    <p className="text-sm text-muted-foreground">
                      Transform your ideas into interactive prototypes to test with users and refine your product.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Startup Packages</h3>
                    <p className="text-sm text-muted-foreground">
                      Fixed-price packages for landing pages, MVPs, and full product launches designed for startup budgets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Technical Co-Founding</h3>
                    <p className="text-sm text-muted-foreground">
                      Ongoing technical partnership to help non-technical founders build and scale their product.
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
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Startup Launch Package</h3>
              <p className="text-muted-foreground mb-6">Everything you need to get your startup off the ground:</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <span>MVP Development</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Included
                  </Badge>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <span>User Authentication</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Included
                  </Badge>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <span>Admin Dashboard</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Included
                  </Badge>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <span>Landing Page</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Included
                  </Badge>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <span>Data Storage</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Included
                  </Badge>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border/40">
                  <span>API Integration</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Included
                  </Badge>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl font-bold mb-2">Starting at just $4,999</p>
                <p className="text-sm text-muted-foreground mb-4">Complete in 4-6 weeks</p>
                <Button variant="outline" className="w-full gap-2 rounded-full" asChild>
                  <Link href="/contact?package=startup-launch">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="container py-12 md:py-24 lg:py-32 border-b ">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Startups That <span className="text-primary">Succeeded</span> With Our Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our startup clients have to say about working with us.
            </p>
          </div>
          <TestimonialCarousel />
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="container py-12 md:py-24 lg:py-32 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to <span className="text-primary">Launch</span> Your Startup?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book a free consultation with our team to discuss your startup idea and how we can help bring it to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Free 30-minute consultation</p>
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
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Start Building Your <span className="text-primary">Startup</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join dozens of successful startups who have built their products with UQIDEV's affordable development resources.
            </p>
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <Link href="/get-started?solution=startup">
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