"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PricingTable() {
  const [pricingType, setPricingType] = useState("hourly")

  const plans = [
    {
      name: "Basic",
      description: "Perfect for small projects and startups",
      price: "$35",
      priceUnit: "/hour",
      discountNote: "15% discount for long-term contracts",
      features: [
        "Frontend Development",
        "Backend Development",
        "Basic UI/UX Design",
        "Standard Support",
      ],
      notIncluded: ["Priority Support", "Advanced UI/UX Design", "Performance Optimization"],
      ctaText: "Get Started",
      ctaLink: "/get-started?plan=basic",
      popular: false,
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses",
      price: "$45",
      priceUnit: "/hour",
      discountNote: "15% discount for long-term contracts",
      features: [
        "Frontend Development",
        "Backend Development",
        "Advanced UI/UX Design",
        "Performance Optimization",
        "Priority Support",
      ],
      notIncluded: ["24/7 Support", "Custom Integrations"],
      ctaText: "Get Started",
      ctaLink: "/get-started?plan=pro",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale projects and organizations",
      price: "$60",
      priceUnit: "/hour",
      discountNote: "15% discount for long-term contracts",
      features: [
        "Frontend Development",
        "Backend Development",
        "Advanced UI/UX Design",
        "Performance Optimization",
        "24/7 Support",
        "Custom Integrations",
        "Dedicated Project Manager",
      ],
      notIncluded: [],
      ctaText: "Contact Us",
      ctaLink: "/contact?plan=enterprise",
      popular: false,
    },
  ]

  const projectPlans = [
    {
      name: "Micro Project",
      description: "Small tasks and quick fixes",
      price: "$500 - $1,500",
      timeframe: "1-2 weeks",
      features: ["Landing Page", "Simple Form", "Basic Styling", "Mobile Responsive", "Content Updates"],
      ctaText: "Get Started",
      ctaLink: "/get-started?project=micro",
      popular: false,
    },
    {
      name: "Basic Website",
      description: "Simple informational website",
      price: "$1,500 - $5,000",
      timeframe: "2-4 weeks",
      features: ["5-10 Pages", "Responsive Design", "Basic SEO Setup", "Contact Form", "Content Management System"],
      ctaText: "Get Started",
      ctaLink: "/get-started?project=basic-website",
      popular: false,
    },
    {
      name: "E-commerce Store",
      description: "Full-featured online store",
      price: "$5,000 - $15,000",
      timeframe: "6-12 weeks",
      features: [
        "Product Catalog",
        "Shopping Cart & Checkout",
        "Payment Processing",
        "Customer Accounts",
        "Order Management",
        "Inventory Management",
      ],
      ctaText: "Get Started",
      ctaLink: "/get-started?project=ecommerce",
      popular: true,
    },
  ]

  return (
    <div className="space-y-8">
      <Tabs defaultValue="hourly" className="w-full max-w-md mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="hourly" onClick={() => setPricingType("hourly")}>
            Hourly Rates
          </TabsTrigger>
          <TabsTrigger value="project" onClick={() => setPricingType("project")}>
            Project Based
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingType === "hourly"
          ? plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.priceUnit}</span>
                  </div>
                  <p className="text-sm text-primary mt-1">{plan.discountNote}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <X className="h-5 w-5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          : projectPlans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Timeframe: {plan.timeframe}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  )
}

