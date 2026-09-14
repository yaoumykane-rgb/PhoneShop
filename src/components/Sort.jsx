import "./Sort.css";

export const SORT_OPTIONS = [
  { value: "relevance", label: "Pertinence" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "name-asc", label: "Nom (A → Z)" },
  { value: "name-desc", label: "Nom (Z → A)" },
];

/**
 * Sort — sélecteur de tri.
 * Props:
 *  - value: string
 *  - onChange: (value: string) => void
 *  - resultCount?: number
 */
export default function Sort({ value, onChange, resultCount }) {
  return (
    <div className="sort-bar">
      {typeof resultCount === "number" && (
        <span className="sort-bar__count">
          {resultCount} résultat{resultCount > 1 ? "s" : ""}
        </span>
      )}

      <label className="sort-bar__select">
        <span>Trier par</span>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
