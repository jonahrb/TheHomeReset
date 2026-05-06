import { NextResponse } from "next/server";

type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  bedrooms: string;
  bathrooms: string;
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

  const { name, email, phone, service, date, time } = body;

  // Input validation
  if (!name || !email || !phone || !service || !date || !time) {
    return NextResponse.json(
      { error: "All required fields must be filled." },
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

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Invalid phone number." },
      { status: 400 }
    );
  }

  const requestedDate = new Date(date);
  if (isNaN(requestedDate.getTime())) {
    return NextResponse.json(
      { error: "Invalid date provided." },
      { status: 400 }
    );
  }

  // In a real app you would: save to a database, send a confirmation email, etc.
  // For now we return a success response with the booking summary.
  const booking = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    service,
    date,
    time,
    bedrooms: body.bedrooms,
    bathrooms: body.bathrooms,
    notes: body.notes?.trim() ?? "",
    status: "pending",
  };

  return NextResponse.json(
    { message: "Booking request received.", booking },
    { status: 201 }
  );
}
