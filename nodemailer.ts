import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER as string,
    pass: process.env.NODEMAILER_PASS as string,
  },
});

export async function sendMail(
  name: string,
  email: string,
  message: string,
  to: string
) {
  const mailOptions = {
    from: `"Portfolio Mailer" <mohabibrahim181@gmail.com>`,
    to,
    subject: "A Message From Portfolio Mailer",
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9f9f9; padding: 40px;">
            <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 32px;">
                <h2 style="color: #2d3748; margin-bottom: 16px;">You've Received a New Message</h2>
                <p style="font-size: 16px; color: #4a5568; margin-bottom: 24px;">
                    Dear Mohab,<br><br>
                    You have received a new message from your portfolio website. Please find the details below:
                </p>
                <table style="width: 100%; margin-bottom: 24px;">
                    <tr>
                        <td style="font-weight: bold; color: #2d3748; padding: 8px 0;">Name:</td>
                        <td style="color: #4a5568; padding: 8px 0;">${name}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; color: #2d3748; padding: 8px 0;">Email:</td>
                        <td style="color: #4a5568; padding: 8px 0;">${email}</td>
                    </tr>
                </table>
                <div style="background: #f1f5f9; border-left: 4px solid #3182ce; padding: 16px; border-radius: 4px; color: #2d3748; margin-bottom: 24px;">
                    <strong>Message:</strong>
                    <p style="margin: 8px 0 0 0; white-space: pre-line;">${message}</p>
                </div>
                <p style="font-size: 14px; color: #a0aec0; text-align: right; margin-top: 32px;">
                    Kind regards,<br>
                    Portfolio Mailer
                </p>
            </div>
        </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}
