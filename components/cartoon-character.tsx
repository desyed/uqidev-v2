"use client"

import { useEffect, useState } from "react"

interface CartoonCharacterProps {
  className?: string
  variant?: "developer" | "designer" | "support"
}

export default function CartoonCharacter({ className = "", variant = "developer" }: CartoonCharacterProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`relative ${className} animate-float character-shadow`}>
      {variant === "developer" && (
        <svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <ellipse cx="100" cy="70" rx="60" ry="65" fill="#F8D08D" />

          {/* Hair */}
          <path
            d="M100 5C70 5 50 25 45 45C40 65 45 75 50 80C55 85 60 75 65 70C70 65 80 60 100 60C120 60 130 65 135 70C140 75 145 85 150 80C155 75 160 65 155 45C150 25 130 5 100 5Z"
            fill="#F0C050"
          />

          {/* Eyes */}
          <ellipse cx="75" cy="65" rx="10" ry="12" fill="white" />
          <ellipse cx="125" cy="65" rx="10" ry="12" fill="white" />
          <ellipse cx="75" cy="65" rx="5" ry="6" fill="#1A1A1A" />
          <ellipse cx="125" cy="65" rx="5" ry="6" fill="#1A1A1A" />
          <ellipse cx="73" cy="62" rx="2" ry="2" fill="white" />
          <ellipse cx="123" cy="62" rx="2" ry="2" fill="white" />

          {/* Eyebrows */}
          <path d="M65 50C70 45 80 45 85 50" stroke="#F0C050" strokeWidth="3" strokeLinecap="round" />
          <path d="M115 50C120 45 130 45 135 50" stroke="#F0C050" strokeWidth="3" strokeLinecap="round" />

          {/* Mustache */}
          <path d="M85 90C90 95 110 95 115 90" stroke="#F0C050" strokeWidth="5" strokeLinecap="round" />

          {/* Neck */}
          <rect x="90" y="120" width="20" height="20" fill="#F8D08D" />

          {/* Body/Shirt */}
          <rect x="60" y="140" width="80" height="100" fill="#F0C050" />
          <rect x="70" y="140" width="60" height="20" fill="#1A1A1A" />
          <circle cx="100" cy="150" r="5" fill="#F0C050" />

          {/* Arms */}
          <rect x="40" y="140" width="20" height="60" rx="10" fill="#F8D08D" />
          <rect x="140" y="140" width="20" height="60" rx="10" fill="#F8D08D" />

          {/* Hands */}
          <circle cx="40" cy="200" r="10" fill="#F8D08D" />
          <circle cx="160" cy="200" r="10" fill="#F8D08D" />
        </svg>
      )}

      {variant === "designer" && (
        <svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <ellipse cx="100" cy="70" rx="60" ry="65" fill="#F8D08D" />

          {/* Hair */}
          <path
            d="M100 5C70 5 45 15 40 45C35 75 45 85 55 90C65 95 75 85 85 80C95 75 105 75 115 80C125 85 135 95 145 90C155 85 165 75 160 45C155 15 130 5 100 5Z"
            fill="#F0C050"
          />

          {/* Eyes */}
          <ellipse cx="75" cy="65" rx="10" ry="12" fill="white" />
          <ellipse cx="125" cy="65" rx="10" ry="12" fill="white" />
          <ellipse cx="75" cy="65" rx="5" ry="6" fill="#1A1A1A" />
          <ellipse cx="125" cy="65" rx="5" ry="6" fill="#1A1A1A" />
          <ellipse cx="73" cy="62" rx="2" ry="2" fill="white" />
          <ellipse cx="123" cy="62" rx="2" ry="2" fill="white" />

          {/* Eyebrows */}
          <path d="M65 50C70 45 80 45 85 50" stroke="#F0C050" strokeWidth="3" strokeLinecap="round" />
          <path d="M115 50C120 45 130 45 135 50" stroke="#F0C050" strokeWidth="3" strokeLinecap="round" />

          {/* Smile */}
          <path d="M85 90C90 100 110 100 115 90" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

          {/* Glasses */}
          <rect x="65" y="55" width="20" height="20" rx="5" stroke="#F0C050" strokeWidth="2" />
          <rect x="115" y="55" width="20" height="20" rx="5" stroke="#F0C050" strokeWidth="2" />
          <line x1="85" y1="65" x2="115" y2="65" stroke="#F0C050" strokeWidth="2" />

          {/* Neck */}
          <rect x="90" y="120" width="20" height="20" fill="#F8D08D" />

          {/* Body/Shirt */}
          <rect x="60" y="140" width="80" height="100" fill="#1A1A1A" />
          <rect x="70" y="140" width="60" height="20" fill="#F0C050" />

          {/* Arms */}
          <rect x="40" y="140" width="20" height="60" rx="10" fill="#F8D08D" />
          <rect x="140" y="140" width="20" height="60" rx="10" fill="#F8D08D" />

          {/* Hands */}
          <circle cx="40" cy="200" r="10" fill="#F8D08D" />
          <circle cx="160" cy="200" r="10" fill="#F8D08D" />

          {/* Paintbrush */}
          <rect x="155" y="190" width="30" height="5" rx="2" fill="#8B4513" transform="rotate(-45 155 190)" />
          <path d="M175 170L185 180L180 185L170 175L175 170Z" fill="#F0C050" />
        </svg>
      )}

      {variant === "support" && (
        <svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <ellipse cx="100" cy="70" rx="60" ry="65" fill="#F8D08D" />

          {/* Hair */}
          <path
            d="M100 5C130 5 150 25 155 45C160 65 155 75 150 80C145 85 140 75 135 70C130 65 120 60 100 60C80 60 70 65 65 70C60 75 55 85 50 80C45 75 40 65 45 45C50 25 70 5 100 5Z"
            fill="#F0C050"
          />

          {/* Eyes */}
          <ellipse cx="75" cy="65" rx="10" ry="12" fill="white" />
          <ellipse cx="125" cy="65" rx="10" ry="12" fill="white" />
          <ellipse cx="75" cy="65" rx="5" ry="6" fill="#1A1A1A" />
          <ellipse cx="125" cy="65" rx="5" ry="6" fill="#1A1A1A" />
          <ellipse cx="73" cy="62" rx="2" ry="2" fill="white" />
          <ellipse cx="123" cy="62" rx="2" ry="2" fill="white" />

          {/* Eyebrows */}
          <path d="M65 50C70 45 80 45 85 50" stroke="#F0C050" strokeWidth="3" strokeLinecap="round" />
          <path d="M115 50C120 45 130 45 135 50" stroke="#F0C050" strokeWidth="3" strokeLinecap="round" />

          {/* Smile */}
          <path d="M85 90C90 100 110 100 115 90" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

          {/* Headset */}
          <path d="M60 50C60 30 80 20 100 20C120 20 140 30 140 50" stroke="#1A1A1A" strokeWidth="3" />
          <rect x="50" y="50" width="10" height="20" rx="5" fill="#1A1A1A" />
          <rect x="140" y="50" width="10" height="20" rx="5" fill="#1A1A1A" />
          <path d="M60 60C50 60 45 65 45 70C45 75 50 80 55 80" stroke="#1A1A1A" strokeWidth="2" />

          {/* Neck */}
          <rect x="90" y="120" width="20" height="20" fill="#F8D08D" />

          {/* Body/Shirt */}
          <rect x="60" y="140" width="80" height="100" fill="#F0C050" />
          <rect x="70" y="140" width="60" height="20" fill="#1A1A1A" />

          {/* Arms */}
          <rect x="40" y="140" width="20" height="60" rx="10" fill="#F8D08D" />
          <rect x="140" y="140" width="20" height="60" rx="10" fill="#F8D08D" />

          {/* Hands */}
          <circle cx="40" cy="200" r="10" fill="#F8D08D" />
          <circle cx="160" cy="200" r="10" fill="#F8D08D" />
        </svg>
      )}
    </div>
  )
}

