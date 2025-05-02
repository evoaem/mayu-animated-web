
import { Resend } from 'resend';
import { RESEND_API_KEY } from './env';

const resend = new Resend(RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const { name, email, message } = data;
    
    const response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'mayu@hexra.cloud',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });
    
    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
