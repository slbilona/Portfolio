import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.OUTLOOK_USER,
      to: process.env.OUTLOOK_USER,
      subject: `Message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
    });

    res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi du message." });
  }
}
