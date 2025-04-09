"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface MinimalBackgroundProps {
  className?: string
}

export default function MinimalBackground({ className = "" }: MinimalBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-black"></div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Subtle glow in the corner */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-yellow/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-yellow/5 blur-3xl rounded-full"></div>
    </div>
  )
}

