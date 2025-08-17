const nodemailer = require("nodemailer");

export async function sendMailHandler(text: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.EMAIL_USER, // store in .env
      pass: process.env.EMAIL_PASS, // store in .env
    },
  });

  const to = "singhmanjot9922@gmail.com";
  const subject = "Regarding Portfolio query";

  try {
    const info = await transporter.sendMail({
      from: `"Manjot" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}
