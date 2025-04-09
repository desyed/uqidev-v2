"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

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

    // Determine colors based on theme
    let primaryColor = "#FF5F00" // Brand orange
    let secondaryColor = "#121212" // Brand black
    let opacity = 0.05

    if (theme === "dark") {
      primaryColor = "#FF5F00"
      secondaryColor = "#FFFFFF"
      opacity = 0.07
    } else if (theme === "light") {
      primaryColor = "#FF5F00"
      secondaryColor = "#121212"
      opacity = 0.05
    } else if (theme === "retro") {
      primaryColor = "#FF5F00"
      secondaryColor = "#121212"
      opacity = 0.08
    }

    // Create nodes for the network
    const nodes: Node[] = []
    const nodeCount = Math.floor(window.innerWidth / 100) // Responsive node count

    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.radius = Math.random() * 1.5 + 0.5
        this.color = Math.random() > 0.5 ? primaryColor : secondaryColor
      }

      update() {
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        this.x += this.vx
        this.y += this.vy
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      nodes.push(new Node(x, y))
    }

    // Draw connections between nodes
    function drawConnections() {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only connect nodes that are close enough
          const maxDistance = 150
          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)

            // Create circuit-like connections with right angles
            if (Math.random() > 0.7) {
              // Straight line
              ctx.lineTo(nodes[j].x, nodes[j].y)
            } else {
              // Circuit-like path with right angles
              const midX = (nodes[i].x + nodes[j].x) / 2
              const midY = (nodes[i].y + nodes[j].y) / 2

              if (Math.random() > 0.5) {
                ctx.lineTo(midX, nodes[i].y)
                ctx.lineTo(midX, nodes[j].y)
                ctx.lineTo(nodes[j].x, nodes[j].y)
              } else {
                ctx.lineTo(nodes[i].x, midY)
                ctx.lineTo(nodes[j].x, midY)
                ctx.lineTo(nodes[j].x, nodes[j].y)
              }
            }

            // Line style
            ctx.strokeStyle = nodes[i].color
            ctx.globalAlpha = opacity * (1 - distance / maxDistance)
            ctx.lineWidth = 1
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    // Animation loop
    let animationId: number
    function animate() {
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [mounted, theme])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} aria-hidden="true" />
}

