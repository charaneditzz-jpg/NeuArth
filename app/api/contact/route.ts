import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please enter your project message or inquiry." },
        { status: 400 }
      );
    }

    // In production, an email provider (like Resend, Sendgrid, or SMTP) would be invoked here.
    // For logging and verification:
    console.log("[NeuArth Contact Submission]:", {
      name,
      email,
      phone: phone || "Not provided",
      service: service || "General Inquiry",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to NeuArth! Your consultation request has been received. Our team will review your project details and contact you shortly.",
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again or reach out via email directly." },
      { status: 500 }
    );
  }
}
