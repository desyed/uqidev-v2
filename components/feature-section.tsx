import type { ReactNode } from "react"
import LineBoxDivider from "./line-box-divider"

interface FeatureSectionProps {
  icon: ReactNode
  label: string
  title: string
  description: string
  children: ReactNode
  highlightCorner?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "all" | "none"
}

export default function FeatureSection({
  icon,
  label,
  title,
  description,
  children,
  highlightCorner = "none",
}: FeatureSectionProps) {
  return (
    <LineBoxDivider className="p-8" highlightCorners={highlightCorner}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
      <p className="text-xl text-muted-foreground mb-8">{description}</p>

      {children}
    </LineBoxDivider>
  )
}

