"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface ModernGridBackgroundProps {
  className?: string
}

export default function ModernGridBackground({ className = "" }: ModernGridBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`fixed inset-0 -z-10 ${className}`} aria-hidden="true">
      {/* Grid pattern */}
      <div className="absolute inset-0 modern-grid-pattern"></div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      </div>
    </div>
  )
}

