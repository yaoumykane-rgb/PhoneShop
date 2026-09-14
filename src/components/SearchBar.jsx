import "./SearchBar.css";

/**
 * SearchBar — champ de recherche contrôlé.
 * Props:
 *  - value: string
 *  - onChange: (value: string) => void
 *  - placeholder?: string
 *  - tone?: "light" | "dark"   pour usage sur le hero sombre
 */
export default function SearchBar({ value, onChange, placeholder = "Rechercher un iPhone…", tone = "light" }) {
  return (
    <div className={`search-bar search-bar--${tone}`}>
      <svg className="search-bar__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <input
        type="text"
        className="search-bar__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Rechercher un iPhone"
      />

      {value && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange("")}
          aria-label="Effacer la recherche"
        >
          ×
        </button>
      )}
    </div>
  );
}
