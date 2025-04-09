"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Shield } from "lucide-react"

export default function GridLayout() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="border-t border-l border-border/40 p-8 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border/40 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border/40 transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-border/40 transform translate-x-1/2 translate-y-1/2"></div>

            <div className="flex items-center gap-2 mb-4">
              <RefreshCw className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Development Process</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Go ahead, deploy on Friday.</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our development workflow ensures smooth deployments any day of the week.
            </p>

            <div className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-md p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Continuous Integration</h3>
              <p className="text-muted-foreground">
                Our automated testing and deployment pipeline ensures your code is always production-ready.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="border-t border-r border-border/40 p-8 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-border/40 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border/40 transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-border/40 transform translate-x-1/2 translate-y-1/2"></div>

            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Quality Assurance</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Move fast, don't break things.</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Keep quality high while maintaining velocity with our enterprise-grade development practices.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-md p-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Code Quality</h3>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">9.5</div>
                  <div className="text-sm text-muted-foreground">Excellent</div>
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur-sm border border-border/60 rounded-md p-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Issues</h3>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">Critical</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-b border-l border-r border-border/40 p-8 mt-12 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-border/40 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border/40 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary transform translate-x-1/2 translate-y-1/2"></div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="text-2xl font-bold">Scale your</span>
              <Button variant="outline" className="rounded-full">
                Enterprise
              </Button>
              <span className="text-2xl font-bold">without compromising</span>
              <Button variant="outline" className="rounded-full">
                Security
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

