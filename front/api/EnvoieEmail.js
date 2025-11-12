import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // TLS
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          ciphers: "SSLv3"
        }
      });
      

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message de ${name}`,
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erreur Nodemailer :", err);
    res.status(500).json({ error: err.message });
  }
}
