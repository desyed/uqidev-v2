"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import emailjs from '@emailjs/browser'

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

  const EMAILJS_SERVICE_ID = "service_xyjipv2"
  const EMAILJS_TEMPLATE_ID = "template_d2vmnmi"
  const EMAILJS_PUBLIC_KEY = "ycgCwEGp7HO-UI5AW"

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
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

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then((result) => {
        console.log("Email sent successfully", result.text)
        setIsSubmitted(true)
      })
      .catch((error) => {
        console.error("Failed to send email:", error)
        alert("Failed to send message. Please check your internet connection and try again.")
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
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
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
            Send Us a <span className="text-primary">Message</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Fill out the form and we'll get back to you.
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
                className={`min-h-[150px] border-primary/20 bg-background ${
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
        <div className="space-y-8">
          <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
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
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a href="tel:+18334670010" className="text-primary hover:underline">
                    +1 833 467 0010
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
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
          <div className="border border-primary/20 rounded-lg p-8 bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">Business Hours</h3>
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
    </section>
  )
}
