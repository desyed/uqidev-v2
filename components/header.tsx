"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import ThemeSwitcher from "@/components/theme-switcher"
import Logo from "@/components/logo"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-40 border-b border-brand-yellow/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className={`text-sm font-medium ${isActive("/") ? "text-primary" : "hover:text-primary"}`}>
            Home
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`text-sm font-medium ${isActive("/portfolio") ? "text-primary" : "hover:text-primary"}`}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${isActive("/contact") ? "text-primary" : "hover:text-primary"}`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button
            variant="outline"
            className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-yellow/20">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium p-2 rounded-md ${isActive("/") ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium p-2 rounded-md ${isActive("/services") ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm font-medium p-2 rounded-md ${isActive("/portfolio") ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium p-2 rounded-md ${isActive("/contact") ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full mt-2" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

