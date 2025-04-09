import { Cpu } from "lucide-react"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative">
        <Cpu className="h-6 w-6 text-brand-yellow" />
      </div>
      <span className="text-xl font-bold tracking-wider">
        <span className="text-brand-yellow">.UQI</span>
        <span className="text-white dark:text-white">DEV</span>
      </span>
    </Link>
  )
}

