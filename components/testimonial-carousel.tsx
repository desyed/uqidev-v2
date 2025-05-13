"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { useHasMounted } from "@/lib/client-utils"

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const mounted = useHasMounted()

  const testimonials = [
    {
      quote:
        "UQIDEV delivered our e-commerce platform on time and within budget. Their attention to detail and technical expertise exceeded our expectations. We've seen a 40% increase in online sales since launch.",
      author: "Frantz Arty",
      position: "Angel Investor/Founder at VideoGift",
      image: "/frantzarty.jpg",
      rating: 5,
    },
    {
      quote:
        "Working with UQIDEV was a game-changer for our startup. They understood our vision and delivered a product that our users love. Their affordable rates allowed us to get to market faster than expected.",
      author: "Jenny Stanley",
      position: "Founder & MD at Appetite Creative ",
      image: "/jenny.png",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  if (!mounted) {
    // Return a placeholder with similar structure to prevent layout shift
    return <div className="relative h-64"></div>
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border border-border/40 bg-background/80 backdrop-blur-sm">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mb-6 text-xl font-medium italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div>
                      <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} className="rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 p-0 rounded-full ${index === currentIndex ? "bg-primary" : ""}`}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}


