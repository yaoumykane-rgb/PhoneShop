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
    </form>
  );
}