import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL,
        reply_to: email,
        subject: `New message from ${name} — Portfolio`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
            <h2 style="margin:0 0 24px;font-size:20px;color:#0a0a0a;">
              New portfolio message
            </h2>

            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:10px 0;color:#666;width:80px;">Name</td>
                <td style="padding:10px 0;color:#0a0a0a;font-weight:500;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#666;">Email</td>
                <td style="padding:10px 0;">
                  <a href="mailto:${email}" style="color:#6b5ce7;">${email}</a>
                </td>
              </tr>
            </table>

            <div style="margin-top:24px;padding:20px;background:#ffffff;border-radius:6px;border:1px solid #e5e5e5;">
              <p style="margin:0 0 8px;font-size:13px;color:#999;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
              <p style="margin:0;font-size:15px;color:#0a0a0a;line-height:1.7;white-space:pre-wrap;">${message}</p>
            </div>

            <p style="margin-top:24px;font-size:12px;color:#aaa;">
              Sent from your portfolio at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}