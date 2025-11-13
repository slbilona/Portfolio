import { useState } from "react";

function FormulaireContact() {
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
		<form onSubmit={handleSubmit} className="rounded-lg flex flex-col space-y-4">
			<input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="border border-trois/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-quatre" required />
			<input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border border-trois/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-quatre" required />
			<textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="border border-trois/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-quatre h-32 resize-none" required />
			<button type="submit" className="px-2 md:px-4 py-1 text-xl md:text-2xl text-white hover:bg-quatre transition duration-150 bg-trois rounded-xl shadow-lg">
				Envoyer
			</button>
			{status && <p className="text-sm my-2 text-center">{status}</p>}
		</form>
	)
}

export default FormulaireContact
