import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, brief, referral } = body;

    // Validate inputs
    if (!name || !email || !company || !brief) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Fallback logging in development mode
      console.log("==================================================");
      console.log("SCOPING INBOUND SUBMISSION (DEVELOPMENT MODE - NO RESEND API KEY FOUND)");
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${company}`);
      console.log(`Budget: ${budget}`);
      console.log(`Referral: ${referral}`);
      console.log(`Brief: ${brief}`);
      console.log("==================================================");

      return NextResponse.json({
        success: true,
        message: "Scoping request logged to server console successfully (development mode).",
      });
    }

    // Direct fetch call to Resend REST API to avoid package bloat
    const sendNotification = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Codex Neural Inbound <inbound@codexneural.com>",
        to: "contact@codexneural.com",
        subject: `New Scoping Project: ${company} (${name})`,
        html: `
          <h3>New Scoping Inbound Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Referral:</strong> ${referral}</p>
          <p><strong>Brief:</strong></p>
          <p>${brief.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    const sendConfirmation = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Codex Neural <contact@codexneural.com>",
        to: email,
        subject: `We've received your scoping request`,
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to Codex Neural. We've received your scoping project request for <strong>${company}</strong>.</p>
          <p>Our systems leads will review your requirements and respond via email within 24 hours.</p>
          <br />
          <p>Best regards,</p>
          <p><strong>The Codex Neural Team</strong></p>
        `,
      }),
    });

    if (!sendNotification.ok || !sendConfirmation.ok) {
      const errText = await sendNotification.text();
      console.error("Resend API dispatch failed", errText);
      return NextResponse.json(
        { success: false, error: "Failed to dispatch email notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Scoping request dispatched successfully via Resend API.",
    });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    console.error("Contact API Route Handler encountered error", err);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
