"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, FileCheck, Rocket, CheckCircle, AlertCircle } from "lucide-react"
import { initEmailJS, sendEmail } from "@/components/email-service"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GetStartedPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "web",
    budget: "",
    timeline: "",
    description: "",
    agreeToTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to the terms",
        description: "You must agree to the terms and conditions to submit the form.",
        variant: "destructive"
      })
      return
    }

    try {
      setIsSubmitting(true)
      setFormStatus("idle")
      
      // Initialize EmailJS (only needed once, but safe to call multiple times)
      initEmailJS()
      
      // Prepare email parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        subject: `New Project Request: ${formData.projectType}`,
        message: `
Project Details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Company: ${formData.company || 'N/A'}
- Project Type: ${formData.projectType}
- Budget: ${formData.budget}
- Timeline: ${formData.timeline}
- Description: ${formData.description}
        `
      }
      
      // Send email
      await sendEmail(templateParams)
      
      // Success handling
      setFormStatus("success")
      toast({
        title: "Request submitted!",
        description: "We'll get back to you within 24 hours.",
      })
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "web",
        budget: "",
        timeline: "",
        description: "",
        agreeToTerms: false
      })
      
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Get Started
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
              Start Your <span className="text-primary">Project</span>
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Tell us about your project and we'll help you bring your vision to life with our affordable development
              services.
            </p>
          </div>
        </section>

        {/* Project Form Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Tell Us About Your <span className="text-primary">Project</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below to get started. We'll review your requirements and get back to you within 24
                hours.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      We respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Detailed Quote</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide a comprehensive quote based on your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Fast Onboarding</h3>
                    <p className="text-sm text-muted-foreground">
                      We can start working on your project as soon as you're ready to proceed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
              {formStatus === "success" && (
                <Alert className="mb-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle>Request Submitted</AlertTitle>
                  <AlertDescription>
                    We've received your project details and will get back to you within 24 hours.
                  </AlertDescription>
                </Alert>
              )}
              
              {formStatus === "error" && (
                <Alert className="mb-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <AlertTitle>Something went wrong</AlertTitle>
                  <AlertDescription>
                    There was an error submitting your request. Please try again or contact us directly.
                  </AlertDescription>
                </Alert>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project Details</h3>
                  <p className="text-sm text-muted-foreground">Tell us what you need help with</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="border-primary/20 bg-background" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="border-primary/20 bg-background" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-primary/20 bg-background"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company (Optional)
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Your Company" 
                    className="border-primary/20 bg-background" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Type</label>
                  <RadioGroup value={formData.projectType} onValueChange={handleRadioChange}>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="web" id="web" />
                        <Label htmlFor="web">Web Development</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="app" id="app" />
                        <Label htmlFor="app">App Development</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="design" id="design" />
                        <Label htmlFor="design">UI/UX Design</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Budget Range</label>
                  <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                    <SelectTrigger className="border-primary/20 bg-background">
                      <SelectValue placeholder="Select a budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">$500 - $1,000</SelectItem>
                      <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                      <SelectItem value="large">$5,000 - $10,000</SelectItem>
                      <SelectItem value="enterprise">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium">
                    Timeline
                  </label>
                  <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                    <SelectTrigger className="border-primary/20 bg-background">
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                      <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                      <SelectItem value="relaxed">Flexible (1-3 months)</SelectItem>
                      <SelectItem value="planning">Just planning ahead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Project Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[150px] border-primary/20 bg-background"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-[800px]">
              Our streamlined process ensures your project is completed efficiently and to your satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary text-xl">1</span>
                </div>
                <CardTitle>Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We start by understanding your requirements, goals, and vision for the project through a detailed
                  consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary text-xl">2</span>
                </div>
                <CardTitle>Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We create a detailed project plan including timeline, milestones, and deliverables based on your
                  requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary text-xl">3</span>
                </div>
                <CardTitle>Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our team works on implementing your project with regular updates and opportunities for feedback.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary text-xl">4</span>
                </div>
                <CardTitle>Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We deliver the final product after thorough testing and quality assurance, ensuring it meets all
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-[800px]">
              Find answers to common questions about our services, pricing, and process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>What happens after I submit my request?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  After you submit your request, our team will review your requirements and get back to you within 24
                  hours. We'll schedule an initial consultation to discuss your project in detail and provide a quote.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Do I need to pay upfront?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For project-based work, we typically require a 50% deposit to begin, with the remaining balance due
                  upon completion. For hourly work, we bill weekly or bi-weekly. We accept bank transfers and major
                  credit cards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>How do you ensure quality?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have a rigorous quality assurance process that includes code reviews, automated testing, and manual
                  testing. We also provide regular updates and opportunities for feedback throughout the development
                  process.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>What if I'm not satisfied with the work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. If you're not happy with any aspect of our work, we'll revise it
                  until it meets your expectations. We offer a satisfaction guarantee on all our projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

    </div>
  )
}

