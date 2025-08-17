import nodemailer from "nodemailer";

export default async function handler(req, res) {
    console.log("we are in")
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ success: false, error: "Text is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "noctis.hive@gmail.com", // your Gmail
        pass: "zyzu icce duqf nwyb",   // your app password
      },
    });

    const info = await transporter.sendMail({
      from: '"Manjot" <noctis.hive@gmail.com>',
      to: "singhmanjot9922@gmail.com",
      subject: "Regarding Portfolio query",
      text: text,
    });

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}