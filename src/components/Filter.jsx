// components/Filter.jsx
// Filtre par marque + filtre par fourchette de prix (FCFA)

export default function Filter({
  brands,
  brandFilter,
  onBrandChange,
  priceRange,
  onPriceChange,
  hideBrandFilter = false, // utile sur /categories/:id où la marque est déjà fixée
}) {
  const handleMinChange = (e) => {
    const min = e.target.value === "" ? 0 : Number(e.target.value);
    onPriceChange({ ...priceRange, min });
  };

  const handleMaxChange = (e) => {
    const max = e.target.value === "" ? Infinity : Number(e.target.value);
    onPriceChange({ ...priceRange, max });
  };

  return (
    <div className="flex flex-wrap items-end gap-4">
      {!hideBrandFilter && (
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-neutral-500">Marque</label>
          <select
            value={brandFilter}
            onChange={(e) => onBrandChange(e.target.value)}
            className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm"
          >
            <option value="all">Toutes les marques</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-neutral-500">Prix min (FCFA)</label>
        <input
          type="number"
          min="0"
          value={priceRange.min || ""}
          onChange={handleMinChange}
          placeholder="0"
          className="w-28 rounded-lg border border-neutral-300 px-3 py-2 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-neutral-500">Prix max (FCFA)</label>
        <input
          type="number"
          min="0"
          value={priceRange.max === Infinity ? "" : priceRange.max}
          onChange={handleMaxChange}
          placeholder="Illimité"
          className="w-28 rounded-lg border border-neutral-300 px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}
