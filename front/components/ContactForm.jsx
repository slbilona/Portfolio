import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Gère les changements dans les champs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.message);

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("Une erreur est survenue lors de l'envoi du message.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-moi</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      {status && <p className="contact-status">{status}</p>}
    </div>
  );
}

export default ContactForm;
