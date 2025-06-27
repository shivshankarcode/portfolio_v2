import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // NO "NEXT_PUBLIC_" prefix

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['shivshankarmoney@gmail.com'],
      subject: 'Message from Contact Form of AI-Driven TypingTest',
      text: `Hello,\n\nYou got a new message from ${name} (${email}):\n\n${message}`,
      // react: EmailTemplate()
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
