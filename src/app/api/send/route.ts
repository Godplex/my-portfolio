import { EmailTemplate } from "@/components/Contact/EmailTemplate";
import { IContactForm } from "@/interfaces/IContact";
import { NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData: IContactForm = await request.json();
  try {
    const data = await resend.emails.send({
      from: "IZ1X <onboarding@resend.dev>",
      to: ["julian1918@hotmail.es"],
      subject: "Mi portafolio",
      react: EmailTemplate(formData) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
