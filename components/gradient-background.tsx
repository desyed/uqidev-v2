"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient
    const createGradient = () => {
      const width = canvas.width
      const height = canvas.height

      // Create line pattern
      const drawLines = () => {
        ctx.clearRect(0, 0, width, height)

        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, "rgba(255, 95, 0, 0.1)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.05)")
        gradient.addColorStop(1, "rgba(0, 200, 255, 0.1)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        // Draw horizontal lines
        ctx.beginPath()
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.lineWidth = 1

        const lineSpacing = 15
        const lineCount = Math.floor(height / lineSpacing)

        for (let i = 0; i < lineCount; i++) {
          const y = i * lineSpacing
          ctx.moveTo(0, y)
          ctx.lineTo(width, y)
        }

        ctx.stroke()
      }

      drawLines()
    }

    createGradient()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}

