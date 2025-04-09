"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What services does UQIDEV offer?",
      answer:
        "UQIDEV offers a comprehensive range of development services including web development, mobile app development, UI/UX design, e-commerce solutions, custom software development, and ongoing maintenance and support.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our services start at $35/hour, with different pricing tiers based on project complexity and requirements. We offer transparent pricing and provide detailed quotes before starting any work.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. We provide detailed timelines during the proposal phase.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch. Our support includes bug fixes, security updates, and feature enhancements.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "You can view our portfolio on our website, which showcases a range of projects across different industries. We're also happy to provide specific examples relevant to your industry upon request.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process includes initial consultation, detailed proposal, design phase, development phase with regular updates, testing and quality assurance, and final delivery with documentation and training.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

