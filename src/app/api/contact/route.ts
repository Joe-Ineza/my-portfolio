import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactFormData, ContactFormResponse } from "@/types";

// Validation helper
function validateContactForm(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Please provide a valid email address";
  }

  if (!data.message || data.message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }

  return null;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ContactFormResponse>> {
  try {
    const body: ContactFormData = await request.json();

    // Server-side validation
    const validationError = validateContactForm(body);
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    // Check for honeypot (spam protection)
    if (body.honeypot) {
      // Silently accept but don't send email
      return NextResponse.json(
        { success: true, message: "Message sent successfully!" },
        { status: 200 }
      );
    }

    // Check if SMTP credentials are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_EMAIL;

    // If SMTP is not configured, log the message (for development)
    if (!smtpHost || !smtpUser || !smtpPass || !recipientEmail) {
      console.log("=== Contact Form Submission ===");
      console.log(`Name: ${body.name}`);
      console.log(`Email: ${body.email}`);
      console.log(`Message: ${body.message}`);
      console.log("===============================");
      console.log("Note: SMTP not configured. Set environment variables to enable email sending.");

      return NextResponse.json(
        { success: true, message: "Message received! (SMTP not configured for sending)" },
        { status: 200 }
      );
    }

    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: body.email,
      subject: `Portfolio Contact: Message from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}

Message:
${body.message}

---
This message was sent via your portfolio contact form.
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 16px; }
    .label { font-weight: bold; color: #4b5563; }
    .value { margin-top: 4px; }
    .message-box { background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; }
    .footer { font-size: 12px; color: #6b7280; margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Message</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${body.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${body.email}">${body.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${body.message.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        This message was sent via your portfolio contact form.
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
