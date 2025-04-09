"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <Button onClick={scrollToTop} size="icon" className="rounded-full shadow-lg" aria-label="Scroll to top">
        <ArrowUp className="h-5 w-5" />
      </Button>
      <Button className="rounded-full shadow-lg" asChild>
        <Link href="/get-started">Start a Project</Link>
      </Button>
    </div>
  )
}

