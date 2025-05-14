"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { initEmailJS, sendEmail } from "@/components/email-service"
import { trackEvent } from "@/lib/analytics"

interface FormState {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initEmailJS()
  }, [])

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email"

    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    else if (formData.message.length < 10) newErrors.message = "Minimum 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))

    if (errors[id as keyof FormErrors]) {
      const newErrors = { ...errors }
      delete newErrors[id as keyof FormErrors]
      setErrors(newErrors)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    }

    sendEmail(templateParams)
      .then((result) => {
        console.log("Email sent successfully", result.text)
        setIsSubmitted(true)
        
        // Track form submission in Google Analytics
        trackEvent('form_submission', {
          form_name: 'contact_form',
          form_subject: formData.subject
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error)
        alert("Failed to send message. Please check your internet connection and try again.")
        
        // Track form submission error in Google Analytics
        trackEvent('form_error', {
          form_name: 'contact_form',
          error_message: error.text || 'Unknown error'
        });
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6 md:py-8">
        <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
        <p className="text-muted-foreground mb-6">
          We've received your message and will get back soon.
        </p>
        <Button variant="outline" className="gap-2 rounded-full">
          <Mail className="h-4 w-4" />
          Check your inbox
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
            Send Us a <span className="text-primary">Message</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Fill out the form and we'll get back to you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`border-primary/20 bg-background ${
                    errors.firstName ? "border-red-500 ring-red-500" : ""
                  }`}
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
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`border-primary/20 bg-background ${
                    errors.lastName ? "border-red-500 ring-red-500" : ""
                  }`}
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
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`border-primary/20 bg-background ${
                  errors.email ? "border-red-500 ring-red-500" : ""
                }`}
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
                value={formData.subject}
                onChange={handleChange}
                className={`border-primary/20 bg-background ${
                  errors.subject ? "border-red-500 ring-red-500" : ""
                }`}
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
                value={formData.message}
                onChange={handleChange}
                className={`min-h-[120px] border-primary/20 bg-background ${
                  errors.message ? "border-red-500 ring-red-500" : ""
                }`}
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
        <div className="hidden lg:block space-y-6">
          <div className="border border-primary/20 rounded-lg p-6 bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Email:</span>
                <a href="mailto:contact@uqidev.com" className="text-primary hover:underline">
                  contact@uqidev.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a href="tel:+18334670010" className="text-primary hover:underline">
                    +1 833 467 0010
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">
                    131 Continental Dr, Suite 305<br />
                    New York, DE 19713
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-primary/20 rounded-lg p-6 bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="block lg:hidden mt-8 space-y-6">
        <div className="border border-primary/20 rounded-lg p-6 bg-background/50 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Email:</span>
              <a href="mailto:contact@uqidev.com" className="text-primary hover:underline">
                contact@uqidev.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <a href="tel:+18334670010" className="text-primary hover:underline">
                  +1 833 467 0010
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-muted-foreground">
                  131 Continental Dr, Suite 305<br />
                  New York, DE 19713
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
