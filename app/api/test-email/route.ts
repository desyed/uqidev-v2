import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_xyjipv2';
const EMAILJS_TEMPLATE_ID = 'template_0y5zmld';
const EMAILJS_PUBLIC_KEY = 'ycgCwEGp7HO-UI5AW';

export async function GET() {
  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: 'API Test User',
        reply_to: 'api-test@example.com',
        subject: 'EmailJS API Test',
        message: 'This is a test message sent from the API route.'
      }
    );
    
    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      result
    });
  } catch (error) {
    console.error('API Route EmailJS Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send test email',
        error: JSON.stringify(error)
      },
      { status: 500 }
    );
  }
} 