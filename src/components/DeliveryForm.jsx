import React, { useState } from "react";

export default function DeliveryForm({ onContinue, onBack }) {
  const [form, setForm] = useState({
    adresse: "",
    ville: "Dakar",
    quartier: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onContinue) {
      onContinue(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 mr-3">
              2
            </span>
            Adresse de livraison
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Où souhaitez-vous recevoir votre commande ?
          </p>
        </div>

        {/* Adresse */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Adresse complète *
          </label>

          <input
            type="text"
            name="adresse"
            value={form.adresse}
            onChange={handleChange}
            placeholder="Ex : Avenue Cheikh Anta Diop"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Ville + quartier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ville *
            </label>

            <select
              name="ville"
              value={form.ville}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white outline-none focus:border-indigo-500"
            >
              <option value="Dakar">Dakar</option>
              <option value="Thiès">Thiès</option>
              <option value="Saint-Louis">Saint-Louis</option>
              <option value="Ziguinchor">Ziguinchor</option>
              <option value="Kaolack">Kaolack</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quartier *
            </label>

            <input
              type="text"
              name="quartier"
              value={form.quartier}
              onChange={handleChange}
              placeholder="Ex : Médina"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-indigo-500"
            />
          </div>

        </div>

        {/* Téléphone */}
        <div className="mt-5">
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
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Livraison */}
        <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <div className="flex gap-3">

            <div className="text-xl">
              🚚
            </div>

            <div>
              <p className="font-bold text-indigo-700">
                Livraison à domicile
              </p>

              <p className="text-sm text-indigo-600 mt-1">
                Votre commande sera livrée directement à l'adresse indiquée.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Boutons */}
      <div className="flex items-center justify-between">

        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          ← Retour
        </button>

        <button
          type="submit"
          className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-sm"
        >
          Continuer →
        </button>

      </div>

    </form>
  );
}