// components/Sort.jsx
// Sélecteur de tri (prix / nom)

export default function Sort({ sortBy, onSortChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-neutral-500">Trier par</label>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm"
      >
        <option value="none">Pertinence</option>
        <option value="price_asc">Prix croissant</option>
        <option value="price_desc">Prix décroissant</option>
        <option value="name_asc">Nom (A → Z)</option>
        <option value="name_desc">Nom (Z → A)</option>
      </select>
    </div>
  );
}
