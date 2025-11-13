// api/send.js
import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  try {
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
      username: "api", 
      key: process.env.MAILGUN_API_KEY,   // clé Mailgun
      url: "https://api.mailgun.net",
    });

    await client.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Formulaire Contact <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: ["ilona.selbonne@outlook.com"], // tu reçois le mail ici
      subject: `Message de ${name} via formulaire`,
      text: `
        Nom : ${name}
        Email : ${email}
        Message :
        ${message}
      `,
    });

    res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi du message." });
  }
}
