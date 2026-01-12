import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Create Gmail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arunkumars30101999@gmail.com", // your Gmail
      pass: "mgie ixss jitf jczl", // generated app password
    },
  });

  const info = await transporter.sendMail({
    from: '"Rayzen Power" <no-reply@rayzenpower.com>',
    to: "Selvam.arun100@gmail.com", // replace with your email
    subject: "New Contact Form Submission",
    text: JSON.stringify(data, null, 2),
  });

  console.log("Email sent:", info.messageId);

  return NextResponse.json({ message: "Email sent!" });
}
