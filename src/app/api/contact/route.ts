import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Create test SMTP transport (Ethereal)
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
      service: "gmail",
  auth: {
    user: "arunkumars30101999@gmail.com",  // your Gmail
    pass: "mgie ixss jitf jczl",    // the generated app password
  },
  });

  const info = await transporter.sendMail({
    from: '"Rayzen Power" <no-reply@rayzenpower.com>',
    to: "Selvam.arun100@gmail.com", // replace with your email
    subject: "New Contact Form Submission",
    text: JSON.stringify(data, null, 2),
  });

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  return NextResponse.json({ message: "Email sent!", preview: nodemailer.getTestMessageUrl(info) });
}
