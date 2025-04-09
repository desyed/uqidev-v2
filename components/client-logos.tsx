"use client"

const LogoSVG = ({ name }: { name: string }) => {
  // Simple SVG representations of logos
  switch (name) {
    case "Bolt":
      return (
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12H10L8 20L16 12H10L12 4Z" fill="currentColor" />
          <path d="M24 6H36V10H24V6ZM24 14H36V18H24V14Z" fill="currentColor" />
          <path d="M44 6L52 6V18H44V14H48V10H44V6Z" fill="currentColor" />
        </svg>
      )
    case "Walmart":
      return (
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 4L44 12L48 4H52L44 18H40L36 10L32 18H28L20 4H24L28 12L32 4H40Z" fill="currentColor" />
          <circle cx="56" cy="12" r="4" fill="currentColor" />
        </svg>
      )
    case "Discord":
      return (
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 8C28 8 26 10 26 10C26 10 28 8 32 8ZM48 8C52 8 54 10 54 10C54 10 52 8 48 8Z"
            fill="currentColor"
          />
          <path
            d="M24 6C24 6 30 4 40 4C50 4 56 6 56 6V18C56 18 50 20 40 20C30 20 24 18 24 18V6Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="32" cy="12" r="2" fill="currentColor" />
          <circle cx="48" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    case "Coinbase":
      return (
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M36 12L40 16L44 12L40 8L36 12Z" fill="currentColor" />
        </svg>
      )
    case "Shopify":
      return (
        <svg width="70" height="24" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 4L30 6V18L35 20L40 18V6L35 4Z" fill="currentColor" />
          <path d="M35 4L40 6L45 4L40 2L35 4Z" fill="currentColor" />
          <path d="M35 4L30 2L25 4L30 6L35 4Z" fill="currentColor" />
        </svg>
      )
    case "Stripe":
      return (
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H40V10H20V6Z" fill="currentColor" />
          <path d="M20 14H40V18H20V14Z" fill="currentColor" />
        </svg>
      )
    case "Netflix":
      return (
        <svg width="70" height="24" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 4V20H34V4H30Z" fill="currentColor" />
          <path d="M40 4V20H44V4H40Z" fill="currentColor" />
          <path d="M30 10H44V14H30V10Z" fill="currentColor" />
        </svg>
      )
    case "Airbnb":
      return (
        <svg width="70" height="24" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 4C33 8 31 12 35 16C39 12 37 8 35 4Z" fill="currentColor" />
          <path d="M27 8C25 12 27 16 31 16C29 12 29 8 27 8Z" fill="currentColor" />
          <path d="M43 8C41 8 41 12 39 16C43 16 45 12 43 8Z" fill="currentColor" />
        </svg>
      )
    default:
      return <span className="text-lg font-bold">{name}</span>
  }
}

export default function ClientLogos() {
  const logos = [
    { name: "Company 1", logo: "C1" },
    { name: "Company 2", logo: "C2" },
    { name: "Company 3", logo: "C3" },
    { name: "Company 4", logo: "C4" },
    { name: "Company 5", logo: "C5" },
    { name: "Company 6", logo: "C6" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex h-12 w-24 items-center justify-center rounded-md border border-border/40 bg-background p-2"
        >
          <span className="text-xl font-bold text-muted-foreground">{logo.logo}</span>
        </div>
      ))}
    </div>
  )
}

