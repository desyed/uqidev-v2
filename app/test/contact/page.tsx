import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, AlertTriangle, HelpCircle, ExternalLink } from "lucide-react"
import EmailJSDebug from "./debug"
import EmailServiceCode from "./email-service-code"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function TestContactPage() {
  return (
    <div className="container py-12 md:py-20 lg:py-24">
      <div className="flex flex-col items-center">
        <Button variant="ghost" className="mb-8 self-start" asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-3xl w-full mx-auto bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold tracking-tighter mb-2 text-center">
            EmailJS Test Page
          </h1>
          <p className="text-muted-foreground text-center mb-4">
            Test and troubleshoot your EmailJS integration
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge variant="outline" className="px-3 py-1">
              <span className="mr-1">✓</span> Contact Form
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              <span className="mr-1">✓</span> Get Started Form
            </Badge>
            <Link href="/get-started" className="text-sm text-primary flex items-center">
              Try Get Started Form <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
          
          <Tabs defaultValue="form" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="form">Contact Form</TabsTrigger>
              <TabsTrigger value="debug">Debug Panel</TabsTrigger>
              <TabsTrigger value="code">Service Code</TabsTrigger>
            </TabsList>
            <TabsContent value="form" className="mt-6">
              <ContactForm />
            </TabsContent>
            <TabsContent value="debug" className="mt-6">
              <EmailJSDebug />
            </TabsContent>
            <TabsContent value="code" className="mt-6">
              <EmailServiceCode />
            </TabsContent>
          </Tabs>

          <div className="p-4 border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900/50 rounded-lg">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold mb-4">
              <AlertTriangle className="h-5 w-5" />
              <h3>Troubleshooting Guide</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="encoding-issues">
                <AccordionTrigger className="text-sm">
                  Encoding Issues (UTF-8 Error)
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Delete <code>components/email-service.ts</code> file</li>
                    <li>Create a new file with the same name</li>
                    <li>Copy the provided code from the "Service Code" tab</li>
                    <li>Save the file with UTF-8 encoding</li>
                    <li>Restart the development server</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="api-test">
                <AccordionTrigger className="text-sm">
                  Test Via API Route
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm mb-3">
                    If the form and debug panel both fail, try testing through the API route:
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full" 
                    variant="outline" 
                    asChild
                  >
                    <Link href="/api/test-email" target="_blank">Test via API Route</Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    This will open a new tab with the API response
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="template-issues">
                <AccordionTrigger className="text-sm">
                  Template Parameter Issues
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Verify template parameters match between your EmailJS template and the code</li>
                    <li>Check that your template variables use these names: 
                      <code className="bg-muted p-1 rounded text-xs block mt-1">
                        from_name, reply_to, subject, message
                      </code>
                    </li>
                    <li>Verify your service ID, template ID, and public key are correct</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cors-issues">
                <AccordionTrigger className="text-sm">
                  CORS Issues
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Ensure your domain is whitelisted in EmailJS dashboard</li>
                    <li>During development, add <code>localhost</code> to authorized domains</li>
                    <li>Clear browser cache and cookies</li>
                    <li>Check browser console for specific CORS errors</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="implemented-forms">
                <AccordionTrigger className="text-sm">
                  Where is EmailJS Implemented?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm mb-2">EmailJS is now integrated in these forms:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <Link href="/contact" className="text-primary hover:underline">
                        Contact Form
                      </Link> - Standard contact form for general inquiries
                    </li>
                    <li>
                      <Link href="/get-started" className="text-primary hover:underline">
                        Get Started Form
                      </Link> - Detailed project intake form with additional fields
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Both forms use the same EmailJS service and template configuration
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
} 