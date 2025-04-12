"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { Separator } from "@radix-ui/react-select"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import emailjs from '@emailjs/browser';

// Define types for form validation
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })

  const EMAILJS_SERVICE_ID = "service_xyjipv2" 
  const EMAILJS_TEMPLATE_ID = "template_d2vmnmi" 
  const EMAILJS_PUBLIC_KEY = "ycgCwEGp7HO-UI5AW" 

  // Initialize EmailJS when component mounts
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    
    // Clear error when user types
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[id as keyof FormErrors]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      // EmailJS integration - uncomment when ready to use
      if (EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" && 
          EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" && 
          EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
          
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        };
          
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );
      } else {
        console.warn("EmailJS is not properly configured");
      }
      
      // For now, simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error sending email:", error)
      setIsSubmitting(false)
      alert("Failed to send message. Please try again later.")
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you for reaching out!</h3>
        <p className="text-muted-foreground mb-6">We've received your message and will get back to you within 24 hours.</p>
        <Button variant="outline" className="gap-2 rounded-full">
          <Mail className="h-4 w-4" />
          Check your inbox soon
        </Button>
      </div>
    )
  }

  return (
    <div>
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Send Us a <span className="text-primary">Message</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className={`border-primary/20 bg-background ${errors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""}`} 
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    className={`border-primary/20 bg-background ${errors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                  )}
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
                  className={`border-primary/20 bg-background ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Project Inquiry" 
                  className={`border-primary/20 bg-background ${errors.subject ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className={`min-h-[150px] border-primary/20 bg-background ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:contact@uqidev.com" className="text-primary hover:underline">
                      contact@uqidev.com
                    </a>
                  </div>
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
                      New York, DE 19713</p>
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
    </div>
  )
}

