import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutForm() {
  const navigate = useNavigate();

  const { setCheckoutData } = useCart();

  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sauvegarder les informations dans le CartContext
    setCheckoutData(form);

    // Aller vers la livraison
    navigate("/delivery");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">

        {/* TITRE */}
        <div className="mb-7">
          <div className="flex items-center gap-3">

            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold">
              1
            </span>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Informations personnelles
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Renseignez vos coordonnées
              </p>
            </div>

          </div>
        </div>

        {/* CHAMPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PRÉNOM */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Prénom *
            </label>

            <input
              type="text"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              placeholder="Ex : Aminata"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          {/* NOM */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nom *
            </label>

            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Ex : Ndiaye"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          {/* TÉLÉPHONE */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Téléphone *
            </label>

            <input
              type="tel"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              placeholder="Ex : 77 123 45 67"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              E-mail *
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="exemple@gmail.com"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

        </div>

        {/* NOTE */}
        <div className="mt-7 rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-sm text-gray-500">
            🔒 Vos informations personnelles sont utilisées uniquement
            pour traiter votre commande.
          </p>
        </div>

      </div>

      {/* BOUTON */}
      <div className="flex justify-end">

        <button
          type="submit"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-md hover:shadow-lg"
        >
          Continuer vers la livraison
          <span className="ml-2">→</span>
        </button>

      </div>

    </form>
  );
}