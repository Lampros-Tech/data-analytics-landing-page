// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  yourName: string;
  emailAddress: string;
  contactNumber: string; 
}

export async function POST(request: NextRequest) {
  try {
    const { yourName, emailAddress, contactNumber }: FormData = await request.json();

    if (!yourName || !emailAddress || !contactNumber) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(emailAddress)) {
        return NextResponse.json({ message: 'Invalid email address format' }, { status: 400 });
    }
 
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SECURE === 'true', 
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_RECIPIENTS,
      subject: `Contact Form Submission`,
      text: `You received a new contact form submission:
        Name: ${yourName}
        Email: ${emailAddress}
        Message/Number: ${contactNumber}
      `,
      html: `<p>You received a new contact form submission:</p>
             <ul>
               <li><strong>Name:</strong> ${yourName}</li>
               <li><strong>Email:</strong> ${emailAddress}</li>
               <li><strong>Message/Number:</strong> ${contactNumber}</li>
             </ul>`,
    };

    try {
      await transporter.verify(); 
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully via route handler');
      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
      console.error('Nodemailer failed:', error);
      return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Route error:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof SyntaxError) { 
        errorMessage = 'Invalid request body format.';
    }
    return NextResponse.json({ message: errorMessage }, { status: 400 }); 
  }
}
