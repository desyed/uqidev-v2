"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface CodeBracketsBackgroundProps {
  className?: string
}

export default function CodeBracketsBackground({ className = "" }: CodeBracketsBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Determine colors based on theme
  let primaryColor = "#FF5F00" // Brand orange
  let secondaryColor = "#121212" // Brand black
  let opacity = 0.03

  if (theme === "dark") {
    primaryColor = "#FF5F00"
    secondaryColor = "#FFFFFF"
    opacity = 0.05
  } else if (theme === "light") {
    primaryColor = "#FF5F00"
    secondaryColor = "#121212"
    opacity = 0.03
  } else if (theme === "retro") {
    primaryColor = "#FF5F00"
    secondaryColor = "#121212"
    opacity = 0.06
  }

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {/* Code brackets and symbols */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1000 1000"
        style={{ opacity }}
      >
        {/* Left bracket */}
        <path
          d="M200 200 L150 250 L150 750 L200 800"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
          style={{ animationDuration: "8s" }}
        />

        {/* Right bracket */}
        <path
          d="M800 200 L850 250 L850 750 L800 800"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "1s" }}
        />

        {/* Curly braces */}
        <path
          d="M300 300 C270 350, 270 400, 300 450 C270 500, 270 550, 300 600"
          stroke={secondaryColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />

        <path
          d="M700 300 C730 350, 730 400, 700 450 C730 500, 730 550, 700 600"
          stroke={secondaryColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "3s" }}
        />

        {/* Circuit lines */}
        <path
          d="M200 400 L400 400 L400 600 L600 600 L600 400 L800 400"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10,15"
          className="animate-pulse"
          style={{ animationDuration: "12s" }}
        />

        {/* Function symbols */}
        <path
          d="M400 200 L450 200 L500 300 L550 100 L600 200"
          stroke={secondaryColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
          style={{ animationDuration: "15s", animationDelay: "1s" }}
        />

        {/* Dots/connection points */}
        <circle
          cx="200"
          cy="400"
          r="5"
          fill={primaryColor}
          className="animate-ping"
          style={{ animationDuration: "4s" }}
        />
        <circle
          cx="400"
          cy="400"
          r="5"
          fill={primaryColor}
          className="animate-ping"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <circle
          cx="400"
          cy="600"
          r="5"
          fill={primaryColor}
          className="animate-ping"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        />
        <circle
          cx="600"
          cy="600"
          r="5"
          fill={primaryColor}
          className="animate-ping"
          style={{ animationDuration: "4s", animationDelay: "3s" }}
        />
        <circle
          cx="600"
          cy="400"
          r="5"
          fill={primaryColor}
          className="animate-ping"
          style={{ animationDuration: "4s", animationDelay: "4s" }}
        />
        <circle
          cx="800"
          cy="400"
          r="5"
          fill={primaryColor}
          className="animate-ping"
          style={{ animationDuration: "4s", animationDelay: "5s" }}
        />
      </svg>
    </div>
  )
}

