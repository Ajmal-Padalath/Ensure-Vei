import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  try {
    // Configure transporter — update credentials via environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,   // your Gmail address e.g. sender@gmail.com
        pass: process.env.SMTP_PASS,   // Gmail App Password (not your login password)
      },
    });

    const now = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    await transporter.sendMail({
      from: `"Ensure Vei Website" <${process.env.SMTP_USER}>`,
      to: "ajmalpadalathkkv@gmail.com",
      subject: "🟢 WhatsApp Button Clicked – Ensure Vei Website",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;background:#0f172a;color:#e2e8f0;border-radius:12px;padding:32px;">
          <h2 style="color:#10b981;margin-top:0;">WhatsApp Lead Alert</h2>
          <p style="margin:0 0 16px;">A visitor just clicked the <strong>WhatsApp</strong> contact button on the Ensure Vei website.</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr>
              <td style="padding:8px 12px;background:#1e293b;border-radius:6px 6px 0 0;color:#94a3b8;width:40%;">Event</td>
              <td style="padding:8px 12px;background:#1e293b;border-radius:6px 6px 0 0;">WhatsApp Button Click</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#0f172a;color:#94a3b8;">Timestamp (IST)</td>
              <td style="padding:8px 12px;background:#0f172a;">${now}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#1e293b;color:#94a3b8;border-radius:0 0 6px 6px;">Contact Number</td>
              <td style="padding:8px 12px;background:#1e293b;border-radius:0 0 6px 6px;">+91 98765 43210</td>
            </tr>
          </table>
          <p style="margin:24px 0 0;font-size:12px;color:#64748b;">This is an automated notification from Ensure Vei Insurance India website.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("WhatsApp notify email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
