import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "../services/authService";

export default function ProfileForm() {
  const { user, updateUser } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const updated = await updateProfile(form);
      updateUser(updated);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "La mise à jour du profil a échoué.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-neutral-800/60 px-4 py-2.5 text-[15px] text-white placeholder-neutral-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-neutral-300";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      {error && (
        <div className="mb-5 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
      )}
      {success && (
        <div className="mb-5 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-400">
          Profil mis à jour avec succès.
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className={labelClass}>
          Nom complet
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className={labelClass}>
          Adresse e-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className={labelClass}>
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="+221 77 000 00 00"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="address" className={labelClass}>
          Adresse de livraison
        </label>
        <textarea
          id="address"
          name="address"
          rows={3}
          value={form.address}
          onChange={handleChange}
          className={`resize-none ${inputClass}`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-linear-to-br from-[#0071e3] to-[#0047a8] px-6 py-2.5 text-[15px] font-medium text-white transition hover:brightness-110 disabled:opacity-60"
      >
        {submitting ? "Enregistrement..." : "Enregistrer les modifications"}
      </button>
    </form>
  );
}