import "./Filter.css";
import { formatFCFA } from "../data/iphones.js";

/**
 * Filter — panneau de filtres (série + prix).
 * Props:
 *  - groups?: { id, name }[]      liste filtrable (ex. séries iPhone), omise sur une page mono-série
 *  - groupLabel?: string          libellé de la section ("Série")
 *  - selectedGroupIds?: string[]
 *  - onGroupToggle?: (id: string) => void
 *  - priceBounds: { min: number, max: number }
 *  - priceRange: { min: number, max: number }
 *  - onPriceChange: (range: { min, max }) => void
 *  - onReset: () => void
 */
export default function Filter({
  groups,
  groupLabel = "Série",
  selectedGroupIds = [],
  onGroupToggle,
  priceBounds,
  priceRange,
  onPriceChange,
  onReset,
}) {
  const step = 5000;

  return (
    <aside className="filter-panel" aria-label="Filtres">
      <div className="filter-panel__head">
        <h3>Filtres</h3>
        <button type="button" className="filter-panel__reset" onClick={onReset}>
          Réinitialiser
        </button>
      </div>

      {groups && groups.length > 0 && (
        <section className="filter-group">
          <h4>{groupLabel}</h4>
          <ul className="filter-checklist">
            {groups.map((group) => (
              <li key={group.id}>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedGroupIds.includes(group.id)}
                    onChange={() => onGroupToggle(group.id)}
                  />
                  <span>{group.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="filter-group">
        <h4>Prix</h4>
        <div className="filter-price__values">
          <span>{formatFCFA(priceRange.min)}</span>
          <span>—</span>
          <span>{formatFCFA(priceRange.max)}</span>
        </div>

        <div className="filter-price__sliders">
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            step={step}
            value={priceRange.min}
            onChange={(e) => {
              const next = Math.min(Number(e.target.value), priceRange.max - step);
              onPriceChange({ ...priceRange, min: Math.max(priceBounds.min, next) });
            }}
            aria-label="Prix minimum"
          />
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            step={step}
            value={priceRange.max}
            onChange={(e) => {
              const next = Math.max(Number(e.target.value), priceRange.min + step);
              onPriceChange({ ...priceRange, max: Math.min(priceBounds.max, next) });
            }}
            aria-label="Prix maximum"
          />
        </div>
      </section>
    </aside>
  );
}
