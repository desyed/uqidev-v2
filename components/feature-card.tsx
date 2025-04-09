import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export default function FeatureCard({ icon, title, description, link = "/services" }: FeatureCardProps) {
  return (
    <div className="group rounded-lg border border-border/40 bg-background p-6 transition-all hover:border-primary/40 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <Link href={link} className="flex items-center text-sm font-medium text-primary group-hover:underline">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

