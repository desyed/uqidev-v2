import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ModernGridBackground from "@/components/modern-grid-background"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Background Pattern */}
      <ModernGridBackground />
      
      <main className="flex-1 relative z-10 flex items-center justify-center">
        <div className="container max-w-md text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the project you're looking for. It may have been moved or doesn't exist.
          </p>
          <Button asChild>
            <Link href="/portfolio" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
} 