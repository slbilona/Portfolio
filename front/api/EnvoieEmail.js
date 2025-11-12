import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Message de ${name}`,
        text: message,
      });
      res.status(200).json({ message: "Email envoyé !" });
    } catch (err) {
      res.status(500).json({ error: "Erreur lors de l'envoi" });
    }
  } else {
    res.status(405).end("Méthode non autorisée");
  }
}
