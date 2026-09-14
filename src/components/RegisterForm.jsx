import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RegisterForm() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (form.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setSubmitting(true);
    try {
      const { confirmPassword, ...payload } = form;
      await register(payload);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Impossible de créer le compte. Réessaie.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-neutral-800/60 px-4 py-2.5 text-[15px] text-white placeholder-neutral-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-neutral-300";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="mb-1 text-2xl font-semibold text-white">Créer un compte</h1>
      <p className="mb-8 text-sm text-neutral-400">Rejoins-nous pour commander en quelques clics.</p>

      {error && (
        <div className="mb-5 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className={labelClass}>
          Nom complet
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Amadou Diop"
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
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="vous@exemple.com"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className={labelClass}>
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          value={form.password}
          onChange={handleChange}
          className={inputClass}
          placeholder="6 caractères minimum"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="confirmPassword" className={labelClass}>
          Confirmer le mot de passe
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          value={form.confirmPassword}
          onChange={handleChange}
          className={inputClass}
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-linear-to-br from-[#0071e3] to-[#0047a8] py-2.5 text-[15px] font-medium text-white transition hover:brightness-110 disabled:opacity-60"
      >
        {submitting ? "Création..." : "Créer mon compte"}
      </button>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Déjà un compte ?{" "}
        <Link to="/login" className="font-medium text-blue-400 hover:underline">
          Se connecter
        </Link>
      </p>
    </form>
  );
}