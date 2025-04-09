"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface RetroBackgroundProps {
  className?: string
}

export default function RetroBackground({ className = "" }: RetroBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {/* Dark background with grid pattern */}
      <div className="absolute inset-0 bg-brand-dark bg-grid-white opacity-100"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-gold/30 to-transparent animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      {/* Retro grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-brand-gold/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-brand-gold/5 blur-3xl"></div>

      {/* Retro circles */}
      <svg
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 opacity-5"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke="#F0C050" strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="#F0C050" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

