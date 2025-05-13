"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useHasMounted } from "@/lib/client-utils"

export default function ClientLogos() {
  const isClient = useHasMounted()

  const clientLogos = [
    { 
      name: "Client 1", 
      logo: "/clients/logo1.png",
      width: 120
    },
    { 
      name: "Client 2", 
      logo: "/clients/logo2.png",
      width: 110
    },
    { 
      name: "Client 3", 
      logo: "/clients/logo3.png",
      width: 130
    },
    { 
      name: "Client 4", 
      logo: "/clients/logo4.png",
      width: 115
    },
    { 
      name: "Client 5", 
      logo: "/clients/logo5.png",
      width: 125
    },
    { 
      name: "Client 6", 
      logo: "/clients/logo6.png",
      width: 125
    },
  ]

  // Auto-scrolling logos for small screens, grid for larger screens
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop - Static Grid */}
      <div className="hidden md:flex md:flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {clientLogos.map((client, index) => (
          <div
            key={index}
            className="group flex h-16 w-40 items-center justify-center rounded-md border border-border/40 bg-background/80 backdrop-blur-sm px-6 py-4 transition-all duration-300 hover:shadow-md hover:border-primary/30"
          >
            <Image 
              src={client.logo} 
              alt={client.name} 
              width={client.width} 
              height={50} 
              className={cn(
                "h-auto w-auto max-h-12 object-contain transition-all duration-300",
                "opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0",
                !isClient && "opacity-0" // Prevent layout shift during hydration
              )}
            />
          </div>
        ))}
      </div>

      {/* Mobile - Scrolling Carousel */}
      <div className="flex md:hidden overflow-hidden relative py-4">
        <div className={cn("flex items-center gap-8 whitespace-nowrap", isClient && "animate-marquee")}>
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={index}
              className="group flex h-16 min-w-[140px] items-center justify-center rounded-md border border-border/40 bg-background/80 backdrop-blur-sm px-4 py-3 transition-all duration-300"
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={client.width} 
                height={40} 
                className={cn(
                  "h-auto w-auto max-h-8 object-contain transition-opacity duration-300",
                  "opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0",
                  !isClient && "opacity-0" // Prevent layout shift during hydration
                )}
              />
            </div>
          ))}
        </div>
        
        {/* Create a gradient overlay on the edges for a fade effect */}
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}

