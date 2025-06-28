"use server";

import { sendMail } from "@/nodemailer";

export async function getContactFormData(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    await sendMail(
      name as string,
      email as string,
      message as string,
      "mohabibrahim181@gmail.com"
    );
  } catch (err) {
    console.error(err);
  }
}
