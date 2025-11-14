import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "contacto@albertobautista.dev",
      to: "dachb_10@hotmail.com",
      subject: "Nuevo mensaje del formulario",
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Country:</strong> ${body.country}</p>
        <p><strong>Found us:</strong> ${body.foundUs}</p>
        <p><strong>Investment:</strong> ${body.investment}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
