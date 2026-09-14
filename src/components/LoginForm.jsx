import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(form);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Adresse e-mail ou mot de passe incorrect.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-neutral-800/60 px-4 py-2.5 text-[15px] text-white placeholder-neutral-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-neutral-300";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="mb-1 text-2xl font-semibold text-white">Se connecter</h1>
      <p className="mb-8 text-sm text-neutral-400">Accédez à votre compte pour suivre vos commandes.</p>

      {error && (
        <div className="mb-5 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
      )}

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

      <div className="mb-6">
        <label htmlFor="password" className={labelClass}>
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={form.password}
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
        {submitting ? "Connexion..." : "Se connecter"}
      </button>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Pas encore de compte ?{" "}
        <Link to="/register" className="font-medium text-blue-400 hover:underline">
          Créer un compte
        </Link>
      </p>
    </form>
  );
}