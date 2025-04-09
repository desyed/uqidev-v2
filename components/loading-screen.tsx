"use client"

import { useEffect, useState } from "react"
import Logo from "@/components/logo"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (remove in production and use actual load events)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // When not loading, don't render anything
  if (!loading) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500"
      style={{
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? "auto" : "none",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="scale-150 mb-8">
          <Logo />
        </div>
        <div className="relative h-1 w-48 bg-muted overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 h-full w-full bg-primary rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}

