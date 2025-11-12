import { useState } from "react";

function FormulaireContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        try {
            const res = await fetch("/api/EnvoieEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus("Message envoyé ✅");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(data.error || "Erreur lors de l'envoi ❌");
            }
        } catch (error) {
            setStatus("Erreur lors de l'envoi ❌");
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-lg flex flex-col space-y-4">
            <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="border border-trois/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-quatre" required/>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border border-trois/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-quatre" required/>
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="border border-trois/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-quatre h-32 resize-none" required/>
            <button type="submit" className="px-2 md:px-4 py-1 text-xl md:text-2xl text-white hover:bg-quatre transition duration-150 bg-trois rounded-xl shadow-lg">
                Envoyer
            </button>
            {status && <p className="text-sm mt-2">{status}</p>}
        </form>
    )
}

export default FormulaireContact
