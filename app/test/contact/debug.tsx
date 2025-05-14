"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { initEmailJS } from "@/components/email-service"
import emailjs from '@emailjs/browser'

export default function EmailJSDebug() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [response, setResponse] = useState<any>(null)
  
  const EMAILJS_SERVICE_ID = 'service_xyjipv2'
  const EMAILJS_TEMPLATE_ID = 'template_0y5zmld'
  const EMAILJS_PUBLIC_KEY = 'ycgCwEGp7HO-UI5AW'
  
  const sendTestEmail = async () => {
    try {
      setStatus('loading')
      initEmailJS()
      
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        {
          from_name: 'Test User',
          reply_to: 'test@example.com',
          subject: 'EmailJS Test',
          message: 'This is a test message from the debug component.'
        }
      )
      
      setResponse(result)
      setStatus('success')
    } catch (error) {
      console.error('EmailJS Test Error:', error)
      setResponse(error)
      setStatus('error')
    }
  }
  
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>EmailJS Debug Info</CardTitle>
        <CardDescription>Test your EmailJS configuration directly</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Service ID:</div>
            <div className="col-span-2 font-mono">{EMAILJS_SERVICE_ID}</div>
            
            <div className="font-medium">Template ID:</div>
            <div className="col-span-2 font-mono">{EMAILJS_TEMPLATE_ID}</div>
            
            <div className="font-medium">Public Key:</div>
            <div className="col-span-2 font-mono">{EMAILJS_PUBLIC_KEY}</div>
          </div>
          
          {status !== 'idle' && (
            <div className="mt-4 p-4 bg-muted rounded-md">
              <div className="font-medium mb-2">Response:</div>
              <pre className="text-xs overflow-auto p-2 bg-background rounded border">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={sendTestEmail} 
          disabled={status === 'loading'} 
          variant={status === 'success' ? 'success' : status === 'error' ? 'destructive' : 'default'}
        >
          {status === 'loading' ? 'Sending...' : status === 'success' ? 'Test Email Sent!' : status === 'error' ? 'Failed - Try Again' : 'Send Test Email'}
        </Button>
      </CardFooter>
    </Card>
  )
} 