"use client"

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const emailServiceCode = `import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_xyjipv2';
const EMAILJS_TEMPLATE_ID = 'template_0y5zmld';
const EMAILJS_PUBLIC_KEY = 'ycgCwEGp7HO-UI5AW';

// Enable debug mode for development
const DEBUG = process.env.NODE_ENV === 'development';

// Initialize EmailJS
export const initEmailJS = () => {
  if (DEBUG) console.log('Initializing EmailJS with public key:', EMAILJS_PUBLIC_KEY);
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send email
export const sendEmail = async (templateParams: {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}) => {
  if (DEBUG) {
    console.log('Sending email with EmailJS:');
    console.log('- Service ID:', EMAILJS_SERVICE_ID);
    console.log('- Template ID:', EMAILJS_TEMPLATE_ID);
    console.log('- Parameters:', templateParams);
  }
  
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    if (DEBUG) console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    if (DEBUG) console.error('EmailJS send error:', error);
    throw error;
  }
};`

export default function EmailServiceCode() {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailServiceCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Email Service Code</CardTitle>
        <CardDescription>
          Copy this code to replace your email-service.ts file
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <pre className="text-xs overflow-auto p-4 bg-muted rounded-md max-h-96">
            <code>{emailServiceCode}</code>
          </pre>
          <Button
            size="sm"
            variant="secondary"
            className="absolute top-2 right-2"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Save this file as components/email-service.ts with UTF-8 encoding
        </p>
      </CardFooter>
    </Card>
  )
} 