import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
};

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) errors.fullName = "Le nom complet est requis.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Adresse e-mail invalide.";
  }
  if (!form.address.trim()) errors.address = "L'adresse est requise.";
  if (!form.city.trim()) errors.city = "La ville est requise.";
  if (!/^\d{5}$/.test(form.postalCode)) {
    errors.postalCode = "Code postal invalide (5 chiffres).";
  }
  if (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, ""))) {
    errors.cardNumber = "Numéro de carte invalide (16 chiffres).";
  }
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry)) {
    errors.expiry = "Format attendu : MM/AA.";
  }
  if (!/^\d{3,4}$/.test(form.cvc)) errors.cvc = "CVC invalide.";

  return errors;
}

export default function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      await onSubmit(form);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="checkout-form__section">
        <legend>Livraison</legend>

        <label className="checkout-form__field">
          Nom complet
          <input
            type="text"
            value={form.fullName}
            onChange={handleChange("fullName")}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <span className="checkout-form__error">{errors.fullName}</span>}
        </label>

        <label className="checkout-form__field">
          E-mail
          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="checkout-form__error">{errors.email}</span>}
        </label>

        <label className="checkout-form__field">
          Adresse
          <input
            type="text"
            value={form.address}
            onChange={handleChange("address")}
            aria-invalid={!!errors.address}
          />
          {errors.address && <span className="checkout-form__error">{errors.address}</span>}
        </label>

        <div className="checkout-form__row">
          <label className="checkout-form__field">
            Ville
            <input
              type="text"
              value={form.city}
              onChange={handleChange("city")}
              aria-invalid={!!errors.city}
            />
            {errors.city && <span className="checkout-form__error">{errors.city}</span>}
          </label>

          <label className="checkout-form__field">
            Code postal
            <input
              type="text"
              inputMode="numeric"
              value={form.postalCode}
              onChange={handleChange("postalCode")}
              aria-invalid={!!errors.postalCode}
            />
            {errors.postalCode && (
              <span className="checkout-form__error">{errors.postalCode}</span>
            )}
          </label>
        </div>
      </fieldset>

      <fieldset className="checkout-form__section">
        <legend>Paiement</legend>

        <label className="checkout-form__field">
          Numéro de carte
          <input
            type="text"
            inputMode="numeric"
            placeholder="1234 5678 9012 3456"
            value={form.cardNumber}
            onChange={handleChange("cardNumber")}
            aria-invalid={!!errors.cardNumber}
          />
          {errors.cardNumber && (
            <span className="checkout-form__error">{errors.cardNumber}</span>
          )}
        </label>

        <div className="checkout-form__row">
          <label className="checkout-form__field">
            Expiration (MM/AA)
            <input
              type="text"
              placeholder="MM/AA"
              value={form.expiry}
              onChange={handleChange("expiry")}
              aria-invalid={!!errors.expiry}
            />
            {errors.expiry && <span className="checkout-form__error">{errors.expiry}</span>}
          </label>

          <label className="checkout-form__field">
            CVC
            <input
              type="text"
              inputMode="numeric"
              value={form.cvc}
              onChange={handleChange("cvc")}
              aria-invalid={!!errors.cvc}
            />
            {errors.cvc && <span className="checkout-form__error">{errors.cvc}</span>}
          </label>
        </div>
      </fieldset>

      <button type="submit" className="checkout-form__submit" disabled={submitting}>
        {submitting ? "Validation…" : "Confirmer la commande"}
      </button>
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