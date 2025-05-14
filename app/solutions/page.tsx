import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Rocket,
  Building2,
  Lightning,
  TrendingUp,
  LucideIcon,
  Speedometer,
  ShieldCheck,
  Scale,
  Users
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import ModernGridBackground from "@/components/modern-grid-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions for Startups & Enterprise | UQIDEV",
  description:
    "Custom development solutions for both fast-growing startups and established enterprises. Scalable, secure, and tailored to your specific needs.",
  alternates: {
    canonical: "/solutions",
  },
}

type SolutionCardProps = {
  title: string
  description: string
  icon: LucideIcon
  benefits: string[]
  href: string
  buttonText: string
}

function SolutionCard({ title, description, icon: Icon, benefits, href, buttonText }: SolutionCardProps) {
  return (
    <Card className="border-primary/20 bg-background/80 backdrop-blur-sm h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2 rounded-full" asChild>
          <Link href={href}>
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function SolutionsPage() {
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
                Tailored Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                <span className="text-primary">Solutions</span> for Every Business Stage
              </h1>
              <p className="text-muted-foreground max-w-[800px] mb-8 text-lg">
                Whether you're a startup looking to disrupt or an enterprise focused on optimization, 
                we offer specialized development solutions to address your unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/solutions/startups">
                    For Startups
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                  <Link href="/solutions/enterprise">
                    For Enterprise
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Customized to your specific business needs</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Startup Solutions</h3>
                  <p className="text-sm text-muted-foreground">Fast deployment, MVP focus</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Enterprise Solutions</h3>
                  <p className="text-sm text-muted-foreground">Scalable, secure infrastructure</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Lightning className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Rapid Development</h3>
                  <p className="text-sm text-muted-foreground">Agile methodologies</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">Scalable Systems</h3>
                  <p className="text-sm text-muted-foreground">Grow without limits</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Cards */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Choose the <span className="text-primary">Right Solution</span> for Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored development approaches for different business needs and stages of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SolutionCard
              title="For Startups"
              description="Accelerate your growth with focused development solutions designed for early-stage companies."
              icon={Rocket}
              benefits={[
                "Rapid MVP development to test your ideas",
                "Cost-effective solutions with flexible scaling",
                "Focus on essential features to reduce time-to-market",
                "Tech stack selection optimized for future growth",
                "Startup-friendly pricing and flexible engagement models"
              ]}
              href="/solutions/startups"
              buttonText="View Startup Solutions"
            />
            
            <SolutionCard
              title="For Enterprise"
              description="Enterprise-grade development solutions focused on security, scalability, and system integration."
              icon={Building2}
              benefits={[
                "Legacy system modernization and integration",
                "High-performance, scalable architecture",
                "Enhanced security and compliance features",
                "Custom workflow automation solutions",
                "Long-term maintenance and support options"
              ]}
              href="/solutions/enterprise"
              buttonText="View Enterprise Solutions"
            />
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Solution Comparison
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              How Our <span className="text-primary">Solutions Compare</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our solutions are optimized for different business stages and requirements.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">Startup</h3>
            </div>
            <div className="col-span-1 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">Enterprise</h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="col-span-1 flex items-center gap-2">
                <Speedometer className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">Development Speed</span>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium text-primary">Very Fast</span>
                <p className="text-xs text-muted-foreground">Optimized for quick delivery</p>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium">Methodical</span>
                <p className="text-xs text-muted-foreground">Focus on quality and planning</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="col-span-1 flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">Scalability</span>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium">Planned for Future</span>
                <p className="text-xs text-muted-foreground">Ready to scale as you grow</p>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium text-primary">Enterprise-grade</span>
                <p className="text-xs text-muted-foreground">Built for massive scale</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="col-span-1 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">Security Focus</span>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium">Standard</span>
                <p className="text-xs text-muted-foreground">Basic security needs</p>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium text-primary">Advanced</span>
                <p className="text-xs text-muted-foreground">Compliance and robust protection</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="col-span-1 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">Team Composition</span>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium text-primary">Lean & Agile</span>
                <p className="text-xs text-muted-foreground">2-5 specialists</p>
              </div>
              <div className="col-span-1 p-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-md text-center">
                <span className="font-medium">Comprehensive</span>
                <p className="text-xs text-muted-foreground">Full-stack teams with architects</p>
              </div>
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
                Ready to Discuss Your <span className="text-primary">Solution</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact our team today to discuss which solution is right for your business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Free strategy consultation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>Customized solution proposal</p>
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
              Find Your <span className="text-primary">Perfect Solution</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join businesses that have transformed their digital presence with our customized development solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                <Link href="/solutions/startups">
                  For Startups
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                <Link href="/solutions/enterprise">
                  For Enterprise
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 