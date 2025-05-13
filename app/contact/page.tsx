import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-b">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Have a project in mind? We'd love to hear from you. Reach out to us and let's discuss how we can help.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" className="border-primary/20 bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" className="border-primary/20 bg-background" />
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
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project Inquiry" className="border-primary/20 bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] border-primary/20 bg-background"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Email:</span>
                    <a href="mailto:contact@uqidev.com" className="text-primary hover:underline">
                      contact@uqidev.com
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 833 467 0010
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-muted-foreground">131 Continental Dr
                        Suite 305
                        New York, DE 19713</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-primary">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="text-center">
                  <h4 className="font-bold mb-2">Need Urgent Support?</h4>
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>24/7 Chat Support Available</span>
                  </div>
                </div>
              </div>
            </div>
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
                <CardTitle>How much does your service cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services start at $35 USD per hour for basic development tasks. Project-based pricing depends on
                  the scope and complexity of your requirements. We provide detailed quotes after an initial
                  consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>How long does a typical project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web
                  application could take 2-3 months. We'll provide a detailed timeline during the project scoping phase.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Do you offer ongoing maintenance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer ongoing maintenance and support packages to keep your website or application running
                  smoothly. These can be tailored to your specific needs and budget.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>What is your payment structure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For hourly work, we bill weekly or bi-weekly. For project-based work, we typically require a 50%
                  deposit to begin, with the remaining balance due upon completion. We accept bank transfers and major
                  credit cards.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to <span className="text-primary">Get Started</span>?
            </h2>
            <p className="text-muted-foreground max-w-[800px] mb-8">
              Take the first step towards bringing your digital vision to life. Our team is ready to help.
            </p>
            <Button size="lg" asChild>
              <Link href="/get-started">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

