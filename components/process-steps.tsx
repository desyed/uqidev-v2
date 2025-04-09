import { Card, CardContent } from "@/components/ui/card"
import { FileText, MessageSquare, Code, CheckCircle } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "1. Consultation",
      description: "We start with a free consultation to understand your project requirements and goals.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "2. Proposal",
      description: "We provide a detailed proposal with timeline, cost estimate, and project scope.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "3. Development",
      description: "Our team works on your project with regular updates and milestone deliveries.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "4. Delivery",
      description: "We deliver the final product with documentation and support to ensure your success.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <Card key={index} className="border border-border/40 bg-background/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

