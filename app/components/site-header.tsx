import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const navItems = [
    {
      title: "Services",
      href: "/services",
      items: [
        {
          title: "Web Development",
          href: "/services/web-development",
          description: "Full-stack web applications with modern technologies",
        },
        {
          title: "Mobile Development",
          href: "/services/mobile-development",
          description: "Native and cross-platform mobile applications",
        },
        {
          title: "UI/UX Design",
          href: "/services/ui-ux-design",
          description: "User-centered design that drives engagement",
        },
        {
          title: "DevOps & Cloud",
          href: "/services/devops-cloud",
          description: "Streamline your infrastructure and deployment",
        },
      ],
    },
    {
      title: "Solutions",
      href: "/solutions",
      items: [
        {
          title: "For Startups",
          href: "/solutions/startups",
          description: "MVP development, rapid deployment, and cost-effective solutions",
        },
        {
          title: "For Enterprise",
          href: "/solutions/enterprise",
          description: "Scalable, secure, and integrated enterprise-grade solutions", 
        },
      ],
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Company",
      href: "/about",
      items: [
        {
          title: "About Us",
          href: "/about",
          description: "Learn about our company and mission",
        },
        {
          title: "Our Team",
          href: "/team",
          description: "Meet the experts behind our services",
        },
        {
          title: "Careers",
          href: "/careers",
          description: "Join our growing team of professionals",
        },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <MainNav items={navItems} />
        <MobileNav items={navItems} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button asChild size="sm" className="rounded-full">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 