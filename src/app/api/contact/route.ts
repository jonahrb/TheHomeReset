import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[\d\s\-()+]{7,20}$/.test(phone);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (name.length > 100) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  if (phone && !isValidPhone(phone)) {
    return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const requestId = crypto.randomUUID();
  const text = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim().toLowerCase()}`,
    `Phone: ${phone?.trim() || ""}`,
    `Message: ${message.trim()}`,
    `Submitted At: ${submittedAt}`,
    `Request ID: ${requestId}`,
  ].join("\n");

  try {
    await sendEmail("hello@thehomereset.us", "Contact Form Submission", text);
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to send email: ${err instanceof Error ? err.message : String(err)}` },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Message received. We will be in touch soon!" },
    { status: 201 }
  );
}
