import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  bedrooms?: string;
  bathrooms?: string;
  notes?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[\d\s\-()+]{7,20}$/.test(phone);
}

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, phone, service, date } = body;

  // Input validation
  if (!name || !email || !phone || !service || !date) {
    return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
  }

  if (name.length > 100) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
  }

  const requestedDate = new Date(date);
  if (isNaN(requestedDate.getTime())) {
    return NextResponse.json({ error: "Invalid date provided." }, { status: 400 });
  }

  const booking = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    service,
    date,
    bedrooms: body.bedrooms ?? "",
    bathrooms: body.bathrooms ?? "",
    notes: body.notes?.trim() ?? "",
    status: "pending",
  };

  // Build email body
  const lines = [
    `Name: ${booking.name}`,
    `Email: ${booking.email}`,
    `Phone: ${booking.phone}`,
    `Service: ${booking.service}`,
    `Date: ${booking.date}`,
    `Bedrooms: ${booking.bedrooms}`,
    `Bathrooms: ${booking.bathrooms}`,
    `Notes: ${booking.notes}`,
    `Submitted At: ${booking.createdAt}`,
    `Request ID: ${booking.id}`,
  ];

  const text = lines.join("\n");

  try {
    await sendEmail("hello@thehomereset.us", "Booking Requested", text);
  } catch (err) {
    return NextResponse.json({ error: `Failed to send email: ${err instanceof Error ? err.message : String(err)}` }, { status: 500 });
  }

  return NextResponse.json({ message: "Booking request received.", booking }, { status: 201 });
}
